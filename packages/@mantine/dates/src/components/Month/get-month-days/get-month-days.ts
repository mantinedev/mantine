import dayjs from 'dayjs';
import { DayOfWeek } from '../../../types';
import { getEndOfWeek } from '../get-end-of-week/get-end-of-week';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

interface GetMonthDaysInput {
  month: Date;
  firstDayOfWeek: DayOfWeek | undefined;
  consistentWeeks: boolean | undefined;
}

export function getMonthDays({
  month,
  firstDayOfWeek = 1,
  consistentWeeks,
}: GetMonthDaysInput): Date[][] {
  const day = dayjs(month).subtract(dayjs(month).date() - 1, 'day');
  const start = dayjs(day).startOf('day');
  const startOfMonth = start.toDate();
  const endOfMonth = start.add(+start.daysInMonth() - 1, 'day').toDate();
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

  if (consistentWeeks && weeks.length < 6) {
    const lastWeek = weeks[weeks.length - 1];
    const lastDay = lastWeek[lastWeek.length - 1];
    const nextDay = new Date(lastDay);
    nextDay.setDate(nextDay.getDate() + 1);

    while (weeks.length < 6) {
      const days: Date[] = [];

      for (let i = 0; i < 7; i += 1) {
        days.push(new Date(nextDay));
        nextDay.setDate(nextDay.getDate() + 1);
      }

      weeks.push(days);
    }
  }

  return weeks;
}
