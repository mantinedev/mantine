import dayjs from 'dayjs';
import React, { useState, useRef, forwardRef, useEffect } from 'react';
import { useUncontrolled, useMergedRef, upperFirst } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { Calendar, CalendarSettings } from '../Calendar/Calendar';
import { DatePickerBase, DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';

export interface DatePickerProps
  extends Omit<DatePickerBaseSharedProps, 'onChange'>,
    Omit<CalendarSettings, 'size'> {
  /** Selected date, required with controlled input */
  value?: Date;

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
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      defaultValue,
      classNames,
      styles,
      shadow = 'sm',
      locale,
      inputFormat,
      transitionDuration = 200,
      transitionTimingFunction,
      nextMonthLabel,
      previousMonthLabel,
      closeCalendarOnChange = true,
      labelFormat = 'MMMM YYYY',
      withSelect = false,
      yearsRange,
      dayClassName,
      dayStyle,
      disableOutsideEvents,
      minDate,
      maxDate,
      excludeDate,
      initialMonth,
      initiallyOpened = false,
      name = 'date',
      size = 'sm',
      dropdownType = 'popover',
      clearable = true,
      disabled = false,
      clearButtonLabel,
      fixOnBlur = true,
      allowFreeInput,
      withinPortal = true,
      dateParser,
      firstDayOfWeek = 'monday',
      onFocus,
      onBlur,
      amountOfMonths,
      ...others
    }: DatePickerProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const finalLocale = locale || theme.datesLocale;
    const dateFormat = inputFormat || theme.dateFormat;
    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
    const [calendarMonth, setCalendarMonth] = useState(initialMonth || new Date());
    const calendarSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';
    const inputRef = useRef<HTMLInputElement>();

    const [lastValidValue, setLastValidValue] = useState(defaultValue ?? null);
    const [_value, setValue] = useUncontrolled<Date | string>({
      value,
      defaultValue,
      finalValue: null,
      onChange,
      rule: (val) => val === null || val instanceof Date,
    });

    const [focused, setFocused] = useState(false);
    const [inputState, setInputState] = useState(
      _value instanceof Date ? upperFirst(dayjs(_value).locale(finalLocale).format(dateFormat)) : ''
    );

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
      closeCalendarOnChange && setDropdownOpened(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    };

    const handleClear = () => {
      setValue(null);
      setLastValidValue(null);
      setInputState('');
      setDropdownOpened(true);
      inputRef.current?.focus();
    };

    const parseDate = (date: string) =>
      dateParser ? dateParser(date) : dayjs(date, dateFormat, finalLocale).toDate();

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setFocused(false);
      const date = typeof _value === 'string' ? parseDate(_value) : _value;

      if (dayjs(date).isValid()) {
        setValue(date);
        setLastValidValue(date);
        setInputState(upperFirst(dayjs(date).locale(finalLocale).format(dateFormat)));
      } else if (fixOnBlur) {
        setValue(lastValidValue);
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setFocused(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDropdownOpened(true);

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
        name={name}
        inputLabel={inputState}
        __staticSelector="DatePicker"
        dropdownType={dropdownType}
        clearable={clearable && !!_value && !disabled}
        clearButtonLabel={clearButtonLabel}
        onClear={handleClear}
        disabled={disabled}
        withinPortal={withinPortal}
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
          withSelect={withSelect && !allowFreeInput}
          yearsRange={yearsRange}
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
        />
      </DatePickerBase>
    );
  }
);

DatePicker.displayName = '@mantine/dates/DatePicker';
