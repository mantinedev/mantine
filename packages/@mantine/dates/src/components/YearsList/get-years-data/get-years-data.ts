import dayjs from 'dayjs';
import { DateStringValue } from '../../../types';

export function getYearsData(decade: DateStringValue) {
  const year = dayjs(decade).year();

  const rounded = year - (year % 10);

  let currentYearIndex = 0;
  const results: DateStringValue[][] = [[], [], [], []];

  for (let i = 0; i < 4; i += 1) {
    const max = i === 3 ? 1 : 3;
    for (let j = 0; j < max; j += 1) {
      results[i].push(dayjs(new Date(rounded + currentYearIndex, 0)).format('YYYY-MM-DD'));
      currentYearIndex += 1;
    }
  }

  return results;
}
