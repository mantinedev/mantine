import { getQuartersData } from './get-quarters-data';

describe('@mantine/dates/get-quarters-data', () => {
  it('returns a single row of quarter start dates for the given year', () => {
    expect(getQuartersData('2026-08-20')).toStrictEqual([
      ['2026-01-01', '2026-04-01', '2026-07-01', '2026-10-01'],
    ]);
  });
});
