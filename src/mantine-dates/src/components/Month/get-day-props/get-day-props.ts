import { isSameDate } from '../../../utils';
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
  /** Is date selected and is first or last in range? */
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
  const outside = isOutside(date, month);
  const selected = hasValue && isSameDate(date, value);
  const { inRange, lastInRange, firstInRange, selectedInRange } = getRangeProps(date, range);

  return {
    disabled: isDisabled({ minDate, maxDate, excludeDate, disableOutsideEvents, date, outside }),
    weekend: isWeekend(date),
    selectedInRange,
    selected,
    inRange,
    firstInRange,
    lastInRange,
    outside,
  };
}
