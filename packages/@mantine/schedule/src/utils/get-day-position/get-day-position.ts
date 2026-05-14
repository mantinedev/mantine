import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';
import { parseTimeString } from '../parse-time-string/parse-time-string';

interface GetDayPositionInput {
  /** Event data to calculate position for */
  event: ScheduleEventData;

  /** Start time boundary for the day in HH:mm:ss format, `00:00:00` by default */
  startTime?: string;

  /** End time boundary for the day in HH:mm:ss format, `23:59:59` by default */
  endTime?: string;

  /** Number of minutes per time slot, `60` by default. Used to align the canvas to whole slots when `endTime` does not divide evenly. */
  intervalMinutes?: number;
}

/** Calculates day position within given start and end time boundaries. Returns top and height in percentages. */
export function getDayPosition({
  event,
  startTime = '00:00:00',
  endTime = '23:59:59',
  intervalMinutes = 60,
}: GetDayPositionInput) {
  const eventStart = dayjs(event.start);
  const eventEnd = dayjs(event.end);

  const parsedStartTime = parseTimeString(startTime);
  const parsedEndTime = parseTimeString(endTime);

  const startOfDay = eventStart.startOf('date');
  const boundaryStart = startOfDay
    .hour(parsedStartTime.hours)
    .minute(parsedStartTime.minutes)
    .second(parsedStartTime.seconds);
  const literalEnd = startOfDay
    .hour(parsedEndTime.hours)
    .minute(parsedEndTime.minutes)
    .second(parsedEndTime.seconds);

  const intervalSeconds = clampIntervalMinutes(intervalMinutes) * 60;
  const literalRangeSeconds = literalEnd.diff(boundaryStart, 'second');
  const totalSeconds = Math.ceil(literalRangeSeconds / intervalSeconds) * intervalSeconds;

  const clippedEventStart = eventStart.isBefore(boundaryStart) ? boundaryStart : eventStart;
  const eventStartSeconds = clippedEventStart.diff(boundaryStart, 'second');

  const clippedEventEnd = eventEnd.isAfter(literalEnd) ? literalEnd : eventEnd;
  const eventEndSeconds = clippedEventEnd.diff(boundaryStart, 'second');

  const startPercent = (eventStartSeconds / totalSeconds) * 100;
  const endPercent = (eventEndSeconds / totalSeconds) * 100;

  return {
    top: startPercent,
    height: endPercent - startPercent,
  };
}
