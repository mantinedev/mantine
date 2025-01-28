import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function isMonthDisabled(
  month: DateStringValue,
  minDate: DateStringValue | null | undefined,
  maxDate: DateStringValue | null | undefined
) {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(month).isBefore(minDate, 'month')) {
    return true;
  }

  if (maxDate && dayjs(month).isAfter(maxDate, 'month')) {
    return true;
  }

  return false;
}
