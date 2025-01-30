import dayjs from 'dayjs';
import { DateStringValue } from '../../types';
import { toDateTimeString } from '../to-date-string/to-date-string';

export function clampDate(
  minDate: DateStringValue | Date | undefined,
  maxDate: DateStringValue | Date | undefined,
  date: DateStringValue | Date
): DateStringValue {
  if (!minDate && !maxDate) {
    return toDateTimeString(date)!;
  }

  if (minDate && dayjs(date).isBefore(minDate)) {
    return toDateTimeString(minDate)!;
  }

  if (maxDate && dayjs(date).isAfter(maxDate)) {
    return toDateTimeString(maxDate)!;
  }

  return toDateTimeString(date)!;
}
