import { useMemo } from 'react';
import { DateStringValue, DayOfWeek, ScheduleEventData } from '../../../types';
import {
  getMonthPositionedEvents,
  GroupedMonthEvents,
  isSameMonth,
  validateEvent,
} from '../../../utils';

interface UseMonthViewEventsInput {
  /** Date (month start) at which events are positioned */
  date: Date | DateStringValue;

  /** List of all events that belong to the given month, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[] | undefined;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;
}

export function filterMonthViewEvents({
  date,
  events,
  firstDayOfWeek = 1,
}: UseMonthViewEventsInput): GroupedMonthEvents {
  if (events === undefined) {
    return {};
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];

  for (const event of events) {
    if (isSameMonth(date, event.start) || isSameMonth(date, event.end)) {
      filteredEvents.push(validateEvent(event));

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  return getMonthPositionedEvents({
    date,
    events: filteredEvents,
    firstDayOfWeek,
  });
}

export function useMonthViewEvents({
  date,
  events,
  firstDayOfWeek = 1,
}: UseMonthViewEventsInput): GroupedMonthEvents {
  return useMemo(
    () =>
      filterMonthViewEvents({
        date,
        events,
        firstDayOfWeek,
      }),
    [date, events, firstDayOfWeek]
  );
}
