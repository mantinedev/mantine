import { getDayAutofocus } from './get-day-autofocus';

describe('@mantine/dates/Day/get-day-autofocus', () => {
  it('returns true if day has value and is selected', () => {
    expect(getDayAutofocus({ hasValue: true, selected: true, firstInMonth: true })).toBe(true);
    expect(getDayAutofocus({ hasValue: true, selected: true, firstInMonth: false })).toBe(true);
  });

  it('returns undefined if day has value and is not selected', () => {
    expect(getDayAutofocus({ hasValue: true, selected: false, firstInMonth: true })).toBe(
      undefined
    );
    expect(getDayAutofocus({ hasValue: true, selected: false, firstInMonth: false })).toBe(
      undefined
    );
  });

  it('returns true if day does not have value and is first in month', () => {
    expect(getDayAutofocus({ hasValue: false, selected: true, firstInMonth: true })).toBe(true);
    expect(getDayAutofocus({ hasValue: false, selected: false, firstInMonth: true })).toBe(true);
  });

  it('returns undefined if day does not have value and is not first in month', () => {
    expect(getDayAutofocus({ hasValue: false, selected: true, firstInMonth: false })).toBe(
      undefined
    );
    expect(getDayAutofocus({ hasValue: false, selected: false, firstInMonth: false })).toBe(
      undefined
    );
  });
});
