import dayjs from 'dayjs';
import { calculateAllDayEventWidth } from './calculate-all-day-event-width';

describe('@mantine/schedule/calculate-all-day-event-width', () => {
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
  const weekEndDate = dayjs('2025-01-19');

  it('returns width based on row count for single-day events', () => {
    const eventStartDate = dayjs('2025-01-15').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: false,
      rowCount: 3,
    });

    expect(result).toBeCloseTo(100 / 3, 2);
  });

  it('calculates width for multi-day events based on days spanned', () => {
    const eventStartDate = dayjs('2025-01-13').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: true,
      rowCount: 1,
    });

    const expected = (3 / 7) * 100;
    expect(result).toBeCloseTo(expected, 2);
  });

  it('adjusts width when event starts before week', () => {
    const eventStartDate = dayjs('2025-01-10').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: true,
      rowCount: 1,
    });

    const expected = (3 / 7) * 100;
    expect(result).toBeCloseTo(expected, 2);
  });

  it('adjusts width when event ends after week', () => {
    const eventStartDate = dayjs('2025-01-17').startOf('day');
    const actualEndDate = dayjs('2025-01-25').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: true,
      rowCount: 1,
    });

    const expected = (3 / 7) * 100;
    expect(result).toBeCloseTo(expected, 2);
  });

  it('returns 100% width when event spans entire week', () => {
    const eventStartDate = dayjs('2025-01-10').startOf('day');
    const actualEndDate = dayjs('2025-01-25').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: true,
      rowCount: 1,
    });

    expect(result).toBe(100);
  });

  it('handles single-day events with multiple rows', () => {
    const eventStartDate = dayjs('2025-01-15').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
      isMultiday: false,
      rowCount: 5,
    });

    expect(result).toBe(20);
  });
});
