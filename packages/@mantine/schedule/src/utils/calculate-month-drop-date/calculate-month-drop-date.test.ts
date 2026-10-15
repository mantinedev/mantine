import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { calculateMonthDropDate } from './calculate-month-drop-date';

describe('calculateMonthDropDate', () => {
  it('maintains event duration when dropping on new day', () => {
    const draggedEvent: ScheduleEventData = {
      id: '1',
      title: 'Meeting',
      start: new Date('2024-01-15T10:00:00'),
      end: new Date('2024-01-15T11:30:00'),
      color: 'blue',
      payload: {},
    };

    const result = calculateMonthDropDate({
      draggedEvent,
      targetDay: '2024-01-20',
    });

    expect(result.start).toEqual(new Date('2024-01-20T10:00:00'));
    expect(result.end).toEqual(new Date('2024-01-20T11:30:00'));
  });

  it('handles multi-day events', () => {
    const draggedEvent: ScheduleEventData = {
      id: '3',
      title: 'Conference',
      start: new Date('2024-01-15T09:00:00'),
      end: new Date('2024-01-17T17:00:00'),
      color: 'blue',
      payload: {},
    };

    const result = calculateMonthDropDate({
      draggedEvent,
      targetDay: '2024-02-05',
    });

    expect(result.start).toEqual(new Date('2024-02-05T09:00:00'));
    expect(result.end).toEqual(new Date('2024-02-07T17:00:00'));
  });

  it('handles events with milliseconds', () => {
    const draggedEvent: ScheduleEventData = {
      id: '4',
      title: 'Quick task',
      start: new Date('2024-01-10T14:30:45.500'),
      end: new Date('2024-01-10T14:45:30.750'),
      color: 'blue',
      payload: {},
    };

    const result = calculateMonthDropDate({
      draggedEvent,
      targetDay: '2024-01-15',
    });

    expect(result.start).toEqual(new Date('2024-01-15T14:30:45.500'));
    expect(result.end).toEqual(new Date('2024-01-15T14:45:30.750'));
  });

  it('keeps the calendar duration when the event is dropped on a DST transition day', () => {
    const transitionDays = getTransitionDays(2026);
    const targetDays = transitionDays.length > 0 ? transitionDays : ['2026-03-29', '2026-10-25'];

    for (const targetDay of targetDays) {
      const allDay = calculateMonthDropDate({
        draggedEvent: {
          id: 'all-day',
          title: 'All day',
          color: 'blue',
          payload: {},
          start: '2026-02-10 00:00:00',
          end: '2026-02-11 00:00:00',
        },
        targetDay,
      });

      expect(dayjs(allDay.start).format('YYYY-MM-DD HH:mm:ss')).toBe(`${targetDay} 00:00:00`);
      expect(dayjs(allDay.end).format('YYYY-MM-DD HH:mm:ss')).toBe(
        `${dayjs(targetDay).add(1, 'day').format('YYYY-MM-DD')} 00:00:00`
      );

      const timed = calculateMonthDropDate({
        draggedEvent: {
          id: 'timed',
          title: 'Timed',
          color: 'blue',
          payload: {},
          start: '2026-02-10 22:00:00',
          end: '2026-02-11 06:30:00',
        },
        targetDay: dayjs(targetDay).subtract(1, 'day').format('YYYY-MM-DD'),
      });

      expect(dayjs(timed.end).format('YYYY-MM-DD HH:mm:ss')).toBe(`${targetDay} 06:30:00`);
    }
  });
});

function getTransitionDays(year: number) {
  const days: string[] = [];
  let day = dayjs(`${year}-01-01`);

  while (day.year() === year) {
    const next = day.add(1, 'day');
    if (next.toDate().getTimezoneOffset() !== day.toDate().getTimezoneOffset()) {
      days.push(day.format('YYYY-MM-DD'));
    }
    day = next;
  }

  return days;
}
