import { getYearsData } from './get-years-data';

const TEST_RANGE = [
  ['2020-01-01', '2021-01-01', '2022-01-01'],
  ['2023-01-01', '2024-01-01', '2025-01-01'],
  ['2026-01-01', '2027-01-01', '2028-01-01'],
  ['2029-01-01'],
];

describe('@mantine/dates/getYearsData', () => {
  it('returns correct decade range for year that ends with 0', () => {
    expect(getYearsData('2020-01-01')).toStrictEqual(TEST_RANGE);
  });

  it('returns correct decade range for year that does not end with 0', () => {
    expect(getYearsData('2022-01-01')).toStrictEqual(TEST_RANGE);
    expect(getYearsData('2025-01-01')).toStrictEqual(TEST_RANGE);
    expect(getYearsData('2027-01-01')).toStrictEqual(TEST_RANGE);
    expect(getYearsData('2029-01-01')).toStrictEqual(TEST_RANGE);
  });
});
