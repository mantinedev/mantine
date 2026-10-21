import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { WEEK_ORDER } from './recurrence';
import type {
  EventPayload,
  RecurrenceEndPayload,
  RecurrencePayload,
  RecurrenceValues,
  RecurringEventValues,
  SeriesEnd,
} from './types';

dayjs.extend(utc);
dayjs.extend(timezone);

// All-day events are dates without a zone; timed events carry the offset of the event timezone
function toIsoString(date: string, time: string, allDay: boolean, zone: string) {
  return allDay ? date : dayjs.tz(`${date} ${time}`, zone).format();
}

const SERIES_ENDS: Record<SeriesEnd, (recurrence: RecurrenceValues) => RecurrenceEndPayload> = {
  never: () => ({ type: 'never' }),
  after: (recurrence) => ({ type: 'after', count: Number(recurrence.count) }),
  on: (recurrence) => ({ type: 'on', date: recurrence.until ?? '' }),
};

function toRecurrencePayload(recurrence: RecurrenceValues): RecurrencePayload | null {
  const { repeat } = recurrence;
  if (repeat === 'none') {
    return null;
  }
  return {
    repeat,
    interval: Number(recurrence.interval),
    ...(repeat === 'weekly' && {
      weekdays: WEEK_ORDER.filter((day) => recurrence.weekdays.includes(day)),
    }),
    ...(repeat === 'monthly' && { monthlyOn: recurrence.monthlyOn }),
    ends: SERIES_ENDS[recurrence.ends](recurrence),
  };
}

export function toEventPayload(values: RecurringEventValues): EventPayload {
  const zone = values.timezone ?? 'UTC';
  const recurrence = toRecurrencePayload(values.recurrence);
  return {
    title: values.title.trim(),
    description: values.description.trim(),
    start: toIsoString(values.startDate ?? '', values.startTime, values.allDay, zone),
    end: toIsoString(values.endDate ?? '', values.endTime, values.allDay, zone),
    allDay: values.allDay,
    timezone: zone,
    location: values.location.trim(),
    recurrence,
    exceptions: recurrence ? values.exceptions : [],
  };
}
