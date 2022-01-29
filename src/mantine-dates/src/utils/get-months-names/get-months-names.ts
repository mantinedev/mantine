import dayjs from 'dayjs';

export function getMonthsNames(locale: string, format: string = 'MMM') {
  const names: string[] = [];
  const date = new Date(2021, 0, 1);

  for (let i = 0; i < 12; i += 1) {
    names.push(dayjs(date).locale(locale).format(format));
    date.setMonth(date.getMonth() + 1);
  }

  return names;
}
