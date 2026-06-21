import { DayPositionedEventData } from '../../../types';
import { isEventsOverlap } from '../../../utils';

export function getOverlapClusters(events: DayPositionedEventData[]): DayPositionedEventData[][] {
  const clusters: DayPositionedEventData[][] = [];
  const assigned = new Set<number>();

  for (let i = 0; i < events.length; i++) {
    if (assigned.has(i)) {
      continue;
    }

    const cluster: DayPositionedEventData[] = [events[i]];
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
