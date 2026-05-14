import dayjs from 'dayjs';
import { AnyDateValue, DayOfWeek } from '../../types';

interface GetStartOfWeekInput {
  date: AnyDateValue;
  firstDayOfWeek?: DayOfWeek;
}

export function getStartOfWeek({ date, firstDayOfWeek = 1 }: GetStartOfWeekInput) {
  let value = dayjs(date);

  while (value.day() !== firstDayOfWeek) {
    value = value.subtract(1, 'day');
  }

  return value.format('YYYY-MM-DD');
}
