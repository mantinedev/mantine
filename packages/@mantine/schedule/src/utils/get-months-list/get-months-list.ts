import dayjs from 'dayjs';

interface GetMonthsListInput {
  locale: string;
  format: string;
}

interface MonthData {
  month: number;
  name: string;
}

export function getMonthsList({ locale, format }: GetMonthsListInput) {
  const months: MonthData[] = [];
  const date = dayjs().locale(locale).startOf('year');

  for (let i = 0; i < 12; i++) {
    months.push({ month: i + 1, name: date.add(i, 'month').format(format) });
  }

  return months;
}
