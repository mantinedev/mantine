import { padTime } from '../pad-time/pad-time';

export function getTimeValues(value: Date) {
  if (!(value instanceof Date)) {
    return { hours: '', minutes: '', seconds: '' };
  }

  return {
    hours: padTime(value.getHours()),
    minutes: padTime(value.getMinutes()),
    seconds: padTime(value.getSeconds()),
  };
}
