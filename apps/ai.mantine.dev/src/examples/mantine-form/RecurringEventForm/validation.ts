import dayjs from 'dayjs';
import { isInRange, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import { getRecurrenceRule, isInSeries } from './recurrence';
import type { EndsMode, Frequency, RecurringEventValues, Weekday } from './types';

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

export function getDefaultTimezone() {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return TIMEZONES.some((timezone) => timezone.value === browserTimezone) ? browserTimezone : 'UTC';
}

export const FREQUENCY_UNITS: { value: Frequency; label: string }[] = [
  { value: 'daily', label: 'days' },
  { value: 'weekly', label: 'weeks' },
  { value: 'monthly', label: 'months' },
  { value: 'yearly', label: 'years' },
];

export const WEEKDAY_OPTIONS: { value: Weekday; label: string }[] = [
  { value: 'MO', label: 'Mon' },
  { value: 'TU', label: 'Tue' },
  { value: 'WE', label: 'Wed' },
  { value: 'TH', label: 'Thu' },
  { value: 'FR', label: 'Fri' },
  { value: 'SA', label: 'Sat' },
  { value: 'SU', label: 'Sun' },
];

export const ENDS_OPTIONS: { value: EndsMode; label: string }[] = [
  { value: 'never', label: 'Never' },
  { value: 'after', label: 'After a number of occurrences' },
  { value: 'on', label: 'On a date' },
];

export const DATE_FORMAT = 'MMM D, YYYY';

const repeats = (values: RecurringEventValues) => values.repeats;
const repeatsWith =
  (check: (values: RecurringEventValues) => boolean) => (values: RecurringEventValues) =>
    values.repeats && check(values);

function validateEnd(end: string | null, values: RecurringEventValues) {
  if (!end) {
    return 'End is required';
  }

  if (!values.start) {
    return null;
  }

  // All-day events may end on the day they start, timed events must end later
  const unit = values.allDay ? 'day' : 'minute';
  const endsAfterStart = values.allDay
    ? !dayjs(end).isBefore(values.start, unit)
    : dayjs(end).isAfter(values.start, unit);

  return endsAfterStart ? null : 'End must be after start';
}

function validateUntil(until: string | null, values: RecurringEventValues) {
  if (!until) {
    return 'Pick the date the series ends on';
  }

  return values.start && !dayjs(until).isAfter(values.start, 'day')
    ? 'End date must be after the start date'
    : null;
}

function validateExceptions(exceptions: string[], values: RecurringEventValues) {
  const rule = getRecurrenceRule(values);
  const seen = new Set<string>();

  for (const exception of exceptions) {
    const label = dayjs(exception).format(DATE_FORMAT);

    if (seen.has(exception)) {
      return `${label} is added twice`;
    }

    if (rule && !isInSeries(rule, exception)) {
      return `${label} is not an occurrence of the series`;
    }

    seen.add(exception);
  }

  return null;
}

// Rules are in the visual order of the fields: the first error key is the first invalid field
export const RULES: FormRulesRecord<RecurringEventValues> = {
  title: isNotEmpty('Title is required'),
  start: isNotEmpty('Start is required'),
  end: validateEnd,
  timezone: isNotEmpty('Timezone is required'),
  interval: when(repeats, isInRange({ min: 1, max: 99 }, 'Interval must be from 1 to 99')),
  weekdays: when(
    repeatsWith((values) => values.frequency === 'weekly'),
    isNotEmpty('Pick at least one weekday')
  ),
  count: when(
    repeatsWith((values) => values.ends === 'after'),
    isInRange({ min: 1, max: 500 }, 'Occurrences must be from 1 to 500')
  ),
  until: when(
    repeatsWith((values) => values.ends === 'on'),
    validateUntil
  ),
  exceptions: when(repeats, validateExceptions),
};
