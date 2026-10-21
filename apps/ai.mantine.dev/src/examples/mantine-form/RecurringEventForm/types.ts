import type { UseFormReturnType } from '@mantine/form';

export type Repeat = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Frequency = Exclude<Repeat, 'none'>;
export type Weekday = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';
export type MonthlyMode = 'dayOfMonth' | 'weekdayOfMonth';
export type SeriesEnd = 'never' | 'after' | 'on';

export interface RecurringEventValues {
  title: string;
  description: string;
  /** `YYYY-MM-DD HH:mm:ss`, the time is kept while All day is on */
  start: string | null;
  end: string | null;
  allDay: boolean;
  timezone: string;
  location: string;
  repeat: Repeat;
  interval: number | string;
  weekdays: Weekday[];
  monthlyMode: MonthlyMode;
  ends: SeriesEnd;
  count: number | string;
  until: string | null;
  exceptions: string[];
}

export type MonthlyPayload =
  | { type: 'dayOfMonth'; day: number }
  | { type: 'weekdayOfMonth'; week: number; weekday: Weekday };

export type SeriesEndPayload =
  | { type: 'never' }
  | { type: 'after'; count: number }
  | { type: 'on'; date: string };

export interface RecurrencePayload {
  frequency: Frequency;
  interval: number;
  weekdays?: Weekday[];
  monthly?: MonthlyPayload;
  ends: SeriesEndPayload;
}

export interface RecurringEventPayload {
  title: string;
  description: string;
  start: string;
  end: string;
  allDay: boolean;
  timezone: string;
  location: string;
  recurrence: RecurrencePayload | null;
  exceptions: string[];
}

export type RecurringEventFormType = UseFormReturnType<RecurringEventValues, RecurringEventPayload>;
