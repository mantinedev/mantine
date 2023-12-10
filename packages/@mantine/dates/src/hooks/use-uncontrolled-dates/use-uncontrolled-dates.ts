import { useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { useDatesContext } from '../../components/DatesProvider';
import { DatePickerType, DatePickerValue } from '../../types';
import { shiftTimezone } from '../../utils';

interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type> | undefined;
  defaultValue: DatePickerValue<Type> | undefined;
  onChange: ((value: DatePickerValue<Type>) => void) | undefined;
  applyTimezone?: boolean;
}

const getEmptyValue = <Type extends DatePickerType = 'default'>(type: Type) =>
  type === 'range' ? [null, null] : type === 'multiple' ? [] : null;

export function useUncontrolledDates<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
  applyTimezone = true,
}: UseUncontrolledDates<Type>) {
  const storedType = useRef<Type>(type);
  const ctx = useDatesContext();
  const [_value, _setValue, controlled] = useUncontrolled<any>({
    value: shiftTimezone('add', value, ctx.getTimezone(), !applyTimezone),
    defaultValue: shiftTimezone('add', defaultValue, ctx.getTimezone(), !applyTimezone),
    finalValue: getEmptyValue(type),
    onChange: (newDate) => {
      onChange?.(shiftTimezone('remove', newDate, ctx.getTimezone(), !applyTimezone));
    },
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

  return [_finalValue, _setValue, controlled];
}
