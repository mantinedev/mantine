import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function isAfterMinDate(date: DateStringValue, minDate: DateStringValue | undefined) {
  return minDate ? dayjs(date).isAfter(dayjs(minDate).subtract(1, 'day'), 'day') : true;
}
