import dayjs from 'dayjs';
import {
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  WeekPositionedEventData,
} from '../../types';
import { getDayPosition } from '../get-day-positioned-events/get-day-position';
import { getWeekDays } from '../get-week-days/get-week-days';
import { isAllDayEvent } from '../is-all-day-event/is-all-day-event';
import { isEventsOverlap } from '../is-events-overlap/is-events-overlap';
import { isMultidayEvent } from '../is-multiday-event/is-multiday-event';
import { sortEvents } from '../sort-events/sort-events';

interface GetWeekPositionedEventsInput {
  /** Date (week start) at which events are positioned, used to check if events are all-day */
  date: Date | DateStringValue;

  /** List of all events that belong to the given week, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[];

  /** Start time of the week view, used to calculate event positions */
  startTime?: string;

  /** End time of the week view, used to calculate event positions */
  endTime?: string;

  /** First day of the week, 0 - Sunday, 1 - Monday, etc., used to calculate events positions */
  firstDayOfWeek?: DayOfWeek;
}

/** Events grouped by week day date (YYYY-MM-DD) and by columns */
type GroupedWeekEvents = Record<DateStringValue, WeekPositionedEventData[]>;

interface ColumnHasConflictOptions {
  columns: Map<string, ScheduleEventData[]>;
  columnIndex: number;
  event: ScheduleEventData;
  allDay: boolean;
  weekDays: DateStringValue[];
}

function columnHasConflict({
  columns,
  columnIndex,
  event,
  allDay,
  weekDays,
}: ColumnHasConflictOptions): boolean {
  const columnKey = `col-${columnIndex}`;
  if (!columns.has(columnKey)) {
    return false;
  }

  const columnEvents = columns.get(columnKey)!;

  return columnEvents.some((e) => {
    const eAllDay = weekDays.some((day) => isAllDayEvent({ event: e, date: day }));
    const hasTimeConflict = isEventsOverlap(e, event);

    // Don't count all-day events as overlaps
    if (allDay || eAllDay) {
      return false;
    }

    return hasTimeConflict;
  });
}

export function getWeekPositionedEvents({
  date,
  events,
  startTime,
  endTime,
  firstDayOfWeek = 1,
}: GetWeekPositionedEventsInput): GroupedWeekEvents {
  const weekDays = getWeekDays({ week: date, firstDayOfWeek });
  const weekStartDate = dayjs(weekDays[0]);
  const weekEndDate = dayjs(weekDays[6]);

  const grouped: GroupedWeekEvents = {};
  weekDays.forEach((day) => {
    grouped[day] = [];
  });

  const columns = new Map<string, ScheduleEventData[]>();
  const sorted = sortEvents(events);

  for (const event of sorted) {
    const eventStartDate = dayjs(event.start).startOf('day');
    const eventEndDate = dayjs(event.end).startOf('day');
    const isMultiday = isMultidayEvent(event);

    // Determine which days in the week this event appears
    const eventWeekDays = weekDays.filter((day) => {
      const dayDate = dayjs(day).startOf('day');
      return (
        (dayDate.isAfter(eventStartDate) || dayDate.isSame(eventStartDate)) &&
        (dayDate.isBefore(eventEndDate) || dayDate.isSame(eventEndDate))
      );
    });

    // Check for hanging days (before/after week)
    const hangingStart = eventStartDate.isBefore(weekStartDate);
    const hangingEnd = eventEndDate.isAfter(weekEndDate);

    // Determine if this is an all-day event
    const allDay = eventWeekDays.some((day) => isAllDayEvent({ event, date: day }));

    // Find a column for this event
    let column = 0;
    while (columnHasConflict({ columns, columnIndex: column, event, allDay, weekDays })) {
      column++;
    }

    const columnKey = `col-${column}`;
    if (!columns.has(columnKey)) {
      columns.set(columnKey, []);
    }
    columns.get(columnKey)!.push(event);

    // Calculate vertical position
    const verticalPosition = allDay
      ? { top: 0, height: 100 }
      : getDayPosition({ event, startTime, endTime });

    // Add positioned event to each day it appears in
    for (const day of eventWeekDays) {
      // Calculate week offset per day (position from start of week)
      // For a 3-day event Mon-Wed: Mon=0%, Tue=14.28%, Wed=28.57%
      const dayDate = dayjs(day).startOf('day');
      const dayInWeek = dayDate.diff(weekStartDate, 'day');
      const weekOffset = (dayInWeek / 7) * 100;

      grouped[day].push({
        ...event,
        position: {
          ...verticalPosition,
          allDay,
          column,
          width: 0,
          offset: 0,
          overlaps: 0,
          weekOffset,
          hangingStart,
          hangingEnd,
        },
      });
    }
  }

  // Calculate overlaps and widths for each day
  for (const day of weekDays) {
    const dayEvents = grouped[day];
    const dayColumns = new Set<number>();
    let maxColumn = 0;

    for (const event of dayEvents) {
      dayColumns.add(event.position.column);
      maxColumn = Math.max(maxColumn, event.position.column);
    }

    const overlaps = maxColumn + 1;

    for (const event of dayEvents) {
      event.position.overlaps = overlaps;
      event.position.width = 100 / overlaps;
      event.position.offset = (event.position.column * 100) / overlaps;
    }
  }

  return grouped;
}
