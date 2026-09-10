import { getWeekInTabOrder } from './get-week-in-tab-order';

const dates = [
  [
    '2026-03-02',
    '2026-03-03',
    '2026-03-04',
    '2026-03-05',
    '2026-03-06',
    '2026-03-07',
    '2026-03-08',
  ],
  [
    '2026-03-09',
    '2026-03-10',
    '2026-03-11',
    '2026-03-12',
    '2026-03-13',
    '2026-03-14',
    '2026-03-15',
  ],
  [
    '2026-03-16',
    '2026-03-17',
    '2026-03-18',
    '2026-03-19',
    '2026-03-20',
    '2026-03-21',
    '2026-03-22',
  ],
];

describe('@mantine/dates/get-week-in-tab-order', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(2020, 0, 1));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns selected week when there is one', () => {
    expect(
      getWeekInTabOrder({
        dates,
        isDayDisabled: () => false,
        getWeekControlProps: (weekStart) => ({ selected: weekStart === '2026-03-16' }),
      })
    ).toBe(2);
  });

  it('returns first enabled week when nothing is selected', () => {
    expect(
      getWeekInTabOrder({
        dates,
        isDayDisabled: (date) => date < '2026-03-09',
        getWeekControlProps: undefined,
      })
    ).toBe(1);
  });

  it('returns week that contains current date when nothing is selected', () => {
    jest.setSystemTime(new Date(2026, 2, 11));
    expect(
      getWeekInTabOrder({ dates, isDayDisabled: () => false, getWeekControlProps: undefined })
    ).toBe(1);
  });

  it('returns -1 when every week is disabled', () => {
    expect(
      getWeekInTabOrder({ dates, isDayDisabled: () => true, getWeekControlProps: undefined })
    ).toBe(-1);
  });
});
