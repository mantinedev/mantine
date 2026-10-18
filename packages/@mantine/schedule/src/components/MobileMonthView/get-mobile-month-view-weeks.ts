import dayjs from 'dayjs';
import { AnyDateValue, DateStringValue, DayOfWeek } from '../../types';
import { getMonthDays, getVisibleWeekDays, isSameMonth } from '../../utils';

const WEEKS_IN_MONTH_VIEW = 6;
const DAYS_IN_WEEK = 7;

interface GetMobileMonthViewWeeksInput {
  month: AnyDateValue;
  firstDayOfWeek: DayOfWeek;
  consistentWeeks: boolean | undefined;
  withOutsideDays: boolean | undefined;
  weekendDays: DayOfWeek[];
  withWeekendDays: boolean | undefined;
}

function getNextWeek(week: DateStringValue[]): DateStringValue[] {
  const start = dayjs(week[week.length - 1]).add(1, 'day');
  return Array.from({ length: DAYS_IN_WEEK }, (_, index) =>
    start.add(index, 'day').format('YYYY-MM-DD 00:00:00')
  );
}

export function getMobileMonthViewWeeks({
  month,
  firstDayOfWeek,
  consistentWeeks,
  withOutsideDays,
  weekendDays,
  withWeekendDays,
}: GetMobileMonthViewWeeksInput): DateStringValue[][] {
  const weeks = getMonthDays({
    month: dayjs(month).format('YYYY-MM-DD'),
    firstDayOfWeek,
    consistentWeeks: false,
  }).filter((week) =>
    getVisibleWeekDays({ week, weekendDays, withWeekendDays }).some(
      (day) => withOutsideDays || isSameMonth(day, month)
    )
  );

  if (!consistentWeeks || weeks.length === 0) {
    return weeks;
  }

  while (weeks.length < WEEKS_IN_MONTH_VIEW) {
    weeks.push(getNextWeek(weeks[weeks.length - 1]));
  }

  return weeks;
}
