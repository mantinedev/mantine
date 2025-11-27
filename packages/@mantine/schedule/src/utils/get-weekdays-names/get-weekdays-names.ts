import dayjs from 'dayjs';
import type { DateLabelFormat, DayOfWeek } from '../../types';
import { formatDate } from '../format-date/format-date';

interface GetWeekdaysNamesInput {
  locale: string;
  format?: DateLabelFormat;
  firstDayOfWeek?: DayOfWeek;
}

export function getWeekdaysNames({
  locale,
  format = 'dd',
  firstDayOfWeek = 1,
}: GetWeekdaysNamesInput) {
  const baseDate = dayjs().day(firstDayOfWeek);
  const labels: React.ReactNode[] = [];

  for (let i = 0; i < 7; i += 1) {
    labels.push(formatDate({ locale, date: baseDate.add(i, 'days'), format }));
  }

  return labels;
}
