import dayjs from 'dayjs';
import React, { useState, useRef, forwardRef, useEffect } from 'react';
import { useUncontrolled, useMergedRef, upperFirst } from '@mantine/hooks';
import { useMantineTheme, useMantineDefaultProps } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { Calendar } from '../Calendar/Calendar';
import { CalendarSharedProps } from '../CalendarBase/CalendarBase';
import { DatePickerBase, DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';

export interface DatePickerProps
  extends Omit<DatePickerBaseSharedProps, 'onChange'>,
    Omit<CalendarSharedProps, 'size' | 'classNames' | 'styles'> {
  /** Selected date, required with controlled input */
  value?: Date | null;

  /** Called when date changes */
  onChange?(value: Date | null): void;

  /** Default value for uncontrolled input */
  defaultValue?: Date | null;

  /** Set to false to force dropdown to stay open after date was selected */
  closeCalendarOnChange?: boolean;

  /** dayjs input format */
  inputFormat?: string;

  /** Control initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Parser function for date provided by input typing */
  dateParser?: (value: string) => Date;

  /** Input name, useful for uncontrolled variant to capture data with native form */
  name?: string;

  /** Set first day of the week */
  firstDayOfWeek?: FirstDayOfWeek;

  /** Allow free input */
  allowFreeInput?: boolean;

  /** Render day based on the date */
  renderDay?(date: Date): React.ReactNode;
}

const defaultProps: Partial<DatePickerProps> = {
  shadow: 'sm',
  transitionDuration: 200,
  closeCalendarOnChange: true,
  labelFormat: 'MMMM YYYY',
  initiallyOpened: false,
  name: 'date',
  size: 'sm',
  dropdownType: 'popover',
  clearable: true,
  disabled: false,
  fixOnBlur: true,
  withinPortal: true,
  firstDayOfWeek: 'monday',
};

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (props: DatePickerProps, ref) => {
    const {
      value,
      onChange,
      defaultValue,
      classNames,
      styles,
      shadow,
      locale,
      inputFormat,
      transitionDuration,
      transitionTimingFunction,
      nextMonthLabel,
      previousMonthLabel,
      closeCalendarOnChange,
      labelFormat,
      dayClassName,
      dayStyle,
      disableOutsideEvents,
      minDate,
      maxDate,
      excludeDate,
      initialMonth,
      initiallyOpened,
      name,
      size,
      dropdownType,
      clearable,
      disabled,
      clearButtonLabel,
      fixOnBlur,
      allowFreeInput,
      withinPortal,
      dateParser,
      firstDayOfWeek,
      onFocus,
      onBlur,
      amountOfMonths,
      allowLevelChange,
      initialLevel,
      onDropdownClose,
      onDropdownOpen,
      hideOutsideDates,
      hideWeekdays,
      renderDay,
      type,
      ...others
    } = useMantineDefaultProps('DatePicker', defaultProps, props);

    const theme = useMantineTheme();
    const finalLocale = locale || theme.datesLocale;
    const dateFormat = type === 'date' ? 'YYYY-MM-DD' : inputFormat || theme.dateFormat;
    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
    const calendarSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';
    const inputRef = useRef<HTMLInputElement>();
    const [lastValidValue, setLastValidValue] = useState(defaultValue ?? null);
    const [_value, setValue] = useUncontrolled<Date>({
      value,
      defaultValue,
      finalValue: null,
      onChange,
      rule: (val) => val === null || val instanceof Date,
    });
    const [calendarMonth, setCalendarMonth] = useState(_value || initialMonth || new Date());

    const [focused, setFocused] = useState(false);
    const [inputState, setInputState] = useState(
      _value instanceof Date ? upperFirst(dayjs(_value).locale(finalLocale).format(dateFormat)) : ''
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

      if (value instanceof Date && !focused) {
        setInputState(dayjs(value).locale(finalLocale).format(dateFormat));
      }
    }, [value, focused]);

    const handleValueChange = (date: Date) => {
      setValue(date);
      setInputState(upperFirst(dayjs(date).locale(finalLocale).format(dateFormat)));
      closeCalendarOnChange && closeDropdown();
      window.setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleClear = () => {
      setValue(null);
      setLastValidValue(null);
      setInputState('');
      openDropdown();
      inputRef.current?.focus();
    };

    const parseDate = (date: string) =>
      dateParser ? dateParser(date) : dayjs(date, dateFormat, finalLocale).toDate();

    const setDateFromInput = () => {
      let date = typeof _value === 'string' ? parseDate(_value) : _value;

      if (maxDate && dayjs(date).isAfter(maxDate)) {
        date = maxDate;
      }

      if (minDate && dayjs(date).isBefore(minDate)) {
        date = minDate;
      }

      if (dayjs(date).isValid()) {
        setValue(date);
        setLastValidValue(date);
        setInputState(upperFirst(dayjs(date).locale(finalLocale).format(dateFormat)));
        setCalendarMonth(date);
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
      if (event.code === 'Enter' && allowFreeInput) {
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

      const date = parseDate(event.target.value);
      if (dayjs(date).isValid()) {
        setValue(date);
        setLastValidValue(date);
        setInputState(event.target.value);
        setCalendarMonth(date);
      } else {
        setInputState(event.target.value);
      }
    };

    return (
      <DatePickerBase
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
        __staticSelector="DatePicker"
        dropdownType={dropdownType}
        clearable={type === 'date' ? false : clearable && !!_value && !disabled}
        clearButtonLabel={clearButtonLabel}
        onClear={handleClear}
        disabled={disabled}
        withinPortal={withinPortal}
        amountOfMonths={amountOfMonths}
        onDropdownClose={onDropdownClose}
        onDropdownOpen={onDropdownOpen}
        type={type}
        {...others}
      >
        <Calendar
          classNames={classNames}
          styles={styles}
          locale={finalLocale}
          nextMonthLabel={nextMonthLabel}
          previousMonthLabel={previousMonthLabel}
          month={allowFreeInput ? calendarMonth : undefined}
          initialMonth={initialMonth || (_value instanceof Date ? _value : new Date())}
          onMonthChange={setCalendarMonth}
          value={_value instanceof Date ? _value : dayjs(_value).toDate()}
          onChange={handleValueChange}
          labelFormat={labelFormat}
          dayClassName={dayClassName}
          dayStyle={dayStyle}
          disableOutsideEvents={disableOutsideEvents}
          minDate={minDate}
          maxDate={maxDate}
          excludeDate={excludeDate}
          __staticSelector="DatePicker"
          fullWidth={dropdownType === 'modal'}
          size={dropdownType === 'modal' ? 'lg' : calendarSize}
          firstDayOfWeek={firstDayOfWeek}
          preventFocus={allowFreeInput}
          amountOfMonths={amountOfMonths}
          allowLevelChange={allowLevelChange}
          initialLevel={initialLevel}
          hideOutsideDates={hideOutsideDates}
          hideWeekdays={hideWeekdays}
          renderDay={renderDay}
        />
      </DatePickerBase>
    );
  }
);

DatePicker.displayName = '@mantine/dates/DatePicker';
