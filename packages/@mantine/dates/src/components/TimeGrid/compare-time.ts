import { timeToSeconds } from '../TimePicker/utils/time-to-seconds/time-to-seconds';

export function isTimeBefore(value: string, compareTo: string) {
  return timeToSeconds(value) < timeToSeconds(compareTo);
}

export function isTimeAfter(value: string, compareTo: string) {
  return timeToSeconds(value) > timeToSeconds(compareTo);
}
