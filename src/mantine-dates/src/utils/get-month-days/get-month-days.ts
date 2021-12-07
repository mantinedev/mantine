import dayjs from 'dayjs';
import { FirstDayOfWeek } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';
import { getEndOfWeek } from '../get-end-of-week/get-end-of-week';

export function getMonthDays(month: Date, firstDayOfWeek: FirstDayOfWeek = 'monday'): Date[][] {
  const currentMonth = month.getMonth();
  const startOfMonth = new Date(month.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
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

export function getDayRowIndex(date: Date, firstDayOfWeek: FirstDayOfWeek = 'monday') {
  const month = getMonthDays(date, firstDayOfWeek);
  return month.findIndex((week) => week.some((day) => date.getDate() === day.getDate()));
}

function getNextMonthDateFromRowIndex(
  date: Date,
  lastMonth: boolean,
  firstDayOfWeek: FirstDayOfWeek = 'monday'
) {
  const dateIndex = getDayRowIndex(date, firstDayOfWeek);
  const nextMonth = getMonthDays(dayjs(date).add(1, 'months').toDate(), firstDayOfWeek);
  return {
    shouldFocus: !lastMonth ? true : dateIndex !== 0,
    nextDate: nextMonth[dateIndex][0],
  };
}

export function getNextRowDate(
  date: Date,
  lastMonth: boolean,
  firstDayOfWeek: FirstDayOfWeek = 'monday'
) {
  if (date.getDay() !== 0) {
    return { shouldFocus: true, nextDate: dayjs(date).add(1, 'days').toDate() };
  }

  return getNextMonthDateFromRowIndex(date, lastMonth, firstDayOfWeek);
}
