export interface DayKeydownPayload {
  rowIndex: number;
  cellIndex: number;
  date: Date;
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
