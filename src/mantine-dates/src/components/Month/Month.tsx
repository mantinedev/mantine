import React, { useRef, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, Text, MantineSize } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
import { getMonthDays, isSameMonth, getWeekdaysNames } from '../../utils';
import { Day, DayStylesNames } from './Day/Day';
import { getDayProps, DayModifiers } from './get-day-props/get-day-props';
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
}

export type MonthStylesNames = keyof ReturnType<typeof useStyles> | DayStylesNames;

export interface MonthProps
  extends DefaultProps<MonthStylesNames>,
    MonthSettings,
    Omit<React.ComponentPropsWithoutRef<'table'>, 'onChange' | 'value'> {
  /** Date at which month should be shown */
  month: Date;

  /** Locale is used to get weekdays names with dayjs format */
  locale?: string;

  /** Selected date */
  value?: Date;

  /** Selected range */
  range?: [Date, Date];

  /** Autofocus selected date on mount, if no date is selected autofocus is applied to first month day */
  autoFocus?: boolean;

  /** Called when day is selected */
  onChange?(value: Date): void;

  /** Static css selector base */
  __staticSelector?: string;

  /** Called when onMouseEnter event fired on day button */
  onDayMouseEnter?(date: Date, event: React.MouseEvent): void;
}

const noop = () => {};

export function Month({
  className,
  style,
  month,
  value,
  onChange,
  autoFocus = false,
  disableOutsideEvents = false,
  locale = 'en',
  dayClassName,
  dayStyle,
  themeOverride,
  classNames,
  styles,
  minDate,
  maxDate,
  excludeDate,
  onDayMouseEnter,
  range,
  hideWeekdays = false,
  __staticSelector = 'month',
  size = 'sm',
  fullWidth = false,
  ...others
}: MonthProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, fullWidth }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const daysRefs = useRef<Record<string, HTMLButtonElement>>({});
  const days = getMonthDays(month);
  console.log(days, month);

  const focusDay = (date: Date, diff: number) => {
    const offset = new Date(date);
    offset.setDate(date.getDate() + diff);

    if (offset.toISOString() in daysRefs.current) {
      if (!(!isSameMonth(month, offset) && disableOutsideEvents)) {
        daysRefs.current[offset.toISOString()].focus();
      }
    }
  };

  const handleKeyDown = (currentDate: Date, event: React.KeyboardEvent) => {
    const { code } = event.nativeEvent;

    if (code === 'ArrowUp') {
      event.preventDefault();
      focusDay(currentDate, -7);
    }

    if (code === 'ArrowDown') {
      event.preventDefault();
      focusDay(currentDate, 7);
    }

    if (code === 'ArrowRight') {
      event.preventDefault();
      currentDate.getDay() !== 0 && focusDay(currentDate, 1);
    }

    if (code === 'ArrowLeft') {
      event.preventDefault();
      currentDate.getDay() !== 1 && focusDay(currentDate, -1);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      const date = new Date(
        month.getFullYear(),
        month.getMonth(),
        value ? value.getDate() : 1
      ).toISOString();

      if (date in daysRefs.current) {
        daysRefs.current[date].focus();
      }
    }
  }, []);

  const weekdays = getWeekdaysNames(locale).map((weekday) => (
    <th className={classes.weekdayCell} style={_styles.weekdayCell} key={weekday}>
      <Text size={size} className={classes.weekday} style={_styles.weekday}>
        {upperFirst(weekday)}
      </Text>
    </th>
  ));

  const hasValue = value instanceof Date;
  const hasValueInMonthRange =
    hasValue &&
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

      return (
        <td className={classes.cell} style={_styles.cell} key={cellIndex}>
          <Day
            elementRef={(button) => {
              daysRefs.current[date.toISOString()] = button;
            }}
            onClick={() => typeof onChange === 'function' && onChange(date)}
            value={date}
            outside={dayProps.outside}
            weekend={dayProps.weekend}
            inRange={dayProps.inRange}
            firstInRange={dayProps.firstInRange}
            lastInRange={dayProps.lastInRange}
            firstInMonth={cellIndex === 0 && rowIndex === 0}
            selected={dayProps.selected || dayProps.selectedInRange}
            hasValue={hasValueInMonthRange}
            onKeyDown={handleKeyDown}
            themeOverride={themeOverride}
            className={typeof dayClassName === 'function' ? dayClassName(date, dayProps) : null}
            style={typeof dayStyle === 'function' ? dayStyle(date, dayProps) : null}
            styles={styles}
            classNames={classNames}
            disabled={dayProps.disabled}
            __staticSelector={__staticSelector}
            onMouseEnter={typeof onDayMouseEnter === 'function' ? onDayMouseEnter : noop}
            size={size}
            fullWidth={fullWidth}
          />
        </td>
      );
    });

    return <tr key={rowIndex}>{cells}</tr>;
  });

  return (
    <table
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      {!hideWeekdays && (
        <thead>
          <tr>{weekdays}</tr>
        </thead>
      )}
      <tbody>{rows}</tbody>
    </table>
  );
}

Month.displayName = '@mantine/core/Month';
