import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../types';
import { getEventEndDay } from '../get-event-end-day/get-event-end-day';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

interface IsWithinWeekInput {
  event: ScheduleEventData;
  targetWeek: AnyDateValue;
  firstDayOfWeek: DayOfWeek;
}

export function isWithinWeek({ event, targetWeek, firstDayOfWeek }: IsWithinWeekInput) {
  const startOfWeek = dayjs(getStartOfWeek({ date: targetWeek, firstDayOfWeek }));
  const endOfWeek = startOfWeek.add(7, 'day');
  return dayjs(event.start).isBefore(endOfWeek) && !getEventEndDay(event).isBefore(startOfWeek);
}
