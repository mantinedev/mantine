import dayjs from 'dayjs';
import { MonthPositionedEventData } from '../../../types';

interface FindAvailableRowInput {
  existingEvents: MonthPositionedEventData[];
  startDayIndex: number;
  daysSpanned: number;
  weekStart: dayjs.Dayjs;
}

export function findAvailableRow({
  existingEvents,
  startDayIndex,
  daysSpanned,
  weekStart,
}: FindAvailableRowInput): number {
  let row = 0;

  for (const existing of existingEvents) {
    const existingStart = dayjs(existing.start).startOf('day');
    const existingDisplayStart =
      existingStart.isBefore(weekStart) || existingStart.isSame(weekStart, 'day')
        ? weekStart
        : existingStart;
    const existingDayIndex = existingDisplayStart.diff(weekStart, 'day');
    const existingWidth = existing.position?.width || 0;
    const existingDaysSpanned = (existingWidth / 100) * 7;

    if (
      existingDayIndex + existingDaysSpanned > startDayIndex &&
      existingDayIndex < startDayIndex + daysSpanned
    ) {
      row = Math.max(row, (existing.position?.row || 0) + 1);
    }
  }

  return row;
}
