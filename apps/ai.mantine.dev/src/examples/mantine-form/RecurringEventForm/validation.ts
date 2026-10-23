import { isInRange, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import { getRecurrence } from './payload';
import { formatDate, isInSeries } from './recurrence';
import type { Ends, Frequency, Repeat, RecurringEventValues } from './types';

export const FORM_NAME = 'recurring-event';

export const TIMEZONES = [
  { value: 'America/Los_Angeles', label: 'Los Angeles' },
  { value: 'America/Denver', label: 'Denver' },
  { value: 'America/Chicago', label: 'Chicago' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'America/Sao_Paulo', label: 'São Paulo' },
  { value: 'UTC', label: 'UTC' },
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

export const INTERVAL_UNITS: Record<Frequency, [singular: string, plural: string]> = {
  daily: ['day', 'days'],
  weekly: ['week', 'weeks'],
  monthly: ['month', 'months'],
  yearly: ['year', 'years'],
};

export const ENDS_OPTIONS: { value: Ends; label: string }[] = [
  { value: 'never', label: 'Never' },
  { value: 'after', label: 'After a number of occurrences' },
  { value: 'on', label: 'On a date' },
];

export const INTERVAL_LIMITS = { min: 1, max: 99 };
export const COUNT_LIMITS = { min: 1, max: 500 };

export function getDefaultTimezone() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  return TIMEZONES.some((timezone) => timezone.value === timeZone) ? timeZone : 'UTC';
}

export function getInitialValues(): RecurringEventValues {
  return {
    title: '',
    allDay: false,
    start: null,
    end: null,
    timezone: getDefaultTimezone(),
    location: '',
    description: '',
    repeat: 'none',
    interval: 1,
    weekdays: [],
    monthlyBy: 'dayOfMonth',
    ends: 'never',
    count: 10,
    until: null,
    exceptions: [],
  };
}

const repeats = (values: RecurringEventValues) => values.repeat !== 'none';

const intervalRule = isInRange(
  INTERVAL_LIMITS,
  `Interval must be between ${INTERVAL_LIMITS.min} and ${INTERVAL_LIMITS.max}`
);

const countRule = isInRange(
  COUNT_LIMITS,
  `Occurrences must be between ${COUNT_LIMITS.min} and ${COUNT_LIMITS.max}`
);

function endRule(value: string | null, values: RecurringEventValues) {
  if (!value) {
    return 'End is required';
  }

  // Values are YYYY-MM-DD[ HH:mm:ss] strings, so string order is time order;
  // an all-day event may end on the day it starts
  if (values.start && (values.allDay ? value < values.start : value <= values.start)) {
    return 'End must be after the start';
  }

  return null;
}

function untilRule(value: string | null, values: RecurringEventValues) {
  if (!value) {
    return 'End date is required';
  }

  if (values.start && value <= values.start.slice(0, 10)) {
    return 'End date must be after the start date';
  }

  return null;
}

const seriesRules = {
  interval: when(repeats, intervalRule),
  weekdays: when(
    (values: RecurringEventValues) => values.repeat === 'weekly',
    (value: string[]) => (value.length > 0 ? null : 'Pick at least one weekday')
  ),
  count: when(
    (values: RecurringEventValues) => repeats(values) && values.ends === 'after',
    countRule
  ),
  until: when((values: RecurringEventValues) => repeats(values) && values.ends === 'on', untilRule),
};

/** The fields that shape the series are valid, so its dates can be computed */
export function isRuleComplete(values: RecurringEventValues) {
  return (
    !!values.start &&
    !seriesRules.interval(values.interval, values, 'interval') &&
    !seriesRules.weekdays(values.weekdays, values, 'weekdays') &&
    !seriesRules.count(values.count, values, 'count') &&
    !seriesRules.until(values.until, values, 'until')
  );
}

function exceptionsRule(value: string[], values: RecurringEventValues) {
  if (new Set(value).size !== value.length) {
    return 'Exception dates must be unique';
  }

  // Other fields report their own errors while the series cannot be computed
  if (!isRuleComplete(values)) {
    return null;
  }

  const outside = value.find((date) => !isInSeries(values.start!, getRecurrence(values), date));
  return outside ? `${formatDate(outside)} is not a date of the series` : null;
}

// Rules are listed in the order of the fields on screen, the first error key is focused on submit
export const RULES: FormRulesRecord<RecurringEventValues> = {
  title: isNotEmpty('Title is required'),
  start: isNotEmpty('Start is required'),
  end: endRule,
  timezone: isNotEmpty('Timezone is required'),
  ...seriesRules,
  exceptions: when(repeats, exceptionsRule),
};
