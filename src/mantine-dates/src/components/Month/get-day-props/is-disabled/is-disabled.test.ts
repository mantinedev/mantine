import { isDisabled } from './is-disabled';

const date = new Date(2021, 11, 9);

describe('@mantine/dates/is-disabled', () => {
  it('detects that date is disabled it it is before min', () => {
    expect(isDisabled({ date, minDate: new Date(2022, 11, 9) })).toBe(true);
    expect(isDisabled({ date, minDate: new Date(2020, 11, 9) })).toBe(false);
  });

  it('detects that date is disabled it it is after max', () => {
    expect(isDisabled({ date, maxDate: new Date(2020, 11, 9) })).toBe(true);
    expect(isDisabled({ date, maxDate: new Date(2022, 11, 9) })).toBe(false);
  });

  it('detects that date is disabled it excludeDate returns true', () => {
    expect(isDisabled({ date, excludeDate: () => true })).toBe(true);
    expect(isDisabled({ date, excludeDate: () => false })).toBe(false);
  });

  it('detects that date is disabled if outside events are disabled and date is outside', () => {
    expect(isDisabled({ date, outside: true, disableOutsideEvents: true })).toBe(true);
    expect(isDisabled({ date, outside: false, disableOutsideEvents: true })).toBe(false);
    expect(isDisabled({ date, outside: true, disableOutsideEvents: false })).toBe(false);
  });
});
