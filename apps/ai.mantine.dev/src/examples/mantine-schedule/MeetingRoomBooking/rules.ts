import dayjs from 'dayjs';
import type { FormErrors } from '@mantine/form';
import { expandRecurringEvents, type ScheduleEventData } from '@mantine/schedule';
import { applyBookingForm, toEvent } from './bookings';
import { getRoom, OFFICE_HOURS } from './data';
import type { Booking, BookingFormValues, BookingTarget } from './types';

export const OFFICE_HOURS_TEXT = `Rooms can be booked ${OFFICE_HOURS[0]}–${OFFICE_HOURS[1]} on weekdays`;

function atTime(date: dayjs.Dayjs, time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return date.startOf('day').hour(hours).minute(minutes);
}

export function isWeekend(date: dayjs.ConfigType) {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
}

/** Why a booking from `start` to `end` is outside office hours, or `null` when it is inside */
export function getOfficeHoursError(start: string, end: string): string | null {
  const from = dayjs(start);
  const to = dayjs(end);

  if (isWeekend(from)) {
    return 'The office is closed on weekends';
  }

  const opens = atTime(from, OFFICE_HOURS[0]);
  const closes = atTime(from, OFFICE_HOURS[1]);

  if (from.isBefore(opens) || to.isAfter(closes)) {
    return `Office hours are ${OFFICE_HOURS[0]}–${OFFICE_HOURS[1]}`;
  }

  return null;
}

export function getCapacityError(
  roomId: string | number | undefined | null,
  attendees: number
): string | null {
  const room = getRoom(roomId);
  if (room && attendees > room.capacity) {
    return `${room.name} seats ${room.capacity} ${room.capacity === 1 ? 'person' : 'people'}`;
  }
  return null;
}

function overlaps(a: ScheduleEventData, b: ScheduleEventData) {
  return dayjs(a.start).isBefore(b.end) && dayjs(b.start).isBefore(a.end);
}

function isChanged(event: ScheduleEventData, changedIds: Set<string>) {
  return (
    changedIds.has(String(event.id)) ||
    (event.recurringInstance?.isRecurringInstance === true &&
      changedIds.has(String(event.recurringEventId)))
  );
}

function getRange(bookings: Booking[]) {
  const starts = bookings.map((booking) => dayjs(booking.start));
  const ends = bookings.map((booking) =>
    booking.repeatUntil ? dayjs(booking.repeatUntil).endOf('day') : dayjs(booking.end)
  );
  return {
    rangeStart: starts.reduce((min, value) => (value.isBefore(min) ? value : min)).toDate(),
    rangeEnd: ends.reduce((max, value) => (value.isAfter(max) ? value : max)).toDate(),
  };
}

/** First booking that one of the changed bookings overlaps in the same room */
export function findConflict(bookings: Booking[], changedIds: string[]) {
  const changedSet = new Set(changedIds);
  const changed = bookings.filter((booking) => changedSet.has(booking.id));
  if (changed.length === 0) {
    return null;
  }

  const occurrences = expandRecurringEvents({
    events: bookings.map(toEvent),
    ...getRange(changed),
  });
  const moved = occurrences.filter((event) => isChanged(event, changedSet));
  const still = occurrences.filter((event) => !isChanged(event, changedSet));

  for (const event of moved) {
    const conflict = still.find(
      (other) => other.resourceId === event.resourceId && overlaps(event, other)
    );
    if (conflict) {
      return conflict;
    }
  }

  return null;
}

export function describeConflict(conflict: ScheduleEventData) {
  const room = getRoom(conflict.resourceId);
  const start = dayjs(conflict.start);
  return `${room?.name} is booked ${start.format('ddd, MMM D')} ${start.format('HH:mm')}–${dayjs(conflict.end).format('HH:mm')} (${conflict.title})`;
}

export function validateBooking(
  values: BookingFormValues,
  bookings: Booking[],
  target: BookingTarget
): FormErrors {
  const errors: FormErrors = {};

  if (!values.title.trim()) {
    errors.title = 'Enter a title';
  }
  if (!values.roomId) {
    errors.roomId = 'Pick a room';
  }
  if (!values.start) {
    errors.start = 'Enter the start';
  }
  if (!values.end) {
    errors.end = 'Enter the end';
  }

  if (values.attendees === '' || Number(values.attendees) < 1) {
    errors.attendees = 'Enter the number of attendees';
  } else {
    const capacityError = getCapacityError(values.roomId, Number(values.attendees));
    if (capacityError) {
      errors.attendees = capacityError;
    }
  }

  if (values.start && values.end) {
    if (!dayjs(values.end).isAfter(values.start)) {
      errors.end = 'End must be after the start';
    } else if (!dayjs(values.end).isSame(values.start, 'day')) {
      errors.end = 'A booking starts and ends on the same day';
    } else {
      const officeHoursError = getOfficeHoursError(values.start, values.end);
      if (officeHoursError) {
        const startInside = !getOfficeHoursError(values.start, values.start);
        errors[startInside ? 'end' : 'start'] = officeHoursError;
      }
    }
  }

  if (values.repeat) {
    if (!values.repeatUntil) {
      errors.repeatUntil = 'Enter the last date';
    } else if (values.start && dayjs(values.repeatUntil).isBefore(values.start, 'day')) {
      errors.repeatUntil = 'Must be on or after the start date';
    }
  }

  if (Object.keys(errors).length === 0) {
    const result = applyBookingForm(bookings, target, values, '__candidate__');
    const conflict = findConflict(result.bookings, result.changedIds);
    if (conflict) {
      errors.start = describeConflict(conflict);
    }
  }

  return errors;
}
