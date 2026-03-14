import dayjs from 'dayjs';
import { DateLabelFormat } from '../../types';

export interface FormatDateInput {
  locale: string;
  date: string | Date | dayjs.Dayjs;
  format: DateLabelFormat;
}

export function formatDate({ locale, date, format }: FormatDateInput) {
  if (typeof format === 'function') {
    return format(dayjs(date).format('YYYY-MM-DD HH:mm:ss'));
  }

  return dayjs(date).locale(locale).format(format);
}
