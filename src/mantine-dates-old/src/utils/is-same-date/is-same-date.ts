import { isSameMonth } from '../is-same-month/is-same-month';

export function isSameDate(date: Date, comparison: Date) {
  return isSameMonth(date, comparison) && date.getDate() === comparison.getDate();
}
