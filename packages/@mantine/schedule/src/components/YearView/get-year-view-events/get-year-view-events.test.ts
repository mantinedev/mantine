import { testUtils } from '../../../test-utils';
import { ScheduleEventData } from '../../../types';
import { getYearViewEvents } from './get-year-view-events';

describe('@mantine/schedule/get-year-view-events', () => {
  it('returns empty object when events is undefined', () => {
    const result = getYearViewEvents({ date: '2025-01-15', events: undefined });
    expect(result).toStrictEqual({});
  });

  it('groups events by date within the same year', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-03-20 14:00:00', end: '2025-03-20 15:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-12-25 09:00:00', end: '2025-12-25 10:00:00' }),
    ];

    const result = getYearViewEvents({ date: '2025-01-15', events });
    expect(result).toStrictEqual({
      '2025-01-15': [events[0]],
      '2025-03-20': [events[1]],
      '2025-12-25': [events[2]],
    });
  });

  it('handles multi-day events spanning multiple dates', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-01-15', end: '2025-01-18' }),
    ];

    expect(getYearViewEvents({ date: '2025-01-15', events })).toStrictEqual({
      '2025-01-15': [events[0]],
      '2025-01-16': [events[0]],
      '2025-01-17': [events[0]],
      '2025-01-18': [events[0]],
    });
  });

  it('filters events outside the specified year', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-06-15 10:00:00', end: '2025-06-15 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2024-06-15 10:00:00', end: '2024-06-15 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2026-06-15 10:00:00', end: '2026-06-15 11:00:00' }),
    ];

    const result = getYearViewEvents({ date: '2025-01-15', events });
    expect(result).toStrictEqual({ '2025-06-15': [events[0]] });
  });

  it('throws error on duplicate event IDs', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' }),
      testUtils.createEvent({ id: 1, start: '2025-03-20 14:00:00', end: '2025-03-20 15:00:00' }),
    ];

    expect(() => {
      getYearViewEvents({ date: '2025-01-15', events });
    }).toThrow('Duplicated event ids found: 1');
  });

  it('groups multiple events on the same date', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-05-10 09:00:00', end: '2025-05-10 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-05-10 11:00:00', end: '2025-05-10 12:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-05-10 14:00:00', end: '2025-05-10 15:00:00' }),
      testUtils.createEvent({ id: 4, start: '2025-05-11 14:00:00', end: '2025-05-11 15:00:00' }),
    ];

    const result = getYearViewEvents({
      date: '2025-01-15',
      events,
    });

    expect(result).toStrictEqual({ '2025-05-10': events.slice(0, 3), '2025-05-11': [events[3]] });
  });
});
