import dayjs from 'dayjs';
import { CalendarLevel, DateStringValue } from '../../../types';
import { getDecadeRange } from '../get-decade-range/get-decade-range';

interface GetPeriodBoundsInput {
  level: CalendarLevel;
  date: DateStringValue;
  columns: number;
}

export interface PeriodBounds {
  start: DateStringValue;
  end: DateStringValue;
}

export function getPeriodBounds({ level, date, columns }: GetPeriodBoundsInput): PeriodBounds {
  const lastColumns = Math.max(columns, 1) - 1;

  if (level === 'month') {
    return {
      start: dayjs(date).startOf('month').format('YYYY-MM-DD'),
      end: dayjs(date).add(lastColumns, 'month').endOf('month').format('YYYY-MM-DD'),
    };
  }

  if (level === 'year') {
    return {
      start: dayjs(date).startOf('year').format('YYYY-MM-DD'),
      end: dayjs(date).add(lastColumns, 'year').endOf('year').format('YYYY-MM-DD'),
    };
  }

  const [startOfDecade] = getDecadeRange(date);
  const [, endOfLastDecade] = getDecadeRange(
    dayjs(date)
      .add(lastColumns * 10, 'year')
      .format('YYYY-MM-DD')
  );

  return {
    start: startOfDecade,
    end: dayjs(endOfLastDecade).endOf('year').format('YYYY-MM-DD'),
  };
}

export function isPreviousDisabled(
  bounds: PeriodBounds,
  minDate: DateStringValue | Date | undefined
): boolean {
  return minDate ? !dayjs(bounds.start).isAfter(minDate, 'day') : false;
}

export function isNextDisabled(
  bounds: PeriodBounds,
  maxDate: DateStringValue | Date | undefined
): boolean {
  return maxDate ? !dayjs(bounds.end).isBefore(maxDate, 'day') : false;
}
