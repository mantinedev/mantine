import React, { forwardRef } from 'react';
import dayjs from 'dayjs';
import { DefaultProps, Group, useMantineTheme } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { FirstDayOfWeek } from '../../types';
import { Month, MonthSettings, MonthStylesNames } from '../Month';
import { DayModifiers } from '../Month/get-day-props/get-day-props';
import { CalendarLabelStylesNames } from './CalendarLabel/CalendarLabel';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { CalendarWrapper } from './CalendarWrapper/CalendarWrapper';
import { getDisabledState } from './get-disabled-state/get-disabled-state';

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
      labelFormat = 'MMMM YYYY',
      withSelect = false,
      yearsRange = { from: 2020, to: 2030 },
      dayClassName,
      dayStyle,
      disableOutsideEvents,
      minDate,
      maxDate,
      excludeDate,
      fullWidth = false,
      size = 'sm',
      __staticSelector = 'Calendar',
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
    const [_month, setMonth] = useUncontrolled({
      value: month,
      defaultValue: initialMonth,
      finalValue: new Date(),
      onChange: onMonthChange,
      rule: (val) => val instanceof Date,
    });

    const disabledState = getDisabledState({ month: _month, minDate, maxDate });
    const hasMultipleMonths = amountOfMonths > 1;

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
        <Group noWrap style={{ alignItems: 'flex-start' }}>
          {Array(amountOfMonths)
            .fill(0)
            .map((_, monthIndex) => {
              const isFirstMonth = monthIndex === 0;
              const isLastMonth = monthIndex === amountOfMonths - 1;
              const monthToRender = isFirstMonth
                ? _month
                : dayjs(_month).add(monthIndex, 'month').toDate();
              const hiddenMonth = isFirstMonth ? 'next' : isLastMonth ? 'prev' : 'both';

              return (
                <div key={`month-${monthIndex}`}>
                  <CalendarHeader
                    size={size}
                    nextMonthLabel={nextMonthLabel}
                    previousMonthLabel={previousMonthLabel}
                    previousMonthDisabled={disabledState.previousDisabled}
                    nextMonthDisabled={disabledState.nextDisabled}
                    onPreviousMonth={() => setMonth(dayjs(_month).subtract(1, 'month').toDate())}
                    onNextMonth={() => setMonth(dayjs(_month).add(1, 'month').toDate())}
                    classNames={classNames}
                    styles={styles}
                    locale={finalLocale}
                    withSelect={withSelect}
                    yearsRange={yearsRange}
                    month={monthToRender}
                    setMonth={setMonth}
                    labelFormat={labelFormat}
                    hiddenMonth={hasMultipleMonths ? hiddenMonth : undefined}
                    __staticSelector={
                      isFirstMonth ? __staticSelector : `${__staticSelector}-month-${monthIndex}`
                    }
                    monthLabel={monthLabel}
                    yearLabel={yearLabel}
                    preventFocus={preventFocus}
                  />

                  <Month
                    month={monthToRender}
                    value={value}
                    onChange={onChange}
                    dayClassName={dayClassName}
                    disableOutsideEvents={disableOutsideEvents}
                    minDate={minDate}
                    maxDate={maxDate}
                    excludeDate={excludeDate}
                    classNames={classNames}
                    styles={styles}
                    fullWidth={fullWidth}
                    preventFocus={preventFocus}
                    size={size}
                    locale={finalLocale}
                    firstDayOfWeek={firstDayOfWeek}
                    __staticSelector={__staticSelector}
                    dayStyle={dayStyles}
                  />
                </div>
              );
            })}
        </Group>
      </CalendarWrapper>
    );
  }
);

Calendar.displayName = '@mantine/dates/Calendar';
