import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useCallbackRef, useLatestRef } from '../utils';

export interface UseCountdownFormatted {
  /** Number of whole days remaining */
  days: number;

  /** Number of whole hours remaining (0–23) */
  hours: number;

  /** Number of whole minutes remaining (0–59) */
  minutes: number;

  /** Number of whole seconds remaining (0–59) */
  seconds: number;

  /** Number of remaining milliseconds (0–999) */
  milliseconds: number;
}

export interface UseCountdownOptions {
  /** Target date to count down to. Mutually exclusive with `countStart`, clearing it stops the countdown
   * and resets `count` to `countStart`. An invalid date results in `count` of `0`, the countdown does not run
   * and `onComplete` is not called */
  targetDate?: Date | number | string;

  /** Duration in milliseconds to count down from in `countStart` mode,
   * changing it while the countdown is not running resets `count` */
  countStart?: number;

  /** Tick interval in milliseconds, `1000` by default. In `targetDate` mode ticks are aligned to the target,
   * so `count` starts rounded up to and each tick reports a whole number of intervals before it. Values below `1` are clamped to `1` */
  interval?: number;

  /** Determines whether the countdown should start automatically,
   * `true` by default in `targetDate` mode, `false` by default in `countStart` mode */
  autoStart?: boolean;

  /** Called once when the countdown reaches `0` */
  onComplete?: () => void;

  /** Called on every tick with the remaining number of milliseconds */
  onTick?: (count: number) => void;
}

export interface UseCountdownReturnValue {
  /** Remaining number of milliseconds, never less than `0` */
  count: number;

  /** Remaining time split into days, hours, minutes, seconds and milliseconds */
  formatted: UseCountdownFormatted;

  /** `true` while the countdown is running */
  running: boolean;

  /** Starts the countdown. In `countStart` mode resumes from the current `count`,
   * or restarts from `countStart` if the countdown has already reached `0` */
  start: () => void;

  /** Stops the countdown, keeps the current `count` value */
  stop: () => void;

  /** Stops the countdown and resets `count` to `countStart`, or to the time remaining until `targetDate` */
  reset: () => void;
}

function formatCountdown(count: number): UseCountdownFormatted {
  return {
    days: Math.floor(count / 86_400_000),
    hours: Math.floor((count / 3_600_000) % 24),
    minutes: Math.floor((count / 60_000) % 60),
    seconds: Math.floor((count / 1000) % 60),
    milliseconds: Math.floor(count % 1000),
  };
}

interface TickGridInput {
  now: number;
  end: number;
  startedAt: number;
  interval: number;
  alignToEnd: boolean;
}

function positiveModulo(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

function getNextTickDelay({ now, end, startedAt, interval, alignToEnd }: TickGridInput) {
  const gridOrigin = alignToEnd ? end : startedAt;
  const toNextGridLine = positiveModulo(gridOrigin - now - 1, interval) + 1;
  return Math.max(0, Math.min(end - now, toNextGridLine));
}

function getGridRemaining({ now, end, startedAt, interval, alignToEnd }: TickGridInput) {
  if (now >= end) {
    return 0;
  }

  const gridOrigin = alignToEnd ? end : startedAt;
  const gridNow = gridOrigin + Math.round((now - gridOrigin) / interval) * interval;
  return Math.max(0, end - gridNow);
}

function getTargetTime(targetDate: Date | number | string): number {
  return new Date(targetDate).getTime();
}

export function useCountdown(options: UseCountdownOptions = {}): UseCountdownReturnValue {
  const {
    targetDate,
    countStart,
    interval: intervalOption = 1000,
    autoStart,
    onComplete,
    onTick,
  } = options;

  const interval = Math.max(1, intervalOption);

  const isTargetMode = targetDate !== undefined && targetDate !== null;
  const clampedCountStart = Math.max(0, countStart ?? 0);
  const resolvedAutoStart = autoStart ?? isTargetMode;

  const [count, setCount] = useState(() => (isTargetMode ? 0 : clampedCountStart));
  const [running, setRunning] = useState(false);

  const endRef = useRef(0);
  const anchorRef = useRef(0);
  const countRef = useRef(count);
  const runningRef = useRef(false);
  const completedRef = useRef(false);
  const initializedRef = useRef(false);
  const optionsRef = useLatestRef({ targetDate, clampedCountStart, interval });

  const handleComplete = useCallbackRef(onComplete);
  const handleTick = useCallbackRef(onTick);

  const setRunningState = useCallback((value: boolean) => {
    runningRef.current = value;
    setRunning(value);
  }, []);

  const setCountState = useCallback((value: number) => {
    countRef.current = value;
    setCount(value);
  }, []);

  const syncToEnd = useCallback((end: number, alignToGrid = false) => {
    const exact = Number.isNaN(end) ? 0 : Math.max(0, end - Date.now());
    const step = optionsRef.current.interval;
    const remaining = alignToGrid ? Math.ceil(exact / step) * step : exact;
    endRef.current = end;
    setCountState(remaining);
    return remaining;
  }, []);

  const isTargetModeCurrent = useCallback(() => {
    const current = optionsRef.current.targetDate;
    return current !== undefined && current !== null;
  }, []);

  const getEnd = useCallback((resume: boolean) => {
    const current = optionsRef.current;
    if (current.targetDate !== undefined && current.targetDate !== null) {
      return getTargetTime(current.targetDate);
    }

    const base = resume && countRef.current > 0 ? countRef.current : current.clampedCountStart;
    return Date.now() + base;
  }, []);

  const complete = useCallback(() => {
    setRunningState(false);
    if (!completedRef.current && !Number.isNaN(endRef.current)) {
      completedRef.current = true;
      handleComplete();
    }
  }, []);

  const start = useCallback(() => {
    if (runningRef.current) {
      return;
    }

    if (syncToEnd(getEnd(true), isTargetModeCurrent()) > 0) {
      anchorRef.current = Date.now();
      completedRef.current = false;
      setRunningState(true);
    } else {
      complete();
    }
  }, []);

  const stop = useCallback(() => {
    if (runningRef.current) {
      syncToEnd(endRef.current);
    }
    setRunningState(false);
  }, []);

  const reset = useCallback(() => {
    setRunningState(false);
    syncToEnd(getEnd(false));
  }, []);

  useIsomorphicEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    if (resolvedAutoStart) {
      start();
    } else {
      reset();
    }
  }, []);

  const targetTime = isTargetMode ? getTargetTime(targetDate) : null;

  useDidUpdate(() => {
    if (targetTime === null) {
      reset();
      return;
    }

    if (syncToEnd(targetTime, runningRef.current) <= 0) {
      complete();
    } else if (!runningRef.current && resolvedAutoStart) {
      start();
    }
  }, [targetTime]);

  useDidUpdate(() => {
    if (!isTargetMode && !runningRef.current) {
      syncToEnd(getEnd(false));
    }
  }, [clampedCountStart]);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    let timeoutId = -1;

    const getGridInput = (): TickGridInput => ({
      now: Date.now(),
      end: endRef.current,
      startedAt: anchorRef.current,
      interval,
      alignToEnd: isTargetMode,
    });

    const schedule = () => {
      timeoutId = window.setTimeout(tick, getNextTickDelay(getGridInput()));
    };

    const scheduleAfter = (reportedRemaining: number) => {
      const now = Date.now();
      const nextGridLineAt = endRef.current - reportedRemaining + interval;
      const delay = Math.min(endRef.current, nextGridLineAt) - now;
      timeoutId = window.setTimeout(tick, Math.max(1, delay));
    };

    const tick = () => {
      if (!runningRef.current) {
        return;
      }

      const remaining = getGridRemaining(getGridInput());
      setCountState(remaining);
      handleTick(remaining);

      if (remaining <= 0) {
        complete();
      } else {
        scheduleAfter(remaining);
      }
    };

    schedule();

    return () => window.clearTimeout(timeoutId);
  }, [running, interval, targetTime]);

  const formatted = useMemo(() => formatCountdown(count), [count]);

  return { count, formatted, running, start, stop, reset };
}

export namespace useCountdown {
  export type Options = UseCountdownOptions;
  export type ReturnValue = UseCountdownReturnValue;
  export type Formatted = UseCountdownFormatted;
}
