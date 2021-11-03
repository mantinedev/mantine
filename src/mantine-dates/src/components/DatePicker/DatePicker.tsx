import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, upperFirst } from '@mantine/hooks';
import dayjs from 'dayjs';
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
      locale = 'en',
      inputFormat = 'MMMM D, YYYY',
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
      allowManualTyping,
      dateParser,
      ...others
    }: DatePickerProps,
    ref
  ) => {
    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
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

    const handleValueChange = (date: Date) => {
      setValue(date);

      closeCalendarOnChange && setDropdownOpened(false);
    };

    const handleClear = () => {
      setValue(null);
      setLastValidValue(null);
      inputRef.current?.focus();
    };

    const parseDate = (date: string) =>
      dateParser ? dateParser(date) : dayjs(date, inputFormat, locale).toDate();

    const handleInputBlur = () => {
      const date = typeof _value === 'string' ? parseDate(_value) : _value;

      if (dayjs(date, inputFormat, locale).isValid()) {
        setValue(date);
        setLastValidValue(date);
      } else if (fixOnBlur) {
        setValue(lastValidValue);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <DatePickerBase
        allowManualTyping={allowManualTyping}
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
        name={name}
        inputLabel={
          _value instanceof Date
            ? upperFirst(dayjs(_value).locale(locale).format(inputFormat))
            : _value ?? ''
        }
        __staticSelector="date-picker"
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
          nextMonthLabel={nextMonthLabel}
          previousMonthLabel={previousMonthLabel}
          initialMonth={_value instanceof Date ? _value : initialMonth}
          value={_value instanceof Date ? _value : dayjs(_value).toDate()}
          onChange={handleValueChange}
          labelFormat={labelFormat}
          withSelect={withSelect}
          yearsRange={yearsRange}
          dayClassName={dayClassName}
          dayStyle={dayStyle}
          disableOutsideEvents={disableOutsideEvents}
          minDate={minDate}
          maxDate={maxDate}
          excludeDate={excludeDate}
          __staticSelector="date-picker"
          fullWidth={dropdownType === 'modal'}
          size={dropdownType === 'modal' ? 'lg' : calendarSize}
        />
      </DatePickerBase>
    );
  }
);

DatePicker.displayName = '@mantine/dates/DatePicker';
