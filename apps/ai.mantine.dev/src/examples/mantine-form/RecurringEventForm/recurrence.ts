import dayjs, { type Dayjs } from 'dayjs';
import type { MonthlyOn, RecurrenceValues, Repeat, Weekday } from './types';

export const DATE_FORMAT = 'YYYY-MM-DD';

// Upper bound of periods to scan, so rules that never match (day 31 every 12 months from
// February) stop instead of looping forever
const MAX_PERIODS = 5000;

// Indexed by dayjs `day()`: 0 is Sunday
const WEEKDAY_BY_DAY: Weekday[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
export const WEEK_ORDER: Weekday[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const ORDINALS = ['first', 'second', 'third', 'fourth'];

export interface RecurrenceRule {
  start: string;
  repeat: Repeat;
  interval: number;
  weekdays: Weekday[];
  monthlyOn: MonthlyOn;
  count: number | null;
  until: string | null;
}

const isIntegerInRange = (value: number | string, min: number, max: number): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max;

export const weekdayOf = (date: string) => WEEKDAY_BY_DAY[dayjs(date).day()];

// A fifth weekday does not exist in every month, so it repeats as the last one
function weekOfMonth(date: Dayjs) {
  const week = Math.ceil(date.date() / 7);
  return week === 5 ? -1 : week;
}

export const describeDayOfMonth = (date: string) => `On day ${dayjs(date).date()}`;

export function describeWeekdayOfMonth(date: string) {
  const week = weekOfMonth(dayjs(date));
  const ordinal = week === -1 ? 'last' : ORDINALS[week - 1];
  return `On the ${ordinal} ${dayjs(date).format('dddd')}`;
}

export const formatDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

export const formatOccurrence = (date: string, time: string | null) =>
  time
    ? `${dayjs(date).format('ddd, MMMM D, YYYY')}, ${time}`
    : dayjs(date).format('ddd, MMMM D, YYYY');

export function toRecurrenceRule(
  startDate: string | null,
  recurrence: RecurrenceValues
): RecurrenceRule | null {
  if (!startDate) {
    return null;
  }

  const { repeat, interval, weekdays, monthlyOn, ends, count, until } = recurrence;
  if (repeat === 'none') {
    return {
      start: startDate,
      repeat,
      interval: 1,
      weekdays: [],
      monthlyOn,
      count: null,
      until: null,
    };
  }

  const invalid =
    !isIntegerInRange(interval, 1, 99) ||
    (repeat === 'weekly' && weekdays.length === 0) ||
    (ends === 'after' && !isIntegerInRange(count, 1, 500)) ||
    (ends === 'on' && (!until || until <= startDate));

  if (invalid) {
    return null;
  }

  return {
    start: startDate,
    repeat,
    interval: interval as number,
    weekdays,
    monthlyOn,
    count: ends === 'after' ? (count as number) : null,
    until: ends === 'on' ? until : null,
  };
}

function nthWeekdayOfMonth(month: Dayjs, weekday: number, week: number) {
  if (week === -1) {
    const last = month.endOf('month').startOf('day');
    return last.subtract((last.day() - weekday + 7) % 7, 'day');
  }
  return month.add(((weekday - month.day() + 7) % 7) + (week - 1) * 7, 'day');
}

type PeriodDates = (start: Dayjs, offset: number, rule: RecurrenceRule) => Dayjs[];

const dailyDates: PeriodDates = (start, offset) => [start.add(offset, 'day')];

const weeklyDates: PeriodDates = (start, offset, rule) => {
  const monday = start.subtract((start.day() + 6) % 7, 'day').add(offset, 'week');
  return WEEK_ORDER.map((weekday, index) =>
    rule.weekdays.includes(weekday) ? monday.add(index, 'day') : null
  ).filter((date): date is Dayjs => date !== null && !date.isBefore(start, 'day'));
};

const monthlyDates: PeriodDates = (start, offset, rule) => {
  const month = start.startOf('month').add(offset, 'month');
  if (rule.monthlyOn === 'weekdayOfMonth') {
    return [nthWeekdayOfMonth(month, start.day(), weekOfMonth(start))];
  }
  return start.date() <= month.daysInMonth() ? [month.date(start.date())] : [];
};

// dayjs moves February 29 to February 28 in other years: those years have no occurrence
const yearlyDates: PeriodDates = (start, offset) => {
  const date = start.add(offset, 'year');
  return date.date() === start.date() ? [date] : [];
};

const PERIOD_DATES: Record<Exclude<Repeat, 'none'>, PeriodDates> = {
  daily: dailyDates,
  weekly: weeklyDates,
  monthly: monthlyDates,
  yearly: yearlyDates,
};

function* ruleDates(rule: RecurrenceRule) {
  const start = dayjs(rule.start);
  if (rule.repeat === 'none') {
    yield start;
    return;
  }
  for (let period = 0; period < MAX_PERIODS; period += 1) {
    yield* PERIOD_DATES[rule.repeat](start, period * rule.interval, rule);
  }
}

// Exceptions still count towards the number of occurrences, like EXDATE with COUNT in RFC 5545
function* occurrenceDates(rule: RecurrenceRule) {
  let produced = 0;
  for (const date of ruleDates(rule)) {
    if (
      (rule.until && date.isAfter(rule.until, 'day')) ||
      (rule.count !== null && produced >= rule.count)
    ) {
      return;
    }
    produced += 1;
    yield date.format(DATE_FORMAT);
  }
}

export function getOccurrences(rule: RecurrenceRule, exceptions: string[], limit: number) {
  const result: string[] = [];
  for (const date of occurrenceDates(rule)) {
    if (!exceptions.includes(date)) {
      result.push(date);
    }
    if (result.length === limit) {
      break;
    }
  }
  return result;
}

export function isOccurrence(rule: RecurrenceRule, date: string) {
  for (const occurrence of occurrenceDates(rule)) {
    if (occurrence >= date) {
      return occurrence === date;
    }
  }
  return false;
}
