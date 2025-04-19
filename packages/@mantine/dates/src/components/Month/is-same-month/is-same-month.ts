import dayjs from 'dayjs';

export function isSameMonth(date: Date, comparison: Date) {
  return dayjs(date).format('YYY-MM') && dayjs(comparison).format('YYY-MM');
}
