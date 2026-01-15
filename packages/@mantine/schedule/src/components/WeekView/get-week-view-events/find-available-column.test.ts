import { testUtils } from '../../../test-utils';
import { findAvailableColumn } from './find-available-column';

describe('@mantine/schedule/find-available-column', () => {
  const allWeekDays = [
    '2025-01-13 00:00:00',
    '2025-01-14 00:00:00',
    '2025-01-15 00:00:00',
    '2025-01-16 00:00:00',
    '2025-01-17 00:00:00',
    '2025-01-18 00:00:00',
    '2025-01-19 00:00:00',
  ];

  it('returns column 0 when no columns exist', () => {
    const columns = new Map();
    const event = testUtils.createEvent({
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });

    const result = findAvailableColumn({ columns, event, allDay: false, allWeekDays });

    expect(result).toBe(0);
  });

  it('returns column 0 when no conflicts in column 0', () => {
    const columns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 10:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 12:00:00',
    });

    columns.set('col-0', [event1]);

    const result = findAvailableColumn({ columns, event: event2, allDay: false, allWeekDays });

    expect(result).toBe(0);
  });

  it('returns column 1 when column 0 has overlapping event', () => {
    const columns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 13:00:00',
    });

    columns.set('col-0', [event1]);

    const result = findAvailableColumn({ columns, event: event2, allDay: false, allWeekDays });

    expect(result).toBe(1);
  });

  it('returns next available column when multiple columns are occupied', () => {
    const columns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 10:30:00',
      end: '2025-01-15 12:30:00',
    });
    const event3 = testUtils.createEvent({
      id: 3,
      start: '2025-01-15 11:00:00',
      end: '2025-01-15 13:00:00',
    });

    columns.set('col-0', [event1]);
    columns.set('col-1', [event2]);

    const result = findAvailableColumn({ columns, event: event3, allDay: false, allWeekDays });

    expect(result).toBe(2);
  });

  it('handles all-day events separately from regular events', () => {
    const columns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });

    columns.set('col-0', [event1]);

    const result = findAvailableColumn({ columns, event: event2, allDay: true, allWeekDays });

    expect(result).toBe(0);
  });

  it('finds conflict for overlapping all-day events', () => {
    const columns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });

    columns.set('col-0', [event1]);

    const result = findAvailableColumn({ columns, event: event2, allDay: true, allWeekDays });

    expect(result).toBe(1);
  });

  it('does not find conflict between all-day and regular events', () => {
    const allDayColumns = new Map();
    const event1 = testUtils.createEvent({
      id: 1,
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });
    const event2 = testUtils.createEvent({
      id: 2,
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 12:00:00',
    });

    allDayColumns.set('col-0', [event1]);

    const result = findAvailableColumn({
      columns: allDayColumns,
      event: event2,
      allDay: false,
      allWeekDays,
    });

    expect(result).toBe(0);
  });
});
