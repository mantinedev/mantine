import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../types';
import { getMonthRange } from '../../utils';
import { EventsByDay, groupEventsByDay } from '../../utils/group-events-by-day/group-events-by-day';

export type GroupedEvents = EventsByDay;

interface GetMobileMonthViewEventsInput {
  /** Displayed month */
  date: AnyDateValue;

  /** Events to group, background events are skipped */
  events: ScheduleEventData[] | undefined;

  /** First day of the week, used to calculate the displayed weeks @default 1 */
  firstDayOfWeek?: DayOfWeek;

  /** If true, the displayed range always has 6 weeks @default true */
  consistentWeeks?: boolean;
}

/** Groups events by every day of the displayed weeks, including outside days */
export function getMobileMonthViewEvents({
  date,
  events,
  firstDayOfWeek = 1,
  consistentWeeks = true,
}: GetMobileMonthViewEventsInput) {
  const range = getMonthRange({
    month: date,
    withOutsideDays: true,
    consistentWeeks,
    firstDayOfWeek,
  });

  return groupEventsByDay({
    events,
    rangeStart: range.start,
    rangeEnd: range.end,
    componentName: 'MobileMonthView',
  });
}
