import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import quarterOfYear from 'dayjs/plugin/quarterOfYear.js';
import type { DateStringValue } from '../../types';

dayjs.extend(advancedFormat);
dayjs.extend(quarterOfYear);

export function getQuarterStart(date: DateStringValue | Date): DateStringValue {
  return dayjs(date).startOf('quarter').format('YYYY-MM-DD');
}
