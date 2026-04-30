import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek.js';
import { AnyDateValue } from '../../types';

dayjs.extend(isoWeek);

export function getWeekNumber(week: AnyDateValue | AnyDateValue[]): number {
  if (Array.isArray(week)) {
    const monday = week.find((date) => dayjs(date).day() === 1);
    return dayjs(monday).isoWeek();
  }

  return dayjs(week).isoWeek();
}
