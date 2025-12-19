import dayjs from 'dayjs';
import { ScheduleEventData } from '../../../types';
import { getStartOfWeek } from '../../../utils';
import { filterWeekViewEvents } from './use-week-view-events';

const weekStart = getStartOfWeek({ date: new Date('2024-01-15'), firstDayOfWeek: 1 });
const testDate = dayjs(weekStart).format('YYYY-MM-DD');

const createEvent = (id: string | number, start: string, end: string): ScheduleEventData => ({
  id,
  title: `Event ${id}`,
  start,
  end,
  color: 'blue',
  payload: {},
});

const createMultidayEvent = (id: string | number): ScheduleEventData => {
  const dayStart = dayjs(testDate).startOf('day');
  const nextDay = dayStart.add(1, 'day');
  return {
    id,
    title: `Event ${id}`,
    start: dayStart.format('YYYY-MM-DD HH:mm:ss'),
    end: nextDay.format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
    payload: {},
  };
};

describe('filterWeekViewEvents', () => {
  it('returns empty arrays when events is undefined', () => {
    const result = filterWeekViewEvents({
      date: weekStart,
      events: undefined,
      startTime: '09:00',
      endTime: '17:00',
      firstDayOfWeek: 1,
    });
    expect(result.allDayEvents).toStrictEqual([]);
    expect(result.regularEvents).toStrictEqual({});
  });

  it('filters events by week', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(
        2,
        dayjs(testDate).subtract(8, 'day').format('YYYY-MM-DD HH:mm:ss'),
        dayjs(testDate).subtract(8, 'day').format('YYYY-MM-DD HH:mm:ss')
      ),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '09:00',
      endTime: '17:00',
      firstDayOfWeek: 1,
    });
    const allRegularEvents = Object.values(result.regularEvents).flat();
    expect(allRegularEvents).toHaveLength(1);
    expect(allRegularEvents[0].id).toBe(1);
  });

  it('throws error on duplicate event ids', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(1, `${testDate} 14:00:00`, `${testDate} 15:00:00`),
    ];
    expect(() =>
      filterWeekViewEvents({
        date: weekStart,
        events,
        startTime: '09:00',
        endTime: '17:00',
        firstDayOfWeek: 1,
      })
    ).toThrow('[@mantine/schedule] WeekView: Duplicated event ids found: 1');
  });

  it('filters out events that end before startTime', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 06:00:00`, `${testDate} 09:00:00`),
      createEvent(2, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '10:00',
      endTime: '18:00',
      firstDayOfWeek: 1,
    });
    const allRegularEvents = Object.values(result.regularEvents).flat();
    // Only event 2 should be included
    expect(allRegularEvents).toHaveLength(1);
    expect(allRegularEvents[0].id).toBe(2);
  });

  it('filters out events that start at or after endTime', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 18:00:00`, `${testDate} 19:00:00`),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '10:00',
      endTime: '18:00',
      firstDayOfWeek: 1,
    });
    const allRegularEvents = Object.values(result.regularEvents).flat();
    // Only event 1 should be included
    expect(allRegularEvents).toHaveLength(1);
    expect(allRegularEvents[0].id).toBe(1);
  });

  it('includes events that partially overlap with time window', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 08:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 16:00:00`, `${testDate} 20:00:00`),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '10:00',
      endTime: '18:00',
      firstDayOfWeek: 1,
    });
    const allRegularEvents = Object.values(result.regularEvents).flat();
    // Both events should be included
    expect(allRegularEvents).toHaveLength(2);
  });

  it('includes multiday events regardless of time range', () => {
    const events: ScheduleEventData[] = [
      createMultidayEvent(1),
      createEvent(2, `${testDate} 06:00:00`, `${testDate} 08:00:00`),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '10:00',
      endTime: '18:00',
      firstDayOfWeek: 1,
    });
    // Multiday event should be included, regular event should be filtered out
    expect(result.allDayEvents.length).toBeGreaterThan(0);
    const allRegularEvents = Object.values(result.regularEvents).flat();
    expect(allRegularEvents).toHaveLength(0);
  });

  it('includes events with exact boundary times', () => {
    const events: ScheduleEventData[] = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 18:00:00`),
    ];
    const result = filterWeekViewEvents({
      date: weekStart,
      events,
      startTime: '10:00',
      endTime: '18:00',
      firstDayOfWeek: 1,
    });
    // Event that spans exact window boundaries should be included
    const allRegularEvents = Object.values(result.regularEvents).flat();
    expect(allRegularEvents.length).toBe(1);
  });
});
