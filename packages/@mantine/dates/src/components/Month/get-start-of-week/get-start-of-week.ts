import dayjs from 'dayjs';
import type { DateStringValue, DayOfWeek } from '../../../types';

export function getStartOfWeek(date: DateStringValue, firstDayOfWeek: DayOfWeek = 1) {
  let value = dayjs(date);
  while (value.day() !== firstDayOfWeek) {
    value = value.subtract(1, 'day');
  }

  return value.format('YYYY-MM-DD');
}
