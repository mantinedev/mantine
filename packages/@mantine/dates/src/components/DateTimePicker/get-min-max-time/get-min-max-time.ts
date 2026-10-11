import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface GetMinTimeInput {
  minDate: DateStringValue | Date | undefined;
  value: DateStringValue | null;
}

export function getMinTime({ minDate, value }: GetMinTimeInput): string | undefined {
  return value && minDate && dayjs(value).isSame(minDate, 'day')
    ? dayjs(minDate).format('HH:mm:ss')
    : undefined;
}

interface GetMaxTimeInput {
  maxDate: DateStringValue | Date | undefined;
  value: DateStringValue | null;
}

export function getMaxTime({ maxDate, value }: GetMaxTimeInput): string | undefined {
  return value && maxDate && dayjs(value).isSame(maxDate, 'day')
    ? dayjs(maxDate).format('HH:mm:ss')
    : undefined;
}
