import dayjs from 'dayjs';
import { upperFirst } from '@mantine/hooks';

interface FormatMonthLabel {
  month: Date;
  locale: string;
}

export function formatMonthLabel({ month, locale }: FormatMonthLabel) {
  return upperFirst(dayjs(month).locale(locale).format('MMMM YYYY'));
}
