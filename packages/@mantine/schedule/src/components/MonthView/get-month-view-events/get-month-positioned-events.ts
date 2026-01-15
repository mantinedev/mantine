import dayjs from 'dayjs';
import {
  AnyDateValue,
  DateStringValue,
  DayOfWeek,
  MonthPositionedEventData,
  ScheduleEventData,
} from '../../../types';
import { addEventToDayGroups } from './add-event-to-day-groups';
import { calculateEventPositionInWeek } from './calculate-event-position-in-week';
import { findAvailableRow } from './find-available-row';
import { getWeeksInRange } from './get-weeks-in-range';

interface GetMonthPositionedEventsInput {
  /** Date (month start) at which events are positioned */
  date: AnyDateValue;

  /** List of all events that belong to the given month, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[];

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;

  /** Range of dates for which events should be displayed (includes outside days if withOutsideDays is true) */
  range?: {
    start: DateStringValue;
    end: DateStringValue;
  };
}

/** Events grouped by week index and by day */
export interface GroupedMonthEvents {
  /** Events grouped by week index (index within month) */
  groupedByWeek: {
    [weekIndex: string]: MonthPositionedEventData[];
  };

  /** Events grouped by day (YYYY-MM-DD format) */
  groupedByDay: {
    [date: string]: MonthPositionedEventData[];
  };
}

export function getMonthPositionedEvents({
  date,
  events,
  firstDayOfWeek = 1,
  range,
}: GetMonthPositionedEventsInput): GroupedMonthEvents {
  const groupedByWeek: GroupedMonthEvents['groupedByWeek'] = {};
  const eventsAddedToDay = new Set<string>();

  const rangeStart = range ? dayjs(range.start) : dayjs(date).startOf('month');
  const rangeEnd = range ? dayjs(range.end) : dayjs(date).startOf('month').endOf('month');

  const { weeks, groupedByDay } = getWeeksInRange({
    rangeStart,
    rangeEnd,
    firstDayOfWeek,
  });

  for (let i = 0; i < weeks.length; i++) {
    groupedByWeek[i.toString()] = [];
  }

  for (const event of events) {
    const eventStart = dayjs(event.start).startOf('day');
    const eventEnd = dayjs(event.end).startOf('day');
    const isMultiday = eventEnd.isAfter(eventStart);

    for (let weekIdx = 0; weekIdx < weeks.length; weekIdx++) {
      const week = weeks[weekIdx];
      const weekStart = dayjs(week[0]).startOf('day');
      const weekEnd = dayjs(week[6]).endOf('day');

      if (
        (eventStart.isBefore(weekEnd) || eventStart.isSame(weekEnd, 'day')) &&
        (eventEnd.isAfter(weekStart) || eventEnd.isSame(weekStart, 'day'))
      ) {
        const { startDayIndex, daysSpanned, startOffset, width, hanging } =
          calculateEventPositionInWeek({
            eventStart,
            eventEnd,
            weekStart,
            weekEnd,
            isMultiday,
          });

        const row = findAvailableRow({
          existingEvents: groupedByWeek[weekIdx.toString()],
          startDayIndex,
          daysSpanned,
          weekStart,
        });

        const positionedEvent: MonthPositionedEventData = {
          ...event,
          position: {
            startOffset,
            width,
            weekIndex: weekIdx,
            row,
            hanging,
          },
        };

        groupedByWeek[weekIdx.toString()].push(positionedEvent);

        addEventToDayGroups({
          positionedEvent,
          eventStart,
          eventEnd,
          groupedByDay,
          eventsAddedToDay,
          weekIdx,
        });
      }
    }
  }

  return {
    groupedByWeek,
    groupedByDay,
  };
}
