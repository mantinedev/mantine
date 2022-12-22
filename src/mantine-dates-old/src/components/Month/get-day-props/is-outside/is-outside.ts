import { isSameMonth } from '../../../../utils';

export function isOutside(date: Date, month: Date) {
  return !isSameMonth(date, month);
}
