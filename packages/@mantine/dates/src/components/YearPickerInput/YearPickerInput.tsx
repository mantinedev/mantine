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
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';
import { YearPicker, YearPickerBaseProps, YearPickerStylesNames } from '../YearPicker';

export type YearPickerInputStylesNames = __InputStylesNames | 'placeholder' | YearPickerStylesNames;

export interface YearPickerInputProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DateInputSharedProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerInputFactory> {
  /** Dayjs format to display input value, "YYYY" by default  */
  valueFormat?: string;
}

export type YearPickerInputFactory = Factory<{
  props: YearPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: YearPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<YearPickerInputProps> = {
  type: 'default',
  valueFormat: 'YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
};

type YearPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerInputProps<Type> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<YearPickerInputFactory>;

export const YearPickerInput: YearPickerInputComponent = factory<YearPickerInputFactory>(
  (_props, ref) => {
    const props = useProps('YearPickerInput', defaultProps, _props);
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

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);
    const ctx = useDatesContext();

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
        __staticSelector="YearPickerInput"
      >
        <YearPicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            calendarProps.defaultDate ||
            (Array.isArray(_value)
              ? _value[0] ||
                getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() })
              : _value || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }))
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="YearPickerInput"
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

YearPickerInput.classes = { ...PickerInputBase.classes, ...YearPicker.classes };
YearPickerInput.displayName = '@mantine/dates/YearPickerInput';
