import { isBeforeMaxDate } from './is-before-max-date';

describe('@mantine/dates/is-before-max-date', () => {
  it('correctly detects dates that are before given maxDate', () => {
    expect(isBeforeMaxDate('2022-04-15', '2022-04-12')).toBe(false);
    expect(isBeforeMaxDate('2022-05-15', '2022-04-12')).toBe(false);
    expect(isBeforeMaxDate('2023-04-15', '2022-04-12')).toBe(false);
  });

  it('correctly detects dates that are after given maxDate', () => {
    expect(isBeforeMaxDate('2022-04-15', '2024-04-17')).toBe(true);
    expect(isBeforeMaxDate('2021-05-15', '2022-04-17')).toBe(true);
    expect(isBeforeMaxDate('2020-04-15', '2022-04-12')).toBe(true);
  });

  it('considers date to be before maxDate if maxDate is not provided', () => {
    expect(isBeforeMaxDate(new Date().toISOString().split('T')[0], undefined)).toBe(true);
  });

  it('considers date that is the same as maxDate to be before maxDate', () => {
    expect(isBeforeMaxDate('2022-04-15', '2022-04-15')).toBe(true);
  });
});
