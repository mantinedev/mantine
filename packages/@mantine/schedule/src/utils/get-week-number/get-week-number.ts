import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek.js';
import { DateStringValue } from '../../types';

dayjs.extend(isoWeek);

export function getWeekNumber(week: (Date | DateStringValue)[] | Date | DateStringValue): number {
  if (Array.isArray(week)) {
    const monday = week.find((date) => dayjs(date).day() === 1);
    return dayjs(monday).isoWeek();
  }

  return dayjs(week).isoWeek();
}
