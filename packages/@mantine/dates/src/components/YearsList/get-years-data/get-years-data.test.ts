import { getYearsData } from './get-years-data';

const TEST_RANGE = [[2020, 2021, 2022], [2023, 2024, 2025], [2026, 2027, 2028], [2029]].map((row) =>
  row.map((year) => new Date(year, 0))
);

describe('@mantine/dates/getYearsData', () => {
  it('returns correct decade range for year that ends with 0', () => {
    expect(getYearsData(new Date(2020, 1))).toStrictEqual(TEST_RANGE);
  });

  it('returns correct decade range for year that does not end with 0', () => {
    expect(getYearsData(new Date(2022, 1))).toStrictEqual(TEST_RANGE);
    expect(getYearsData(new Date(2025, 1))).toStrictEqual(TEST_RANGE);
    expect(getYearsData(new Date(2027, 1))).toStrictEqual(TEST_RANGE);
    expect(getYearsData(new Date(2029, 1))).toStrictEqual(TEST_RANGE);
  });
});
