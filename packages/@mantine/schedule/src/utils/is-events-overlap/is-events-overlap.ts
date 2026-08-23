import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

interface CachedTimestamps {
  start: ScheduleEventData['start'];
  end: ScheduleEventData['end'];
  startTimestamp: number;
  endTimestamp: number;
}

const timestampsCache = new WeakMap<ScheduleEventData, CachedTimestamps>();

function getTimestamps(event: ScheduleEventData): CachedTimestamps {
  const cached = timestampsCache.get(event);

  if (cached && cached.start === event.start && cached.end === event.end) {
    return cached;
  }

  const timestamps: CachedTimestamps = {
    start: event.start,
    end: event.end,
    startTimestamp: dayjs(event.start).valueOf(),
    endTimestamp: dayjs(event.end).valueOf(),
  };

  timestampsCache.set(event, timestamps);

  return timestamps;
}

/** Returns true if two events overlap in time */
export function isEventsOverlap(event1: ScheduleEventData, event2: ScheduleEventData) {
  const first = getTimestamps(event1);
  const second = getTimestamps(event2);
  return first.startTimestamp < second.endTimestamp && second.startTimestamp < first.endTimestamp;
}
