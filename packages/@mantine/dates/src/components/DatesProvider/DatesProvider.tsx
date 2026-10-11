import { createContext } from 'react';
import { DayOfWeek } from '../../types';

export interface DatesProviderValue {
  /** `dayjs` locale used for formatting, the locale module must be imported separately @default 'en' */
  locale: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday @default 1 */
  firstDayOfWeek: DayOfWeek;

  /** Indices of weekend days, 0-6, where 0 – Sunday and 6 – Saturday @default [0, 6] */
  weekendDays: DayOfWeek[];

  /** Separator between start and end dates in range picker inputs value @default '–' */
  labelSeparator: string;

  /** If set, every month has 6 weeks @default false */
  consistentWeeks: boolean;

  /** Label of the submit button in picker inputs dropdowns @default 'Save' */
  submitButtonLabel: string;
}

export type DatesProviderSettings = Partial<DatesProviderValue>;

export const DATES_PROVIDER_DEFAULT_SETTINGS: DatesProviderValue = {
  locale: 'en',
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: '–',
  consistentWeeks: false,
  submitButtonLabel: 'Save',
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

export namespace DatesProvider {
  export type Props = DatesProviderProps;
  export type Settings = DatesProviderSettings;
}
