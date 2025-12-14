import { AnyDateValue, DayOfWeek } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

interface IsSameWeekInput {
  date: AnyDateValue;
  targetWeek: AnyDateValue;
  firstDayOfWeek: DayOfWeek;
}

export function isSameWeek({ date, targetWeek, firstDayOfWeek }: IsSameWeekInput) {
  return getStartOfWeek(targetWeek, firstDayOfWeek) === getStartOfWeek(date, firstDayOfWeek);
}
