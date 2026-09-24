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
import { DatePickerType } from '../../types';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { usePickerInput } from '../PickerInputBase/use-picker-input/use-picker-input';
import { QuarterPicker, QuarterPickerBaseProps, QuarterPickerStylesNames } from '../QuarterPicker';
import { pickQuarterPickerProps } from './pick-quarter-picker-props/pick-quarter-picker-props';
import { useQuarterPickerInput } from './use-quarter-picker-input/use-quarter-picker-input';

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
  /** `dayjs` format for input value @default "[Q]Q YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useQuarterPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
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
      controller: controllerProp,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<QuarterPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { pickerProps, others } = pickQuarterPickerProps(rest);

    const pickerInput = usePickerInput({
      useControllerHook: useQuarterPickerInput,
      controller: controllerProp,
      calendarProps: pickerProps,
      minLevel: 'year',
      maxLevel: pickerProps.maxLevel,
      defaultDate: pickerProps.defaultDate,
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
      minDate,
      maxDate,
      disabled: others.disabled,
      readOnly: others.readOnly,
      dropdownType,
      popoverProps: others.popoverProps,
    });

    return (
      <PickerInputBase
        formattedValue={pickerInput.datesInput.formattedValue}
        withPresets={!!presets}
        dropdownOpened={pickerInput.dropdownOpened}
        dropdownHandlers={pickerInput.dropdownHandlers}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        onClear={pickerInput.datesInput.onClear}
        shouldClear={pickerInput.datesInput.shouldClear}
        value={pickerInput.datesInput._value}
        size={size}
        variant={variant}
        dropdownType={dropdownType}
        {...others}
        popoverProps={pickerInput.popoverProps}
        attributes={attributes}
        type={type as any}
        __staticSelector="QuarterPickerInput"
      >
        <QuarterPicker
          {...pickerProps}
          size={size}
          variant={variant}
          type={type}
          value={pickerInput.datesInput._value}
          controller={pickerInput.controller}
          onChange={pickerInput.datesInput.setValue}
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
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
