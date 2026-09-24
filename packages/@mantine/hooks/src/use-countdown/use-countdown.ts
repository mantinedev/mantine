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
  /** Target date to count down to. Mutually exclusive with `countStart`, clearing it stops the countdown */
  targetDate?: Date | number | string;

  /** Duration in milliseconds to count down from, used in controllable mode */
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

  /** Stops the countdown and resets `count` to the initial value */
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
  const countRef = useLatestRef(count);
  const runningRef = useRef(false);
  const completedRef = useRef(false);

  const handleComplete = useCallbackRef(onComplete);
  const handleTick = useCallbackRef(onTick);

  const latest = useLatestRef({ isTargetMode, targetDate, clampedCountStart, resolvedAutoStart });

  const complete = useCallback(() => {
    runningRef.current = false;
    setRunning(false);
    if (!completedRef.current) {
      completedRef.current = true;
      handleComplete();
    }
  }, []);

  const start = useCallback(() => {
    if (runningRef.current) {
      return;
    }

    let end: number;
    if (latest.current.isTargetMode) {
      end = getTargetTime(latest.current.targetDate!);
    } else {
      const base = countRef.current > 0 ? countRef.current : latest.current.clampedCountStart;
      end = Date.now() + base;
    }

    endRef.current = end;
    completedRef.current = false;

    const remaining = Math.max(0, end - Date.now());
    setCount(remaining);

    if (remaining <= 0) {
      complete();
      return;
    }

    runningRef.current = true;
    setRunning(true);
  }, [complete]);

  const stop = useCallback(() => {
    if (runningRef.current) {
      const remaining = Math.max(0, endRef.current - Date.now());
      countRef.current = remaining;
      setCount(remaining);
    }
    runningRef.current = false;
    setRunning(false);
  }, []);

  const reset = useCallback(() => {
    runningRef.current = false;
    setRunning(false);
    completedRef.current = false;

    if (latest.current.isTargetMode) {
      const end = getTargetTime(latest.current.targetDate!);
      endRef.current = end;
      const remaining = Math.max(0, end - Date.now());
      countRef.current = remaining;
      setCount(remaining);
    } else {
      endRef.current = 0;
      countRef.current = latest.current.clampedCountStart;
      setCount(latest.current.clampedCountStart);
    }
  }, []);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    const id = window.setInterval(() => {
      const remaining = Math.max(0, endRef.current - Date.now());
      setCount(remaining);
      handleTick(remaining);

      if (remaining <= 0) {
        window.clearInterval(id);
        complete();
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [running, interval, complete]);

  useIsomorphicEffect(() => {
    if (resolvedAutoStart) {
      start();
    } else if (latest.current.isTargetMode) {
      const end = getTargetTime(latest.current.targetDate!);
      endRef.current = end;
      const remaining = Math.max(0, end - Date.now());
      countRef.current = remaining;
      setCount(remaining);
    }
  }, []);

  const targetTime = isTargetMode ? getTargetTime(targetDate!) : null;

  useDidUpdate(() => {
    if (targetTime === null) {
      runningRef.current = false;
      setRunning(false);
      completedRef.current = false;
      endRef.current = 0;
      countRef.current = latest.current.clampedCountStart;
      setCount(latest.current.clampedCountStart);
      return;
    }

    const wasRunning = runningRef.current;
    endRef.current = targetTime;
    completedRef.current = false;

    const remaining = Math.max(0, targetTime - Date.now());
    setCount(remaining);

    if (remaining <= 0) {
      complete();
      return;
    }

    if (!wasRunning && latest.current.resolvedAutoStart) {
      start();
    }
  }, [targetTime]);

  const formatted = useMemo(() => formatCountdown(count), [count]);

  return { count, formatted, running, start, stop, reset };
}

export namespace useCountdown {
  export type Options = UseCountdownOptions;
  export type ReturnValue = UseCountdownReturnValue;
  export type Formatted = UseCountdownFormatted;
}
