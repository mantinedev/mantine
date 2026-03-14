import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek } from '../../types';
import { getMonthDays } from '../get-month-days/get-month-days';
import { toDateString } from '../to-date-string/to-date-string';

interface GetMonthRangeInput {
  month: AnyDateValue;
  withOutsideDays: boolean | undefined;
  consistentWeeks: boolean | undefined;
  firstDayOfWeek: DayOfWeek;
}

/** Returns start and end dates as displayed in MonthView */
export function getMonthRange({
  month,
  withOutsideDays,
  consistentWeeks,
  firstDayOfWeek,
}: GetMonthRangeInput) {
  if (!withOutsideDays) {
    return {
      start: toDateString(dayjs(month).startOf('month')),
      end: toDateString(dayjs(month).endOf('month')),
    };
  }

  const days = getMonthDays({ month, firstDayOfWeek, consistentWeeks });

  return {
    start: days[0][0],
    end: days[days.length - 1][6],
  };
}
