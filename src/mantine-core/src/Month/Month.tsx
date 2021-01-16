import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import Text from '../Text/Text';
import getMonthDays from './get-month-days';
import getWeekdaysNames from './get-weekdays-names';
import Day from './Day/Day';
import classes from './Month.styles.less';

interface MonthProps extends DefaultProps {
  month: Date;
  locale?: string;
  selected?: Date;
  onDayClick?(day: Date): void;
}

export default function Month({
  className,
  month,
  selected,
  onDayClick,
  locale = 'en',
}: MonthProps) {
  const days = getMonthDays(month);
  const weekdays = getWeekdaysNames(locale).map((weekday) => (
    <th key={weekday}>
      <Text theme="muted" size="xs">
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
            onClick={() => onDayClick(date)}
            value={date}
            outside={outside}
            weekend={weekend}
            selected={isSelected}
          />
        </td>
      );
    });

    return <tr key={rowIndex}>{cells}</tr>;
  });

  return (
    <table className={cx(classes.month, className)}>
      <thead>
        <tr>{weekdays}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

Month.displayName = '@mantine/core/Month';
