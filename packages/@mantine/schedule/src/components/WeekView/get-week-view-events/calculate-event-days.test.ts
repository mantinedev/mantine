import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { calculateEventDays } from './calculate-event-days';
import { getEventEndDate } from './get-event-end-date';

describe('@mantine/schedule/calculate-event-days', () => {
  const weekDays = [
    '2025-01-13 00:00:00',
    '2025-01-14 00:00:00',
    '2025-01-15 00:00:00',
    '2025-01-16 00:00:00',
    '2025-01-17 00:00:00',
    '2025-01-18 00:00:00',
    '2025-01-19 00:00:00',
  ];

  it('returns single day for single-day event', () => {
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual(['2025-01-15 00:00:00']);
  });

  it('returns multiple days for multi-day event', () => {
    const event = testUtils.createEvent({
      start: '2025-01-13 10:00:00',
      end: '2025-01-15 16:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual([
      '2025-01-13 00:00:00',
      '2025-01-14 00:00:00',
      '2025-01-15 00:00:00',
    ]);
  });

  it('returns empty array when event is outside the week', () => {
    const event = testUtils.createEvent({
      start: '2025-01-20 10:00:00',
      end: '2025-01-21 16:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual([]);
  });

  it('handles event ending at midnight correctly', () => {
    const event = testUtils.createEvent({
      start: '2025-01-13 10:00:00',
      end: '2025-01-15 00:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual(['2025-01-13 00:00:00', '2025-01-14 00:00:00']);
  });

  it('includes only visible days when event spans beyond week', () => {
    const event = testUtils.createEvent({
      start: '2025-01-10 10:00:00',
      end: '2025-01-25 16:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual(weekDays);
  });

  it('handles event starting before week', () => {
    const event = testUtils.createEvent({
      start: '2025-01-10 10:00:00',
      end: '2025-01-15 16:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual([
      '2025-01-13 00:00:00',
      '2025-01-14 00:00:00',
      '2025-01-15 00:00:00',
    ]);
  });

  it('handles event ending after week', () => {
    const event = testUtils.createEvent({
      start: '2025-01-17 10:00:00',
      end: '2025-01-25 16:00:00',
    });

    const actualEndDate = getEventEndDate(event);
    const result = calculateEventDays({ event, weekDays, actualEndDate });

    expect(result).toEqual(['2025-01-17 00:00:00', '2025-01-18 00:00:00', '2025-01-19 00:00:00']);
  });
});
