import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';
import { getQuarterStart } from '../../../utils';

interface IsQuarterDisabledInput {
  quarter: DateStringValue;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
}

export function isQuarterDisabled({ quarter, minDate, maxDate }: IsQuarterDisabledInput): boolean {
  if (!minDate && !maxDate) {
    return false;
  }

  if (minDate && dayjs(quarter).isBefore(getQuarterStart(minDate), 'day')) {
    return true;
  }

  if (maxDate && dayjs(quarter).isAfter(getQuarterStart(maxDate), 'day')) {
    return true;
  }

  return false;
}
