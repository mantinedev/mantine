import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useCallbackRef, useDidUpdate, useIsomorphicEffect, useLatestRef } from '@mantine/hooks';
import { getDisplayMs, getTimerValue, TimerValue } from './get-timer-value';
import { parseDuration } from './parse-duration';

export interface TimerControllerOptions {
  /** Initial elapsed (stopwatch) or remaining (countdown) time in milliseconds, `0` by default */
  startMs?: number;

  /** Boundary the timer counts up to (stopwatch) or down to (countdown).
   * Defaults to `0` in countdown mode, open-ended in stopwatch mode */
  targetMs?: number;

  /** If set, the timer counts down instead of up, `false` by default */
  countdown?: boolean;

  /** Tick interval in milliseconds, `1000` by default */
  interval?: number;

  /** If set, the timer starts automatically on mount, `false` by default */
  autoStart?: boolean;

  /** Called on every tick with the current timer value */
  onTick?: (value: TimerValue) => void;

  /** Called once when the timer reaches its target boundary */
  onComplete?: () => void;
}

export interface TimerController {
  /** Current timer value split into `totalMs` and time segments */
  value: TimerValue;

  /** Alias of `value` */
  formatted: TimerValue;

  /** `true` while the timer is actively counting */
  running: boolean;

  /** `true` when the timer has been started and is currently paused */
  paused: boolean;

  /** Progress from `0` to `1` between `startMs` and `targetMs`, `0` when the boundary is not set */
  progress: number;

  /** Resolved tick interval in milliseconds */
  interval: number;

  /** Returns current timer value split into `totalMs` and time segments */
  getValue: () => TimerValue;

  /** Returns progress from `0` to `1` between `startMs` and `targetMs`, `0` when the boundary is not set */
  getProgress: () => number;

  /** Returns `true` while the timer is actively counting */
  isRunning: () => boolean;

  /** Returns `true` when the timer has been started and is currently paused */
  isPaused: () => boolean;

  /** Starts the timer from its current value */
  start: () => void;

  /** Pauses the timer, keeping the current value */
  pause: () => void;

  /** Resumes the timer from the current value */
  resume: () => void;

  /** Stops the timer and resets the value to `startMs` */
  reset: () => void;

  /** Resets the value to `startMs` and immediately starts the timer */
  restart: () => void;
}

export function useTimer(options: TimerControllerOptions = {}): TimerController {
  const {
    startMs = 0,
    targetMs,
    countdown = false,
    interval = 1000,
    autoStart,
    onTick,
    onComplete,
  } = options;

  const initialMs = Math.max(0, startMs);
  const lowerBound = countdown ? (targetMs ?? 0) : initialMs;
  const upperBound = countdown ? initialMs : targetMs;

  const [totalMs, setTotalMs] = useState(() =>
    getDisplayMs(initialMs, interval, countdown, initialMs, lowerBound)
  );
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [runToken, setRunToken] = useState(0);

  const totalMsRef = useRef(initialMs);
  const displayMsRef = useRef(totalMs);
  const baseValueRef = useRef(initialMs);
  const startedAtRef = useRef(0);
  const runningRef = useRef(false);
  const pausedRef = useRef(false);
  const completedRef = useRef(false);

  const handleTick = useCallbackRef(onTick);
  const handleComplete = useCallbackRef(onComplete);

  const latest = useLatestRef({ countdown, interval, initialMs, lowerBound, upperBound });

  const toDisplayMs = (raw: number) =>
    getDisplayMs(
      raw,
      latest.current.interval,
      latest.current.countdown,
      latest.current.initialMs,
      latest.current.lowerBound
    );

  const setDisplay = (raw: number) => {
    const displayMs = toDisplayMs(raw);
    totalMsRef.current = raw;
    displayMsRef.current = displayMs;
    setTotalMs(displayMs);
  };

  const setStatus = (nextRunning: boolean, nextPaused: boolean) => {
    runningRef.current = nextRunning;
    pausedRef.current = nextPaused;
    setRunning(nextRunning);
    setPaused(nextPaused);
  };

  const clampValue = useCallback((raw: number) => {
    if (latest.current.countdown) {
      return Math.max(latest.current.lowerBound, raw);
    }
    return latest.current.upperBound !== undefined
      ? Math.min(raw, latest.current.upperBound)
      : Math.max(0, raw);
  }, []);

  const isCompleteValue = useCallback((value: number) => {
    if (latest.current.countdown) {
      return value <= latest.current.lowerBound;
    }
    return latest.current.upperBound !== undefined && value >= latest.current.upperBound;
  }, []);

  const computeCurrent = useCallback(() => {
    const elapsed = Date.now() - startedAtRef.current;
    const raw = latest.current.countdown
      ? baseValueRef.current - elapsed
      : baseValueRef.current + elapsed;
    return clampValue(raw);
  }, [clampValue]);

  const complete = useCallback(() => {
    setStatus(false, false);
    if (!completedRef.current) {
      completedRef.current = true;
      handleComplete();
    }
  }, []);

  const runFrom = useCallback(
    (value: number) => {
      if (isCompleteValue(value)) {
        setDisplay(value);
        complete();
        return;
      }

      completedRef.current = false;
      baseValueRef.current = value;
      startedAtRef.current = Date.now();
      setDisplay(value);
      setStatus(true, false);
      setRunToken((token) => token + 1);
    },
    [complete, isCompleteValue]
  );

  const start = useCallback(() => {
    if (runningRef.current) {
      return;
    }
    runFrom(totalMsRef.current);
  }, [runFrom]);

  const pause = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    const current = computeCurrent();
    baseValueRef.current = current;
    setDisplay(current);
    setStatus(false, true);
  }, [computeCurrent]);

  const reset = useCallback(() => {
    completedRef.current = false;
    baseValueRef.current = latest.current.initialMs;
    setDisplay(latest.current.initialMs);
    setStatus(false, false);
  }, []);

  const restart = useCallback(() => {
    runFrom(latest.current.initialMs);
  }, [runFrom]);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    let timeoutId: number;

    const distanceToBoundary = (current: number) =>
      latest.current.countdown
        ? current - latest.current.lowerBound
        : latest.current.upperBound === undefined
          ? Infinity
          : latest.current.upperBound - current;

    const scheduleNext = () => {
      const elapsed = Date.now() - startedAtRef.current;
      const aligned = interval - (elapsed % interval);
      const delay = Math.max(0, Math.min(aligned, distanceToBoundary(computeCurrent())));
      timeoutId = window.setTimeout(tick, delay);
    };

    function tick() {
      if (!runningRef.current) {
        return;
      }

      const current = computeCurrent();
      setDisplay(current);
      handleTick(getTimerValue(toDisplayMs(current)));

      if (isCompleteValue(current)) {
        complete();
        return;
      }

      scheduleNext();
    }

    scheduleNext();

    return () => window.clearTimeout(timeoutId);
  }, [running, runToken, interval, computeCurrent, isCompleteValue, complete]);

  useIsomorphicEffect(() => {
    if (autoStart) {
      runFrom(latest.current.initialMs);
    }
  }, []);

  useDidUpdate(() => {
    reset();
  }, [initialMs, countdown]);

  const value = useMemo(() => getTimerValue(totalMs), [totalMs]);

  const getProgressFor = useCallback(
    (displayMs: number) => {
      const bounds = latest.current;
      if (bounds.upperBound === undefined) {
        return 0;
      }
      const span = bounds.countdown
        ? bounds.initialMs - bounds.lowerBound
        : bounds.upperBound - bounds.initialMs;
      if (span <= 0) {
        return isCompleteValue(displayMs) ? 1 : 0;
      }
      const traveled = bounds.countdown
        ? bounds.initialMs - displayMs
        : displayMs - bounds.initialMs;
      return Math.min(1, Math.max(0, traveled / span));
    },
    [isCompleteValue]
  );

  const progress = useMemo(
    () => getProgressFor(totalMs),
    [totalMs, countdown, initialMs, lowerBound, upperBound, getProgressFor]
  );

  const valueRef = useLatestRef(value);

  const getValue = useCallback(() => {
    const displayMs = displayMsRef.current;
    return displayMs === valueRef.current.totalMs ? valueRef.current : getTimerValue(displayMs);
  }, []);
  const getProgress = useCallback(() => getProgressFor(displayMsRef.current), []);
  const isRunning = useCallback(() => runningRef.current, []);
  const isPaused = useCallback(() => pausedRef.current, []);

  return useMemo(
    () => ({
      value,
      formatted: value,
      running,
      paused,
      progress,
      interval,
      getValue,
      getProgress,
      isRunning,
      isPaused,
      start,
      pause,
      resume: start,
      reset,
      restart,
    }),
    [value, running, paused, progress, interval]
  );
}

useTimer.parse = parseDuration;
