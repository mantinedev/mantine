export interface TimerValue {
  /** Total number of milliseconds elapsed (stopwatch) or remaining (countdown), never less than `0` */
  totalMs: number;

  /** Number of whole days */
  days: number;

  /** Number of whole hours (0–23) */
  hours: number;

  /** Number of whole minutes (0–59) */
  minutes: number;

  /** Number of whole seconds (0–59) */
  seconds: number;

  /** Number of remaining milliseconds (0–999) */
  milliseconds: number;
}

export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 60_000;
export const MS_PER_HOUR = 3_600_000;
export const MS_PER_DAY = 86_400_000;

export function getDisplayMs(
  rawMs: number,
  interval: number,
  countdown: boolean,
  startMs = 0,
  lowerBound = 0
): number {
  if (!countdown || interval <= 0) {
    return Math.max(0, rawMs);
  }

  if (rawMs <= lowerBound) {
    return lowerBound;
  }

  const completedIntervals = Math.floor((startMs - rawMs) / interval);
  return Math.max(lowerBound, startMs - completedIntervals * interval);
}

export function getTimerValue(totalMs: number): TimerValue {
  const clamped = Math.max(0, totalMs);

  return {
    totalMs: clamped,
    days: Math.floor(clamped / MS_PER_DAY),
    hours: Math.floor((clamped / MS_PER_HOUR) % 24),
    minutes: Math.floor((clamped / MS_PER_MINUTE) % 60),
    seconds: Math.floor((clamped / MS_PER_SECOND) % 60),
    milliseconds: Math.floor(clamped % 1000),
  };
}
