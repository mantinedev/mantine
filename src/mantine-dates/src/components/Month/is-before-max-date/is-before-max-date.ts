import dayjs from 'dayjs';

export function isBeforeMaxDate(date: Date, maxDate?: Date) {
  return maxDate instanceof Date ? dayjs(date).isBefore(dayjs(maxDate).add(1, 'day'), 'day') : true;
}
