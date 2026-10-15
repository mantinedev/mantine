import { testUtils } from '../../test-utils';
import { groupEventsByDay } from './group-events-by-day';

const describeInBerlin =
  Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Berlin' ? describe : describe.skip;

const range = { rangeStart: '2026-10-01', rangeEnd: '2026-10-31', componentName: 'Test' };

describe('@mantine/schedule/group-events-by-day', () => {
  it('returns an empty object when events is undefined or empty', () => {
    expect(groupEventsByDay({ events: undefined, ...range })).toStrictEqual({});
    expect(groupEventsByDay({ events: [], ...range })).toStrictEqual({});
  });

  it('adds multi-day events to every day they occupy, end at midnight is exclusive', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-05 10:00:00', end: '2026-10-07 00:00:00' }),
      testUtils.createEvent({ id: 2, start: '2026-10-10 10:00:00', end: '2026-10-11 00:00:01' }),
    ];

    expect(groupEventsByDay({ events, ...range })).toStrictEqual({
      '2026-10-05': [events[0]],
      '2026-10-06': [events[0]],
      '2026-10-10': [events[1]],
      '2026-10-11': [events[1]],
    });
  });

  it('clips events to the range', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-09-29 10:00:00', end: '2026-10-02 10:00:00' }),
      testUtils.createEvent({ id: 2, start: '2026-10-31 10:00:00', end: '2026-11-02 10:00:00' }),
    ];

    expect(groupEventsByDay({ events, ...range })).toStrictEqual({
      '2026-10-01': [events[0]],
      '2026-10-02': [events[0]],
      '2026-10-31': [events[1]],
    });
  });

  it('skips events that end at midnight of the range start', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-09-30 22:00:00', end: '2026-10-01 00:00:00' }),
    ];

    expect(groupEventsByDay({ events, ...range })).toStrictEqual({});
  });

  it('includes zero-length events at midnight', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-10-01 00:00:00', end: '2026-10-01 00:00:00' }),
    ];

    expect(groupEventsByDay({ events, ...range })).toStrictEqual({ '2026-10-01': [events[0]] });
  });

  it('skips background events', () => {
    const events = [
      testUtils.createEvent({
        id: 1,
        start: '2026-10-05 10:00:00',
        end: '2026-10-05 11:00:00',
        display: 'background',
      }),
    ];

    expect(groupEventsByDay({ events, ...range })).toStrictEqual({});
  });

  it('throws on duplicated ids within the range only', () => {
    const inRange = testUtils.createEvent({
      id: 1,
      start: '2026-10-05 10:00:00',
      end: '2026-10-05 11:00:00',
    });
    const outOfRange = testUtils.createEvent({
      id: 1,
      start: '2026-12-05 10:00:00',
      end: '2026-12-05 11:00:00',
    });

    expect(() => groupEventsByDay({ events: [inRange, outOfRange], ...range })).not.toThrow();
    expect(() => groupEventsByDay({ events: [inRange, { ...inRange }], ...range })).toThrow(
      '[@mantine/schedule] Test: Duplicated event ids found: 1'
    );
  });

  it('validates events within the range only', () => {
    const invalid = testUtils.createEvent({
      id: 1,
      start: '2026-10-05 11:00:00',
      end: '2026-10-05 10:00:00',
    });

    expect(() => groupEventsByDay({ events: [invalid], ...range })).toThrow(
      'Event end date is before start date'
    );
    expect(() =>
      groupEventsByDay({
        events: [{ ...invalid, start: '2026-12-05 11:00:00', end: '2026-12-05 10:00:00' }],
        ...range,
      })
    ).not.toThrow();
  });

  describeInBerlin('DST, run with TZ=Europe/Berlin', () => {
    it('adds one entry per calendar day across DST changes', () => {
      const events = [
        testUtils.createEvent({ id: 1, start: '2026-03-28 10:00:00', end: '2026-03-31 00:00:00' }),
        testUtils.createEvent({ id: 2, start: '2026-10-24 10:00:00', end: '2026-10-26 00:00:00' }),
      ];

      expect(
        Object.keys(
          groupEventsByDay({
            events,
            rangeStart: '2026-01-01',
            rangeEnd: '2026-12-31',
            componentName: 'Test',
          })
        )
      ).toStrictEqual(['2026-03-28', '2026-03-29', '2026-03-30', '2026-10-24', '2026-10-25']);
    });
  });
});
