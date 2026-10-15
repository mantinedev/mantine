import { TimePickerFormat } from '../../TimePicker.types';
import { to24Hours } from '../convert-hours/convert-hours';
import { padTime } from '../pad-time/pad-time';

interface GetTimeStringInput {
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  format: TimePickerFormat;
  withSeconds: boolean;
  amPm: 'am' | 'pm' | null;
}

const INVALID = { valid: false, value: '' };

function isTimePart(value: number | null, max: number) {
  return value !== null && Number.isSafeInteger(value) && value >= 0 && value <= max;
}

export function getTimeString({
  hours,
  minutes,
  seconds,
  format,
  withSeconds,
  amPm,
}: GetTimeStringInput) {
  if (!isTimePart(hours, Infinity) || !isTimePart(minutes, 59)) {
    return INVALID;
  }

  if (withSeconds && !isTimePart(seconds, 59)) {
    return INVALID;
  }

  let _hours = hours!;

  if (format === '12h') {
    if (amPm === null) {
      return INVALID;
    }

    _hours = to24Hours(_hours, amPm);
  }

  return {
    valid: true,
    value: `${padTime(_hours)}:${padTime(minutes!)}${withSeconds ? `:${padTime(seconds!)}` : ''}`,
  };
}
