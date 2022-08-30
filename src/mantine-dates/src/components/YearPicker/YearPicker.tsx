import React, { useState, useRef, forwardRef, useEffect } from 'react';
import { useUncontrolled, useMergedRef } from '@mantine/hooks';
import { Box, useComponentDefaultProps } from '@mantine/core';
import { CalendarSharedProps } from '../CalendarBase/CalendarBase';
import { DatePickerBase, DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';
import { YearPicker as CalendarYearPicker } from '../CalendarBase/YearPicker/YearPicker';
import useStyles from './YearPicker.styles';

export interface YearPickerProps
  extends Omit<DatePickerBaseSharedProps, 'value' | 'onChange'>,
    Omit<
      CalendarSharedProps,
      'value' | 'size' | 'classNames' | 'styles' | 'onMonthChange' | 'onChange'
    > {
  /** Selected year, required with controlled input */
  value?: number | null;

  /** Called when year changes */
  onChange?(value: number | null): void;

  /** Default value for uncontrolled input */
  defaultValue?: number | null;

  /** Minimum possible year */
  minYear?: number;

  /** Maximum possible year */
  maxYear?: number;

  /** Set to false to force dropdown to stay open after date was selected */
  closeCalendarOnChange?: boolean;

  /** Set to true to open dropdown on clear */
  openDropdownOnClear?: boolean;

  /** Control initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Input name, useful for uncontrolled variant to capture data with native form */
  name?: string;

  /** Allow free input */
  allowFreeInput?: boolean;

  /** Render day based on the date */
  renderDay?(date: Date): React.ReactNode;
}

const defaultProps: Partial<YearPickerProps> = {
  shadow: 'sm',
  transitionDuration: 200,
  closeCalendarOnChange: true,
  initiallyOpened: false,
  name: 'date',
  size: 'sm',
  dropdownType: 'popover',
  dropdownPosition: 'flip',
  clearable: true,
  disabled: false,
  fixOnBlur: true,
  withinPortal: false,
  openDropdownOnClear: false,
};

export const YearPicker = forwardRef<HTMLInputElement, YearPickerProps>(
  (props: YearPickerProps, ref) => {
    const {
      value,
      onChange,
      defaultValue,
      className,
      classNames,
      styles,
      shadow,
      locale,
      transitionDuration,
      transitionTimingFunction,
      closeCalendarOnChange,
      __staticSelector = 'YearPicker',
      dayClassName,
      dayStyle,
      minYear = 100,
      maxYear = 10000,
      initiallyOpened,
      name,
      size,
      fullWidth,
      preventFocus,
      dropdownType,
      dropdownPosition,
      clearable,
      disabled,
      clearButtonLabel,
      fixOnBlur,
      allowFreeInput,
      withinPortal,
      onFocus,
      onBlur,
      allowLevelChange,
      initialLevel,
      onDropdownClose,
      onDropdownOpen,
      renderDay,
      type,
      openDropdownOnClear,
      unstyled,
      yearLabelFormat,
      nextDecadeLabel,
      previousDecadeLabel,
      ...others
    } = useComponentDefaultProps('YearPicker', defaultProps, props);

    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
    const inputRef = useRef<HTMLInputElement>();
    const [lastValidValue, setLastValidValue] = useState(defaultValue ?? null);
    const [_value, setValue] = useUncontrolled<number>({
      value,
      defaultValue,
      finalValue: null,
      onChange,
    });

    const [focused, setFocused] = useState(false);
    const [inputState, setInputState] = useState(typeof _value === 'number' ? String(_value) : '');

    const { classes } = useStyles(
      { size, fullWidth },
      { name: __staticSelector, styles, classNames, unstyled }
    );

    const closeDropdown = () => {
      setDropdownOpened(false);
      onDropdownClose?.();
    };

    const openDropdown = () => {
      setDropdownOpened(true);
      onDropdownOpen?.();
    };

    useEffect(() => {
      if (value === null && !focused) {
        setInputState('');
      }
    }, [value, focused]);

    const handleValueChange = (year: number) => {
      setValue(year);
      setInputState(year.toString());
      closeCalendarOnChange && closeDropdown();
      window.setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleClear = () => {
      setValue(null);
      setLastValidValue(null);
      setInputState('');
      openDropdownOnClear && openDropdown();
      inputRef.current?.focus();
    };

    const parseYear = (year: string) => parseInt(year, 10);

    const setDateFromInput = () => {
      let year = typeof _value === 'string' ? parseYear(_value) : _value;
      const isValid = !Number.isNaN(year);

      if (isValid && year > maxYear) {
        year = maxYear;
      }

      if (isValid && year < minYear) {
        year = minYear;
      }

      if (isValid) {
        setValue(year);
        setLastValidValue(year);
        setInputState(year.toString());
      } else if (fixOnBlur) {
        setValue(lastValidValue);
      }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setFocused(false);

      if (allowFreeInput) {
        setDateFromInput();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && allowFreeInput) {
        closeDropdown();
        setDateFromInput();
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setFocused(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      openDropdown();

      const year = parseYear(event.target.value);
      if (!Number.isNaN(year)) {
        setValue(year);
        setLastValidValue(year);
      }

      setInputState(event.target.value);
    };

    return (
      <DatePickerBase
        className={className}
        allowFreeInput={allowFreeInput}
        dropdownOpened={dropdownOpened}
        setDropdownOpened={setDropdownOpened}
        shadow={shadow}
        transitionDuration={transitionDuration}
        ref={useMergedRef(ref, inputRef)}
        size={size}
        styles={styles}
        classNames={classNames}
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        name={name}
        inputLabel={inputState}
        __staticSelector={__staticSelector}
        dropdownType={dropdownType}
        dropdownPosition={dropdownPosition}
        clearable={clearable && !!_value && !disabled}
        clearButtonLabel={clearButtonLabel}
        onClear={handleClear}
        disabled={disabled}
        withinPortal={withinPortal}
        onDropdownClose={onDropdownClose}
        onDropdownOpen={onDropdownOpen}
        type={type}
        unstyled={unstyled}
        {...others}
      >
        <Box className={classes.yearPicker} {...others}>
          <CalendarYearPicker
            size={size}
            value={typeof _value === 'number' ? _value : new Date().getFullYear()}
            minYear={minYear}
            maxYear={maxYear}
            onChange={handleValueChange}
            classNames={classNames}
            styles={styles}
            __staticSelector={__staticSelector}
            nextDecadeLabel={nextDecadeLabel}
            previousDecadeLabel={previousDecadeLabel}
            preventFocus={allowFreeInput}
            unstyled={unstyled}
            yearLabelFormat={yearLabelFormat}
          />
        </Box>
      </DatePickerBase>
    );
  }
);

YearPicker.displayName = '@mantine/dates/YearPicker';
