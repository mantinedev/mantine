import { testUtils } from '../../test-utils';
import { getAgendaViewEvents } from './get-agenda-view-events';

const range = { rangeStart: '2026-10-01', rangeEnd: '2026-10-31' };

describe('@mantine/schedule/get-agenda-view-events', () => {
  it('returns an empty object when events is undefined', () => {
    expect(getAgendaViewEvents({ ...range, events: undefined })).toStrictEqual({});
  });

  it('does not create a group before the range for an event ending at the range start midnight', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-09-30 22:00:00', end: '2026-10-01 00:00:00' }),
    ];

    expect(getAgendaViewEvents({ ...range, events })).toStrictEqual({});
  });

  it('groups multi-day events by the days they occupy within the range', () => {
    const events = [
      testUtils.createEvent({ id: 1, start: '2026-09-30 22:00:00', end: '2026-10-01 02:00:00' }),
      testUtils.createEvent({ id: 2, start: '2026-10-05 10:00:00', end: '2026-10-07 00:00:30' }),
    ];

    expect(getAgendaViewEvents({ ...range, events })).toStrictEqual({
      '2026-10-01': [events[0]],
      '2026-10-05': [events[1]],
      '2026-10-06': [events[1]],
      '2026-10-07': [events[1]],
    });
  });

  it('throws on duplicated ids with the AgendaView name', () => {
    const event = testUtils.createEvent({
      id: 1,
      start: '2026-10-05 10:00:00',
      end: '2026-10-05 11:00:00',
    });

    expect(() => getAgendaViewEvents({ ...range, events: [event, { ...event }] })).toThrow(
      '[@mantine/schedule] AgendaView: Duplicated event ids found: 1'
    );
  });
});
