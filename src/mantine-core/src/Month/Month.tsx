import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import Text from '../Text/Text';
import getMonthDays from './get-month-days';
import getWeekdaysNames from './get-weekdays-names';
import classes from './Month.styles.less';

interface MonthProps extends DefaultProps {
  month: Date;
  locale?: string;
}

export default function Month({ className, month, locale = 'en' }: MonthProps) {
  const days = getMonthDays(month);
  const weekdays = getWeekdaysNames(locale).map((weekday) => (
    <th key={weekday}>
      <Text theme="muted" size="sm">
        {weekday.slice(0, 1).toUpperCase()}
      </Text>
    </th>
  ));

  const rows = days.map((row, rowIndex) => {
    const cells = row.map((cell, cellIndex) => <td key={cellIndex}>{cell.getDate()}</td>);
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
