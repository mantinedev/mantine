import React, { useState, useRef } from 'react';
import cx from 'clsx';
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
  mergeStyles,
} from '@mantine/core';
import { useId, useMergedRef, useUncontrolled } from '@mantine/hooks';
import dayjs from 'dayjs';
import { TimeField } from '../TimeInput/TimeField/TimeField';
import { createTimeHandler } from '../TimeInput/create-time-handler/create-time-handler';
import { getTimeValues } from '../TimeInput/get-time-values/get-time-value';
import useStyles from './TimeRangeInput.styles';

export type TimeRangeInputStylesNames =
  | keyof ReturnType<typeof useStyles>
  | InputStylesNames
  | InputWrapperStylesNames;

export interface TimeRangeInputProps
  extends DefaultProps<TimeRangeInputStylesNames>,
  InputBaseProps,
  InputWrapperBaseProps,
  Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Input size */
  size?: MantineSize;

  /** Get element ref of hours input */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Controlled input value */
  value?: [Date, Date];

  /** Uncontrolled input default value */
  defaultValue?: [Date, Date];

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

  /** Separator between dates */
  labelSeparator?: string;
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
  labelSeparator = '-',
  disabled = false,
  ...others
}: TimeRangeInputProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames, 'time-input');
  const _styles = mergeStyles(classes, styles);
  const uuid = useId(id);
  const fromDate = new Date();
  const toDate = new Date((new Date()).valueOf() + 1000);

  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [fromDate, toDate],
    rule: (val) => val && val.length === 2 && val.every(ele => ele instanceof Date),
    onChange,
  });

  const hoursRef = useRef<HTMLInputElement[]>([]);
  const minutesRef = useRef<HTMLInputElement[]>([]);
  const secondsRef = useRef<HTMLInputElement[]>([]);
  const [fromTime, setFromTime] = useState(getTimeValues(_value[0]));
  const [toTime, setToTime] = useState(getTimeValues(_value[1]));
  const [selectedFieldIndex, setSelectedFieldIndex] = useState<0 | 1>(0);

  const setTime = (cb) => {
    selectedFieldIndex === 0 ? setFromTime(cb) : setToTime(cb);
  };

  const constructDayjsValue = (fieldName, val) => {
    const index = selectedFieldIndex;
    const newTime = [...value];
    newTime[index] = dayjs(newTime[index]).set(fieldName, parseInt(val, 10)).toDate();
    return newTime;
  };

  const handleFieldFocus = (index) => {
    setSelectedFieldIndex(index);
  };

  const handleHoursChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, hours: val }));
      handleChange(constructDayjsValue('hours', val));
    },
    min: 0,
    max: 23,
    maxValue: 2,
    nextRef: {
      current: minutesRef.current[selectedFieldIndex],
    },
  });

  const handleMinutesChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, minutes: val }));
      handleChange(constructDayjsValue('minutes', val));
    },
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: {
      current: !withSeconds && selectedFieldIndex === 0 ?
        hoursRef.current[1] : secondsRef.current[selectedFieldIndex],
    },
  });

  const handleSecondsChange = createTimeHandler({
    onChange: (val) => {
      setTime((c) => ({ ...c, seconds: val }));
      handleChange(constructDayjsValue('seconds', val));
    },
    min: 0,
    max: 59,
    maxValue: 5,
    nextRef: {
      current: selectedFieldIndex === 0 ? hoursRef.current[1] : undefined,
    },
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
      classNames={classNames}
      styles={styles}
      size={size}
      __staticSelector="time-range-input"
      id={uuid}
      {...wrapperProps}
    >
      <Input
        component="div"
        __staticSelector="time-range-input"
        themeOverride={themeOverride}
        required={required}
        invalid={!!error}
        onClick={() => {
          setSelectedFieldIndex(0);
          hoursRef.current[selectedFieldIndex].focus();
        }}
        size={size}
        className={cx({ [classes.disabled]: disabled })}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        {...others}
      >
        <div className={classes.controls} style={_styles.controls}>
          <TimeField
            elementRef={useMergedRef((val) => {
              hoursRef.current[0] = val;
            }, elementRef)}
            value={fromTime.hours}
            onChange={handleHoursChange}
            setValue={(val) => handleHoursChange(val, false)}
            id={uuid}
            className={classes.timeInput}
            style={_styles.timeInput}
            withSeparator
            size={size}
            max={23}
            aria-label={`from ${hoursLabel}`}
            disabled={disabled}
            onFocus={() => handleFieldFocus(0)}
          />

          <TimeField
            elementRef={(val) => {
              minutesRef.current[0] = val;
            }}
            value={fromTime.minutes}
            onChange={handleMinutesChange}
            setValue={(val) => setFromTime((c) => ({ ...c, minutes: val }))}
            className={classes.timeInput}
            style={_styles.timeInput}
            withSeparator={withSeconds}
            size={size}
            max={59}
            aria-label={`from ${minutesLabel}`}
            disabled={disabled}
            onFocus={() => handleFieldFocus(0)}
          />

          {withSeconds && (
            <TimeField
              elementRef={(val) => {
                secondsRef.current[0] = val;
              }}
              value={fromTime.seconds}
              onChange={handleSecondsChange}
              setValue={(val) => setFromTime((c) => ({ ...c, seconds: val }))}
              className={classes.timeInput}
              style={_styles.timeInput}
              size={size}
              max={59}
              aria-label={`from ${secondsLabel}`}
              disabled={disabled}
              onFocus={() => handleFieldFocus(0)}
            />
          )}

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            {labelSeparator}
          </span>

          <div className={classes.controls} style={_styles.controls}>
            <TimeField
              elementRef={useMergedRef((val) => {
                hoursRef.current[1] = val;
              }, elementRef)}
              value={toTime.hours}
              onChange={handleHoursChange}
              setValue={(val) => handleHoursChange(val, false)}
              id={uuid}
              className={classes.timeInput}
              style={_styles.timeInput}
              withSeparator
              size={size}
              max={23}
              aria-label={`to ${hoursLabel}`}
              disabled={disabled}
              onFocus={() => handleFieldFocus(1)}
            />

            <TimeField
              elementRef={(val) => {
                minutesRef.current[1] = val;
              }}
              value={toTime.minutes}
              onChange={handleMinutesChange}
              setValue={(val) => setToTime((c) => ({ ...c, minutes: val }))}
              className={classes.timeInput}
              style={_styles.timeInput}
              withSeparator={withSeconds}
              size={size}
              max={59}
              aria-label={`to ${minutesLabel}`}
              disabled={disabled}
              onFocus={() => handleFieldFocus(1)}
            />

            {withSeconds && (
              <TimeField
                elementRef={(val) => {
                  secondsRef.current[1] = val;
                }}
                value={toTime.seconds}
                onChange={handleSecondsChange}
                setValue={(val) => setToTime((c) => ({ ...c, seconds: val }))}
                className={classes.timeInput}
                style={_styles.timeInput}
                size={size}
                max={59}
                aria-label={`to ${secondsLabel}`}
                disabled={disabled}
                onFocus={() => handleFieldFocus(1)}
              />
            )}
          </div>
          {name && <input type="hidden" name={`${name}-from`} value={_value[0].toISOString()} />}
          {name && <input type="hidden" name={`${name}-to`} value={_value[1].toISOString()} />}
        </div>
      </Input>
    </InputWrapper>
  );
}

TimeRangeInput.displayName = '@mantine/dates/TimeRangeInput';
