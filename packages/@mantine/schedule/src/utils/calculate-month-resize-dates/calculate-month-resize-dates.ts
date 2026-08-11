import dayjs from 'dayjs';
import { DateStringValue, DateTimeStringValue, ScheduleEventData } from '../../types';

export type MonthResizeEdge = 'start' | 'end';

export interface CalculateMonthResizeDatesInput {
  /** The event being resized */
  event: ScheduleEventData;

  /** Edge of the event that is being dragged */
  edge: MonthResizeEdge;

  /** The day on which the dragged edge was released */
  targetDay: DateStringValue;
}

export interface CalculateMonthResizeDatesResult {
  /** New start date for the event */
  start: DateTimeStringValue;

  /** New end date for the event */
  end: DateTimeStringValue;
}

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

function isExclusiveMidnight(value: dayjs.Dayjs): boolean {
  return value.hour() === 0 && value.minute() === 0 && value.second() === 0;
}

function withTimeOf(day: dayjs.Dayjs, source: dayjs.Dayjs): dayjs.Dayjs {
  return day
    .startOf('day')
    .hour(source.hour())
    .minute(source.minute())
    .second(source.second())
    .millisecond(source.millisecond());
}

export function calculateMonthResizeDates({
  event,
  edge,
  targetDay,
}: CalculateMonthResizeDatesInput): CalculateMonthResizeDatesResult {
  const originalStart = dayjs(event.start);
  const originalEnd = dayjs(event.end);
  const target = dayjs(targetDay).startOf('day');

  const startDay = originalStart.startOf('day');
  const endAtMidnight = isExclusiveMidnight(originalEnd);
  const endDay = endAtMidnight
    ? originalEnd.startOf('day').subtract(1, 'day')
    : originalEnd.startOf('day');

  if (edge === 'start') {
    const clampedDay = target.isAfter(endDay) ? endDay : target;
    let newStart = withTimeOf(clampedDay, originalStart);

    if (!newStart.isBefore(originalEnd)) {
      newStart = newStart.subtract(1, 'day');
    }

    return {
      start: newStart.format(DATE_TIME_FORMAT),
      end: originalEnd.format(DATE_TIME_FORMAT),
    };
  }

  const clampedDay = target.isBefore(startDay) ? startDay : target;
  let newEnd = endAtMidnight
    ? clampedDay.add(1, 'day').startOf('day')
    : withTimeOf(clampedDay, originalEnd);

  if (!newEnd.isAfter(originalStart)) {
    newEnd = newEnd.add(1, 'day');
  }

  return {
    start: originalStart.format(DATE_TIME_FORMAT),
    end: newEnd.format(DATE_TIME_FORMAT),
  };
}
