import dayjs from 'dayjs';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

export function getWeekdaysNames(locale: string) {
  const names: string[] = [];
  const date = getStartOfWeek(new Date());

  for (let i = 0; i < 7; i += 1) {
    names.push(dayjs(date).locale(locale).format('dd'));
    date.setDate(date.getDate() + 1);
  }

  return names;
}
