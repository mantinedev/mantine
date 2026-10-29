import { expandRecurringEvents, type ScheduleEventData } from '@mantine/schedule';
import {
  applyBookingForm,
  cancelOccurrence,
  cancelSeries,
  placeBooking,
  toEvent,
} from './bookings';
import type { Booking } from './types';

const series: Booking = {
  id: 'sync',
  title: 'Team sync',
  roomId: 'harbor',
  start: '2026-11-02 10:00:00',
  end: '2026-11-02 10:30:00',
  organizer: 'Alex Kim',
  attendees: 5,
  repeatUntil: '2026-11-30',
};

const single: Booking = {
  id: 'retro',
  title: 'Retro',
  roomId: 'birch',
  start: '2026-11-03 10:00:00',
  end: '2026-11-03 11:00:00',
  organizer: 'Alex Kim',
  attendees: 4,
};

function occurrence(bookings: Booking[], start: string): ScheduleEventData {
  const events = expandRecurringEvents({
    events: bookings.map(toEvent),
    rangeStart: '2026-11-01 00:00:00',
    rangeEnd: '2026-12-31 00:00:00',
  });
  return events.find((event) => event.start === start)!;
}

describe('placeBooking', () => {
  it('moves a one-off booking to the new time and room', () => {
    const result = placeBooking(
      [single],
      toEvent(single),
      '2026-11-03 14:00:00',
      '2026-11-03 15:00:00',
      'cedar'
    );
    expect(result.bookings).toEqual([
      { ...single, start: '2026-11-03 14:00:00', end: '2026-11-03 15:00:00', roomId: 'cedar' },
    ]);
  });

  it('moves one occurrence of a series without changing the series', () => {
    const event = occurrence([series], '2026-11-09 10:00:00');
    const result = placeBooking([series], event, '2026-11-09 11:00:00', '2026-11-09 11:30:00');

    expect(result.bookings[0]).toEqual(series);
    expect(result.bookings[1]).toMatchObject({
      seriesId: 'sync',
      occurrenceStart: '2026-11-09 10:00:00',
      start: '2026-11-09 11:00:00',
    });
  });
});

describe('applyBookingForm', () => {
  it('shifts the whole series when an occurrence is moved in the form', () => {
    const result = applyBookingForm(
      [series],
      { kind: 'series', seriesId: 'sync', occurrenceStart: '2026-11-09 10:00:00' },
      {
        title: 'Team sync',
        roomId: 'harbor',
        start: '2026-11-09 11:00:00',
        end: '2026-11-09 12:00:00',
        attendees: 5,
        repeat: true,
        repeatUntil: '2026-11-30',
      }
    );

    expect(result.bookings[0]).toMatchObject({
      start: '2026-11-02 11:00:00',
      end: '2026-11-02 12:00:00',
    });
  });

  it('creates a booking organized by the current user', () => {
    const result = applyBookingForm(
      [],
      { kind: 'new' },
      {
        title: ' Kickoff ',
        roomId: 'atrium',
        start: '2026-11-03 09:00:00',
        end: '2026-11-03 09:30:00',
        attendees: '6',
        repeat: false,
        repeatUntil: null,
      },
      'new-id'
    );

    expect(result.bookings).toEqual([
      {
        id: 'new-id',
        title: 'Kickoff',
        roomId: 'atrium',
        start: '2026-11-03 09:00:00',
        end: '2026-11-03 09:30:00',
        attendees: 6,
        organizer: 'Alex Kim',
        repeatUntil: undefined,
      },
    ]);
  });
});

describe('cancelling', () => {
  it('skips one occurrence of a series', () => {
    const result = cancelOccurrence([series], {
      kind: 'series',
      seriesId: 'sync',
      occurrenceStart: '2026-11-09 10:00:00',
    });
    expect(result[0].exceptions).toEqual(['2026-11-09 10:00:00']);
  });

  it('skips the original slot of a moved occurrence', () => {
    const moved = placeBooking(
      [series],
      occurrence([series], '2026-11-09 10:00:00'),
      '2026-11-09 11:00:00',
      '2026-11-09 11:30:00'
    );
    const result = cancelOccurrence(moved.bookings, { kind: 'single', id: moved.changedIds[0] });

    expect(result).toHaveLength(1);
    expect(result[0].exceptions).toEqual(['2026-11-09 10:00:00']);
  });

  it('removes a series together with its moved occurrences', () => {
    const moved = placeBooking(
      [series, single],
      occurrence([series], '2026-11-09 10:00:00'),
      '2026-11-09 11:00:00',
      '2026-11-09 11:30:00'
    );
    expect(cancelSeries(moved.bookings, 'sync')).toEqual([single]);
  });
});
