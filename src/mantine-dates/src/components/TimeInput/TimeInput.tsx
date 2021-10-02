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
  mergeStyles,
  ClassNames,
  useUuid,
  useExtractedMargins,
} from '@mantine/core';
import { useMergedRef, useUncontrolled } from '@mantine/hooks';
import dayjs from 'dayjs';
import { TimeField } from './TimeField/TimeField';
import { createTimeHandler } from './create-time-handler/create-time-handler';
import { getTimeValues } from './get-time-values/get-time-value';
import useStyles from './TimeInput.styles';

export type TimeInputStylesNames =
  | ClassNames<typeof useStyles>
  | InputStylesNames
  | InputWrapperStylesNames;

export interface TimeInputProps
  extends DefaultProps<TimeInputStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Input size */
  size?: MantineSize;

  /** Get element ref of hours input */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Controlled input value */
  value?: Date;

  /** Uncontrolled input default value */
  defaultValue?: Date;

  /** Controlled input onChange handler */
  onChange?(value: Date): void;

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
}

export function TimeInput({
  required,
  label,
  error,
  description,
  className,
  style,
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
  ...others
}: TimeInputProps) {
  const { classes, cx } = useStyles({ size }, classNames, 'time-input');
  const _styles = mergeStyles(classes, styles);
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const uuid = useUuid(id);

  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: new Date(),
    rule: (val) => val instanceof Date,
    onChange,
  });

  const hoursRef = useRef<HTMLInputElement>();
  const minutesRef = useRef<HTMLInputElement>();
  const secondsRef = useRef<HTMLInputElement>();
  const [time, setTime] = useState(getTimeValues(_value));

  const handleHoursChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, hours: val }));
      handleChange(dayjs(_value).set('hours', parseInt(val, 10)).toDate());
    },
    min: 0,
    max: 23,
    maxValue: 2,
    nextRef: minutesRef,
  });

  const handleMinutesChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, minutes: val }));
      handleChange(dayjs(_value).set('minutes', parseInt(val, 10)).toDate());
    },
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: secondsRef,
  });

  const handleSecondsChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, seconds: val }));
      handleChange(dayjs(_value).set('seconds', parseInt(val, 10)).toDate());
    },
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
      style={mergedStyles}
      classNames={classNames}
      styles={styles}
      size={size}
      __staticSelector="time-input"
      id={uuid}
      {...wrapperProps}
    >
      <Input
        component="div"
        __staticSelector="time-input"
        required={required}
        invalid={!!error}
        onClick={() => hoursRef.current.focus()}
        size={size}
        className={cx({ [classes.disabled]: disabled })}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        {...rest}
      >
        <div className={classes.controls} style={_styles.controls}>
          <TimeField
            elementRef={useMergedRef(hoursRef, elementRef)}
            value={time.hours}
            onChange={handleHoursChange}
            setValue={(val) => setTime((c) => ({ ...c, hours: val }))}
            id={uuid}
            className={classes.timeInput}
            style={_styles.timeInput}
            withSeparator
            size={size}
            max={23}
            aria-label={hoursLabel}
            disabled={disabled}
          />

          <TimeField
            elementRef={minutesRef}
            value={time.minutes}
            onChange={handleMinutesChange}
            setValue={(val) => setTime((c) => ({ ...c, minutes: val }))}
            className={classes.timeInput}
            style={_styles.timeInput}
            withSeparator={withSeconds}
            size={size}
            max={59}
            aria-label={minutesLabel}
            disabled={disabled}
          />

          {withSeconds && (
            <TimeField
              elementRef={secondsRef}
              value={time.seconds}
              onChange={handleSecondsChange}
              setValue={(val) => setTime((c) => ({ ...c, seconds: val }))}
              className={classes.timeInput}
              style={_styles.timeInput}
              size={size}
              max={59}
              aria-label={secondsLabel}
              disabled={disabled}
            />
          )}

          {name && <input type="hidden" name={name} value={_value.toISOString()} />}
        </div>
      </Input>
    </InputWrapper>
  );
}

TimeInput.displayName = '@mantine/dates/TimeInput';
