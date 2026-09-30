import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { MonthPositionedEventData } from '../../../types';
import { getMonthPositionedEvents } from './get-month-positioned-events';

describe('@mantine/schedule/get-month-positioned-events', () => {
  const testMonth = '2025-01-01';

  describe('basic event positioning', () => {
    it('returns empty groups when no events are provided', () => {
      const result = getMonthPositionedEvents({
        date: testMonth,
        events: [],
      });

      expect(result.groupedByWeek).toBeDefined();
      expect(result.groupedByDay).toBeDefined();
      expect(Object.keys(result.groupedByWeek).length).toBeGreaterThan(0);
      expect(Object.keys(result.groupedByDay).length).toBeGreaterThan(0);
    });

    it('positions single-day events correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      expect(dayEvents).toHaveLength(1);
      expect(dayEvents[0]).toMatchObject({
        id: 1,
        position: {
          startOffset: expect.any(Number),
          width: expect.any(Number),
          weekIndex: expect.any(Number),
          row: 0,
          hanging: 'none',
        },
      });
    });

    it('filters out events that do not belong to the month', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2024-12-31 10:00:00', end: '2024-12-31 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-02-01 10:00:00', end: '2025-02-01 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      expect(dayEvents).toHaveLength(1);
      expect(dayEvents[0].id).toBe(2);
    });

    it('positions multiple events on the same day', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 14:00:00', end: '2025-01-15 16:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      expect(dayEvents).toHaveLength(2);
      expect(dayEvents[0].position.row).toBe(0);
    });
  });

  describe('multi-day events', () => {
    it('positions multi-day events spanning multiple days', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-16 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-17 00:00:00']).toHaveLength(1);
    });

    it('calculates width for multi-day events based on days spanned', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-16 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents.length).toBeGreaterThan(0);

      const event = weekEvents[0];
      expect(event.position?.width).toBeGreaterThan(0);
      expect(event.position?.width).toBeLessThanOrEqual(100);
    });

    it('treats an end time at midnight as exclusive (does not extend into the next day)', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 00:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-16 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-17 00:00:00'] ?? []).toHaveLength(0);
    });

    it('treats a single all-day event (end at next day midnight) as spanning one day', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 00:00:00',
          end: '2025-01-16 00:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-16 00:00:00'] ?? []).toHaveLength(0);

      const event = result.groupedByDay['2025-01-15 00:00:00'][0];
      expect(event.position?.width).toBeCloseTo((1 / 7) * 100, 2);
    });

    it('treats end-of-day and next-midnight single-day events identically', () => {
      const [a, b] = [
        getMonthPositionedEvents({
          date: testMonth,
          events: [
            testUtils.createEvent({
              id: 1,
              start: '2025-01-15 00:00:00',
              end: '2025-01-15 23:59:59',
            }),
          ],
          firstDayOfWeek: 1,
        }),
        getMonthPositionedEvents({
          date: testMonth,
          events: [
            testUtils.createEvent({
              id: 1,
              start: '2025-01-15 00:00:00',
              end: '2025-01-16 00:00:00',
            }),
          ],
          firstDayOfWeek: 1,
        }),
      ];

      const aEvent = a.groupedByDay['2025-01-15 00:00:00'][0];
      const bEvent = b.groupedByDay['2025-01-15 00:00:00'][0];
      expect(bEvent.position?.width).toBeCloseTo(aEvent.position!.width, 4);
      expect(bEvent.position?.startOffset).toBeCloseTo(aEvent.position!.startOffset, 4);
    });

    it('calculates offset for multi-day events correctly', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents.length).toBeGreaterThan(0);

      const event = weekEvents[0];
      expect(event.position?.startOffset).toBeGreaterThanOrEqual(0);
      expect(event.position?.startOffset).toBeLessThan(100);
    });
  });

  describe('events spanning multiple weeks', () => {
    it('creates separate positioned events for each week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-25 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekIndices = Object.keys(result.groupedByWeek);
      let eventCount = 0;

      weekIndices.forEach((weekIndex) => {
        const weekEvents = result.groupedByWeek[weekIndex];
        const eventsInWeek = weekEvents.filter((e) => e.id === 1);
        eventCount += eventsInWeek.length;
      });

      expect(eventCount).toBeGreaterThan(1);
    });

    it('marks events hanging from the start of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-15 16:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();

      const hangingEvent = weekEvents.find((e) => e.position?.hanging === 'start');
      expect(hangingEvent).toBeDefined();
    });

    it('marks events hanging from the end of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();

      const hangingEvent = weekEvents.find((e) => e.position?.hanging === 'end');
      expect(hangingEvent).toBeDefined();
    });

    it('marks events hanging from both ends of the week', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();

      const hangingEvent = weekEvents.find((e) => e.position?.hanging === 'both');
      expect(hangingEvent).toBeDefined();
    });

    it('adjusts width for hanging events to visible portion', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-22 16:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();

      const event = weekEvents.find((e) => e.position?.hanging === 'both');
      expect(event?.position?.width).toBe(100);
    });
  });

  describe('row assignment', () => {
    it('assigns same row to non-overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-14 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-16 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents).toHaveLength(2);

      expect(weekEvents[0].position?.row).toBe(0);
      expect(weekEvents[1].position?.row).toBe(0);
    });

    it('assigns different rows to overlapping events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-14 10:00:00', end: '2025-01-16 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents).toHaveLength(2);

      expect(weekEvents[0].position?.row).toBe(0);
      expect(weekEvents[1].position?.row).toBe(1);
    });

    it('handles multiple overlapping events correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-14 10:00:00', end: '2025-01-16 12:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-14 14:00:00', end: '2025-01-17 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents).toHaveLength(3);

      expect(weekEvents[0].position?.row).toBe(0);
      expect(weekEvents[1].position?.row).toBe(1);
      expect(weekEvents[2].position?.row).toBe(2);
    });
  });

  describe('grouping by week and day', () => {
    it('groups events by week index correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-01 10:00:00', end: '2025-01-01 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-31 10:00:00', end: '2025-01-31 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekIndices = Object.keys(result.groupedByWeek);
      expect(weekIndices.length).toBeGreaterThan(0);

      weekIndices.forEach((weekIndex) => {
        const weekEvents = result.groupedByWeek[weekIndex];
        expect(Array.isArray(weekEvents)).toBe(true);
      });
    });

    it('groups events by day correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-15 14:00:00', end: '2025-01-15 16:00:00' }),
        testUtils.createEvent({ id: 3, start: '2025-01-16 10:00:00', end: '2025-01-16 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toHaveLength(2);
      expect(result.groupedByDay['2025-01-16 00:00:00']).toHaveLength(1);
    });

    it('adds multi-day events to all days they span', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-16 00:00:00']).toHaveLength(1);
      expect(result.groupedByDay['2025-01-17 00:00:00']).toHaveLength(1);

      expect(result.groupedByDay['2025-01-15 00:00:00'][0].id).toBe(1);
      expect(result.groupedByDay['2025-01-16 00:00:00'][0].id).toBe(1);
      expect(result.groupedByDay['2025-01-17 00:00:00'][0].id).toBe(1);
    });

    it('adds events to groupedByDay only once per event', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-25 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const allDayEvents = Object.values(result.groupedByDay).flat();
      const uniqueEventIds = new Set(allDayEvents.map((e) => `${e.id}-instance`));
      expect(allDayEvents.length).toBeGreaterThan(uniqueEventIds.size - 1);
    });
  });

  describe('firstDayOfWeek option', () => {
    it('handles Sunday as first day of week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-12 10:00:00', end: '2025-01-12 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 0,
      });

      expect(result.groupedByDay['2025-01-12 00:00:00']).toBeDefined();
    });

    it('handles Monday as first day of week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-13 10:00:00', end: '2025-01-13 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      expect(result.groupedByDay['2025-01-13 00:00:00']).toBeDefined();
    });

    it('groups events into different weeks based on firstDayOfWeek', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-12 10:00:00', end: '2025-01-12 12:00:00' }),
      ];

      const resultSunday = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 0,
      });

      const resultMonday = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const sundayWeekIndices = Object.keys(resultSunday.groupedByWeek);
      const mondayWeekIndices = Object.keys(resultMonday.groupedByWeek);

      expect(sundayWeekIndices.length).toBeGreaterThan(0);
      expect(mondayWeekIndices.length).toBeGreaterThan(0);
    });
  });

  describe('range parameter', () => {
    it('positions events within custom range', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-25 10:00:00', end: '2025-01-25 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        range: {
          start: '2025-01-10 00:00:00',
          end: '2025-01-20 00:00:00',
        },
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toBeDefined();
    });

    it('positions events within custom range including padding days', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        range: {
          start: '2025-01-10 00:00:00',
          end: '2025-01-20 00:00:00',
        },
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toBeDefined();
      const allDayKeys = Object.keys(result.groupedByDay);
      expect(allDayKeys.length).toBeGreaterThan(0);
    });
  });

  describe('complex scenarios', () => {
    it('handles mix of single-day and multi-day events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-15 14:00:00',
          end: '2025-01-17 16:00:00',
        }),
        testUtils.createEvent({ id: 3, start: '2025-01-16 10:00:00', end: '2025-01-16 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00'].length).toBeGreaterThan(0);
      expect(result.groupedByDay['2025-01-16 00:00:00'].length).toBeGreaterThan(0);
      expect(result.groupedByDay['2025-01-17 00:00:00'].length).toBeGreaterThan(0);
    });

    it('handles multiple overlapping multi-day events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-15 12:00:00',
        }),
        testUtils.createEvent({
          id: 2,
          start: '2025-01-14 10:00:00',
          end: '2025-01-17 16:00:00',
        }),
        testUtils.createEvent({
          id: 3,
          start: '2025-01-14 14:00:00',
          end: '2025-01-16 18:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents.length).toBeGreaterThan(0);

      const rows = weekEvents.map((e) => e.position?.row);
      expect(Math.max(...rows)).toBeGreaterThan(0);
    });

    it('handles events spanning across entire month', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2025-01-01 10:00:00',
          end: '2025-01-31 16:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekIndices = Object.keys(result.groupedByWeek);
      expect(weekIndices.length).toBeGreaterThan(0);

      weekIndices.forEach((weekIndex) => {
        const weekEvents = result.groupedByWeek[weekIndex];
        const eventInWeek = weekEvents.find((e) => e.id === 1);
        expect(eventInWeek).toBeDefined();
      });
    });

    it('preserves event data in positioned events', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          title: 'Test Event',
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 12:00:00',
          color: 'blue',
          payload: { customData: 'value' },
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      expect(dayEvents[0]).toMatchObject({
        id: 1,
        title: 'Test Event',
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 12:00:00',
        color: 'blue',
        payload: { customData: 'value' },
      });
    });
  });

  describe('edge cases', () => {
    it('handles events with same start and end time', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 10:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toBeDefined();
    });

    it('handles events at month boundaries', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-01 00:00:00', end: '2025-01-01 01:00:00' }),
        testUtils.createEvent({ id: 2, start: '2025-01-31 23:00:00', end: '2025-02-01 00:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-01 00:00:00']).toBeDefined();
      expect(result.groupedByDay['2025-01-31 00:00:00']).toBeDefined();
    });

    it('handles Date objects as start and end times', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: dayjs('2025-01-15 10:00:00').toDate(),
          end: dayjs('2025-01-15 12:00:00').toDate(),
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      expect(result.groupedByDay['2025-01-15 00:00:00']).toBeDefined();
    });

    it('handles events starting before and ending after month', () => {
      const events = [
        testUtils.createEvent({
          id: 1,
          start: '2024-12-25 10:00:00',
          end: '2025-02-05 12:00:00',
        }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekIndices = Object.keys(result.groupedByWeek);
      expect(weekIndices.length).toBeGreaterThan(0);

      const eventsInAllWeeks = weekIndices.flatMap((weekIndex) => result.groupedByWeek[weekIndex]);
      const eventsWithId1 = eventsInAllWeeks.filter((e) => e.id === 1);

      expect(eventsWithId1.length).toBeGreaterThan(0);
      eventsWithId1.forEach((event) => {
        expect(event.position?.hanging).toBeDefined();
      });
    });

    it('handles empty weeks correctly', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-01 10:00:00', end: '2025-01-01 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekIndices = Object.keys(result.groupedByWeek);
      weekIndices.forEach((weekIndex) => {
        const weekEvents = result.groupedByWeek[weekIndex];
        expect(Array.isArray(weekEvents)).toBe(true);
      });
    });
  });

  describe('position calculations', () => {
    it('calculates correct startOffset for events starting mid-week', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
        firstDayOfWeek: 1,
      });

      const weekEvents = result.groupedByWeek['2'];
      expect(weekEvents).toBeDefined();
      expect(weekEvents[0].position?.startOffset).toBeGreaterThan(0);
      expect(weekEvents[0].position?.startOffset).toBeLessThan(100);
    });

    it('calculates correct width for single-day events', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      const expectedWidth = (1 / 7) * 100;
      expect(dayEvents[0].position?.width).toBeCloseTo(expectedWidth, 1);
    });

    it('sets weekIndex for each positioned event', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      ];

      const result = getMonthPositionedEvents({
        date: testMonth,
        events,
      });

      const dayEvents = result.groupedByDay['2025-01-15 00:00:00'];
      expect(dayEvents[0].position?.weekIndex).toBeDefined();
      expect(typeof dayEvents[0].position?.weekIndex).toBe('number');
    });
  });
  describe('row assignment equivalence', () => {
    function createRandom(seed: number) {
      let state = seed;
      return (max: number) => {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * max);
      };
    }

    function generateEvents(seed: number) {
      const random = createRandom(seed);
      const rangeStart = dayjs('2024-12-28');

      return Array.from({ length: 400 }, (_, id) => {
        const kind = random(6);
        const start = rangeStart
          .add(random(45), 'day')
          .hour(random(24))
          .minute(15 * random(4));

        const eventStart = kind === 0 ? start.startOf('day') : start;
        const end =
          kind === 0
            ? eventStart.add(1 + random(3), 'day')
            : kind === 1
              ? start.add(1 + random(14), 'day')
              : kind === 2
                ? start.add(1 + random(3), 'day').startOf('day')
                : start.add(1 + random(120), 'minute');

        return testUtils.createEvent({
          id,
          start: eventStart.format('YYYY-MM-DD HH:mm:ss'),
          end: end.format('YYYY-MM-DD HH:mm:ss'),
          display: kind === 5 && random(2) === 0 ? 'background' : undefined,
        });
      });
    }

    function getDayRange(event: MonthPositionedEventData) {
      return {
        startDayIndex: Math.round((event.position.startOffset / 100) * 7),
        daysSpanned: Math.round((event.position.width / 100) * 7),
      };
    }

    function getReferenceRow(
      existingEvents: MonthPositionedEventData[],
      startDayIndex: number,
      daysSpanned: number
    ) {
      let row = 0;

      for (const existing of existingEvents) {
        const existingRange = getDayRange(existing);

        if (
          existingRange.startDayIndex + existingRange.daysSpanned > startDayIndex &&
          existingRange.startDayIndex < startDayIndex + daysSpanned
        ) {
          row = Math.max(row, existing.position.row + 1);
        }
      }

      return row;
    }

    it.each([
      [1, 0],
      [1, 1],
      [2, 6],
      [3, 1],
    ] as const)(
      'assigns the same rows as a full overlap scan (seed %s, firstDayOfWeek %s)',
      (seed, firstDayOfWeek) => {
        const range = { start: '2024-12-30 00:00:00', end: '2025-02-09 23:59:59' };
        const result = getMonthPositionedEvents({
          date: testMonth,
          events: generateEvents(seed),
          firstDayOfWeek,
          range,
        });

        let placedEvents = 0;
        let hangingEvents = 0;
        let backgroundEvents = 0;

        Object.entries(result.groupedByWeek).forEach(([weekIdx, weekEvents]) => {
          weekEvents.forEach((event, index) => {
            const { startDayIndex, daysSpanned } = getDayRange(event);
            expect(event.position.row).toBe(
              getReferenceRow(weekEvents.slice(0, index), startDayIndex, daysSpanned)
            );
          });

          for (const event of result.backgroundByWeek[weekIdx]) {
            expect(event.position.row).toBe(0);
          }

          placedEvents += weekEvents.length;
          hangingEvents += weekEvents.filter((event) => event.position.hanging !== 'none').length;
          backgroundEvents += result.backgroundByWeek[weekIdx].length;
        });

        expect(placedEvents).toBeGreaterThan(400);
        expect(hangingEvents).toBeGreaterThan(50);
        expect(backgroundEvents).toBeGreaterThan(10);
        expect(
          Math.max(
            ...Object.values(result.groupedByWeek)
              .flat()
              .map((event) => event.position.row)
          )
        ).toBeGreaterThan(3);
      }
    );
  });
});
