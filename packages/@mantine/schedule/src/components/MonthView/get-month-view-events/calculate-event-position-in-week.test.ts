import dayjs from 'dayjs';
import { calculateEventPositionInWeek } from './calculate-event-position-in-week';

describe('@mantine/schedule/calculate-event-position-in-week', () => {
  const weekStart = dayjs('2025-01-13');
  const weekEnd = dayjs('2025-01-19');

  it('calculates position for single-day event', () => {
    const eventStart = dayjs('2025-01-15 10:00:00');
    const eventEnd = dayjs('2025-01-15 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: false,
    });

    expect(result.startDayIndex).toBe(2);
    expect(result.daysSpanned).toBe(1);
    expect(result.startOffset).toBeCloseTo((2 / 7) * 100, 2);
    expect(result.width).toBeCloseTo((1 / 7) * 100, 2);
    expect(result.hanging).toBe('none');
  });

  it('calculates position for multi-day event within week', () => {
    const eventStart = dayjs('2025-01-14 10:00:00');
    const eventEnd = dayjs('2025-01-16 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.startDayIndex).toBe(1);
    expect(result.daysSpanned).toBe(3);
    expect(result.startOffset).toBeCloseTo((1 / 7) * 100, 2);
    expect(result.width).toBeCloseTo((3 / 7) * 100, 2);
    expect(result.hanging).toBe('none');
  });

  it('marks event as hanging from start when it starts before week', () => {
    const eventStart = dayjs('2025-01-10 10:00:00');
    const eventEnd = dayjs('2025-01-15 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.hanging).toBe('start');
    expect(result.startDayIndex).toBe(0);
  });

  it('marks event as hanging from end when it ends after week', () => {
    const eventStart = dayjs('2025-01-15 10:00:00');
    const eventEnd = dayjs('2025-01-22 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.hanging).toBe('end');
  });

  it('marks event as hanging from both when it starts before and ends after week', () => {
    const eventStart = dayjs('2025-01-10 10:00:00');
    const eventEnd = dayjs('2025-01-22 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.hanging).toBe('both');
    expect(result.startDayIndex).toBe(0);
    expect(result.width).toBe(100);
  });

  it('clamps event to week boundaries when hanging from start', () => {
    const eventStart = dayjs('2025-01-10 10:00:00');
    const eventEnd = dayjs('2025-01-15 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.startDayIndex).toBe(0);
    expect(result.startOffset).toBe(0);
  });

  it('clamps event to week boundaries when hanging from end', () => {
    const eventStart = dayjs('2025-01-15 10:00:00');
    const eventEnd = dayjs('2025-01-22 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.daysSpanned).toBeLessThanOrEqual(7);
  });

  it('handles event starting on first day of week', () => {
    const eventStart = dayjs('2025-01-13 10:00:00');
    const eventEnd = dayjs('2025-01-15 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.startDayIndex).toBe(0);
    expect(result.startOffset).toBe(0);
    expect(result.hanging).toBe('none');
  });

  it('handles event ending on last day of week', () => {
    const eventStart = dayjs('2025-01-17 10:00:00');
    const eventEnd = dayjs('2025-01-19 00:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: true,
    });

    expect(result.hanging).toBe('none');
  });

  it('calculates width as at least 1 day for single-day events', () => {
    const eventStart = dayjs('2025-01-15 10:00:00');
    const eventEnd = dayjs('2025-01-15 12:00:00');

    const result = calculateEventPositionInWeek({
      eventStart,
      eventEnd,
      weekStart,
      weekEnd,
      isMultiday: false,
    });

    expect(result.daysSpanned).toBe(1);
    expect(result.width).toBeGreaterThan(0);
  });
});
