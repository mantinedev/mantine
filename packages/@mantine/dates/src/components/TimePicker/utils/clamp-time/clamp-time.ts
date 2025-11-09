import { secondsToTime, timeToSeconds } from '../time-to-seconds/time-to-seconds';

export function clampTime(time: string, min: string | undefined, max: string | undefined) {
  const timeInSeconds = timeToSeconds(time);
  const minInSeconds = min ? timeToSeconds(min) : -Infinity;
  const maxInSeconds = max ? timeToSeconds(max) : Infinity;

  const clampedSeconds = Math.max(minInSeconds, Math.min(timeInSeconds, maxInSeconds));
  return secondsToTime(clampedSeconds);
}
