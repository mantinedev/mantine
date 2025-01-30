import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

interface GetMinTimeInput {
  minDate: DateStringValue | Date | undefined;
  value: DateStringValue | null;
}

export function getMinTime({ minDate, value }: GetMinTimeInput): string | undefined {
  const minTime = minDate ? dayjs(minDate).format('HH:mm:ss') : null;
  return value && minDate && value === minDate
    ? minTime != null
      ? minTime
      : undefined
    : undefined;
}

interface GetMaxTimeInput {
  maxDate: DateStringValue | Date | undefined;
  value: DateStringValue | null;
}

export function getMaxTime({ maxDate, value }: GetMaxTimeInput): string | undefined {
  const maxTime = maxDate ? dayjs(maxDate).format('HH:mm:ss') : null;
  return value && maxDate && value === maxDate
    ? maxTime != null
      ? maxTime
      : undefined
    : undefined;
}
