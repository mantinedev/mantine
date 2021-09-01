import React, { useState, useRef } from 'react';
import { useUncontrolled, useMergedRef, upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
import { Calendar, CalendarSettings } from '../Calendar/Calendar';
import { DatePickerBase, DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';

export interface MonthPickerProps extends DatePickerBaseSharedProps, Omit<CalendarSettings, 'size'> {
  /** Selected date, required with controlled input */
  value?: Date;

  /** Called when date changes */
  onChange?(value: Date): void;

  /** Default value for uncontrolled input */
  defaultValue?: Date;

  /** Set to false to force dropdown to stay open after date was selected */
  closeCalendarOnChange?: boolean;

  /** dayjs input format */
  inputFormat?: string;

  /** Control initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Input label */
  label?: string

  description?: string
  themeOverride?: any 
  classNames?: string
  styles?: any
}

export function MonthPicker({
  value,
  onChange,
  defaultValue,
  themeOverride,
  classNames,
  styles,
  shadow = 'sm',
  locale = 'en',
  inputFormat = 'MMMM, YYYY',
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
  elementRef,
  initialMonth,
  initiallyOpened = false,
  name = 'date',
  size = 'sm',
  dropdownType = 'popover',
  clearable = true,
  disabled = false,
  clearButtonLabel,
  ...others
}: MonthPickerProps) {
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const calendarSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';
  const inputRef = useRef<HTMLInputElement>();
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => val === null || val instanceof Date,
  });

  const closeDropdown = () => {
    setDropdownOpened(false);
    setTimeout(() => inputRef.current?.focus(), transitionDuration + 20);
  };

  const handleValueChange = (date: Date) => {
    setValue(date);
    closeCalendarOnChange && closeDropdown();
  };

  const handleClear = () => {
    setValue(null);
    inputRef.current?.focus();
  };

  return (
    <>
      <DatePickerBase
        dropdownOpened={dropdownOpened}
        setDropdownOpened={setDropdownOpened}
        shadow={shadow}
        transitionDuration={transitionDuration}
        elementRef={useMergedRef(elementRef, inputRef)}
        size={size}
        styles={styles}
        classNames={classNames}
        inputLabel={
          _value instanceof Date
            ? upperFirst(dayjs(_value).locale(locale).format(inputFormat))
            : null
        }
        __staticSelector="month-picker"
        dropdownType={dropdownType}
        clearable={clearable && !!_value && !disabled}
        clearButtonLabel={clearButtonLabel}
        onClear={handleClear}
        disabled={disabled}
        {...others}
      >
        <Calendar
          classNames={classNames}
          styles={styles}
          locale={locale}
          themeOverride={themeOverride}
          nextMonthLabel={nextMonthLabel}
          previousMonthLabel={previousMonthLabel}
          initialMonth={_value instanceof Date ? _value : initialMonth}
          value={_value}
          onChange={handleValueChange}
          labelFormat={labelFormat}
          withSelect={withSelect}
          yearsRange={yearsRange}
          dayClassName={dayClassName}
          dayStyle={dayStyle}
          disableOutsideEvents={disableOutsideEvents}
          excludeDate={excludeDate}
          __staticSelector="date-picker"
          fullWidth={dropdownType === 'modal'}
          size={dropdownType === 'modal' ? 'lg' : calendarSize}
        />
      </DatePickerBase>

      <input type="hidden" name={name} value={_value instanceof Date ? _value.toISOString() : ''} />
    </>
  );
}

MonthPicker.displayName = '@mantine/dates/MonthPicker';
