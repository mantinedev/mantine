import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesInput } from '../../hooks';
import { pickCalendarProps } from '../Calendar';
import { MonthPicker, MonthPickerBaseProps } from '../MonthPicker';
import { DatePickerType } from '../../types';
import { getDefaultClampedDate } from '../../utils';
import {
  PickerInputBase,
  DateInputSharedProps,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';

export type MonthPickerInputStylesNames = PickerInputBaseStylesNames;

export interface MonthPickerInputProps<Type extends DatePickerType = 'default'>
  extends DateInputSharedProps,
    MonthPickerBaseProps<Type> {
  /** Dayjs format to display input value, "MMMM YYYY" by default  */
  valueFormat?: string;
}

type MonthPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerInputProps<Type>
) => JSX.Element) & { displayName?: string };

const defaultProps: Partial<MonthPickerInputProps> = {
  type: 'default',
  valueFormat: 'MMMM YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

export const MonthPickerInput: MonthPickerInputComponent = forwardRef((props, ref) => {
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
    variant,
    size,
    dropdownType,
    sortDates,
    minDate,
    maxDate,
    ...rest
  } = useComponentDefaultProps('MonthPickerInput', defaultProps, props);

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

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={dropdownOpened}
      dropdownHandlers={dropdownHandlers}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      __staticSelector="MonthPickerInput"
      ref={ref}
      onClear={onClear}
      shouldClear={shouldClear}
      value={_value}
      type={type}
      variant={variant}
      size={size}
      dropdownType={dropdownType}
      {...others}
    >
      <MonthPicker
        {...calendarProps}
        type={type}
        value={_value}
        defaultDate={
          Array.isArray(_value)
            ? _value[0] || getDefaultClampedDate({ maxDate, minDate })
            : _value || getDefaultClampedDate({ maxDate, minDate })
        }
        onChange={setValue}
        locale={locale}
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        __staticSelector="MonthPickerInput"
        __stopPropagation={dropdownType === 'popover'}
        variant={variant}
        size={size}
        minDate={minDate}
        maxDate={maxDate}
      />
    </PickerInputBase>
  );
});

MonthPickerInput.displayName = '@mantine/dates/MonthPickerInput';
