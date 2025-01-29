import dayjs from 'dayjs';
import { DateStringValue } from '../../types';

interface GetDefaultClampedDate {
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
}

export function getDefaultClampedDate({
  minDate,
  maxDate,
}: GetDefaultClampedDate): DateStringValue {
  const today = dayjs();

  if (!minDate && !maxDate) {
    return today.format('YYYY-MM-DD');
  }

  if (minDate && dayjs(today).isBefore(minDate)) {
    return minDate;
  }

  if (maxDate && dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }

  return today.format('YYYY-MM-DD');
}
