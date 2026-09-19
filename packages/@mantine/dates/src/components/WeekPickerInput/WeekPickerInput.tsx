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
import { useDatesContext } from '../DatesProvider';
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';
import { WeekPicker, WeekPickerBaseProps, WeekPickerStylesNames } from '../WeekPicker';
import { getWeekFormatter } from './get-week-formatter/get-week-formatter';

export type WeekPickerInputStylesNames = __InputStylesNames | 'placeholder' | WeekPickerStylesNames;

export interface WeekPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    WeekPickerBaseProps<Type>,
    StylesApiProps<WeekPickerInputFactory> {
  /** `dayjs` format applied to the start and end dates of the week @default "MMM D, YYYY" @category appearance */
  valueFormat?: string;
}

export type WeekPickerInputFactory = Factory<{
  props: WeekPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: WeekPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<WeekPickerInputProps>;

type WeekPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: WeekPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<WeekPickerInputFactory>;

export const WeekPickerInput: WeekPickerInputComponent = factory<WeekPickerInputFactory>(
  (_props) => {
    const props = useProps(['Input', 'InputWrapper', 'WeekPickerInput'], defaultProps, _props);
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

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<WeekPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);
    const ctx = useDatesContext();
    const firstDayOfWeek = ctx.getFirstDayOfWeek(calendarProps.firstDayOfWeek);

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
      valueFormatter: valueFormatter || getWeekFormatter(firstDayOfWeek),
    });

    const _defaultDate = Array.isArray(_value) ? _value[0] || defaultDate : _value || defaultDate;

    return (
      <PickerInputBase
        formattedValue={formattedValue}
        withPresets={!!presets}
        dropdownOpened={dropdownOpened}
        dropdownHandlers={dropdownHandlers}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        onClear={onClear}
        shouldClear={shouldClear}
        value={_value}
        size={size}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        type={type as any}
        __staticSelector="WeekPickerInput"
        attributes={attributes}
      >
        <WeekPicker
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
          __staticSelector="WeekPickerInput"
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

WeekPickerInput.classes = { ...PickerInputBase.classes, ...WeekPicker.classes };
WeekPickerInput.displayName = '@mantine/dates/WeekPickerInput';

export namespace WeekPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = WeekPickerInputProps<Type>;
  export type StylesNames = WeekPickerInputStylesNames;
  export type Factory = WeekPickerInputFactory;
}
