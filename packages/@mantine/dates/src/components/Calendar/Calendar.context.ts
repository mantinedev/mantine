import { createContext, use } from 'react';
import { DataAttributes, GetStylesApi, MantineSize } from '@mantine/core';
import {
  CalendarLevel,
  ControlKeydownPayload,
  DateLabelFormat,
  DateStringValue,
} from '../../types';
import type { MonthWeekControlProps } from '../Month';
import { PickerControlProps } from '../PickerControl';
import type { CalendarEngineFactory } from './Calendar';
import { CalendarController } from './use-calendar/use-calendar';

export interface CalendarStylesApiProps {
  __staticSelector: string;
  classNames: Partial<Record<string, string>> | undefined;
  styles: Partial<Record<string, React.CSSProperties>> | undefined;
  unstyled: boolean | undefined;
  size: MantineSize | undefined;
  attributes: any;
}

export interface CalendarNavigation {
  getControlRef: (
    levelIndex: number,
    rowIndex: number,
    cellIndex: number,
    node: HTMLButtonElement
  ) => void;
  onControlKeyDown: (
    levelIndex: number,
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void;
  getDayRef: (
    levelIndex: number,
    rowIndex: number,
    cellIndex: number,
    node: HTMLButtonElement
  ) => void;
  onDayKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void;
  getWeekControlRef: (levelIndex: number, rowIndex: number, node: HTMLButtonElement) => void;
  onWeekControlKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: { rowIndex: number; date: DateStringValue }
  ) => void;
}

export type CalendarControlHandler = (
  event: React.MouseEvent<HTMLButtonElement>,
  date: DateStringValue
) => void;

export interface CalendarWeekControls {
  enabled: boolean;
  getWeekControlProps?: (weekStart: DateStringValue) => Partial<MonthWeekControlProps>;
}

export interface CalendarContextValue {
  controller: CalendarController;
  level: CalendarLevel;
  locale: string;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  static: boolean;
  getStyles: GetStylesApi<CalendarEngineFactory>;
  stylesApiProps: CalendarStylesApiProps;
  navigation: CalendarNavigation;
  weekControls: CalendarWeekControls;
  onDayClick?: CalendarControlHandler;
  onDayMouseEnter?: CalendarControlHandler;
  onControlClick?: CalendarControlHandler;
  onControlMouseEnter?: CalendarControlHandler;
}

const CalendarContext = createContext<CalendarContextValue | null>(null);

export const CalendarProvider = CalendarContext.Provider;

export function useCalendarContext(): CalendarContextValue {
  const ctx = use(CalendarContext);

  if (ctx === null) {
    throw new Error('Calendar component was not found in the component tree');
  }

  return ctx;
}

export function useOptionalCalendarContext(): CalendarContextValue | null {
  return use(CalendarContext);
}

export interface CalendarColumnContextValue {
  index: number;
  period: DateStringValue;
}

const CalendarColumnContext = createContext<CalendarColumnContextValue | null>(null);

export const CalendarColumnProvider = CalendarColumnContext.Provider;

export function useCalendarColumn(): CalendarColumnContextValue | null {
  return use(CalendarColumnContext);
}

export interface CalendarSelectionHandlers {
  onDayClick?: CalendarControlHandler;
  onDayMouseEnter?: CalendarControlHandler;
  onQuarterClick?: CalendarControlHandler;
  onQuarterMouseEnter?: CalendarControlHandler;
}

export interface CalendarOptions {
  yearBody?: 'months' | 'quarters';
  quartersListFormat?: DateLabelFormat;
  getQuarterControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;
  weekControls?: Pick<CalendarWeekControls, 'getWeekControlProps'>;
  selection?: CalendarSelectionHandlers;
}

const EMPTY_OPTIONS: CalendarOptions = {};

const CalendarOptionsContext = createContext<CalendarOptions>(EMPTY_OPTIONS);

export const CalendarOptionsProvider = CalendarOptionsContext.Provider;

export function useCalendarOptions(): CalendarOptions {
  return use(CalendarOptionsContext);
}
