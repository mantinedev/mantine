import dayjs from 'dayjs';

export type HangingStatus = 'none' | 'start' | 'end' | 'both';

interface CalculateEventPositionInput {
  eventStart: dayjs.Dayjs;
  eventEnd: dayjs.Dayjs;
  weekStart: dayjs.Dayjs;
  weekEnd: dayjs.Dayjs;
  isMultiday: boolean;
}

interface EventPositionInWeek {
  startDayIndex: number;
  daysSpanned: number;
  startOffset: number;
  width: number;
  hanging: HangingStatus;
}

export function calculateEventPositionInWeek({
  eventStart,
  eventEnd,
  weekStart,
  weekEnd,
  isMultiday,
}: CalculateEventPositionInput): EventPositionInWeek {
  let displayStart = eventStart;
  let displayEnd = eventEnd;

  const hangingStart = eventStart.isBefore(weekStart);
  const hangingEnd = eventEnd.isAfter(weekEnd);
  const hanging: HangingStatus =
    hangingStart && hangingEnd ? 'both' : hangingStart ? 'start' : hangingEnd ? 'end' : 'none';

  if (displayStart.isBefore(weekStart)) {
    displayStart = weekStart;
  }
  if (displayEnd.isAfter(weekEnd)) {
    displayEnd = weekEnd;
  }

  const startDayIndex = displayStart.diff(weekStart, 'day');
  const endDayIndex = displayEnd.diff(weekStart, 'day');
  const daysSpanned = Math.max(1, endDayIndex - startDayIndex + (isMultiday ? 1 : 0));

  const startOffset = (startDayIndex / 7) * 100;
  const width = (daysSpanned / 7) * 100;

  return {
    startDayIndex,
    daysSpanned,
    startOffset,
    width,
    hanging,
  };
}
