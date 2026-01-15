import dayjs from 'dayjs';
import { calculateAllDayEventOffset } from './calculate-all-day-event-offset';

describe('@mantine/schedule/calculate-all-day-event-offset', () => {
  const weekDays = [
    '2025-01-13 00:00:00',
    '2025-01-14 00:00:00',
    '2025-01-15 00:00:00',
    '2025-01-16 00:00:00',
    '2025-01-17 00:00:00',
    '2025-01-18 00:00:00',
    '2025-01-19 00:00:00',
  ];
  const visibleDaysCount = 7;
  const weekStartDate = dayjs('2025-01-13');

  it('returns 0 offset for event starting on first day of week', () => {
    const eventStartDate = dayjs('2025-01-13').startOf('day');

    const result = calculateAllDayEventOffset({
      eventStartDate,
      weekStartDate,
      weekDays,
      visibleDaysCount,
      hangingStart: false,
    });

    expect(result).toBe(0);
  });

  it('calculates offset for event starting mid-week', () => {
    const eventStartDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventOffset({
      eventStartDate,
      weekStartDate,
      weekDays,
      visibleDaysCount,
      hangingStart: false,
    });

    const expected = (2 / 7) * 100;
    expect(result).toBeCloseTo(expected, 2);
  });

  it('returns 0 offset for hanging start events', () => {
    const eventStartDate = dayjs('2025-01-10').startOf('day');

    const result = calculateAllDayEventOffset({
      eventStartDate,
      weekStartDate,
      weekDays,
      visibleDaysCount,
      hangingStart: true,
    });

    expect(result).toBe(0);
  });

  it('uses first visible day when event start is not visible', () => {
    const weekDaysWithoutWeekend = [
      '2025-01-13 00:00:00',
      '2025-01-14 00:00:00',
      '2025-01-15 00:00:00',
      '2025-01-16 00:00:00',
      '2025-01-17 00:00:00',
    ];
    const eventStartDate = dayjs('2025-01-18').startOf('day');

    const result = calculateAllDayEventOffset({
      eventStartDate,
      weekStartDate,
      weekDays: weekDaysWithoutWeekend,
      visibleDaysCount: 5,
      hangingStart: false,
    });

    expect(result).toBe(0);
  });

  it('calculates offset for last day of week', () => {
    const eventStartDate = dayjs('2025-01-19').startOf('day');

    const result = calculateAllDayEventOffset({
      eventStartDate,
      weekStartDate,
      weekDays,
      visibleDaysCount,
      hangingStart: false,
    });

    const expected = (6 / 7) * 100;
    expect(result).toBeCloseTo(expected, 2);
  });
});
