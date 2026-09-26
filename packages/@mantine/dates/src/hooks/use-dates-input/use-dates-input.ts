import dayjs from 'dayjs';
import { useDidUpdate, type UseDisclosureHandlers } from '@mantine/hooks';
import { useDatesContext } from '../../components/DatesProvider';
import { DatePickerType, DatePickerValue } from '../../types';
import { DateFormatter, getFormattedDate } from '../../utils';
import { useUncontrolledDates } from '../use-uncontrolled-dates/use-uncontrolled-dates';

interface UseDatesInput<Type extends DatePickerType = 'default'> {
  type: Type;
  value: DatePickerValue<Type> | undefined;
  defaultValue: DatePickerValue<Type> | undefined;
  onChange: ((value: DatePickerValue<Type>) => void) | undefined;
  locale: string | undefined;
  format: string | undefined;
  closeOnChange: boolean | undefined;
  sortDates: boolean | undefined;
  labelSeparator: string | undefined;
  valueFormatter: DateFormatter | undefined;
  dropdown: { opened: boolean; handlers: UseDisclosureHandlers };
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
  valueFormatter,
  dropdown,
}: UseDatesInput<Type>) {
  const ctx = useDatesContext();

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
    format: format!,
    labelSeparator: ctx.getLabelSeparator(labelSeparator),
    formatter: valueFormatter,
  });

  const setValue = (val: any) => {
    if (closeOnChange) {
      if (type === 'default') {
        dropdown.handlers.close();
      }

      if (type === 'range' && val[0] && val[1]) {
        dropdown.handlers.close();
      }
    }

    if (sortDates && type === 'multiple') {
      _setValue([...val].sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1)));
    } else {
      _setValue(val);
    }
  };

  const onClear = () => setValue(type === 'range' ? [null, null] : type === 'multiple' ? [] : null);
  const shouldClear =
    type === 'range' ? !!_value[0] : type === 'multiple' ? _value.length > 0 : _value !== null;

  useDidUpdate(() => {
    if (!dropdown.opened && type === 'range' && Array.isArray(_value) && _value[0] && !_value[1]) {
      onClear();
    }
  }, [dropdown.opened]);

  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
  };
}
