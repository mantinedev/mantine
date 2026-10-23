import type { UseFormReturnType } from '@mantine/form';

export type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Weekday = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';
export type MonthlyMode = 'day' | 'weekday';
export type EndsMode = 'never' | 'after' | 'on';

export interface RecurringEventValues {
  title: string;
  description: string;
  allDay: boolean;
  /** `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DD` when `allDay` is on */
  start: string | null;
  end: string | null;
  timezone: string | null;
  location: string;
  repeats: boolean;
  frequency: Frequency;
  interval: number | string;
  weekdays: Weekday[];
  monthlyMode: MonthlyMode;
  ends: EndsMode;
  count: number | string;
  until: string | null;
  exceptions: string[];
}

export type MonthlyOn =
  | { type: 'day'; day: number }
  | { type: 'weekday'; weekday: Weekday; week: number };

export type RecurrenceEnd =
  | { type: 'never' }
  | { type: 'after'; count: number }
  | { type: 'on'; until: string };

export type RecurrencePayload =
  | { repeat: 'none' }
  | {
      repeat: Frequency;
      interval: number;
      weekdays?: Weekday[];
      monthlyOn?: MonthlyOn;
      ends: RecurrenceEnd;
    };

export interface RecurringEventPayload {
  title: string;
  description: string | null;
  start: string;
  end: string;
  allDay: boolean;
  timezone: string;
  location: string | null;
  recurrence: RecurrencePayload;
  exceptions?: string[];
}

export type RecurringEventFormType = UseFormReturnType<RecurringEventValues, RecurringEventPayload>;
