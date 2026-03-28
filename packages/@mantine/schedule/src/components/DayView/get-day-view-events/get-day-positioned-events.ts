import { AnyDateValue, DayPositionedEventData, ScheduleEventData } from '../../../types';
import { getDayPosition, isAllDayEvent, isEventsOverlap, sortEvents } from '../../../utils';

interface ColumnHasConflictOptions {
  columns: ScheduleEventData[][];
  columnIndex: number;
  event: ScheduleEventData;
  allDay: boolean;
  date: AnyDateValue;
}

function columnHasConflict({
  columns,
  columnIndex,
  event,
  allDay,
  date,
}: ColumnHasConflictOptions): boolean {
  if (!columns[columnIndex]) {
    return false;
  }

  return columns[columnIndex].some((e) => {
    const eAllDay = isAllDayEvent({ event: e, date });
    const hasTimeConflict = isEventsOverlap(e, event);

    // Don't count all-day events as overlaps
    if (allDay || eAllDay) {
      return false;
    }

    return hasTimeConflict;
  });
}

interface GetDayPositionedEventsInput {
  /** Date at which events are positioned, used to check if events are all-day */
  date: AnyDateValue;

  /** List of all events that belong to the given date, extra events must be filtered out before passing to the function */
  events: ScheduleEventData[];

  /** Start time of the day view, used to calculate event positions */
  startTime?: string;

  /** End time of the day view, used to calculate event positions */
  endTime?: string;
}

export function getDayPositionedEvents({
  events,
  startTime,
  endTime,
  date,
}: GetDayPositionedEventsInput) {
  const columns: ScheduleEventData[][] = [];
  const positioned: DayPositionedEventData[] = [];

  const sorted = sortEvents(events);

  for (const event of sorted) {
    const allDay = isAllDayEvent({ event, date });

    let column = 0;

    while (columnHasConflict({ columns, columnIndex: column, event, allDay, date })) {
      column++;
    }

    if (!columns[column]) {
      columns[column] = [];
    }

    columns[column].push(event);

    const verticalPosition = allDay
      ? { top: 0, height: 100 }
      : getDayPosition({ event, startTime, endTime });

    positioned.push({
      ...event,
      position: {
        ...verticalPosition,
        allDay,
        column,

        // set later
        width: 0,
        offset: 0,
        overlaps: 0,
      },
    });
  }
  for (const positionedEvent of positioned) {
    const { allDay, column } = positionedEvent.position;

    if (allDay) {
      positionedEvent.position.overlaps = 1;
      positionedEvent.position.width = 100;
      positionedEvent.position.offset = 0;
      continue;
    }

    // Find events that directly overlap with this event
    const directlyOverlapping: DayPositionedEventData[] = [];

    for (const otherEvent of positioned) {
      if (otherEvent === positionedEvent || otherEvent.position.allDay) {
        continue;
      }

      if (isEventsOverlap(otherEvent, positionedEvent)) {
        directlyOverlapping.push(otherEvent);
      }
    }

    // Find the max column by also checking overlaps of overlapping events
    // This ensures we account for the full column group
    let maxColumn = column;

    for (const overlappingEvent of directlyOverlapping) {
      maxColumn = Math.max(maxColumn, overlappingEvent.position.column);

      // Check what overlaps with each overlapping event
      for (const otherEvent of positioned) {
        if (otherEvent === overlappingEvent || otherEvent.position.allDay) {
          continue;
        }

        if (isEventsOverlap(otherEvent, overlappingEvent)) {
          maxColumn = Math.max(maxColumn, otherEvent.position.column);
        }
      }
    }

    const totalColumns = maxColumn + 1;

    // Find the first occupied column to the right of this event
    // Events expand to fill empty columns but stop at the next occupied column
    let nextOccupiedColumn = totalColumns;

    for (const other of directlyOverlapping) {
      if (other.position.column > column && other.position.column < nextOccupiedColumn) {
        nextOccupiedColumn = other.position.column;
      }
    }

    const columnsSpanned = nextOccupiedColumn - column;

    positionedEvent.position.overlaps = totalColumns;
    positionedEvent.position.width = (columnsSpanned / totalColumns) * 100;
    positionedEvent.position.offset = (column * 100) / totalColumns;
  }

  return positioned;
}
