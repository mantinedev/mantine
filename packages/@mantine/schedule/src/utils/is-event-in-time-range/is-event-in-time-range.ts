import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { isMultidayEvent } from '../is-multiday-event/is-multiday-event';

interface IsEventInTimeRangeInput {
  event: ScheduleEventData;
  startTime?: string;
  endTime?: string;
}

function spansFullDay(event: ScheduleEventData) {
  const start = dayjs(event.start);
  const end = dayjs(event.end);
  if (!start.isSame(start.startOf('day'))) {
    return false;
  }
  const nextDayStart = start.startOf('day').add(1, 'day');
  return end.isSame(nextDayStart) || end.isSame(nextDayStart.subtract(1, 'second'));
}

export function isEventInTimeRange({ event, startTime, endTime }: IsEventInTimeRangeInput) {
  if (isMultidayEvent(event) || spansFullDay(event)) {
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
  const eventStartMinutes = eventStart.hour() * 60 + eventStart.minute();
  const eventEndMinutes = eventEnd.hour() * 60 + eventEnd.minute();

  return !(eventEndMinutes <= timeWindowStartMinutes || eventStartMinutes >= timeWindowEndMinutes);
}
