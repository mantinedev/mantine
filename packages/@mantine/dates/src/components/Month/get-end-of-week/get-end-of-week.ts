import dayjs from 'dayjs';
import type { DateStringValue, DayOfWeek } from '../../../types';

export function getEndOfWeek(date: DateStringValue, firstDayOfWeek: DayOfWeek = 1) {
  let value = dayjs(date);

  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.day() !== lastDayOfWeek) {
    value = value.add(1, 'day');
  }

  return value.format('YYYY-MM-DD');
}
