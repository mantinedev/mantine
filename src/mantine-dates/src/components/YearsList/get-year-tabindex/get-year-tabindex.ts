import dayjs from 'dayjs';

export function getYearTabIndex(year: Date, years: Date[][]) {
  if (dayjs(year).isSame(years[0][0], 'year')) {
    return 0;
  }

  return -1;
}
