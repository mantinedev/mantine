import dayjs from 'dayjs';
import {
  AnyDateValue,
  DateStringValue,
  DayOfWeek,
  MonthPositionedEventData,
  ScheduleEventData,
} from '../../../types';
import { sortEvents } from '../../../utils';
import { getEventEndDay } from '../../../utils/get-event-end-day/get-event-end-day';
import { addEventToDayGroups } from './add-event-to-day-groups';
import { calculateEventPositionInWeek } from './calculate-event-position-in-week';
import { getWeeksInRange } from './get-weeks-in-range';
import { reserveRow } from './reserve-row';

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

  /** If set, events are clipped to the range, days of the weeks outside of it get no events */
  clipToRange?: boolean;
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

  /** Background events grouped by week index */
  backgroundByWeek: {
    [weekIndex: string]: MonthPositionedEventData[];
  };
}

export function getMonthPositionedEvents({
  date,
  events,
  firstDayOfWeek = 1,
  range,
  clipToRange = false,
}: GetMonthPositionedEventsInput): GroupedMonthEvents {
  const groupedByWeek: GroupedMonthEvents['groupedByWeek'] = {};
  const backgroundByWeek: GroupedMonthEvents['backgroundByWeek'] = {};
  const eventsAddedToDay = new Set<string>();

  const rangeStart = range ? dayjs(range.start) : dayjs(date).startOf('month');
  const rangeEnd = range ? dayjs(range.end) : dayjs(date).startOf('month').endOf('month');

  const { weeks, groupedByDay } = getWeeksInRange({
    rangeStart,
    rangeEnd,
    firstDayOfWeek,
  });

  const weekStates = weeks.map((week) => ({
    weekStart: dayjs(week[0]).startOf('day'),
    weekEnd: dayjs(week[6]).endOf('day'),
    nextRowByDay: new Array<number>(7).fill(0),
  }));

  for (let i = 0; i < weeks.length; i++) {
    groupedByWeek[i.toString()] = [];
    backgroundByWeek[i.toString()] = [];
  }

  const firstVisibleDay = rangeStart.startOf('day');
  const lastVisibleDay = rangeEnd.startOf('day');

  for (const event of sortEvents(events)) {
    const fullStart = dayjs(event.start).startOf('day');
    const fullEnd = getEventEndDay(event);
    const isMultiday = fullEnd.isAfter(fullStart);
    const eventStart =
      clipToRange && fullStart.isBefore(firstVisibleDay) ? firstVisibleDay : fullStart;
    const eventEnd = clipToRange && fullEnd.isAfter(lastVisibleDay) ? lastVisibleDay : fullEnd;

    if (eventEnd.isBefore(eventStart)) {
      continue;
    }

    for (let weekIdx = 0; weekIdx < weeks.length; weekIdx++) {
      const { weekStart, weekEnd, nextRowByDay } = weekStates[weekIdx];

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
            hangingStart: fullStart.isBefore(eventStart),
            hangingEnd: fullEnd.isAfter(eventEnd),
          });

        if (event.display === 'background') {
          backgroundByWeek[weekIdx.toString()].push({
            ...event,
            position: {
              startOffset,
              width,
              weekIndex: weekIdx,
              row: 0,
              hanging,
            },
          });
          continue;
        }

        const row = reserveRow({
          nextRowByDay,
          startDayIndex,
          daysSpanned,
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
    backgroundByWeek,
  };
}
