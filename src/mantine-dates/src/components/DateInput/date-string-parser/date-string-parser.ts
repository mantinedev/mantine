import { shiftTimezone } from '../../../utils';

export function dateStringParser(dateString: string | null, timezone?: string) {
  if (dateString === null) {
    return null;
  }

  const date = shiftTimezone('add', new Date(dateString), timezone);

  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }

  return date;
}
