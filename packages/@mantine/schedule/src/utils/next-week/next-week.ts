import dayjs from 'dayjs';
import { DayOfWeek } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';
import { toDateString } from '../to-date-string/to-date-string';

export function nextWeek(date: Date | string | dayjs.Dayjs, firstDayOfWeek: DayOfWeek) {
  const start = getStartOfWeek(toDateString(date), firstDayOfWeek);
  return toDateString(dayjs(start).set('date', dayjs(start).date() + 7));
}
