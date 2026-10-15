import dayjs from 'dayjs';

export type HangingStatus = 'none' | 'start' | 'end' | 'both';

interface CalculateEventPositionInput {
  eventStart: dayjs.Dayjs;
  eventEnd: dayjs.Dayjs;
  weekStart: dayjs.Dayjs;
  weekEnd: dayjs.Dayjs;
  isMultiday: boolean;

  /** If set, the event continues before `eventStart` even when it starts within the week */
  hangingStart?: boolean;

  /** If set, the event continues after `eventEnd` even when it ends within the week */
  hangingEnd?: boolean;
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
  hangingStart: continuesBefore = false,
  hangingEnd: continuesAfter = false,
}: CalculateEventPositionInput): EventPositionInWeek {
  let displayStart = eventStart;
  let displayEnd = eventEnd;

  const hangingStart = continuesBefore || eventStart.isBefore(weekStart);
  const hangingEnd = continuesAfter || eventEnd.isAfter(weekEnd);
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
