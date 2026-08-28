import { ScheduleEventData } from '../../../types';
import { isEventsOverlap } from '../../../utils';

/** An event stored in a positioning column together with its precomputed all-day flag. */
export interface ColumnEvent {
  event: ScheduleEventData;
  allDay: boolean;
}

interface FindAvailableColumnInput {
  columns: Map<string, ColumnEvent[]>;
  event: ScheduleEventData;
  allDay: boolean;
}

function columnHasConflict({
  columns,
  columnIndex,
  event,
  allDay,
}: FindAvailableColumnInput & { columnIndex: number }): boolean {
  const columnKey = `col-${columnIndex}`;
  if (!columns.has(columnKey)) {
    return false;
  }

  const columnEvents = columns.get(columnKey)!;

  return columnEvents.some((columnEvent) => {
    const hasTimeConflict = isEventsOverlap(columnEvent.event, event);

    if (allDay && columnEvent.allDay) {
      return hasTimeConflict;
    }

    if (allDay || columnEvent.allDay) {
      return false;
    }

    return hasTimeConflict;
  });
}

export function findAvailableColumn(input: FindAvailableColumnInput): number {
  let column = 0;

  while (columnHasConflict({ ...input, columnIndex: column })) {
    column++;
  }

  return column;
}
