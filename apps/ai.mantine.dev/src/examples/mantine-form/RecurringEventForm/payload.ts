import dayjs from 'dayjs';
import timezonePlugin from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { getWeekday, getWeekOfMonth, WEEK_ORDER } from './recurrence';
import type {
  Frequency,
  RecurrencePayload,
  RecurringEventPayload,
  RecurringEventValues,
  SeriesEnd,
  SeriesEndPayload,
} from './types';

dayjs.extend(utc);
dayjs.extend(timezonePlugin);

const WEEK_NAMES: Record<number, string> = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  [-1]: 'last',
};

/** "third Wednesday" for 2026-10-21 */
export function formatWeekdayOfMonth(date: string) {
  return `${WEEK_NAMES[getWeekOfMonth(date)]} ${dayjs(date).format('dddd')}`;
}

export function formatDate(date: string) {
  return dayjs(date).format('ddd, MMM D, YYYY');
}

/** An occurrence date with the time of the event start */
export function formatOccurrence(date: string, start: string, allDay: boolean) {
  return allDay ? formatDate(date) : `${formatDate(date)}, ${start.slice(11, 16)}`;
}

function toIsoString(value: string, timezone: string, allDay: boolean) {
  return allDay ? value.slice(0, 10) : dayjs.tz(value, timezone).format();
}

const RECURRENCE_DETAILS: Record<
  Frequency,
  (values: RecurringEventValues, start: string) => Partial<RecurrencePayload>
> = {
  daily: () => ({}),
  weekly: (values) => ({
    weekdays: WEEK_ORDER.filter((weekday) => values.weekdays.includes(weekday)),
  }),
  monthly: (values, start) => ({
    monthly:
      values.monthlyMode === 'dayOfMonth'
        ? { type: 'dayOfMonth', day: dayjs(start).date() }
        : { type: 'weekdayOfMonth', week: getWeekOfMonth(start), weekday: getWeekday(start) },
  }),
  yearly: () => ({}),
};

const SERIES_ENDS: Record<SeriesEnd, (values: RecurringEventValues) => SeriesEndPayload> = {
  never: () => ({ type: 'never' }),
  after: (values) => ({ type: 'after', count: Number(values.count) }),
  on: (values) => ({ type: 'on', date: values.until ?? '' }),
};

function toRecurrence(values: RecurringEventValues, start: string): RecurrencePayload | null {
  if (values.repeat === 'none') {
    return null;
  }

  return {
    frequency: values.repeat,
    interval: Number(values.interval),
    ...RECURRENCE_DETAILS[values.repeat](values, start),
    ends: SERIES_ENDS[values.ends](values),
  };
}

export function toPayload(values: RecurringEventValues): RecurringEventPayload {
  const start = values.start ?? '';
  const end = values.end ?? '';

  return {
    title: values.title.trim(),
    description: values.description.trim(),
    start: start && toIsoString(start, values.timezone, values.allDay),
    end: end && toIsoString(end, values.timezone, values.allDay),
    allDay: values.allDay,
    timezone: values.timezone,
    location: values.location.trim(),
    recurrence: toRecurrence(values, start),
    exceptions: values.repeat === 'none' ? [] : [...values.exceptions].sort(),
  };
}
