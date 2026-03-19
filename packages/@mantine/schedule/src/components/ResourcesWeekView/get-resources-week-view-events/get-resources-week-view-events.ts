import dayjs from 'dayjs';
import {
  ScheduleEventData,
  ScheduleResourceData,
} from '../../../types';
import { expandRecurringEvents } from '../../../utils';
import { getResourcesDayViewEvents, ResourcesDayViewEventsResult } from '../../ResourcesDayView/get-resources-day-view-events/get-resources-day-view-events';

export interface ResourcesWeekViewEventsResult {
  byDay: Record<string, ResourcesDayViewEventsResult>;
}

interface GetResourcesWeekViewEventsInput {
  events: ScheduleEventData[] | undefined;
  resources: ScheduleResourceData[];
  weekdays: string[];
  startTime?: string;
  endTime?: string;
  expansionLimit?: number;
}

export function getResourcesWeekViewEvents({
  events,
  resources,
  weekdays,
  startTime,
  endTime,
  expansionLimit,
}: GetResourcesWeekViewEventsInput): ResourcesWeekViewEventsResult {
  const rangeStart = dayjs(weekdays[0]).startOf('day').toDate();
  const rangeEnd = dayjs(weekdays[weekdays.length - 1]).endOf('day').toDate();

  const expandedEvents = expandRecurringEvents({
    events,
    rangeStart,
    rangeEnd,
    expansionLimit,
  });

  if (expandedEvents) {
    const seenIds = new Set<string | number>();
    for (const event of expandedEvents) {
      if (seenIds.has(event.id)) {
        throw new Error(
          `[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${event.id}`
        );
      }
      seenIds.add(event.id);
    }
  }

  const byDay: Record<string, ResourcesDayViewEventsResult> = {};

  const assignedIds = new Set<string | number>();

  for (const day of weekdays) {
    const dayEvents = expandedEvents?.filter((event) => {
      if (assignedIds.has(event.id)) {
        return false;
      }

      const eventStart = dayjs(event.start);
      const dayStart = dayjs(day).startOf('day');

      if (eventStart.isSame(dayStart, 'day')) {
        assignedIds.add(event.id);
        return true;
      }

      if (
        event.display === 'background' &&
        eventStart.isBefore(dayjs(day).endOf('day')) &&
        dayjs(event.end).isAfter(dayStart)
      ) {
        return true;
      }

      return false;
    });

    byDay[day] = getResourcesDayViewEvents({
      events: dayEvents,
      resources,
      date: day,
      startTime,
      endTime,
    });
  }

  return { byDay };
}
