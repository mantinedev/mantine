import { WeekPositionedEventData } from '../../../types';
import { isEventsOverlap } from '../../../utils';

export function calculateRegularEventOverlaps(events: WeekPositionedEventData[]): void {
  for (const event of events) {
    let maxOverlappingColumn = event.position.column;

    for (const otherEvent of events) {
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
