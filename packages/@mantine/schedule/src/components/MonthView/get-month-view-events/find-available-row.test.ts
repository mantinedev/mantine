import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { findAvailableRow } from './find-available-row';

describe('@mantine/schedule/find-available-row', () => {
  const weekStart = dayjs('2025-01-13');

  it('returns row 0 when no existing events', () => {
    const result = findAvailableRow({
      existingEvents: [],
      startDayIndex: 2,
      daysSpanned: 1,
      weekStart,
    });

    expect(result).toBe(0);
  });

  it('returns row 0 when event does not overlap with existing events', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-14 12:00:00',
        }),
        position: {
          startOffset: 0,
          width: (1 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 3,
      daysSpanned: 1,
      weekStart,
    });

    expect(result).toBe(0);
  });

  it('returns row 1 when event overlaps with existing event in row 0', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 12:00:00',
        }),
        position: {
          startOffset: (2 / 7) * 100,
          width: (3 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 3,
      daysSpanned: 2,
      weekStart,
    });

    expect(result).toBe(1);
  });

  it('returns row 2 when events in rows 0 and 1 overlap', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-17 12:00:00',
        }),
        position: {
          startOffset: (2 / 7) * 100,
          width: (3 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
      {
        ...testUtils.createEvent({
          id: 2,
          start: '2025-01-16 10:00:00',
          end: '2025-01-18 12:00:00',
        }),
        position: {
          startOffset: (3 / 7) * 100,
          width: (3 / 7) * 100,
          weekIndex: 0,
          row: 1,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 3,
      daysSpanned: 2,
      weekStart,
    });

    expect(result).toBe(2);
  });

  it('handles events that start before week', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-10 10:00:00',
          end: '2025-01-15 12:00:00',
        }),
        position: {
          startOffset: 0,
          width: (2 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'start' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 1,
      daysSpanned: 2,
      weekStart,
    });

    expect(result).toBe(1);
  });

  it('correctly calculates overlap with events of different widths', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-16 12:00:00',
        }),
        position: {
          startOffset: 0,
          width: (3 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 2,
      daysSpanned: 3,
      weekStart,
    });

    expect(result).toBe(1);
  });

  it('handles single-day events correctly', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 12:00:00',
        }),
        position: {
          startOffset: (2 / 7) * 100,
          width: (1 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 2,
      daysSpanned: 1,
      weekStart,
    });

    expect(result).toBe(1);
  });

  it('allows events on adjacent days without overlap', () => {
    const existingEvents = [
      {
        ...testUtils.createEvent({
          id: 1,
          start: '2025-01-13 10:00:00',
          end: '2025-01-14 12:00:00',
        }),
        position: {
          startOffset: 0,
          width: (1 / 7) * 100,
          weekIndex: 0,
          row: 0,
          hanging: 'none' as const,
        },
      },
    ];

    const result = findAvailableRow({
      existingEvents,
      startDayIndex: 2,
      daysSpanned: 1,
      weekStart,
    });

    expect(result).toBe(0);
  });
});
