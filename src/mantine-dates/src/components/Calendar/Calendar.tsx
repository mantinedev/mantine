import React from 'react';
import dayjs from 'dayjs';
import { DefaultProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { Month, MonthSettings, MonthStylesNames } from '../Month/Month';
import { CalendarLabelStylesNames } from './CalendarLabel/CalendarLabel';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import { CalendarWrapper } from './CalendarWrapper/CalendarWrapper';

export interface CalendarSettings extends MonthSettings {
  /** aria-label for next month arrow button */
  nextMonthLabel?: string;

  /** aria-label for previous month arrow button */
  previousMonthLabel?: string;

  /** Locale used for all labels formatting */
  locale?: string;

  /** Initial selected month */
  initialMonth?: Date;

  /** dayjs label format */
  labelFormat?: string;

  /** Replace calendar label with month and year selects */
  withSelect?: boolean;

  /** Years range for year select */
  yearsRange?: { from: number; to: number };
}

export type CalendarStylesNames = Exclude<MonthStylesNames, 'root'> | CalendarLabelStylesNames;

interface CalendarProps
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

export function Calendar({
  classNames,
  styles,
  style,
  locale = 'en',
  themeOverride,
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
  __staticSelector = 'calendar',
  ...others
}: CalendarProps) {
  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  const nextDisabled = maxDate instanceof Date && dayjs(_month).endOf('month').isAfter(maxDate);
  const previousDisabled =
    minDate instanceof Date && dayjs(_month).startOf('month').isBefore(minDate);

  return (
    <CalendarWrapper size={size} fullWidth={fullWidth} {...others}>
      <CalendarHeader
        size={size}
        themeOverride={themeOverride}
        nextMonthLabel={nextMonthLabel}
        previousMonthLabel={previousMonthLabel}
        previousMonthDisabled={previousDisabled}
        nextMonthDisabled={nextDisabled}
        onPreviousMonth={() => setMonth(dayjs(_month).subtract(1, 'month').toDate())}
        onNextMonth={() => setMonth(dayjs(_month).add(1, 'month').toDate())}
        classNames={classNames}
        styles={styles}
        locale={locale}
        withSelect={withSelect}
        yearsRange={yearsRange}
        month={_month}
        setMonth={setMonth}
        labelFormat={labelFormat}
        __staticSelector={__staticSelector}
      />

      <Month
        themeOverride={themeOverride}
        month={_month}
        value={value}
        onChange={onChange}
        dayClassName={dayClassName}
        dayStyle={dayStyle}
        disableOutsideEvents={disableOutsideEvents}
        minDate={minDate}
        maxDate={maxDate}
        excludeDate={excludeDate}
        classNames={classNames as any}
        styles={styles as any}
        fullWidth={fullWidth}
        size={size}
        __staticSelector={__staticSelector}
      />
    </CalendarWrapper>
  );
}

Calendar.displayName = '@mantine/dates/Calendar';
