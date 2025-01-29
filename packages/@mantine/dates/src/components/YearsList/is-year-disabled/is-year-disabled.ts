import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface IsYearDisabledInput {
  year: DateStringValue;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
}

export function isYearDisabled({ year, minDate, maxDate }: IsYearDisabledInput): boolean {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(year).isBefore(minDate, 'year')) {
    return true;
  }

  if (maxDate && dayjs(year).isAfter(maxDate, 'year')) {
    return true;
  }

  return false;
}
