import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue } from '../../../types';

interface GetHangingStatusInput {
  eventStartDate: Dayjs;
  actualEndDate: Dayjs;
  weekDays: DateStringValue[];
}

export function getHangingStatus({
  eventStartDate,
  actualEndDate,
  weekDays,
}: GetHangingStatusInput): 'start' | 'end' | 'both' | 'none' {
  const weekStartDate = dayjs(weekDays[0]);
  const weekEndDate = dayjs(weekDays[weekDays.length - 1]);

  const hangingStart = eventStartDate.isBefore(weekStartDate);
  const hangingEnd = actualEndDate.isAfter(weekEndDate);

  if (hangingStart && hangingEnd) {
    return 'both';
  }

  if (hangingStart) {
    return 'start';
  }

  if (hangingEnd) {
    return 'end';
  }

  return 'none';
}
