import dayjs from 'dayjs';
import { ScheduleEventData } from '../../types';
import { getWeekDays } from '../get-week-days/get-week-days';
import { getWeekPositionedEvents } from './get-week-positioned-events';

const testDate = '2024-01-15'; // Monday
// Get the actual week start using getWeekDays with firstDayOfWeek: 1
const weekStartForTest = getWeekDays({ week: testDate, firstDayOfWeek: 1 })[0];

const createEvent = (id: string | number, start: string, end: string): ScheduleEventData => ({
  id,
  title: `Event ${id}`,
  start,
  end,
  color: 'blue',
  payload: {},
});

const createAllDayEvent = (id: string | number, date: string): ScheduleEventData => {
  const dayStart = dayjs(date).startOf('day');
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

describe('@mantine/schedule/get-week-positioned-events', () => {
  it('returns empty object for empty events', () => {
    const result = getWeekPositionedEvents({
      events: [],
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(Object.keys(result).length).toBe(7);
    Object.values(result).forEach((dayEvents) => {
      expect(dayEvents).toHaveLength(0);
    });
  });

  it('positions single event in correct day', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result[monday]).toHaveLength(1);
    expect(result[monday][0].id).toBe(1);
    expect(result[monday][0].position.allDay).toBe(false);
  });

  it('respects firstDayOfWeek for week calculation', () => {
    const testDateFriday = '2024-01-19'; // Friday
    const events = [createEvent(1, `${testDateFriday} 10:00:00`, `${testDateFriday} 11:00:00`)];

    const resultSundayStart = getWeekPositionedEvents({
      events,
      date: testDateFriday,
      firstDayOfWeek: 0, // Sunday
    });

    const resultMondayStart = getWeekPositionedEvents({
      events,
      date: testDateFriday,
      firstDayOfWeek: 1, // Monday
    });

    // Results might differ based on which Sunday/Monday is considered start
    expect(Object.keys(resultSundayStart)).toHaveLength(7);
    expect(Object.keys(resultMondayStart)).toHaveLength(7);
  });

  it('marks all-day events correctly', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createAllDayEvent(1, monday)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday]).toHaveLength(1);
    expect(result[monday][0].position.allDay).toBe(true);
  });

  it('handles multiday events spanning multiple days', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const tuesday = dayjs(weekStartForTest).add(1, 'day').format('YYYY-MM-DD');
    const wednesday = dayjs(weekStartForTest).add(2, 'day').format('YYYY-MM-DD');

    const events = [createEvent(1, `${monday} 10:00:00`, `${wednesday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result[monday]).toHaveLength(1);
    expect(result[tuesday]).toHaveLength(1);
    expect(result[wednesday]).toHaveLength(1);
  });

  it('calculates weekOffset correctly for events starting at week start', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday][0].position.weekOffset).toBe(0);
  });

  it('calculates weekOffset correctly for events mid-week', () => {
    const wednesday = dayjs(weekStartForTest).add(2, 'day').format('YYYY-MM-DD');
    const events = [createEvent(1, `${wednesday} 10:00:00`, `${wednesday} 11:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    // Wednesday is 2 days into the week, so weekOffset should be (2/7)*100
    expect(result[wednesday][0].position.weekOffset).toBeCloseTo((2 / 7) * 100, 1);
  });

  it('marks hangingStart when event starts before week', () => {
    const sunday = dayjs(weekStartForTest).subtract(1, 'day').format('YYYY-MM-DD');
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');

    const events = [createEvent(1, `${sunday} 10:00:00`, `${monday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday][0].position.hangingStart).toBe(true);
  });

  it('marks hangingEnd when event ends after week', () => {
    const saturday = dayjs(weekStartForTest).add(5, 'day').format('YYYY-MM-DD');
    const nextMonday = dayjs(weekStartForTest).add(7, 'day').format('YYYY-MM-DD');

    const events = [createEvent(1, `${saturday} 10:00:00`, `${nextMonday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[saturday][0].position.hangingEnd).toBe(true);
  });

  it('handles overlapping events correctly', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [
      createEvent(1, `${monday} 10:00:00`, `${monday} 12:00:00`),
      createEvent(2, `${monday} 11:00:00`, `${monday} 13:00:00`),
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result[monday]).toHaveLength(2);
    expect(result[monday][0].position.overlaps).toBe(2);
    expect(result[monday][1].position.overlaps).toBe(2);
    expect(result[monday][0].position.width).toBe(50);
    expect(result[monday][1].position.width).toBe(50);
  });

  it('separates all-day and regular events into different columns', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [
      createAllDayEvent(1, monday),
      createEvent(2, `${monday} 10:00:00`, `${monday} 11:00:00`),
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday]).toHaveLength(2);
    // All-day and regular events should be in different columns
    const allDayEvent = result[monday].find((e) => e.position.allDay);
    const regularEvent = result[monday].find((e) => !e.position.allDay);
    expect(allDayEvent).toBeDefined();
    expect(regularEvent).toBeDefined();
  });

  it('handles multiday events with hanging start and end', () => {
    const startDate = dayjs(weekStartForTest).subtract(1, 'day').format('YYYY-MM-DD');
    const endDate = dayjs(weekStartForTest).add(7, 'day').format('YYYY-MM-DD');

    const events = [createEvent(1, `${startDate} 10:00:00`, `${endDate} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    // Event should appear on all days of the week
    const weekDays = getWeekDays({ week: testDate, firstDayOfWeek: 1 });
    for (const day of weekDays) {
      expect(result[day]).toHaveLength(1);
      expect(result[day][0].position.hangingStart).toBe(true);
      expect(result[day][0].position.hangingEnd).toBe(true);
    }
  });

  it('sorts events by start time before positioning', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [
      createEvent(2, `${monday} 14:00:00`, `${monday} 15:00:00`),
      createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`),
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday][0].id).toBe(1);
    expect(result[monday][1].id).toBe(2);
  });

  it('preserves event data in positioned events', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const payload = { customField: 'value' };
    const events = [
      {
        ...createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`),
        payload,
      },
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday][0].title).toBe('Event 1');
    expect(result[monday][0].color).toBe('blue');
    expect(result[monday][0].payload).toEqual(payload);
  });

  it('handles non-overlapping events on same day', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [
      createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`),
      createEvent(2, `${monday} 12:00:00`, `${monday} 13:00:00`),
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday]).toHaveLength(2);
    expect(result[monday][0].position.overlaps).toBe(1);
    expect(result[monday][1].position.overlaps).toBe(1);
  });

  it('calculates correct weekOffset and width for multiday events', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const tuesday = dayjs(weekStartForTest).add(1, 'day').format('YYYY-MM-DD');
    const wednesday = dayjs(weekStartForTest).add(2, 'day').format('YYYY-MM-DD');

    // 3-day event: Mon to Wed (spanning 3 days out of 7)
    const events = [createEvent(1, `${monday} 10:00:00`, `${wednesday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    // All days should have the event
    expect(result[monday][0].position.weekOffset).toBe(0);
    expect(result[tuesday][0].position.weekOffset).toBeCloseTo((1 / 7) * 100, 1);
    expect(result[wednesday][0].position.weekOffset).toBeCloseTo((2 / 7) * 100, 1);

    // hangingStart and hangingEnd should both be false
    expect(result[monday][0].position.hangingStart).toBe(false);
    expect(result[wednesday][0].position.hangingEnd).toBe(false);
  });

  it('handles triple overlap correctly', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [
      createEvent(1, `${monday} 10:00:00`, `${monday} 12:00:00`),
      createEvent(2, `${monday} 10:30:00`, `${monday} 12:30:00`),
      createEvent(3, `${monday} 11:00:00`, `${monday} 13:00:00`),
    ];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result[monday]).toHaveLength(3);
    result[monday].forEach((e) => {
      expect(e.position.overlaps).toBe(3);
      expect(e.position.width).toBeCloseTo(100 / 3, 5);
    });
  });

  it('respects startTime and endTime for positioning', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const event = createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`);

    const resultWithBounds = getWeekPositionedEvents({
      events: [event],
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    const resultWithoutBounds = getWeekPositionedEvents({
      events: [event],
      date: testDate,
      firstDayOfWeek: 1,
    });

    // Position should be different based on time boundaries
    expect(resultWithBounds[monday][0].position.top).not.toBe(
      resultWithoutBounds[monday][0].position.top
    );
  });

  it('correctly handles events not in the week', () => {
    const previousWeekMonday = dayjs(weekStartForTest).subtract(7, 'day').format('YYYY-MM-DD');
    const events = [
      createEvent(1, `${previousWeekMonday} 10:00:00`, `${previousWeekMonday} 11:00:00`),
    ];

    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    // No events should appear in the current week
    Object.values(result).forEach((dayEvents) => {
      expect(dayEvents).toHaveLength(0);
    });
  });
});
