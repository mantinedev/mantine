import React, { forwardRef } from 'react';
import {
  UnstyledButton,
  DefaultProps,
  useComponentDefaultProps,
  MantineNumberSize,
  Selectors,
} from '@mantine/core';
import dayjs from 'dayjs';
import useStyles, { DayStylesParams } from './Day.styles';

export type DayStylesNames = Selectors<typeof useStyles>;

export interface DayProps
  extends DefaultProps<DayStylesNames, DayStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'type'> {
  __staticSelector?: string;

  /** Determines which element should be used as root, button by default, div if static prop is set */
  static?: boolean;

  /** Date that should be displayed */
  date: Date;

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Determines whether the day should be considered to be a weekend */
  weekend?: boolean;

  /** Determines whether the day is outside of current month */
  outside?: boolean;

  /** Determines whether the day is selected */
  selected?: boolean;

  /** Determines whether the day should not de displayed */
  hidden?: boolean;

  /** Determines whether day is selected in range */
  inRange?: boolean;

  /** Determines whether day is first in range selection */
  firstInRange?: boolean;

  /** Determines whether day is last in range selection */
  lastInRange?: boolean;

  /** Controls day value rendering */
  renderDay?(date: Date): React.ReactNode;
}

const defaultProps: Partial<DayProps> = {
  tabIndex: 0,
};

export const Day = forwardRef<HTMLButtonElement, DayProps>((props, ref) => {
  const {
    className,
    date,
    radius,
    disabled,
    styles,
    classNames,
    unstyled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    ...others
  } = useComponentDefaultProps('Day', defaultProps, props);

  const { classes, cx } = useStyles(
    { radius, isStatic },
    { classNames, styles, unstyled, name: ['Day', __staticSelector] }
  );

  return (
    <UnstyledButton<any>
      component={isStatic ? 'div' : 'button'}
      ref={ref}
      className={cx(classes.day, className)}
      disabled={disabled}
      data-today={dayjs(date).isSame(new Date(), 'day') || undefined}
      data-hidden={hidden || undefined}
      data-disabled={disabled || undefined}
      data-weekend={(!disabled && !outside && weekend) || undefined}
      data-outside={(!disabled && outside) || undefined}
      data-selected={(!disabled && selected) || undefined}
      data-in-range={(inRange && !disabled) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      unstyled={unstyled}
      {...others}
    >
      {renderDay?.(date) || date.getDate()}
    </UnstyledButton>
  );
});

Day.displayName = '@mantine/dates/Day';
