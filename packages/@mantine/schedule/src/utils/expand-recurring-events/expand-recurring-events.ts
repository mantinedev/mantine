import dayjs from 'dayjs';
import * as rruleAll from 'rrule';

const RRule = (
  'default' in rruleAll ? (rruleAll as any).default.RRule : rruleAll.RRule
) as typeof rruleAll.RRule;
import { DateTimeStringValue, ScheduleEventData, ScheduleRecurrenceData } from '../../types';
import { validateEvent } from '../validate-event/validate-event';

interface ExpandRecurringEventsInput {
  events: ScheduleEventData[] | undefined;
  rangeStart: Date | string;
  rangeEnd: Date | string;
  expansionLimit?: number;
}

function getRecurrenceKey(recurringEventId: string | number, recurrenceId: DateTimeStringValue) {
  return `${recurringEventId}::${recurrenceId}`;
}

function overlapsRange(
  eventStart: dayjs.Dayjs,
  eventEnd: dayjs.Dayjs,
  rangeStart: dayjs.Dayjs,
  rangeEnd: dayjs.Dayjs
) {
  return (
    (eventEnd.isAfter(rangeStart) || eventEnd.isSame(rangeStart)) &&
    (eventStart.isBefore(rangeEnd) || eventStart.isSame(rangeEnd))
  );
}

function getExdateSet(recurrence: ScheduleRecurrenceData | undefined) {
  if (!recurrence?.exdate) {
    return new Set<string>();
  }

  const values = recurrence.exdate
    .map((value) => dayjs(value))
    .filter((value) => value.isValid())
    .map((value) => value.format('YYYY-MM-DD HH:mm:ss'));

  return new Set(values);
}

function getRRuleString(rule: string) {
  const normalized = rule.trim();
  if (!normalized.includes('\n')) {
    return normalized.startsWith('RRULE:') ? normalized.replace(/^RRULE:/, '') : normalized;
  }

  const rruleLine = normalized
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.startsWith('RRULE:'));

  return rruleLine ? rruleLine.replace(/^RRULE:/, '') : normalized;
}

function getOccurrenceStartsInRange(
  event: ScheduleEventData,
  rangeStart: dayjs.Dayjs,
  rangeEnd: dayjs.Dayjs,
  expansionLimit: number,
  durationMs: number
) {
  const dtstart = dayjs(event.recurrence?.dtstart || event.start);
  if (!dtstart.isValid() || !event.recurrence) {
    return [];
  }

  try {
    const options = RRule.parseString(getRRuleString(event.recurrence.rrule));
    options.dtstart = dtstart.toDate();
    const rule = new RRule(options);

    const searchStart = rangeStart.subtract(Math.max(0, durationMs), 'millisecond').toDate();
    const results = rule.between(searchStart, rangeEnd.toDate(), true);
    return results.slice(0, expansionLimit).map((value) => dayjs(value));
  } catch {
    return [];
  }
}

function isEventInRange(event: ScheduleEventData, rangeStart: dayjs.Dayjs, rangeEnd: dayjs.Dayjs) {
  const start = dayjs(event.start);
  const end = dayjs(event.end);

  if (!start.isValid() || !end.isValid()) {
    return false;
  }

  return overlapsRange(start, end, rangeStart, rangeEnd);
}

function createGeneratedInstance(
  event: ScheduleEventData,
  occurrenceStart: dayjs.Dayjs,
  durationMs: number
): ScheduleEventData {
  const occurrenceEnd = occurrenceStart.add(durationMs, 'millisecond');
  const recurrenceId = occurrenceStart.format('YYYY-MM-DD HH:mm:ss');
  const { recurrence, ...eventWithoutRecurrence } = event;

  return {
    ...eventWithoutRecurrence,
    id: `${event.id}::${recurrenceId}`,
    start: occurrenceStart.format('YYYY-MM-DD HH:mm:ss'),
    end: occurrenceEnd.format('YYYY-MM-DD HH:mm:ss'),
    recurringEventId: event.id,
    recurrenceId,
    recurringInstance: {
      isRecurringInstance: true,
      recurringEventId: event.id,
      recurrenceId,
      originalStart: occurrenceStart.format('YYYY-MM-DD HH:mm:ss'),
      originalEnd: occurrenceEnd.format('YYYY-MM-DD HH:mm:ss'),
    },
  };
}

const DEFAULT_EXPANSION_LIMIT = 2000;

export function expandRecurringEvents({
  events,
  rangeStart,
  rangeEnd,
  expansionLimit = DEFAULT_EXPANSION_LIMIT,
}: ExpandRecurringEventsInput): ScheduleEventData[] {
  if (!events || events.length === 0) {
    return [];
  }

  const start = dayjs(rangeStart);
  const end = dayjs(rangeEnd);

  if (!start.isValid() || !end.isValid()) {
    return [];
  }

  const regularEvents: ScheduleEventData[] = [];
  const recurringEvents: ScheduleEventData[] = [];
  const overrides = new Map<string, ScheduleEventData>();

  for (const event of events) {
    if (event.recurringEventId && event.recurrenceId) {
      overrides.set(getRecurrenceKey(event.recurringEventId, event.recurrenceId), event);
      continue;
    }

    if (event.recurrence?.rrule) {
      recurringEvents.push(event);
      continue;
    }

    regularEvents.push(event);
  }

  const output: ScheduleEventData[] = [];
  const consumedOverrideIds = new Set<string | number>();

  for (const event of regularEvents) {
    if (isEventInRange(event, start, end)) {
      output.push(validateEvent(event));
    }
  }

  for (const event of recurringEvents) {
    const eventStart = dayjs(event.recurrence?.dtstart || event.start);
    const eventEnd = dayjs(event.end);

    if (!eventStart.isValid() || !eventEnd.isValid()) {
      continue;
    }

    const durationMs = eventEnd.diff(dayjs(event.start), 'millisecond');
    if (durationMs < 0) {
      continue;
    }

    const exdate = getExdateSet(event.recurrence);
    const starts = getOccurrenceStartsInRange(event, start, end, expansionLimit, durationMs);

    for (const occurrenceStart of starts) {
      const recurrenceId = occurrenceStart.format('YYYY-MM-DD HH:mm:ss');
      if (exdate.has(recurrenceId)) {
        continue;
      }

      const overrideKey = getRecurrenceKey(event.id, recurrenceId);
      const override = overrides.get(overrideKey);
      if (override) {
        if (isEventInRange(override, start, end)) {
          output.push(validateEvent(override));
          consumedOverrideIds.add(override.id);
        }
        continue;
      }

      const generated = createGeneratedInstance(event, occurrenceStart, durationMs);
      if (overlapsRange(dayjs(generated.start), dayjs(generated.end), start, end)) {
        output.push(validateEvent(generated));
      }
    }
  }

  for (const override of overrides.values()) {
    if (consumedOverrideIds.has(override.id)) {
      continue;
    }
    if (isEventInRange(override, start, end)) {
      output.push(validateEvent(override));
    }
  }

  return output;
}

export { DEFAULT_EXPANSION_LIMIT };
