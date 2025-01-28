import { useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DatePickerType, DatePickerValue } from '../../types';

interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type> | undefined;
  defaultValue: DatePickerValue<Type> | undefined;
  onChange: ((value: DatePickerValue<Type>) => void) | undefined;
}

const getEmptyValue = <Type extends DatePickerType = 'default'>(type: Type) =>
  type === 'range' ? [null, null] : type === 'multiple' ? [] : null;

export function useUncontrolledDates<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
}: UseUncontrolledDates<Type>) {
  const storedType = useRef<Type>(type);
  const [_value, _setValue, controlled] = useUncontrolled<any>({
    value,
    defaultValue,
    finalValue: getEmptyValue(type),
    onChange,
  });

  let _finalValue = _value;

  if (storedType.current !== type) {
    storedType.current = type;

    if (value === undefined) {
      _finalValue = defaultValue !== undefined ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    }
  }

  return [_finalValue, _setValue, controlled];
}
