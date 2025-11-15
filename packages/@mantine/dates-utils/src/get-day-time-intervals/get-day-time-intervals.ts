import dayjs from 'dayjs';
import { DateStringValue } from '../types';

export interface DayTimeInterval {
  /** Start time of the interval */
  startTime: Date;

  /** End time of the interval */
  endTime: Date;

  /** Duration of the interval in minutes */
  duration: number;

  /** Indicates if the interval starts at the beginning of an hour */
  isHourStart: boolean;
}

export interface GetDayTimeIntervalsInput {
  /** Start date for which to get time intervals */
  startTime: Date | DateStringValue;

  /** End date for which to get time intervals, end of the day by default */
  endTime?: Date | DateStringValue;

  /** Interval in minutes, 30 by default */
  intervalMinutes?: number;
}

export function getDayTimeIntervals({
  startTime,
  endTime,
  intervalMinutes = 30,
}: GetDayTimeIntervalsInput): DayTimeInterval[] {
  const start = dayjs(startTime);
  const end = endTime ? dayjs(endTime) : start.endOf('day');
  const intervals: DayTimeInterval[] = [];

  let current = start;

  while (current.isBefore(end)) {
    const intervalStart = current.toDate();
    const intervalEnd = current.add(intervalMinutes, 'minute').toDate();
    const isHourStart = current.minute() === 0;

    intervals.push({
      startTime: intervalStart,
      endTime: intervalEnd,
      duration: intervalMinutes,
      isHourStart,
    });

    current = current.add(intervalMinutes, 'minute');
  }

  return intervals;
}
