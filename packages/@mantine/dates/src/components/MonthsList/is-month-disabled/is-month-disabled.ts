import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface IsMonthDisabledInput {
  month: DateStringValue;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
}

export function isMonthDisabled({ month, minDate, maxDate }: IsMonthDisabledInput): boolean {
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
