import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

export function isMultidayEvent(event: ScheduleEventData) {
  const startDate = dayjs(event.start).startOf('day');
  const endDate = dayjs(event.end).startOf('day');
  return endDate.isAfter(startDate);
}
