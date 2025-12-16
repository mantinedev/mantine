import { ScheduleEventData } from '../../../types';
import { filterYearViewEvents } from './use-year-view-events';

const testYear = '2025';

const createEvent = (id: string | number, start: string, end: string): ScheduleEventData => ({
  id,
  title: `Event ${id}`,
  start,
  end,
  color: 'blue',
  payload: {},
});

describe('@mantine/schedule/use-year-view-events', () => {
  it('returns empty object when events is undefined', () => {
    const result = filterYearViewEvents({
      date: testYear,
      events: undefined,
    });
    expect(result).toEqual({});
  });

  it('groups events by date within the same year', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-01-15 10:00:00`, `${testYear}-01-15 11:00:00`),
      createEvent(2, `${testYear}-03-20 14:00:00`, `${testYear}-03-20 15:00:00`),
      createEvent(3, `${testYear}-12-25 09:00:00`, `${testYear}-12-25 10:00:00`),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    expect(result['2025-01-15']).toHaveLength(1);
    expect(result['2025-03-20']).toHaveLength(1);
    expect(result['2025-12-25']).toHaveLength(1);
    expect(result['2025-01-15'][0].id).toBe(1);
  });

  it('handles multi-day events spanning multiple dates', () => {
    const events: ScheduleEventData[] = [createEvent(1, `${testYear}-01-15`, `${testYear}-01-18`)];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    expect(result['2025-01-15']).toBeDefined();
    expect(result['2025-01-16']).toBeDefined();
    expect(result['2025-01-17']).toBeDefined();
    expect(result['2025-01-18']).toBeDefined();
    expect(result['2025-01-15'][0].id).toBe(1);
    expect(result['2025-01-18'][0].id).toBe(1);
  });

  it('filters events outside the specified year', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-06-15 10:00:00`, `${testYear}-06-15 11:00:00`),
      createEvent(2, '2024-06-15 10:00:00', '2024-06-15 11:00:00'),
      createEvent(3, '2026-06-15 10:00:00', '2026-06-15 11:00:00'),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    expect(result['2025-06-15']).toHaveLength(1);
    expect(result['2025-06-15'][0].id).toBe(1);
    expect(result['2024-06-15']).toBeUndefined();
    expect(result['2026-06-15']).toBeUndefined();
  });

  it('throws error on duplicate event IDs', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-01-15 10:00:00`, `${testYear}-01-15 11:00:00`),
      createEvent(1, `${testYear}-03-20 14:00:00`, `${testYear}-03-20 15:00:00`),
    ];

    expect(() => {
      filterYearViewEvents({
        date: testYear,
        events,
      });
    }).toThrow('Duplicated event ids found: 1');
  });

  it('groups multiple events on the same date', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-05-10 09:00:00`, `${testYear}-05-10 10:00:00`),
      createEvent(2, `${testYear}-05-10 11:00:00`, `${testYear}-05-10 12:00:00`),
      createEvent(3, `${testYear}-05-10 14:00:00`, `${testYear}-05-10 15:00:00`),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    expect(result['2025-05-10']).toHaveLength(3);
    expect(result['2025-05-10'].map((e) => e.id)).toEqual([1, 2, 3]);
  });

  it('handles Date object as date parameter', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-01-15 10:00:00`, `${testYear}-01-15 11:00:00`),
    ];

    const result = filterYearViewEvents({
      date: new Date(`${testYear}-01-01`),
      events,
    });

    expect(result['2025-01-15']).toHaveLength(1);
  });

  it('handles multiday event spanning entire year', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-01-01 00:00:00`, `${testYear}-12-31 23:59:59`),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    // Check first and last days
    expect(result['2025-01-01']).toBeDefined();
    expect(result['2025-12-31']).toBeDefined();
    expect(result['2025-01-01'][0].id).toBe(1);
    expect(result['2025-12-31'][0].id).toBe(1);
  });

  it('handles multiday events spanning year boundary', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testYear}-12-30 10:00:00`, `${testYear}-12-31 10:00:00`),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    expect(result['2025-12-30']).toHaveLength(1);
    expect(result['2025-12-31']).toHaveLength(1);
  });

  it('preserves event order in grouped results', () => {
    const events: ScheduleEventData[] = [
      createEvent(3, `${testYear}-02-14 15:00:00`, `${testYear}-02-14 16:00:00`),
      createEvent(1, `${testYear}-02-14 09:00:00`, `${testYear}-02-14 10:00:00`),
      createEvent(2, `${testYear}-02-14 12:00:00`, `${testYear}-02-14 13:00:00`),
    ];

    const result = filterYearViewEvents({
      date: testYear,
      events,
    });

    // Events should be in the order they were added (not sorted)
    expect(result['2025-02-14'].map((e) => e.id)).toEqual([3, 1, 2]);
  });
});
