import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { getMonthlyRule, sortWeekdays } from './recurrence';
import type {
  Recurrence,
  RecurrenceEnd,
  RecurringEventPayload,
  RecurringEventValues,
} from './types';

dayjs.extend(utc);
dayjs.extend(timezone);

function getRecurrenceEnd(values: RecurringEventValues): RecurrenceEnd {
  if (values.ends === 'after') {
    return { ends: 'after', count: Number(values.count) };
  }

  if (values.ends === 'on' && values.until) {
    return { ends: 'on', until: values.until };
  }

  return { ends: 'never' };
}

/** The recurrence rule with only the fields that apply to the selected repeat option */
export function getRecurrence(values: RecurringEventValues): Recurrence | null {
  if (values.repeat === 'none' || !values.start) {
    return null;
  }

  return {
    frequency: values.repeat,
    interval: Number(values.interval),
    ...(values.repeat === 'weekly' && { weekdays: sortWeekdays(values.weekdays) }),
    ...(values.repeat === 'monthly' && { monthly: getMonthlyRule(values.start, values.monthlyBy) }),
    ...getRecurrenceEnd(values),
  };
}

function toIsoString(value: string | null, values: RecurringEventValues) {
  if (!value || values.allDay) {
    return value;
  }

  return dayjs.tz(value, values.timezone ?? 'UTC').format();
}

export function toPayload(values: RecurringEventValues): RecurringEventPayload {
  const recurrence = getRecurrence(values);

  return {
    title: values.title.trim(),
    description: values.description.trim(),
    start: toIsoString(values.start, values),
    end: toIsoString(values.end, values),
    allDay: values.allDay,
    timezone: values.timezone,
    location: values.location.trim(),
    recurrence,
    exceptions: recurrence ? [...values.exceptions].sort() : [],
  };
}
