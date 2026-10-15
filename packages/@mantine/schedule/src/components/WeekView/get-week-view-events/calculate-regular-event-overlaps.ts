import { WeekPositionedEventData } from '../../../types';
import { getOverlapClusters } from '../../../utils/get-overlap-clusters/get-overlap-clusters';

export function calculateRegularEventOverlaps(events: WeekPositionedEventData[]): void {
  for (const cluster of getOverlapClusters(events)) {
    const overlaps = Math.max(...cluster.map((event) => event.position.column)) + 1;

    for (const event of cluster) {
      event.position.overlaps = overlaps;
      event.position.width = 100 / overlaps;
      event.position.offset = (event.position.column * 100) / overlaps;
    }
  }
}
