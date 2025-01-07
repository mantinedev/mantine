import dayjs from 'dayjs';
import type { DayOfWeek } from '../../../types';

export function getStartOfWeek(date: Date, firstDayOfWeek: DayOfWeek = 1) {
  let value = dayjs(date);
  while (value.day() !== firstDayOfWeek) {
    value = value.subtract(1, 'day');
  }

  return value.toDate();
}
