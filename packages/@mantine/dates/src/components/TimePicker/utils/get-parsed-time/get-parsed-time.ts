import { TimePickerAmPmLabels, TimePickerFormat } from '../../TimePicker.types';
import {
  findAmPmLabelSuffix,
  getAmPmLabel,
  to12Hours,
  to24Hours,
} from '../convert-hours/convert-hours';

interface GetParsedTimeInput {
  time: string;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
}

interface ParsedTime {
  hours: number;
  minutes: number;
  seconds: number | null;
}

const EMPTY_TIME = { hours: null, minutes: null, seconds: null, amPm: null };
const TIME_REGEXP = /^(\d+):(\d{1,2})(?::(\d{1,2}))?$/;

export function clampToDay(time: ParsedTime): ParsedTime {
  return time.hours > 23 ? { hours: 23, minutes: 59, seconds: 59 } : time;
}

export function parseTimeString(time: string, amPmLabels: TimePickerAmPmLabels): ParsedTime | null {
  const trimmed = time.trim();
  const suffix = findAmPmLabelSuffix(trimmed, amPmLabels);
  const match = TIME_REGEXP.exec(suffix ? suffix.rest.trim() : trimmed);

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  const seconds = match[3] === undefined ? null : Number(match[3]);

  if (!Number.isSafeInteger(hours) || minutes > 59 || (seconds !== null && seconds > 59)) {
    return null;
  }

  if (suffix === null) {
    return { hours, minutes, seconds };
  }

  if (hours < 1 || hours > 12) {
    return null;
  }

  return { hours: to24Hours(hours, suffix.amPm), minutes, seconds };
}

export function getParsedTime({ time, format, amPmLabels }: GetParsedTimeInput) {
  const parsed = parseTimeString(time, amPmLabels);

  if (!parsed) {
    return EMPTY_TIME;
  }

  if (format === '12h') {
    const clamped = clampToDay(parsed);
    const converted = to12Hours(clamped.hours);
    return {
      hours: converted.hours,
      minutes: clamped.minutes,
      seconds: clamped.seconds,
      amPm: getAmPmLabel(converted.amPm, amPmLabels),
    };
  }

  return { ...parsed, amPm: null };
}
