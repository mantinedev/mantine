import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { sortEvents } from './sort-events';

describe('@mantine/schedule/sortEvents', () => {
  const createEvent = (
    id: string,
    start: string,
    end: string,
    title = 'Event'
  ): ScheduleEventData => ({
    id,
    title,
    start: new Date(start),
    end: new Date(end),
    color: 'blue',
    payload: {},
  });

  it('should sort events by start time in ascending order', () => {
    const events = [
      createEvent('1', '2025-01-15T14:00:00', '2025-01-15T15:00:00'),
      createEvent('2', '2025-01-15T10:00:00', '2025-01-15T11:00:00'),
      createEvent('3', '2025-01-15T12:00:00', '2025-01-15T13:00:00'),
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2');
    expect(sorted[1].id).toBe('3');
    expect(sorted[2].id).toBe('1');
  });

  it('should sort events with the same start time by duration (longer first)', () => {
    const events = [
      createEvent('1', '2025-01-15T10:00:00', '2025-01-15T10:30:00'), // 30 min
      createEvent('2', '2025-01-15T10:00:00', '2025-01-15T12:00:00'), // 2 hours (longest)
      createEvent('3', '2025-01-15T10:00:00', '2025-01-15T11:00:00'), // 1 hour
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2'); // 2 hours
    expect(sorted[1].id).toBe('3'); // 1 hour
    expect(sorted[2].id).toBe('1'); // 30 min
  });

  it('should handle events with the same start and end time', () => {
    const events = [
      createEvent('1', '2025-01-15T10:00:00', '2025-01-15T10:00:00'),
      createEvent('2', '2025-01-15T10:00:00', '2025-01-15T11:00:00'),
      createEvent('3', '2025-01-15T10:00:00', '2025-01-15T10:00:00'),
    ];

    const sorted = sortEvents(events);

    // Event 2 has the longest duration, should be first
    expect(sorted[0].id).toBe('2');
    // Events 1 and 3 have the same duration (0), order between them may vary
    expect([sorted[1].id, sorted[2].id]).toContain('1');
    expect([sorted[1].id, sorted[2].id]).toContain('3');
  });

  it('should sort complex scenario with mixed start times and durations', () => {
    const events = [
      createEvent('1', '2025-01-15T09:00:00', '2025-01-15T10:00:00'), // 1 hour, earliest
      createEvent('2', '2025-01-15T10:00:00', '2025-01-15T11:30:00'), // 1.5 hours
      createEvent('3', '2025-01-15T10:00:00', '2025-01-15T13:00:00'), // 3 hours (longest at 10:00)
      createEvent('4', '2025-01-15T10:00:00', '2025-01-15T11:00:00'), // 1 hour
      createEvent('5', '2025-01-15T15:00:00', '2025-01-15T16:00:00'), // 1 hour, latest
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('1'); // earliest start
    expect(sorted[1].id).toBe('3'); // 10:00 start, longest duration (3 hours)
    expect(sorted[2].id).toBe('2'); // 10:00 start, 1.5 hours
    expect(sorted[3].id).toBe('4'); // 10:00 start, 1 hour
    expect(sorted[4].id).toBe('5'); // latest start
  });

  it('should work with Date objects as start and end times', () => {
    const events = [
      {
        id: '1',
        title: 'Event 1',
        start: dayjs('2025-01-15T14:00:00').toDate(),
        end: dayjs('2025-01-15T15:00:00').toDate(),
        color: 'blue' as const,
        payload: {},
      },
      {
        id: '2',
        title: 'Event 2',
        start: dayjs('2025-01-15T10:00:00').toDate(),
        end: dayjs('2025-01-15T11:00:00').toDate(),
        color: 'blue' as const,
        payload: {},
      },
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2');
    expect(sorted[1].id).toBe('1');
  });
});
