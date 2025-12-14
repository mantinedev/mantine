import dayjs from 'dayjs';
import { useMemo } from 'react';
import { DateStringValue, DayOfWeek, ScheduleEventData } from '../../../types';
import { getWeekPositionedEvents, validateEvent } from '../../../utils';

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
}

export function useWeekViewEvents({
  date,
  events,
  startTime,
  endTime,
  firstDayOfWeek,
}: UseWeekViewEventsInput) {
  return useMemo(() => {
    if (events === undefined) {
      return {};
    }

    const ids = new Set<string | number>();
    const filteredEvents: ScheduleEventData[] = [];

    for (const event of events) {
      if (dayjs(event.start).isSame(dayjs(date), 'day')) {
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
    });
  }, [date, events, startTime, endTime, firstDayOfWeek]);
}
