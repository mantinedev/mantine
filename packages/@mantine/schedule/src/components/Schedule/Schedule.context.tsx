import { createContext, use, useCallback } from 'react';
import { DayOfWeek } from '../../types';

export interface ScheduleLabels {
  day: string;
  week: string;
  month: string;
  year: string;
  allDay: string;
  weekday: string;
  timeSlot: string;
  today: string;
  next: string;
  previous: string;
  more: string;
  selectMonth: string;
  selectYear: string;
}

export interface ScheduleContextValue {
  /** Dayjs locale, `'en'` by default */
  locale: string;

  /** First day of the week, `1` (Monday) by default */
  firstDayOfWeek: DayOfWeek;

  /** Days considered weekends, `[0, 6]` (Sunday and Saturday) by default */
  weekendDays: DayOfWeek[];

  /** Labels used in Schedule component, English translations by default */
  labels: ScheduleLabels;
}

const defaultScheduleContextValue: ScheduleContextValue = {
  locale: 'en',
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labels: {
    today: 'Today',
    next: 'Next',
    previous: 'Previous',
    more: 'More',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    allDay: 'All day',
    weekday: 'Weekday',
    timeSlot: 'Time slot',
    selectMonth: 'Select month',
    selectYear: 'Select year',
  },
};

export const ScheduleContext = createContext<ScheduleContextValue>(defaultScheduleContextValue);

export function useScheduleContext(input?: Partial<ScheduleContextValue>) {
  const ctx = use(ScheduleContext);
  const getLocale = useCallback((input?: string) => input || ctx.locale, [ctx.locale]);

  const getFirstDayOfWeek = useCallback(
    (input?: DayOfWeek) => (typeof input === 'number' ? input : ctx.firstDayOfWeek),
    [ctx.firstDayOfWeek]
  );

  const getWeekendDays = useCallback(
    (input?: DayOfWeek[]) => (Array.isArray(input) ? input : ctx.weekendDays),
    [ctx.weekendDays]
  );

  return {
    ...ctx,
    ...input,
    labels: { ...ctx.labels, ...input?.labels },
    getLocale,
    getFirstDayOfWeek,
    getWeekendDays,
  };
}

export interface ScheduleProviderProps extends Omit<Partial<ScheduleContextValue>, 'labels'> {
  labels?: Partial<ScheduleLabels>;
  children: React.ReactNode;
}

export function ScheduleProvider({ children, labels, ...context }: ScheduleProviderProps) {
  return (
    <ScheduleContext
      value={{
        ...defaultScheduleContextValue,
        ...context,
        labels: { ...defaultScheduleContextValue.labels, ...labels },
      }}
    >
      {children}
    </ScheduleContext>
  );
}

ScheduleProvider.displayName = '@mantine/schedule/ScheduleProvider';
