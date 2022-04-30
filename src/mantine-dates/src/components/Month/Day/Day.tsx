import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/core';
import { getDayTabIndex } from './get-day-tab-index/get-day-tab-index';
import { getDayAutofocus } from './get-day-autofocus/get-day-autofocus';
import useStyles from './Day.styles';

export type DayStylesNames = Selectors<typeof useStyles>;

export interface DayProps
  extends DefaultProps<DayStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onMouseEnter'> {
  value: Date;
  selected: boolean;
  weekend: boolean;
  outside: boolean;
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
  focusable?: boolean;
  hideOutsideDates?: boolean;
  renderDay?(date: Date): React.ReactNode;
}

export const Day = forwardRef<HTMLButtonElement, DayProps>(
  (
    {
      className,
      value,
      selected,
      weekend,
      outside,
      onMouseEnter,
      classNames,
      styles,
      hasValue,
      firstInRange,
      lastInRange,
      __staticSelector = 'Month',
      inRange,
      size,
      fullWidth,
      firstInMonth,
      focusable,
      hideOutsideDates,
      renderDay,
      ...others
    }: DayProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size, fullWidth, hideOutsideDates },
      { classNames, styles, name: __staticSelector }
    );

    return (
      <button
        {...others}
        type="button"
        ref={ref}
        onMouseEnter={(event) => onMouseEnter(value, event)}
        tabIndex={getDayTabIndex({ focusable, hasValue, selected, firstInMonth })}
        data-autofocus={getDayAutofocus({ hasValue, selected, firstInMonth })}
        data-mantine-stop-propagation
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
        {typeof renderDay === 'function' ? renderDay(value) : value.getDate()}
      </button>
    );
  }
);

Day.displayName = '@mantine/core/Day';
