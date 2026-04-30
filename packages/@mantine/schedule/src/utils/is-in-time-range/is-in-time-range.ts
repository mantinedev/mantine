import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';
import { parseTimeString } from '../parse-time-string/parse-time-string';

interface IsInTimeRangeInput {
  date: AnyDateValue;
  startTime?: string;
  endTime?: string;
}

/** Returns true if the given date's time is within the specified time range */
export function isInTimeRange({
  date,
  startTime = '00:00:00',
  endTime = '23:59:59',
}: IsInTimeRangeInput) {
  const targetDate = dayjs(date);
  const parsedStartTime = parseTimeString(startTime);
  const parsedEndTime = parseTimeString(endTime);

  const startDateTime = targetDate
    .hour(parsedStartTime.hours)
    .minute(parsedStartTime.minutes)
    .second(parsedStartTime.seconds);

  const endDateTime = targetDate
    .hour(parsedEndTime.hours)
    .minute(parsedEndTime.minutes)
    .second(parsedEndTime.seconds);

  return targetDate.isAfter(startDateTime) && targetDate.isBefore(endDateTime);
}
