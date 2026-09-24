import type { DatePickerType } from './DatePickerValue';
import type { DateStringValue } from './GeneralTypes';

export interface PickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}
