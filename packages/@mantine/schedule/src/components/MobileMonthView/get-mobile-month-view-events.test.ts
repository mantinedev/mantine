import { testUtils } from '../../test-utils';
import { ScheduleEventData } from '../../types';
import { getMobileMonthViewEvents } from './get-mobile-month-view-events';

describe('@mantine/schedule/get-mobile-month-view-events', () => {
  it('returns empty object when events is undefined', () => {
    const result = getMobileMonthViewEvents({ date: '2025-11-01', events: undefined });
    expect(result).toStrictEqual({});
  });

  it('returns empty object when events array is empty', () => {
    const result = getMobileMonthViewEvents({ date: '2025-11-01', events: [] });
    expect(result).toStrictEqual({});
  });

  it('groups events by date within the same month', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-05 10:00:00', end: '2025-11-05 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-11-10 14:00:00', end: '2025-11-10 15:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-11-25 09:00:00', end: '2025-11-25 10:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({
      '2025-11-05': [events[0]],
      '2025-11-10': [events[1]],
      '2025-11-25': [events[2]],
    });
  });

  it('filters events outside the specified month', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-15 10:00:00', end: '2025-11-15 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-10-15 10:00:00', end: '2025-10-15 11:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-12-15 10:00:00', end: '2025-12-15 11:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({ '2025-11-15': [events[0]] });
  });

  it('groups multiple events on the same date', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-10 09:00:00', end: '2025-11-10 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-11-10 11:00:00', end: '2025-11-10 12:00:00' }),
      testUtils.createEvent({ id: 3, start: '2025-11-10 14:00:00', end: '2025-11-10 15:00:00' }),
      testUtils.createEvent({ id: 4, start: '2025-11-11 14:00:00', end: '2025-11-11 15:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({
      '2025-11-10': events.slice(0, 3),
      '2025-11-11': [events[3]],
    });
  });

  it('handles multi-day events spanning multiple dates', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-05', end: '2025-11-08' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({
      '2025-11-05': [events[0]],
      '2025-11-06': [events[0]],
      '2025-11-07': [events[0]],
      '2025-11-08': [events[0]],
    });
  });

  it('handles multi-day events with time components', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-10 18:00:00', end: '2025-11-12 10:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({
      '2025-11-10': [events[0]],
      '2025-11-11': [events[0]],
      '2025-11-12': [events[0]],
    });
  });

  it('throws error on duplicate event IDs', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-05 10:00:00', end: '2025-11-05 11:00:00' }),
      testUtils.createEvent({ id: 1, start: '2025-11-10 14:00:00', end: '2025-11-10 15:00:00' }),
    ];

    expect(() => {
      getMobileMonthViewEvents({ date: '2025-11-01', events });
    }).toThrow('Duplicated event ids found: 1');
  });

  it('accepts Date object as date parameter', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-15 10:00:00', end: '2025-11-15 11:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: new Date('2025-11-01'), events });
    expect(result).toStrictEqual({ '2025-11-15': [events[0]] });
  });

  it('matches events using month of the date parameter regardless of day', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-01 10:00:00', end: '2025-11-01 11:00:00' }),
      testUtils.createEvent({ id: 2, start: '2025-11-30 10:00:00', end: '2025-11-30 11:00:00' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-15', events });
    expect(result).toStrictEqual({
      '2025-11-01': [events[0]],
      '2025-11-30': [events[1]],
    });
  });

  it('does not throw for duplicate IDs across different months', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-05 10:00:00', end: '2025-11-05 11:00:00' }),
      testUtils.createEvent({ id: 1, start: '2025-12-05 10:00:00', end: '2025-12-05 11:00:00' }),
    ];

    expect(() => {
      getMobileMonthViewEvents({ date: '2025-11-01', events });
    }).not.toThrow();
  });

  it('supports numeric and string event IDs', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-05 10:00:00', end: '2025-11-05 11:00:00' }),
      testUtils.createEvent({
        id: 'abc',
        start: '2025-11-06 10:00:00',
        end: '2025-11-06 11:00:00',
      }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({
      '2025-11-05': [events[0]],
      '2025-11-06': [events[1]],
    });
  });

  it('handles all-day events (same start and end date without time)', () => {
    const events: ScheduleEventData[] = [
      testUtils.createEvent({ id: 1, start: '2025-11-15', end: '2025-11-15' }),
    ];

    const result = getMobileMonthViewEvents({ date: '2025-11-01', events });
    expect(result).toStrictEqual({ '2025-11-15': [events[0]] });
  });
});
