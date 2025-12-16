import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek } from '../../types';
import { getMonthDays } from '../get-month-days/get-month-days';

interface GetMonthRangeInput {
  month: AnyDateValue;
  withOutsideDays: boolean | undefined;
  consistentWeeks: boolean | undefined;
  firstDayOfWeek: DayOfWeek;
}

export function getMonthRange({
  month,
  withOutsideDays,
  consistentWeeks,
  firstDayOfWeek,
}: GetMonthRangeInput) {
  if (!withOutsideDays) {
    return {
      start: dayjs(month).startOf('month').format('YYYY-MM-DD'),
      end: dayjs(month).endOf('month').format('YYYY-MM-DD'),
    };
  }

  const days = getMonthDays({ month, firstDayOfWeek, consistentWeeks });

  return {
    start: days[0][0],
    end: days[days.length - 1][6],
  };
}
