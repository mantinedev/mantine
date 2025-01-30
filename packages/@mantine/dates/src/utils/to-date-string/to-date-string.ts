import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue } from '../../types';

export function toDateString(
  value: string | number | Date | Dayjs | undefined | null
): DateStringValue | undefined | null {
  return value == null ? value : dayjs(value).format('YYYY-MM-DD');
}

export function toDateTimeString(
  value: string | number | Date | Dayjs | undefined | null
): DateStringValue | undefined | null {
  return value == null ? value : dayjs(value).format('YYYY-MM-DD HH:mm:ss');
}
