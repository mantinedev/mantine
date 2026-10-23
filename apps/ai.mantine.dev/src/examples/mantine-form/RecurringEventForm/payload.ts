import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { getMonthlyOn } from './recurrence';
import type {
  RecurrenceEnd,
  RecurrencePayload,
  RecurringEventPayload,
  RecurringEventValues,
} from './types';
import { WEEKDAY_OPTIONS } from './validation';

dayjs.extend(utc);
dayjs.extend(timezone);

/** Wall-clock time in the event timezone as an ISO string with that zone's offset */
function toIsoString(value: string, allDay: boolean, zone: string) {
  return allDay ? value.slice(0, 10) : dayjs.tz(value, zone).format();
}

function getEnd(values: RecurringEventValues): RecurrenceEnd {
  if (values.ends === 'after') {
    return { type: 'after', count: Number(values.count) };
  }

  if (values.ends === 'on') {
    return { type: 'on', until: values.until! };
  }

  return { type: 'never' };
}

function getRecurrence(values: RecurringEventValues): RecurrencePayload {
  if (!values.repeats) {
    return { repeat: 'none' };
  }

  return {
    repeat: values.frequency,
    interval: Number(values.interval),
    ...(values.frequency === 'weekly' && {
      weekdays: WEEKDAY_OPTIONS.map((option) => option.value).filter((weekday) =>
        values.weekdays.includes(weekday)
      ),
    }),
    ...(values.frequency === 'monthly' && {
      monthlyOn: getMonthlyOn(values.start!, values.monthlyMode),
    }),
    ends: getEnd(values),
  };
}

export function buildPayload(values: RecurringEventValues): RecurringEventPayload {
  const zone = values.timezone!;

  return {
    title: values.title.trim(),
    description: values.description.trim() || null,
    start: toIsoString(values.start!, values.allDay, zone),
    end: toIsoString(values.end!, values.allDay, zone),
    allDay: values.allDay,
    timezone: zone,
    location: values.location.trim() || null,
    recurrence: getRecurrence(values),
    ...(values.repeats && { exceptions: [...values.exceptions].sort() }),
  };
}
