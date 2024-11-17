import { clampDate } from './clamp-date';

describe('@mantine/dates/clamp-date', () => {
  it('returns date if min and max dates are not set', () => {
    const date = new Date(2021, 0, 1);
    expect(clampDate(undefined, undefined, date)).toBe(date);
  });

  it('returns min date if date is before min date', () => {
    const minDate = new Date(2021, 0, 1);
    const date = new Date(2020, 0, 1);
    expect(clampDate(minDate, undefined, date)).toBe(minDate);
  });

  it('returns max date if date is after max date', () => {
    const maxDate = new Date(2021, 0, 1);
    const date = new Date(2022, 0, 1);
    expect(clampDate(undefined, maxDate, date)).toBe(maxDate);
  });
});
