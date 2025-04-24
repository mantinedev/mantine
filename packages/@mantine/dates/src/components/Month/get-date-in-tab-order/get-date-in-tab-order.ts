import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';
import { DayProps } from '../../Day/Day';
import { isAfterMinDate } from '../is-after-min-date/is-after-min-date';
import { isBeforeMaxDate } from '../is-before-max-date/is-before-max-date';
import { isSameMonth } from '../is-same-month/is-same-month';

interface GetDateInTabOrderInput {
  dates: DateStringValue[][];
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  getDayProps: ((date: DateStringValue) => Partial<DayProps>) | undefined;
  excludeDate: ((date: DateStringValue) => boolean) | undefined;
  hideOutsideDates: boolean | undefined;
  month: DateStringValue;
}

export function getDateInTabOrder({
  dates,
  minDate,
  maxDate,
  getDayProps,
  excludeDate,
  hideOutsideDates,
  month,
}: GetDateInTabOrderInput) {
  const enabledDates = dates
    .flat()
    .filter(
      (date) =>
        isBeforeMaxDate(date, maxDate) &&
        isAfterMinDate(date, minDate) &&
        !excludeDate?.(date) &&
        !getDayProps?.(date)?.disabled &&
        (!hideOutsideDates || isSameMonth(date, month))
    );

  const selectedDate = enabledDates.find((date) => getDayProps?.(date)?.selected);

  if (selectedDate) {
    return selectedDate;
  }

  const currentDate = enabledDates.find((date) => dayjs().isSame(date, 'date'));

  if (currentDate) {
    return currentDate;
  }

  return enabledDates[0];
}
