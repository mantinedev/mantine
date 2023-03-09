import dayjs from 'dayjs';

export function getMonthTabIndex(month: Date, months: Date[][]) {
  if (dayjs(month).isSame(months[0][0], 'month')) {
    return 0;
  }

  return -1;
}
