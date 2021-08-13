import React, { useState } from 'react';
import { DefaultProps, useMantineTheme, hexToRgba } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import dayjs from 'dayjs';
import { isSameDate } from '../../utils';
import { Month } from '../Month/Month';
import { DayModifiers } from '../Month/get-day-props/get-day-props';
import { CalendarHeader } from '../Calendar/CalendarHeader/CalendarHeader';
import { CalendarWrapper } from '../Calendar/CalendarWrapper/CalendarWrapper';
import { getDisabledState } from '../Calendar/get-disabled-state/get-disabled-state';
import { CalendarSettings, CalendarStylesNames } from '../Calendar/Calendar';

export interface RangeCalendarProps
  extends DefaultProps<CalendarStylesNames>,
    CalendarSettings,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current month */
  month?: Date;

  /** Selected dates */
  value: [Date, Date];

  /** Called when selected date changes */
  onChange(value: [Date, Date]): void;

  /** Called when month changes */
  onMonthChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;
}

export function RangeCalendar({
  classNames,
  styles,
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
  onMouseLeave,
  __staticSelector = 'range-calendar',
  ...others
}: RangeCalendarProps) {
  const theme = useMantineTheme(themeOverride);
  const [hoveredDay, setHoveredDay] = useState<Date>(null);
  const [pickedDate, setPickedDate] = useState<Date>(null);

  const setRangeDate = (date: Date) => {
    if (pickedDate instanceof Date) {
      if (isSameDate(date, pickedDate)) {
        setPickedDate(null);
        setHoveredDay(null);
        return null;
      }

      const result: [Date, Date] = [date, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      onChange(result);
      setPickedDate(null);
      return null;
    }

    onChange([null, null]);
    setPickedDate(date);
    return null;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    typeof onMouseLeave === 'function' && onMouseLeave(event);
    setHoveredDay(null);
  };

  const shouldHighlightDate = (date: Date, modifiers: DayModifiers) => {
    if (pickedDate instanceof Date && hoveredDay instanceof Date) {
      const result: [Date, Date] = [hoveredDay, pickedDate];
      result.sort((a, b) => a.getTime() - b.getTime());
      return (
        !modifiers.selected &&
        dayjs(date).subtract(1, 'day').isBefore(result[1]) &&
        dayjs(date).add(1, 'day').isAfter(result[0])
      );
    }

    return false;
  };

  const [_month, setMonth] = useUncontrolled({
    value: month,
    defaultValue: initialMonth,
    finalValue: new Date(),
    onChange: onMonthChange,
    rule: (val) => val instanceof Date,
  });

  const disabledState = getDisabledState({ month: _month, minDate, maxDate });

  return (
    <CalendarWrapper size={size} fullWidth={fullWidth} onMouseLeave={handleMouseLeave} {...others}>
      <CalendarHeader
        size={size}
        themeOverride={themeOverride}
        nextMonthLabel={nextMonthLabel}
        previousMonthLabel={previousMonthLabel}
        previousMonthDisabled={disabledState.previousDisabled}
        nextMonthDisabled={disabledState.nextDisabled}
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
        range={value}
        value={pickedDate}
        onChange={setRangeDate}
        dayClassName={dayClassName}
        dayStyle={(date, modifiers) => {
          const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : {};
          if (shouldHighlightDate(date, modifiers)) {
            return {
              ...initialStyles,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? hexToRgba(theme.colors[theme.primaryColor][9], 0.3)
                  : theme.colors[theme.primaryColor][0],
              borderRadius: 0,
            };
          }

          return initialStyles;
        }}
        disableOutsideEvents={disableOutsideEvents}
        minDate={minDate}
        maxDate={maxDate}
        excludeDate={excludeDate}
        classNames={classNames}
        styles={styles}
        fullWidth={fullWidth}
        size={size}
        onDayMouseEnter={(date) => setHoveredDay(date)}
        __staticSelector={__staticSelector}
      />
    </CalendarWrapper>
  );
}

RangeCalendar.displayName = '@mantine/dates/RangeCalendar';
