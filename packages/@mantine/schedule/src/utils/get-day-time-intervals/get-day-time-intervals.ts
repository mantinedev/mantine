import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';
import { parseTimeString } from '../parse-time-string/parse-time-string';
import { toTimeString } from '../to-time-string/to-time-string';

export interface DayTimeInterval {
  /** Start time of the interval in HH:mm:ss format */
  startTime: string;

  /** End time of the interval in HH:mm:ss format */
  endTime: string;

  /** Duration of the interval in seconds */
  duration: number;

  /** Indicates if the interval starts at the beginning of an hour */
  isHourStart: boolean;
}

export interface GetDayTimeIntervalsInput {
  /** Start time in HH:mm:ss format */
  startTime: string;

  /** End time in HH:mm:ss format, end of the day by default */
  endTime?: string;

  /** Interval in minutes, 60 by default */
  intervalMinutes?: number;
}

export function getDayTimeIntervals({
  startTime,
  endTime,
  intervalMinutes: _intervalMinutes = 60,
}: GetDayTimeIntervalsInput): DayTimeInterval[] {
  const intervalMinutes = clampIntervalMinutes(_intervalMinutes);

  const start = parseTimeString(startTime);
  const end = endTime ? parseTimeString(endTime) : { hours: 23, minutes: 59, seconds: 59 };

  const startSeconds = start.hours * 3600 + start.minutes * 60 + start.seconds;
  const endSeconds = end.hours * 3600 + end.minutes * 60 + end.seconds;
  const intervalSeconds = intervalMinutes * 60;

  const intervals: DayTimeInterval[] = [];
  let currentSeconds = startSeconds;

  while (currentSeconds < endSeconds) {
    const intervalStartSeconds = currentSeconds;
    let intervalEndSeconds = currentSeconds + intervalSeconds;

    if (intervalEndSeconds > endSeconds) {
      intervalEndSeconds = endSeconds;
    }

    const startHours = Math.floor(intervalStartSeconds / 3600);
    const startMinutes = Math.floor((intervalStartSeconds % 3600) / 60);
    const startSecs = intervalStartSeconds % 60;

    const endHours = Math.floor(intervalEndSeconds / 3600);
    const endMinutes = Math.floor((intervalEndSeconds % 3600) / 60);
    const endSecs = intervalEndSeconds % 60;

    const durationSeconds = intervalEndSeconds - intervalStartSeconds;
    const isHourStart = startMinutes === 0 && startSecs === 0;

    intervals.push({
      startTime: toTimeString({ hours: startHours, minutes: startMinutes, seconds: startSecs }),
      endTime: toTimeString({ hours: endHours, minutes: endMinutes, seconds: endSecs }),
      duration: durationSeconds,
      isHourStart,
    });

    currentSeconds = intervalEndSeconds;
  }

  return intervals;
}
