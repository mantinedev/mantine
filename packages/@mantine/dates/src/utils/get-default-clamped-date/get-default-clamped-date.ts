import dayjs from 'dayjs';
import { DateStringValue } from '../../types';
import { toDateString } from '../to-date-string/to-date-string';

interface GetDefaultClampedDate {
  minDate: DateStringValue | Date | undefined;
  maxDate: DateStringValue | Date | undefined;
}

export function getDefaultClampedDate({
  minDate,
  maxDate,
}: GetDefaultClampedDate): DateStringValue {
  const today = dayjs();

  if (!minDate && !maxDate) {
    return toDateString(today)!;
  }

  if (minDate && dayjs(today).isBefore(minDate)) {
    return toDateString(minDate)!;
  }

  if (maxDate && dayjs(today).isAfter(maxDate)) {
    return toDateString(maxDate)!;
  }

  return toDateString(today)!;
}
