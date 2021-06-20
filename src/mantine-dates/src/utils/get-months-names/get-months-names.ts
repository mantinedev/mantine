import dayjs from 'dayjs';

export function getMonthsNames(locale: string) {
  const names: string[] = [];
  const date = new Date(2021, 0, 1);

  for (let i = 0; i < 12; i += 1) {
    names.push(dayjs(date).locale(locale).format('MMMM'));
    date.setMonth(date.getMonth() + 1);
  }

  return names;
}
