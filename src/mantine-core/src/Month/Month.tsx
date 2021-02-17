import React, { useRef, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import getMonthDays from './get-month-days';
import getWeekdaysNames from './get-weekdays-names';
import isSameMonth from './is-same-month';
import Day from './Day/Day';
import useStyles from './Month.styles';

interface MonthProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
  month: Date;
  locale?: string;
  selected?: Date;
  autoFocus?: boolean;
  disableOutsideEvents?: boolean;
  onDayClick?(day: Date): void;
}

export function Month({
  className,
  month,
  selected,
  onDayClick,
  autoFocus = false,
  disableOutsideEvents = false,
  locale = 'en',
  themeOverride,
  ...others
}: MonthProps) {
  const classes = useStyles({ theme: useMantineTheme() });
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
      focusDay(currentDate, 1);
    }

    if (code === 'ArrowLeft') {
      event.preventDefault();
      focusDay(currentDate, -1);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      const date = new Date(
        month.getFullYear(),
        month.getMonth(),
        selected ? selected.getDate() : 1
      ).toISOString();

      if (date in daysRefs.current) {
        daysRefs.current[date].focus();
      }
    }
  }, []);

  const weekdays = getWeekdaysNames(locale).map((weekday) => (
    <th key={weekday}>
      <Text color="gray" size="xs">
        {weekday.slice(0, 1).toUpperCase()}
      </Text>
    </th>
  ));

  const rows = days.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const weekday = date.getDay();
      const weekend = weekday === 6 || weekday === 0;
      const outside = date.getMonth() !== month.getMonth();
      const isSelected =
        selected instanceof Date &&
        date.getFullYear() === selected.getFullYear() &&
        date.getMonth() === selected.getMonth() &&
        date.getDate() === selected.getDate();

      return (
        <td key={cellIndex}>
          <Day
            elementRef={(button) => {
              daysRefs.current[date.toISOString()] = button;
            }}
            onClick={() => typeof onDayClick === 'function' && onDayClick(date)}
            value={date}
            outside={outside}
            weekend={weekend}
            selected={isSelected}
            disableOutsideEvents={disableOutsideEvents}
            onKeyDown={handleKeyDown}
            themeOverride={themeOverride}
          />
        </td>
      );
    });

    return <tr key={rowIndex}>{cells}</tr>;
  });

  return (
    <table className={cx(classes.month, className)} {...others}>
      <thead>
        <tr>{weekdays}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

Month.displayName = '@mantine/core/Month';
