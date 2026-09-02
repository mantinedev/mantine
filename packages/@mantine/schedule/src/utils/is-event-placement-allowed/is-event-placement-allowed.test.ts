import { testUtils } from '../../test-utils';
import { isEventPlacementAllowed } from './is-event-placement-allowed';

const moving = testUtils.createEvent({
  id: 'moving',
  start: '2025-01-15 10:00:00',
  end: '2025-01-15 11:00:00',
});

describe('@mantine/schedule/is-event-placement-allowed', () => {
  it('allows a placement that does not overlap any event', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 14:00:00',
      end: '2025-01-15 15:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('rejects a placement that overlaps one event and reports it as a conflict', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: false, conflicts: [other] });
  });

  it('reports every overlapping event as a conflict', () => {
    const first = testUtils.createEvent({
      id: 'first',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    const second = testUtils.createEvent({
      id: 'second',
      start: '2025-01-15 11:30:00',
      end: '2025-01-15 12:15:00',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [first, second],
      preventEventOverlap: true,
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([first, second]);
  });

  it('does not treat the moving event itself as a conflict', () => {
    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 10:30:00',
        end: '2025-01-15 11:30:00',
        events: [moving],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('does not treat another occurrence of the same series as a conflict', () => {
    const occurrence = testUtils.createEvent({
      id: 'series-2025-01-15',
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
      recurringEventId: 'series',
      recurrenceId: '2025-01-15 10:00:00',
    });

    const sameOccurrence = testUtils.createEvent({
      id: 'other-instance-id',
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
      recurringEventId: 'series',
      recurrenceId: '2025-01-15 10:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: occurrence,
        start: '2025-01-15 10:30:00',
        end: '2025-01-15 11:30:00',
        events: [sameOccurrence],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('treats a different occurrence of the same series as a conflict', () => {
    const occurrence = testUtils.createEvent({
      id: 'series-2025-01-15',
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
      recurringEventId: 'series',
      recurrenceId: '2025-01-15 10:00:00',
    });

    const otherOccurrence = testUtils.createEvent({
      id: 'series-2025-01-16',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
      recurringEventId: 'series',
      recurrenceId: '2025-01-16 10:00:00',
    });

    const result = isEventPlacementAllowed({
      event: occurrence,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [otherOccurrence],
      preventEventOverlap: true,
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([otherOccurrence]);
  });

  it('ignores background events', () => {
    const background = testUtils.createEvent({
      id: 'background',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
      display: 'background',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [background],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('ignores all-day events when the moving event is timed', () => {
    const allDay = testUtils.createEvent({
      id: 'all-day',
      start: '2025-01-15 00:00:00',
      end: '2025-01-16 00:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [allDay],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('ignores timed events when the moving event is all-day', () => {
    const timed = testUtils.createEvent({
      id: 'timed',
      start: '2025-01-16 12:00:00',
      end: '2025-01-16 13:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-16 00:00:00',
        end: '2025-01-17 00:00:00',
        events: [timed],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('treats another all-day event as a conflict when the moving event is all-day', () => {
    const allDay = testUtils.createEvent({
      id: 'all-day',
      start: '2025-01-16 00:00:00',
      end: '2025-01-17 00:00:00',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-16 00:00:00',
      end: '2025-01-17 00:00:00',
      events: [allDay],
      preventEventOverlap: true,
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([allDay]);
  });

  it('treats a multi-day all-day event as all-day', () => {
    const allDay = testUtils.createEvent({
      id: 'all-day',
      start: '2025-01-17 00:00:00',
      end: '2025-01-18 00:00:00',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 00:00:00',
      end: '2025-01-18 00:00:00',
      events: [allDay],
      preventEventOverlap: true,
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([allDay]);
  });

  it('ignores a timed event when the moving event spans several whole days', () => {
    const timed = testUtils.createEvent({
      id: 'timed',
      start: '2025-01-16 12:00:00',
      end: '2025-01-16 13:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 00:00:00',
        end: '2025-01-18 00:00:00',
        events: [timed],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('allows a placement that only touches another event', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 13:00:00',
      end: '2025-01-15 14:00:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
        preventEventOverlap: true,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('allows any placement when preventEventOverlap is false', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
        preventEventOverlap: false,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('allows any placement when preventEventOverlap is not set', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('only checks events of the target resource when resourceId is given', () => {
    const sameResource = testUtils.createEvent({
      id: 'same-resource',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
      resourceId: 'room-b',
    });

    const otherResource = testUtils.createEvent({
      id: 'other-resource',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
      resourceId: 'room-a',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [otherResource, sameResource],
      preventEventOverlap: true,
      resourceId: 'room-b',
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([sameResource]);
  });

  it('rejects the overlap when the preventEventOverlap function returns true', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [other],
      preventEventOverlap: () => true,
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([other]);
  });

  it('allows the overlap when the preventEventOverlap function returns false', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    expect(
      isEventPlacementAllowed({
        event: moving,
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        events: [other],
        preventEventOverlap: () => false,
      })
    ).toEqual({ allowed: true, conflicts: [] });
  });

  it('calls the preventEventOverlap function with the still event and the moving event', () => {
    const other = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    const preventEventOverlap = jest.fn().mockReturnValue(true);

    isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [other],
      preventEventOverlap,
    });

    expect(preventEventOverlap).toHaveBeenCalledTimes(1);
    expect(preventEventOverlap.mock.calls[0][0]).toBe(other);
    expect(preventEventOverlap.mock.calls[0][1]).toMatchObject({
      id: 'moving',
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
    });
  });

  it('only reports events the preventEventOverlap function forbids as conflicts', () => {
    const allowed = testUtils.createEvent({
      id: 'allowed',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });

    const forbidden = testUtils.createEvent({
      id: 'forbidden',
      start: '2025-01-15 11:30:00',
      end: '2025-01-15 12:15:00',
    });

    const result = isEventPlacementAllowed({
      event: moving,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      events: [allowed, forbidden],
      preventEventOverlap: (stillEvent) => stillEvent.id === 'forbidden',
    });

    expect(result.allowed).toBe(false);
    expect(result.conflicts).toEqual([forbidden]);
  });
});
