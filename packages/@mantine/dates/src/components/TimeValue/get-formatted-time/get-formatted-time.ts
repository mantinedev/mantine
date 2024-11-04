import type { TimePickerAmPmLabels, TimePickerFormat } from '../../TimePicker';
import { padTime } from '../../TimePicker/utils/pad-time/pad-time';
import { splitTimeString } from '../../TimePicker/utils/split-time-string/split-time-string';

function getTimeFromDate(date: Date, withSeconds: boolean) {
  return `${date.getHours()}:${date.getMinutes()}${withSeconds ? `:${date.getSeconds()}` : ''}`;
}

export interface GetFormattedTimeInput {
  value: string | Date;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean;
}

export function getFormattedTime({
  value,
  format,
  amPmLabels,
  withSeconds,
}: GetFormattedTimeInput) {
  const splitted = splitTimeString(
    typeof value === 'string' ? value : getTimeFromDate(value, withSeconds)
  );

  if (splitted.hours === null || splitted.minutes === null) {
    return null;
  }

  if (format === '24h') {
    return `${padTime(splitted.hours)}:${padTime(splitted.minutes)}${withSeconds ? `:${padTime(splitted.seconds || 0)}` : ''}`;
  }

  const isPm = splitted.hours >= 12;
  const hours = splitted.hours % 12 === 0 ? 12 : splitted.hours % 12;

  return `${hours}:${padTime(splitted.minutes)}${withSeconds ? `:${padTime(splitted.seconds || 0)}` : ''} ${
    isPm ? amPmLabels.pm : amPmLabels.am
  }`;
}
