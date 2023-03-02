import type { DayOfWeek } from '../../../types';

export function getEndOfWeek(date: Date, firstDayOfWeek: DayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }

  return value;
}
