import { useUncontrolled } from '@mantine/hooks';
import { useRef } from 'react';
import { DatePickerType, DatePickerValue } from '../../types';

interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type>;
  defaultValue: DatePickerValue<Type>;
  onChange(value: DatePickerValue<Type>): void;
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
  const [_value, _setValue] = useUncontrolled<any>({
    value,
    defaultValue,
    onChange,
    finalValue: getEmptyValue(type),
  });

  let _finalValue = _value;

  if (storedType.current !== type) {
    // Type has changed. Do some checks or resets

    storedType.current = type;
    if (value === undefined) {
      // Reset uncontrolled value as types aren't compatible
      _finalValue = defaultValue !== undefined ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    } else if (process.env.NODE_ENV === 'development') {
      // Throw errors in dev mode in case type of value isn't correct
      switch (type) {
        case 'default':
          if (value !== null && typeof value !== 'string') {
            // eslint-disable-next-line no-console
            console.error(
              '[@mantine/dates/use-uncontrolled-dates] Value must be type of `null` or `string`'
            );
          }
          break;
        case 'multiple':
          if (!(value instanceof Array)) {
            // eslint-disable-next-line no-console
            console.error(
              '[@mantine/dates/use-uncontrolled-dates] Value must be type of `string[]`'
            );
          }
          break;
        case 'range':
          if (!(value instanceof Array) || value.length !== 2) {
            // eslint-disable-next-line no-console
            console.error(
              '[@mantine/dates/use-uncontrolled-dates] Value must be type of `[string, string]`'
            );
          }
          break;
      }
    }
  }

  return [_finalValue, _setValue];
}
