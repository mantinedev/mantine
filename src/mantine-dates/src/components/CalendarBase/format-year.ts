import dayjs from 'dayjs';

export function formatYear(year: number, format: string) {
  return dayjs(new Date(year, 1, 1)).format(format);
}
