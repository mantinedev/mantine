import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesInput } from '../../hooks';
import { pickCalendarProps } from '../Calendar';
import { DatePicker, DatePickerBaseProps } from '../DatePicker';
import { DatePickerType } from '../../types';
import { getDefaultClampedDate } from '../../utils';
import {
  PickerInputBase,
  DateInputSharedProps,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';

export type DatePickerInputStylesNames = PickerInputBaseStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends DateInputSharedProps,
    DatePickerBaseProps<Type> {
  /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
  valueFormat?: string;
}

type DatePickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerInputProps<Type>
) => JSX.Element) & { displayName?: string };

const defaultProps: Partial<DatePickerInputProps> = {
  type: 'default',
  valueFormat: 'MMMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

export const DatePickerInput: DatePickerInputComponent = forwardRef((props, ref) => {
  const {
    type,
    value,
    defaultValue,
    onChange,
    valueFormat,
    labelSeparator,
    locale,
    classNames,
    styles,
    unstyled,
    closeOnChange,
    size,
    variant,
    dropdownType,
    sortDates,
    maxDate,
    minDate,
    defaultDate: _defaultDate,
    ...rest
  } = useComponentDefaultProps('DatePickerInput', defaultProps, props);

  const { calendarProps, others } = pickCalendarProps(rest);

  const {
    _value,
    setValue,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClear,
    shouldClear,
  } = useDatesInput({
    type,
    value,
    defaultValue,
    onChange,
    locale,
    format: valueFormat,
    labelSeparator,
    closeOnChange,
    sortDates,
  });

  const defaultDate =
    _defaultDate ||
    (Array.isArray(_value)
      ? _value[0] || getDefaultClampedDate({ maxDate, minDate })
      : _value || getDefaultClampedDate({ maxDate, minDate }));

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={dropdownOpened}
      dropdownHandlers={dropdownHandlers}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      __staticSelector="DatePickerInput"
      ref={ref}
      onClear={onClear}
      shouldClear={shouldClear}
      value={_value}
      type={type}
      size={size}
      variant={variant}
      dropdownType={dropdownType}
      {...others}
    >
      <DatePicker
        {...calendarProps}
        size={size}
        variant={variant}
        type={type}
        value={_value}
        defaultDate={defaultDate}
        onChange={setValue}
        locale={locale}
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        __staticSelector="DatePickerInput"
        __stopPropagation={dropdownType === 'popover'}
        maxDate={maxDate}
        minDate={minDate}
      />
    </PickerInputBase>
  );
});

DatePickerInput.displayName = '@mantine/dates/DatePickerInput';
