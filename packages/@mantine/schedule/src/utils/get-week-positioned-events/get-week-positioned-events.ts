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

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;
}

/** Events grouped by week day date (YYYY-MM-DD) and by columns */
interface GroupedWeekEvents {
  allDayEvents: WeekPositionedEventData[];
  regularEvents: Record<DateStringValue, WeekPositionedEventData[]>;
}

interface ColumnHasConflictOptions {
  columns: Map<string, ScheduleEventData[]>;
  columnIndex: number;
  event: ScheduleEventData;
  allDay: boolean;
  allWeekDays: DateStringValue[];
}

function columnHasConflict({
  columns,
  columnIndex,
  event,
  allDay,
  allWeekDays,
}: ColumnHasConflictOptions): boolean {
  const columnKey = `col-${columnIndex}`;
  if (!columns.has(columnKey)) {
    return false;
  }

  const columnEvents = columns.get(columnKey)!;

  return columnEvents.some((e) => {
    const eAllDay = allWeekDays.some((day) => isAllDayEvent({ event: e, date: day }));
    const hasTimeConflict = isEventsOverlap(e, event);

    // For all-day events, check if they overlap in days
    if (allDay && eAllDay) {
      return hasTimeConflict; // All-day events use the same overlap check
    }

    // Don't count mixed all-day and regular events as overlaps
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
  weekendDays = [0, 6],
  withWeekendDays = true,
}: GetWeekPositionedEventsInput): GroupedWeekEvents {
  const allWeekDays = getWeekDays({ week: date, firstDayOfWeek });

  // Filter out weekend days if needed
  const visibleWeekDays = withWeekendDays
    ? allWeekDays
    : allWeekDays.filter((day) => !weekendDays.includes(dayjs(day).day() as DayOfWeek));

  const visibleDaysCount = visibleWeekDays.length;
  const weekStartDate = dayjs(allWeekDays[0]);
  const weekEndDate = dayjs(allWeekDays[6]);

  const grouped: GroupedWeekEvents = {
    allDayEvents: [],
    regularEvents: {},
  };

  visibleWeekDays.forEach((day) => {
    grouped.regularEvents[day] = [];
  });

  const columns = new Map<string, ScheduleEventData[]>();
  const allDayColumns = new Map<string, ScheduleEventData[]>();
  const sorted = sortEvents(events);

  for (const event of sorted) {
    const eventStartDate = dayjs(event.start).startOf('day');
    const eventEndDate = dayjs(event.end).startOf('day');

    // Determine which days in the week this event appears
    // Include days from start (inclusive) through end (inclusive - subtract 1 day if end time is midnight)
    const actualEndDate =
      dayjs(event.end).hour() === 0 && dayjs(event.end).minute() === 0
        ? eventEndDate.subtract(1, 'day')
        : eventEndDate;

    // Check if this is a multiday event (spans more than one day)
    const isMultiday = actualEndDate.isAfter(eventStartDate);

    // Determine which days in the week this event appears
    const eventWeekDays = allWeekDays.filter((day) => {
      const dayDate = dayjs(day).startOf('day');
      return (
        (dayDate.isAfter(eventStartDate) || dayDate.isSame(eventStartDate)) &&
        (dayDate.isBefore(actualEndDate) || dayDate.isSame(actualEndDate))
      );
    });

    // Skip events that don't appear in this week
    if (eventWeekDays.length === 0) {
      continue;
    }

    // Check for hanging days (before/after week)
    const hangingStart = eventStartDate.isBefore(weekStartDate);
    const hangingEnd = actualEndDate.isAfter(weekEndDate);

    // Determine if this is an all-day event (either marked as all-day or is a multiday event)
    const isActuallyAllDay = eventWeekDays.some((day) => isAllDayEvent({ event, date: day }));
    const allDay = isMultiday || isActuallyAllDay;

    // Find a column for this event (separate tracking for all-day vs regular)
    let column = 0;
    const columnMap = allDay ? allDayColumns : columns;

    while (
      columnHasConflict({ columns: columnMap, columnIndex: column, event, allDay, allWeekDays })
    ) {
      column++;
    }

    const columnKey = `col-${column}`;
    if (!columnMap.has(columnKey)) {
      columnMap.set(columnKey, []);
    }
    columnMap.get(columnKey)!.push(event);

    // Calculate vertical position
    const verticalPosition = allDay
      ? { top: 0, height: 100 }
      : getDayPosition({ event, startTime, endTime });

    // Add positioned event to collection
    if (allDay) {
      // Calculate offset based on where the event starts (or week start if it started before)
      let displayStartDate = eventStartDate;
      if (hangingStart) {
        displayStartDate = weekStartDate;
      }

      // If display start date is not visible, use the first visible day
      if (!visibleWeekDays.some((day) => dayjs(day).isSame(displayStartDate, 'day'))) {
        displayStartDate = dayjs(visibleWeekDays[0]);
      }

      // Count visible days from week start to event start
      const visibleDaysBeforeEvent =
        visibleWeekDays.filter(
          (day) =>
            dayjs(day).isBefore(displayStartDate) || dayjs(day).isSame(displayStartDate, 'day')
        ).length - 1;

      const offset = (visibleDaysBeforeEvent / visibleDaysCount) * 100;

      // All-day events (including multiday) are stored separately, only once
      grouped.allDayEvents.push({
        ...event,
        position: {
          ...verticalPosition,
          allDay,
          column,
          width: 0,
          offset,
          overlaps: 0,
          row: 0,
          hangingStart,
          hangingEnd,
        },
      });
    } else {
      // Regular single-day events are grouped by day
      for (const day of eventWeekDays) {
        // Calculate offset per day (position from start of visible week)
        const visibleDayIndex = visibleWeekDays.indexOf(day);

        if (visibleDayIndex === -1) {
          // Day is not visible (weekend), skip it
          continue;
        }

        const dayWeekOffset = (visibleDayIndex / visibleDaysCount) * 100;

        grouped.regularEvents[day].push({
          ...event,
          position: {
            ...verticalPosition,
            allDay,
            column,
            width: 0,
            offset: 0,
            overlaps: 0,
            weekOffset: dayWeekOffset,
            row: 0,
            hangingStart,
            hangingEnd,
          },
        });
      }
    }
  }

  // Calculate overlaps and widths for each day (only for regular events)
  for (const day of visibleWeekDays) {
    const dayEvents = grouped.regularEvents[day];

    for (const event of dayEvents) {
      // Find all events that overlap with this event in time
      let maxOverlappingColumn = event.position.column;

      for (const otherEvent of dayEvents) {
        // If events overlap in time, track the max column
        if (isEventsOverlap(event, otherEvent)) {
          maxOverlappingColumn = Math.max(maxOverlappingColumn, otherEvent.position.column);
        }
      }

      const overlaps = maxOverlappingColumn + 1;
      event.position.overlaps = overlaps;
      event.position.width = 100 / overlaps;
      event.position.offset = (event.position.column * 100) / overlaps;
    }
  }

  // Calculate row positions and widths for all-day events
  if (grouped.allDayEvents.length > 0) {
    // First, assign rows based on overlapping events
    const eventRows = new Map<ScheduleEventData, number>();
    const assignedRows = new Set<number>();

    for (const event of grouped.allDayEvents) {
      let row = 0;

      // Find the first available row that doesn't conflict with this event
      while (true) {
        let hasConflict = false;

        // Check if any event in this row conflicts with the current event
        for (const [otherEvent, otherRow] of eventRows.entries()) {
          if (otherRow === row && isEventsOverlap(event, otherEvent)) {
            hasConflict = true;
            break;
          }
        }

        if (!hasConflict) {
          break;
        }

        row++;
      }

      eventRows.set(event, row);
      assignedRows.add(row);
    }

    // Update row values in positioned events
    for (const event of grouped.allDayEvents) {
      event.position.row = eventRows.get(event)!;
    }

    const rowCount = Math.max(...assignedRows) + 1;

    // Calculate widths for all-day events
    for (const event of grouped.allDayEvents) {
      const eventStartDate = dayjs(event.start).startOf('day');
      const eventEndDate = dayjs(event.end).startOf('day');

      // Determine actual end date (adjust if end time is midnight)
      const actualEndDate =
        dayjs(event.end).hour() === 0 && dayjs(event.end).minute() === 0
          ? eventEndDate.subtract(1, 'day')
          : eventEndDate;

      // Check if this is truly a multiday event (spans more than one day)
      const isMultiday = actualEndDate.isAfter(eventStartDate);

      if (isMultiday) {
        // For multiday events, calculate span within visible days (do not divide by rowCount)
        let displayStartDate = eventStartDate;
        if (eventStartDate.isBefore(weekStartDate)) {
          displayStartDate = weekStartDate;
        }

        let displayEndDate = actualEndDate;
        if (actualEndDate.isAfter(weekEndDate)) {
          displayEndDate = weekEndDate;
        }

        // Count visible days spanned by this event
        const visibleDaysSpanned = visibleWeekDays.filter(
          (day) =>
            (dayjs(day).isAfter(displayStartDate) || dayjs(day).isSame(displayStartDate, 'day')) &&
            (dayjs(day).isBefore(displayEndDate) || dayjs(day).isSame(displayEndDate, 'day'))
        ).length;

        event.position.width = (visibleDaysSpanned / visibleDaysCount) * 100;
      } else {
        // For single-day all-day events, divide by row count for stacking
        event.position.width = 100 / rowCount;
      }

      event.position.overlaps = rowCount;
    }
  }

  return grouped;
}
