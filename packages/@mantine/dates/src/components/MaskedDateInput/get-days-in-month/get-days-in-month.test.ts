import { getDaysInMonth } from './get-days-in-month';

describe('@mantine/dates/getDaysInMonth', () => {
  it('returns 31 for January', () => {
    expect(getDaysInMonth(1, 2024)).toBe(31);
  });

  it('returns 28 for February in a non-leap year', () => {
    expect(getDaysInMonth(2, 2023)).toBe(28);
  });

  it('returns 29 for February in a leap year', () => {
    expect(getDaysInMonth(2, 2024)).toBe(29);
  });

  it('returns 30 for April', () => {
    expect(getDaysInMonth(4, 2024)).toBe(30);
  });

  it('returns 31 when month is null', () => {
    expect(getDaysInMonth(null, 2024)).toBe(31);
  });

  it('returns 31 when year is null', () => {
    expect(getDaysInMonth(1, null)).toBe(31);
  });

  it('returns 31 when both month and year are null', () => {
    expect(getDaysInMonth(null, null)).toBe(31);
  });

  it('returns the longest length of the month when year is not complete', () => {
    expect(getDaysInMonth(2, 2)).toBe(29);
    expect(getDaysInMonth(2, 202)).toBe(29);
    expect(getDaysInMonth(4, 20)).toBe(30);
  });
});
