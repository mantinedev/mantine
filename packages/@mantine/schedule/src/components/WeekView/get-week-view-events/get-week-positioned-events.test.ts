import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getWeekPositionedEvents } from './get-week-positioned-events';

describe('@mantine/schedule/get-week-positioned-events', () => {
  const testWeekStart = '2025-01-13';

  describe('basic event positioning', () => {
    it('returns empty events when no events are provided', () => {
      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events: [],
      });

      expect(result).toStrictEqual({
        allDayEvents: [],
        regularEvents: {
          '2025-01-13 00:00:00': [],
          '2025-01-14 00:00:00': [],
          '2025-01-15 00:00:00': [],
          '2025-01-16 00:00:00': [],
          '2025-01-17 00:00:00': [],
          '2025-01-18 00:00:00': [],
          '2025-01-19 00:00:00': [],
        },
      });
    });

    it('positions regular single-day events correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-14 09:00:00', end: '2025-01-14 11:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-15 14:00:00', end: '2025-01-15 16:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(0);
      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-14 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-15 00:00:00']).toHaveLength(1);

      expect(result.regularEvents['2025-01-13 00:00:00'][0]).toMatchObject({
        id: 1,
        position: {
          allDay: false,
          column: 0,
          overlaps: 1,
          width: 100,
          offset: 0,
          row: 0,
          hanging: 'none',
        },
      });
    });

    it('filters out events that do not belong to the week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-12 10:00:00', end: '2025-01-12 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-13 09:00:00', end: '2025-01-13 11:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-20 14:00:00', end: '2025-01-20 16:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(0);
      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].id).toBe(2);
    });
  });

  describe('all-day events', () => {
    it('separates all-day single-day events from regular events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(1);
      expect(result.allDayEvents[0]).toMatchObject({
        id: 2,
        position: {
          allDay: true,
          column: 0,
          row: 0,
          hanging: 'none',
        },
      });
      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].id).toBe(1);
    });

    it('assigns rows to all-day events correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          start: '2025-01-14 00:00:00',
          end: '2025-01-15 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(3);
      expect(result.allDayEvents[0].position.row).toBe(0);
      expect(result.allDayEvents[1].position.row).toBe(1);
      expect(result.allDayEvents[2].position.row).toBe(0);
    });

    it('calculates width for single-day all-day events based on row count', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.width).toBe(50);
      expect(result.allDayEvents[1].position.width).toBe(50);
      expect(result.allDayEvents[0].position.overlaps).toBe(2);
      expect(result.allDayEvents[1].position.overlaps).toBe(2);
    });
  });

  describe('multi-day events', () => {
    it('treats multi-day events as all-day events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-15 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(1);
      expect(result.allDayEvents[0]).toMatchObject({
        id: 1,
        position: {
          allDay: true,
          hanging: 'none',
        },
      });
      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(0);
    });

    it('calculates width for multi-day events based on days spanned', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-15 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      const visibleDaysCount = 7;
      const daysSpanned = 3;
      const expectedWidth = (daysSpanned / visibleDaysCount) * 100;

      expect(result.allDayEvents[0].position.width).toBeCloseTo(expectedWidth, 2);
    });

    it('handles multi-day events ending at midnight correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-15 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(1);

      const visibleDaysCount = 7;
      const daysSpanned = 2;
      const expectedWidth = (daysSpanned / visibleDaysCount) * 100;

      expect(result.allDayEvents[0].position.width).toBeCloseTo(expectedWidth, 2);
    });

    it('calculates offset for multi-day events correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-14 10:00:00',
          end: '2025-01-16 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      const visibleDaysCount = 7;
      const dayIndex = 1;
      const expectedOffset = (dayIndex / visibleDaysCount) * 100;

      expect(result.allDayEvents[0].position.offset).toBeCloseTo(expectedOffset, 2);
    });
  });

  describe('hanging events', () => {
    it('marks events hanging from the start of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-14 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.hanging).toBe('start');
    });

    it('marks events hanging from the end of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-17 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.hanging).toBe('end');
    });

    it('marks events hanging from both ends of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.hanging).toBe('both');
    });

    it('adjusts width for hanging multi-day events to visible portion', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.width).toBe(100);
      expect(result.allDayEvents[0].position.offset).toBe(0);
    });

    it('adjusts offset for events hanging from start', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-15 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.offset).toBe(0);
    });
  });

  describe('overlapping events', () => {
    it('assigns columns to overlapping regular events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-13 11:00:00', end: '2025-01-13 13:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(2);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.column).toBe(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][1].position.column).toBe(1);
    });

    it('calculates width and offset for overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-13 11:00:00', end: '2025-01-13 13:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-13 11:30:00', end: '2025-01-13 13:30:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      const event1 = result.regularEvents['2025-01-13 00:00:00'][0];
      const event2 = result.regularEvents['2025-01-13 00:00:00'][1];
      const event3 = result.regularEvents['2025-01-13 00:00:00'][2];

      expect(event1.position.overlaps).toBe(3);
      expect(event1.position.width).toBeCloseTo(100 / 3, 2);
      expect(event1.position.offset).toBe(0);

      expect(event2.position.overlaps).toBe(3);
      expect(event2.position.width).toBeCloseTo(100 / 3, 2);
      expect(event2.position.offset).toBeCloseTo(100 / 3, 2);

      expect(event3.position.overlaps).toBe(3);
      expect(event3.position.width).toBeCloseTo(100 / 3, 2);
      expect(event3.position.offset).toBeCloseTo((100 / 3) * 2, 2);
    });

    it('handles non-overlapping events on the same day', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 09:00:00', end: '2025-01-13 10:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-13 10:00:00', end: '2025-01-13 11:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-13 14:00:00', end: '2025-01-13 15:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(3);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.column).toBe(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][1].position.column).toBe(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][2].position.column).toBe(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.width).toBe(100);
      expect(result.regularEvents['2025-01-13 00:00:00'][1].position.width).toBe(100);
      expect(result.regularEvents['2025-01-13 00:00:00'][2].position.width).toBe(100);
    });

    it('separates all-day and regular event columns', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.column).toBe(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.column).toBe(0);
    });
  });

  describe('vertical positioning', () => {
    it('calculates top and height for regular events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.top).toBeGreaterThan(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.height).toBeGreaterThan(0);
    });

    it('sets top and height to defaults for all-day events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents[0].position.top).toBe(0);
      expect(result.allDayEvents[0].position.height).toBe(100);
    });

    it('respects startTime and endTime for positioning', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        startTime: '09:00',
        endTime: '17:00',
      });

      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.top).toBeGreaterThan(0);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.height).toBeGreaterThan(0);
    });
  });

  describe('week offset', () => {
    it('calculates weekOffset for regular events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      const visibleDaysCount = 7;
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.weekOffset).toBe(0);
      expect(result.regularEvents['2025-01-15 00:00:00'][0].position.weekOffset).toBeCloseTo(
        (2 / visibleDaysCount) * 100,
        2
      );
    });
  });

  describe('firstDayOfWeek option', () => {
    it('handles Sunday as first day of week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-12 10:00:00', end: '2025-01-12 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: '2025-01-12',
        events,
        firstDayOfWeek: 0,
      });

      expect(result.regularEvents['2025-01-12 00:00:00']).toHaveLength(1);
      expect(Object.keys(result.regularEvents)).toContain('2025-01-12 00:00:00');
    });

    it('handles Monday as first day of week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        firstDayOfWeek: 1,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
    });
  });

  describe('weekend handling', () => {
    it('hides weekend days when withWeekendDays is false', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-18 10:00:00', end: '2025-01-18 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        withWeekendDays: false,
      });

      expect(Object.keys(result.regularEvents)).not.toContain('2025-01-18 00:00:00');
      expect(Object.keys(result.regularEvents)).not.toContain('2025-01-19 00:00:00');
      expect(Object.keys(result.regularEvents)).toHaveLength(5);
    });

    it('includes events on visible weekend days', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-18 10:00:00', end: '2025-01-18 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        withWeekendDays: true,
      });

      expect(result.regularEvents['2025-01-18 00:00:00']).toHaveLength(1);
    });

    it('skips events on hidden weekend days', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-18 10:00:00', end: '2025-01-18 12:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        withWeekendDays: false,
      });

      expect(result.regularEvents['2025-01-18 00:00:00']).toBeUndefined();
    });

    it('adjusts multi-day event width when weekends are hidden', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-17 16:00:00',
        }),
      ];

      const resultWithWeekends = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        withWeekendDays: true,
      });

      const resultWithoutWeekends = getWeekPositionedEvents({
        date: testWeekStart,
        events,
        withWeekendDays: false,
      });

      expect(resultWithWeekends.allDayEvents[0].position.width).toBeCloseTo((5 / 7) * 100, 2);
      expect(resultWithoutWeekends.allDayEvents[0].position.width).toBe(100);
    });
  });

  describe('complex scenarios', () => {
    it('handles mix of regular, all-day, and multi-day events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          start: '2025-01-14 10:00:00',
          end: '2025-01-16 16:00:00',
        }),
        testUtils.createEvent({ id: 4, start: '2025-01-15 11:00:00', end: '2025-01-15 13:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(2);
      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-15 00:00:00']).toHaveLength(1);
    });

    it('handles multiple overlapping all-day events with different spans', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 00:00:00',
          end: '2025-01-14 00:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-13 10:00:00',
          end: '2025-01-15 16:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          start: '2025-01-14 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(3);
      expect(result.allDayEvents[0].position.row).toBe(0);
      expect(result.allDayEvents[1].position.row).toBeGreaterThanOrEqual(0);
      expect(result.allDayEvents[2].position.row).toBeGreaterThanOrEqual(0);
    });

    it('handles events spanning across multiple weeks', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-05 10:00:00',
          end: '2025-01-25 16:00:00',
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.allDayEvents).toHaveLength(1);
      expect(result.allDayEvents[0].position.hanging).toBe('both');
      expect(result.allDayEvents[0].position.width).toBe(100);
    });

    it('preserves event data in positioned events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'Test Event',
          start: '2025-01-13 10:00:00',
          end: '2025-01-13 12:00:00',
          color: 'blue',
          payload: { customData: 'value' },
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00'][0]).toMatchObject({
        id: 1,
        title: 'Test Event',
        start: '2025-01-13 10:00:00',
        end: '2025-01-13 12:00:00',
        color: 'blue',
        payload: { customData: 'value' },
      });
    });
  });

  describe('edge cases', () => {
    it('handles events with same start and end time', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 10:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-13 00:00:00'][0].position.height).toBeGreaterThanOrEqual(
        0
      );
    });

    it('handles events at week boundaries', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 00:00:00', end: '2025-01-13 01:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-19 23:00:00', end: '2025-01-20 00:00:00' }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
      expect(result.regularEvents['2025-01-19 00:00:00']).toHaveLength(1);
    });

    it('handles Date objects as start and end times', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: dayjs('2025-01-13 10:00:00').toDate(),
          end: dayjs('2025-01-13 12:00:00').toDate(),
        }),
      ];

      const result = getWeekPositionedEvents({
        date: testWeekStart,
        events,
      });

      expect(result.regularEvents['2025-01-13 00:00:00']).toHaveLength(1);
    });
  });
});
