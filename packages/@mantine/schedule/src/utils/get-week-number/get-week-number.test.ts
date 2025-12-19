import { getWeekNumber } from './get-week-number';

describe('@mantine/schedule/get-week-number', () => {
  it('returns correct week number for single date', () => {
    expect(getWeekNumber('2024-05-01')).toBe(18);
  });

  it('returns correct week number for array of dates', () => {
    expect(
      getWeekNumber([
        '2024-04-29',
        '2024-04-30',
        '2024-05-01',
        '2024-05-02',
        '2024-05-03',
        '2024-05-04',
        '2024-05-05',
      ])
    ).toBe(18);
  });
});
