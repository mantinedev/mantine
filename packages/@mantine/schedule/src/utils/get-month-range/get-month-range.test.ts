import { getMonthRange } from './get-month-range';

describe('@mantine/schedule/get-month-range', () => {
  it('returns start and end of month when withOutsideDays: false', () => {
    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: false,
        consistentWeeks: false,
        firstDayOfWeek: 1,
      })
    ).toStrictEqual({ start: '2024-02-01 00:00:00', end: '2024-02-29 00:00:00' });
  });

  it('returns correct start and end dates with withOutsideDays: true', () => {
    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: true,
        consistentWeeks: false,
        firstDayOfWeek: 1,
      })
    ).toStrictEqual({ start: '2024-01-29 00:00:00', end: '2024-03-03 00:00:00' });
  });

  it('returns correct end date with consistentWeeks: true', () => {
    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: true,
        consistentWeeks: true,
        firstDayOfWeek: 1,
      })
    ).toStrictEqual({ start: '2024-01-29 00:00:00', end: '2024-03-10 00:00:00' });
  });

  it('ignores consistentWeeks when withOutsideDays: false', () => {
    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: false,
        consistentWeeks: true,
        firstDayOfWeek: 1,
      })
    ).toStrictEqual({ start: '2024-02-01 00:00:00', end: '2024-02-29 00:00:00' });
  });

  it('handles different firstDayOfWeek values', () => {
    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: true,
        consistentWeeks: false,
        firstDayOfWeek: 0,
      })
    ).toStrictEqual({ start: '2024-01-28 00:00:00', end: '2024-03-02 00:00:00' });

    expect(
      getMonthRange({
        month: '2024-02-15',
        withOutsideDays: true,
        consistentWeeks: true,
        firstDayOfWeek: 4,
      })
    ).toStrictEqual({ start: '2024-02-01 00:00:00', end: '2024-03-13 00:00:00' });
  });
});
