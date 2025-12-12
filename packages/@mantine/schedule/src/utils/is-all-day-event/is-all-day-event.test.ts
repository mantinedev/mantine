import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { isAllDayEvent } from './is-all-day-event';

describe('@mantine/schedule/is-all-day-event', () => {
  it('detects all-day events', () => {
    const today = '2025-12-12';
    const allDayEvent: ScheduleEventData = {
      id: 1,
      title: 'All Day Conference',
      start: `${today} 00:00:00`,
      end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      color: 'blue',
      payload: {},
    };

    expect(isAllDayEvent({ event: allDayEvent, date: today })).toBe(true);
  });

  it('does not detect regular events as all-day', () => {
    const today = '2025-12-12';
    const regularEvent: ScheduleEventData = {
      id: 1,
      title: 'Meeting',
      start: `${today} 10:00:00`,
      end: `${today} 11:30:00`,
      color: 'orange',
      payload: {},
    };

    expect(isAllDayEvent({ event: regularEvent, date: today })).toBe(false);
  });
});
