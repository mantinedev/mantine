import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek.js';

dayjs.extend(isoWeek);

export function getWeekNumber(week: Date[]): number {
  const monday = week.find((date) => dayjs(date).day() === 1);
  return dayjs(monday).isoWeek();
}
