import { DayOfWeek } from '../../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';
import { getEndOfWeek } from '../get-end-of-week/get-end-of-week';
import { shiftTimezone } from '../../../utils';

export function getMonthDays(
  month: Date,
  firstDayOfWeek: DayOfWeek = 1,
  timezone: string | undefined = undefined
): Date[][] {
  const currentMonth = month.getMonth();
  const startOfMonth = shiftTimezone(
    'add',
    new Date(month.getFullYear(), currentMonth, 1),
    timezone
  );
  const endOfMonth = shiftTimezone(
    'add',
    new Date(month.getFullYear(), month.getMonth() + 1, 0),
    timezone
  );
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const weeks: Date[][] = [];

  while (date <= endDate) {
    const days: Date[] = [];

    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    weeks.push(days);
  }

  return weeks;
}
