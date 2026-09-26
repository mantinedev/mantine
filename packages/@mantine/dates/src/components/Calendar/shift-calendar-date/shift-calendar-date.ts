import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export type CalendarShiftUnit = 'month' | 'year';

export function shiftCalendarDate(
  date: DateStringValue,
  amount: number,
  unit: CalendarShiftUnit,
  columnsToScroll: number
): DateStringValue {
  return dayjs(date)
    .add(amount * columnsToScroll, unit)
    .format('YYYY-MM-DD');
}
