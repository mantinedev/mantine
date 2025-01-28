import { isYearDisabled } from './is-year-disabled';

describe('@mantine/dates/is-year-disabled', () => {
  it('detects that date is disabled if it is before minDate', () => {
    expect(isYearDisabled('2022-02-03', '2023-03-03', null)).toBe(true);
    expect(isYearDisabled('2022-02-03', '2022-02-03', null)).toBe(false);
    expect(isYearDisabled('2022-02-03', '2021-03-03', null)).toBe(false);
  });

  it('detects that date is disabled if it is after maxDate', () => {
    expect(isYearDisabled('2022-02-03', null, '2021-03-03')).toBe(true);
    expect(isYearDisabled('2022-02-03', null, '2022-02-02')).toBe(false);
    expect(isYearDisabled('2022-02-03', null, '2024-02-02')).toBe(false);
  });

  it('correctly detects valid dates within minDate and maxDate boundaries', () => {
    expect(isYearDisabled('2022-02-03', '2020-02-03', '2023-03-03')).toBe(false);
    expect(isYearDisabled('2019-02-03', '2020-02-03', '2023-03-03')).toBe(true);
    expect(isYearDisabled('2024-02-03', '2020-02-03', '2023-03-03')).toBe(true);
  });
});
