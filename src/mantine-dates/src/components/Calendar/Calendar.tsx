import React, { forwardRef } from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { MonthSettings, MonthStylesNames } from '../Month';
import { CalendarBase } from '../CalendarBase/CalendarBase';
import { DayModifiers } from '../Month/get-day-props/get-day-props';
import { CalendarLabelStylesNames } from './CalendarLabel/CalendarLabel';
import { CalendarWrapper } from './CalendarWrapper/CalendarWrapper';

export interface CalendarSettings extends MonthSettings {
  /** aria-label for next month arrow button */
  nextMonthLabel?: string;

  /** aria-label for previous month arrow button */
  previousMonthLabel?: string;

  /** aria-label for month select */
  monthLabel?: string;

  /** aria-label for year select */
  yearLabel?: string;

  /** Locale used for all labels formatting */
  locale?: string;

  /** Initial selected month */
  initialMonth?: Date | null;

  /** dayjs label format */
  labelFormat?: string;

  /** Replace calendar label with month and year selects */
  withSelect?: boolean;

  /** Years range for year select */
  yearsRange?: { from: number; to: number };

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
      classNames,
      styles,
      locale,
      nextMonthLabel,
      previousMonthLabel,
      initialMonth,
      month,
      onMonthChange,
      value,
      onChange,
      // yearsRange = { from: 2020, to: 2030 },
      dayClassName,
      dayStyle,
      disableOutsideEvents,
      minDate,
      maxDate,
      excludeDate,
      fullWidth = false,
      size = 'sm',
      // __staticSelector = 'Calendar',
      monthLabel,
      yearLabel,
      preventFocus,
      firstDayOfWeek = 'monday',
      amountOfMonths = 1,
      ...others
    }: CalendarProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const finalLocale = locale || theme.datesLocale;

    const dayStyles = (date: Date, modifiers: DayModifiers) => {
      const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : null;
      const outsideStyles = modifiers.outside && amountOfMonths > 1 ? { display: 'none' } : null;
      return { ...initialStyles, ...outsideStyles };
    };

    return (
      <CalendarWrapper
        size={size}
        fullWidth={fullWidth}
        ref={ref}
        amountOfMonths={amountOfMonths}
        {...others}
      >
        <CalendarBase
          amountOfMonths={amountOfMonths}
          month={month}
          initialMonth={initialMonth}
          onMonthChange={onMonthChange}
          value={value}
          onChange={onChange}
          dayClassName={dayClassName}
          disableOutsideEvents={disableOutsideEvents}
          minDate={minDate}
          maxDate={maxDate}
          excludeDate={excludeDate}
          // classNames={classNames}
          // styles={styles}
          fullWidth={fullWidth}
          preventFocus={preventFocus}
          size={size}
          locale={finalLocale}
          firstDayOfWeek={firstDayOfWeek}
          // __staticSelector={__staticSelector}
          dayStyle={dayStyles}
        />
      </CalendarWrapper>
    );
  }
);

Calendar.displayName = '@mantine/dates/Calendar';
