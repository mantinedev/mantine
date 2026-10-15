import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { getEventEndDay } from '../get-event-end-day/get-event-end-day';

/** Returns true if the event occupies more than one day (an end at 00:00:00 is exclusive) */
export function isMultidayEvent(event: Pick<ScheduleEventData, 'start' | 'end'>) {
  return getEventEndDay(event).isAfter(dayjs(event.start).startOf('day'));
}
