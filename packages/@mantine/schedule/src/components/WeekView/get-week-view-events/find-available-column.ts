import { DateStringValue, ScheduleEventData } from '../../../types';
import { isAllDayEvent, isEventsOverlap } from '../../../utils';

interface FindAvailableColumnInput {
  columns: Map<string, ScheduleEventData[]>;
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
}: FindAvailableColumnInput & { columnIndex: number }): boolean {
  const columnKey = `col-${columnIndex}`;
  if (!columns.has(columnKey)) {
    return false;
  }

  const columnEvents = columns.get(columnKey)!;

  return columnEvents.some((e) => {
    const eAllDay = allWeekDays.some((day) => isAllDayEvent({ event: e, date: day }));
    const hasTimeConflict = isEventsOverlap(e, event);

    if (allDay && eAllDay) {
      return hasTimeConflict;
    }

    if (allDay || eAllDay) {
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
