import dayjs from 'dayjs';
import type { DayOfWeek } from '../../../types';

interface GetWeekdaysNamesInput {
  locale: string;
  format?: string | ((date: Date) => React.ReactNode);
  firstDayOfWeek?: DayOfWeek;
}

export function getWeekdayNames({
  locale,
  format = 'dd',
  firstDayOfWeek = 1,
}: GetWeekdaysNamesInput) {
  const baseDate = dayjs().day(firstDayOfWeek);
  const labels: Array<string | React.ReactNode> = [];

  for (let i = 0; i < 7; i += 1) {
    if (typeof format === 'string') {
      labels.push(dayjs(baseDate).add(i, 'days').locale(locale).format(format));
    } else {
      labels.push(format(dayjs(baseDate).add(i, 'days').toDate()));
    }
  }

  return labels;
}
