import dayjs from 'dayjs';
import { useMemo } from 'react';
import { DateStringValue, ScheduleEventData } from '../../../types';
import { EventPositionData, getEventPosition, validateEvent } from '../../../utils';

interface UseDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: Date | DateStringValue;
  startTime: string | undefined;
  endTime: string | undefined;
}

export interface ScheduleEventDayViewData extends ScheduleEventData {
  /** Event position data relative to the day start */
  position: EventPositionData;
}

export function filterDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  if (events === undefined) {
    return [];
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventDayViewData[] = [];

  for (const event of events) {
    if (dayjs(event.start).isSame(dayjs(date), 'day')) {
      const eventData = validateEvent(event);
      filteredEvents.push({
        ...eventData,
        position: getEventPosition({ event: eventData, startTime, endTime }),
      });

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  return filteredEvents;
}

export function useDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  return useMemo(() => {
    return filterDayViewEvents({ events, date, startTime, endTime });
  }, [events, date, startTime, endTime]);
}
