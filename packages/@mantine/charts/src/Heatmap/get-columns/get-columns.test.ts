import { getDatesRange } from '../get-dates-range/get-dates-range';
import { getColumns, getFirstMonthColumnIndex } from './get-columns';

describe('@mantine/charts/get-columns', () => {
  it('returns one column per week when splitMonths is false', () => {
    const weeks = getDatesRange({ startDate: '2025-01-27', endDate: '2025-03-02' });
    const columns = getColumns(weeks, false);

    // 5 weeks in the range
    expect(columns).toHaveLength(5);
    expect(columns.map((c: any) => c.type)).toEqual([
      'column',
      'column',
      'column',
      'column',
      'column',
    ]);

    // First week starts in January, following weeks are in February
    expect((columns[0] as any).month).toBe(0); // Jan
    expect((columns[1] as any).month).toBe(1); // Feb
    expect((columns[2] as any).month).toBe(1);
    expect((columns[3] as any).month).toBe(1);
    expect((columns[4] as any).month).toBe(1);
  });

  it('splits weeks at month boundary and inserts spacers when splitMonths is true', () => {
    const weeks = getDatesRange({ startDate: '2025-01-27', endDate: '2025-03-02' });
    const columns = getColumns(weeks, true);

    // Expected sequence:
    // [Jan column], spacer, [Feb column x5], spacer, [Mar column]
    expect(columns.map((c: any) => c.type)).toEqual([
      'column',
      'spacer',
      'column',
      'column',
      'column',
      'column',
      'column',
      'spacer',
      'column',
    ]);

    expect((columns[0] as any).month).toBe(0); // Jan
    expect((columns[2] as any).month).toBe(1); // Feb
    expect((columns[3] as any).month).toBe(1);
    expect((columns[4] as any).month).toBe(1);
    expect((columns[5] as any).month).toBe(1);
    expect((columns[6] as any).month).toBe(1);
    expect((columns[8] as any).month).toBe(2); // Mar
  });

  it('returns first column index for a given month', () => {
    const weeks = getDatesRange({ startDate: '2025-01-27', endDate: '2025-03-02' });
    const columns = getColumns(weeks, true);

    expect(getFirstMonthColumnIndex(columns as any, 0)).toBe(0); // Jan
    expect(getFirstMonthColumnIndex(columns as any, 1)).toBe(2); // Feb
    expect(getFirstMonthColumnIndex(columns as any, 2)).toBe(8); // Mar
  });
});
