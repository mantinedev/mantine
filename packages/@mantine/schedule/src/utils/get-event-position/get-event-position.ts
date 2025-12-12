import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

interface GetEventPositionInput {
  event: ScheduleEventData;
  startTime?: string;
  endTime?: string;
}

export interface EventPositionData {
  start: string;
  end: string;
}

export function getEventPosition({
  event,
  startTime,
  endTime,
}: GetEventPositionInput): EventPositionData {
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  if (startTime && endTime) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startOfDay = eventStart.startOf('date');
    const boundaryStart = startOfDay.hour(startHour).minute(startMinute).second(0);
    const boundaryEnd = startOfDay.hour(endHour).minute(endMinute).second(0);

    const totalMinutes = boundaryEnd.diff(boundaryStart, 'minute');
    const eventStartMinutes = eventStart.diff(boundaryStart, 'minute');
    const eventEndMinutes = eventEnd.diff(boundaryStart, 'minute');

    return {
      start: `${(eventStartMinutes / totalMinutes) * 100}%`,
      end: `${(eventEndMinutes / totalMinutes) * 100}%`,
    };
  }

  const startOfDay = eventStart.startOf('date');
  const eventStartMinutes = eventStart.diff(startOfDay, 'minute');
  const eventEndMinutes = eventEnd.diff(startOfDay, 'minute');

  return {
    start: `${(eventStartMinutes / 1440) * 100}%`,
    end: `${(eventEndMinutes / 1440) * 100}%`,
  };
}
