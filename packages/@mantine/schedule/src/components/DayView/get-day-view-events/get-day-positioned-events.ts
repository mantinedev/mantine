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

    const overlappingColumns = new Set<number>();

    for (const otherEvent of positioned) {
      if (otherEvent === positionedEvent) {
        continue;
      }

      const otherAllDay = otherEvent.position.allDay;

      // Do not count overlaps with all-day events
      if (allDay || otherAllDay) {
        continue;
      }

      const hasTimeConflict = isEventsOverlap(otherEvent, positionedEvent);

      if (hasTimeConflict) {
        overlappingColumns.add(otherEvent.position.column);
      }
    }

    overlappingColumns.add(column);

    const overlaps = overlappingColumns.size;

    positionedEvent.position.overlaps = overlaps;
    positionedEvent.position.width = 100 / overlaps;
    positionedEvent.position.offset = (column * 100) / overlaps;
  }

  return positioned;
}
