import React, { forwardRef } from 'react';
import {
  useComponentDefaultProps,
  TextInput,
  TextInputProps,
  TextInputStylesNames,
} from '@mantine/core';
import useStyles from './TimeInput.styles';

export type TimeInputStylesNames = TextInputStylesNames;

export interface TimeInputProps extends TextInputProps {
  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;
}

const defaultProps: Partial<TimeInputProps> = {};

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>((props, ref) => {
  const { classNames, withSeconds, variant, size, styles, unstyled, ...others } =
    useComponentDefaultProps('TimeInput', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: 'TimeInput',
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  return (
    <TextInput
      type="time"
      step={withSeconds ? 1 : 60}
      classNames={{ ...classNames, input: cx(classes.input, classNames?.input) }}
      styles={styles}
      unstyled={unstyled}
      variant={variant}
      size={size}
      ref={ref}
      __staticSelector="TimeInput"
      {...others}
    />
  );
});

TimeInput.displayName = '@mantine/dates/TimeInput';
