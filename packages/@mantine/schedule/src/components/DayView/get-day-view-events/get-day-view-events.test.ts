import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getDayViewEvents } from './get-day-view-events';

const testDate = '2024-01-15';

describe('@mantine/schedule/get-day-view-events', () => {
  it('returns empty arrays when events is undefined', () => {
    expect(getDayViewEvents({ events: undefined, date: testDate })).toStrictEqual({
      allDayEvents: [],
      regularEvents: [],
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
    });
  });
});
