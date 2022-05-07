import dayjs from 'dayjs';
import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, upperFirst } from '@mantine/hooks';
import { useMantineTheme, useMantineDefaultProps } from '@mantine/core';
import { FirstDayOfWeek } from '../../types';
import { CalendarSharedProps } from '../CalendarBase/CalendarBase';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';
import { DatePickerBase, DatePickerBaseSharedProps } from '../DatePickerBase/DatePickerBase';

export interface DateRangePickerProps
  extends Omit<DatePickerBaseSharedProps, 'value' | 'onChange'>,
    Omit<CalendarSharedProps, 'size' | 'styles' | 'classNames' | 'value' | 'onChange'> {
  /** Selected date, required with controlled input */
  value?: [Date | null, Date | null];

  /** Called when date range changes */
  onChange?(value: [Date | null, Date | null]): void;

  /** Default value for uncontrolled input */
  defaultValue?: [Date | null, Date | null];

  /** Set to false to force dropdown to stay open after date was selected */
  closeCalendarOnChange?: boolean;

  /** dayjs input format */
  inputFormat?: string;

  /** Control initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Separator between dates */
  labelSeparator?: string;

  /** Set first day of the week */
  firstDayOfWeek?: FirstDayOfWeek;

  /** Allow one date to be selected as range */
  allowSingleDateInRange?: boolean;

  /** Allows to show multiple months */
  amountOfMonths?: number;

  /** Render day based on the date */
  renderDay?(date: Date): React.ReactNode;
}

const validationRule = (val: any) =>
  Array.isArray(val) && val.length === 2 && val.every((v) => v instanceof Date);

const isFirstDateSet = (val: any) =>
  Array.isArray(val) && val.length === 2 && val[0] instanceof Date;

const defaultProps: Partial<DateRangePickerProps> = {
  shadow: 'sm',
  transitionDuration: 200,
  closeCalendarOnChange: true,
  labelFormat: 'MMMM YYYY',
  initiallyOpened: false,
  size: 'sm',
  dropdownType: 'popover',
  labelSeparator: '–',
  clearable: true,
  firstDayOfWeek: 'monday',
  allowSingleDateInRange: false,
  amountOfMonths: 1,
  withinPortal: true,
};

export const DateRangePicker = forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (props: DateRangePickerProps, ref) => {
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
      size,
      dropdownType,
      labelSeparator,
      clearable,
      clearButtonLabel,
      firstDayOfWeek,
      allowLevelChange,
      allowSingleDateInRange,
      amountOfMonths,
      withinPortal,
      initialLevel,
      onDropdownClose,
      onDropdownOpen,
      hideOutsideDates,
      hideWeekdays,
      renderDay,
      ...others
    } = useMantineDefaultProps('DateRangePicker', defaultProps, props);

    const theme = useMantineTheme();
    const finalLocale = locale || theme.datesLocale;
    const dateFormat = inputFormat || theme.dateFormat;
    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
    const calendarSize = size === 'lg' || size === 'xl' ? 'md' : 'sm';
    const inputRef = useRef<HTMLInputElement>();
    const [_value, setValue] = useUncontrolled<[Date, Date]>({
      value,
      defaultValue,
      finalValue: [null, null],
      onChange,
      rule: isFirstDateSet,
    });

    const handleValueChange = (range: [Date, Date]) => {
      setValue(range);
      if (closeCalendarOnChange && validationRule(range)) {
        setDropdownOpened(false);
        onDropdownClose?.();
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }
    };

    const valueValid = validationRule(_value);
    const firstValueValid = isFirstDateSet(_value);

    const firstDateLabel = _value[0]
      ? upperFirst(dayjs(_value[0]).locale(finalLocale).format(dateFormat))
      : '';

    const secondDateLabel = _value[1]
      ? upperFirst(dayjs(_value[1]).locale(finalLocale).format(dateFormat))
      : '';

    const handleClear = () => {
      setValue([null, null]);
      setDropdownOpened(true);
      onDropdownOpen?.();
      inputRef.current?.focus();
    };

    const handleDropdownToggle = (isOpened: boolean) => {
      if (!isOpened && firstValueValid && _value[1] === null) {
        handleClear();
      }
      setDropdownOpened(isOpened);
    };

    return (
      <DatePickerBase
        dropdownOpened={dropdownOpened}
        setDropdownOpened={handleDropdownToggle}
        shadow={shadow}
        transitionDuration={transitionDuration}
        ref={useMergedRef(ref, inputRef)}
        size={size}
        styles={styles}
        classNames={classNames}
        inputLabel={firstValueValid ? `${firstDateLabel} ${labelSeparator} ${secondDateLabel}` : ''}
        __staticSelector="DateRangePicker"
        dropdownType={dropdownType}
        clearable={clearable && firstValueValid}
        clearButtonLabel={clearButtonLabel}
        onClear={handleClear}
        withinPortal={withinPortal}
        amountOfMonths={amountOfMonths}
        onDropdownClose={onDropdownClose}
        onDropdownOpen={onDropdownOpen}
        {...others}
      >
        <RangeCalendar
          classNames={classNames}
          styles={styles}
          locale={finalLocale}
          nextMonthLabel={nextMonthLabel}
          previousMonthLabel={previousMonthLabel}
          initialMonth={valueValid ? _value[0] : initialMonth}
          value={_value}
          onChange={handleValueChange}
          labelFormat={labelFormat}
          dayClassName={dayClassName}
          dayStyle={dayStyle}
          disableOutsideEvents={disableOutsideEvents}
          minDate={minDate}
          maxDate={maxDate}
          excludeDate={excludeDate}
          __staticSelector="DateRangePicker"
          fullWidth={dropdownType === 'modal'}
          firstDayOfWeek={firstDayOfWeek}
          size={dropdownType === 'modal' ? 'lg' : calendarSize}
          allowLevelChange={allowLevelChange}
          allowSingleDateInRange={allowSingleDateInRange}
          amountOfMonths={amountOfMonths}
          initialLevel={initialLevel}
          hideOutsideDates={hideOutsideDates}
          hideWeekdays={hideWeekdays}
          renderDay={renderDay}
        />
      </DatePickerBase>
    );
  }
);

DateRangePicker.displayName = '@mantine/dates/DateRangePicker';
