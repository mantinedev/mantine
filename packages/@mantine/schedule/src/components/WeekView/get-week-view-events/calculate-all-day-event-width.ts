import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue } from '../../../types';

interface CalculateAllDayEventWidthInput {
  eventStartDate: Dayjs;
  actualEndDate: Dayjs;
  weekStartDate: Dayjs;
  weekEndDate: Dayjs;
  weekDays: DateStringValue[];
  visibleDaysCount: number;
  isMultiday: boolean;
  rowCount: number;
}

export function calculateAllDayEventWidth({
  eventStartDate,
  actualEndDate,
  weekStartDate,
  weekEndDate,
  weekDays,
  visibleDaysCount,
  isMultiday,
  rowCount,
}: CalculateAllDayEventWidthInput): number {
  if (isMultiday) {
    let displayStartDate = eventStartDate;
    if (eventStartDate.isBefore(weekStartDate)) {
      displayStartDate = weekStartDate;
    }

    let displayEndDate = actualEndDate;
    if (actualEndDate.isAfter(weekEndDate)) {
      displayEndDate = weekEndDate;
    }

    const visibleDaysSpanned = weekDays.filter(
      (day) =>
        (dayjs(day).isAfter(displayStartDate) || dayjs(day).isSame(displayStartDate, 'day')) &&
        (dayjs(day).isBefore(displayEndDate) || dayjs(day).isSame(displayEndDate, 'day'))
    ).length;

    return (visibleDaysSpanned / visibleDaysCount) * 100;
  }

  return 100 / rowCount;
}
