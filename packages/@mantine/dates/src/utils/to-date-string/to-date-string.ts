import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue } from '../../types';

export function toDateString(value: string | number | Date | Dayjs): DateStringValue {
  return dayjs(value).format('YYYY-MM-DD');
}

export function toDateTimeString(value: string | number | Date | Dayjs): DateStringValue {
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
}
