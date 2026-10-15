import {
  AnyDateValue,
  DateTimeStringValue,
  DayEventPositionData,
  DayPositionedEventData,
  ScheduleEventData,
  ScheduleEventOverlapMode,
} from '../../../types';
import {
  applyCascadeLayout,
  getDayPosition,
  getOverlapClusters,
  isAllDayEvent,
  isEventsOverlap,
  sortEvents,
} from '../../../utils';
import { clipEventToDay } from '../../../utils/clip-event-to-day/clip-event-to-day';

export interface DayLayoutEventPositionData extends DayEventPositionData {
  /** Event start clipped to the displayed day, the position is calculated from it */
  displayStart: DateTimeStringValue;

  /** Event end clipped to the displayed day (23:59:59 at most), the position is calculated from it */
  displayEnd: DateTimeStringValue;
}

/** Original event data (start and end are not clipped) with the position on the displayed day */
export type DayLayoutEventData = ScheduleEventData & {
  position: DayLayoutEventPositionData;
};

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

function toOriginalEvents(
  positioned: DayPositionedEventData[],
  originals: Map<DayPositionedEventData, ScheduleEventData>
): DayLayoutEventData[] {
  return positioned.map((clipped) => ({
    ...originals.get(clipped)!,
    position: {
      ...clipped.position,
      displayStart: clipped.start as DateTimeStringValue,
      displayEnd: clipped.end as DateTimeStringValue,
    },
  }));
}

interface GetDayPositionedEventsInput {
  /** Date at which events are positioned, used to check if events are all-day */
  date: AnyDateValue;

  /** List of all events that overlap the given date, extra events must be filtered out before passing to the function. Events that start before or end after the date are laid out clipped to it. */
  events: ScheduleEventData[];

  /** Start time of the day view, used to calculate event positions */
  startTime?: string;

  /** End time of the day view, used to calculate event positions */
  endTime?: string;

  /** Number of minutes per time slot, used to align the canvas to whole slots */
  intervalMinutes?: number;

  /** Determines how events that overlap in time are laid out @default 'columns' */
  eventOverlapMode?: ScheduleEventOverlapMode;
}

export function getDayPositionedEvents({
  events,
  startTime,
  endTime,
  intervalMinutes,
  date,
  eventOverlapMode = 'columns',
}: GetDayPositionedEventsInput): DayLayoutEventData[] {
  const columns: ScheduleEventData[][] = [];
  const positioned: DayPositionedEventData[] = [];
  const originals = new Map<DayPositionedEventData, ScheduleEventData>();
  const clippedToOriginal = new Map<ScheduleEventData, ScheduleEventData>();

  for (const event of events) {
    clippedToOriginal.set(clipEventToDay(event, date), event);
  }

  const sorted = sortEvents([...clippedToOriginal.keys()]);

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
      : getDayPosition({ event, startTime, endTime, intervalMinutes });

    const positionedEvent: DayPositionedEventData = {
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
    };

    positioned.push(positionedEvent);
    originals.set(positionedEvent, clippedToOriginal.get(event)!);
  }
  for (const positionedEvent of positioned) {
    if (positionedEvent.position.allDay) {
      positionedEvent.position.overlaps = 1;
      positionedEvent.position.width = 100;
      positionedEvent.position.offset = 0;
    }
  }

  if (eventOverlapMode === 'cascade') {
    applyCascadeLayout(positioned);
    return toOriginalEvents(positioned, originals);
  }

  const timedEvents = positioned.filter((event) => !event.position.allDay);

  for (const cluster of getOverlapClusters(timedEvents)) {
    const totalColumns = Math.max(...cluster.map((event) => event.position.column)) + 1;

    for (const positionedEvent of cluster) {
      const { column } = positionedEvent.position;
      let nextOccupiedColumn = totalColumns;

      for (const other of cluster) {
        if (
          other !== positionedEvent &&
          other.position.column > column &&
          other.position.column < nextOccupiedColumn &&
          isEventsOverlap(other, positionedEvent)
        ) {
          nextOccupiedColumn = other.position.column;
        }
      }

      const columnsSpanned = nextOccupiedColumn - column;

      positionedEvent.position.overlaps = totalColumns;
      positionedEvent.position.width = (columnsSpanned / totalColumns) * 100;
      positionedEvent.position.offset = (column * 100) / totalColumns;
    }
  }

  return toOriginalEvents(positioned, originals);
}
