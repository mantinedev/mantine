import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek, ScheduleEventData } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

interface IsWithinWeekInput {
  event: ScheduleEventData;
  targetWeek: AnyDateValue;
  firstDayOfWeek: DayOfWeek;
}

export function isWithinWeek({ event, targetWeek, firstDayOfWeek }: IsWithinWeekInput) {
  const startOfWeek = dayjs(getStartOfWeek({ date: targetWeek, firstDayOfWeek }));
  const endOfWeek = startOfWeek.add(7, 'day');
  return dayjs(event.start).isBefore(endOfWeek) && dayjs(event.end).isAfter(startOfWeek);
}
