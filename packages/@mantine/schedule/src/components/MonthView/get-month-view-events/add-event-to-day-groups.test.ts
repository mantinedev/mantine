import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { addEventToDayGroups } from './add-event-to-day-groups';

describe('@mantine/schedule/add-event-to-day-groups', () => {
  it('adds single-day event to groupedByDay', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>();

    const positionedEvent = {
      ...testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      position: {
        startOffset: 0,
        width: (1 / 7) * 100,
        weekIndex: 0,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-15'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 0,
    });

    expect(groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
    expect(groupedByDay['2025-01-15 00:00:00'][0].id).toBe(1);
    expect(eventsAddedToDay.has('1')).toBe(true);
  });

  it('adds multi-day event to all days it spans', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
      '2025-01-16 00:00:00': [],
      '2025-01-17 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>();

    const positionedEvent = {
      ...testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-17 12:00:00' }),
      position: {
        startOffset: 0,
        width: (3 / 7) * 100,
        weekIndex: 0,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-17'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 0,
    });

    expect(groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
    expect(groupedByDay['2025-01-16 00:00:00']).toHaveLength(1);
    expect(groupedByDay['2025-01-17 00:00:00']).toHaveLength(1);
    expect(eventsAddedToDay.has('1')).toBe(true);
  });

  it('does not add event twice if already added', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>(['1']);

    const positionedEvent = {
      ...testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      position: {
        startOffset: 0,
        width: (1 / 7) * 100,
        weekIndex: 1,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-15'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 1,
    });

    expect(groupedByDay['2025-01-15 00:00:00']).toHaveLength(0);
  });

  it('adds event on first week (weekIdx === 0)', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>();

    const positionedEvent = {
      ...testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      position: {
        startOffset: 0,
        width: (1 / 7) * 100,
        weekIndex: 0,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-15'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 0,
    });

    expect(groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
    expect(eventsAddedToDay.has('1')).toBe(true);
  });

  it('skips days not in groupedByDay', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>();

    const positionedEvent = {
      ...testUtils.createEvent({ id: 1, start: '2025-01-15 10:00:00', end: '2025-01-17 12:00:00' }),
      position: {
        startOffset: 0,
        width: (3 / 7) * 100,
        weekIndex: 0,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-17'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 0,
    });

    expect(groupedByDay['2025-01-15 00:00:00']).toHaveLength(1);
    expect(groupedByDay['2025-01-16 00:00:00']).toBeUndefined();
    expect(groupedByDay['2025-01-17 00:00:00']).toBeUndefined();
  });

  it('tracks event IDs as strings', () => {
    const groupedByDay: { [date: string]: any[] } = {
      '2025-01-15 00:00:00': [],
    };
    const eventsAddedToDay = new Set<string>();

    const positionedEvent = {
      ...testUtils.createEvent({ id: 123, start: '2025-01-15 10:00:00', end: '2025-01-15 12:00:00' }),
      position: {
        startOffset: 0,
        width: (1 / 7) * 100,
        weekIndex: 0,
        row: 0,
        hanging: 'none' as const,
      },
    };

    addEventToDayGroups({
      positionedEvent,
      eventStart: dayjs('2025-01-15'),
      eventEnd: dayjs('2025-01-15'),
      groupedByDay,
      eventsAddedToDay,
      weekIdx: 0,
    });

    expect(eventsAddedToDay.has('123')).toBe(true);
  });
});
