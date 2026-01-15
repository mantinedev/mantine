import { ScheduleEventData, WeekPositionedEventData } from '../../../types';
import { isEventsOverlap } from '../../../utils';

export function assignEventRows(
  events: WeekPositionedEventData[]
): Map<ScheduleEventData, number> {
  const eventRows = new Map<ScheduleEventData, number>();

  for (const event of events) {
    let row = 0;

    while (true) {
      let hasConflict = false;

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
  }

  return eventRows;
}
