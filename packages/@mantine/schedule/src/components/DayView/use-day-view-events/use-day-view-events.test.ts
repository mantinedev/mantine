import dayjs from 'dayjs';
import { ScheduleEventData } from '../../../types';
import { filterDayViewEvents } from './use-day-view-events';

const testDate = '2024-01-15';

const createEvent = (id: string | number, start: string, end: string): ScheduleEventData => ({
  id,
  title: `Event ${id}`,
  start,
  end,
  color: 'blue',
  payload: {},
});

const createAllDayEvent = (id: string | number): ScheduleEventData => {
  const dayStart = dayjs(testDate).startOf('day');
  const dayEnd = dayStart.add(1, 'day');
  return {
    id,
    title: `Event ${id}`,
    start: dayStart.format('YYYY-MM-DD HH:mm:ss'),
    end: dayEnd.format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
    payload: {},
  };
};

describe('filterDayViewEvents', () => {
  it('returns empty arrays when events is undefined', () => {
    const result = filterDayViewEvents({
      events: undefined,
      date: new Date(testDate),
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result).toEqual({ allDayEvents: [], regularEvents: [] });
  });

  it('filters events by date', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(2, '2024-01-16 10:00:00', '2024-01-16 11:00:00'),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result.regularEvents).toHaveLength(1);
    expect(result.regularEvents[0].id).toBe(1);
  });

  it('separates all-day and regular events', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createAllDayEvent(2),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.regularEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.allDay).toBe(true);
    expect(result.regularEvents[0].position.allDay).toBe(false);
  });

  it('throws error on duplicate event ids', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(1, `${testDate} 14:00:00`, `${testDate} 15:00:00`),
    ];
    expect(() =>
      filterDayViewEvents({
        events,
        date: testDate,
        startTime: '09:00',
        endTime: '17:00',
      })
    ).toThrow('[@mantine/schedule] DayView: Duplicated event ids found: 1');
  });

  it('handles mixed date formats (Date and string)', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
    ];
    const result1 = filterDayViewEvents({
      events,
      date: new Date(testDate),
      startTime: '09:00',
      endTime: '17:00',
    });
    const result2 = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result1.regularEvents).toHaveLength(1);
    expect(result2.regularEvents).toHaveLength(1);
  });

  it('returns empty when no events match the date', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, '2024-01-20 10:00:00', '2024-01-20 11:00:00'),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result.allDayEvents).toHaveLength(0);
    expect(result.regularEvents).toHaveLength(0);
  });

  it('respects startTime and endTime parameters', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(2, `${testDate} 14:00:00`, `${testDate} 15:00:00`),
      createEvent(3, `${testDate} 16:00:00`, `${testDate} 17:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    // All events should be included as they fall within the time range
    expect(result.regularEvents).toHaveLength(3);
  });

  it('handles empty events array', () => {
    const result = filterDayViewEvents({
      events: [],
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result).toEqual({ allDayEvents: [], regularEvents: [] });
  });

  it('filters out events that end before startTime', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 06:00:00`, `${testDate} 09:00:00`),
      createEvent(2, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });
    // Event 1 ends before startTime, so it should be filtered out
    expect(result.regularEvents).toHaveLength(1);
    expect(result.regularEvents[0].id).toBe(2);
  });

  it('filters out events that start at or after endTime', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 18:00:00`, `${testDate} 19:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });
    // Event 2 starts at endTime, so it should be filtered out
    expect(result.regularEvents).toHaveLength(1);
    expect(result.regularEvents[0].id).toBe(1);
  });

  it('includes events that partially overlap with time window', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 08:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 16:00:00`, `${testDate} 20:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });
    // Both events partially overlap with the time window
    expect(result.regularEvents).toHaveLength(2);
  });

  it('includes all-day events regardless of time range', () => {
    const events: ScheduleEventData[] = [
      createAllDayEvent(1),
      createEvent(2, `${testDate} 06:00:00`, `${testDate} 08:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });
    // All-day event should be included, regular event should be filtered out
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.regularEvents).toHaveLength(0);
  });

  it('includes events with exact boundary times', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 18:00:00`),
    ];
    const result = filterDayViewEvents({
      events,
      date: testDate,
      startTime: '10:00',
      endTime: '18:00',
    });
    // Event that spans exact window boundaries should be included
    expect(result.regularEvents).toHaveLength(1);
  });
});
