import React, { useState, useRef, forwardRef } from 'react';
import {
  InputSharedProps,
  InputWrapperBaseProps,
  InputStylesNames,
  InputWrapperStylesNames,
  DefaultProps,
  Input,
  MantineSize,
  Selectors,
  CloseButton,
  extractSystemStyles,
  useComponentDefaultProps,
} from '@mantine/core';
import { useDidUpdate, useMergedRef, useId } from '@mantine/hooks';
import { TimeField } from '../TimeInputBase/TimeField/TimeField';
import { createTimeHandler } from '../TimeInputBase/create-time-handler/create-time-handler';
import useStyles from './TimeInput.styles';
import { AmPmInput } from '../TimeInputBase/AmPmInput/AmPmInput';
import { createAmPmHandler } from '../TimeInputBase/create-amPm-handler/create-amPm-handler';
import { getDate } from '../TimeInputBase/get-date/get-date';
import { getTimeValues } from '../TimeInputBase/get-time-values/get-time-value';

export type TimeInputStylesNames =
  | Selectors<typeof useStyles>
  | InputStylesNames
  | InputWrapperStylesNames;

export interface TimeInputProps
  extends DefaultProps<TimeInputStylesNames>,
    InputSharedProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Input size */
  size?: MantineSize;

  /** Controlled input value */
  value?: Date | null;

  /** Uncontrolled input default value */
  defaultValue?: Date | null;

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

  /** Label for 'am' */
  amLabel?: string;

  /** Label for 'pm' */
  pmLabel?: string;

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

  /** Ref to focus after final TimeInput field. Used by TimeRangeInput */
  nextRef?: React.RefObject<HTMLInputElement>;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

const defaultProps: Partial<TimeInputProps> = {
  size: 'sm',
  withSeconds: false,
  clearable: false,
  format: '24',
  amLabel: 'am',
  pmLabel: 'pm',
  timePlaceholder: '--',
  amPmPlaceholder: 'am',
  disabled: false,
};

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
  (props: TimeInputProps, ref) => {
    const {
      required,
      label,
      error,
      description,
      className,
      style,
      size,
      wrapperProps,
      classNames,
      styles,
      id,
      value,
      defaultValue,
      onChange,
      withSeconds,
      clearable,
      clearButtonLabel,
      format,
      amLabel,
      pmLabel,
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      amPmLabel,
      timePlaceholder,
      amPmPlaceholder,
      disabled,
      sx,
      nextRef,
      labelProps,
      descriptionProps,
      errorProps,
      unstyled,
      ...others
    } = useComponentDefaultProps('TimeInput', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { size },
      { classNames, styles, unstyled, name: 'TimeInput' }
    );
    const { systemStyles, rest } = extractSystemStyles(others);
    const uuid = useId(id);

    const hoursRef = useRef<HTMLInputElement>();
    const minutesRef = useRef<HTMLInputElement>();
    const secondsRef = useRef<HTMLInputElement>();
    const amPmRef = useRef<HTMLInputElement>();
    const [time, setTime] = useState<{
      hours: string;
      minutes: string;
      seconds: string;
      amPm: string;
    }>(getTimeValues(value || defaultValue, format, amLabel, pmLabel));
    const [_value, setValue] = useState<Date | null>(value || defaultValue);

    useDidUpdate(() => {
      setTime(getTimeValues(_value, format, amLabel, pmLabel));
    }, [_value, format, amLabel, pmLabel]);

    // Allow controlled value prop to override internal _value
    useDidUpdate(() => {
      if (value?.getTime() !== _value?.getTime()) {
        setValue(value);
      }
    }, [value]);

    const setDate = (change: Partial<typeof time>) => {
      const timeWithChange = { ...time, ...change };
      const newDate = getDate(
        timeWithChange.hours,
        timeWithChange.minutes,
        timeWithChange.seconds,
        format,
        pmLabel,
        timeWithChange.amPm
      );
      setValue(newDate);
      typeof onChange === 'function' && onChange(newDate);
    };

    const handleHoursChange = createTimeHandler({
      onChange: (val, carryOver) => {
        setDate({
          hours: val,
          minutes: carryOver ?? time.minutes,
        });
      },
      min: format === '12' ? 1 : 0,
      max: format === '12' ? 12 : 23,
      nextRef: minutesRef,
      nextMax: 59,
    });

    const handleMinutesChange = createTimeHandler({
      onChange: (val, carryOver) => {
        setDate({
          minutes: val,
          seconds: carryOver ?? time.seconds,
        });
      },
      min: 0,
      max: 59,
      nextRef: withSeconds ? secondsRef : format === '12' ? amPmRef : nextRef,
      nextMax: withSeconds ? 59 : undefined,
    });

    const handleSecondsChange = createTimeHandler({
      onChange: (val) => {
        setDate({ seconds: val });
      },
      min: 0,
      max: 59,
      nextRef: format === '12' ? amPmRef : nextRef,
    });

    const handleAmPmChange = createAmPmHandler({
      amLabel,
      pmLabel,
      onChange: (val) => {
        setDate({ amPm: val });
      },
      nextRef,
    });

    const handleClear = () => {
      setTime({ hours: '', minutes: '', seconds: '', amPm: '' });
      setValue(null);
      onChange?.(null);
      hoursRef.current.focus();
    };

    const rightSection =
      clearable && _value ? (
        <CloseButton
          variant="transparent"
          aria-label={clearButtonLabel}
          onClick={handleClear}
          size={size}
          unstyled={unstyled}
        />
      ) : null;

    return (
      <Input.Wrapper
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
        errorProps={errorProps}
        descriptionProps={descriptionProps}
        labelProps={labelProps}
        unstyled={unstyled}
        {...systemStyles}
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
          unstyled={unstyled}
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
              unstyled={unstyled}
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
              unstyled={unstyled}
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
                unstyled={unstyled}
              />
            )}
            {format === '12' && (
              <AmPmInput
                ref={amPmRef}
                value={time.amPm}
                onChange={handleAmPmChange}
                placeholder={amPmPlaceholder}
                amLabel={amLabel}
                pmLabel={pmLabel}
                size={size}
                aria-label={amPmLabel}
                disabled={disabled}
                unstyled={unstyled}
              />
            )}
          </div>
        </Input>
      </Input.Wrapper>
    );
  }
);

TimeInput.displayName = '@mantine/dates/TimeInput';
