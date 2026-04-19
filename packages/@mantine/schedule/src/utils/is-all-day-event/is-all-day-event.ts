import dayjs from 'dayjs';
import { AnyDateValue, ScheduleEventData } from '../../types';

interface IsAllDayEventInput {
  event: ScheduleEventData;
  date: AnyDateValue;
}

export function isAllDayEvent({ event, date }: IsAllDayEventInput) {
  const dayStart = dayjs(date).startOf('day');
  const nextDayStart = dayStart.add(1, 'day');
  const sameDayEnd = nextDayStart.subtract(1, 'second');
  const startTime = dayjs(event.start);
  const endTime = dayjs(event.end);

  return startTime.isSame(dayStart) && (endTime.isSame(nextDayStart) || endTime.isSame(sameDayEnd));
}
