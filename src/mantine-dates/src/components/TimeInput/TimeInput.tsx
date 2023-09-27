import React from 'react';
import cx from 'clsx';
import {
  factory,
  useProps,
  useResolvedStylesApi,
  Factory,
  InputBase,
  InputBaseProps,
  __InputStylesNames,
  ElementProps,
} from '@mantine/core';
import classes from './TimeInput.module.css';

export interface TimeInputProps extends InputBaseProps, ElementProps<'input', 'size'> {
  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;
}

export type TimeInputFactory = Factory<{
  props: TimeInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TimeInputProps> = {};

export const TimeInput = factory<TimeInputFactory>((_props, ref) => {
  const props = useProps('TimeInput', defaultProps, _props);
  const { classNames, styles, unstyled, vars, withSeconds, ...others } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TimeInputFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <InputBase
      classNames={{ ...resolvedClassNames, input: cx(classes.input, resolvedClassNames?.input) }}
      styles={resolvedStyles}
      unstyled={unstyled}
      ref={ref}
      {...others}
      step={withSeconds ? 1 : 60}
      type="time"
      __staticSelector="TimeInput"
    />
  );
});

TimeInput.classes = InputBase.classes;
TimeInput.displayName = '@mantine/dates/TimeInput';
