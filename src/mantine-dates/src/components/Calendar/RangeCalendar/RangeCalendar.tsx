import React, { useState } from 'react';
import { DefaultProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import dayjs from 'dayjs';
import { isSameDate } from '../../../utils';
import { Month } from '../../Month/Month';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { CalendarWrapper } from '../CalendarWrapper/CalendarWrapper';
import { getDisabledState } from '../get-disabled-state/get-disabled-state';
import { CalendarSettings, CalendarStylesNames } from '../Calendar';

interface RangeCalendarProps
  extends DefaultProps<CalendarStylesNames>,
    CalendarSettings,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current month */
  month?: Date;

  /** Selected dates */
  range: [Date, Date];

  /** Called when selected date changes */
  onRangeChange(value: [Date, Date]): void;

  /** Called when month changes */
  onMonthChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;
}

export function RangeCalendar({
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
  range,
  onRangeChange,
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
  __staticSelector = 'calendar',
  ...others
}: RangeCalendarProps) {
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
      onRangeChange(result);
      setPickedDate(null);
      return null;
    }

    onRangeChange([null, null]);
    setPickedDate(date);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    typeof onMouseLeave === 'function' && onMouseLeave(event);
    setHoveredDay(null);
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
        range={range}
        value={pickedDate}
        onChange={setRangeDate}
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
        onDayMouseEnter={(date) => setHoveredDay(date)}
        __staticSelector={__staticSelector}
      />
    </CalendarWrapper>
  );
}

RangeCalendar.displayName = '@mantine/dates/RangeCalendar';
