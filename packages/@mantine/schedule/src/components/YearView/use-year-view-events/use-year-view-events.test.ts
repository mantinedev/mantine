import { ScheduleEventData } from '../../../types';
import { useYearViewEvents } from './use-year-view-events';

const testYear = '2025';

const createEvent = (id: string | number, start: string, end: string): ScheduleEventData => ({
  id,
  title: `Event ${id}`,
  start,
  end,
  color: 'blue',
  payload: {},
});

describe('@mantine/schedule/useYearViewEvents', () => {
  it('returns empty object when events is undefined', () => {
    const result = useYearViewEvents({
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

    const result = useYearViewEvents({
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

    const result = useYearViewEvents({
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

    const result = useYearViewEvents({
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
      useYearViewEvents({
        date: testYear,
        events,
      });
    }).toThrow('Duplicated event ids found: 1');
  });
});
