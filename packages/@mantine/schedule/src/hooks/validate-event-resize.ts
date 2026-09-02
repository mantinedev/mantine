import {
  DateTimeStringValue,
  PreventEventOverlap,
  ScheduleCanResizeEventToData,
  ScheduleEventData,
} from '../types';
import { isEventPlacementAllowed } from '../utils/is-event-placement-allowed/is-event-placement-allowed';

export interface EventResizeValidationOptions {
  /** Events the candidate range is checked against when `preventEventOverlap` is set */
  events?: ScheduleEventData[];

  /** If set, resizes that would make the event overlap another event are rejected */
  preventEventOverlap?: PreventEventOverlap;

  /** Called before a resize is committed, return `false` to reject the new size */
  canResizeEventTo?: (data: ScheduleCanResizeEventToData) => boolean;

  /** Called when a resize is rejected */
  onEventPlacementRejected?: (data: {
    action: 'resize';
    event: ScheduleEventData;
    start: DateTimeStringValue;
    end: DateTimeStringValue;
    edge: 'start' | 'end';
    resourceId?: string | number;
    conflicts: ScheduleEventData[];
    reason: 'overlap' | 'rejected';
  }) => void;
}

export interface ValidateEventResizeInput extends EventResizeValidationOptions {
  event: ScheduleEventData;
  start: DateTimeStringValue;
  end: DateTimeStringValue;
  edge: 'start' | 'end';
  resourceId?: string | number;
}

export interface ValidateEventResizeResult {
  valid: boolean;
  conflicts: ScheduleEventData[];
  reason: 'overlap' | 'rejected' | null;
}

export function validateEventResize({
  event,
  start,
  end,
  edge,
  events,
  preventEventOverlap,
  canResizeEventTo,
  resourceId,
}: ValidateEventResizeInput): ValidateEventResizeResult {
  const { allowed, conflicts } = isEventPlacementAllowed({
    event,
    start,
    end,
    events: events || [],
    preventEventOverlap,
    resourceId,
  });

  if (!allowed) {
    return { valid: false, conflicts, reason: 'overlap' };
  }

  if (canResizeEventTo && canResizeEventTo({ event, start, end, edge }) === false) {
    return { valid: false, conflicts: [], reason: 'rejected' };
  }

  return { valid: true, conflicts: [], reason: null };
}
