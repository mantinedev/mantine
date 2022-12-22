import { useUncontrolled } from '@mantine/hooks';
import { DatePickerType, DatePickerValue } from '../../types';

interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type>;
  defaultValue: DatePickerValue<Type>;
  onChange(value: DatePickerValue<Type>): void;
}

export function useUncontrolledDates<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
}: UseUncontrolledDates<Type>) {
  return useUncontrolled<any>({
    value,
    defaultValue,
    onChange,
    finalValue: type === 'range' ? [null, null] : type === 'multiple' ? [] : null,
  });
}
