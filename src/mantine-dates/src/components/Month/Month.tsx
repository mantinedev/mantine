import React, { useRef, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, Text, MantineSize } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
import { getMonthDays, isSameMonth, getWeekdaysNames, isSameDate } from '../../utils';
import { Day, DayStylesNames } from './Day/Day';
import useStyles from './Month.styles';

export interface DayModifiers {
  selected: boolean;
  outside: boolean;
  weekend: boolean;
  range: boolean;
  firstInRange: boolean;
  lastInRange: boolean;
}

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
  const classes = useStyles({ theme, fullWidth }, classNames as any, __staticSelector);
  const _styles = mergeStyles(classes, styles as any);
  const daysRefs = useRef<Record<string, HTMLButtonElement>>({});
  const days = getMonthDays(month);

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
      const weekday = date.getDay();
      const weekend = weekday === 6 || weekday === 0;
      const outside = date.getMonth() !== month.getMonth();
      const isSelected = hasValue && isSameDate(date, value);
      const isAfterMax = maxDate instanceof Date && dayjs(maxDate).isBefore(date, 'day');
      const isBeforeMin = minDate instanceof Date && dayjs(minDate).isAfter(date, 'day');
      const shouldExclude = typeof excludeDate === 'function' && excludeDate(date);
      const disabledOutside = disableOutsideEvents && outside;
      const disabled = isAfterMax || isBeforeMin || shouldExclude || disabledOutside;
      const hasRange = Array.isArray(range);
      const inclusiveRange = hasRange && [
        dayjs(range[0]).subtract(1, 'day'),
        dayjs(range[1]).add(1, 'day'),
      ];
      const firstInRange = hasRange && isSameDate(date, range[0]);
      const lastInRange = hasRange && isSameDate(date, range[1]);
      const isInRange =
        hasRange &&
        dayjs(date).isAfter(inclusiveRange[0], 'day') &&
        dayjs(date).isBefore(inclusiveRange[1], 'day');
      const selectedInRange = firstInRange || lastInRange;
      const modifiers: DayModifiers = {
        selected: isSelected,
        range: isInRange,
        firstInRange,
        lastInRange,
        weekend,
        outside,
      };

      return (
        <td className={classes.cell} style={_styles.cell} key={cellIndex}>
          <Day
            elementRef={(button) => {
              daysRefs.current[date.toISOString()] = button;
            }}
            onClick={() => typeof onChange === 'function' && onChange(date)}
            value={date}
            outside={outside}
            weekend={weekend}
            range={isInRange}
            firstInRange={firstInRange}
            lastInRange={lastInRange}
            selected={isSelected || selectedInRange}
            hasValue={hasValueInMonthRange}
            onKeyDown={handleKeyDown}
            themeOverride={themeOverride}
            className={typeof dayClassName === 'function' ? dayClassName(date, modifiers) : null}
            style={typeof dayStyle === 'function' ? dayStyle(date, modifiers) : null}
            styles={styles as any}
            classNames={classNames as any}
            disabled={disabled}
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
