import dayjs from 'dayjs';
import { DateTimeStringValue, PreventEventOverlap, ScheduleEventData } from '../../types';
import { isEventsOverlap } from '../is-events-overlap/is-events-overlap';

export interface IsEventPlacementAllowedInput {
  /** Event that is being moved or resized */
  event: ScheduleEventData;

  /** Candidate start of the event */
  start: DateTimeStringValue;

  /** Candidate end of the event */
  end: DateTimeStringValue;

  /** Events the candidate range is checked against */
  events: ScheduleEventData[];

  /** If set, placements that overlap another event are rejected */
  preventEventOverlap?: PreventEventOverlap;

  /** Target resource, limits the check to events of that resource */
  resourceId?: string | number;
}

export interface IsEventPlacementAllowedResult {
  /** True if the candidate range does not conflict with any event */
  allowed: boolean;

  /** Events the candidate range collided with */
  conflicts: ScheduleEventData[];
}

function isSameEvent(event: ScheduleEventData, other: ScheduleEventData) {
  if (event.id === other.id) {
    return true;
  }

  const eventSeriesId = event.recurringEventId ?? event.recurringInstance?.recurringEventId;
  const otherSeriesId = other.recurringEventId ?? other.recurringInstance?.recurringEventId;

  if (eventSeriesId === undefined || otherSeriesId === undefined) {
    return false;
  }

  const eventOccurrenceId = event.recurrenceId ?? event.recurringInstance?.recurrenceId;
  const otherOccurrenceId = other.recurrenceId ?? other.recurringInstance?.recurrenceId;

  return (
    eventSeriesId === otherSeriesId &&
    eventOccurrenceId !== undefined &&
    eventOccurrenceId === otherOccurrenceId
  );
}

function isMidnight(value: dayjs.Dayjs) {
  return value.hour() === 0 && value.minute() === 0 && value.second() === 0;
}

function spansWholeDays(event: ScheduleEventData) {
  const start = dayjs(event.start);
  const end = dayjs(event.end);

  if (!isMidnight(start)) {
    return false;
  }

  return isMidnight(end) || (end.hour() === 23 && end.minute() === 59 && end.second() === 59);
}

export function isEventPlacementAllowed({
  event,
  start,
  end,
  events,
  preventEventOverlap,
  resourceId,
}: IsEventPlacementAllowedInput): IsEventPlacementAllowedResult {
  if (!preventEventOverlap) {
    return { allowed: true, conflicts: [] };
  }

  const candidate = { ...event, start, end } as ScheduleEventData;
  const candidateIsAllDay = spansWholeDays(candidate);
  const conflicts = events.filter((other) => {
    if (other.display === 'background' || isSameEvent(event, other)) {
      return false;
    }

    if (resourceId !== undefined && other.resourceId !== resourceId) {
      return false;
    }

    if (spansWholeDays(other) !== candidateIsAllDay) {
      return false;
    }

    if (!isEventsOverlap(other, candidate)) {
      return false;
    }

    return typeof preventEventOverlap === 'function' ? preventEventOverlap(other, candidate) : true;
  });

  return { allowed: conflicts.length === 0, conflicts };
}
