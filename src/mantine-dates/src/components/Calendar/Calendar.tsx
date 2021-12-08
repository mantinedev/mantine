import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { MonthSettings, MonthStylesNames } from '../Month';
import { CalendarBase } from '../CalendarBase/CalendarBase';
import { DayModifiers } from '../Month/get-day-props/get-day-props';
import { CalendarLabelStylesNames } from './CalendarLabel/CalendarLabel';

export interface CalendarSettings extends MonthSettings {
  /** aria-label for next month arrow button */
  nextMonthLabel?: string;

  /** aria-label for previous month arrow button */
  previousMonthLabel?: string;

  /** Locale used for all labels formatting */
  locale?: string;

  /** Initial selected month */
  initialMonth?: Date | null;

  /** dayjs label format */
  labelFormat?: string;

  /** Set first day of the week */
  firstDayOfWeek?: FirstDayOfWeek;

  /** Amount of displayed months */
  amountOfMonths?: number;
}

export type CalendarStylesNames = Exclude<MonthStylesNames, 'root'> | CalendarLabelStylesNames;

export interface CalendarProps
  extends DefaultProps<CalendarStylesNames>,
    CalendarSettings,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current month */
  month?: Date;

  /** Selected date */
  value?: Date;

  /** Called when selected date changes */
  onChange?(value: Date): void;

  /** Called when month changes */
  onMonthChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      nextMonthLabel,
      previousMonthLabel,
      dayStyle,
      __staticSelector = 'Calendar',
      amountOfMonths = 1,
      ...others
    }: CalendarProps,
    ref
  ) => {
    const dayStyles = (date: Date, modifiers: DayModifiers) => {
      const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : null;
      const outsideStyles = modifiers.outside && amountOfMonths > 1 ? { display: 'none' } : null;
      return { ...initialStyles, ...outsideStyles };
    };

    return (
      <CalendarBase
        amountOfMonths={amountOfMonths}
        __staticSelector={__staticSelector}
        dayStyle={dayStyles}
        ref={ref}
        {...others}
      />
    );
  }
);

Calendar.displayName = '@mantine/dates/Calendar';
