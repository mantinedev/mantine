import dayjs from 'dayjs';
import { DateLabelFormat } from '../../types';
import { formatDate } from '../format-date/format-date';

interface GetMonthsListInput {
  locale: string;
  format: DateLabelFormat;
}

interface MonthData {
  month: number;
  name: string;
}

export function getMonthsList({ locale, format }: GetMonthsListInput) {
  const months: MonthData[] = [];
  const date = dayjs().locale(locale).startOf('year');

  for (let i = 0; i < 12; i++) {
    months.push({ month: i, name: formatDate({ date: date.add(i, 'month'), format, locale }) });
  }

  return months;
}
