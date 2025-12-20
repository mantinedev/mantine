import dayjs from 'dayjs';
import { useMemo } from 'react';
import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../../types';
import { getMonthRange, validateEvent } from '../../../utils';
import { getMonthPositionedEvents, GroupedMonthEvents } from './get-month-positioned-events';

interface UseMonthViewEventsInput {
  /** Date (month start) at which events are positioned */
  date: AnyDateValue;

  /** List of all events that belong to the given month, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[] | undefined;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;

  /** If true, events for outside days are included */
  withOutsideDays?: boolean;

  /** If true, month will show events for consistent number of weeks (6) */
  consistentWeeks?: boolean;
}

export function filterMonthViewEvents({
  date,
  events,
  firstDayOfWeek = 1,
  withOutsideDays,
  consistentWeeks,
}: UseMonthViewEventsInput): GroupedMonthEvents {
  if (events === undefined) {
    return { groupedByDay: {}, groupedByWeek: {} };
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];

  const range = getMonthRange({
    month: date,
    withOutsideDays,
    consistentWeeks,
    firstDayOfWeek,
  });

  for (const event of events) {
    if (
      dayjs(event.end).isAfter(range.start, 'day') ||
      dayjs(event.start).isBefore(range.end, 'day')
    ) {
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
    range,
  });
}

export function useMonthViewEvents({
  date,
  events,
  firstDayOfWeek = 1,
  withOutsideDays,
  consistentWeeks,
}: UseMonthViewEventsInput): GroupedMonthEvents {
  return useMemo(
    () =>
      filterMonthViewEvents({
        date,
        events,
        firstDayOfWeek,
        withOutsideDays,
        consistentWeeks,
      }),
    [date, events, firstDayOfWeek, withOutsideDays, consistentWeeks]
  );
}
