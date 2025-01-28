import { DateStringValue } from './GeneralTypes';

export type DateValue = DateStringValue | null;
export type DatesRangeValue = [DateValue, DateValue];
export type DatePickerType = 'default' | 'multiple' | 'range';

export type DatePickerValue<Type extends DatePickerType = 'default'> = Type extends 'range'
  ? DatesRangeValue
  : Type extends 'multiple'
    ? DateStringValue[]
    : DateValue;
