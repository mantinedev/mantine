import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getDayViewEvents } from './get-day-view-events';

const testDate = '2024-01-15';

describe('@mantine/schedule/get-day-view-events', () => {
  it('returns empty arrays when events is undefined', () => {
    expect(getDayViewEvents({ events: undefined, date: testDate })).toStrictEqual({
      allDayEvents: [],
      regularEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('filters events by date', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 10:00:00`, end: `${testDate} 11:00:00` }),
      testUtils.createEvent({ id: 2, start: '2024-01-16 10:00:00', end: '2024-01-16 11:00:00' }),
    ];

    expect(getDayViewEvents({ events, date: testDate })).toStrictEqual({
      regularEvents: [{ ...events[0], position: expect.any(Object) }],
      allDayEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('separates all-day and regular events', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 10:00:00`, end: `${testDate} 11:00:00` }),
      testUtils.createEvent({
        id: 2,
        start: dayjs(testDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(testDate).startOf('day').add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
      }),
    ];

    expect(getDayViewEvents({ events, date: testDate })).toStrictEqual({
      allDayEvents: [{ ...events[1], position: expect.any(Object) }],
      regularEvents: [{ ...events[0], position: expect.any(Object) }],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('throws error on duplicate event ids', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 10:00:00`, end: `${testDate} 11:00:00` }),
      testUtils.createEvent({ id: 1, start: `${testDate} 14:00:00`, end: `${testDate} 15:00:00` }),
    ];
    expect(() => getDayViewEvents({ events, date: testDate })).toThrow(
      '[@mantine/schedule] DayView: Duplicated event ids found: 1'
    );
  });

  it('keeps same-day events that end at exclusive midnight', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 17:15:00`, end: '2024-01-16 00:00:00' }),
    ];

    expect(
      getDayViewEvents({ events, date: testDate, startTime: '00:00:00', endTime: '23:59:59' })
    ).toStrictEqual({
      allDayEvents: [],
      regularEvents: [{ ...events[0], position: expect.any(Object) }],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('filters events based on startTime and endTime', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 10:00:00`, end: `${testDate} 11:00:00` }),
      testUtils.createEvent({ id: 2, start: `${testDate} 18:00:00`, end: `${testDate} 22:00:00` }),
    ];

    const result = getDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toStrictEqual({
      regularEvents: [{ ...events[0], position: expect.any(Object) }],
      allDayEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('includes events that partially overlap with time window', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: `${testDate} 08:00:00`, end: `${testDate} 12:00:00` }),
      testUtils.createEvent({ id: 2, start: `${testDate} 16:00:00`, end: `${testDate} 20:00:00` }),
    ];
    const result = getDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });

    expect(result).toStrictEqual({
      regularEvents: [
        { ...events[0], position: expect.any(Object) },
        { ...events[1], position: expect.any(Object) },
      ],
      allDayEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  it('includes all-day events regardless of time range', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: dayjs(testDate).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(testDate).startOf('day').add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
      }),
      testUtils.createEvent({ id: 2, start: `${testDate} 06:00:00`, end: `${testDate} 08:00:00` }),
    ];

    const result = getDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });

    expect(result).toStrictEqual({
      allDayEvents: [{ ...events[0], position: expect.any(Object) }],
      regularEvents: [],
      backgroundTimedEvents: [],
      backgroundAllDayEvents: [],
    });
  });

  describe('events that overlap the day', () => {
    const date = '2025-11-04';
    const multiDayAllDay = testUtils.createEvent({
      id: 'all-day',
      start: '2025-11-03 00:00:00',
      end: '2025-11-06 00:00:00',
    });
    const multiDayTimed = testUtils.createEvent({
      id: 'timed',
      start: '2025-11-03 09:00:00',
      end: '2025-11-05 17:00:00',
    });
    const carryOver = testUtils.createEvent({
      id: 'carry-over',
      start: '2025-11-03 22:00:00',
      end: '2025-11-04 02:00:00',
    });
    const endsAtDayStart = testUtils.createEvent({
      id: 'ends-at-day-start',
      start: '2025-11-03 22:00:00',
      end: '2025-11-04 00:00:00',
    });
    const continuesNextDay = testUtils.createEvent({
      id: 'continues',
      start: '2025-11-04 22:00:00',
      end: '2025-11-05 02:00:00',
    });

    it('includes events that started on an earlier day with original start and end', () => {
      const result = getDayViewEvents({
        events: [multiDayAllDay, multiDayTimed, carryOver, endsAtDayStart],
        date,
      });

      expect(result.allDayEvents.map((event) => event.id).sort()).toStrictEqual([
        'all-day',
        'timed',
      ]);
      expect(result.regularEvents.map((event) => event.id)).toStrictEqual(['carry-over']);

      const allDay = result.allDayEvents.find((event) => event.id === 'all-day')!;
      expect(allDay.start).toBe('2025-11-03 00:00:00');
      expect(allDay.end).toBe('2025-11-06 00:00:00');
      expect(allDay.position.displayStart).toBe('2025-11-04 00:00:00');
      expect(allDay.position.displayEnd).toBe('2025-11-04 23:59:59');

      const regular = result.regularEvents[0];
      expect(regular.start).toBe('2025-11-03 22:00:00');
      expect(regular.end).toBe('2025-11-04 02:00:00');
      expect(regular.position.displayStart).toBe('2025-11-04 00:00:00');
      expect(regular.position.displayEnd).toBe('2025-11-04 02:00:00');
      expect(regular.position.top).toBe(0);
      expect(regular.position.height).toBeCloseTo((2 / 24) * 100, 1);
    });

    it('places a multi-day all-day event in the all-day row on its first day', () => {
      const result = getDayViewEvents({ events: [multiDayAllDay], date: '2025-11-03' });
      expect(result.allDayEvents.map((event) => event.id)).toStrictEqual(['all-day']);
      expect(result.regularEvents).toStrictEqual([]);
    });

    it('clips the last day of a multi-day timed event', () => {
      const result = getDayViewEvents({ events: [multiDayTimed], date: '2025-11-05' });
      expect(result.regularEvents).toHaveLength(1);
      expect(result.regularEvents[0].start).toBe('2025-11-03 09:00:00');
      expect(result.regularEvents[0].position.top).toBe(0);
      expect(result.regularEvents[0].position.height).toBeCloseTo((17 / 24) * 100, 1);
    });

    it('clips an event that continues on the next day to the end of the day', () => {
      const result = getDayViewEvents({ events: [continuesNextDay], date });
      expect(result.regularEvents).toHaveLength(1);
      expect(result.regularEvents[0].end).toBe('2025-11-05 02:00:00');
      expect(result.regularEvents[0].position.displayEnd).toBe('2025-11-04 23:59:59');
      expect(
        result.regularEvents[0].position.top + result.regularEvents[0].position.height
      ).toBeCloseTo(100, 1);
    });

    it('uses the clipped range for the time range filter', () => {
      const result = getDayViewEvents({
        events: [carryOver, continuesNextDay, multiDayAllDay],
        date,
        startTime: '08:00:00',
        endTime: '18:00:00',
      });

      expect(result.regularEvents).toStrictEqual([]);
      expect(result.allDayEvents.map((event) => event.id)).toStrictEqual(['all-day']);
    });

    it('lays out overlapping carry-over events in columns', () => {
      const other = testUtils.createEvent({
        id: 'other',
        start: '2025-11-04 01:00:00',
        end: '2025-11-04 03:00:00',
      });
      const result = getDayViewEvents({ events: [carryOver, other], date });
      expect(result.regularEvents.map((event) => event.position.width)).toStrictEqual([50, 50]);
    });
  });
});
