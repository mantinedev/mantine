import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type {
  EndsMode,
  Frequency,
  MonthlyMode,
  MonthlyOn,
  RecurringEventValues,
  Weekday,
} from './types';

// Calendar math runs on wall-clock time in UTC mode, so the machine's DST transitions
// cannot shift or skip occurrences
dayjs.extend(utc);

export interface RecurrenceRule {
  start: string;
  frequency: Frequency;
  interval: number;
  weekdays: Weekday[];
  monthlyMode: MonthlyMode;
  ends: EndsMode;
  count: number;
  until: string | null;
}

const MAX_PERIODS = 10_000;

// Indexed by dayjs `day()`: 0 is Sunday
const WEEKDAY_BY_DAY: Weekday[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export const WEEKDAY_NAMES: Record<Weekday, string> = {
  MO: 'Monday',
  TU: 'Tuesday',
  WE: 'Wednesday',
  TH: 'Thursday',
  FR: 'Friday',
  SA: 'Saturday',
  SU: 'Sunday',
};

const ORDINALS: Record<number, string> = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  [-1]: 'last',
};

export const toDateKey = (date: Dayjs) => date.format('YYYY-MM-DD');

export const weekdayOf = (date: string): Weekday => WEEKDAY_BY_DAY[dayjs.utc(date).day()];

/** 1 to 4, or -1 for the fifth weekday of a month, which is always its last */
export function weekOfMonth(date: string) {
  const week = Math.ceil(dayjs.utc(date).date() / 7);
  return week === 5 ? -1 : week;
}

export function getMonthlyOn(start: string, mode: MonthlyMode): MonthlyOn {
  return mode === 'day'
    ? { type: 'day', day: dayjs.utc(start).date() }
    : { type: 'weekday', weekday: weekdayOf(start), week: weekOfMonth(start) };
}

export function describeMonthlyOn(monthlyOn: MonthlyOn) {
  return monthlyOn.type === 'day'
    ? `On day ${monthlyOn.day}`
    : `On the ${ORDINALS[monthlyOn.week]} ${WEEKDAY_NAMES[monthlyOn.weekday]}`;
}

function nthWeekdayOfMonth(monthStart: Dayjs, weekday: number, week: number) {
  if (week === -1) {
    const last = monthStart.date(monthStart.daysInMonth());
    return last.subtract((last.day() - weekday + 7) % 7, 'day');
  }

  return monthStart.add((weekday - monthStart.day() + 7) % 7, 'day').add((week - 1) * 7, 'day');
}

type PeriodDates = (start: Dayjs, step: number, rule: RecurrenceRule) => Dayjs[];

const dailyDates: PeriodDates = (start, step) => [start.add(step, 'day')];

const weeklyDates: PeriodDates = (start, step, rule) => {
  const monday = start.subtract((start.day() + 6) % 7, 'day').add(step, 'week');
  return rule.weekdays
    .map((weekday) => monday.add((WEEKDAY_BY_DAY.indexOf(weekday) + 6) % 7, 'day'))
    .sort((a, b) => a.valueOf() - b.valueOf());
};

const monthlyDates: PeriodDates = (start, step, rule) => {
  const monthStart = start.date(1).add(step, 'month');

  if (rule.monthlyMode === 'weekday') {
    return [nthWeekdayOfMonth(monthStart, start.day(), weekOfMonth(rule.start))];
  }

  // Months without the day (31st, 30th, 29th) are skipped, like in calendar apps
  return start.date() > monthStart.daysInMonth() ? [] : [monthStart.date(start.date())];
};

const yearlyDates: PeriodDates = (start, step) => {
  const monthStart = start.date(1).add(step, 'year');
  return start.date() > monthStart.daysInMonth() ? [] : [monthStart.date(start.date())];
};

const PERIOD_DATES: Record<Frequency, PeriodDates> = {
  daily: dailyDates,
  weekly: weeklyDates,
  monthly: monthlyDates,
  yearly: yearlyDates,
};

export function* occurrences(rule: RecurrenceRule): Generator<Dayjs> {
  if (rule.frequency === 'weekly' && rule.weekdays.length === 0) {
    return;
  }

  const start = dayjs.utc(rule.start);
  const until = rule.ends === 'on' && rule.until ? dayjs.utc(rule.until).endOf('day') : null;
  let produced = 0;

  for (let period = 0; period < MAX_PERIODS; period += 1) {
    for (const date of PERIOD_DATES[rule.frequency](start, period * rule.interval, rule)) {
      if (date.isBefore(start)) {
        continue;
      }

      if ((until && date.isAfter(until)) || (rule.ends === 'after' && produced >= rule.count)) {
        return;
      }

      produced += 1;
      yield date;
    }
  }
}

export function upcomingOccurrences(rule: RecurrenceRule, exceptions: string[], limit: number) {
  const skipped = new Set(exceptions);
  const result: Dayjs[] = [];

  for (const date of occurrences(rule)) {
    if (result.length === limit) {
      break;
    }

    if (!skipped.has(toDateKey(date))) {
      result.push(date);
    }
  }

  return result;
}

export function isInSeries(rule: RecurrenceRule, dateKey: string) {
  for (const date of occurrences(rule)) {
    const key = toDateKey(date);

    if (key >= dateKey) {
      return key === dateKey;
    }
  }

  return false;
}

const isWholeNumberIn = (value: number | string, min: number, max: number) =>
  typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max;

export type RuleValues = Pick<
  RecurringEventValues,
  | 'repeats'
  | 'start'
  | 'frequency'
  | 'interval'
  | 'weekdays'
  | 'monthlyMode'
  | 'ends'
  | 'count'
  | 'until'
>;

/** The rule described by the form values, `null` when the event does not repeat or the rule is incomplete */
export function getRecurrenceRule(values: RuleValues): RecurrenceRule | null {
  if (!values.repeats || !values.start || !isWholeNumberIn(values.interval, 1, 99)) {
    return null;
  }

  if (values.ends === 'after' && !isWholeNumberIn(values.count, 1, 500)) {
    return null;
  }

  return {
    start: values.start,
    frequency: values.frequency,
    interval: Number(values.interval),
    weekdays: values.weekdays,
    monthlyMode: values.monthlyMode,
    ends: values.ends,
    count: Number(values.count),
    until: values.until,
  };
}

export const formatOccurrence = (date: Dayjs, allDay: boolean) =>
  date.format(allDay ? 'ddd, MMM D, YYYY' : 'ddd, MMM D, YYYY, HH:mm');
