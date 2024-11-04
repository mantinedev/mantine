import { secondsToTime, timeToSeconds } from '../time-to-seconds/time-to-seconds';

interface GetTimeRangeInput {
  startTime: string;
  endTime: string;
  interval: string;
}

export function getTimeRange({ startTime, endTime, interval }: GetTimeRangeInput): string[] {
  const timeRange: string[] = [];
  const startInSeconds = timeToSeconds(startTime);
  const endInSeconds = timeToSeconds(endTime);
  const intervalInSeconds = timeToSeconds(interval);

  for (let current = startInSeconds; current <= endInSeconds; current += intervalInSeconds) {
    timeRange.push(secondsToTime(current).timeString);
  }

  return timeRange;
}
