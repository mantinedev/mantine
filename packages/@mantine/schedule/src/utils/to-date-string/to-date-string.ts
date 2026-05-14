import dayjs from 'dayjs';
import { AnyDateValue, DateStringValue } from '../../types';

export function toDateString(date: AnyDateValue): DateStringValue {
  return dayjs(date).format('YYYY-MM-DD 00:00:00');
}
