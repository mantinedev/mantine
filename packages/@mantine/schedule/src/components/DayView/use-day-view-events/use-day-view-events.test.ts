import { ScheduleEventData } from '../../../types';
import { filterDayViewEvents, ScheduleEventDayViewData } from './use-day-view-events';

describe('@mantine/schedule/use-day-view-events', () => {
  const testDate = '2024-12-12';
  const validEvent: ScheduleEventData = {
    id: 'event-1',
    title: 'Test Event',
    start: `${testDate} 10:00:00`,
    end: `${testDate} 11:00:00`,
    color: 'blue',
    payload: {},
  };

  it('returns only events that belong to the given date', () => {
    const events: ScheduleEventData[] = [
      validEvent,
      {
        id: 'event-2',
        title: 'Another Event',
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        color: 'red',
        payload: {},
      },
      {
        id: 'event-3',
        title: 'Different Day Event',
        start: '2024-12-13 10:00:00',
        end: '2024-12-13 11:00:00',
        color: 'green',
        payload: {},
      },
    ];

    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: undefined,
      endTime: undefined,
    });
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('event-1');
    expect(result[1].id).toBe('event-2');
    expect(result[0].position).toBeDefined();
    expect(result[0].position).toHaveProperty('start');
    expect(result[0].position).toHaveProperty('end');
  });

  it('throws error for duplicated event ids', () => {
    const events: ScheduleEventData[] = [
      validEvent,
      {
        id: 'event-1', // Duplicate id
        title: 'Duplicate Event',
        start: `${testDate} 14:00:00`,
        end: `${testDate} 15:00:00`,
        color: 'red',
        payload: {},
      },
    ];

    expect(() =>
      filterDayViewEvents({ events, date: testDate, startTime: undefined, endTime: undefined })
    ).toThrow('[@mantine/schedule] DayView: Duplicated event ids found: event-1');
  });

  it('throws error if event has invalid end date', () => {
    const events: ScheduleEventData[] = [
      {
        id: 'event-1',
        title: 'Invalid Event',
        start: `${testDate} 10:00:00`,
        end: 'invalid-end-date',
        color: 'blue',
        payload: {},
      },
    ];

    expect(() =>
      filterDayViewEvents({ events, date: testDate, startTime: undefined, endTime: undefined })
    ).toThrow('[@mantine/schedule] Invalid end date for event id: event-1');
  });

  it('skips events with invalid start date (unparseable dates do not match any day)', () => {
    const events: ScheduleEventData[] = [
      {
        id: 'event-1',
        title: 'Invalid Start Date Event',
        start: 'invalid-start-date',
        end: `${testDate} 11:00:00`,
        color: 'blue',
        payload: {},
      },
      {
        id: 'event-2',
        title: 'Valid Event',
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        color: 'blue',
        payload: {},
      },
    ];

    // Events with invalid start dates won't match the day filter
    // because dayjs('invalid-start-date').isSame(...) returns false
    // So they are filtered out before validation
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: undefined,
      endTime: undefined,
    });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('event-2');
  });

  it('filters out events from different dates and returns empty array when no events match', () => {
    const events: ScheduleEventData[] = [
      {
        id: 'event-1',
        title: 'Event on different date',
        start: '2024-12-13 10:00:00',
        end: '2024-12-13 11:00:00',
        color: 'blue',
        payload: {},
      },
    ];

    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: undefined,
      endTime: undefined,
    });
    expect(result).toHaveLength(0);
  });

  it('accepts Date object as input date', () => {
    const dateObject = new Date(testDate);
    const events: ScheduleEventData[] = [validEvent];

    const result = filterDayViewEvents({
      events,
      date: dateObject,
      startTime: undefined,
      endTime: undefined,
    });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('event-1');
  });

  it('returns empty array when no events are provided', () => {
    const result = filterDayViewEvents({
      events: undefined,
      date: testDate,
      startTime: undefined,
      endTime: undefined,
    });
    expect(result).toHaveLength(0);
  });

  it('includes position data for events with custom start and end times', () => {
    const events: ScheduleEventData[] = [
      {
        id: 'event-1',
        title: 'Morning Meeting',
        start: `${testDate} 10:00:00`,
        end: `${testDate} 11:00:00`,
        color: 'blue',
        payload: {},
      },
    ];

    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(1);
    const event = result[0] as ScheduleEventDayViewData;
    expect(event.position).toBeDefined();
    expect(event.position.start).toBe('12.5%');
    expect(event.position.end).toBe('25%');
  });

  it('calculates position relative to full day when start and end times are not provided', () => {
    const events: ScheduleEventData[] = [validEvent];

    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: undefined,
      endTime: undefined,
    });

    expect(result).toHaveLength(1);
    const event = result[0] as ScheduleEventDayViewData;
    expect(event.position).toBeDefined();
    // 10:00 is 600 minutes into the day / 1440 = 41.67%
    expect(parseFloat(event.position.start)).toBeCloseTo(41.67, 1);
    // 11:00 is 660 minutes into the day / 1440 = 45.83%
    expect(parseFloat(event.position.end)).toBeCloseTo(45.83, 1);
  });
});
