import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';
import { getQuarterStart } from '../../../utils';

export function getQuartersData(year: DateStringValue): DateStringValue[][] {
  const startOfYear = dayjs(getQuarterStart(year)).startOf('year');

  return [
    [
      startOfYear.format('YYYY-MM-DD'),
      startOfYear.add(3, 'month').format('YYYY-MM-DD'),
      startOfYear.add(6, 'month').format('YYYY-MM-DD'),
      startOfYear.add(9, 'month').format('YYYY-MM-DD'),
    ],
  ];
}
