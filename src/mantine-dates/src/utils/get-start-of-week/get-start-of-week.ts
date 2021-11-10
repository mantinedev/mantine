import { FirstDayOfWeek } from '../../types';

export function getStartOfWeek(date: Date, firstDayOfWeek: FirstDayOfWeek = 'monday') {
  const value = new Date(date);
  const day = value.getDay() || 7;
  const isSunday = firstDayOfWeek === 'sunday';

  const clampToFirstDay = isSunday ? day : day - 1;

  if ((isSunday && day !== 0) || day !== 1) {
    value.setHours(-24 * clampToFirstDay);
  }

  return value;
}
