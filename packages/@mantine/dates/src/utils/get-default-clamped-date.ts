import dayjs from 'dayjs';
import { shiftTimezone } from './shift-timezone';

interface GetDefaultClampedDate {
  minDate: Date | undefined;
  maxDate: Date | undefined;
  timezone?: string;
}

export function getDefaultClampedDate({ minDate, maxDate, timezone }: GetDefaultClampedDate) {
  const today = shiftTimezone('add', new Date(), timezone);

  if (!minDate && !maxDate) {
    return today;
  }

  if (minDate && dayjs(today).isBefore(minDate)) {
    return minDate;
  }

  if (maxDate && dayjs(today).isAfter(maxDate)) {
    return maxDate;
  }

  return today;
}
