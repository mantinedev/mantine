import { clampDate } from './clamp-date';

describe('@mantine/dates/clamp-date', () => {
  it('returns date if min and max dates are not set', () => {
    const date = '2021-01-01 00:00:00';
    expect(clampDate(undefined, undefined, date)).toBe(date);
  });

  it('returns min date if date is before min date', () => {
    const minDate = '2021-01-01 00:00:00';
    const date = '2020-01-01 00:00:00';
    expect(clampDate(minDate, undefined, date)).toBe(minDate);
  });

  it('returns max date if date is after max date', () => {
    const maxDate = '2021-01-01 00:00:00';
    const date = '2022-01-01 00:00:00';
    expect(clampDate(undefined, maxDate, date)).toBe(maxDate);
  });

  it('returns date if it is within the min and max range', () => {
    const minDate = '2021-01-01 00:00:00';
    const maxDate = '2022-01-01 00:00:00';
    const date = '2021-06-01 00:00:00';
    expect(clampDate(minDate, maxDate, date)).toBe(date);
  });

  it('returns min date if date is exactly the min date', () => {
    const minDate = '2021-01-01 00:00:00';
    expect(clampDate(minDate, undefined, minDate)).toBe(minDate);
  });

  it('returns max date if date is exactly the max date', () => {
    const maxDate = '2021-01-01 00:00:00';
    expect(clampDate(undefined, maxDate, maxDate)).toBe(maxDate);
  });

  it('returns min date if date is before min date and max date is set', () => {
    const minDate = '2021-01-01 00:00:00';
    const maxDate = '2022-01-01 00:00:00';
    const date = '2020-01-01 00:00:00';
    expect(clampDate(minDate, maxDate, date)).toBe(minDate);
  });

  it('returns max date if date is after max date and min date is set', () => {
    const minDate = '2021-01-01 00:00:00';
    const maxDate = '2022-01-01 00:00:00';
    const date = '2023-01-01 00:00:00';
    expect(clampDate(minDate, maxDate, date)).toBe(maxDate);
  });
});
