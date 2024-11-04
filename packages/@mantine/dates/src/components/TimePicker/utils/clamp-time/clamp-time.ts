import { secondsToTime, timeToSeconds } from '../time-to-seconds/time-to-seconds';

export function clampTime(time: string, min: string, max: string) {
  const timeInSeconds = timeToSeconds(time);
  const minInSeconds = timeToSeconds(min);
  const maxInSeconds = timeToSeconds(max);

  const clampedSeconds = Math.max(minInSeconds, Math.min(timeInSeconds, maxInSeconds));
  return secondsToTime(clampedSeconds);
}
