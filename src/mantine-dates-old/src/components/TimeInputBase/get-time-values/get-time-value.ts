import { padTime } from '../pad-time/pad-time';

export function getTimeValues(value: Date, format: '12' | '24', amLabel: string, pmLabel: string) {
  if (!(value instanceof Date)) {
    return { hours: '', minutes: '', seconds: '', amPm: '' };
  }

  let _hours = value.getHours();

  const isPm = _hours >= 12;
  if (format === '12') {
    _hours %= 12;
    if (_hours === 0) {
      _hours += 12;
    }
  }

  return {
    hours: padTime(_hours.toString()),
    minutes: padTime(value.getMinutes().toString()),
    seconds: padTime(value.getSeconds().toString()),
    amPm: isPm ? pmLabel : amLabel,
  };
}
