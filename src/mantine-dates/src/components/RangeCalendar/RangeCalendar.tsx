import React, { useState, forwardRef } from 'react';
import { useMantineTheme } from '@mantine/core';
import dayjs from 'dayjs';
import { isSameDate } from '../../utils';
import { DayModifiers } from '../Month';
import { CalendarBase, CalendarBaseProps } from '../CalendarBase/CalendarBase';

export interface RangeCalendarProps extends Omit<CalendarBaseProps, 'value' | 'onChange'> {
  /** Selected dates */
  value: [Date | null, Date | null];

  /** Called when selected date changes */
  onChange(value: [Date, Date]): void;

  /** Allow one date to be selected as range */
  allowSingleDateInRange?: boolean;
}

export const RangeCalendar = forwardRef<HTMLDivElement, RangeCalendarProps>(
  (
    {
      value,
      onChange,
      dayStyle,
      onMouseLeave,
      __staticSelector = 'RangeCalendar',
      allowSingleDateInRange = false,
      amountOfMonths = 1,
      ...others
    }: RangeCalendarProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const [hoveredDay, setHoveredDay] = useState<Date>(null);
    const [pickedDate, setPickedDate] = useState<Date>(null);

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

    const dayStyles = (date: Date, modifiers: DayModifiers) => {
      const initialStyles = typeof dayStyle === 'function' ? dayStyle(date, modifiers) : null;

      if (shouldHighlightDate(date, modifiers)) {
        return {
          ...initialStyles,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.3)
              : theme.colors[theme.primaryColor][0],
          borderRadius: 0,
        };
      }

      return { ...initialStyles };
    };

    return (
      <CalendarBase
        dayStyle={dayStyles}
        onMouseLeave={handleMouseLeave}
        onDayMouseEnter={(date) => setHoveredDay(date)}
        onChange={setRangeDate}
        value={pickedDate}
        range={value}
        ref={ref}
        __staticSelector={__staticSelector}
        amountOfMonths={amountOfMonths}
        hideOutsideDates={amountOfMonths > 1}
        {...others}
      />
    );
  }
);

RangeCalendar.displayName = '@mantine/dates/RangeCalendar';
