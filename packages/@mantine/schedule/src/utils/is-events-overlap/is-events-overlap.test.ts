import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { isEventsOverlap } from './is-events-overlap';

describe('@mantine/schedule/is-events-overlap', () => {
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

  describe('overlapping events', () => {
    it('should return true for events that overlap in the middle', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T12:00:00');
      const event2 = createEvent('2', '2025-01-15T11:00:00', '2025-01-15T13:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
      expect(isEventsOverlap(event2, event1)).toBe(true); // Should be symmetric
    });

    it('should return true for events where one is completely inside another', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T14:00:00');
      const event2 = createEvent('2', '2025-01-15T11:00:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
      expect(isEventsOverlap(event2, event1)).toBe(true);
    });

    it('should return true for events with identical times', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-15T10:00:00', '2025-01-15T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });

    it('should return true when event2 starts before event1 ends but after it starts', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-15T10:30:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });

    it('should return true when event1 starts before event2 ends but after it starts', () => {
      const event1 = createEvent('1', '2025-01-15T11:30:00', '2025-01-15T12:00:00');
      const event2 = createEvent('2', '2025-01-15T10:00:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });
  });

  describe('non-overlapping events', () => {
    it('should return false when events are completely separate (event1 before event2)', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-15T12:00:00', '2025-01-15T13:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
      expect(isEventsOverlap(event2, event1)).toBe(false);
    });

    it('should return false when events are completely separate (event2 before event1)', () => {
      const event1 = createEvent('1', '2025-01-15T14:00:00', '2025-01-15T15:00:00');
      const event2 = createEvent('2', '2025-01-15T10:00:00', '2025-01-15T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });

    it('should return false when event1 ends exactly when event2 starts', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-15T11:00:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
      expect(isEventsOverlap(event2, event1)).toBe(false);
    });

    it('should return false when event2 ends exactly when event1 starts', () => {
      const event1 = createEvent('1', '2025-01-15T12:00:00', '2025-01-15T13:00:00');
      const event2 = createEvent('2', '2025-01-15T10:00:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });
  });

  describe('edge cases with different date formats', () => {
    it('should work with ISO string dates', () => {
      const event1: ScheduleEventData = {
        id: '1',
        title: 'Event 1',
        start: '2025-01-15T10:00:00Z',
        end: '2025-01-15T11:00:00Z',
        color: 'blue',
        payload: {},
      };
      const event2: ScheduleEventData = {
        id: '2',
        title: 'Event 2',
        start: '2025-01-15T10:30:00Z',
        end: '2025-01-15T12:00:00Z',
        color: 'red',
        payload: {},
      };

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });

    it('should work with dayjs Date objects', () => {
      const event1: ScheduleEventData = {
        id: '1',
        title: 'Event 1',
        start: dayjs('2025-01-15T10:00:00').toDate(),
        end: dayjs('2025-01-15T11:00:00').toDate(),
        color: 'blue',
        payload: {},
      };
      const event2: ScheduleEventData = {
        id: '2',
        title: 'Event 2',
        start: dayjs('2025-01-15T10:30:00').toDate(),
        end: dayjs('2025-01-15T12:00:00').toDate(),
        color: 'red',
        payload: {},
      };

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });
  });

  describe('events on different days', () => {
    it('should return false for events on different days', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-16T10:00:00', '2025-01-16T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });

    it('should return false for events on different days even with same time', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-15T11:00:00');
      const event2 = createEvent('2', '2025-01-16T10:00:00', '2025-01-16T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });
  });

  describe('zero-duration events', () => {
    it('should return false for zero-duration events (start equals end) that do not overlap', () => {
      const event1: ScheduleEventData = {
        id: '1',
        title: 'Instant Event 1',
        start: new Date('2025-01-15T10:00:00'),
        end: new Date('2025-01-15T10:00:00'),
        color: 'blue',
        payload: {},
      };
      const event2 = createEvent('2', '2025-01-15T11:00:00', '2025-01-15T12:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });

    it('should return false for two zero-duration events at the same moment', () => {
      const event1: ScheduleEventData = {
        id: '1',
        title: 'Instant Event 1',
        start: new Date('2025-01-15T10:00:00'),
        end: new Date('2025-01-15T10:00:00'),
        color: 'blue',
        payload: {},
      };
      const event2: ScheduleEventData = {
        id: '2',
        title: 'Instant Event 2',
        start: new Date('2025-01-15T10:00:00'),
        end: new Date('2025-01-15T10:00:00'),
        color: 'red',
        payload: {},
      };

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });
  });

  describe('multi-day events', () => {
    it('should return true for multi-day events that overlap', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-17T11:00:00');
      const event2 = createEvent('2', '2025-01-16T10:00:00', '2025-01-18T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(true);
    });

    it('should return false for consecutive multi-day events', () => {
      const event1 = createEvent('1', '2025-01-15T10:00:00', '2025-01-16T00:00:00');
      const event2 = createEvent('2', '2025-01-16T00:00:00', '2025-01-17T11:00:00');

      expect(isEventsOverlap(event1, event2)).toBe(false);
    });
  });
});
