import { findConflict, getCapacityError, getOfficeHoursError, validateBooking } from './rules';
import type { Booking, BookingFormValues } from './types';

const colleague: Booking = {
  id: 'review',
  title: 'Design review',
  roomId: 'maple',
  start: '2026-11-02 13:00:00',
  end: '2026-11-02 14:00:00',
  organizer: 'Jonas Weber',
  attendees: 4,
};

const own: Booking = {
  id: 'sync',
  title: 'Sync',
  roomId: 'maple',
  start: '2026-11-02 10:00:00',
  end: '2026-11-02 11:00:00',
  organizer: 'Alex Kim',
  attendees: 4,
};

function values(overrides: Partial<BookingFormValues>): BookingFormValues {
  return {
    title: 'Sync',
    roomId: 'maple',
    start: '2026-11-02 10:00:00',
    end: '2026-11-02 11:00:00',
    attendees: 4,
    repeat: false,
    repeatUntil: null,
    ...overrides,
  };
}

describe('getOfficeHoursError', () => {
  it('accepts a booking inside office hours', () => {
    expect(getOfficeHoursError('2026-11-02 08:00:00', '2026-11-02 19:00:00')).toBeNull();
  });

  it('rejects a booking that starts before 8:00', () => {
    expect(getOfficeHoursError('2026-11-02 07:45:00', '2026-11-02 09:00:00')).toBe(
      'Office hours are 08:00–19:00'
    );
  });

  it('rejects a booking that ends after 19:00', () => {
    expect(getOfficeHoursError('2026-11-02 18:30:00', '2026-11-02 19:15:00')).toBe(
      'Office hours are 08:00–19:00'
    );
  });

  it('rejects a booking on a weekend', () => {
    expect(getOfficeHoursError('2026-11-07 10:00:00', '2026-11-07 11:00:00')).toBe(
      'The office is closed on weekends'
    );
  });
});

describe('getCapacityError', () => {
  it('accepts as many attendees as the room seats', () => {
    expect(getCapacityError('cedar', 4)).toBeNull();
  });

  it('rejects more attendees than the room seats', () => {
    expect(getCapacityError('cedar', 5)).toBe('Cedar seats 4 people');
  });
});

describe('findConflict', () => {
  it('finds a booking that overlaps in the same room', () => {
    const moved = { ...own, start: '2026-11-02 13:30:00', end: '2026-11-02 14:30:00' };
    expect(findConflict([colleague, moved], ['sync'])?.title).toBe('Design review');
  });

  it('allows a booking that starts when the other one ends', () => {
    const moved = { ...own, start: '2026-11-02 14:00:00', end: '2026-11-02 15:00:00' };
    expect(findConflict([colleague, moved], ['sync'])).toBeNull();
  });

  it('allows the same time in another room', () => {
    const moved = {
      ...own,
      roomId: 'cedar',
      start: '2026-11-02 13:00:00',
      end: '2026-11-02 14:00:00',
    };
    expect(findConflict([colleague, moved], ['sync'])).toBeNull();
  });

  it('finds a conflict in a later week of a weekly booking', () => {
    const later = { ...colleague, start: '2026-11-16 10:30:00', end: '2026-11-16 11:30:00' };
    const series = { ...own, repeatUntil: '2026-11-30' };
    expect(findConflict([later, series], ['sync'])?.start).toBe('2026-11-16 10:30:00');
  });
});

describe('validateBooking', () => {
  it('does not report a booking as overlapping itself', () => {
    expect(validateBooking(values({}), [own, colleague], { kind: 'single', id: 'sync' })).toEqual(
      {}
    );
  });

  it('reports the overlapping booking on the start field', () => {
    const errors = validateBooking(
      values({ start: '2026-11-02 13:30:00', end: '2026-11-02 14:00:00' }),
      [colleague],
      {
        kind: 'new',
      }
    );
    expect(errors.start).toBe('Maple is booked Mon, Nov 2 13:00–14:00 (Design review)');
  });

  it('reports an end after office hours on the end field', () => {
    const errors = validateBooking(
      values({ start: '2026-11-02 18:00:00', end: '2026-11-02 19:30:00' }),
      [],
      { kind: 'new' }
    );
    expect(errors.end).toBe('Office hours are 08:00–19:00');
  });

  it('requires the end to be after the start', () => {
    const errors = validateBooking(
      values({ start: '2026-11-02 11:00:00', end: '2026-11-02 10:00:00' }),
      [],
      { kind: 'new' }
    );
    expect(errors.end).toBe('End must be after the start');
  });

  it('requires the repeat end date to be on or after the start date', () => {
    const errors = validateBooking(values({ repeat: true, repeatUntil: '2026-11-01' }), [], {
      kind: 'new',
    });
    expect(errors.repeatUntil).toBe('Must be on or after the start date');
  });
});
