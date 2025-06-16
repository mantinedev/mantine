import { DateStringValue } from './GeneralTypes';

export type DateValue = DateStringValue | Date | null;
export type DatesRangeValue<ValueType = DateValue> = [ValueType | null, ValueType | null];
export type DatePickerType = 'default' | 'multiple' | 'range';

export type DatePickerValue<
  Type extends DatePickerType = 'default',
  ValueType = DateValue,
> = Type extends 'range'
  ? DatesRangeValue<ValueType>
  : Type extends 'multiple'
    ? ValueType[]
    : ValueType | null;
