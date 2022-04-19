import React, { forwardRef } from 'react';
import {
  DefaultProps,
  Text,
  Box,
  MantineSize,
  ClassNames,
  useMantineDefaultProps,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
import { FirstDayOfWeek } from '../../types';
import { getMonthDays, getWeekdaysNames, isSameDate } from '../../utils';
import { Day, DayStylesNames } from './Day/Day';
import { getDayProps } from './get-day-props/get-day-props';
import { DayKeydownPayload, DayModifiers } from './types';
import useStyles from './Month.styles';

export interface MonthSettings {
  /** Adds className to day button based on date and modifiers */
  dayClassName?(date: Date, modifiers: DayModifiers): string;

  /** Adds style to day button based on date and modifiers */
  dayStyle?(date: Date, modifiers: DayModifiers): React.CSSProperties;

  /** When true dates that are outside of given month cannot be clicked or focused */
  disableOutsideEvents?: boolean;

  /** Minimum possible date */
  minDate?: Date;

  /** Maximum possible date */
  maxDate?: Date;

  /** Callback function to determine if day should be disabled */
  excludeDate?(date: Date): boolean;

  /** Set to false to remove weekdays row */
  hideWeekdays?: boolean;

  /** Controls month days font-size and height */
  size?: MantineSize;

  /** Set to true to make calendar take 100% of container width */
  fullWidth?: boolean;

  /** Prevent focusing upon clicking */
  preventFocus?: boolean;

  /** Should focusable days have tabIndex={0}? */
  focusable?: boolean;

  /** Set first day of the week */
  firstDayOfWeek?: FirstDayOfWeek;

  /** Remove outside dates */
  hideOutsideDates?: boolean;

  /** Should date be displayed as in range */
  isDateInRange?(date: Date, modifiers: DayModifiers): boolean;

  /** Should date be displayed as first in range */
  isDateFirstInRange?(date: Date, modifiers: DayModifiers): boolean;

  /** Should date be displayed as last in range */
  isDateLastInRange?(date: Date, modifiers: DayModifiers): boolean;
}

export type MonthStylesNames = ClassNames<typeof useStyles> | DayStylesNames;

export interface MonthProps
  extends DefaultProps<MonthStylesNames>,
    MonthSettings,
    Omit<React.ComponentPropsWithoutRef<'table'>, 'onChange' | 'value'> {
  /** Date at which month should be shown */
  month: Date;

  /** Locale is used to get weekdays names with dayjs format */
  locale?: string;

  /** Selected date or an array of selected dates */
  value?: Date | Date[];

  /** Selected range */
  range?: [Date, Date];

  /** Called when day is selected */
  onChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;

  /** Called when onMouseEnter event fired on day button */
  onDayMouseEnter?(date: Date, event: React.MouseEvent): void;

  /** Get days buttons refs */
  daysRefs?: HTMLButtonElement[][];

  /** Called when keydown event is registered on day */
  onDayKeyDown?(payload: DayKeydownPayload, event: React.KeyboardEvent<HTMLButtonElement>): void;

  /** Render day based on the date */
  renderDay?(date: Date): React.ReactNode;

  /** dayjs label format for weekday heading */
  weekdayLabelFormat?: string;
}

const no = () => false;

const defaultProps: Partial<MonthProps> = {
  disableOutsideEvents: false,
  hideWeekdays: false,
  __staticSelector: 'Month',
  size: 'sm',
  fullWidth: false,
  preventFocus: false,
  focusable: true,
  firstDayOfWeek: 'monday',
  hideOutsideDates: false,
};

export const Month = forwardRef<HTMLTableElement, MonthProps>((props: MonthProps, ref) => {
  const {
    className,
    month,
    value,
    onChange,
    disableOutsideEvents,
    locale,
    dayClassName,
    dayStyle,
    classNames,
    styles,
    minDate,
    maxDate,
    excludeDate,
    onDayMouseEnter,
    range,
    hideWeekdays,
    __staticSelector,
    size,
    fullWidth,
    preventFocus,
    focusable,
    firstDayOfWeek,
    onDayKeyDown,
    daysRefs,
    hideOutsideDates,
    isDateInRange = no,
    isDateFirstInRange = no,
    isDateLastInRange = no,
    renderDay,
    weekdayLabelFormat,
    ...others
  } = useMantineDefaultProps('Month', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { fullWidth },
    { classNames, styles, name: __staticSelector }
  );
  const finalLocale = locale || theme.datesLocale;
  const days = getMonthDays(month, firstDayOfWeek);

  const weekdays = getWeekdaysNames(finalLocale, firstDayOfWeek, weekdayLabelFormat).map(
    (weekday) => (
      <th className={classes.weekdayCell} key={weekday}>
        <Text size={size} className={classes.weekday}>
          {weekday.length >= 2 ? upperFirst(weekday) : weekday}
        </Text>
      </th>
    )
  );

  const hasValue = Array.isArray(value)
    ? value.every((item) => item instanceof Date)
    : value instanceof Date;

  const hasValueInMonthRange =
    value instanceof Date &&
    dayjs(value).isAfter(dayjs(month).startOf('month')) &&
    dayjs(value).isBefore(dayjs(month).endOf('month'));

  const rows = days.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const dayProps = getDayProps({
        date,
        month,
        hasValue,
        minDate,
        maxDate,
        value,
        excludeDate,
        disableOutsideEvents,
        range,
      });

      const onKeyDownPayload = { rowIndex, cellIndex, date };

      return (
        <td className={classes.cell} key={cellIndex}>
          <Day
            ref={(button) => {
              if (daysRefs) {
                if (!Array.isArray(daysRefs[rowIndex])) {
                  // eslint-disable-next-line no-param-reassign
                  daysRefs[rowIndex] = [];
                }

                // eslint-disable-next-line no-param-reassign
                daysRefs[rowIndex][cellIndex] = button;
              }
            }}
            onClick={() => typeof onChange === 'function' && onChange(date)}
            onMouseDown={(event) => preventFocus && event.preventDefault()}
            value={date}
            outside={dayProps.outside}
            weekend={dayProps.weekend}
            inRange={dayProps.inRange || isDateInRange(date, dayProps)}
            firstInRange={dayProps.firstInRange || isDateFirstInRange(date, dayProps)}
            lastInRange={dayProps.lastInRange || isDateLastInRange(date, dayProps)}
            firstInMonth={
              hideOutsideDates
                ? isSameDate(date, dayjs(month).startOf('month').toDate())
                : cellIndex === 0 && rowIndex === 0
            }
            selected={dayProps.selected || dayProps.selectedInRange}
            hasValue={hasValueInMonthRange}
            onKeyDown={(event) =>
              typeof onDayKeyDown === 'function' && onDayKeyDown(onKeyDownPayload, event)
            }
            className={typeof dayClassName === 'function' ? dayClassName(date, dayProps) : null}
            style={typeof dayStyle === 'function' ? dayStyle(date, dayProps) : null}
            disabled={dayProps.disabled}
            onMouseEnter={typeof onDayMouseEnter === 'function' ? onDayMouseEnter : no}
            size={size}
            fullWidth={fullWidth}
            focusable={focusable}
            hideOutsideDates={hideOutsideDates}
            __staticSelector={__staticSelector}
            styles={styles}
            classNames={classNames}
            renderDay={renderDay}
          />
        </td>
      );
    });

    return <tr key={rowIndex}>{cells}</tr>;
  });

  return (
    <Box component="table" className={cx(classes.month, className)} ref={ref} {...others}>
      {!hideWeekdays && (
        <thead>
          <tr>{weekdays}</tr>
        </thead>
      )}
      <tbody>{rows}</tbody>
    </Box>
  );
});

Month.displayName = '@mantine/dates/Month';
