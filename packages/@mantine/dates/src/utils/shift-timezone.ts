import dayjs from 'dayjs';
import { DatesRangeValue, DateValue } from '../types';
import { getTimezoneOffset } from './get-timezone-offset';

type TimeShiftDirection = 'add' | 'remove';

const updateTimezone = (
  date: DateValue | undefined,
  timezone?: string,
  direction?: TimeShiftDirection
): DateValue => {
  if (!date) {
    return null;
  }
  if (!timezone) {
    return date;
  }
  let offset = getTimezoneOffset(date, timezone);
  if (direction === 'remove') {
    offset *= -1;
  }
  return dayjs(date).add(offset, 'minutes').toDate();
};

export function shiftTimezone<T extends DateValue | Date[] | DatesRangeValue | undefined>(
  direction: TimeShiftDirection,
  date: T,
  timezone?: string,
  disabled?: boolean
): T {
  if (disabled || !date) {
    return date;
  }
  if (Array.isArray(date)) {
    return date.map((d) => updateTimezone(d, timezone, direction)) as T;
  }
  return updateTimezone(date, timezone, direction) as T;
}
