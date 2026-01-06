import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function dateStringParser(dateString: string | null): DateStringValue | null {
  if (dateString === null) {
    return null;
  }

  // Try to parse with dayjs first with common formats
  const commonFormats = [
    'MMMM D, YYYY',
    'MMM D, YYYY',
    'YYYY-MM-DD',
    'DD/MM/YYYY',
    'MM/DD/YYYY',
    'D/M/YYYY',
    'YYYY/MM/DD',
  ];

  for (const format of commonFormats) {
    const parsed = dayjs(dateString, format, 'en', true); // strict mode
    if (parsed.isValid()) {
      return parsed.format('YYYY-MM-DD');
    }
  }

  // Fallback to native Date constructor if dayjs parsing fails
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }

  return dayjs(date).format('YYYY-MM-DD');
}
