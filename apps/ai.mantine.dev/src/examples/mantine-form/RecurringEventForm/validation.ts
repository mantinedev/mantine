import { isInRange, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import { formatDate, isOccurrence, toRecurrenceRule } from './recurrence';
import type { RecurringEventValues, Repeat, SeriesEnd, Weekday } from './types';

export const TIMEZONES = [
  { value: 'UTC', label: 'UTC' },
  { value: 'America/Los_Angeles', label: 'Los Angeles' },
  { value: 'America/Chicago', label: 'Chicago' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Berlin', label: 'Berlin' },
  { value: 'Asia/Dubai', label: 'Dubai' },
  { value: 'Asia/Kolkata', label: 'Mumbai' },
  { value: 'Asia/Singapore', label: 'Singapore' },
  { value: 'Asia/Tokyo', label: 'Tokyo' },
  { value: 'Australia/Sydney', label: 'Sydney' },
];

export const REPEAT_OPTIONS: { value: Repeat; label: string }[] = [
  { value: 'none', label: 'Does not repeat' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' },
];

export const INTERVAL_UNITS: Record<Exclude<Repeat, 'none'>, [string, string]> = {
  daily: ['day', 'days'],
  weekly: ['week', 'weeks'],
  monthly: ['month', 'months'],
  yearly: ['year', 'years'],
};

export const WEEKDAY_OPTIONS: { value: Weekday; label: string }[] = [
  { value: 'MO', label: 'Mon' },
  { value: 'TU', label: 'Tue' },
  { value: 'WE', label: 'Wed' },
  { value: 'TH', label: 'Thu' },
  { value: 'FR', label: 'Fri' },
  { value: 'SA', label: 'Sat' },
  { value: 'SU', label: 'Sun' },
];

export const SERIES_END_OPTIONS: { value: SeriesEnd; label: string }[] = [
  { value: 'never', label: 'Never' },
  { value: 'after', label: 'After a number of occurrences' },
  { value: 'on', label: 'On a date' },
];

export const PREVIEW_LIMIT = 5;

export function getDefaultTimezone() {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return TIMEZONES.some((timezone) => timezone.value === browserTimezone) ? browserTimezone : 'UTC';
}

const isTimed = (values: RecurringEventValues) => !values.allDay;
const repeats = (values: RecurringEventValues) => values.recurrence.repeat !== 'none';
const repeatsWeekly = (values: RecurringEventValues) => values.recurrence.repeat === 'weekly';
const endsWith = (ends: SeriesEnd) => (values: RecurringEventValues) =>
  repeats(values) && values.recurrence.ends === ends;

export function getExceptionsError(exceptions: string[], values: RecurringEventValues) {
  const rule = toRecurrenceRule(values.startDate, values.recurrence);
  if (!rule) {
    return null;
  }
  const duplicate = exceptions.find((date, index) => exceptions.indexOf(date) !== index);
  if (duplicate) {
    return `${formatDate(duplicate)} is already skipped`;
  }
  const outside = exceptions.find((date) => !isOccurrence(rule, date));
  return outside ? `${formatDate(outside)} is not in the series` : null;
}

export const rules: FormRulesRecord<RecurringEventValues> = {
  title: isNotEmpty('Title is required'),
  startDate: isNotEmpty('Start date is required'),
  startTime: when(isTimed, isNotEmpty('Start time is required')),
  endDate: (value, values) => {
    if (!value) {
      return 'End date is required';
    }
    return values.startDate && value < values.startDate ? 'End must be after the start' : null;
  },
  endTime: when(isTimed, (value: string, values: RecurringEventValues) => {
    if (!value) {
      return 'End time is required';
    }
    const sameDay = values.endDate === values.startDate;
    return sameDay && values.startTime && value <= values.startTime
      ? 'End must be after the start'
      : null;
  }),
  timezone: isNotEmpty('Timezone is required'),
  recurrence: {
    interval: when(repeats, isInRange({ min: 1, max: 99 }, 'Enter a number from 1 to 99')),
    weekdays: when(repeatsWeekly, isNotEmpty('Pick at least one day')),
    count: when(endsWith('after'), isInRange({ min: 1, max: 500 }, 'Enter a number from 1 to 500')),
    until: when(endsWith('on'), (value: string | null, values: RecurringEventValues) => {
      if (!value) {
        return 'Series end date is required';
      }
      return values.startDate && value <= values.startDate ? 'Must be after the start date' : null;
    }),
  },
  exceptions: when(repeats, getExceptionsError),
};
