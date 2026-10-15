import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { getEventEndDay } from '../get-event-end-day/get-event-end-day';
import { isAllDayEvent } from '../is-all-day-event/is-all-day-event';
import { isMultidayEvent } from '../is-multiday-event/is-multiday-event';

interface IsEventInTimeRangeInput {
  event: ScheduleEventData;
  startTime?: string;
  endTime?: string;
}

export function isEventInTimeRange({ event, startTime, endTime }: IsEventInTimeRangeInput) {
  if (isMultidayEvent(event) || isAllDayEvent({ event, date: event.start })) {
    return true;
  }

  if (!startTime || !endTime) {
    return true;
  }

  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const timeWindowStartMinutes = startHour * 60 + startMinute;
  const timeWindowEndMinutes = endHour * 60 + endMinute;

  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);
  const endsAtNextDayStart = eventEnd.isSame(getEventEndDay(event).add(1, 'day'));
  const eventStartMinutes = eventStart.hour() * 60 + eventStart.minute();
  const eventEndMinutes = endsAtNextDayStart ? 24 * 60 : eventEnd.hour() * 60 + eventEnd.minute();

  return !(eventEndMinutes <= timeWindowStartMinutes || eventStartMinutes >= timeWindowEndMinutes);
}
