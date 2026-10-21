import type { UseFormReturnType } from '@mantine/form';

export type Repeat = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Weekday = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';
export type MonthlyOn = 'dayOfMonth' | 'weekdayOfMonth';
export type SeriesEnd = 'never' | 'after' | 'on';

export interface RecurrenceValues {
  repeat: Repeat;
  interval: number | string;
  weekdays: Weekday[];
  monthlyOn: MonthlyOn;
  ends: SeriesEnd;
  count: number | string;
  until: string | null;
}

export interface RecurringEventValues {
  title: string;
  description: string;
  allDay: boolean;
  startDate: string | null;
  startTime: string;
  endDate: string | null;
  endTime: string;
  timezone: string | null;
  location: string;
  recurrence: RecurrenceValues;
  exceptions: string[];
}

export type RecurrenceEndPayload =
  | { type: 'never' }
  | { type: 'after'; count: number }
  | { type: 'on'; date: string };

export interface RecurrencePayload {
  repeat: Exclude<Repeat, 'none'>;
  interval: number;
  weekdays?: Weekday[];
  monthlyOn?: MonthlyOn;
  ends: RecurrenceEndPayload;
}

export interface EventPayload {
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

export type RecurringEventFormType = UseFormReturnType<RecurringEventValues, EventPayload>;
