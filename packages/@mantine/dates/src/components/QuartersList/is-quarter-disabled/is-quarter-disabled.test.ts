import { isQuarterDisabled } from './is-quarter-disabled';

describe('@mantine/dates/is-quarter-disabled', () => {
  it('returns false when minDate and maxDate are not set', () => {
    expect(
      isQuarterDisabled({ quarter: '2026-04-01', minDate: undefined, maxDate: undefined })
    ).toBe(false);
  });

  it('disables quarters that end before minDate', () => {
    expect(
      isQuarterDisabled({ quarter: '2026-01-01', minDate: '2026-05-10', maxDate: undefined })
    ).toBe(true);
    expect(
      isQuarterDisabled({ quarter: '2026-04-01', minDate: '2026-05-10', maxDate: undefined })
    ).toBe(false);
    expect(
      isQuarterDisabled({ quarter: '2026-07-01', minDate: '2026-05-10', maxDate: undefined })
    ).toBe(false);
  });

  it('disables quarters that start after maxDate', () => {
    expect(
      isQuarterDisabled({ quarter: '2026-04-01', minDate: undefined, maxDate: '2026-05-10' })
    ).toBe(false);
    expect(
      isQuarterDisabled({ quarter: '2026-07-01', minDate: undefined, maxDate: '2026-05-10' })
    ).toBe(true);
  });
});
