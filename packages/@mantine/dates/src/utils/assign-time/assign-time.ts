import dayjs from 'dayjs';
import { DateStringValue } from '../../types';

export function assignTime(
  dateValue: DateStringValue | null, // Date to assign time to
  timeString: string // HH:mm:ss format
): DateStringValue | null {
  let date = dateValue ? dayjs(dateValue) : dayjs();

  if (timeString === '') {
    return date.format('YYYY-MM-DD HH:mm:ss');
  }

  const [hours, minutes, seconds = 0] = timeString.split(':').map(Number);

  date = date.set('hour', hours);
  date = date.set('minute', minutes);
  date = date.set('second', seconds);
  date = date.set('millisecond', 0);

  return date.format('YYYY-MM-DD HH:mm:ss');
}
