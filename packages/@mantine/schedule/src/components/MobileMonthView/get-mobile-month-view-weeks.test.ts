import { getMobileMonthViewWeeks } from './get-mobile-month-view-weeks';

const weekStarts = (weeks: string[][]) => weeks.map((week) => week[0].slice(0, 10));

describe('@mantine/schedule/get-mobile-month-view-weeks', () => {
  it('matches getMonthDays output when weekend days are visible', () => {
    const weeks = getMobileMonthViewWeeks({
      month: '2025-11-01',
      firstDayOfWeek: 1,
      consistentWeeks: true,
      withOutsideDays: false,
      weekendDays: [0, 6],
      withWeekendDays: true,
    });

    expect(weekStarts(weeks)).toStrictEqual([
      '2025-10-27',
      '2025-11-03',
      '2025-11-10',
      '2025-11-17',
      '2025-11-24',
      '2025-12-01',
    ]);
  });

  it('drops weeks without rendered days and pads to 6 weeks when consistentWeeks is set', () => {
    // Nov 1 and 2, 2025 are Saturday and Sunday – the first week has no visible days
    const weeks = getMobileMonthViewWeeks({
      month: '2025-11-01',
      firstDayOfWeek: 1,
      consistentWeeks: true,
      withOutsideDays: false,
      weekendDays: [0, 6],
      withWeekendDays: false,
    });

    expect(weekStarts(weeks)).toStrictEqual([
      '2025-11-03',
      '2025-11-10',
      '2025-11-17',
      '2025-11-24',
      '2025-12-01',
      '2025-12-08',
    ]);
  });

  it('drops weeks without rendered days and does not pad when consistentWeeks is not set', () => {
    const weeks = getMobileMonthViewWeeks({
      month: '2025-11-01',
      firstDayOfWeek: 1,
      consistentWeeks: false,
      withOutsideDays: false,
      weekendDays: [0, 6],
      withWeekendDays: false,
    });

    expect(weekStarts(weeks)).toStrictEqual([
      '2025-11-03',
      '2025-11-10',
      '2025-11-17',
      '2025-11-24',
    ]);
  });

  it('keeps weeks whose only days in the month are outside days when withOutsideDays is set', () => {
    const weeks = getMobileMonthViewWeeks({
      month: '2025-11-01',
      firstDayOfWeek: 1,
      consistentWeeks: false,
      withOutsideDays: true,
      weekendDays: [0, 6],
      withWeekendDays: false,
    });

    expect(weekStarts(weeks)).toStrictEqual([
      '2025-10-27',
      '2025-11-03',
      '2025-11-10',
      '2025-11-17',
      '2025-11-24',
    ]);
  });

  it('respects custom weekendDays', () => {
    // Nov 30, 2025 is a Sunday; with weekendDays [1, 2] the last week keeps Nov 30 visible
    const weeks = getMobileMonthViewWeeks({
      month: '2025-11-01',
      firstDayOfWeek: 1,
      consistentWeeks: false,
      withOutsideDays: false,
      weekendDays: [1, 2],
      withWeekendDays: false,
    });

    expect(weekStarts(weeks)).toStrictEqual([
      '2025-10-27',
      '2025-11-03',
      '2025-11-10',
      '2025-11-17',
      '2025-11-24',
    ]);
  });
});
