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
import { getDefaultClampedDate, shiftTimezone } from '../../utils';
import { CalendarStylesNames, pickCalendarProps } from '../Calendar';
import { DatePicker, DatePickerBaseProps } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';

export type DatePickerInputStylesNames = __InputStylesNames | 'placeholder' | CalendarStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
  valueFormat?: string;
}

export type DatePickerInputFactory = Factory<{
  props: DatePickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: DatePickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<DatePickerInputProps> = {
  type: 'default',
  valueFormat: 'MMMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

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
    const ctx = useDatesContext();

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
        size={size!}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        type={type as any}
        __staticSelector="DatePickerInput"
      >
        <DatePicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            _defaultDate || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() })
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="DatePickerInput"
          __stopPropagation={dropdownType === 'popover'}
          minDate={minDate}
          maxDate={maxDate}
          date={shiftTimezone('add', calendarProps.date, ctx.getTimezone())}
          __timezoneApplied
        />
      </PickerInputBase>
    );
  }
) as any;

DatePickerInput.classes = { ...PickerInputBase.classes, ...DatePicker.classes };
DatePickerInput.displayName = '@mantine/dates/DatePickerInput';
