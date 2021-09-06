import React from 'react';
import {
  DefaultProps,
  MantineSize,
  useMantineTheme,
  mergeStyles,
  Group,
  MantineNumberSize,
} from '@mantine/core';
import { useId } from '@mantine/hooks';
//import dayjs from 'dayjs';
import { TimeInput, TimeInputProps, TimeInputStylesNames } from '../TimeInput/TimeInput';
// import { createTimeHandler } from '../TimeInput/create-time-handler/create-time-handler';
// import { getTimeValues } from '../TimeInput/get-time-values/get-time-value';
import useStyles from './TimeRangeInput.styles';

export type TimeRangeInputStylesNames =
  | keyof ReturnType<typeof useStyles>
  | TimeInputStylesNames;

export interface TimeRangeInputProps extends
  DefaultProps<TimeRangeInputStylesNames>,
  Omit<TimeInputProps, 'value' | 'classNames' | 'styles' | 'onChange'> {
  /** Input size */
  size?: MantineSize;

  /** Get element ref of hours input */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Controlled input value */
  value?: [ Date, Date ];

  /** Uncontrolled input default value */
  defaultValue?: Date;

  /** Controlled input onChange handler */
  onChange?(value: [Date, Date]): void;

  /** Display seconds input */
  withSeconds?: boolean;

  /** Uncontrolled input name */
  name?: string;

  /** aria-label for hours input */
  hoursLabel?: string;

  /** aria-label for minutes input */
  minutesLabel?: string;

  /** aria-label for seconds input */
  secondsLabel?: string;

  /** Disable field */
  disabled?: boolean;

  /** Spacing between TimeInputs */
  spacing?: MantineNumberSize;
}

export function TimeRangeInput({
  required,
  label,
  error,
  description,
  className,
  style,
  themeOverride,
  size = 'sm',
  wrapperProps,
  classNames,
  styles,
  id,
  elementRef,
  value,
  defaultValue,
  onChange,
  withSeconds = false,
  name,
  hoursLabel,
  minutesLabel,
  secondsLabel,
  disabled = false,
  spacing = 'sm',
  ...others
}: TimeRangeInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames, 'timerange-input');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);

  return (
    <Group
      id={uuid}
      spacing={spacing}
      style={_styles.wrapper}
    >
      <TimeInput
        withSeconds={withSeconds}
        onChange={onChange}
        value={value[0]}
        minutesLabel={minutesLabel}
        hoursLabel={hoursLabel}
        secondsLabel={secondsLabel}
        disabled={disabled}
        {...others}
        styles={_styles}
      />
      <TimeInput
        withSeconds={withSeconds}
        onChange={onChange}
        value={value[0]}
        minutesLabel={minutesLabel}
        hoursLabel={hoursLabel}
        secondsLabel={secondsLabel}
        disabled={disabled}
        {...others}
        styles={_styles}
      />
    </Group>
  );
}

TimeRangeInput.displayName = '@mantine/dates/TimeRangeInput';
