import dayjs from 'dayjs';
import { DayProps } from 'src/components/Day';
import { isAfterMinDate } from '../is-after-min-date/is-after-min-date';
import { isBeforeMaxDate } from '../is-before-max-date/is-before-max-date';

export function getDateInTabOrder(
  dates: Date[][],
  minDate: Date,
  maxDate: Date,
  getDateControlProps: (date: Date) => Partial<DayProps>,
  excludeDate: (date: Date) => boolean
) {
  const enabledDates = dates
    .flat()
    .filter(
      (date) =>
        isBeforeMaxDate(date, maxDate) &&
        isAfterMinDate(date, minDate) &&
        !excludeDate?.(date) &&
        !getDateControlProps?.(date)?.disabled
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
