import { TimePickerAmPmLabels, TimePickerFormat } from '../../TimePicker.types';
import { padTime } from '../pad-time/pad-time';

interface GetTimeStringInput {
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  format: TimePickerFormat;
  withSeconds: boolean;
  amPm: string | null;
  amPmLabels: TimePickerAmPmLabels;
}

export function getTimeString({
  hours,
  minutes,
  seconds,
  format,
  withSeconds,
  amPm,
  amPmLabels,
}: GetTimeStringInput) {
  if (hours === null || minutes === null) {
    return { valid: false, value: '' };
  }

  if (withSeconds && seconds === null) {
    return { valid: false, value: '' };
  }

  if (format === '24h') {
    const value = `${padTime(hours)}:${padTime(minutes)}${withSeconds ? `:${padTime(seconds!)}` : ''}`;
    return { valid: true, value };
  }

  if (amPm === null) {
    return { valid: false, value: '' };
  }

  const isAm = amPm === amPmLabels.am;

  const value = `${padTime(isAm ? hours : hours + 12 === 24 ? 0 : hours + 12)}:${padTime(minutes)}${withSeconds ? `:${padTime(seconds!)}` : ''}`;
  return { valid: true, value };
}
