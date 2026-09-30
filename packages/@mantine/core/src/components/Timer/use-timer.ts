import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  clamp,
  useCallbackRef,
  useDidUpdate,
  useIsomorphicEffect,
  useLatestRef,
} from '@mantine/hooks';
import { getDisplayMs, getTimerValue, TimerValue } from './get-timer-value';
import { parseDuration } from './parse-duration';

export interface TimerControllerOptions {
  /** Initial elapsed (stopwatch) or remaining (countdown) time in milliseconds, `0` by default.
   * Changing `startMs` or `countdown` stops the timer and resets it to the new `startMs` */
  startMs?: number;

  /** Boundary the timer counts up to (stopwatch) or down to (countdown).
   * Defaults to `0` in countdown mode, open-ended in stopwatch mode. If `startMs` is already at or past the boundary,
   * the timer completes immediately when started */
  targetMs?: number;

  /** If set, the timer counts down instead of up, `false` by default */
  countdown?: boolean;

  /** Tick interval in milliseconds, `1000` by default, values below `1` are clamped to `1` */
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

  /** `true` while the timer is actively counting */
  running: boolean;

  /** `true` when the timer has been started and is currently paused */
  paused: boolean;

  /** Progress from `0` to `1` between `startMs` and `targetMs`, `0` when the boundary is not set */
  progress: number;

  /** Returns current timer value split into `totalMs` and time segments */
  getValue: () => TimerValue;

  /** Returns progress from `0` to `1` between `startMs` and `targetMs`, `0` when the boundary is not set */
  getProgress: () => number;

  /** Returns `true` while the timer is actively counting */
  isRunning: () => boolean;

  /** Returns `true` when the timer has been started and is currently paused */
  isPaused: () => boolean;

  /** Starts the timer from its current value, or restarts it from `startMs` after it has completed */
  start: () => void;

  /** Pauses the timer, keeping the current value */
  pause: () => void;

  /** Alias of `start`, resumes a paused timer from its current value */
  resume: () => void;

  /** Stops the timer and resets the value to `startMs` */
  reset: () => void;

  /** Resets the value to `startMs` and immediately starts the timer */
  restart: () => void;
}

interface TimerBounds {
  countdown: boolean;
  lowerBound: number;
  upperBound: number | undefined;
}

function getDistanceToBoundary(value: number, bounds: TimerBounds) {
  return bounds.countdown ? value - bounds.lowerBound : (bounds.upperBound ?? Infinity) - value;
}

export function useTimer(options: TimerControllerOptions = {}): TimerController {
  const {
    startMs = 0,
    targetMs,
    countdown = false,
    interval: intervalOption = 1000,
    autoStart,
    onTick,
    onComplete,
  } = options;

  const interval = Math.max(1, intervalOption);
  const clampedStartMs = Math.max(0, startMs);
  const lowerBound = countdown ? (targetMs ?? 0) : clampedStartMs;
  const upperBound = countdown ? clampedStartMs : targetMs;

  const [totalMs, setTotalMs] = useState(() =>
    getDisplayMs(clampedStartMs, interval, countdown, clampedStartMs, lowerBound)
  );
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [runId, setRunId] = useState(0);

  const rawMsRef = useRef(clampedStartMs);
  const displayMsRef = useRef(totalMs);
  const runBaseMsRef = useRef(clampedStartMs);
  const startedAtRef = useRef(0);
  const runningRef = useRef(false);
  const pausedRef = useRef(false);
  const completedRef = useRef(false);
  const initializedRef = useRef(false);
  const optionsRef = useLatestRef({ countdown, interval, clampedStartMs, lowerBound, upperBound });

  const handleTick = useCallbackRef(onTick);
  const handleComplete = useCallbackRef(onComplete);

  const isComplete = useCallback(
    (rawMs: number) => getDistanceToBoundary(rawMs, optionsRef.current) <= 0,
    []
  );

  const setStatus = useCallback((nextRunning: boolean, nextPaused: boolean) => {
    runningRef.current = nextRunning;
    pausedRef.current = nextPaused;
    setRunning(nextRunning);
    setPaused(nextPaused);
  }, []);

  const setDisplay = useCallback((rawMs: number) => {
    const options = optionsRef.current;
    const displayMs = getDisplayMs(
      rawMs,
      options.interval,
      options.countdown,
      options.clampedStartMs,
      options.lowerBound
    );
    rawMsRef.current = rawMs;
    displayMsRef.current = displayMs;
    setTotalMs(displayMs);
    return displayMs;
  }, []);

  const computeCurrent = useCallback(() => {
    const options = optionsRef.current;
    const elapsed = Date.now() - startedAtRef.current;
    const rawMs = options.countdown
      ? runBaseMsRef.current - elapsed
      : runBaseMsRef.current + elapsed;
    return clamp(rawMs, options.lowerBound, options.upperBound ?? Infinity);
  }, []);

  const complete = useCallback(() => {
    setStatus(false, false);
    if (!completedRef.current) {
      completedRef.current = true;
      handleComplete();
    }
  }, []);

  const runFrom = useCallback((rawMs: number) => {
    setDisplay(rawMs);

    if (isComplete(rawMs)) {
      complete();
      return;
    }

    completedRef.current = false;
    runBaseMsRef.current = rawMs;
    startedAtRef.current = Date.now();
    setStatus(true, false);
    setRunId((id) => id + 1);
  }, []);

  const start = useCallback(() => {
    if (runningRef.current) {
      return;
    }

    const finished = completedRef.current || isComplete(rawMsRef.current);
    runFrom(finished ? optionsRef.current.clampedStartMs : rawMsRef.current);
  }, []);

  const pause = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    const current = computeCurrent();
    runBaseMsRef.current = current;
    setDisplay(current);

    if (isComplete(current)) {
      complete();
      return;
    }

    setStatus(false, true);
  }, []);

  const reset = useCallback(() => {
    completedRef.current = false;
    runBaseMsRef.current = optionsRef.current.clampedStartMs;
    setDisplay(optionsRef.current.clampedStartMs);
    setStatus(false, false);
  }, []);

  const restart = useCallback(() => {
    runFrom(optionsRef.current.clampedStartMs);
  }, []);

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    let timeoutId: number;

    function scheduleNext() {
      const current = computeCurrent();
      const options = optionsRef.current;
      const msTraveled = options.countdown
        ? options.clampedStartMs - current
        : current - options.clampedStartMs;
      const msIntoInterval =
        ((msTraveled % options.interval) + options.interval) % options.interval;
      const msToNextGridLine = options.interval - msIntoInterval;
      const delay = Math.min(msToNextGridLine, getDistanceToBoundary(current, options));
      timeoutId = window.setTimeout(tick, Math.max(0, delay));
    }

    function tick() {
      if (!runningRef.current) {
        return;
      }

      const current = computeCurrent();
      handleTick(getTimerValue(setDisplay(current)));

      if (isComplete(current)) {
        complete();
        return;
      }

      scheduleNext();
    }

    scheduleNext();

    return () => window.clearTimeout(timeoutId);
  }, [running, runId, interval, lowerBound, upperBound]);

  useIsomorphicEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    if (autoStart) {
      runFrom(clampedStartMs);
    }
  }, []);

  useDidUpdate(() => {
    reset();
  }, [clampedStartMs, countdown]);

  const value = useMemo(() => getTimerValue(totalMs), [totalMs]);

  const getProgressFor = useCallback((displayMs: number) => {
    const bounds = optionsRef.current;
    if (bounds.upperBound === undefined) {
      return 0;
    }

    const span = bounds.upperBound - bounds.lowerBound;
    if (span <= 0) {
      return getDistanceToBoundary(displayMs, bounds) <= 0 ? 1 : 0;
    }

    const traveled = bounds.countdown
      ? bounds.clampedStartMs - displayMs
      : displayMs - bounds.clampedStartMs;
    return Math.min(1, Math.max(0, traveled / span));
  }, []);

  const progress = useMemo(
    () => getProgressFor(totalMs),
    [totalMs, countdown, clampedStartMs, lowerBound, upperBound]
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
      running,
      paused,
      progress,
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
    [value, running, paused, progress]
  );
}

useTimer.parse = parseDuration;

export namespace useTimer {
  export type Options = TimerControllerOptions;
  export type ReturnValue = TimerController;
  export type Value = TimerValue;
}
