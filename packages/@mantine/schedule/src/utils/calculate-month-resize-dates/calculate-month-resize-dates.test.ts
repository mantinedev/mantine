import type { ScheduleEventData } from '../../types';
import { calculateMonthResizeDates } from './calculate-month-resize-dates';

function createEvent(start: string, end: string): ScheduleEventData {
  return { id: '1', title: 'Booking', start, end, color: 'blue', payload: {} };
}

describe('calculateMonthResizeDates', () => {
  it('extends the end edge and preserves the original end time', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 17:00:00'),
      edge: 'end',
      targetDay: '2026-03-10',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 09:00:00',
      end: '2026-03-10 17:00:00',
    });
  });

  it('shrinks the end edge and preserves the original end time', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 17:00:00'),
      edge: 'end',
      targetDay: '2026-03-06',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 09:00:00',
      end: '2026-03-06 17:00:00',
    });
  });

  it('moves the start edge and preserves the original start time', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 17:00:00'),
      edge: 'start',
      targetDay: '2026-03-02',
    });

    expect(result).toStrictEqual({
      start: '2026-03-02 09:00:00',
      end: '2026-03-07 17:00:00',
    });
  });

  it('keeps the end exclusive when the event ends at midnight', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 00:00:00', '2026-03-08 00:00:00'),
      edge: 'end',
      targetDay: '2026-03-10',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 00:00:00',
      end: '2026-03-11 00:00:00',
    });
  });

  it('shrinks a midnight-ending event to a single day', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 00:00:00', '2026-03-08 00:00:00'),
      edge: 'end',
      targetDay: '2026-03-05',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 00:00:00',
      end: '2026-03-06 00:00:00',
    });
  });

  it('clamps the end edge to the start day', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 17:00:00'),
      edge: 'end',
      targetDay: '2026-03-01',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 09:00:00',
      end: '2026-03-05 17:00:00',
    });
  });

  it('clamps the start edge to the last day of the event', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 17:00:00'),
      edge: 'start',
      targetDay: '2026-03-20',
    });

    expect(result).toStrictEqual({
      start: '2026-03-07 09:00:00',
      end: '2026-03-07 17:00:00',
    });
  });

  it('clamps the start edge to the last rendered day of a midnight-ending event', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 00:00:00', '2026-03-08 00:00:00'),
      edge: 'start',
      targetDay: '2026-03-20',
    });

    expect(result).toStrictEqual({
      start: '2026-03-07 00:00:00',
      end: '2026-03-08 00:00:00',
    });
  });

  it('steps the start edge back a day when times would invert', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 05:00:00'),
      edge: 'start',
      targetDay: '2026-03-07',
    });

    expect(result).toStrictEqual({
      start: '2026-03-06 09:00:00',
      end: '2026-03-07 05:00:00',
    });
  });

  it('steps the end edge forward a day when times would invert', () => {
    const result = calculateMonthResizeDates({
      event: createEvent('2026-03-05 09:00:00', '2026-03-07 05:00:00'),
      edge: 'end',
      targetDay: '2026-03-05',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 09:00:00',
      end: '2026-03-06 05:00:00',
    });
  });

  it('supports events defined with Date objects', () => {
    const result = calculateMonthResizeDates({
      event: {
        id: '2',
        title: 'Booking',
        start: new Date(2026, 2, 5, 9, 0, 0),
        end: new Date(2026, 2, 7, 17, 0, 0),
        color: 'blue',
        payload: {},
      },
      edge: 'end',
      targetDay: '2026-03-09',
    });

    expect(result).toStrictEqual({
      start: '2026-03-05 09:00:00',
      end: '2026-03-09 17:00:00',
    });
  });
});
