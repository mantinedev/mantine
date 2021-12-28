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
  useExtractedMargins,
} from '@mantine/core';
import { useMergedRef, useUncontrolled, useDidUpdate, useUuid } from '@mantine/hooks';
import dayjs from 'dayjs';
import { TimeField } from './TimeField/TimeField';
import { createTimeHandler } from './create-time-handler/create-time-handler';
import { getTimeValues } from './get-time-values/get-time-value';
import useStyles from './TimeInput.styles';
import { padTime } from './pad-time/pad-time';
import { AmPmSelect } from './AmPmSelect/AmPmSelect';

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

  /** The time format */
  format?: '12' | '24';

  /** Uncontrolled input name */
  name?: string;

  /** aria-label for hours input */
  hoursLabel?: string;

  /** aria-label for minutes input */
  minutesLabel?: string;

  /** aria-label for seconds input */
  secondsLabel?: string;

  /** label for am select */
  amLabel?: string;

  /** label for pm select */
  pmLabel?: string;

  /** Disable field */
  disabled?: boolean;
}

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
      format = '24',
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      amLabel = 'AM',
      pmLabel = 'PM',
      disabled = false,
      sx,
      ...others
    }: TimeInputProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size }, { classNames, styles, name: 'TimeInput' });
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
    const amPmRef = useRef<HTMLSelectElement>();
    const [amPm, setAmPm] = useState('am');
    const [time, setTime] = useState(getTimeValues(_value));

    useDidUpdate(() => {
      setTime(getTimeValues(_value));
    }, [_value]);

    useDidUpdate(() => {
      if (format === '12') {
        setAmPm(parseInt(time.hours, 10) >= 12 ? 'pm' : 'am');
      }
    }, [format]);

    const handleHoursChange = createTimeHandler({
      onChange: (val) => {
        let newVal = parseInt(val, 10);

        if (format === '12' && amPm === 'pm') {
          newVal += 12;
        }

        setTime((c) => ({ ...c, hours: newVal.toString() }));
        handleChange(dayjs(_value).set('hours', newVal).toDate());
      },
      min: 0,
      max: format === '12' ? 11 : 23,
      maxValue: format === '12' ? 1 : 2,
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
      nextSelectRef: amPmRef,
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
        __staticSelector="TimeInput"
        id={uuid}
        sx={sx}
        {...wrapperProps}
      >
        <Input
          component="div"
          __staticSelector="TimeInput"
          required={required}
          invalid={!!error}
          onClick={() => format === '24' && hoursRef.current.focus()}
          size={size}
          className={cx({ [classes.disabled]: disabled })}
          classNames={classNames}
          styles={styles}
          disabled={disabled}
          {...rest}
        >
          <div className={classes.controls}>
            <TimeField
              ref={useMergedRef(hoursRef, ref)}
              value={
                format === '12' && amPm === 'pm'
                  ? padTime(parseInt(time.hours, 10) - 12)
                  : time.hours
              }
              onChange={handleHoursChange}
              setValue={(val) => setTime((c) => ({ ...c, hours: val }))}
              id={uuid}
              className={classes.timeInput}
              withSeparator
              size={size}
              max={format === '12' ? 11 : 23}
              aria-label={hoursLabel}
              disabled={disabled}
            />

            <TimeField
              ref={minutesRef}
              value={time.minutes}
              onChange={handleMinutesChange}
              setValue={(val) => setTime((c) => ({ ...c, minutes: val }))}
              className={classes.timeInput}
              withSeparator={withSeconds}
              size={size}
              max={59}
              aria-label={minutesLabel}
              disabled={disabled}
            />

            {withSeconds && (
              <TimeField
                ref={secondsRef}
                value={time.seconds}
                onChange={handleSecondsChange}
                setValue={(val) => setTime((c) => ({ ...c, seconds: val }))}
                className={classes.timeInput}
                size={size}
                max={59}
                aria-label={secondsLabel}
                disabled={disabled}
              />
            )}

            {format === '12' && (
              <AmPmSelect
                ref={amPmRef}
                value={amPm}
                onChange={(val) => {
                  setAmPm(val.target.value);

                  const hour = parseInt(time.hours, 10);

                  handleChange(
                    dayjs(_value)
                      .set('hours', val.target.value === 'pm' ? hour + 12 : hour - 12)
                      .toDate()
                  );
                }}
                setValue={(val) => {
                  setAmPm(val);
                }}
                amLabel={amLabel}
                pmLabel={pmLabel}
                size={size}
                disabled={disabled}
                error={!!error}
              />
            )}

            {name && <input type="hidden" name={name} value={_value.toISOString()} />}
          </div>
        </Input>
      </InputWrapper>
    );
  }
);

TimeInput.displayName = '@mantine/dates/TimeInput';
