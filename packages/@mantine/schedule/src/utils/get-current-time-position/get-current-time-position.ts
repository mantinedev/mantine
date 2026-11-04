import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';
import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';

interface GetCurrentTimePositionInput {
  startTime?: string;
  endTime?: string;
  now?: AnyDateValue;

  /** Number of minutes per time slot. Used to align the indicator to whole slots when `endTime` does not divide evenly. */
  intervalMinutes?: number;
}

function toSeconds(hours: number, minutes: number, seconds: number) {
  return hours * 3600 + minutes * 60 + seconds;
}

export function getCurrentTimePosition(input?: GetCurrentTimePositionInput) {
  const now = dayjs(input?.now);
  const nowSeconds = toSeconds(now.hour(), now.minute(), now.second());

  if (!input?.startTime || !input?.endTime) {
    return (Math.floor(nowSeconds / 60) / 1440) * 100;
  }

  const [startHour, startMinute, startSecond = 0] = input.startTime.split(':').map(Number);
  const [endHour, endMinute, endSecond = 0] = input.endTime.split(':').map(Number);

  const startSeconds = toSeconds(startHour, startMinute, startSecond);
  const literalSeconds = toSeconds(endHour, endMinute, endSecond) - startSeconds;
  const intervalSeconds =
    input.intervalMinutes !== undefined
      ? clampIntervalMinutes(input.intervalMinutes) * 60
      : undefined;
  const totalSeconds = intervalSeconds
    ? Math.ceil(literalSeconds / intervalSeconds) * intervalSeconds
    : literalSeconds;
  const currentSeconds = nowSeconds - startSeconds;

  return (currentSeconds / totalSeconds) * 100;
}
