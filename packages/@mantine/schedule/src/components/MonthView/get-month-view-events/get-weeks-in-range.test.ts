import dayjs from 'dayjs';
import { getWeeksInRange } from './get-weeks-in-range';

describe('@mantine/schedule/get-weeks-in-range', () => {
  it('returns weeks for a given range with Monday as first day', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-31');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    expect(result.weeks).toHaveLength(5);
    expect(result.weeks[0]).toHaveLength(7);
    expect(result.weeks[0][0]).toBe('2024-12-30 00:00:00');
    expect(result.weeks[4][6]).toBe('2025-02-02 00:00:00');
    expect(Object.keys(result.groupedByDay)).toHaveLength(35);
  });

  it('returns weeks for a given range with Sunday as first day', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-31');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 0,
    });

    expect(result.weeks).toHaveLength(5);
    expect(result.weeks[0]).toHaveLength(7);
    expect(result.weeks[0][0]).toBe('2024-12-29 00:00:00');
    expect(result.weeks[4][6]).toBe('2025-02-01 00:00:00');
  });

  it('initializes groupedByDay with empty arrays for all dates', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-07');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    expect(Object.keys(result.groupedByDay)).toHaveLength(14);
    Object.values(result.groupedByDay).forEach((dayEvents) => {
      expect(Array.isArray(dayEvents)).toBe(true);
      expect(dayEvents.length).toBe(0);
    });
  });

  it('includes padding days before range start', () => {
    const rangeStart = dayjs('2025-01-15');
    const rangeEnd = dayjs('2025-01-20');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    expect(result.weeks[0][0]).toBe('2025-01-13 00:00:00');
  });

  it('includes padding days after range end', () => {
    const rangeStart = dayjs('2025-01-15');
    const rangeEnd = dayjs('2025-01-20');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    expect(result.weeks[result.weeks.length - 1][6]).toBe('2025-01-26 00:00:00');
  });

  it('formats dates as YYYY-MM-DD 00:00:00', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-07');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    result.weeks.forEach((week) => {
      week.forEach((dateStr) => {
        expect(dateStr).toMatch(/^\d{4}-\d{2}-\d{2} 00:00:00$/);
      });
    });
  });

  it('creates consecutive weeks', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-31');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    for (let i = 1; i < result.weeks.length; i++) {
      const prevWeekLastDay = dayjs(result.weeks[i - 1][6]);
      const currWeekFirstDay = dayjs(result.weeks[i][0]);
      expect(currWeekFirstDay.diff(prevWeekLastDay, 'day')).toBe(1);
    }
  });
});
