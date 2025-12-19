import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

/** Returns true if two events overlap in time */
export function isEventsOverlap(event1: ScheduleEventData, event2: ScheduleEventData) {
  const start1 = dayjs(event1.start).valueOf();
  const end1 = dayjs(event1.end).valueOf();
  const start2 = dayjs(event2.start).valueOf();
  const end2 = dayjs(event2.end).valueOf();
  return start1 < end2 && start2 < end1;
}
