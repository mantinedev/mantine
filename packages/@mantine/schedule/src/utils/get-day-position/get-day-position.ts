import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { parseTimeString } from '../parse-time-string/parse-time-string';

interface GetDayPositionInput {
  /** Event data to calculate position for */
  event: ScheduleEventData;

  /** Start time boundary for the day in HH:mm:ss format, `00:00:00` by default */
  startTime?: string;

  /** End time boundary for the day in HH:mm:ss format, `23:59:59` by default */
  endTime?: string;
}

/** Calculates day position within given start and end time boundaries. Returns top and height in percentages. */
export function getDayPosition({
  event,
  startTime = '00:00:00',
  endTime = '23:59:59',
}: GetDayPositionInput) {
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  const parsedStartTime = parseTimeString(startTime);
  const parsedEndTime = parseTimeString(endTime);

  const startOfDay = eventStart.startOf('date');
  const boundaryStart = startOfDay
    .hour(parsedStartTime.hours)
    .minute(parsedStartTime.minutes)
    .second(0);
  const boundaryEnd = startOfDay.hour(parsedEndTime.hours).minute(parsedEndTime.minutes).second(0);
  const totalMinutes = boundaryEnd.diff(boundaryStart, 'minute');

  const clippedEventStart = eventStart.isBefore(boundaryStart) ? boundaryStart : eventStart;
  const eventStartMinutes = clippedEventStart.diff(boundaryStart, 'minute');

  const clippedEventEnd = eventEnd.isAfter(boundaryEnd) ? boundaryEnd : eventEnd;
  const eventEndMinutes = clippedEventEnd.diff(boundaryStart, 'minute');

  const startPercent = (eventStartMinutes / totalMinutes) * 100;
  const endPercent = (eventEndMinutes / totalMinutes) * 100;

  return {
    top: startPercent,
    height: endPercent - startPercent,
  };
}
