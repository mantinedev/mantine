import dayjs from 'dayjs';
import { DayProps } from '../../Day/Day';
import { isAfterMinDate } from '../is-after-min-date/is-after-min-date';
import { isBeforeMaxDate } from '../is-before-max-date/is-before-max-date';
import { isSameMonth } from '../is-same-month/is-same-month';

export function getDateInTabOrder(
  dates: Date[][],
  minDate: Date | undefined,
  maxDate: Date | undefined,
  getDateControlProps: ((date: Date) => Partial<DayProps>) | undefined,
  excludeDate: ((date: Date) => boolean) | undefined,
  hideOutsideDates: boolean | undefined,
  month: Date
) {
  const enabledDates = dates
    .flat()
    .filter(
      (date) =>
        isBeforeMaxDate(date, maxDate) &&
        isAfterMinDate(date, minDate) &&
        !excludeDate?.(date) &&
        !getDateControlProps?.(date)?.disabled &&
        (!hideOutsideDates || isSameMonth(date, month))
    );

  const selectedDate = enabledDates.find((date) => getDateControlProps?.(date)?.selected);

  if (selectedDate) {
    return selectedDate;
  }

  const currentDate = enabledDates.find((date) => dayjs().isSame(date, 'date'));

  if (currentDate) {
    return currentDate;
  }

  return enabledDates[0];
}
