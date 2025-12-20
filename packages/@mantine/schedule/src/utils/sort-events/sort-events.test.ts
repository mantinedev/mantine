import dayjs from 'dayjs';
import { testUtils } from '../../test-utils';
import { sortEvents } from './sort-events';

describe('@mantine/schedule/sort-events', () => {
  it('should sort events by start time in ascending order', () => {
    const events = [
      testUtils.createEvent({ id: '1', start: '2025-01-15T14:00:00', end: '2025-01-15T15:00:00' }),
      testUtils.createEvent({ id: '2', start: '2025-01-15T10:00:00', end: '2025-01-15T11:00:00' }),
      testUtils.createEvent({ id: '3', start: '2025-01-15T12:00:00', end: '2025-01-15T13:00:00' }),
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2');
    expect(sorted[1].id).toBe('3');
    expect(sorted[2].id).toBe('1');
  });

  it('should sort events with the same start time by duration (longer first)', () => {
    const events = [
      testUtils.createEvent({ id: '1', start: '2025-01-15T10:00:00', end: '2025-01-15T10:30:00' }), // 30 min
      testUtils.createEvent({ id: '2', start: '2025-01-15T10:00:00', end: '2025-01-15T12:00:00' }), // 2 hours (longest)
      testUtils.createEvent({ id: '3', start: '2025-01-15T10:00:00', end: '2025-01-15T11:00:00' }), // 1 hour
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2'); // 2 hours
    expect(sorted[1].id).toBe('3'); // 1 hour
    expect(sorted[2].id).toBe('1'); // 30 min
  });

  it('should handle events with the same start and end time', () => {
    const events = [
      testUtils.createEvent({ id: '1', start: '2025-01-15T10:00:00', end: '2025-01-15T10:00:00' }),
      testUtils.createEvent({ id: '2', start: '2025-01-15T10:00:00', end: '2025-01-15T11:00:00' }),
      testUtils.createEvent({ id: '3', start: '2025-01-15T10:00:00', end: '2025-01-15T10:00:00' }),
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
      testUtils.createEvent({ id: '1', start: '2025-01-15T09:00:00', end: '2025-01-15T10:00:00' }), // 1 hour, earliest
      testUtils.createEvent({ id: '2', start: '2025-01-15T10:00:00', end: '2025-01-15T11:30:00' }), // 1.5 hours
      testUtils.createEvent({ id: '3', start: '2025-01-15T10:00:00', end: '2025-01-15T13:00:00' }), // 3 hours (longest at 10:00)
      testUtils.createEvent({ id: '4', start: '2025-01-15T10:00:00', end: '2025-01-15T11:00:00' }), // 1 hour
      testUtils.createEvent({ id: '5', start: '2025-01-15T15:00:00', end: '2025-01-15T16:00:00' }), // 1 hour, latest
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
      testUtils.createEvent({
        id: '1',
        title: 'Event 1',
        start: dayjs('2025-01-15T14:00:00').toDate(),
        end: dayjs('2025-01-15T15:00:00').toDate(),
      }),
      testUtils.createEvent({
        id: '2',
        title: 'Event 2',
        start: dayjs('2025-01-15T10:00:00').toDate(),
        end: dayjs('2025-01-15T11:00:00').toDate(),
      }),
    ];

    const sorted = sortEvents(events);

    expect(sorted[0].id).toBe('2');
    expect(sorted[1].id).toBe('1');
  });
});
