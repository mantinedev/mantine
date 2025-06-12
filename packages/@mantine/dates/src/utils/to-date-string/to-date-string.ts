import dayjs, { Dayjs } from 'dayjs';
import { DateStringValue, DateTimeStringValue } from '../../types';

// Helper type to determine the return type based on T and the target main type
type ExactOptionalReturn<T, MainType> = T extends undefined
  ? undefined
  : T extends null
    ? null
    : MainType;

export function toDateString<T extends string | number | Date | Dayjs | undefined | null>(
  value: T
): ExactOptionalReturn<T, DateStringValue> {
  return (
    value == null || value === '' ? value : dayjs(value).format('YYYY-MM-DD')
  ) as ExactOptionalReturn<T, DateStringValue>;
}

export function toDateTimeString<T extends string | number | Date | Dayjs | undefined | null>(
  value: T
): ExactOptionalReturn<T, DateTimeStringValue> {
  return (
    value == null || value === '' ? value : dayjs(value).format('YYYY-MM-DD HH:mm:ss')
  ) as ExactOptionalReturn<T, DateTimeStringValue>;
}
