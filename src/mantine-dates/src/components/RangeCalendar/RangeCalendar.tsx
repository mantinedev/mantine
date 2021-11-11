import React, { useState, forwardRef } from 'react';
import { DefaultProps, useMantineTheme, Group } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import dayjs from 'dayjs';
import { isSameDate, isSameMonth } from '../../utils';
import { FirstDayOfWeek } from '../../types';
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
  value: [Date | null, Date | null];

  /** Called when selected date changes */
  onChange(value: [Date, Date]): void;

  /** Called when month changes */
  onMonthChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;

  /** Set first day of the week */
  firstDayOfWeek?: FirstDayOfWeek;

  /** Allow one date to be selected as range */
  allowSingleDateInRange?: boolean;
}

export const RangeCalendar = forwardRef<HTMLDivElement, RangeCalendarProps>(
  (
    {
      classNames,
      styles,
      locale = 'en',
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
      firstDayOfWeek = 'monday',
      allowSingleDateInRange = false,
      amountOfMonths = 1,
      ...others
    }: RangeCalendarProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const [hoveredDay, setHoveredDay] = useState<Date>(null);
    const [pickedDate, setPickedDate] = useState<Date>(null);
    const hasMultipleMonths = amountOfMonths > 1;

    const setRangeDate = (date: Date) => {
      if (pickedDate instanceof Date) {
        if (isSameDate(date, pickedDate) && !allowSingleDateInRange) {
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

    const shouldHighlightDate = (date: Date, modifiers: DayModifiers, currentMonth: Date) => {
      const isInCurrentMonth = hasMultipleMonths ? isSameMonth(date, currentMonth) : true;
      if (pickedDate instanceof Date && hoveredDay instanceof Date && isInCurrentMonth) {
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

    const disabledState = getDisabledState({
      month: _month,
      minDate,
      maxDate,
      amountOfMonths,
    });

    const dayStyles = (date: Date, modifiers: DayModifiers, currentMonth: Date) => {
      const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : {};
      if (shouldHighlightDate(date, modifiers, currentMonth)) {
        return {
          ...initialStyles,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.3)
              : theme.colors[theme.primaryColor][0],
          borderRadius: 0,
        };
      }

      return initialStyles;
    };

    return (
      <CalendarWrapper
        size={size}
        fullWidth={fullWidth}
        amountOfMonths={amountOfMonths}
        onMouseLeave={handleMouseLeave}
        ref={ref}
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
                    locale={locale}
                    withSelect={withSelect}
                    yearsRange={yearsRange}
                    month={monthToRender}
                    setMonth={setMonth}
                    labelFormat={labelFormat}
                    hiddenMonth={hasMultipleMonths ? hiddenMonth : undefined}
                    __staticSelector={
                      isFirstMonth ? __staticSelector : `${__staticSelector}-month-${monthIndex}`
                    }
                  />

                  <Month
                    month={monthToRender}
                    range={value}
                    value={pickedDate}
                    onChange={setRangeDate}
                    dayClassName={dayClassName}
                    dayStyle={(date, modifiers) => dayStyles(date, modifiers, monthToRender)}
                    disableOutsideDayStyle={hasMultipleMonths}
                    disableOutsideEvents={disableOutsideEvents}
                    minDate={minDate}
                    maxDate={maxDate}
                    excludeDate={excludeDate}
                    classNames={classNames}
                    styles={styles}
                    fullWidth={fullWidth}
                    size={size}
                    onDayMouseEnter={(date) => setHoveredDay(date)}
                    firstDayOfWeek={firstDayOfWeek}
                    __staticSelector={
                      isFirstMonth ? __staticSelector : `${__staticSelector}-month-${monthIndex}`
                    }
                  />
                </div>
              );
            })}
        </Group>
      </CalendarWrapper>
    );
  }
);

RangeCalendar.displayName = '@mantine/dates/RangeCalendar';
