import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Day.styles.less';

interface DayProps extends DefaultProps {
  value: Date;
  selected: boolean;
  outside: boolean;
  weekend: boolean;
  onClick?(): void;
}

export default function Day({ className, value, selected, outside, weekend, onClick }: DayProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        classes.day,
        {
          [classes.outside]: outside,
          [classes.weekend]: weekend,
          [classes.selected]: selected,
        },
        className
      )}
    >
      {value.getDate()}
    </button>
  );
}

Day.displayName = '@mantine/core/Day';
