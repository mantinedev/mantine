import dayjs from 'dayjs';
import {
  DateStringValue,
  DayOfWeek,
  MonthPositionedEventData,
  ScheduleEventData,
} from '../../../types';
import { getStartOfWeek } from '../../../utils';

interface GetMonthPositionedEventsInput {
  /** Date (month start) at which events are positioned */
  date: Date | DateStringValue;

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
  const groupedByDay: GroupedMonthEvents['groupedByDay'] = {};
  const eventsAddedToDay = new Set<string>(); // Track which events have been added to groupedByDay

  // Determine the range for which to display events
  const rangeStart = range ? dayjs(range.start) : dayjs(date).startOf('month');
  const rangeEnd = range ? dayjs(range.end) : dayjs(date).startOf('month').endOf('month');

  // Get all weeks in the range with padding days
  const weeks: DateStringValue[][] = [];

  const startOfFirstWeekStr = getStartOfWeek({
    date: rangeStart.format('YYYY-MM-DD'),
    firstDayOfWeek,
  });

  let currentDate = dayjs(startOfFirstWeekStr);

  while (currentDate.isBefore(rangeEnd) || currentDate.isSame(rangeEnd, 'day')) {
    const week: DateStringValue[] = [];
    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.format('YYYY-MM-DD 00:00:00');
      week.push(dateStr);
      if (!groupedByDay[dateStr]) {
        groupedByDay[dateStr] = [];
      }
      currentDate = currentDate.add(1, 'day');
    }
    weeks.push(week);
  }

  // Initialize groups for each week
  for (let i = 0; i < weeks.length; i++) {
    groupedByWeek[i.toString()] = [];
  }

  // Process each event
  for (const event of events) {
    const eventStart = dayjs(event.start).startOf('day');
    const eventEnd = dayjs(event.end).startOf('day');

    // Check if event is multiday
    const isMultiday = eventEnd.isAfter(eventStart);

    // Find which weeks this event spans
    for (let weekIdx = 0; weekIdx < weeks.length; weekIdx++) {
      const week = weeks[weekIdx];
      const weekStart = dayjs(week[0]).startOf('day');
      const weekEnd = dayjs(week[6]).endOf('day');

      // Check if event overlaps with this week
      if (
        (eventStart.isBefore(weekEnd) || eventStart.isSame(weekEnd, 'day')) &&
        (eventEnd.isAfter(weekStart) || eventEnd.isSame(weekStart, 'day'))
      ) {
        // Calculate start offset and width for this week
        let displayStart = eventStart;
        let displayEnd = eventEnd;

        // Check for hanging days (before/after week)
        const hangingStart = eventStart.isBefore(weekStart);
        const hangingEnd = eventEnd.isAfter(weekEnd);
        const hanging =
          hangingStart && hangingEnd
            ? 'both'
            : hangingStart
              ? 'start'
              : hangingEnd
                ? 'end'
                : 'none';

        // Clamp to week boundaries
        if (displayStart.isBefore(weekStart)) {
          displayStart = weekStart;
        }
        if (displayEnd.isAfter(weekEnd)) {
          displayEnd = weekEnd;
        }

        // Calculate start day index in week (0-6)
        const startDayIndex = displayStart.diff(weekStart, 'day');
        const endDayIndex = displayEnd.diff(weekStart, 'day');
        const daysSpanned = Math.max(1, endDayIndex - startDayIndex + (isMultiday ? 1 : 0));

        // Calculate percentages
        const startOffset = (startDayIndex / 7) * 100;
        const width = (daysSpanned / 7) * 100;

        // Find row by checking existing events on the same day
        const existingEvents = groupedByWeek[weekIdx.toString()];
        let row = 0;

        for (const existing of existingEvents) {
          const existingStart = dayjs(existing.start).startOf('day');
          const existingDisplayStart =
            existingStart.isBefore(weekStart) || existingStart.isSame(weekStart, 'day')
              ? weekStart
              : existingStart;
          const existingDayIndex = existingDisplayStart.diff(weekStart, 'day');
          const existingWidth = existing.position?.width || 0;
          const existingDaysSpanned = (existingWidth / 100) * 7;

          // Check if events overlap on any day
          if (
            existingDayIndex + existingDaysSpanned > startDayIndex &&
            existingDayIndex < startDayIndex + daysSpanned
          ) {
            row = Math.max(row, (existing.position?.row || 0) + 1);
          }
        }

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

        // Add to groupedByWeek
        groupedByWeek[weekIdx.toString()].push(positionedEvent);

        // Add to groupedByDay only once (on the first week we encounter the event)
        if (weekIdx === 0 || !eventsAddedToDay.has(event.id.toString())) {
          let dayDate = eventStart;
          while (dayDate.isBefore(eventEnd) || dayDate.isSame(eventEnd, 'day')) {
            const dayDateStr = dayDate.format('YYYY-MM-DD 00:00:00');
            if (groupedByDay[dayDateStr]) {
              groupedByDay[dayDateStr].push(positionedEvent);
            }
            dayDate = dayDate.add(1, 'day');
          }
          eventsAddedToDay.add(event.id.toString());
        }
      }
    }
  }

  return {
    groupedByWeek,
    groupedByDay,
  };
}
