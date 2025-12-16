import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';

interface GetDayPosition {
  event: ScheduleEventData;
  startTime?: string;
  endTime?: string;
}

export function getDayPosition({ event, startTime, endTime }: GetDayPosition) {
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  if (startTime && endTime) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const startOfDay = eventStart.startOf('date');
    const boundaryStart = startOfDay.hour(startHour).minute(startMinute).second(0);
    const boundaryEnd = startOfDay.hour(endHour).minute(endMinute).second(0);

    const totalMinutes = boundaryEnd.diff(boundaryStart, 'minute');

    // Clamp event start to boundary start if it starts before
    const clippedEventStart = eventStart.isBefore(boundaryStart) ? boundaryStart : eventStart;
    const eventStartMinutes = clippedEventStart.diff(boundaryStart, 'minute');

    // Clamp event end to boundary end if it extends beyond
    const clippedEventEnd = eventEnd.isAfter(boundaryEnd) ? boundaryEnd : eventEnd;
    const eventEndMinutes = clippedEventEnd.diff(boundaryStart, 'minute');

    const startPercent = (eventStartMinutes / totalMinutes) * 100;
    const endPercent = (eventEndMinutes / totalMinutes) * 100;

    return {
      top: startPercent,
      height: endPercent - startPercent,
    };
  }

  const startOfDay = eventStart.startOf('date');
  const eventStartMinutes = eventStart.diff(startOfDay, 'minute');
  const eventEndMinutes = eventEnd.diff(startOfDay, 'minute');

  const startPercent = (eventStartMinutes / 1440) * 100;
  const endPercent = (eventEndMinutes / 1440) * 100;

  return {
    top: startPercent,
    height: endPercent - startPercent,
  };
}
