import { getQuarterInTabOrder } from './get-quarter-in-tab-order';

const quarters = [
  ['2026-01-01', '2026-04-01'],
  ['2026-07-01', '2026-10-01'],
];

describe('@mantine/dates/get-quarter-in-tab-order', () => {
  it('returns selected quarter when there is one', () => {
    expect(
      getQuarterInTabOrder({
        quarters,
        minDate: undefined,
        maxDate: undefined,
        getQuarterControlProps: (date) => ({ selected: date === '2026-07-01' }),
      })
    ).toBe('2026-07-01');
  });

  describe('with fake timers', () => {
    beforeEach(() => {
      jest.useFakeTimers().setSystemTime(new Date(2020, 0, 1));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('returns first enabled quarter when nothing is selected and current quarter is not in the grid', () => {
      expect(
        getQuarterInTabOrder({
          quarters,
          minDate: '2026-05-01',
          maxDate: undefined,
          getQuarterControlProps: undefined,
        })
      ).toBe('2026-04-01');
    });

    it('skips quarters disabled through getQuarterControlProps', () => {
      expect(
        getQuarterInTabOrder({
          quarters,
          minDate: undefined,
          maxDate: undefined,
          getQuarterControlProps: (date) => ({ disabled: date === '2026-01-01' }),
        })
      ).toBe('2026-04-01');
    });
  });
});
