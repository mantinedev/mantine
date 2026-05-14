import { getYearsList } from './get-years-list';

describe('@mantine/schedule/get-years-list', () => {
  it('returns all years between startYear and endYear inclusive', () => {
    const years = getYearsList({ startYear: 2020, endYear: 2025 });
    expect(years).toStrictEqual([2020, 2021, 2022, 2023, 2024, 2025]);
  });
});
