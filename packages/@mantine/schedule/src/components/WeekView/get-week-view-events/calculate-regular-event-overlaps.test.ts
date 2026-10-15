import { testUtils } from '../../../test-utils';
import { WeekPositionedEventData } from '../../../types';
import { calculateRegularEventOverlaps } from './calculate-regular-event-overlaps';

describe('@mantine/schedule/calculate-regular-event-overlaps', () => {
  function createPositionedEvent(overrides: Partial<WeekPositionedEventData>): any {
    return {
      ...testUtils.createEvent({}),
      position: {
        allDay: false,
        top: 0,
        height: 100,
        width: 0,
        offset: 0,
        overlaps: 0,
        column: 0,
        row: 0,
        hanging: 'none' as const,
      },
      ...overrides,
    };
  }

  it('sets width to 100 for single event', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 12:00:00',
      }),
    ];

    calculateRegularEventOverlaps(events);

    expect(events[0].position.width).toBe(100);
    expect(events[0].position.offset).toBe(0);
    expect(events[0].position.overlaps).toBe(1);
  });

  it('calculates overlaps for two overlapping events', () => {
    const event1 = createPositionedEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    event1.position.column = 0;

    const event2 = createPositionedEvent({
      id: 2,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 13:00:00',
    });
    event2.position.column = 1;

    const events = [event1, event2];

    calculateRegularEventOverlaps(events);

    expect(events[0].position.width).toBe(50);
    expect(events[0].position.offset).toBe(0);
    expect(events[0].position.overlaps).toBe(2);

    expect(events[1].position.width).toBe(50);
    expect(events[1].position.offset).toBe(50);
    expect(events[1].position.overlaps).toBe(2);
  });

  it('calculates overlaps for three overlapping events', () => {
    const event1 = createPositionedEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    event1.position.column = 0;

    const event2 = createPositionedEvent({
      id: 2,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 13:00:00',
    });
    event2.position.column = 1;

    const event3 = createPositionedEvent({
      id: 3,
      start: '2025-01-15 11:30:00',
      end: '2025-01-15 13:30:00',
    });
    event3.position.column = 2;

    const events = [event1, event2, event3];

    calculateRegularEventOverlaps(events);

    expect(events[0].position.width).toBeCloseTo(100 / 3, 2);
    expect(events[0].position.offset).toBe(0);
    expect(events[0].position.overlaps).toBe(3);

    expect(events[1].position.width).toBeCloseTo(100 / 3, 2);
    expect(events[1].position.offset).toBeCloseTo(100 / 3, 2);
    expect(events[1].position.overlaps).toBe(3);

    expect(events[2].position.width).toBeCloseTo(100 / 3, 2);
    expect(events[2].position.offset).toBeCloseTo((100 / 3) * 2, 2);
    expect(events[2].position.overlaps).toBe(3);
  });

  it('handles non-overlapping events correctly', () => {
    const event1 = createPositionedEvent({
      id: 1,
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 10:00:00',
    });
    event1.position.column = 0;

    const event2 = createPositionedEvent({
      id: 2,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
    });
    event2.position.column = 0;

    const events = [event1, event2];

    calculateRegularEventOverlaps(events);

    expect(events[0].position.width).toBe(100);
    expect(events[0].position.offset).toBe(0);
    expect(events[1].position.width).toBe(100);
    expect(events[1].position.offset).toBe(0);
  });

  it('handles partial overlaps correctly', () => {
    const event1 = createPositionedEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    event1.position.column = 0;

    const event2 = createPositionedEvent({
      id: 2,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 13:00:00',
    });
    event2.position.column = 1;

    const event3 = createPositionedEvent({
      id: 3,
      start: '2025-01-15 14:00:00',
      end: '2025-01-15 15:00:00',
    });
    event3.position.column = 0;

    const events = [event1, event2, event3];

    calculateRegularEventOverlaps(events);

    expect(events[0].position.overlaps).toBe(2);
    expect(events[1].position.overlaps).toBe(2);
    expect(events[2].position.overlaps).toBe(1);
    expect(events[2].position.width).toBe(100);
  });

  it('handles empty array', () => {
    const events: WeekPositionedEventData[] = [];

    expect(() => calculateRegularEventOverlaps(events)).not.toThrow();
  });

  it('uses one column count for every event of an overlap cluster', () => {
    const long = createPositionedEvent({
      id: 1,
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 12:00:00',
    });
    long.position.column = 0;

    const first = createPositionedEvent({
      id: 2,
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 10:00:00',
    });
    first.position.column = 1;

    const second = createPositionedEvent({
      id: 3,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
    });
    second.position.column = 1;

    const third = createPositionedEvent({
      id: 4,
      start: '2025-01-15 10:30:00',
      end: '2025-01-15 11:30:00',
    });
    third.position.column = 2;

    const separate = createPositionedEvent({
      id: 5,
      start: '2025-01-15 13:00:00',
      end: '2025-01-15 14:00:00',
    });
    separate.position.column = 0;

    const events = [long, first, second, third, separate];
    calculateRegularEventOverlaps(events);

    expect(events.slice(0, 4).map((event) => event.position.overlaps)).toEqual([3, 3, 3, 3]);
    expect(first.position.width).toBeCloseTo(100 / 3, 2);
    expect(first.position.offset).toBeCloseTo(100 / 3, 2);
    expect(third.position.offset).toBeCloseTo((100 / 3) * 2, 2);
    expect(separate.position.overlaps).toBe(1);
    expect(separate.position.width).toBe(100);
  });

  it('joins events that overlap only through other events into one cluster', () => {
    const a = createPositionedEvent({
      id: 1,
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 10:00:00',
    });
    a.position.column = 0;
    const b = createPositionedEvent({
      id: 2,
      start: '2025-01-15 09:30:00',
      end: '2025-01-15 10:30:00',
    });
    b.position.column = 1;
    const c = createPositionedEvent({
      id: 3,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
    });
    c.position.column = 0;
    const d = createPositionedEvent({
      id: 4,
      start: '2025-01-15 10:45:00',
      end: '2025-01-15 11:30:00',
    });
    d.position.column = 1;
    const e = createPositionedEvent({
      id: 5,
      start: '2025-01-15 10:50:00',
      end: '2025-01-15 11:10:00',
    });
    e.position.column = 2;

    const events = [a, b, c, d, e];
    calculateRegularEventOverlaps(events);

    expect(events.map((event) => event.position.overlaps)).toEqual([3, 3, 3, 3, 3]);
  });
});
