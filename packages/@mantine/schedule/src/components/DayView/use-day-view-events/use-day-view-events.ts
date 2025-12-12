import dayjs from 'dayjs';
import { useMemo } from 'react';
import { DateStringValue, ScheduleEventData } from '../../../types';
import { validateEvent } from '../../../utils';

interface UseDayViewEventsInput {
  events: ScheduleEventData[] | undefined;
  date: Date | DateStringValue;
}

export function filterDayViewEvents({ events, date }: UseDayViewEventsInput) {
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

  return filteredEvents;
}

export function useDayViewEvents({ events, date }: UseDayViewEventsInput) {
  return useMemo(() => {
    return filterDayViewEvents({ events, date });
  }, [events, date]);
}
