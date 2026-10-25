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

function toSeconds(hours: number, minutes: number, seconds: number) {
  return hours * 3600 + minutes * 60 + seconds;
}

function getWallClockSeconds(date: dayjs.Dayjs, startOfDay: dayjs.Dayjs) {
  const dayOffset = date.startOf('date').diff(startOfDay, 'day');
  return dayOffset * 86400 + toSeconds(date.hour(), date.minute(), date.second());
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
  const boundaryStartSeconds = toSeconds(
    parsedStartTime.hours,
    parsedStartTime.minutes,
    parsedStartTime.seconds
  );
  const boundaryEndSeconds = toSeconds(
    parsedEndTime.hours,
    parsedEndTime.minutes,
    parsedEndTime.seconds
  );

  const intervalSeconds = clampIntervalMinutes(intervalMinutes) * 60;
  const literalRangeSeconds = boundaryEndSeconds - boundaryStartSeconds;
  const totalSeconds = Math.ceil(literalRangeSeconds / intervalSeconds) * intervalSeconds;

  const eventStartSeconds =
    Math.max(getWallClockSeconds(eventStart, startOfDay), boundaryStartSeconds) -
    boundaryStartSeconds;
  const eventEndSeconds =
    Math.min(getWallClockSeconds(eventEnd, startOfDay), boundaryEndSeconds) - boundaryStartSeconds;

  const startPercent = (eventStartSeconds / totalSeconds) * 100;
  const endPercent = (eventEndSeconds / totalSeconds) * 100;

  return {
    top: startPercent,
    height: endPercent - startPercent,
  };
}
