import dayjs from 'dayjs';
import { useMemo } from 'react';
import { AnyDateValue, DayPositionedEventData, ScheduleEventData } from '../../../types';
import { isEventInTimeRange, validateEvent } from '../../../utils';
import { getDayPositionedEvents } from './get-day-positioned-events';

interface UseDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: AnyDateValue;
  startTime: string | undefined;
  endTime: string | undefined;
}

export function filterDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  if (events === undefined) {
    return { allDayEvents: [], regularEvents: [] };
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];

  for (const event of events) {
    if (dayjs(event.start).isSame(dayjs(date), 'day')) {
      if (!isEventInTimeRange({ event, startTime, endTime })) {
        continue;
      }

      filteredEvents.push(validateEvent(event));

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  const positionedEvents = getDayPositionedEvents({
    events: filteredEvents,
    startTime,
    endTime,
    date,
  });

  const allDayEvents: DayPositionedEventData[] = [];
  const regularEvents: DayPositionedEventData[] = [];

  for (const event of positionedEvents) {
    if (event.position.allDay) {
      allDayEvents.push(event);
    } else {
      regularEvents.push(event);
    }
  }

  return { allDayEvents, regularEvents };
}

export function useDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  return useMemo(() => {
    return filterDayViewEvents({ events, date, startTime, endTime });
  }, [events, date, startTime, endTime]);
}
