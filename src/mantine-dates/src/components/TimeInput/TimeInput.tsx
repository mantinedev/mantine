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
import dayjs from 'dayjs';
import classes from './TimeInput.module.css';

export interface TimeInputProps extends InputBaseProps, ElementProps<'input', 'size'> {
  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;
  /** Minimum possible time */
  minTime?: string;
  /** Maximum possible time */
  maxTime?: string;
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

  const validTime = () => {
    const minTime = dayjs(`2000-01-01 ${props.minTime}`);
    const maxTime = dayjs(`2000-01-01 ${props.maxTime}`);
    const value = dayjs(`2000-01-01 ${props.value}`);
    let _value;
    if (props.maxTime && value > maxTime) {
      _value = props.maxTime;
    } else if (props.minTime && value < minTime) {
      _value = props.minTime;
    } else {
      _value = props.value;
    }
    return _value;
  };

  return (
    <>
      <InputBase
        classNames={{
          ...resolvedClassNames,
          input: cx(classes.input, resolvedClassNames?.input),
        }}
        styles={resolvedStyles}
        unstyled={unstyled}
        ref={ref}
        {...others}
        step={withSeconds ? 1 : 60}
        type="time"
        __staticSelector="TimeInput"
        value={validTime()}
      />
    </>
  );
});

TimeInput.classes = InputBase.classes;
TimeInput.displayName = '@mantine/dates/TimeInput';
