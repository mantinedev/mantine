import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';
import { alignTimeToInterval } from '../align-time-to-interval/align-time-to-interval';
import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';

interface GetCurrentTimePositionInput {
  startTime?: string;
  endTime?: string;
  now?: AnyDateValue;

  /** Number of minutes per time slot. Used to align the indicator to whole slots when `endTime` does not divide evenly. */
  intervalMinutes?: number;
}

export function getCurrentTimePosition(input?: GetCurrentTimePositionInput) {
  const now = dayjs(input?.now);

  if (!input?.startTime || !input?.endTime) {
    const startOf = now.startOf('date');
    const diffInMinutes = now.diff(startOf, 'minute');
    return (diffInMinutes / 1440) * 100;
  }

  const alignedStartTime =
    input.intervalMinutes !== undefined
      ? alignTimeToInterval(input.startTime, input.intervalMinutes)
      : input.startTime;

  const [startHour, startMinute, startSecond = 0] = alignedStartTime.split(':').map(Number);
  const [endHour, endMinute, endSecond = 0] = input.endTime.split(':').map(Number);

  const startOfDay = now.startOf('date');
  const startDateTime = startOfDay.hour(startHour).minute(startMinute).second(startSecond);
  const endDateTime = startOfDay.hour(endHour).minute(endMinute).second(endSecond);

  const literalSeconds = endDateTime.diff(startDateTime, 'second');
  const intervalSeconds =
    input.intervalMinutes !== undefined
      ? clampIntervalMinutes(input.intervalMinutes) * 60
      : undefined;
  const totalSeconds = intervalSeconds
    ? Math.ceil(literalSeconds / intervalSeconds) * intervalSeconds
    : literalSeconds;
  const currentSeconds = now.diff(startDateTime, 'second');

  return (currentSeconds / totalSeconds) * 100;
}
