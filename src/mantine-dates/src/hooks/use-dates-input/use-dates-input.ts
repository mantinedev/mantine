import { useDisclosure } from '@mantine/hooks';
import { useCallback } from 'react';
import { DatePickerType, DatePickerValue } from '../../types';
import { useDatesContext } from '../../components/DatesProvider';
import { useUncontrolledDates } from '../use-uncontrolled-dates/use-uncontrolled-dates';
import { getFormattedDate } from '../../utils';

interface UseDatesInput<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type>;
  defaultValue: DatePickerValue<Type>;
  onChange(value: DatePickerValue<Type>): void;
  locale: string;
  format: string;
  closeOnChange: boolean;
  sortDates: boolean;
  labelSeparator: string;
}

export function useDatesInput<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
  sortDates,
  labelSeparator,
}: UseDatesInput<Type>) {
  const ctx = useDatesContext({ locale, labelSeparator });

  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  const [_value, _setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
  });

  const formatter = useCallback((d: Date) => ctx.formatDate(d, format), [ctx.formatDate, format]);

  const formattedValue = getFormattedDate({
    type,
    date: _value,
    formatter,
    labelSeparator: ctx.labelSeparator,
  });

  const setValue = (val: any) => {
    if (closeOnChange) {
      if (type === 'default') {
        dropdownHandlers.close();
      }

      if (type === 'range' && val[0] && val[1]) {
        dropdownHandlers.close();
      }
    }

    if (sortDates && type === 'multiple') {
      _setValue([...val].sort((a, b) => a.getTime() - b.getTime()));
    } else {
      _setValue(val);
    }
  };

  const onClear = () => setValue(type === 'range' ? [null, null] : type === 'multiple' ? [] : null);
  const shouldClear =
    type === 'range' ? !!_value[0] : type === 'multiple' ? _value.length > 0 : _value !== null;

  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
    dropdownOpened,
    dropdownHandlers,
  };
}
