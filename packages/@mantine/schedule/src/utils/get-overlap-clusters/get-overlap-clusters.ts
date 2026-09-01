import { ScheduleEventData } from '../../types';
import { isEventsOverlap } from '../is-events-overlap/is-events-overlap';

export function getOverlapClusters<T extends ScheduleEventData>(events: T[]): T[][] {
  const clusters: T[][] = [];
  const assigned = new Set<number>();

  for (let i = 0; i < events.length; i++) {
    if (assigned.has(i)) {
      continue;
    }

    const cluster: T[] = [events[i]];
    assigned.add(i);

    let j = 0;
    while (j < cluster.length) {
      for (let k = 0; k < events.length; k++) {
        if (!assigned.has(k) && isEventsOverlap(cluster[j], events[k])) {
          cluster.push(events[k]);
          assigned.add(k);
        }
      }
      j++;
    }

    clusters.push(cluster);
  }

  return clusters;
}
