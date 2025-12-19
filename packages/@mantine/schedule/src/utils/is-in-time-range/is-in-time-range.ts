import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';

interface IsInTimeRangeInput {
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
}

export function isInTimeRange({
  date,
  startTime = '00:00:00',
  endTime = '23:59:59',
}: IsInTimeRangeInput) {
  const targetDate = dayjs(date);
  const [startHour, startMinute, startSecond] = startTime
    .split(':')
    .map((part) => parseInt(part, 10));
  const [endHour, endMinute, endSecond] = endTime.split(':').map((part) => parseInt(part, 10));

  const startDateTime = targetDate.hour(startHour).minute(startMinute).second(startSecond);
  const endDateTime = targetDate.hour(endHour).minute(endMinute).second(endSecond);

  return targetDate.isAfter(startDateTime) && targetDate.isBefore(endDateTime);
}
