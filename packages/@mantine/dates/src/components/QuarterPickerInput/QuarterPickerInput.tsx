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
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';
import { QuarterPicker, QuarterPickerBaseProps, QuarterPickerStylesNames } from '../QuarterPicker';
import { pickQuarterPickerProps } from './pick-quarter-picker-props/pick-quarter-picker-props';

export type QuarterPickerInputStylesNames =
  | __InputStylesNames
  | 'placeholder'
  | QuarterPickerStylesNames;

export interface QuarterPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    QuarterPickerBaseProps<Type>,
    StylesApiProps<QuarterPickerInputFactory> {
  /** `dayjs` format for input value @default "[Q]Q YYYY" */
  valueFormat?: string;
}

export type QuarterPickerInputFactory = Factory<{
  props: QuarterPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: QuarterPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: '[Q]Q YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<QuarterPickerInputProps>;

type QuarterPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: QuarterPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<QuarterPickerInputFactory>;

export const QuarterPickerInput: QuarterPickerInputComponent = factory<QuarterPickerInputFactory>(
  (_props) => {
    const props = useProps(['Input', 'InputWrapper', 'QuarterPickerInput'], defaultProps, _props);
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
      presets,
      attributes,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<QuarterPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { pickerProps, others } = pickQuarterPickerProps(rest);

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
        attributes={attributes}
        type={type as any}
        __staticSelector="QuarterPickerInput"
      >
        <QuarterPicker
          {...pickerProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          defaultDate={
            pickerProps.defaultDate ||
            (Array.isArray(_value)
              ? _value[0] || getDefaultClampedDate({ maxDate, minDate })
              : _value || getDefaultClampedDate({ maxDate, minDate }))
          }
          onChange={setValue}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          __staticSelector="QuarterPickerInput"
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

QuarterPickerInput.classes = { ...PickerInputBase.classes, ...QuarterPicker.classes };
QuarterPickerInput.displayName = '@mantine/dates/QuarterPickerInput';

export namespace QuarterPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = QuarterPickerInputProps<Type>;
  export type StylesNames = QuarterPickerInputStylesNames;
  export type Factory = QuarterPickerInputFactory;
}
