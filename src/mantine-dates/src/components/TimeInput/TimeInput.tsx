import React, { useState, useRef } from 'react';
import {
  InputBaseProps,
  InputWrapperBaseProps,
  InputStylesNames,
  InputWrapperStylesNames,
  DefaultProps,
  Input,
  InputWrapper,
  MantineSize,
  useMantineTheme,
} from '@mantine/core';
import { useId } from '@mantine/hooks';
import { TimeField } from './TimeField/TimeField';
import { createTimeHandler } from './create-time-handler/create-time-handler';
import useStyles from './TimeInput.styles';

export type TimeInputStylesNames =
  | keyof ReturnType<typeof useStyles>
  | InputStylesNames
  | InputWrapperStylesNames;

interface TimeInputProps
  extends DefaultProps<TimeInputStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Input size */
  size?: MantineSize;
}

export function TimeInput({
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
  ...others
}: TimeInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'time-input');
  const uuid = useId(id);
  const hoursRef = useRef<HTMLInputElement>();
  const minutesRef = useRef<HTMLInputElement>();
  const secondsRef = useRef<HTMLInputElement>();
  const [hours, setHours] = useState('12');
  const [minutes, setMinutes] = useState('12');
  const [seconds, setSeconds] = useState('12');

  const handleHoursChange = createTimeHandler({
    onChange: setHours,
    min: 0,
    max: 23,
    maxValue: 2,
    nextRef: minutesRef,
  });

  const handleMinutesChange = createTimeHandler({
    onChange: setMinutes,
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: secondsRef,
  });

  const handleSecondsChange = createTimeHandler({
    onChange: setSeconds,
    min: 0,
    max: 59,
    maxValue: 5,
  });

  return (
    <InputWrapper
      required={required}
      label={label}
      error={error}
      description={description}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      size={size}
      __staticSelector="time-input"
      id={uuid}
      {...wrapperProps}
    >
      <Input
        component="div"
        __staticSelector="time-input"
        themeOverride={themeOverride}
        required={required}
        invalid={!!error}
        onClick={() => hoursRef.current.focus()}
        size={size}
        {...others}
      >
        <div className={classes.controls}>
          <TimeField
            elementRef={hoursRef}
            value={hours.toString()}
            onChange={handleHoursChange}
            setValue={setHours}
            id={uuid}
            className={classes.timeInput}
            withSeparator
            size={size}
            max={23}
          />

          <TimeField
            elementRef={minutesRef}
            value={minutes.toString()}
            onChange={handleMinutesChange}
            setValue={setMinutes}
            className={classes.timeInput}
            withSeparator
            size={size}
            max={59}
          />

          <TimeField
            elementRef={secondsRef}
            value={seconds.toString()}
            onChange={handleSecondsChange}
            setValue={setSeconds}
            className={classes.timeInput}
            size={size}
            max={59}
          />
        </div>
      </Input>
    </InputWrapper>
  );
}

TimeInput.displayName = '@mantine/dates/TimeInput';
