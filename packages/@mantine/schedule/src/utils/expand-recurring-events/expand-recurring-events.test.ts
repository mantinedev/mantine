import { ScheduleEventData } from '../../types';
import { expandRecurringEvents } from './expand-recurring-events';

describe('@mantine/schedule/expand-recurring-events', () => {
  const recurringEvent: ScheduleEventData = {
    id: 'series-1',
    title: 'Standup',
    start: '2026-02-16 09:00:00',
    end: '2026-02-16 09:30:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=5',
    },
  };

  it('expands recurring events in visible range', () => {
    const result = expandRecurringEvents({
      events: [recurringEvent],
      rangeStart: '2026-02-17 00:00:00',
      rangeEnd: '2026-02-18 23:59:59',
    });

    expect(result).toHaveLength(2);
    expect(result[0].start).toBe('2026-02-17 09:00:00');
    expect(result[1].start).toBe('2026-02-18 09:00:00');
    expect(result[0].recurringInstance?.isRecurringInstance).toBe(true);
  });

  it('applies exdate exclusions', () => {
    const result = expandRecurringEvents({
      events: [
        {
          ...recurringEvent,
          recurrence: {
            rrule: 'FREQ=DAILY;COUNT=3',
            exdate: ['2026-02-17 09:00:00'],
          },
        },
      ],
      rangeStart: '2026-02-16 00:00:00',
      rangeEnd: '2026-02-19 00:00:00',
    });

    expect(result).toHaveLength(2);
    expect(result.find((event) => event.start === '2026-02-17 09:00:00')).toBeUndefined();
  });

  it('replaces generated occurrence with override', () => {
    const overrideEvent: ScheduleEventData = {
      id: 'override-1',
      title: 'Moved standup',
      start: '2026-02-17 12:00:00',
      end: '2026-02-17 12:30:00',
      color: 'red',
      recurringEventId: 'series-1',
      recurrenceId: '2026-02-17 09:00:00',
    };

    const result = expandRecurringEvents({
      events: [recurringEvent, overrideEvent],
      rangeStart: '2026-02-16 00:00:00',
      rangeEnd: '2026-02-18 23:59:59',
    });

    expect(result).toHaveLength(3);
    expect(result.find((event) => event.id === 'override-1')).toBeDefined();
    expect(
      result.find((event) => event.start === '2026-02-17 09:00:00' && event.id !== 'override-1')
    ).toBeUndefined();
  });

  it('keeps one-off events unchanged', () => {
    const oneOffEvent: ScheduleEventData = {
      id: 'one-off-1',
      title: 'One off',
      start: '2026-02-17 10:00:00',
      end: '2026-02-17 11:00:00',
      color: 'grape',
    };

    const result = expandRecurringEvents({
      events: [oneOffEvent],
      rangeStart: '2026-02-17 00:00:00',
      rangeEnd: '2026-02-17 23:59:59',
    });

    expect(result).toStrictEqual([oneOffEvent]);
  });

  it('returns empty array for undefined events', () => {
    const result = expandRecurringEvents({
      events: undefined,
      rangeStart: '2026-02-16 00:00:00',
      rangeEnd: '2026-02-18 23:59:59',
    });

    expect(result).toStrictEqual([]);
  });

  it('returns empty array for invalid range', () => {
    const result = expandRecurringEvents({
      events: [recurringEvent],
      rangeStart: 'invalid',
      rangeEnd: '2026-02-18 23:59:59',
    });

    expect(result).toStrictEqual([]);
  });

  it('handles RRULE: prefix', () => {
    const result = expandRecurringEvents({
      events: [
        {
          ...recurringEvent,
          recurrence: { rrule: 'RRULE:FREQ=DAILY;COUNT=3' },
        },
      ],
      rangeStart: '2026-02-16 00:00:00',
      rangeEnd: '2026-02-19 00:00:00',
    });

    expect(result).toHaveLength(3);
  });

  it('handles weekly recurrence with BYDAY', () => {
    const weeklyEvent: ScheduleEventData = {
      id: 'weekly-1',
      title: 'Weekly meeting',
      start: '2026-02-16 10:00:00',
      end: '2026-02-16 11:00:00',
      color: 'blue',
      recurrence: {
        rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=4',
      },
    };

    const result = expandRecurringEvents({
      events: [weeklyEvent],
      rangeStart: '2026-02-16 00:00:00',
      rangeEnd: '2026-02-28 23:59:59',
    });

    expect(result).toHaveLength(4);
  });

  it('respects expansion limit', () => {
    const result = expandRecurringEvents({
      events: [
        {
          ...recurringEvent,
          recurrence: { rrule: 'FREQ=DAILY' },
        },
      ],
      rangeStart: '2026-01-01 00:00:00',
      rangeEnd: '2030-12-31 23:59:59',
      expansionLimit: 5,
    });

    expect(result).toHaveLength(5);
  });

  it('includes orphan overrides that fall in range', () => {
    const overrideEvent: ScheduleEventData = {
      id: 'orphan-override',
      title: 'Orphan override',
      start: '2026-02-20 12:00:00',
      end: '2026-02-20 12:30:00',
      color: 'red',
      recurringEventId: 'nonexistent-series',
      recurrenceId: '2026-02-20 09:00:00',
    };

    const result = expandRecurringEvents({
      events: [overrideEvent],
      rangeStart: '2026-02-20 00:00:00',
      rangeEnd: '2026-02-20 23:59:59',
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('orphan-override');
  });
});
