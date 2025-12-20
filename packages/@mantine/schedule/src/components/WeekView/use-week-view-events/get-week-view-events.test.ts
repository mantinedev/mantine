import { testUtils } from '../../../test-utils';
import { getWeekPositionedEvents } from './get-week-positioned-events';

describe('@mantine/schedule/get-week-positioned-events', () => {
  it('positions events correctly within the week', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2024-01-08 10:00:00', end: '2024-01-08 12:00:00' }),
      testUtils.createEvent({ id: 2, start: '2024-01-09 09:00:00', end: '2024-01-09 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2024-01-10 14:00:00', end: '2024-01-10 16:00:00' }),
    ];

    const positionedEvents = getWeekPositionedEvents({
      date: '2024-01-08',
      events,
    });

    expect(positionedEvents).toStrictEqual({
      allDayEvents: [],
      regularEvents: {
        '2024-01-08 00:00:00': [{ ...events[0], position: expect.any(Object) }],
        '2024-01-09 00:00:00': [{ ...events[1], position: expect.any(Object) }],
        '2024-01-10 00:00:00': [{ ...events[2], position: expect.any(Object) }],
        '2024-01-11 00:00:00': [],
        '2024-01-12 00:00:00': [],
        '2024-01-13 00:00:00': [],
        '2024-01-14 00:00:00': [],
      },
    });
  });

  it('filters out events that do not belong to the week', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2024-01-07 10:00:00', end: '2024-01-07 12:00:00' }),
      testUtils.createEvent({ id: 2, start: '2024-01-08 09:00:00', end: '2024-01-08 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2024-01-15 14:00:00', end: '2024-01-15 16:00:00' }),
    ];

    const positionedEvents = getWeekPositionedEvents({
      date: '2024-01-08',
      events,
    });

    expect(positionedEvents).toStrictEqual({
      allDayEvents: [],
      regularEvents: {
        '2024-01-08 00:00:00': [{ ...events[1], position: expect.any(Object) }],
        '2024-01-09 00:00:00': [],
        '2024-01-10 00:00:00': [],
        '2024-01-11 00:00:00': [],
        '2024-01-12 00:00:00': [],
        '2024-01-13 00:00:00': [],
        '2024-01-14 00:00:00': [],
      },
    });
  });
});
