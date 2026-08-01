import { secondsToTime, timeToSeconds } from '../time-to-seconds/time-to-seconds';

export function clampTime(
  time: string,
  min: string | undefined,
  max: string | undefined,
  withSeconds = true
) {
  const timeInSeconds = timeToSeconds(time);
  let minInSeconds = min ? timeToSeconds(min) : -Infinity;
  let maxInSeconds = max ? timeToSeconds(max) : Infinity;

  if (!withSeconds) {
    minInSeconds = Math.ceil(minInSeconds / 60) * 60;
    maxInSeconds = Math.floor(maxInSeconds / 60) * 60;
  }

  const clampedSeconds = Math.max(minInSeconds, Math.min(timeInSeconds, maxInSeconds));
  const clamped = secondsToTime(clampedSeconds);

  if (!withSeconds) {
    return { ...clamped, timeString: clamped.timeString.split(':').slice(0, 2).join(':') };
  }

  return clamped;
}
