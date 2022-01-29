import { isWeekend } from './is-weekend';

describe('@mantine/dates/Day/is-weekend', () => {
  it('correctly detects sunday and saturday as weekend', () => {
    expect(isWeekend(new Date(2021, 11, 11))).toBe(true);
    expect(isWeekend(new Date(2021, 11, 12))).toBe(true);
  });

  it('correctly detects all other days to not be a weekend', () => {
    expect(isWeekend(new Date(2021, 11, 6))).toBe(false);
    expect(isWeekend(new Date(2021, 11, 7))).toBe(false);
    expect(isWeekend(new Date(2021, 11, 8))).toBe(false);
    expect(isWeekend(new Date(2021, 11, 9))).toBe(false);
    expect(isWeekend(new Date(2021, 11, 10))).toBe(false);
  });
});
