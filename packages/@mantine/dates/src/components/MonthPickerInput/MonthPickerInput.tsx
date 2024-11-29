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
import { pickCalendarProps } from '../Calendar';
import { useDatesContext } from '../DatesProvider';
import { MonthPicker, MonthPickerBaseProps, MonthPickerStylesNames } from '../MonthPicker';
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';

export type MonthPickerInputStylesNames =
  | __InputStylesNames
  | 'placeholder'
  | MonthPickerStylesNames;

export interface MonthPickerInputProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DateInputSharedProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerInputFactory> {
  /** Dayjs format to display input value, "MMMM YYYY" by default  */
  valueFormat?: string;
}

export type MonthPickerInputFactory = Factory<{
  props: MonthPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: MonthPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<MonthPickerInputProps> = {
  type: 'default',
  valueFormat: 'MMMM YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

type MonthPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerInputProps<Type> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<MonthPickerInputFactory>;

export const MonthPickerInput: MonthPickerInputComponent = factory<MonthPickerInputFactory>(
  (_props, ref) => {
    const props = useProps('MonthPickerInput', defaultProps, _props);
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
      valueFormatter,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthPickerInputFactory>({
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
        __staticSelector="MonthPickerInput"
      >
        <MonthPicker
          {...calendarProps}
          date={shiftTimezone('add', calendarProps.date, ctx.getTimezone())}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            calendarProps.defaultDate ||
            (Array.isArray(_value)
              ? _value[0] || getDefaultClampedDate({ maxDate, minDate })
              : _value || getDefaultClampedDate({ maxDate, minDate }))
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="MonthPickerInput"
          __stopPropagation={dropdownType === 'popover'}
          minDate={minDate}
          maxDate={maxDate}
          __timezoneApplied
        />
      </PickerInputBase>
    );
  }
) as any;

MonthPickerInput.classes = { ...PickerInputBase.classes, ...MonthPicker.classes };
MonthPickerInput.displayName = '@mantine/dates/MonthPickerInput';
