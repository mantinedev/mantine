import { getStartOfWeek } from '../get-start-of-week/get-start-of-week';

export function getWeekdaysNames(locale: string) {
  const names: string[] = [];
  const date = getStartOfWeek(new Date());

  for (let i = 0; i < 7; i += 1) {
    names.push(date.toLocaleDateString(locale, { weekday: 'short' }));
    date.setDate(date.getDate() + 1);
  }

  return names;
}
