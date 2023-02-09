import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/core';
import { useDatesInput } from '../../hooks';
import { pickCalendarProps } from '../Calendar';
import { YearPicker, YearPickerBaseProps } from '../YearPicker';
import { DatePickerType } from '../../types';
import { getDefaultClampedDate } from '../../utils';
import {
  PickerInputBase,
  DateInputSharedProps,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';

export type YearPickerInputStylesNames = PickerInputBaseStylesNames;

export interface YearPickerInputProps<Type extends DatePickerType = 'default'>
  extends DateInputSharedProps,
    YearPickerBaseProps<Type> {
  /** Dayjs format to display input value, "YYYY" by default  */
  valueFormat?: string;
}

type YearPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerInputProps<Type>
) => JSX.Element) & { displayName?: string };

const defaultProps: Partial<YearPickerInputProps> = {
  type: 'default',
  valueFormat: 'YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

export const YearPickerInput: YearPickerInputComponent = forwardRef((props, ref) => {
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
    minDate,
    maxDate,
    ...rest
  } = useComponentDefaultProps('YearPickerInput', defaultProps, props);

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
      __staticSelector="YearPickerInput"
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
      <YearPicker
        {...calendarProps}
        size={size}
        variant={variant}
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
        __staticSelector="YearPickerInput"
        __stopPropagation={dropdownType === 'popover'}
        minDate={minDate}
        maxDate={maxDate}
      />
    </PickerInputBase>
  );
});

YearPickerInput.displayName = '@mantine/dates/YearPickerInput';
