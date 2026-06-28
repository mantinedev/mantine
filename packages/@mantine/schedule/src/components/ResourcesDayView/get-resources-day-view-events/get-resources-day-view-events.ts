import dayjs from 'dayjs';
import {
  AnyDateValue,
  DayPositionedEventData,
  ScheduleEventData,
  ScheduleResourceData,
} from '../../../types';
import { getDayPosition, isAllDayEvent, isEventInTimeRange, validateEvent } from '../../../utils';
import { getDayPositionedEvents } from '../../DayView/get-day-view-events/get-day-positioned-events';

interface GetResourcesDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  resources: ScheduleResourceData[];
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
}

export interface ResourcesDayViewEventsResult {
  regularEvents: Record<string | number, DayPositionedEventData[]>;
  allDayEvents: Record<string | number, DayPositionedEventData[]>;
  backgroundTimedEvents: Record<string | number, DayPositionedEventData[]>;
  backgroundAllDayEvents: Record<string | number, DayPositionedEventData[]>;
}

export function getResourcesDayViewEvents({
  events,
  resources,
  date,
  startTime,
  endTime,
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

  const dayStart = dayjs(date).startOf('day');
  const dayEnd = dayjs(date).endOf('day');

  const eventsByResource: Record<string | number, ScheduleEventData[]> = {};
  const backgroundByResource: Record<string | number, ScheduleEventData[]> = {};

  for (const resource of resources) {
    eventsByResource[resource.id] = [];
    backgroundByResource[resource.id] = [];
  }

  const ids = new Set<string | number>();

  for (const event of events) {
    if (event.resourceId === undefined) {
      continue;
    }

    if (!(event.resourceId in eventsByResource)) {
      continue;
    }

    const eventStart = dayjs(event.start);
    const eventEnd = dayjs(event.end);

    const isOnDay = eventStart.isSame(dayStart, 'day');
    const overlapsDay = eventStart.isBefore(dayEnd) && eventEnd.isAfter(dayStart);

    if (isOnDay || overlapsDay) {
      if (isOnDay && !isEventInTimeRange({ event, startTime, endTime })) {
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

      if (event.display === 'background') {
        backgroundByResource[event.resourceId].push(validated);
      } else if (isOnDay) {
        eventsByResource[event.resourceId].push(validated);
      } else {
        const clippedStart = eventStart.isBefore(dayStart) ? dayStart : eventStart;
        const clippedEnd = eventEnd.isAfter(dayEnd) ? dayEnd : eventEnd;

        const clippedEvent = {
          ...validated,
          start: clippedStart.format('YYYY-MM-DD HH:mm:ss'),
          end: clippedEnd.format('YYYY-MM-DD HH:mm:ss'),
        };

        if (isEventInTimeRange({ event: clippedEvent, startTime, endTime })) {
          eventsByResource[event.resourceId].push(clippedEvent);
        }
      }
    }
  }

  for (const resource of resources) {
    const positioned = getDayPositionedEvents({
      events: eventsByResource[resource.id],
      startTime,
      endTime,
      date,
    });

    for (const event of positioned) {
      if (event.position.allDay) {
        result.allDayEvents[resource.id].push(event);
      } else {
        result.regularEvents[resource.id].push(event);
      }
    }

    for (const event of backgroundByResource[resource.id]) {
      const eventStart = dayjs(event.start);
      const eventEnd = dayjs(event.end);
      const clippedStart = eventStart.isBefore(dayStart) ? dayStart : eventStart;
      const clippedEnd = eventEnd.isAfter(dayEnd) ? dayEnd : eventEnd;

      const clippedEvent = {
        ...event,
        start: clippedStart.format('YYYY-MM-DD HH:mm:ss'),
        end: clippedEnd.format('YYYY-MM-DD HH:mm:ss'),
      };

      const allDay = isAllDayEvent({ event: clippedEvent, date });

      if (allDay) {
        result.backgroundAllDayEvents[resource.id].push({
          ...event,
          position: {
            top: 0,
            height: 100,
            allDay: true,
            width: 100,
            offset: 0,
            column: 0,
            overlaps: 1,
          },
        });
      } else {
        const { top, height } = getDayPosition({ event: clippedEvent, startTime, endTime });
        if (height <= 0) {
          continue;
        }
        result.backgroundTimedEvents[resource.id].push({
          ...event,
          position: { top, height, allDay: false, width: 100, offset: 0, column: 0, overlaps: 1 },
        });
      }
    }
  }

  return result;
}
