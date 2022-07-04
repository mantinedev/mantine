import { isSameDate } from '../../../utils';
import { DayModifiers } from '../types';
import { isWeekend } from './is-weekend/is-weekend';
import { isOutside } from './is-outside/is-outside';
import { isDisabled } from './is-disabled/is-disabled';
import { getRangeProps } from './get-range-props/get-range-props';

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

  /** Currently selected date or an array of dates */
  value: Date | Date[];

  /** Function to determine if date should be excluded */
  excludeDate(date: Date): boolean;

  /** Should outside events be disabled */
  disableOutsideEvents: boolean;

  /** Selected date range */
  range: [Date, Date];

  /** Indices of weekend days */
  weekendDays: number[];
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
  weekendDays,
}: GetDayProps): DayModifiers {
  const outside = isOutside(date, month);
  const selected =
    hasValue &&
    (Array.isArray(value) ? value.some((val) => isSameDate(val, date)) : isSameDate(date, value));
  const { inRange, lastInRange, firstInRange, selectedInRange } = getRangeProps(date, range);

  return {
    disabled: isDisabled({ minDate, maxDate, excludeDate, disableOutsideEvents, date, outside }),
    weekend: isWeekend(date, weekendDays),
    selectedInRange,
    selected,
    inRange,
    firstInRange,
    lastInRange,
    outside,
  };
}
