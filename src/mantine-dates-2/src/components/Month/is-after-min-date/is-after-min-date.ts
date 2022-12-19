import dayjs from 'dayjs';

export function isAfterMinDate(date: Date, minDate?: Date) {
  return minDate instanceof Date
    ? dayjs(date).isAfter(dayjs(minDate).subtract(1, 'day'), 'day')
    : true;
}
