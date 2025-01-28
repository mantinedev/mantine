import { isMonthDisabled } from './is-month-disabled';

describe('@mantine/dates/is-month-disabled', () => {
  it('detects that date is disabled if it is before minDate', () => {
    expect(isMonthDisabled('2022-02-03', '2023-03-03', null)).toBe(true);
    expect(isMonthDisabled('2022-02-03', '2022-02-03', null)).toBe(false);
    expect(isMonthDisabled('2022-02-03', '2021-03-03', null)).toBe(false);
  });

  it('detects that date is disabled if it is after maxDate', () => {
    expect(isMonthDisabled('2022-02-03', null, '2021-03-03')).toBe(true);
    expect(isMonthDisabled('2022-02-03', null, '2022-02-02')).toBe(false);
    expect(isMonthDisabled('2022-02-03', null, '2024-02-02')).toBe(false);
  });

  it('correctly detects valid dates within minDate and maxDate boundaries', () => {
    expect(isMonthDisabled('2022-02-03', '2020-02-03', '2023-03-03')).toBe(false);
    expect(isMonthDisabled('2019-02-03', '2020-02-03', '2023-03-03')).toBe(true);
    expect(isMonthDisabled('2024-02-03', '2020-02-03', '2023-03-03')).toBe(true);
  });
});
