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
      unstyled,
      disabled,
      ...others
    }: DayProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size, fullWidth, hideOutsideDates },
      { classNames, styles, unstyled, name: __staticSelector }
    );

    return (
      <button
        {...others}
        type="button"
        ref={ref}
        disabled={disabled}
        onMouseEnter={(event) => onMouseEnter(value, event)}
        tabIndex={getDayTabIndex({ focusable, hasValue, selected, firstInMonth })}
        data-autofocus={getDayAutofocus({ hasValue, selected, firstInMonth })}
        data-outside={(outside && !disabled) || undefined}
        data-weekend={(weekend && !disabled) || undefined}
        data-selected={(selected && !disabled) || undefined}
        data-in-range={(inRange && !disabled) || undefined}
        data-first-in-range={(firstInRange && !disabled) || undefined}
        data-last-in-range={(lastInRange && !disabled) || undefined}
        className={cx(classes.day, className)}
      >
        {typeof renderDay === 'function' ? renderDay(value) : value.getDate()}
      </button>
    );
  }
);

Day.displayName = '@mantine/core/Day';
