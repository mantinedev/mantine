import type { UseFormReturnType } from '@mantine/form';

export type Repeat = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Frequency = Exclude<Repeat, 'none'>;
export type Weekday = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';
export type MonthlyBy = 'dayOfMonth' | 'weekdayOfMonth';
export type Ends = 'never' | 'after' | 'on';

export interface RecurringEventValues {
  title: string;
  allDay: boolean;
  /** `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DD` when allDay is on */
  start: string | null;
  end: string | null;
  timezone: string | null;
  location: string;
  description: string;
  repeat: Repeat;
  interval: number | string;
  weekdays: Weekday[];
  monthlyBy: MonthlyBy;
  ends: Ends;
  count: number | string;
  until: string | null;
  exceptions: string[];
}

export type MonthlyRule =
  | { by: 'dayOfMonth'; day: number }
  /** week is 1–4, or -1 for the last weekday of the month */
  | { by: 'weekdayOfMonth'; weekday: Weekday; week: number };

export type RecurrenceEnd =
  | { ends: 'never' }
  | { ends: 'after'; count: number }
  | { ends: 'on'; until: string };

export type Recurrence = {
  frequency: Frequency;
  interval: number;
  weekdays?: Weekday[];
  monthly?: MonthlyRule;
} & RecurrenceEnd;

export interface RecurringEventPayload {
  title: string;
  description: string;
  start: string | null;
  end: string | null;
  allDay: boolean;
  timezone: string | null;
  location: string;
  recurrence: Recurrence | null;
  exceptions: string[];
}

export type RecurringEventFormType = UseFormReturnType<RecurringEventValues, RecurringEventPayload>;
