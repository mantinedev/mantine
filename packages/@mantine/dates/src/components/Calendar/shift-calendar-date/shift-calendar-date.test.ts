import { shiftCalendarDate } from './shift-calendar-date';

describe('@mantine/dates/shift-calendar-date', () => {
  it('shifts date by months', () => {
    expect(shiftCalendarDate('2022-04-11', 1, 'month', 1)).toBe('2022-05-11');
    expect(shiftCalendarDate('2022-04-11', -1, 'month', 1)).toBe('2022-03-11');
  });

  it('shifts date by years', () => {
    expect(shiftCalendarDate('2022-04-11', 1, 'year', 1)).toBe('2023-04-11');
    expect(shiftCalendarDate('2022-04-11', -1, 'year', 1)).toBe('2021-04-11');
    expect(shiftCalendarDate('2022-04-11', 10, 'year', 1)).toBe('2032-04-11');
    expect(shiftCalendarDate('2022-04-11', -10, 'year', 1)).toBe('2012-04-11');
  });

  it('multiplies the shift by columnsToScroll', () => {
    expect(shiftCalendarDate('2022-04-11', 1, 'month', 3)).toBe('2022-07-11');
    expect(shiftCalendarDate('2022-04-11', -1, 'month', 3)).toBe('2022-01-11');
    expect(shiftCalendarDate('2022-04-11', 1, 'year', 2)).toBe('2024-04-11');
    expect(shiftCalendarDate('2022-04-11', 10, 'year', 2)).toBe('2042-04-11');
  });

  it('crosses year boundaries', () => {
    expect(shiftCalendarDate('2022-12-15', 1, 'month', 1)).toBe('2023-01-15');
    expect(shiftCalendarDate('2022-01-15', -1, 'month', 1)).toBe('2021-12-15');
  });

  it('clamps the day to the last day of the target month', () => {
    expect(shiftCalendarDate('2022-01-31', 1, 'month', 1)).toBe('2022-02-28');
    expect(shiftCalendarDate('2024-01-31', 1, 'month', 1)).toBe('2024-02-29');
    expect(shiftCalendarDate('2024-02-29', 1, 'year', 1)).toBe('2025-02-28');
  });

  it('returns the date unchanged when amount is 0', () => {
    expect(shiftCalendarDate('2022-04-11', 0, 'month', 1)).toBe('2022-04-11');
  });
});
