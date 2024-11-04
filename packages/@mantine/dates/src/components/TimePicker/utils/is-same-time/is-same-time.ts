import { splitTimeString } from '../split-time-string/split-time-string';

interface IsSameTimeInput {
  time: string;
  compare: string;
  withSeconds: boolean;
}

export function isSameTime({ time, compare, withSeconds }: IsSameTimeInput) {
  const timeParts = splitTimeString(time);
  const compareParts = splitTimeString(compare);

  if (withSeconds) {
    return (
      timeParts.hours === compareParts.hours &&
      timeParts.minutes === compareParts.minutes &&
      timeParts.seconds === compareParts.seconds
    );
  }

  return timeParts.hours === compareParts.hours && timeParts.minutes === compareParts.minutes;
}
