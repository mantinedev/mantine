import { ScheduleEventData } from '../../types';
import { isMultidayEvent } from './is-multiday-event';

describe('@mantine/schedule/is-multiday-event', () => {
  const createEvent = (start: string, end: string): ScheduleEventData => ({
    id: 1,
    title: 'Test Event',
    start,
    end,
    color: 'blue',
    payload: {},
  });

  it('returns false for single-day events', () => {
    expect(isMultidayEvent(createEvent('2025-11-03 09:00:00', '2025-11-03 17:00:00'))).toBe(false);
    expect(isMultidayEvent(createEvent('2025-11-03', '2025-11-03'))).toBe(false);
    expect(isMultidayEvent(createEvent('2025-11-03 23:59:00', '2025-11-03 23:59:59'))).toBe(false);
  });

  it('returns true for multi-day events', () => {
    expect(isMultidayEvent(createEvent('2025-11-03 09:00:00', '2025-11-04 17:00:00'))).toBe(true);
    expect(isMultidayEvent(createEvent('2025-11-03', '2025-11-10'))).toBe(true);
    expect(isMultidayEvent(createEvent('2025-12-31 15:00:00', '2026-01-01 10:00:00'))).toBe(true);
  });

  it('works with various date formats', () => {
    expect(isMultidayEvent(createEvent('2025-11-03T09:00:00Z', '2025-11-03T17:00:00Z'))).toBe(
      false
    );
    expect(isMultidayEvent(createEvent('2025-11-03T09:00:00Z', '2025-11-04T17:00:00Z'))).toBe(true);
    expect(isMultidayEvent(createEvent('2025-10-31', '2025-11-01'))).toBe(true);
  });
});
