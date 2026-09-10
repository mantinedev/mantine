import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';
import { getQuarterStart, toDateString } from '../../../utils';

export function normalizeQuarterValue(
  value: DateStringValue | Date | null | undefined
): DateStringValue | null | undefined;
export function normalizeQuarterValue(
  value: (DateStringValue | Date | null)[]
): (DateStringValue | null)[];
export function normalizeQuarterValue(
  value: DateStringValue | Date | null | undefined | (DateStringValue | Date | null)[]
): DateStringValue | null | undefined | (DateStringValue | null)[] {
  if (value === undefined || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeQuarterValue(item) as DateStringValue | null);
  }

  const str = toDateString(value);
  if (!str || !dayjs(str).isValid()) {
    return null;
  }

  return getQuarterStart(str);
}
