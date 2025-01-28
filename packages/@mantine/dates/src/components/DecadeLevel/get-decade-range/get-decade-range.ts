import { DateStringValue } from '../../../types';
import { getYearsData } from '../../YearsList/get-years-data/get-years-data';

export function getDecadeRange(decade: DateStringValue) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]] as const;
}
