import dayjs from 'dayjs';
import { AnyDateValue } from '../../types';

export function isSameMonth(date: AnyDateValue, comparison: AnyDateValue) {
  return dayjs(date).format('YYYY-MM') === dayjs(comparison).format('YYYY-MM');
}
