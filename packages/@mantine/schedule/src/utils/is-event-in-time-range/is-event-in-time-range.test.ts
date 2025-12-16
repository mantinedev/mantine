import { ScheduleEventData } from '../../types';
import { isEventInTimeRange } from './is-event-in-time-range';

const testDate = '2024-01-15';

const createEvent = (start: string, end: string): ScheduleEventData => ({
  id: 1,
  title: 'Test Event',
  start,
  end,
  color: 'blue',
  payload: {},
});

describe('@mantine/schedule/is-event-in-time-range', () => {
  it('returns true for multiday events regardless of time range', () => {
    const event = createEvent(`2024-01-15 14:00:00`, `2024-01-16 10:00:00`);
    expect(isEventInTimeRange({ event, startTime: '09:00', endTime: '17:00' })).toBe(true);
  });

  it('returns true when no time range is specified', () => {
    const event = createEvent(`${testDate} 06:00:00`, `${testDate} 08:00:00`);
    expect(isEventInTimeRange({ event })).toBe(true);
  });

  it('returns false for event that ends before time window start', () => {
    const event = createEvent(`${testDate} 06:00:00`, `${testDate} 09:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });

  it('returns false for event that starts at or after time window end', () => {
    const event = createEvent(`${testDate} 22:00:00`, `${testDate} 23:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });

  it('returns true for event that starts before and ends after time window start', () => {
    const event = createEvent(`${testDate} 08:00:00`, `${testDate} 12:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });

  it('returns true for event completely within time window', () => {
    const event = createEvent(`${testDate} 12:00:00`, `${testDate} 14:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });

  it('returns true for event that partially overlaps time window end', () => {
    const event = createEvent(`${testDate} 20:00:00`, `${testDate} 23:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });

  it('returns true for event that starts exactly at time window start', () => {
    const event = createEvent(`${testDate} 10:00:00`, `${testDate} 12:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });

  it('returns true for event that ends exactly at time window end', () => {
    const event = createEvent(`${testDate} 20:00:00`, `${testDate} 22:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(true);
  });

  it('returns false for event that ends exactly at time window start', () => {
    const event = createEvent(`${testDate} 08:00:00`, `${testDate} 10:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });

  it('returns false for event that starts exactly at time window end', () => {
    const event = createEvent(`${testDate} 22:00:00`, `${testDate} 23:00:00`);
    expect(isEventInTimeRange({ event, startTime: '10:00', endTime: '22:00' })).toBe(false);
  });
});
