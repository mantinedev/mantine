import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, ClassNames } from '@mantine/core';
import useStyles from './Day.styles';

export type DayStylesNames = ClassNames<typeof useStyles>;

export interface DayProps
  extends DefaultProps<DayStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onKeyDown' | 'onMouseEnter'> {
  value: Date;
  selected: boolean;
  weekend: boolean;
  outside: boolean;
  onClick?(): void;
  onKeyDown(date: Date, event: React.KeyboardEvent): void;
  onMouseEnter(date: Date, event: React.MouseEvent): void;
  disabled: boolean;
  hasValue: boolean;
  inRange: boolean;
  firstInRange: boolean;
  lastInRange: boolean;
  size: MantineSize;
  fullWidth: boolean;
  __staticSelector?: string;
  firstInMonth: boolean;
}

export const Day = forwardRef<HTMLButtonElement, DayProps>(
  (
    {
      className,
      value,
      selected,
      weekend,
      outside,
      onClick,
      onKeyDown,
      onMouseEnter,
      classNames,
      disabled,
      styles,
      hasValue,
      firstInRange,
      lastInRange,
      __staticSelector = 'month',
      inRange,
      size,
      fullWidth,
      firstInMonth,
      ...others
    }: DayProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size, fullWidth },
      { classNames, styles, name: __staticSelector }
    );

    return (
      <button
        {...others}
        type="button"
        onClick={onClick}
        ref={ref}
        onKeyDown={(event) => onKeyDown(value, event)}
        onMouseEnter={(event) => onMouseEnter(value, event)}
        tabIndex={hasValue ? (selected ? 0 : -1) : firstInMonth ? 0 : -1}
        data-autofocus={hasValue ? (selected ? true : undefined) : firstInMonth ? true : undefined}
        data-mantine-stop-propagation
        disabled={disabled}
        className={cx(
          classes.day,
          {
            [classes.outside]: outside,
            [classes.weekend]: weekend,
            [classes.selected]: selected,
            [classes.inRange]: inRange,
            [classes.firstInRange]: firstInRange,
            [classes.lastInRange]: lastInRange,
          },
          className
        )}
      >
        {value.getDate()}
      </button>
    );
  }
);

Day.displayName = '@mantine/core/Day';
