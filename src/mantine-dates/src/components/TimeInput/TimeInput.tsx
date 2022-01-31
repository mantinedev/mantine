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
  ClassNames,
  CloseButton,
  extractMargins,
} from '@mantine/core';
import { useDidUpdate, useMergedRef, useUuid } from '@mantine/hooks';
import { TimeField } from '../TimeInputBase/TimeField/TimeField';
import { createTimeHandler } from '../TimeInputBase/create-time-handler/create-time-handler';
import useStyles from './TimeInput.styles';
import { AmPmInput } from '../TimeInputBase/AmPmInput/AmPmInput';
import { createAmPmHandler } from '../TimeInputBase/create-amPm-handler/create-amPm-handler';
import { getDate } from '../TimeInputBase/get-date/get-date';
import { getTimeValues } from '../TimeInputBase/get-time-values/get-time-value';

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

  /** Controlled input value */
  value?: Date;

  /** Uncontrolled input default value */
  defaultValue?: Date;

  /** Controlled input onChange handler */
  onChange?(value: Date): void;

  /** Display seconds input */
  withSeconds?: boolean;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Time format */
  format?: '12' | '24';

  /** Uncontrolled input name */
  name?: string;

  /** aria-label for hours input */
  hoursLabel?: string;

  /** aria-label for minutes input */
  minutesLabel?: string;

  /** aria-label for seconds input */
  secondsLabel?: string;

  /** aria-label for am/pm input */
  amPmLabel?: string;

  /** Placeholder for hours/minutes/seconds inputs*/
  timePlaceholder?: string;

  /** Placeholder for am/pm input */
  amPmPlaceholder?: string;

  /** Disable field */
  disabled?: boolean;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
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
      clearable = false,
      clearButtonLabel,
      format = '24',
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      amPmLabel,
      timePlaceholder = '--',
      amPmPlaceholder = 'am',
      disabled = false,
      sx,
      ...others
    }: TimeInputProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles({ size }, { classNames, styles, name: 'TimeInput' });
    const { margins, rest } = extractMargins(others);
    const uuid = useUuid(id);

    const hoursRef = useRef<HTMLInputElement>();
    const minutesRef = useRef<HTMLInputElement>();
    const secondsRef = useRef<HTMLInputElement>();
    const amPmRef = useRef<HTMLInputElement>();
    const [time, setTime] = useState<{
      hours: string;
      minutes: string;
      seconds: string;
      amPm: string;
    }>(getTimeValues(value || defaultValue, format));
    const [_value, setValue] = useState<Date>(value || defaultValue);

    useDidUpdate(() => {
      if (_value) {
        setTime(getTimeValues(_value, format));
      }
    }, [_value, format]);

    const setDate = (change: Partial<typeof time>) => {
      const timeWithChange = { ...time, ...change };
      const newDate = getDate(
        timeWithChange.hours,
        timeWithChange.minutes,
        timeWithChange.seconds,
        format,
        timeWithChange.amPm
      );
      setValue(newDate);
      typeof onChange === 'function' && onChange(newDate);
    };

    const handleHoursChange = createTimeHandler({
      onChange: (val) => {
        setDate({ hours: val });
      },
      min: format === '12' ? 1 : 0,
      max: format === '12' ? 12 : 23,
      maxValue: 2,
      nextRef: minutesRef,
    });

    const handleMinutesChange = createTimeHandler({
      onChange: (val) => {
        setDate({ minutes: val });
      },
      min: 0,
      max: 59,
      maxValue: 5,
      nextRef: !withSeconds ? amPmRef : secondsRef,
    });

    const handleSecondsChange = createTimeHandler({
      onChange: (val) => {
        setDate({ seconds: val });
      },
      min: 0,
      max: 59,
      maxValue: 5,
      nextRef: amPmRef,
    });

    const handleAmPmChange = createAmPmHandler({
      onChange: (val) => {
        setDate({ amPm: val });
      },
    });

    const handleClear = () => {
      setTime({ hours: '', minutes: '', seconds: '', amPm: '' });
      hoursRef.current.focus();
    };

    const rightSection =
      clearable && _value ? (
        <CloseButton
          variant="transparent"
          aria-label={clearButtonLabel}
          onClick={handleClear}
          size={size}
        />
      ) : null;

    return (
      <InputWrapper
        required={required}
        label={label}
        error={error}
        description={description}
        className={className}
        style={style}
        classNames={classNames}
        styles={styles}
        size={size}
        __staticSelector="TimeInput"
        id={uuid}
        sx={sx}
        {...margins}
        {...wrapperProps}
      >
        <Input
          component="div"
          __staticSelector="TimeInput"
          required={required}
          invalid={!!error}
          onClick={() => hoursRef.current.focus()}
          size={size}
          className={cx({ [classes.disabled]: disabled })}
          classNames={classNames}
          styles={styles}
          disabled={disabled}
          rightSection={rightSection}
          rightSectionWidth={theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })}
          {...rest}
        >
          <div className={classes.controls}>
            <TimeField
              ref={useMergedRef(hoursRef, ref)}
              value={time.hours}
              onChange={handleHoursChange}
              setValue={(val) => setTime((current) => ({ ...current, hours: val }))}
              id={uuid}
              className={classes.timeInput}
              withSeparator
              size={size}
              max={format === '12' ? 12 : 23}
              placeholder={timePlaceholder}
              aria-label={hoursLabel}
              disabled={disabled}
              name={name}
            />
            <TimeField
              ref={minutesRef}
              value={time.minutes}
              onChange={handleMinutesChange}
              setValue={(val) => setTime((current) => ({ ...current, minutes: val }))}
              className={classes.timeInput}
              withSeparator={withSeconds}
              size={size}
              max={59}
              placeholder={timePlaceholder}
              aria-label={minutesLabel}
              disabled={disabled}
            />
            {withSeconds && (
              <TimeField
                ref={secondsRef}
                value={time.seconds}
                onChange={handleSecondsChange}
                setValue={(val) => setTime((current) => ({ ...current, seconds: val }))}
                className={classes.timeInput}
                size={size}
                max={59}
                placeholder={timePlaceholder}
                aria-label={secondsLabel}
                disabled={disabled}
              />
            )}
            {format === '12' && (
              <AmPmInput
                ref={amPmRef}
                value={time.amPm}
                onChange={handleAmPmChange}
                placeholder={amPmPlaceholder}
                size={size}
                aria-label={amPmLabel}
                disabled={disabled}
              />
            )}
          </div>
        </Input>
      </InputWrapper>
    );
  }
);

TimeInput.displayName = '@mantine/dates/TimeInput';
