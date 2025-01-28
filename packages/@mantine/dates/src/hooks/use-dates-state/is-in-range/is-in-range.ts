import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function isInRange(date: DateStringValue, range: [DateStringValue, DateStringValue]) {
  const _range = [...range].sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1));
  return (
    dayjs(_range[0]).startOf('day').subtract(1, 'ms').isBefore(date) &&
    dayjs(_range[1]).endOf('day').add(1, 'ms').isAfter(date)
  );
}
