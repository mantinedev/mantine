import dayjs from 'dayjs';
import { ScheduleEventData } from '../../../types';

export function getEventEndDate(event: ScheduleEventData) {
  const eventEndDate = dayjs(event.end).startOf('day');

  if (dayjs(event.end).hour() === 0 && dayjs(event.end).minute() === 0) {
    return eventEndDate.subtract(1, 'day');
  }

  return eventEndDate;
}
