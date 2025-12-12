import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

export function isEventsOverlap(e1: ScheduleEventData, e2: ScheduleEventData) {
  const start1 = dayjs(e1.start).valueOf();
  const end1 = dayjs(e1.end).valueOf();
  const start2 = dayjs(e2.start).valueOf();
  const end2 = dayjs(e2.end).valueOf();

  return start1 < end2 && start2 < end1;
}
