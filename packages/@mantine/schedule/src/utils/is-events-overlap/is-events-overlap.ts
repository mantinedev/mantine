import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

// Parsing event `start`/`end` with dayjs is relatively expensive, and this helper is called
// O(n^2) times while positioning week/day view events. Cache the parsed timestamps per event
// object (WeakMap, so entries are released together with the events) so each event's start/end
// is parsed only once per positioning pass instead of on every comparison.
const timestampsCache = new WeakMap<ScheduleEventData, { start: number; end: number }>();

function getTimestamps(event: ScheduleEventData) {
  let timestamps = timestampsCache.get(event);

  if (!timestamps) {
    timestamps = { start: dayjs(event.start).valueOf(), end: dayjs(event.end).valueOf() };
    timestampsCache.set(event, timestamps);
  }

  return timestamps;
}

/** Returns true if two events overlap in time */
export function isEventsOverlap(event1: ScheduleEventData, event2: ScheduleEventData) {
  const first = getTimestamps(event1);
  const second = getTimestamps(event2);
  return first.start < second.end && second.start < first.end;
}
