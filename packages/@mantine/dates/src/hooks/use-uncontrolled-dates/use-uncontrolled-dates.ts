import { useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DatePickerType, DatePickerValue, DateStringValue } from '../../types';
import { toDateString, toDateTimeString } from '../../utils';

interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type> | undefined;
  defaultValue: DatePickerValue<Type> | undefined;
  onChange: ((value: DatePickerValue<Type, DateStringValue>) => void) | undefined;
  withTime?: boolean;
}

const getEmptyValue = <Type extends DatePickerType = 'default'>(type: Type) =>
  type === 'range' ? [null, null] : type === 'multiple' ? [] : null;

export const convertDatesValue = (value: any, withTime: boolean) => {
  const converter = withTime ? toDateTimeString : toDateString;
  return Array.isArray(value) ? value.map(converter) : converter(value);
};

export function useUncontrolledDates<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
  withTime = false,
}: UseUncontrolledDates<Type>) {
  const storedType = useRef<Type>(type);
  const [_value, _setValue, controlled] = useUncontrolled<any>({
    value: convertDatesValue(value, withTime),
    defaultValue: convertDatesValue(defaultValue, withTime),
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
