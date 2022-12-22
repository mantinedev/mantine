import dayjs from 'dayjs';
import { FirstDayOfWeek } from '../../types';
import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

export function getWeekdaysNames(
  locale: string,
  firstDayOfWeek: FirstDayOfWeek = 'monday',
  format: string = 'dd'
) {
  const names: string[] = [];
  const date = getStartOfWeek(new Date(), firstDayOfWeek);

  for (let i = 0; i < 7; i += 1) {
    names.push(dayjs(date).locale(locale).format(format));
    date.setDate(date.getDate() + 1);
  }

  return names;
}
