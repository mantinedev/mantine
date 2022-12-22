import { getDecadeRange } from './get-decade-range';

const TEST_RANGE = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

describe('@mantine/dates/YearPicker/get-decade-range', () => {
  it('returns correct decade range for year that ends with 0', () => {
    expect(getDecadeRange(2020)).toStrictEqual(TEST_RANGE);
  });

  it('returns correct decade range for year that does not end with 0', () => {
    expect(getDecadeRange(2022)).toStrictEqual(TEST_RANGE);
    expect(getDecadeRange(2025)).toStrictEqual(TEST_RANGE);
    expect(getDecadeRange(2027)).toStrictEqual(TEST_RANGE);
    expect(getDecadeRange(2029)).toStrictEqual(TEST_RANGE);
  });
});
