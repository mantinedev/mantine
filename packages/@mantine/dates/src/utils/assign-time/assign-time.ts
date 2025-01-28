import dayjs from 'dayjs';
import { DateStringValue } from '../../types';

export function assignTime(
  originalDate: DateStringValue | null | undefined,
  resultDate: DateStringValue | null | undefined
): DateStringValue | null {
  if (!originalDate) {
    return null;
  }

  if (!resultDate) {
    return originalDate;
  }

  const _originalDate = dayjs(originalDate);

  const hours = _originalDate.hour();
  const minutes = _originalDate.minute();
  const seconds = _originalDate.second();

  let result = dayjs(resultDate);
  result = result.set('hours', hours);
  result = result.set('minutes', minutes);
  result = result.set('seconds', seconds);

  return dayjs(result).format('YYYY-MM-DD HH:mm:ss');
}
