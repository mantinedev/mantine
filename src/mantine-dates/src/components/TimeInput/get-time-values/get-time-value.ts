import { padTime } from '../pad-time/pad-time';

export function getTimeValues(value: Date) {
  if (typeof value === undefined) {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  if (!(value instanceof Date)) {
    return { hours: '', minutes: '', seconds: '' };
  }

  return {
    hours: padTime(value.getHours()),
    minutes: padTime(value.getMinutes()),
    seconds: padTime(value.getSeconds()),
  };
}
