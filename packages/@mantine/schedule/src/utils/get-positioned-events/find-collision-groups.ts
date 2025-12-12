import { ScheduleEventData } from '../../types';
import { isEventsOverlap } from '../is-events-overlap/is-events-overlap';

/** Groups events that overlap with each other */
export function findCollisionGroups<T extends ScheduleEventData>(events: T[]): T[][] {
  const groups: T[][] = [];

  for (const event of events) {
    let addedToGroup = false;

    for (const group of groups) {
      if (group.some((e) => isEventsOverlap(e, event))) {
        group.push(event);
        addedToGroup = true;
        break;
      }
    }

    if (!addedToGroup) {
      groups.push([event]);
    }
  }

  return groups;
}
