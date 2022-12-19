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
  const { classNames, withSeconds, ...others } = useComponentDefaultProps(
    'TimeInput',
    defaultProps,
    props
  );
  const { classes, cx } = useStyles();
  return (
    <TextInput
      type="time"
      step={withSeconds ? 1 : 60}
      classNames={{ input: cx(classes.input, classNames?.input) }}
      ref={ref}
      {...others}
    />
  );
});

TimeInput.displayName = '@mantine/dates/TimeInput';
