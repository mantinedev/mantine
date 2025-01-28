import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function isBeforeMaxDate(date: DateStringValue, maxDate: DateStringValue | undefined) {
  return maxDate ? dayjs(date).isBefore(dayjs(maxDate).add(1, 'day'), 'day') : true;
}
