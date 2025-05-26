import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue, DateTimeStringValue } from '../../types';

export function toDateString(value: string | number | Date | Dayjs): DateStringValue;
export function toDateString(value: undefined): undefined;
export function toDateString(value: null): null;
export function toDateString(
  value: string | number | Date | Dayjs | undefined | null
): DateStringValue | undefined | null {
  return value == null || value === '' ? value : dayjs(value).format('YYYY-MM-DD');
}

export function toDateTimeString(value: string | number | Date | Dayjs): DateTimeStringValue;
export function toDateTimeString(value: undefined): undefined;
export function toDateTimeString(value: null): null;
export function toDateTimeString(
  value: string | number | Date | Dayjs | undefined | null
): DateTimeStringValue | undefined | null {
  return value == null || value === '' ? value : dayjs(value).format('YYYY-MM-DD HH:mm:ss');
}
