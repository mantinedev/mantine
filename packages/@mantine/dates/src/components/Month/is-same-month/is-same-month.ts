import dayjs from 'dayjs';

export function isSameMonth(date: Date | string, comparison: Date | string) {
  return dayjs(date).format('YYYY-MM') === dayjs(comparison).format('YYYY-MM');
}
