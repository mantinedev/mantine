import React, { useState, forwardRef } from 'react';
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

      if (value[0] && isSameDate(date, value[0]) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDay(null);
        onChange([null, null]);
        return null;
      }

      onChange([date, null]);
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

    const isPickedDateFirstInRange = (date: Date, modifiers: DayModifiers) => {
      if (pickedDate instanceof Date && hoveredDay instanceof Date) {
        const result: [Date, Date] = [hoveredDay, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        return modifiers.selected && dayjs(date).isBefore(result[1]);
      }

      return false;
    };

    const isPickedDateLastInRange = (date: Date, modifiers: DayModifiers) => {
      if (pickedDate instanceof Date && hoveredDay instanceof Date) {
        const result: [Date, Date] = [hoveredDay, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        return modifiers.selected && dayjs(date).isAfter(result[0]);
      }

      return false;
    };

    return (
      <CalendarBase
        dayStyle={dayStyle}
        onMouseLeave={handleMouseLeave}
        onDayMouseEnter={(date) => setHoveredDay(date)}
        onChange={setRangeDate}
        value={pickedDate}
        range={value}
        ref={ref}
        __staticSelector={__staticSelector}
        amountOfMonths={amountOfMonths}
        hideOutsideDates={amountOfMonths > 1}
        isDateInRange={shouldHighlightDate}
        isDateFirstInRange={isPickedDateFirstInRange}
        isDateLastInRange={isPickedDateLastInRange}
        {...others}
      />
    );
  }
);

RangeCalendar.displayName = '@mantine/dates/RangeCalendar';
