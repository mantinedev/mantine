import { testUtils } from '../../../test-utils';
import { WeekPositionedEventData } from '../../../types';
import { assignEventRows } from './assign-event-rows';

describe('@mantine/schedule/assign-event-rows', () => {
  function createPositionedEvent(overrides: Partial<WeekPositionedEventData>): any {
    return {
      ...testUtils.createEvent({}),
      position: {
        allDay: true,
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

  it('assigns row 0 to single event', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-15 00:00:00',
        end: '2025-01-16 00:00:00',
      }),
    ];

    const result = assignEventRows(events);

    expect(result.get(events[0])).toBe(0);
  });

  it('assigns same row to non-overlapping events', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-13 00:00:00',
        end: '2025-01-14 00:00:00',
      }),
      createPositionedEvent({
        id: 2,
        start: '2025-01-15 00:00:00',
        end: '2025-01-16 00:00:00',
      }),
    ];

    const result = assignEventRows(events);

    expect(result.get(events[0])).toBe(0);
    expect(result.get(events[1])).toBe(0);
  });

  it('assigns different rows to overlapping events', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-13 00:00:00',
        end: '2025-01-15 00:00:00',
      }),
      createPositionedEvent({
        id: 2,
        start: '2025-01-14 00:00:00',
        end: '2025-01-16 00:00:00',
      }),
    ];

    const result = assignEventRows(events);

    expect(result.get(events[0])).toBe(0);
    expect(result.get(events[1])).toBe(1);
  });

  it('assigns multiple rows for multiple overlapping events', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-13 00:00:00',
        end: '2025-01-16 00:00:00',
      }),
      createPositionedEvent({
        id: 2,
        start: '2025-01-14 00:00:00',
        end: '2025-01-17 00:00:00',
      }),
      createPositionedEvent({
        id: 3,
        start: '2025-01-15 00:00:00',
        end: '2025-01-18 00:00:00',
      }),
    ];

    const result = assignEventRows(events);

    expect(result.get(events[0])).toBe(0);
    expect(result.get(events[1])).toBe(1);
    expect(result.get(events[2])).toBe(2);
  });

  it('reuses rows when possible', () => {
    const events = [
      createPositionedEvent({
        id: 1,
        start: '2025-01-13 00:00:00',
        end: '2025-01-14 00:00:00',
      }),
      createPositionedEvent({
        id: 2,
        start: '2025-01-13 00:00:00',
        end: '2025-01-14 00:00:00',
      }),
      createPositionedEvent({
        id: 3,
        start: '2025-01-15 00:00:00',
        end: '2025-01-16 00:00:00',
      }),
    ];

    const result = assignEventRows(events);

    expect(result.get(events[0])).toBe(0);
    expect(result.get(events[1])).toBe(1);
    expect(result.get(events[2])).toBe(0);
  });

  it('handles empty array', () => {
    const events: WeekPositionedEventData[] = [];

    const result = assignEventRows(events);

    expect(result.size).toBe(0);
  });
});
