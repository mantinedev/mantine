import {
  AnyDateValue,
  DayPositionedEventData,
  ScheduleEventData,
  ScheduleResourceData,
} from '../../../types';
import { validateEvent } from '../../../utils';
import {
  classifyDayEvents,
  isEventVisibleOnDay,
} from '../../DayView/get-day-view-events/classify-day-events';
import { DayLayoutEventData } from '../../DayView/get-day-view-events/get-day-positioned-events';

interface GetResourcesDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  resources: ScheduleResourceData[];
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
  intervalMinutes?: number;
}

export interface ResourcesDayViewEventsResult {
  /** Timed events with their original start and end, `position.displayStart`/`position.displayEnd` hold the range clipped to the day */
  regularEvents: Record<string | number, DayLayoutEventData[]>;

  /** All-day events (including multi-day events that cover the whole day) with their original start and end */
  allDayEvents: Record<string | number, DayLayoutEventData[]>;
  backgroundTimedEvents: Record<string | number, DayPositionedEventData[]>;
  backgroundAllDayEvents: Record<string | number, DayPositionedEventData[]>;
}

export function getResourcesDayViewEvents({
  events,
  resources,
  date,
  startTime,
  endTime,
  intervalMinutes,
}: GetResourcesDayViewEventsInput): ResourcesDayViewEventsResult {
  const result: ResourcesDayViewEventsResult = {
    regularEvents: {},
    allDayEvents: {},
    backgroundTimedEvents: {},
    backgroundAllDayEvents: {},
  };

  for (const resource of resources) {
    result.regularEvents[resource.id] = [];
    result.allDayEvents[resource.id] = [];
    result.backgroundTimedEvents[resource.id] = [];
    result.backgroundAllDayEvents[resource.id] = [];
  }

  if (events === undefined) {
    return result;
  }

  const eventsByResource: Record<string | number, ScheduleEventData[]> = {};

  for (const resource of resources) {
    eventsByResource[resource.id] = [];
  }

  const ids = new Set<string | number>();

  for (const event of events) {
    if (event.resourceId === undefined) {
      continue;
    }

    if (!(event.resourceId in eventsByResource)) {
      continue;
    }

    if (!isEventVisibleOnDay(event, { date, startTime, endTime })) {
      continue;
    }

    const validated = validateEvent(event);

    if (!ids.has(event.id)) {
      ids.add(event.id);
    } else {
      throw new Error(
        `[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${event.id}`
      );
    }

    eventsByResource[event.resourceId].push(validated);
  }

  for (const resource of resources) {
    const classified = classifyDayEvents({
      events: eventsByResource[resource.id],
      date,
      startTime,
      endTime,
      intervalMinutes,
    });

    result.regularEvents[resource.id] = classified.regularEvents;
    result.allDayEvents[resource.id] = classified.allDayEvents;
    result.backgroundTimedEvents[resource.id] = classified.backgroundTimedEvents;
    result.backgroundAllDayEvents[resource.id] = classified.backgroundAllDayEvents;
  }

  return result;
}
