import dayjs from 'dayjs';
import type { DayOfWeek } from '../../../types';

interface GetWeekdaysNamesInput {
  locale: string;
  format?: string;
  firstDayOfWeek?: DayOfWeek;
}

export function getWeekdayNames({
  locale,
  format = 'dd',
  firstDayOfWeek = 1,
}: GetWeekdaysNamesInput) {
  const baseDate = dayjs().startOf('week');
  const labels: string[] = [];

  for (let i = 0; i < 7; i += 1) {
    labels.push(dayjs(baseDate).add(i, 'days').locale(locale).format(format));
  }

  return [...labels.slice(firstDayOfWeek), ...labels.slice(0, firstDayOfWeek)];
}
