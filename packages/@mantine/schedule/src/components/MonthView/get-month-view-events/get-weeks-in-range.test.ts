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

    expect(result.weeks.length).toBeGreaterThan(0);
    expect(result.weeks[0].length).toBe(7);
    expect(Object.keys(result.groupedByDay).length).toBeGreaterThan(0);
  });

  it('returns weeks for a given range with Sunday as first day', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-31');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 0,
    });

    expect(result.weeks.length).toBeGreaterThan(0);
    expect(result.weeks[0].length).toBe(7);
  });

  it('initializes groupedByDay with empty arrays for all dates', () => {
    const rangeStart = dayjs('2025-01-01');
    const rangeEnd = dayjs('2025-01-07');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

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

    const firstWeekStart = dayjs(result.weeks[0][0]);
    expect(firstWeekStart.isBefore(rangeStart) || firstWeekStart.isSame(rangeStart)).toBe(true);
  });

  it('includes padding days after range end', () => {
    const rangeStart = dayjs('2025-01-15');
    const rangeEnd = dayjs('2025-01-20');

    const result = getWeeksInRange({
      rangeStart,
      rangeEnd,
      firstDayOfWeek: 1,
    });

    const lastWeek = result.weeks[result.weeks.length - 1];
    const lastWeekEnd = dayjs(lastWeek[6]);
    expect(lastWeekEnd.isAfter(rangeEnd) || lastWeekEnd.isSame(rangeEnd)).toBe(true);
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
