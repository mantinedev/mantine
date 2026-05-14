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

  it('returns width based on days spanned for single-day events', () => {
    const eventStartDate = dayjs('2025-01-15').startOf('day');
    const actualEndDate = dayjs('2025-01-15').startOf('day');

    const result = calculateAllDayEventWidth({
      eventStartDate,
      actualEndDate,
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
    });

    expect(result).toBeCloseTo((1 / 7) * 100, 2);
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
    });

    expect(result).toBe(100);
  });

  it('calculates correct width for consecutive single-day all-day events', () => {
    const event1Width = calculateAllDayEventWidth({
      eventStartDate: dayjs('2025-01-13').startOf('day'),
      actualEndDate: dayjs('2025-01-13').startOf('day'),
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
    });

    const event2Width = calculateAllDayEventWidth({
      eventStartDate: dayjs('2025-01-14').startOf('day'),
      actualEndDate: dayjs('2025-01-14').startOf('day'),
      weekStartDate,
      weekEndDate,
      weekDays,
      visibleDaysCount,
    });

    expect(event1Width).toBeCloseTo((1 / 7) * 100, 2);
    expect(event2Width).toBeCloseTo((1 / 7) * 100, 2);
  });
});
