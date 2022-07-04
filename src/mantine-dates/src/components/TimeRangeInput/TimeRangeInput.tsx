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
  Selectors,
  CloseButton,
  extractSystemStyles,
  useMantineDefaultProps,
} from '@mantine/core';
import { useDidUpdate, useMergedRef, useUuid } from '@mantine/hooks';
import useStyles from './TimeRangeInput.styles';
import { TimeInput } from '../TimeInput';

export type TimeRangeInputStylesNames =
  | Exclude<Selectors<typeof useStyles>, 'disabled'>
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

  /** aria-label for am/pm input */
  amPmLabel?: string;

  /** placeholder for time input */
  timePlaceholder?: string;

  /** placeholder for am/pm input */
  amPmPlaceholder?: string;

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

const defaultProps: Partial<TimeRangeInputProps> = {
  size: 'sm',
  defaultValue: [null, null],
  withSeconds: false,
  clearable: false,
  format: '24',
  timePlaceholder: '--',
  amPmPlaceholder: 'am',
  labelSeparator: '–',
  disabled: false,
};

export const TimeRangeInput = forwardRef<HTMLInputElement, TimeRangeInputProps>(
  (props: TimeRangeInputProps, ref) => {
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
      name,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      amPmLabel,
      timePlaceholder,
      amPmPlaceholder,
      labelSeparator,
      disabled,
      sx,
      labelProps,
      descriptionProps,
      errorProps,
      ...others
    } = useMantineDefaultProps('TimeRangeInput', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { size },
      { classNames, styles, name: 'TimeRangeInput' }
    );

    const { systemStyles, rest } = extractSystemStyles(others);
    const uuid = useUuid(id);

    const fromTimeRef = useRef<HTMLInputElement>();
    const toTimeRef = useRef<HTMLInputElement>();
    const [_value, setValue] = useState<[Date, Date]>(value ?? defaultValue);

    useDidUpdate(() => {
      typeof onChange === 'function' && onChange(_value);
    }, [_value]);

    // Allow controlled value prop to override internal _value
    useDidUpdate(() => {
      if (
        value[0]?.getTime() !== _value[0]?.getTime() ||
        value[1]?.getTime() !== _value[1]?.getTime()
      ) {
        setValue(value);
      }
    }, [value]);

    const handleClear = () => {
      setValue([null, null]);
      fromTimeRef.current?.focus();
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

    const forwardProps = {
      amPmLabel,
      amPmPlaceholder,
      disabled,
      format,
      hoursLabel,
      minutesLabel,
      secondsLabel,
      size,
      timePlaceholder,
      withSeconds,
    };

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
        errorProps={errorProps}
        descriptionProps={descriptionProps}
        labelProps={labelProps}
        {...systemStyles}
        {...wrapperProps}
      >
        <Input
          component="div"
          __staticSelector="TimeRangeInput"
          required={required}
          invalid={!!error}
          onClick={() => {
            fromTimeRef.current?.focus();
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
            <TimeInput
              ref={useMergedRef(fromTimeRef, ref)}
              variant="unstyled"
              value={_value[0]}
              onChange={(date) => setValue([date, _value[1]])}
              name={name}
              nextRef={toTimeRef}
              id={uuid}
              {...forwardProps}
            />

            <span
              className={classes.separator}
              style={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
              }}
            >
              {labelSeparator}
            </span>

            <TimeInput
              ref={toTimeRef}
              variant="unstyled"
              value={_value[1]}
              onChange={(date) => setValue([_value[0], date])}
              {...forwardProps}
            />
          </div>
        </Input>
      </InputWrapper>
    );
  }
);

TimeRangeInput.displayName = '@mantine/dates/TimeRangeInput';
