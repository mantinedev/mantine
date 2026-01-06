import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function dateStringParser(dateString: string | null): DateStringValue | null {
  if (dateString === null) {
    return null;
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }

  return dayjs(date).format('YYYY-MM-DD');
}
