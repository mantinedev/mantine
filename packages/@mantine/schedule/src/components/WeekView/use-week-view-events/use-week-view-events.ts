import { useMemo } from 'react';
import { DateStringValue, DayOfWeek, ScheduleEventData } from '../../../types';
import { getWeekPositionedEvents, isWithinWeek, validateEvent } from '../../../utils';

interface UseWeekViewEventsInput {
  /** Date (week start) at which events are positioned, used to check if events are all-day */
  date: Date | DateStringValue;

  /** List of all events that belong to the given week, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[] | undefined;

  /** Start time of the week view, used to calculate event positions */
  startTime?: string;

  /** End time of the week view, used to calculate event positions */
  endTime?: string;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;
}

export function useWeekViewEvents({
  date,
  events,
  startTime,
  endTime,
  firstDayOfWeek = 1,
  weekendDays,
  withWeekendDays = true,
}: UseWeekViewEventsInput) {
  return useMemo(() => {
    if (events === undefined) {
      return { allDayEvents: [], regularEvents: {} };
    }

    const ids = new Set<string | number>();
    const filteredEvents: ScheduleEventData[] = [];

    for (const event of events) {
      if (isWithinWeek({ event, targetWeek: date, firstDayOfWeek })) {
        filteredEvents.push(validateEvent(event));

        if (!ids.has(event.id)) {
          ids.add(event.id);
        } else {
          throw new Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${event.id}`);
        }
      }
    }

    return getWeekPositionedEvents({
      date,
      events: filteredEvents,
      startTime,
      endTime,
      firstDayOfWeek,
      weekendDays,
      withWeekendDays,
    });
  }, [date, events, startTime, endTime, firstDayOfWeek, weekendDays, withWeekendDays]);
}
