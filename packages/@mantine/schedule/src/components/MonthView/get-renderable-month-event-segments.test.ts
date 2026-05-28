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
