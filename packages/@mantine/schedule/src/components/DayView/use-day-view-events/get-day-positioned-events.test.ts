import dayjs from 'dayjs';
import { ScheduleEventData } from '../../../types';
import { getDayPositionedEvents } from './get-day-positioned-events';

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

describe('getDayPositionedEvents', () => {
  it('returns empty array for empty events', () => {
    const result = getDayPositionedEvents({
      events: [],
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });
    expect(result).toHaveLength(0);
  });

  it('positions single event correctly', () => {
    const events = [createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`)];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].position.allDay).toBe(false);
    expect(result[0].position.column).toBe(0);
    expect(result[0].position.overlaps).toBe(1);
    expect(result[0].position.width).toBe(100);
    expect(result[0].position.offset).toBe(0);
  });

  it('marks all-day events correctly', () => {
    const events = [createAllDayEvent(1)];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(1);
    expect(result[0].position.allDay).toBe(true);
    expect(result[0].position.top).toBe(0);
    expect(result[0].position.height).toBe(100);
  });

  it('separates all-day and regular events into different columns', () => {
    const events = [
      createAllDayEvent(1),
      createEvent(2, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(2);
    const allDayEvent = result.find((e) => e.position.allDay);
    const regularEvent = result.find((e) => !e.position.allDay);

    expect(allDayEvent).toBeDefined();
    expect(regularEvent).toBeDefined();
  });

  it('detects overlapping events', () => {
    const events = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 11:00:00`, `${testDate} 13:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(2);
    expect(result[0].position.column).toBe(0);
    expect(result[1].position.column).toBe(1);
    expect(result[0].position.overlaps).toBe(2);
    expect(result[1].position.overlaps).toBe(2);
    expect(result[0].position.width).toBe(50);
    expect(result[1].position.width).toBe(50);
  });

  it('calculates correct offset for overlapping events', () => {
    const events = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 11:00:00`, `${testDate} 13:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result[0].position.offset).toBe(0);
    expect(result[1].position.offset).toBe(50);
  });

  it('handles non-overlapping events in same time range', () => {
    const events = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(2, `${testDate} 12:00:00`, `${testDate} 13:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(2);
    expect(result[0].position.overlaps).toBe(1);
    expect(result[1].position.overlaps).toBe(1);
    expect(result[0].position.column).toBe(0);
    expect(result[1].position.column).toBe(0);
  });

  it('handles triple overlap correctly', () => {
    const events = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 12:00:00`),
      createEvent(2, `${testDate} 10:30:00`, `${testDate} 12:30:00`),
      createEvent(3, `${testDate} 11:00:00`, `${testDate} 13:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(3);
    expect(result.every((e) => e.position.overlaps === 3)).toBe(true);
    expect(result.every((e) => e.position.width === 100 / 3)).toBe(true);
  });

  it('preserves event data in positioned events', () => {
    const payload = { customField: 'value' };
    const events = [
      {
        ...createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
        payload,
      },
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result[0].title).toBe('Event 1');
    expect(result[0].color).toBe('blue');
    expect(result[0].payload).toEqual(payload);
  });

  it('respects startTime and endTime parameters for positioning', () => {
    const event = createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`);
    const resultWithBounds = getDayPositionedEvents({
      events: [event],
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    const resultWithoutBounds = getDayPositionedEvents({
      events: [event],
      date: testDate,
    });

    // Position should be different based on time boundaries
    expect(resultWithBounds[0].position.top).not.toBe(resultWithoutBounds[0].position.top);
  });

  it('handles multiple non-overlapping groups', () => {
    const events = [
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
      createEvent(2, `${testDate} 11:30:00`, `${testDate} 12:30:00`),
      createEvent(3, `${testDate} 14:00:00`, `${testDate} 15:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result).toHaveLength(3);
    // All should be in same column since they don't overlap
    expect(result.every((e) => e.position.column === 0)).toBe(true);
  });

  it('sorts events before positioning', () => {
    const events = [
      createEvent(2, `${testDate} 11:00:00`, `${testDate} 12:00:00`),
      createEvent(1, `${testDate} 10:00:00`, `${testDate} 11:00:00`),
    ];
    const result = getDayPositionedEvents({
      events,
      date: testDate,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Events should be sorted by start time (result[0] should be event 1, result[1] should be event 2)
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
  });
});
