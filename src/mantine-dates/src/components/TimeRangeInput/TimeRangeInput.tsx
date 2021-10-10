import React, { useState, useRef, forwardRef } from 'react';
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
import dayjs, { UnitType } from 'dayjs';
import { TimeField } from '../TimeInput/TimeField/TimeField';
import { createTimeHandler } from '../TimeInput/create-time-handler/create-time-handler';
import { getTimeValues } from '../TimeInput/get-time-values/get-time-value';
import useStyles from './TimeRangeInput.styles';

export type TimeRangeInputStylesNames =
  | Exclude<ClassNames<typeof useStyles>, 'disabled'>
  | InputStylesNames
  | InputWrapperStylesNames;

export interface TimeRangeInputProps
  extends DefaultProps<TimeRangeInputStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Input size */
  size?: MantineSize;

  /** Controlled input value */
  value?: [Date | null, Date | null];

  /** Uncontrolled input default value */
  defaultValue?: [Date | null, Date | null];

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

  /** Separator between time inputs */
  labelSeparator?: string;
}

export const TimeRangeInput = forwardRef<HTMLInputElement, TimeRangeInputProps>(
  (
    {
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
      value,
      defaultValue,
      onChange,
      withSeconds = false,
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      labelSeparator = '–',
      disabled = false,
      ...others
    }: TimeRangeInputProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size }, classNames, 'time-range-input');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const uuid = useUuid(id);
    const fromDate = new Date();
    const toDate = new Date(new Date().valueOf() + 1000);

    const [_value, handleChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: [fromDate, toDate],
      rule: (val) => val && val.length === 2 && val.every((v) => v instanceof Date),
      onChange,
    });

    const hoursRef = useRef<HTMLInputElement[]>([]);
    const minutesRef = useRef<HTMLInputElement[]>([]);
    const secondsRef = useRef<HTMLInputElement[]>([]);
    const [fromTime, setFromTime] = useState(getTimeValues(_value[0]));
    const [toTime, setToTime] = useState(getTimeValues(_value[1]));
    const [selectedFieldIndex, setSelectedFieldIndex] = useState<0 | 1>(0);

    const setTime = (
      cb: (val: ReturnType<typeof getTimeValues>) => ReturnType<typeof getTimeValues>
    ) => {
      selectedFieldIndex === 0 ? setFromTime(cb) : setToTime(cb);
    };

    const constructDayjsValue = (fieldName: UnitType, val: string) => {
      const index = selectedFieldIndex;
      const newTime = [..._value];
      newTime[index] = dayjs(newTime[index]).set(fieldName, parseInt(val, 10)).toDate();
      return newTime;
    };

    const handleHoursChange = createTimeHandler({
      onChange: (val) => {
        setTime((current) => ({ ...current, hours: val }));
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
        setTime((current) => ({ ...current, minutes: val }));
        handleChange(constructDayjsValue('minutes', val));
      },
      min: 0,
      max: 59,
      maxValue: 5,
      nextRef: {
        current:
          !withSeconds && selectedFieldIndex === 0
            ? hoursRef.current[1]
            : secondsRef.current[selectedFieldIndex],
      },
    });

    const handleSecondsChange = createTimeHandler({
      onChange: (val) => {
        setTime((current) => ({ ...current, seconds: val }));
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
        style={mergedStyles}
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
          {...rest}
        >
          <div className={classes.inputWrapper} style={_styles.inputWrapper}>
            <TimeField
              ref={useMergedRef((node: HTMLInputElement) => {
                hoursRef.current[0] = node;
              }, ref)}
              value={fromTime.hours}
              onChange={handleHoursChange}
              setValue={(val) => handleHoursChange(val, false)}
              id={uuid}
              className={classes.timeField}
              style={_styles.timeField}
              withSeparator
              size={size}
              max={23}
              aria-label={`from ${hoursLabel}`}
              disabled={disabled}
              onFocus={() => setSelectedFieldIndex(0)}
            />

            <TimeField
              ref={(node) => {
                minutesRef.current[0] = node;
              }}
              value={fromTime.minutes}
              onChange={handleMinutesChange}
              setValue={(val) => setFromTime((c) => ({ ...c, minutes: val }))}
              className={classes.timeField}
              style={_styles.timeField}
              withSeparator={withSeconds}
              size={size}
              max={59}
              aria-label={`from ${minutesLabel}`}
              disabled={disabled}
              onFocus={() => setSelectedFieldIndex(0)}
            />

            {withSeconds && (
              <TimeField
                ref={(node) => {
                  secondsRef.current[0] = node;
                }}
                value={fromTime.seconds}
                onChange={handleSecondsChange}
                setValue={(val) => setFromTime((c) => ({ ...c, seconds: val }))}
                className={classes.timeField}
                style={_styles.timeField}
                size={size}
                max={59}
                aria-label={`from ${secondsLabel}`}
                disabled={disabled}
                onFocus={() => setSelectedFieldIndex(0)}
              />
            )}

            <span className={classes.separator} style={_styles.separator}>
              {labelSeparator}
            </span>

            <div className={classes.inputWrapper} style={_styles.inputWrapper}>
              <TimeField
                ref={(node) => {
                  hoursRef.current[1] = node;
                }}
                value={toTime.hours}
                onChange={handleHoursChange}
                setValue={(val) => handleHoursChange(val, false)}
                className={classes.timeField}
                style={_styles.timeField}
                withSeparator
                size={size}
                max={23}
                aria-label={`to ${hoursLabel}`}
                disabled={disabled}
                onFocus={() => setSelectedFieldIndex(1)}
              />

              <TimeField
                ref={(node) => {
                  minutesRef.current[1] = node;
                }}
                value={toTime.minutes}
                onChange={handleMinutesChange}
                setValue={(val) => setToTime((c) => ({ ...c, minutes: val }))}
                className={classes.timeField}
                style={_styles.timeField}
                withSeparator={withSeconds}
                size={size}
                max={59}
                aria-label={`to ${minutesLabel}`}
                disabled={disabled}
                onFocus={() => setSelectedFieldIndex(1)}
              />

              {withSeconds && (
                <TimeField
                  ref={(node) => {
                    secondsRef.current[1] = node;
                  }}
                  value={toTime.seconds}
                  onChange={handleSecondsChange}
                  setValue={(val) => setToTime((c) => ({ ...c, seconds: val }))}
                  className={classes.timeField}
                  style={_styles.timeField}
                  size={size}
                  max={59}
                  aria-label={`to ${secondsLabel}`}
                  disabled={disabled}
                  onFocus={() => setSelectedFieldIndex(1)}
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
);

TimeRangeInput.displayName = '@mantine/dates/TimeRangeInput';
