import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek.js';
import { DateStringValue } from '../../../types';

dayjs.extend(isoWeek);

export function getWeekNumber(week: DateStringValue[]): number {
  const monday = week.find((date) => dayjs(date).day() === 1);
  return dayjs(monday).isoWeek();
}
