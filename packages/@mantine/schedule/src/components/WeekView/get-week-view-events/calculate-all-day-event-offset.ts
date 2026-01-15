import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue } from '../../../types';

interface CalculateAllDayEventOffsetInput {
  eventStartDate: Dayjs;
  weekStartDate: Dayjs;
  weekDays: DateStringValue[];
  visibleDaysCount: number;
  hangingStart: boolean;
}

export function calculateAllDayEventOffset({
  eventStartDate,
  weekStartDate,
  weekDays,
  visibleDaysCount,
  hangingStart,
}: CalculateAllDayEventOffsetInput): number {
  let displayStartDate = eventStartDate;

  if (hangingStart) {
    displayStartDate = weekStartDate;
  }

  if (!weekDays.some((day) => dayjs(day).isSame(displayStartDate, 'day'))) {
    displayStartDate = dayjs(weekDays[0]);
  }

  const visibleDaysBeforeEvent =
    weekDays.filter(
      (day) => dayjs(day).isBefore(displayStartDate) || dayjs(day).isSame(displayStartDate, 'day')
    ).length - 1;

  return (visibleDaysBeforeEvent / visibleDaysCount) * 100;
}
