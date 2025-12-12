import dayjs from 'dayjs';
import { useMemo } from 'react';
import { DateStringValue, ScheduleEventData } from '../../../types';
import { validateEvent } from '../../../utils';
import { getPositionedEvents } from '../../../utils/get-positioned-events/get-positioned-events';

interface UseDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: Date | DateStringValue;
  startTime: string | undefined;
  endTime: string | undefined;
}

export function filterDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  if (events === undefined) {
    return [];
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];

  for (const event of events) {
    if (dayjs(event.start).isSame(dayjs(date), 'day')) {
      filteredEvents.push(validateEvent(event));

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  return getPositionedEvents({ events: filteredEvents, startTime, endTime, date });
}

export function useDayViewEvents({ events, date, startTime, endTime }: UseDayViewEventsInput) {
  return useMemo(() => {
    return filterDayViewEvents({ events, date, startTime, endTime });
  }, [events, date, startTime, endTime]);
}
