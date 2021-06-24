import dayjs from 'dayjs';
import { isSameDate } from '../../../utils';

interface GetDayProps {
  /** Date associated with Day component */
  date: Date;

  /** Month that is currently displayed */
  month: Date;

  /** Does month have value prop? */
  hasValue: boolean;

  /** Min and max possible dates */
  maxDate: Date;
  minDate: Date;

  /** Currently selected date */
  value: Date;

  /** Function to determine if date should be excluded */
  excludeDate(date: Date): boolean;

  /** Should outside events be disabled */
  disableOutsideEvents: boolean;

  /** Selected date range */
  range: [Date, Date];
}

export interface DayModifiers {
  /** Is date selected and is first in range? */
  selectedInRange: boolean;

  /** Is date equal to value? */
  selected: boolean;

  /** Based on minDate, maxDate, excludeDate and disableOutsideEvents props */
  disabled: boolean;

  /** Is date is range? */
  inRange: boolean;

  /** Is date first or last in given range? */
  firstInRange: boolean;
  lastInRange: boolean;

  /** Is date Saturday or Sunday? */
  weekend: boolean;

  /** Is date outside of given month? */
  outside: boolean;
}

export function getDayProps({
  date,
  month,
  hasValue,
  minDate,
  maxDate,
  value,
  excludeDate,
  disableOutsideEvents,
  range,
}: GetDayProps) {
  const weekday = date.getDay();
  const weekend = weekday === 6 || weekday === 0;
  const outside = date.getMonth() !== month.getMonth();
  const selected = hasValue && isSameDate(date, value);
  const isAfterMax = maxDate instanceof Date && dayjs(maxDate).isBefore(date, 'day');
  const isBeforeMin = minDate instanceof Date && dayjs(minDate).isAfter(date, 'day');
  const shouldExclude = typeof excludeDate === 'function' && excludeDate(date);
  const disabledOutside = disableOutsideEvents && outside;
  const disabled = isAfterMax || isBeforeMin || shouldExclude || disabledOutside;
  const hasRange = Array.isArray(range);
  const inclusiveRange = hasRange && [
    dayjs(range[0]).subtract(1, 'day'),
    dayjs(range[1]).add(1, 'day'),
  ];

  const firstInRange = hasRange && isSameDate(date, range[0]);
  const lastInRange = hasRange && isSameDate(date, range[1]);
  const inRange =
    hasRange &&
    dayjs(date).isAfter(inclusiveRange[0], 'day') &&
    dayjs(date).isBefore(inclusiveRange[1], 'day');

  const selectedInRange = firstInRange || lastInRange;

  return {
    selectedInRange,
    selected,
    disabled,
    inRange,
    firstInRange,
    lastInRange,
    weekend,
    outside,
  };
}
