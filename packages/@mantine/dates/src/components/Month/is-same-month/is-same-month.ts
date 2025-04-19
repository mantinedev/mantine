import dayjs from 'dayjs';

export function isSameMonth(date: Date, comparison: Date) {
  return dayjs(date).format('YYYY-MM') === dayjs(comparison).format('YYYY-MM');
}
