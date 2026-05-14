import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

/** Sorts events by start time, then by duration (longer first) */
export function sortEvents<T extends ScheduleEventData>(events: T[]): T[] {
  return events.toSorted((a, b) => {
    const startDiff = dayjs(a.start).diff(dayjs(b.start));

    if (startDiff !== 0) {
      return startDiff;
    }

    return dayjs(b.end).diff(dayjs(b.start)) - dayjs(a.end).diff(dayjs(a.start));
  });
}
