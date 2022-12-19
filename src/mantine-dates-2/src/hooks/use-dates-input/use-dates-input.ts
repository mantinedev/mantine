import { useDisclosure } from '@mantine/hooks';
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
}

export function useDatesInput<Type extends DatePickerType = 'default'>({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
}: UseDatesInput<Type>) {
  const ctx = useDatesContext();

  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  const [_value, _setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
  });

  const formattedValue = getFormattedDate({
    type,
    date: _value,
    locale: ctx.getLocale(locale),
    format,
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

    _setValue(val);
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
