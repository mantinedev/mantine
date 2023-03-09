import { getMonthsData } from '../get-months-data/get-months-data';
import { getMonthTabIndex } from './get-month-tabindex';

describe('@mantine/dates/get-month-tabindex', () => {
  it('returns 0 when month is first month in year', () => {
    expect(getMonthTabIndex(new Date(2020, 0, 1), getMonthsData(new Date(2020, 0, 1)))).toBe(0);
  });

  it('returns -1 when month is not first month in year', () => {
    expect(getMonthTabIndex(new Date(2020, 1, 1), getMonthsData(new Date(2020, 0, 1)))).toBe(-1);
  });
});
