import dayjs, { Dayjs } from 'dayjs';
import { AnyDateValue, ScheduleEventData } from '../../types';

export function isStartOfDay(value: Dayjs) {
  return value.hour() === 0 && value.minute() === 0 && value.second() === 0;
}

/** Returns the start of the last day the event occupies. An end at exactly 00:00:00 is exclusive and belongs to the previous day, the result is never before the start day. */
export function getEventEndDay(event: Pick<ScheduleEventData, 'start' | 'end'>): Dayjs {
  const startDay = dayjs(event.start).startOf('day');
  const end = dayjs(event.end);
  const endDay = end.startOf('day');
  const lastDay = end.isSame(endDay) ? endDay.subtract(1, 'day') : endDay;
  return lastDay.isBefore(startDay) ? startDay : lastDay;
}

/** Returns true if the event occupies the given day (exclusive 00:00:00 end) */
export function isEventOnDay(event: Pick<ScheduleEventData, 'start' | 'end'>, day: AnyDateValue) {
  const dayStart = dayjs(day).startOf('day');
  return (
    !dayjs(event.start).startOf('day').isAfter(dayStart) &&
    !getEventEndDay(event).isBefore(dayStart)
  );
}
