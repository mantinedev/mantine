import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useCallbackRef } from '../utils';

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

  /** Tick interval in milliseconds, `1000` by default */
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

function getTargetTime(targetDate: Date | number | string): number {
  return new Date(targetDate).getTime();
}

export function useCountdown(options: UseCountdownOptions = {}): UseCountdownReturnValue {
  const { targetDate, countStart, interval = 1000, autoStart, onComplete, onTick } = options;

  const isTargetMode = targetDate !== undefined && targetDate !== null;
  const clampedCountStart = Math.max(0, countStart ?? 0);
  const resolvedAutoStart = autoStart ?? isTargetMode;

  const [count, setCount] = useState(() => (isTargetMode ? 0 : clampedCountStart));
  const [running, setRunning] = useState(false);

  const endRef = useRef(0);
  const countRef = useRef(count);
  const runningRef = useRef(false);
  const completedRef = useRef(false);
  const initializedRef = useRef(false);
  const optionsRef = useRef({ targetDate, clampedCountStart });
  optionsRef.current = { targetDate, clampedCountStart };

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

  const syncToEnd = useCallback((end: number) => {
    const remaining = Number.isNaN(end) ? 0 : Math.max(0, end - Date.now());
    endRef.current = end;
    setCountState(remaining);
    return remaining;
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

    if (syncToEnd(getEnd(true)) > 0) {
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

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    const id = window.setInterval(() => {
      const remaining = Math.max(0, endRef.current - Date.now());
      setCountState(remaining);
      handleTick(remaining);

      if (remaining <= 0) {
        window.clearInterval(id);
        complete();
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [running, interval]);

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

    if (syncToEnd(targetTime) <= 0) {
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

  const formatted = useMemo(() => formatCountdown(count), [count]);

  return { count, formatted, running, start, stop, reset };
}

export namespace useCountdown {
  export type Options = UseCountdownOptions;
  export type ReturnValue = UseCountdownReturnValue;
  export type Formatted = UseCountdownFormatted;
}
