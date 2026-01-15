import { calculateMonthDropDate } from './calculate-month-drop-date';
import type { ScheduleEventData } from '../../types';

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

  it('maintains time when dropping on new day', () => {
    const draggedEvent: ScheduleEventData = {
      id: '2',
      title: 'Lunch',
      start: new Date('2024-01-10T12:30:00'),
      end: new Date('2024-01-10T13:30:00'),
      color: 'blue',
      payload: {},
    };

    const result = calculateMonthDropDate({
      draggedEvent,
      targetDay: '2024-01-25',
    });

    expect(result.start).toEqual(new Date('2024-01-25T12:30:00'));
    expect(result.end).toEqual(new Date('2024-01-25T13:30:00'));
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
});
