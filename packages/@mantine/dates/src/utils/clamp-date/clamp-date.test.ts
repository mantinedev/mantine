import { clampDate } from './clamp-date';

describe('@mantine/dates/clamp-date', () => {
  it('returns date if min and max dates are not set', () => {
    const date = '2021-01-01';
    expect(clampDate(undefined, undefined, date)).toBe(date);
  });

  it('returns min date if date is before min date', () => {
    const minDate = '2021-01-01';
    const date = '2020-01-01';
    expect(clampDate(minDate, undefined, date)).toBe(minDate);
  });

  it('returns max date if date is after max date', () => {
    const maxDate = '2021-01-01';
    const date = '2022-01-01';
    expect(clampDate(undefined, maxDate, date)).toBe(maxDate);
  });
});
