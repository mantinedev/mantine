import dayjs from 'dayjs';
import { ScheduleEventData } from '../../../types';
import { getWeekDays } from '../../../utils';
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
  it('returns empty arrays for empty events', () => {
    const result = getWeekPositionedEvents({
      events: [],
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    expect(result.allDayEvents).toHaveLength(0);
    expect(Object.keys(result.regularEvents)).toHaveLength(7);
    Object.values(result.regularEvents).forEach((dayEvents) => {
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

    expect(result.regularEvents[monday]).toHaveLength(1);
    expect(result.regularEvents[monday][0].id).toBe(1);
    expect(result.regularEvents[monday][0].position.allDay).toBe(false);
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
    expect(Object.keys(resultSundayStart.regularEvents)).toHaveLength(7);
    expect(Object.keys(resultMondayStart.regularEvents)).toHaveLength(7);
  });

  it('marks all-day events correctly', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createAllDayEvent(1, monday)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.allDay).toBe(true);
  });

  it('handles multiday events spanning multiple days', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const wednesday = dayjs(weekStartForTest).add(2, 'day').format('YYYY-MM-DD');

    const events = [createEvent(1, `${monday} 10:00:00`, `${wednesday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
      startTime: '09:00',
      endTime: '17:00',
    });

    // Multiday events should be in allDayEvents, not split per day
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].id).toBe(1);
    expect(result.allDayEvents[0].position.offset).toBe(0);
  });

  it('calculates weekOffset correctly for events starting at week start', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createEvent(1, `${monday} 10:00:00`, `${monday} 11:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result.regularEvents[monday][0].position.weekOffset).toBe(0);
    expect(result.regularEvents[monday][0].position.row).toBe(0);
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
    expect(result.regularEvents[wednesday][0].position.weekOffset).toBeCloseTo((2 / 7) * 100, 1);
    expect(result.regularEvents[wednesday][0].position.row).toBe(0);
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

    // Multiday events go to allDayEvents
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.hanging).toBe('start');
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

    // Multiday events go to allDayEvents
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.hanging).toBe('end');
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

    expect(result.regularEvents[monday]).toHaveLength(2);
    expect(result.regularEvents[monday][0].position.overlaps).toBe(2);
    expect(result.regularEvents[monday][1].position.overlaps).toBe(2);
    expect(result.regularEvents[monday][0].position.width).toBe(50);
    expect(result.regularEvents[monday][1].position.width).toBe(50);
  });

  it('separates all-day and regular events into different collections', () => {
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

    expect(result.allDayEvents).toHaveLength(1);
    expect(result.regularEvents[monday]).toHaveLength(1);
    expect(result.allDayEvents[0].id).toBe(1);
    expect(result.regularEvents[monday][0].id).toBe(2);
    expect(result.regularEvents[monday][0].position.row).toBe(0);
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

    // Multiday events are stored in allDayEvents as a single event
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.hanging).toBe('both');
    // offset should be 0 because event starts before week, so display from week start
    expect(result.allDayEvents[0].position.offset).toBe(0);
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

    expect(result.regularEvents[monday][0].id).toBe(1);
    expect(result.regularEvents[monday][1].id).toBe(2);
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

    expect(result.regularEvents[monday][0].title).toBe('Event 1');
    expect(result.regularEvents[monday][0].color).toBe('blue');
    expect(result.regularEvents[monday][0].payload).toEqual(payload);
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

    expect(result.regularEvents[monday]).toHaveLength(2);
    expect(result.regularEvents[monday][0].position.overlaps).toBe(1);
    expect(result.regularEvents[monday][1].position.overlaps).toBe(1);
  });

  it('calculates correct weekOffset and width for multiday events', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const wednesday = dayjs(weekStartForTest).add(2, 'day').format('YYYY-MM-DD');

    // 3-day event: Mon to Wed (spanning 3 days out of 7)
    const events = [createEvent(1, `${monday} 10:00:00`, `${wednesday} 15:00:00`)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    // Multiday events should be in allDayEvents
    expect(result.allDayEvents).toHaveLength(1);
    expect(result.allDayEvents[0].position.offset).toBe(0);
    expect(result.allDayEvents[0].position.hanging).toBe('none');
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

    expect(result.regularEvents[monday]).toHaveLength(3);
    result.regularEvents[monday].forEach((e) => {
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
    expect(resultWithBounds.regularEvents[monday][0].position.top).not.toBe(
      resultWithoutBounds.regularEvents[monday][0].position.top
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
    expect(result.allDayEvents).toHaveLength(0);
    Object.values(result.regularEvents).forEach((dayEvents) => {
      expect(dayEvents).toHaveLength(0);
    });
  });

  it('handles overlapping all-day events', () => {
    const monday = dayjs(weekStartForTest).format('YYYY-MM-DD');
    const events = [createAllDayEvent(1, monday), createAllDayEvent(2, monday)];
    const result = getWeekPositionedEvents({
      events,
      date: testDate,
      firstDayOfWeek: 1,
    });

    expect(result.allDayEvents).toHaveLength(2);
    expect(result.allDayEvents[0].position.overlaps).toBe(2);
    expect(result.allDayEvents[1].position.overlaps).toBe(2);
    expect(result.allDayEvents[0].position.width).toBe(50);
    expect(result.allDayEvents[1].position.width).toBe(50);
  });
});
