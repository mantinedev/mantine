import {
  __InputStylesNames,
  BoxProps,
  factory,
  Factory,
  InputVariant,
  MantineComponentStaticProperties,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDatesInput } from '../../hooks';
import { DatePickerType } from '../../types';
import { getDefaultClampedDate } from '../../utils';
import { pickCalendarProps } from '../Calendar';
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';

export type DatePickerInputStylesNames = __InputStylesNames | 'placeholder' | DatePickerStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** `dayjs` format for input value @default `"MMMM D, YYYY"` */
  valueFormat?: string;
}

export type DatePickerInputFactory = Factory<{
  props: DatePickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: DatePickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  valueFormat: 'MMMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<DatePickerInputProps>;

type DatePickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerInputProps<Type> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<DatePickerInputFactory>;

export const DatePickerInput: DatePickerInputComponent = factory<DatePickerInputFactory>(
  (_props, ref) => {
    const props = useProps('DatePickerInput', defaultProps, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      defaultDate,
      valueFormatter,
      presets,
      attributes,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DatePickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);

    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear,
    } = useDatesInput({
      type: type as any,
      value,
      defaultValue,
      onChange: onChange as any,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter,
    });

    const _defaultDate = Array.isArray(_value) ? _value[0] || defaultDate : _value || defaultDate;

    return (
      <PickerInputBase
        formattedValue={formattedValue}
        dropdownOpened={dropdownOpened}
        dropdownHandlers={dropdownHandlers}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        ref={ref}
        onClear={onClear}
        shouldClear={shouldClear}
        value={_value}
        size={size}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        type={type as any}
        __staticSelector="DatePickerInput"
        attributes={attributes}
      >
        <DatePicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={_defaultDate || getDefaultClampedDate({ maxDate, minDate })}
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="DatePickerInput"
          __stopPropagation={dropdownType === 'popover'}
          minDate={minDate}
          maxDate={maxDate}
          presets={presets}
          attributes={attributes}
        />
      </PickerInputBase>
    );
  }
) as any;

DatePickerInput.classes = { ...PickerInputBase.classes, ...DatePicker.classes };
DatePickerInput.displayName = '@mantine/dates/DatePickerInput';
