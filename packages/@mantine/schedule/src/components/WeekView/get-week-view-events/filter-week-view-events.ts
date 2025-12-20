import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../../types';
import { isEventInTimeRange, isWithinWeek, validateEvent } from '../../../utils';

export interface FilterWeekViewEventsInput {
  /** Date (week start) at which events are positioned, used to check if events are all-day */
  date: AnyDateValue;

  /** List of all events that belong to the given week, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[] | undefined;

  /** Start time of the week view, used to calculate event positions */
  startTime?: string;

  /** End time of the week view, used to calculate event positions */
  endTime?: string;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;
}

export function filterWeekViewEvents({
  date,
  events,
  startTime,
  endTime,
  firstDayOfWeek = 1,
}: FilterWeekViewEventsInput): ScheduleEventData[] {
  if (events === undefined) {
    return [];
  }

  const ids = new Set<string | number>();
  const filteredEvents: ScheduleEventData[] = [];

  for (const event of events) {
    if (
      isWithinWeek({ event, targetWeek: date, firstDayOfWeek }) &&
      isEventInTimeRange({ event, startTime, endTime })
    ) {
      filteredEvents.push(validateEvent(event));

      if (!ids.has(event.id)) {
        ids.add(event.id);
      } else {
        throw new Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${event.id}`);
      }
    }
  }

  return filteredEvents;
}
