import React, { useState, useRef, forwardRef, useEffect } from 'react';
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
import { useMergedRef, useUncontrolled, useDidUpdate, useUuid } from '@mantine/hooks';
import dayjs, { UnitType } from 'dayjs';
import { getMidnight } from '../../utils/get-midnight/get-midnight';
import { TimeField } from '../TimeInput/TimeField/TimeField';
import { createTimeHandler } from '../TimeInputBase/create-time-handler/create-time-handler';
import { getTimeValues } from '../TimeInputBase/get-time-values/get-time-value';
import useStyles from './TimeRangeInput.styles';
import { padTime } from '../TimeInputBase/pad-time/pad-time';
import { AmPmInput } from '../TimeInputBase/AmPmInput/AmPmInput';
import { createAmPmHandler } from '../TimeInputBase/create-amPm-handler/create-amPm-handler';

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

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

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

  /** Disable field */
  disabled?: boolean;

  /** Separator between time inputs */
  labelSeparator?: string;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

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
      defaultValue = [new Date(), new Date(new Date().valueOf() + 1000)],
      onChange,
      withSeconds = false,
      clearable = false,
      clearButtonLabel,
      format = '24',
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      labelSeparator = '–',
      disabled = false,
      sx,
      ...others
    }: TimeRangeInputProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(
      { size },
      { classNames, styles, name: 'TimeRangeInput' }
    );
    const { margins, rest } = extractMargins(others);
    const uuid = useUuid(id);

    const [_value, handleChange] = useUncontrolled<(Date | undefined)[]>({
      value,
      defaultValue,
      finalValue: [],
      rule: (val) => val && val.length === 2 && val.every((v) => v instanceof Date),
      onChange,
    });

    const hoursRef = useRef<HTMLInputElement[]>([]);
    const minutesRef = useRef<HTMLInputElement[]>([]);
    const secondsRef = useRef<HTMLInputElement[]>([]);
    const formatsRef = useRef<HTMLInputElement[]>([]);
    const [fromTime, setFromTime] = useState(getTimeValues(_value[0]));
    const [toTime, setToTime] = useState(getTimeValues(_value[1]));
    const [fromAmPm, setFromAmPm] = useState('am');
    const [toAmPm, setToAmPm] = useState('am');
    const [selectedFieldIndex, setSelectedFieldIndex] = useState<0 | 1>(0);

    useDidUpdate(() => {
      setFromTime(getTimeValues(_value[0]));
      setToTime(getTimeValues(_value[1]));
    }, [_value]);

    useEffect(() => {
      if (format === '12') {
        setFromAmPm(parseInt(fromTime.hours, 10) >= 12 ? 'pm' : 'am');
        setToAmPm(parseInt(toTime.hours, 10) >= 12 ? 'pm' : 'am');
      }
    }, [format]);

    const setTime = (
      cb: (val: ReturnType<typeof getTimeValues>) => ReturnType<typeof getTimeValues>
    ) => {
      selectedFieldIndex === 0 ? setFromTime(cb) : setToTime(cb);
    };

    const constructDayjsValue = (fieldName: UnitType, val: string) => {
      const index = selectedFieldIndex;
      const newTime = [..._value];
      newTime[index] = dayjs(newTime[index] ?? getMidnight())
        .set(fieldName, parseInt(val, 10))
        .toDate();
      return newTime;
    };

    const nextMinuteRef = () => {
      if (withSeconds) {
        return secondsRef.current[selectedFieldIndex];
      }

      if (format === '12') {
        return formatsRef.current[selectedFieldIndex];
      }

      if (format === '24' && selectedFieldIndex === 0) {
        return hoursRef.current[1];
      }

      return undefined;
    };

    const handleHoursChange = createTimeHandler({
      onChange: (val) => {
        let newVal = parseInt(val, 10);
        const amPm = selectedFieldIndex === 0 ? fromAmPm : toAmPm;

        if (format === '12' && amPm === 'pm') {
          newVal += 12;
        }

        setTime((current) => ({ ...current, hours: newVal.toString() }));
        handleChange(constructDayjsValue('hours', newVal.toString()));
      },
      min: 0,
      max: format === '12' ? 11 : 23,
      maxValue: format === '12' ? 1 : 2,
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
        current: nextMinuteRef(),
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
        current:
          format === '12'
            ? formatsRef.current[selectedFieldIndex]
            : format === '24' && selectedFieldIndex === 0
            ? hoursRef.current[1]
            : undefined,
      },
    });

    const handleAmPmChange = createAmPmHandler({
      onChange: (val) => {
        let hour: number = 0;

        if (selectedFieldIndex === 0) {
          setFromAmPm(val);
          hour = parseInt(fromTime.hours, 10);
        } else {
          setToAmPm(val);
          hour = parseInt(toTime.hours, 10);
        }

        if (val === 'am' || val === 'pm') {
          handleChange(
            constructDayjsValue('hours', (val === 'pm' ? hour + 12 : hour - 12).toString())
          );
        }
      },
      nextRef: {
        current: selectedFieldIndex === 0 ? hoursRef.current[1] : undefined,
      },
    });

    const handleClear = () => {
      handleChange([]);
      setSelectedFieldIndex(0);
      hoursRef.current[0]?.focus();
    };

    const rightSection =
      clearable && _value.filter((item) => Boolean(item)).length > 0 ? (
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
        __staticSelector="TimeRangeInput"
        id={uuid}
        sx={sx}
        {...margins}
        {...wrapperProps}
      >
        <Input
          component="div"
          __staticSelector="TimeRangeInput"
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
          rightSection={rightSection}
          rightSectionWidth={theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })}
          {...rest}
        >
          <div className={classes.inputWrapper}>
            <TimeField
              ref={useMergedRef((node: HTMLInputElement) => {
                hoursRef.current[0] = node;
              }, ref)}
              value={
                format === '12' && parseInt(fromTime.hours, 10) >= 12
                  ? padTime(parseInt(fromTime.hours, 10) - 12)
                  : fromTime.hours
              }
              onChange={handleHoursChange}
              setValue={(val) => handleHoursChange(val, false)}
              id={uuid}
              className={classes.timeField}
              withSeparator
              size={size}
              max={format === '12' ? 11 : 23}
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
                size={size}
                max={59}
                aria-label={`from ${secondsLabel}`}
                disabled={disabled}
                onFocus={() => setSelectedFieldIndex(0)}
              />
            )}

            {format === '12' && (
              <AmPmInput
                ref={(node) => {
                  formatsRef.current[0] = node;
                }}
                value={fromAmPm}
                onChange={handleAmPmChange}
                setValue={(val) => {
                  setFromAmPm(val);
                }}
                onFocus={() => setSelectedFieldIndex(0)}
              />
            )}

            <span className={classes.separator}>{labelSeparator}</span>

            <div className={classes.inputWrapper}>
              <TimeField
                ref={(node) => {
                  hoursRef.current[1] = node;
                }}
                value={
                  format === '12' && parseInt(toTime.hours, 10) >= 12
                    ? padTime(parseInt(toTime.hours, 10) - 12)
                    : toTime.hours
                }
                onChange={handleHoursChange}
                setValue={(val) => handleHoursChange(val, false)}
                className={classes.timeField}
                withSeparator
                size={size}
                max={format === '12' ? 11 : 23}
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
                  size={size}
                  max={59}
                  aria-label={`to ${secondsLabel}`}
                  disabled={disabled}
                  onFocus={() => setSelectedFieldIndex(1)}
                />
              )}

              {format === '12' && (
                <AmPmInput
                  ref={(node) => {
                    formatsRef.current[1] = node;
                  }}
                  value={toAmPm}
                  onChange={handleAmPmChange}
                  setValue={(val) => {
                    setToAmPm(val);
                  }}
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
