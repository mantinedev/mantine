import dayjs from 'dayjs';

export function getValidTime(
  minTime: string | undefined,
  maxTime: string | undefined,
  time: string | undefined
): string | number | undefined {
  const minimumTime = dayjs(`2000-01-01 ${minTime}`);
  const maximumTime = dayjs(`2000-01-01 ${maxTime}`);
  const currentTime = dayjs(`2000-01-01 ${time}`);

  if (maxTime && currentTime > maximumTime) {
    return maxTime;
  }
  if (minTime && currentTime < minimumTime) {
    return minTime;
  }
  return time;
}
