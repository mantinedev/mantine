import { DayEventPositionData, ScheduleEventData } from '../../types';
import { getOverlapClusters } from '../get-overlap-clusters/get-overlap-clusters';

/** Indent applied per column before the cluster runs out of room, in percent */
const BASE_STEP = 20;

/** Width the last event in a cluster is guaranteed to keep, in percent */
const MIN_TOP_WIDTH = 60;

/** Minimal shape `applyCascadeLayout` needs, shared by day and week positioned events */
export type CascadePositionedEvent = ScheduleEventData & {
  position: Pick<DayEventPositionData, 'allDay' | 'column' | 'width' | 'offset' | 'overlaps'>;
};

export function applyCascadeLayout<T extends CascadePositionedEvent>(events: T[]): void {
  const timedEvents = events.filter((event) => !event.position.allDay);

  for (const cluster of getOverlapClusters(timedEvents)) {
    const columns = Math.max(...cluster.map((event) => event.position.column)) + 1;
    const step = columns > 1 ? Math.min(BASE_STEP, (100 - MIN_TOP_WIDTH) / (columns - 1)) : 0;

    for (const event of cluster) {
      event.position.overlaps = columns;
      event.position.offset = event.position.column * step;
      event.position.width = 100 - event.position.offset;
    }
  }
}
