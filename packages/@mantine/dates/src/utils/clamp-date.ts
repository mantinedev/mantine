import dayjs from 'dayjs';
import { DateStringValue } from '../types';

export function clampDate(
  minDate: DateStringValue | undefined,
  maxDate: DateStringValue | undefined,
  date: DateStringValue
): DateStringValue {
  if (!minDate && !maxDate) {
    return date;
  }

  if (minDate && dayjs(date).isBefore(minDate)) {
    return minDate;
  }

  if (maxDate && dayjs(date).isAfter(maxDate)) {
    return maxDate;
  }

  return date;
}
