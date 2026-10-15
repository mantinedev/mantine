import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../../types';
import { getMonthRange } from '../../../utils/get-month-range/get-month-range';
import {
  EventsByDay,
  groupEventsByDay,
} from '../../../utils/group-events-by-day/group-events-by-day';

export type GroupedEvents = EventsByDay;

interface GetYearViewRangeInput {
  /** Any date of the displayed year */
  date: AnyDateValue;

  /** First day of the week, used to calculate the displayed weeks @default 1 */
  firstDayOfWeek?: DayOfWeek;

  /** If set, the range includes outside days of the January and December grids @default false */
  withOutsideDays?: boolean;
}

/** Returns the first and the last day displayed in the year view */
export function getYearViewRange({
  date,
  firstDayOfWeek = 1,
  withOutsideDays = false,
}: GetYearViewRangeInput) {
  const january = getMonthRange({
    month: dayjs(date).startOf('year'),
    withOutsideDays,
    consistentWeeks: true,
    firstDayOfWeek,
  });

  const december = getMonthRange({
    month: dayjs(date).endOf('year').startOf('month'),
    withOutsideDays,
    consistentWeeks: true,
    firstDayOfWeek,
  });

  return { start: january.start, end: december.end };
}

interface GetYearViewEventsInput extends GetYearViewRangeInput {
  events: ScheduleEventData[] | undefined;
}

export function getYearViewEvents({
  date,
  events,
  firstDayOfWeek,
  withOutsideDays,
}: GetYearViewEventsInput) {
  const range = getYearViewRange({ date, firstDayOfWeek, withOutsideDays });

  return groupEventsByDay({
    events,
    rangeStart: range.start,
    rangeEnd: range.end,
    componentName: 'YearView',
  });
}
