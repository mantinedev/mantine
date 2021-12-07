import { getDecadeRange } from './get-decade-range';

const TEST_RANGE = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

describe('@mantine/dates/YearPicker/get-decade-range', () => {
  it('returns correct decade range for year that ends with 0', () => {
    expect(getDecadeRange(2020)).toEqual(TEST_RANGE);
  });

  it('returns correct decade range for year that does not end with 0', () => {
    expect(getDecadeRange(2022)).toEqual(TEST_RANGE);
    expect(getDecadeRange(2025)).toEqual(TEST_RANGE);
    expect(getDecadeRange(2027)).toEqual(TEST_RANGE);
    expect(getDecadeRange(2029)).toEqual(TEST_RANGE);
  });

  it('handles min boundary', () => {
    expect(getDecadeRange(2020, { min: 2025 })).toEqual([2025, 2026, 2027, 2028, 2029, 2030]);
  });

  it('handles max boundary', () => {
    expect(getDecadeRange(2020, { max: 2025 })).toEqual([2019, 2020, 2021, 2022, 2023, 2024, 2025]);
  });

  it('handles min and max boundaries together', () => {
    expect(getDecadeRange(2020, { min: 2026, max: 2028 })).toEqual([2026, 2027, 2028]);
  });
});
