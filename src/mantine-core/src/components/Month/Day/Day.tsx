import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import useStyles from './Day.styles';

interface DayProps extends DefaultProps {
  value: Date;
  selected: boolean;
  outside: boolean;
  weekend: boolean;
  disableOutsideEvents: boolean;
  onClick?(): void;
  elementRef(ref: HTMLButtonElement): void;
  onKeyDown(date: Date, event: React.KeyboardEvent): void;
}

export default function Day({
  className,
  value,
  selected,
  outside,
  weekend,
  onClick,
  elementRef,
  onKeyDown,
  disableOutsideEvents,
}: DayProps) {
  const classes = useStyles();

  return (
    <button
      type="button"
      onClick={onClick}
      ref={elementRef}
      onKeyDown={(event) => onKeyDown(value, event)}
      className={cx(
        classes.day,
        {
          [classes.outside]: outside,
          [classes.weekend]: weekend,
          [classes.selected]: selected,
          [classes.disableOutsideEvents]: disableOutsideEvents,
        },
        className
      )}
    >
      {value.getDate()}
    </button>
  );
}

Day.displayName = '@mantine/core/Day';
