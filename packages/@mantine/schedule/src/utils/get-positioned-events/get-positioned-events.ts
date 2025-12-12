import { DateStringValue, DayPositionedEventData, ScheduleEventData } from '../../types';
import { isAllDayEvent } from '../is-all-day-event/is-all-day-event';
import { isEventsOverlap } from '../is-events-overlap/is-events-overlap';
import { sortEvents } from '../sort-events/sort-events';
import { getDayPosition } from './get-day-position';

interface ColumnHasConflictOptions {
  columns: ScheduleEventData[][];
  columnIndex: number;
  event: ScheduleEventData;
  allDay: boolean;
  date: Date | DateStringValue;
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

interface GetPositionedEventsInput {
  date: Date | DateStringValue;
  events: ScheduleEventData[];
  startTime?: string;
  endTime?: string;
}

export function getPositionedEvents({
  events,
  startTime,
  endTime,
  date,
}: GetPositionedEventsInput) {
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

  const overlaps = columns.length;

  for (const positionedEvent of positioned) {
    positionedEvent.position.overlaps = overlaps;
    positionedEvent.position.width = 100 / overlaps;
    positionedEvent.position.offset = (positionedEvent.position.column * 100) / overlaps;
  }

  return positioned;
}
