import dayjs from 'dayjs';
import { AnyDateValue, DateStringValue, DayOfWeek } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';
import { toDateString } from '../to-date-string/to-date-string';

export function nextWeek(date: AnyDateValue, firstDayOfWeek: DayOfWeek): DateStringValue {
  const start = getStartOfWeek({ date, firstDayOfWeek });
  return toDateString(dayjs(start).set('date', dayjs(start).date() + 7));
}
