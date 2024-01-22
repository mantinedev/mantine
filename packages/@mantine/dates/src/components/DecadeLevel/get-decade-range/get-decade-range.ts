import { getYearsData } from '../../YearsList/get-years-data/get-years-data';

export function getDecadeRange(decade: Date) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]] as const;
}
