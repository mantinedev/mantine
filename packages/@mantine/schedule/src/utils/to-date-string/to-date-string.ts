import dayjs from 'dayjs';

export function toDateString(date: Date | string | dayjs.Dayjs): string {
  return dayjs(date).format('YYYY-MM-DD 00:00:00');
}
