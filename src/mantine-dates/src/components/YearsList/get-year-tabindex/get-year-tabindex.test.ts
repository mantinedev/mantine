import { getYearsData } from '../get-years-data/get-years-data';
import { getYearTabIndex } from './get-year-tabindex';

describe('@mantine/dates/get-year-tabindex', () => {
  it('returns 0 when year is first year in decade', () => {
    expect(getYearTabIndex(new Date(2020, 0, 1), getYearsData(new Date(2020, 0, 1)))).toBe(0);
  });

  it('returns -1 when year is not first year in decade', () => {
    expect(getYearTabIndex(new Date(2021, 0, 1), getYearsData(new Date(2020, 0, 1)))).toBe(-1);
  });
});
