import { createContext } from 'react';
import { DayOfWeek } from '../types';

export interface ScheduleLabels {
  week: string;
  allDay: string;
  weekday: string;
  timeSlot: string;
}

export interface DatesProviderValue {
  locale: string;
  firstDayOfWeek: DayOfWeek;
  weekendDays: DayOfWeek[];
  labelSeparator: string;
  consistentWeeks: boolean;
  labels: ScheduleLabels;
}

export type DatesProviderSettings = Partial<DatesProviderValue>;

export const DATES_PROVIDER_DEFAULT_SETTINGS: DatesProviderValue = {
  locale: 'en',
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: '–',
  consistentWeeks: false,
  labels: {
    week: 'Week',
    allDay: 'All day',
    weekday: 'Weekday',
    timeSlot: 'Time slot',
  },
};

export const DatesProviderContext = createContext(DATES_PROVIDER_DEFAULT_SETTINGS);

export interface DatesProviderProps {
  settings: DatesProviderSettings;
  children?: React.ReactNode;
}

export function DatesProvider({ settings, children }: DatesProviderProps) {
  return (
    <DatesProviderContext value={{ ...DATES_PROVIDER_DEFAULT_SETTINGS, ...settings }}>
      {children}
    </DatesProviderContext>
  );
}
