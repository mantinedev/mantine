import dayjs from 'dayjs';
import { DateStringValue, DayOfWeek } from '../../types';

const DAYS_IN_WEEK = 7;

interface HiddenWeekendColumnsInput {
  weekendDays: DayOfWeek[];
  firstDayOfWeek: DayOfWeek;
  withWeekendDays: boolean | undefined;
}

/**
 * Returns indices of week columns (0-6, relative to `firstDayOfWeek`) that are
 * hidden because they fall on a weekend day and `withWeekendDays` is `false`.
 */
export function getHiddenWeekendColumns({
  weekendDays,
  firstDayOfWeek,
  withWeekendDays,
}: HiddenWeekendColumnsInput): number[] {
  if (withWeekendDays !== false) {
    return [];
  }

  return Array.from({ length: DAYS_IN_WEEK }, (_, index) => index).filter((index) =>
    weekendDays.includes(((firstDayOfWeek + index) % DAYS_IN_WEEK) as DayOfWeek)
  );
}

interface VisibleWeekDaysInput {
  week: DateStringValue[];
  weekendDays: DayOfWeek[];
  withWeekendDays: boolean | undefined;
}

/** Filters out weekend days from a week when `withWeekendDays` is `false` */
export function getVisibleWeekDays({
  week,
  weekendDays,
  withWeekendDays,
}: VisibleWeekDaysInput): DateStringValue[] {
  if (withWeekendDays !== false) {
    return week;
  }

  return week.filter((date) => !weekendDays.includes(dayjs(date).day() as DayOfWeek));
}
