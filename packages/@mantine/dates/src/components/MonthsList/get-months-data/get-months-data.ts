import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function getMonthsData(year: DateStringValue) {
  const startOfYear = dayjs(year).startOf('year').toDate();

  const results: DateStringValue[][] = [[], [], [], []];
  let currentMonthIndex = 0;

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push(dayjs(startOfYear).add(currentMonthIndex, 'months').format('YYYY-MM-DD'));
      currentMonthIndex += 1;
    }
  }

  return results;
}
