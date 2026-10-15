import { timeToSeconds } from '../time-to-seconds/time-to-seconds';

interface IsTimeOutOfRangeInput {
  hours: number;
  minutes: number | null;
  seconds: number | null;
  min: string | undefined;
  max: string | undefined;
  withSeconds: boolean;
}

export function isTimeOutOfRange({
  hours,
  minutes,
  seconds,
  min,
  max,
  withSeconds,
}: IsTimeOutOfRangeInput) {
  if (!min && !max) {
    return false;
  }

  let minInSeconds = min ? timeToSeconds(min) : -Infinity;
  let maxInSeconds = max ? timeToSeconds(max) : Infinity;

  if (!withSeconds) {
    minInSeconds = Math.ceil(minInSeconds / 60) * 60;
    maxInSeconds = Math.floor(maxInSeconds / 60) * 60;
  }

  const lastSecond = withSeconds ? 59 : 0;
  const start = hours * 3600 + (minutes ?? 0) * 60 + (withSeconds ? (seconds ?? 0) : 0);
  const end = hours * 3600 + (minutes ?? 59) * 60 + (withSeconds ? (seconds ?? lastSecond) : 0);

  return end < minInSeconds || start > maxInSeconds;
}
