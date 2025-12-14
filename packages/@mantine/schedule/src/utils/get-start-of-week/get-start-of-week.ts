import dayjs from 'dayjs';
import { DateStringValue, DayOfWeek } from '../../types';

export function getStartOfWeek(
  date: Date | DateStringValue | dayjs.Dayjs,
  firstDayOfWeek: DayOfWeek = 1
) {
  let value = dayjs(date);
  while (value.day() !== firstDayOfWeek) {
    value = value.subtract(1, 'day');
  }

  return value.format('YYYY-MM-DD');
}
