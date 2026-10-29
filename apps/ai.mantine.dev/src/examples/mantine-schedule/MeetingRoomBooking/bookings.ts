import dayjs from 'dayjs';
import type { ScheduleEventData } from '@mantine/schedule';
import { CURRENT_USER, DATE_TIME_FORMAT } from './data';
import type { Booking, BookingFormValues, BookingPayload, BookingTarget } from './types';

let idCounter = 0;

export function createBookingId() {
  idCounter += 1;
  return `booking-${Date.now()}-${idCounter}`;
}

export function isOwnBooking(organizer: string | undefined) {
  return organizer === CURRENT_USER;
}

function weeklyRule(repeatUntil: string) {
  return `FREQ=WEEKLY;UNTIL=${dayjs(repeatUntil).format('YYYYMMDD')}T235959Z`;
}

export function toEvent(booking: Booking): ScheduleEventData<BookingPayload> {
  const own = isOwnBooking(booking.organizer);
  const event = {
    id: booking.id,
    title: booking.title,
    start: booking.start,
    end: booking.end,
    resourceId: booking.roomId,
    color: own ? 'blue' : 'gray',
    variant: own ? 'filled' : 'light',
    payload: { organizer: booking.organizer, attendees: booking.attendees },
  } as const;

  if (booking.repeatUntil) {
    return {
      ...event,
      recurrence: { rrule: weeklyRule(booking.repeatUntil), exdate: booking.exceptions ?? [] },
    };
  }

  if (booking.seriesId && booking.occurrenceStart) {
    return { ...event, recurringEventId: booking.seriesId, recurrenceId: booking.occurrenceStart };
  }

  return event;
}

/** The booking a click or drop on a calendar event refers to */
export function getTarget(event: ScheduleEventData): BookingTarget {
  if (event.recurringInstance?.isRecurringInstance) {
    return {
      kind: 'series',
      seriesId: String(event.recurringInstance.recurringEventId),
      occurrenceStart: event.recurringInstance.recurrenceId,
    };
  }

  return { kind: 'single', id: String(event.id) };
}

function shift(value: string, minutes: number) {
  return dayjs(value).add(minutes, 'minute').format(DATE_TIME_FORMAT);
}

function fromValues(values: BookingFormValues) {
  return {
    title: values.title.trim(),
    roomId: values.roomId!,
    start: values.start!,
    end: values.end!,
    attendees: Number(values.attendees),
  };
}

/**
 * Returns the bookings after the form is saved and the ids of the bookings that changed.
 * Editing an occurrence of a series edits the whole series: the series is shifted by the
 * same amount the occurrence was moved.
 */
export function applyBookingForm(
  bookings: Booking[],
  target: BookingTarget,
  values: BookingFormValues,
  newId = createBookingId()
): { bookings: Booking[]; changedIds: string[] } {
  const fields = fromValues(values);
  const repeatUntil = values.repeat && values.repeatUntil ? values.repeatUntil : undefined;

  if (target.kind === 'new') {
    const booking: Booking = { id: newId, organizer: CURRENT_USER, ...fields, repeatUntil };
    return { bookings: [...bookings, booking], changedIds: [newId] };
  }

  if (target.kind === 'single') {
    return {
      bookings: bookings.map((booking) => {
        if (booking.id !== target.id) {
          return booking;
        }
        const updated: Booking = { ...booking, ...fields };
        if (!booking.seriesId) {
          updated.repeatUntil = repeatUntil;
          updated.exceptions = repeatUntil ? booking.exceptions : undefined;
        }
        return updated;
      }),
      changedIds: [target.id],
    };
  }

  const series = bookings.find((booking) => booking.id === target.seriesId);
  if (!series) {
    return { bookings, changedIds: [] };
  }

  const others = bookings.filter(
    (booking) => booking.id !== series.id && booking.seriesId !== series.id
  );

  if (!repeatUntil) {
    const single: Booking = { id: series.id, organizer: series.organizer, ...fields };
    return { bookings: [...others, single], changedIds: [series.id] };
  }

  const delta = dayjs(fields.start).diff(target.occurrenceStart, 'minute');
  const duration = dayjs(fields.end).diff(fields.start, 'minute');
  const start = shift(series.start, delta);
  const updatedSeries: Booking = {
    ...series,
    ...fields,
    start,
    end: shift(start, duration),
    repeatUntil,
    exceptions: series.exceptions?.map((value) => shift(value, delta)),
  };
  const overrides = bookings
    .filter((booking) => booking.seriesId === series.id)
    .map((booking) => ({ ...booking, occurrenceStart: shift(booking.occurrenceStart!, delta) }));

  return {
    bookings: [...others, updatedSeries, ...overrides],
    changedIds: [series.id, ...overrides.map((booking) => booking.id)],
  };
}

/** Moves or resizes one occurrence; an occurrence of a series becomes an override */
export function placeBooking(
  bookings: Booking[],
  event: ScheduleEventData,
  start: string,
  end: string,
  roomId?: string
): { bookings: Booking[]; changedIds: string[] } {
  const target = getTarget(event);

  if (target.kind === 'series') {
    const series = bookings.find((booking) => booking.id === target.seriesId);
    if (!series) {
      return { bookings, changedIds: [] };
    }
    const override: Booking = {
      id: String(event.id),
      title: series.title,
      roomId: roomId ?? series.roomId,
      start,
      end,
      organizer: series.organizer,
      attendees: series.attendees,
      seriesId: series.id,
      occurrenceStart: target.occurrenceStart,
    };
    return { bookings: [...bookings, override], changedIds: [override.id] };
  }

  if (target.kind !== 'single') {
    return { bookings, changedIds: [] };
  }

  return {
    bookings: bookings.map((booking) =>
      booking.id === target.id
        ? { ...booking, start, end, roomId: roomId ?? booking.roomId }
        : booking
    ),
    changedIds: [target.id],
  };
}

/** The series a booking belongs to, or `undefined` for a one-off booking */
export function getSeriesId(bookings: Booking[], target: BookingTarget) {
  if (target.kind === 'series') {
    return target.seriesId;
  }
  if (target.kind === 'single') {
    return bookings.find((booking) => booking.id === target.id)?.seriesId;
  }
  return undefined;
}

export function cancelOccurrence(bookings: Booking[], target: BookingTarget): Booking[] {
  if (target.kind === 'new') {
    return bookings;
  }

  if (target.kind === 'series') {
    return bookings.map((booking) =>
      booking.id === target.seriesId
        ? { ...booking, exceptions: [...(booking.exceptions ?? []), target.occurrenceStart] }
        : booking
    );
  }

  const cancelled = bookings.find((booking) => booking.id === target.id);
  const rest = bookings.filter((booking) => booking.id !== target.id);
  if (!cancelled?.seriesId || !cancelled.occurrenceStart) {
    return rest;
  }

  return cancelOccurrence(rest, {
    kind: 'series',
    seriesId: cancelled.seriesId,
    occurrenceStart: cancelled.occurrenceStart,
  });
}

export function cancelSeries(bookings: Booking[], seriesId: string): Booking[] {
  return bookings.filter((booking) => booking.id !== seriesId && booking.seriesId !== seriesId);
}
