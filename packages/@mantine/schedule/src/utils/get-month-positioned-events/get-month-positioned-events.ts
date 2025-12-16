import dayjs from 'dayjs';
import {
  DateStringValue,
  DayOfWeek,
  MonthPositionedEventData,
  ScheduleEventData,
} from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

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

/** Events grouped by week index (index within month) */
export interface GroupedMonthEvents {
  [weekIndex: string]: MonthPositionedEventData[];
}

export function getMonthPositionedEvents({
  date,
  events,
  firstDayOfWeek = 1,
  range,
}: GetMonthPositionedEventsInput): GroupedMonthEvents {
  const grouped: GroupedMonthEvents = {};

  // Determine the range for which to display events
  const rangeStart = range ? dayjs(range.start) : dayjs(date).startOf('month');
  const rangeEnd = range ? dayjs(range.end) : dayjs(date).startOf('month').endOf('month');

  // Get all weeks in the range with padding days
  const weeks: DateStringValue[][] = [];
  const startOfFirstWeekStr = getStartOfWeek(rangeStart.format('YYYY-MM-DD'), firstDayOfWeek);
  let currentDate = dayjs(startOfFirstWeekStr);

  while (currentDate.isBefore(rangeEnd) || currentDate.isSame(rangeEnd, 'day')) {
    const week: DateStringValue[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate.format('YYYY-MM-DD'));
      currentDate = currentDate.add(1, 'day');
    }
    weeks.push(week);
  }

  // Initialize groups for each week
  for (let i = 0; i < weeks.length; i++) {
    grouped[i.toString()] = [];
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
        const existingEvents = grouped[weekIdx.toString()];
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

        grouped[weekIdx.toString()].push({
          ...event,
          position: {
            startOffset,
            width,
            weekIndex: weekIdx,
            row,
          },
        });
      }
    }
  }

  return grouped;
}
