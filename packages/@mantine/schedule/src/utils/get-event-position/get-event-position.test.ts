import type { ScheduleEventData } from '../../types';
import { getEventPosition } from './get-event-position';

describe('@mantine/schedule/get-event-position', () => {
  it('calculates event position as percentage of the entire day', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 06:00:00'),
      end: new Date('2024-01-01 12:00:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({ event });
    expect(result).toEqual({
      start: '25%',
      end: '50%',
    });
  });

  it('calculates event position at the start of the day', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 00:00:00'),
      end: new Date('2024-01-01 02:00:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({ event });
    expect(result.start).toBe('0%');
    expect(parseFloat(result.end)).toBeCloseTo(8.33, 1);
  });

  it('calculates event position at the end of the day', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 22:00:00'),
      end: new Date('2024-01-01 23:59:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({ event });
    expect(parseFloat(result.start)).toBeCloseTo(91.67, 1);
    expect(parseFloat(result.end)).toBeCloseTo(99.93, 1);
  });

  it('calculates event position relative to custom time boundaries', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 11:00:00'),
      end: new Date('2024-01-01 11:30:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({
      event,
      startTime: '10:00',
      endTime: '12:00',
    });
    expect(result).toEqual({
      start: '50%',
      end: '75%',
    });
  });

  it('calculates event position at the start of custom time range', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 09:00:00'),
      end: new Date('2024-01-01 09:30:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({
      event,
      startTime: '09:00',
      endTime: '11:00',
    });
    expect(result).toEqual({
      start: '0%',
      end: '25%',
    });
  });

  it('calculates event position at the end of custom time range', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 10:30:00'),
      end: new Date('2024-01-01 11:00:00'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({
      event,
      startTime: '09:00',
      endTime: '11:00',
    });
    expect(result).toEqual({
      start: '75%',
      end: '100%',
    });
  });

  it('handles string date values for event start and end', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: '2024-01-01T06:00:00',
      end: '2024-01-01T12:00:00',
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({ event });
    expect(result).toEqual({
      start: '25%',
      end: '50%',
    });
  });

  it('ignores time boundaries if only one is provided', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01 06:00:00'),
      end: new Date('2024-01-01 12:00:00'),
      color: 'blue',
      payload: {},
    };

    const resultWithoutEnd = getEventPosition({ event, startTime: '10:00' });
    const resultWithoutStart = getEventPosition({ event, endTime: '14:00' });
    const resultWithout = getEventPosition({ event });

    expect(resultWithoutEnd).toEqual(resultWithout);
    expect(resultWithoutStart).toEqual(resultWithout);
  });

  it('calculates full-day event position', () => {
    const event: ScheduleEventData = {
      id: '1',
      title: 'All Day Event',
      start: new Date('2024-01-01 00:00:00'),
      end: new Date('2024-01-01 23:59:59'),
      color: 'blue',
      payload: {},
    };

    const result = getEventPosition({ event });
    expect(result.start).toBe('0%');
    expect(parseFloat(result.end)).toBeGreaterThan(99);
  });
});
