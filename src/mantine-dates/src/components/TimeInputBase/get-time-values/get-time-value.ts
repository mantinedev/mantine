import { padTime } from '../pad-time/pad-time';

export function getTimeValues(value: Date) {
  if (!(value instanceof Date)) {
    return { hours: '', minutes: '', seconds: '' };
  }

  return {
    hours: padTime(value.getHours().toString()),
    minutes: padTime(value.getMinutes().toString()),
    seconds: padTime(value.getSeconds().toString()),
  };
}
