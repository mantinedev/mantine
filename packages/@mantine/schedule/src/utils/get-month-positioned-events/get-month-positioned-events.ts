import {
  DateStringValue,
  DayOfWeek,
  MonthPositionedEventData,
  ScheduleEventData,
} from '../../types';

interface GetMonthPositionedEventsInput {
  /** Date (month start) at which events are positioned */
  date: Date | DateStringValue;

  /** List of all events that belong to the given month, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[];

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;
}

/** Events grouped by week index (index within month) */
interface GroupedMonthEvents {
  [weekIndex: string]: MonthPositionedEventData[];
}

export function getMonthPositionedEvents({
  date,
  events,
  firstDayOfWeek = 1,
}: GetMonthPositionedEventsInput): GroupedMonthEvents {}
