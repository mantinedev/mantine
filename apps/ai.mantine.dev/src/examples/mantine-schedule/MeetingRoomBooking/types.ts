export interface Room {
  id: string;
  name: string;
  floor: number;
  capacity: number;
  equipment: string[];
}

export interface Booking {
  id: string;
  title: string;
  roomId: string;
  start: string;
  end: string;
  organizer: string;
  attendees: number;
  /** Last day of a weekly series, YYYY-MM-DD */
  repeatUntil?: string;
  /** Original starts of cancelled occurrences of a series */
  exceptions?: string[];
  /** Set on a moved occurrence of a series */
  seriesId?: string;
  occurrenceStart?: string;
}

export interface BookingPayload {
  organizer: string;
  attendees: number;
}

export interface BookingFormValues {
  title: string;
  roomId: string | null;
  start: string | null;
  end: string | null;
  attendees: number | string;
  repeat: boolean;
  repeatUntil: string | null;
}

/** What the booking form or a cancel action applies to */
export type BookingTarget =
  | { kind: 'new' }
  | { kind: 'single'; id: string }
  | { kind: 'series'; seriesId: string; occurrenceStart: string };
