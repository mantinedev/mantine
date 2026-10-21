import { isInRange, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import { getRule, isInSeries } from './recurrence';
import type { Frequency, Repeat, RecurringEventValues, SeriesEnd, Weekday } from './types';

export const TIMEZONES = [
  { value: 'UTC', label: 'UTC' },
  { value: 'Pacific/Honolulu', label: 'Honolulu' },
  { value: 'America/Los_Angeles', label: 'Los Angeles' },
  { value: 'America/Chicago', label: 'Chicago' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Europe/Berlin', label: 'Berlin' },
  { value: 'Asia/Dubai', label: 'Dubai' },
  { value: 'Asia/Kolkata', label: 'Kolkata' },
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

export const INTERVAL_UNITS: Record<Frequency, string> = {
  daily: 'days',
  weekly: 'weeks',
  monthly: 'months',
  yearly: 'years',
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

export const DEFAULT_START_TIME = '09:00:00';
export const DEFAULT_END_TIME = '10:00:00';

export function getBrowserTimezone() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  return TIMEZONES.some((timezone) => timezone.value === timeZone) ? timeZone : 'UTC';
}

export function getInitialValues(): RecurringEventValues {
  return {
    title: '',
    description: '',
    start: null,
    end: null,
    allDay: false,
    timezone: getBrowserTimezone(),
    location: '',
    repeat: 'none',
    interval: 1,
    weekdays: [],
    monthlyMode: 'dayOfMonth',
    ends: 'never',
    count: 10,
    until: null,
    exceptions: [],
  };
}

const repeats = (values: RecurringEventValues) => values.repeat !== 'none';

const isEndAfterStart = (end: string, values: RecurringEventValues) => {
  if (!values.start) {
    return true;
  }
  return values.allDay ? end.slice(0, 10) >= values.start.slice(0, 10) : end > values.start;
};

// Keys are in the order of the fields on screen: the first error key is the first invalid field
export const recurringEventRules: FormRulesRecord<RecurringEventValues> = {
  title: isNotEmpty('Enter a title'),
  start: (value, values) =>
    value ? null : values.allDay ? 'Enter a start date' : 'Enter a start date and time',
  end: (value, values) => {
    if (!value) {
      return values.allDay ? 'Enter an end date' : 'Enter an end date and time';
    }
    return isEndAfterStart(value, values) ? null : 'End must be after the start';
  },
  timezone: isNotEmpty('Pick a timezone'),
  interval: when(repeats, isInRange({ min: 1, max: 99 }, 'Enter a number from 1 to 99')),
  weekdays: when((values) => values.repeat === 'weekly', isNotEmpty('Pick at least one day')),
  count: when(
    (values) => repeats(values) && values.ends === 'after',
    isInRange({ min: 1, max: 500 }, 'Enter a number from 1 to 500')
  ),
  until: when(
    (values) => repeats(values) && values.ends === 'on',
    (value, values) =>
      value && (!values.start || value > values.start.slice(0, 10))
        ? null
        : 'Enter a date after the start date'
  ),
  exceptions: when(repeats, (value, values) => {
    if (new Set(value).size !== value.length) {
      return 'Each date can be skipped only once';
    }
    const rule = getRule(values);
    if (rule && value.some((date) => !isInSeries(rule, date))) {
      return 'Skipped dates must be dates of the series';
    }
    return null;
  }),
};
