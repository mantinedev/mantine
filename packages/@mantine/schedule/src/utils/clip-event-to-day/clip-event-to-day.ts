import dayjs from 'dayjs';
import { AnyDateValue, ScheduleEventData } from '../../types';

/** Returns a copy of the event with start and end clipped to the given day (end is clipped to 23:59:59) */
export function clipEventToDay<T extends ScheduleEventData>(event: T, date: AnyDateValue): T {
  const dayStart = dayjs(date).startOf('day');
  const dayEnd = dayStart.endOf('day');
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  return {
    ...event,
    start: (eventStart.isBefore(dayStart) ? dayStart : eventStart).format('YYYY-MM-DD HH:mm:ss'),
    end: (eventEnd.isAfter(dayEnd) ? dayEnd : eventEnd).format('YYYY-MM-DD HH:mm:ss'),
  };
}

export function getClippedEdges(event: ScheduleEventData, date: AnyDateValue) {
  const dayStart = dayjs(date).startOf('day');
  return {
    start: dayjs(event.start).isBefore(dayStart),
    end: dayjs(event.end).isAfter(dayStart.add(1, 'day')),
  };
}
