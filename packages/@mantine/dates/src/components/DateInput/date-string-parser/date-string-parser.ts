import dayjs from 'dayjs';
import { DateStringValue, DateTimeStringValue } from '../../../types';

const CANONICAL_DATE_REGEX = /^\d{4}-\d{2}-\d{2}([ T]([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?)?$/;

export function dateStringParser(
  dateString: string | null,
  withTime = false
): DateStringValue | DateTimeStringValue | null {
  if (!dateString) {
    return null;
  }

  const format = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

  if (CANONICAL_DATE_REGEX.test(dateString)) {
    const date = dayjs(dateString);

    return date.isValid() && date.format('YYYY-MM-DD') === dateString.slice(0, 10)
      ? date.format(format)
      : null;
  }

  const date = new Date(dateString);

  return Number.isNaN(date.getTime()) ? null : dayjs(date).format(format);
}
