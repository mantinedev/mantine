import { getPeriodBounds, isNextDisabled, isPreviousDisabled } from './get-period-bounds';

describe('@mantine/dates/get-period-bounds', () => {
  it('returns month bounds for one column', () => {
    expect(getPeriodBounds({ level: 'month', date: '2022-04-11', columns: 1 })).toStrictEqual({
      start: '2022-04-01',
      end: '2022-04-30',
    });
  });

  it('returns month bounds for three columns', () => {
    expect(getPeriodBounds({ level: 'month', date: '2022-04-11', columns: 3 })).toStrictEqual({
      start: '2022-04-01',
      end: '2022-06-30',
    });
  });

  it('returns year bounds for one and three columns', () => {
    expect(getPeriodBounds({ level: 'year', date: '2022-04-11', columns: 1 })).toStrictEqual({
      start: '2022-01-01',
      end: '2022-12-31',
    });
    expect(getPeriodBounds({ level: 'year', date: '2022-04-11', columns: 3 })).toStrictEqual({
      start: '2022-01-01',
      end: '2024-12-31',
    });
  });

  it('returns decade bounds for one and three columns', () => {
    expect(getPeriodBounds({ level: 'decade', date: '2022-04-11', columns: 1 })).toStrictEqual({
      start: '2020-01-01',
      end: '2029-12-31',
    });
    expect(getPeriodBounds({ level: 'decade', date: '2022-04-11', columns: 3 })).toStrictEqual({
      start: '2020-01-01',
      end: '2049-12-31',
    });
  });

  it('disables previous when minDate is inside or after the first column', () => {
    const bounds = getPeriodBounds({ level: 'month', date: '2022-04-11', columns: 1 });
    expect(isPreviousDisabled(bounds, undefined)).toBe(false);
    expect(isPreviousDisabled(bounds, '2022-03-31')).toBe(false);
    expect(isPreviousDisabled(bounds, '2022-04-01')).toBe(true);
    expect(isPreviousDisabled(bounds, '2022-04-15')).toBe(true);
    expect(isPreviousDisabled(bounds, new Date(2022, 3, 15))).toBe(true);
  });

  it('disables next when maxDate is inside or before the last column', () => {
    const bounds = getPeriodBounds({ level: 'month', date: '2022-04-11', columns: 2 });
    expect(isNextDisabled(bounds, undefined)).toBe(false);
    expect(isNextDisabled(bounds, '2022-06-01')).toBe(false);
    expect(isNextDisabled(bounds, '2022-05-31')).toBe(true);
    expect(isNextDisabled(bounds, '2022-05-15')).toBe(true);
    expect(isNextDisabled(bounds, new Date(2022, 4, 15))).toBe(true);
  });
});
