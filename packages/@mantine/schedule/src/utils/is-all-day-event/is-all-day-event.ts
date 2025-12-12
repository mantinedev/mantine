import dayjs from 'dayjs';
import { DateStringValue, ScheduleEventData } from '../../types';

interface IsAllDayEventInput {
  event: ScheduleEventData;
  date: Date | DateStringValue | dayjs.Dayjs;
}

export function isAllDayEvent({ event, date }: IsAllDayEventInput) {
  const dayStart = dayjs(date).startOf('day');
  const dayEnd = dayStart.add(1, 'day');
  const startTime = dayjs(event.start);
  const endTime = dayjs(event.end);

  return startTime.isSame(dayStart) && endTime.isSame(dayEnd);
}
