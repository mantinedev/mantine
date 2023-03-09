import dayjs from 'dayjs';
import { isSameMonth } from '../is-same-month/is-same-month';

interface Props {
  date: Date;
  isSelected: boolean;
  month: Date;
  hasSelectedDayInMonth: boolean;
}

export function getDayTabIndex({ date, isSelected, hasSelectedDayInMonth, month }: Props) {
  if (isSelected) {
    return 0;
  }

  const hasTodayInMonth = isSameMonth(new Date(), month);

  const isToday = dayjs(date).isSame(new Date(), 'day');
  if (!hasSelectedDayInMonth && isToday) {
    return 0;
  }

  const isOutside = !isSameMonth(date, month);
  const isFirstDayInMonth = dayjs(date).format('DD') === '01' && !isOutside;
  if (!hasSelectedDayInMonth && !hasTodayInMonth && isFirstDayInMonth) {
    return 0;
  }

  return -1;
}
