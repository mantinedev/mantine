import dayjs, { type Dayjs } from 'dayjs';
import type {
  Frequency,
  MonthlyMode,
  Repeat,
  RecurringEventValues,
  SeriesEnd,
  Weekday,
} from './types';

export interface RecurrenceRule {
  /** `YYYY-MM-DD` */
  start: string;
  repeat: Repeat;
  interval: number;
  weekdays: Weekday[];
  monthlyMode: MonthlyMode;
  ends: SeriesEnd;
  count: number;
  until: string | null;
}

export type RuleValues = Pick<
  RecurringEventValues,
  'start' | 'repeat' | 'interval' | 'weekdays' | 'monthlyMode' | 'ends' | 'count' | 'until'
>;

/** Indexed like `Dayjs.day()`: 0 is Sunday */
const DAY_INDEX: Weekday[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/** Weeks start on Monday, as in RFC 5545 */
export const WEEK_ORDER: Weekday[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

/** Upper bound of periods scanned, so that a rule with no dates cannot loop forever */
const MAX_PERIODS = 5000;

const DATE_FORMAT = 'YYYY-MM-DD';

export function getWeekday(date: string): Weekday {
  return DAY_INDEX[dayjs(date).day()];
}

/** Position of the date's weekday in its month: 1 to 4, or -1 for the fifth (last) one */
export function getWeekOfMonth(date: string) {
  const week = Math.ceil(dayjs(date).date() / 7);
  return week === 5 ? -1 : week;
}

function getNthWeekday(month: Dayjs, week: number, weekday: Weekday) {
  const dayIndex = DAY_INDEX.indexOf(weekday);

  if (week === -1) {
    const last = month.endOf('month').startOf('day');
    return last.subtract((last.day() - dayIndex + 7) % 7, 'day');
  }

  const first = month.startOf('month');
  const date = first.add(((dayIndex - first.day() + 7) % 7) + (week - 1) * 7, 'day');
  return date.month() === month.month() ? date : null;
}

function getDayOfMonth(month: Dayjs, day: number) {
  const date = month.date(day);
  return date.month() === month.month() ? date : null;
}

type PeriodDates = (start: Dayjs, period: number, rule: RecurrenceRule) => (Dayjs | null)[];

const PERIOD_DATES: Record<Frequency, PeriodDates> = {
  daily: (start, period, rule) => [start.add(period * rule.interval, 'day')],
  weekly: (start, period, rule) => {
    const monday = start.subtract((start.day() + 6) % 7, 'day').add(period * rule.interval, 'week');
    return WEEK_ORDER.filter((weekday) => rule.weekdays.includes(weekday)).map((weekday) =>
      monday.add(WEEK_ORDER.indexOf(weekday), 'day')
    );
  },
  monthly: (start, period, rule) => {
    const month = start.startOf('month').add(period * rule.interval, 'month');
    return [
      rule.monthlyMode === 'dayOfMonth'
        ? getDayOfMonth(month, start.date())
        : getNthWeekday(month, getWeekOfMonth(rule.start), getWeekday(rule.start)),
    ];
  },
  yearly: (start, period, rule) => {
    const year = start.startOf('month').add(period * rule.interval, 'year');
    return [getDayOfMonth(year, start.date())];
  },
};

interface OccurrenceOptions {
  exceptions?: string[];
  /** Stop after this many dates (exceptions do not count) */
  limit?: number;
  /** Stop after this date, `YYYY-MM-DD` */
  through?: string;
}

/** Dates (`YYYY-MM-DD`) of the series in order. `count` counts the dates skipped by exceptions too */
export function getOccurrences(
  rule: RecurrenceRule,
  { exceptions = [], limit = Infinity, through }: OccurrenceOptions = {}
) {
  if (rule.repeat === 'none') {
    return exceptions.includes(rule.start) ? [] : [rule.start];
  }

  const start = dayjs(rule.start);
  const getDates = PERIOD_DATES[rule.repeat];
  const result: string[] = [];
  let generated = 0;

  for (let period = 0; period < MAX_PERIODS; period += 1) {
    for (const date of getDates(start, period, rule)) {
      if (!date || date.isBefore(start, 'day')) {
        continue;
      }

      const value = date.format(DATE_FORMAT);
      const ended =
        (rule.ends === 'on' && rule.until !== null && value > rule.until) ||
        (rule.ends === 'after' && generated >= rule.count) ||
        (through !== undefined && value > through);

      if (ended) {
        return result;
      }

      generated += 1;

      if (!exceptions.includes(value)) {
        result.push(value);
        if (result.length >= limit) {
          return result;
        }
      }
    }
  }

  return result;
}

export function isInSeries(rule: RecurrenceRule, date: string) {
  if (date < rule.start) {
    return false;
  }
  const dates = getOccurrences(rule, { through: date });
  return dates[dates.length - 1] === date;
}

function toInteger(value: number | string, min: number, max: number) {
  const number = Number(value);
  return value !== '' && Number.isInteger(number) && number >= min && number <= max ? number : null;
}

/** The rule described by the form values, `null` while the values cannot describe one */
export function getRule(values: RuleValues): RecurrenceRule | null {
  if (!values.start) {
    return null;
  }

  const start = values.start.slice(0, 10);
  const base = {
    start,
    repeat: values.repeat,
    interval: 1,
    weekdays: values.weekdays,
    monthlyMode: values.monthlyMode,
    ends: 'never' as SeriesEnd,
    count: 0,
    until: null,
  };

  if (values.repeat === 'none') {
    return base;
  }

  const interval = toInteger(values.interval, 1, 99);
  const count = values.ends === 'after' ? toInteger(values.count, 1, 500) : 0;
  const until = values.ends === 'on' ? values.until : null;

  if (interval === null || count === null || (values.ends === 'on' && !until)) {
    return null;
  }

  return { ...base, interval, ends: values.ends, count, until };
}
