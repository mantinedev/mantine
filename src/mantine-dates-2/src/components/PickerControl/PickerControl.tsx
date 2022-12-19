/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, UnstyledButton, Selectors, useComponentDefaultProps } from '@mantine/core';
import useStyles from './PickerControl.styles';

export type PickerControlStylesNames = Selectors<typeof useStyles>;

export interface PickerControlProps
  extends DefaultProps<PickerControlStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  __staticSelector?: string;

  /** Control children */
  children?: React.ReactNode;

  /** Determines whether control should be disabled */
  disabled?: boolean;

  /** Determines whether control should have selected styles */
  selected?: boolean;

  /** Determines whether control is selected in range */
  inRange?: boolean;

  /** Determines whether control is first in range selection */
  firstInRange?: boolean;

  /** Determines whether control is last in range selection */
  lastInRange?: boolean;
}

const defaultProps: Partial<PickerControlProps> = {};

export const PickerControl = forwardRef<HTMLButtonElement, PickerControlProps>((props, ref) => {
  const {
    className,
    children,
    disabled,
    selected,
    classNames,
    styles,
    unstyled,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    ...others
  } = useComponentDefaultProps('PickerControl', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['PickerControl', __staticSelector],
    classNames,
    styles,
    unstyled,
  });

  return (
    <UnstyledButton
      className={cx(classes.pickerControl, className)}
      ref={ref}
      unstyled={unstyled}
      data-picker-control
      data-selected={(selected && !disabled) || undefined}
      data-disabled={disabled || undefined}
      data-in-range={(inRange && !disabled && !selected) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      disabled={disabled}
      {...others}
    >
      {children}
    </UnstyledButton>
  );
});

PickerControl.displayName = '@mantine/dates/PickerControl';
