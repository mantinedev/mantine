import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function isYearDisabled(
  year: DateStringValue,
  minDate: DateStringValue | null | undefined,
  maxDate: DateStringValue | null | undefined
) {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(year).isBefore(minDate, 'year')) {
    return true;
  }

  if (maxDate && dayjs(year).isAfter(maxDate, 'year')) {
    return true;
  }

  return false;
}
