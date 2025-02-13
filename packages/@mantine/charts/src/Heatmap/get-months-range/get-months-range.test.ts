import { getDatesRange } from '../get-dates-range/get-dates-range';
import { getMonthsRange } from './get-months-range';

describe('@mantine/charts/get-months-range', () => {
  it('returns correct months range for the given gates range', () => {
    expect(
      getMonthsRange(getDatesRange({ startDate: '2025-01-22', endDate: '2025-03-31' }))
    ).toStrictEqual([
      { month: 0, position: 0, size: 2 },
      { month: 1, position: 2, size: 4 },
      { month: 2, position: 6, size: 5 },
    ]);
  });
});
