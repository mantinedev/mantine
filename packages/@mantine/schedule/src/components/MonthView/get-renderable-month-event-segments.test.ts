import { DateStringValue, MonthPositionedEventData } from '../../types';
import { testUtils } from '../../test-utils';
import { getRenderableMonthEventSegments } from './get-renderable-month-event-segments';

const week: DateStringValue[] = [
  '2025-01-13 00:00:00',
  '2025-01-14 00:00:00',
  '2025-01-15 00:00:00',
  '2025-01-16 00:00:00',
  '2025-01-17 00:00:00',
  '2025-01-18 00:00:00',
  '2025-01-19 00:00:00',
];

function createPositionedEvent({
  id,
  row,
  startDayIndex,
  daysSpanned,
}: {
  id: number;
  row: number;
  startDayIndex: number;
  daysSpanned: number;
}): MonthPositionedEventData {
  return {
    ...testUtils.createEvent({
      id,
      title: `Event ${id}`,
      start: week[startDayIndex],
      end: week[startDayIndex + daysSpanned - 1],
    }),
    position: {
      startOffset: (startDayIndex / 7) * 100,
      width: (daysSpanned / 7) * 100,
      weekIndex: 0,
      row,
      hanging: 'none',
    },
  };
}

function createGroupedByDay(
  eventsByDayIndex: Record<number, MonthPositionedEventData[]>
): Record<string, MonthPositionedEventData[]> {
  return week.reduce<Record<string, MonthPositionedEventData[]>>((acc, day, index) => {
    acc[day] = eventsByDayIndex[index] || [];
    return acc;
  }, {});
}

describe('@mantine/schedule/get-renderable-month-event-segments', () => {
  it('splits a multi-day event around one truncated middle day', () => {
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 2, daysSpanned: 1 });
    const second = createPositionedEvent({ id: 2, row: 1, startDayIndex: 2, daysSpanned: 1 });
    const multiDay = createPositionedEvent({ id: 3, row: 2, startDayIndex: 1, daysSpanned: 3 });

    const result = getRenderableMonthEventSegments({
      events: [first, second, multiDay],
      groupedByDay: createGroupedByDay({
        1: [multiDay],
        2: [first, second, multiDay],
        3: [multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 3);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      clipStart: false,
      clipEnd: true,
      position: { startOffset: (1 / 7) * 100, width: (1 / 7) * 100, row: 0 },
    });
    expect(result[1]).toMatchObject({
      clipStart: true,
      clipEnd: false,
      position: { startOffset: (3 / 7) * 100, width: (1 / 7) * 100, row: 0 },
    });
  });

  it('clips only the start when the first spanned day is hidden', () => {
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 1, daysSpanned: 1 });
    const second = createPositionedEvent({ id: 2, row: 1, startDayIndex: 1, daysSpanned: 1 });
    const multiDay = createPositionedEvent({ id: 3, row: 2, startDayIndex: 1, daysSpanned: 3 });

    const result = getRenderableMonthEventSegments({
      events: [first, second, multiDay],
      groupedByDay: createGroupedByDay({
        1: [first, second, multiDay],
        2: [multiDay],
        3: [multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 3);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      clipStart: true,
      clipEnd: false,
      position: { startOffset: (2 / 7) * 100, width: (2 / 7) * 100, row: 0 },
    });
  });

  it('clips only the end when the last spanned day is hidden', () => {
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 3, daysSpanned: 1 });
    const second = createPositionedEvent({ id: 2, row: 1, startDayIndex: 3, daysSpanned: 1 });
    const multiDay = createPositionedEvent({ id: 3, row: 2, startDayIndex: 1, daysSpanned: 3 });

    const result = getRenderableMonthEventSegments({
      events: [first, second, multiDay],
      groupedByDay: createGroupedByDay({
        1: [multiDay],
        2: [multiDay],
        3: [first, second, multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 3);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      clipStart: false,
      clipEnd: true,
      position: { startOffset: (1 / 7) * 100, width: (2 / 7) * 100, row: 0 },
    });
  });

  it('splits around consecutive hidden days', () => {
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 1, daysSpanned: 2 });
    const second = createPositionedEvent({ id: 2, row: 1, startDayIndex: 1, daysSpanned: 2 });
    const multiDay = createPositionedEvent({ id: 3, row: 2, startDayIndex: 0, daysSpanned: 5 });

    const result = getRenderableMonthEventSegments({
      events: [first, second, multiDay],
      groupedByDay: createGroupedByDay({
        0: [multiDay],
        1: [first, second, multiDay],
        2: [first, second, multiDay],
        3: [multiDay],
        4: [multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 3);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      clipStart: false,
      clipEnd: true,
      position: { startOffset: 0, width: (1 / 7) * 100, row: 0 },
    });
    expect(result[1]).toMatchObject({
      clipStart: true,
      clipEnd: false,
      position: { startOffset: (3 / 7) * 100, width: (2 / 7) * 100, row: 0 },
    });
  });

  it('keeps a multi-day event on a single row across the days it is shown', () => {
    // multiDay has stable row 2 (it overlaps two events on the truncated middle day). It is hidden
    // on the truncated day, so it renders only on day 0 and day 2 — and both segments must sit on
    // the same row instead of jumping between rows (which would stack the bar into misaligned
    // fragments).
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 0, daysSpanned: 1 });
    const second = createPositionedEvent({ id: 2, row: 0, startDayIndex: 1, daysSpanned: 1 });
    const third = createPositionedEvent({ id: 3, row: 1, startDayIndex: 1, daysSpanned: 1 });
    const multiDay = createPositionedEvent({ id: 4, row: 2, startDayIndex: 0, daysSpanned: 3 });

    const result = getRenderableMonthEventSegments({
      events: [first, second, third, multiDay],
      groupedByDay: createGroupedByDay({
        0: [first, multiDay],
        1: [second, third, multiDay],
        2: [multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 4);

    expect(result).toHaveLength(2);
    expect(result[0].position.row).toBe(result[1].position.row);
    expect(result[0]).toMatchObject({
      clipStart: false,
      clipEnd: true,
      position: { startOffset: 0, width: (1 / 7) * 100, row: 1 },
    });
    expect(result[1]).toMatchObject({
      clipStart: true,
      clipEnd: false,
      position: { startOffset: (2 / 7) * 100, width: (1 / 7) * 100, row: 1 },
    });
  });

  it('still renders a multi-day event on days that have a free slot even with no shared row', () => {
    // Day 0 has row 0 taken, day 1 has row 1 taken, so the multi-day event has no single row free on
    // both days. It must still render on each day (each has an open slot) rather than disappearing.
    const dayZero = createPositionedEvent({ id: 1, row: 0, startDayIndex: 0, daysSpanned: 1 });
    const dayOne = createPositionedEvent({ id: 2, row: 1, startDayIndex: 1, daysSpanned: 1 });
    const multiDay = createPositionedEvent({ id: 3, row: 2, startDayIndex: 0, daysSpanned: 2 });

    const result = getRenderableMonthEventSegments({
      events: [dayZero, dayOne, multiDay],
      groupedByDay: createGroupedByDay({
        0: [dayZero, multiDay],
        1: [dayOne, multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    }).filter((segment) => segment.event.id === 3);

    const coveredDays = new Set(
      result.flatMap((segment) => {
        const start = Math.round(segment.position.startOffset / (100 / 7));
        const span = Math.round(segment.position.width / (100 / 7));
        return Array.from({ length: span }, (_, i) => start + i);
      })
    );

    expect(result.length).toBeGreaterThan(0);
    expect(coveredDays.has(0)).toBe(true);
    expect(coveredDays.has(1)).toBe(true);
  });

  it('returns an unchanged segment for a visible event row', () => {
    const multiDay = createPositionedEvent({ id: 1, row: 1, startDayIndex: 1, daysSpanned: 3 });

    const result = getRenderableMonthEventSegments({
      events: [multiDay],
      groupedByDay: createGroupedByDay({
        1: [multiDay],
        2: [multiDay],
        3: [multiDay],
      }),
      maxEventsPerDay: 2,
      week,
    });

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      clipStart: false,
      clipEnd: false,
      position: multiDay.position,
    });
  });

  it('compacts sparse rows when a day is not truncated', () => {
    const first = createPositionedEvent({ id: 1, row: 0, startDayIndex: 2, daysSpanned: 1 });
    const sparse = createPositionedEvent({ id: 2, row: 3, startDayIndex: 2, daysSpanned: 1 });

    const result = getRenderableMonthEventSegments({
      events: [first, sparse],
      groupedByDay: createGroupedByDay({
        2: [first, sparse],
      }),
      maxEventsPerDay: 2,
      week,
    }).find((segment) => segment.event.id === 2);

    expect(result).toMatchObject({
      clipStart: false,
      clipEnd: false,
      position: { startOffset: (2 / 7) * 100, width: (1 / 7) * 100, row: 1 },
    });
  });
});
