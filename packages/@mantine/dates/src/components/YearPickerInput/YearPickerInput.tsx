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
import { pickCalendarProps } from '../Calendar';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { usePickerInput } from '../PickerInputBase/use-picker-input/use-picker-input';
import { YearPicker, YearPickerBaseProps, YearPickerStylesNames } from '../YearPicker';
import { useYearPickerInput } from './use-year-picker-input/use-year-picker-input';

export type YearPickerInputStylesNames = __InputStylesNames | 'placeholder' | YearPickerStylesNames;

export interface YearPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerInputFactory> {
  /** `dayjs` format to display input value @default "YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useYearPickerInput` hook. When provided, the dropdown opened state and the displayed date are owned by the controller and `date`, `defaultDate`, `onDateChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type YearPickerInputFactory = Factory<{
  props: YearPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: YearPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<YearPickerInputProps>;

type YearPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<YearPickerInputFactory>;

export const YearPickerInput: YearPickerInputComponent = factory<YearPickerInputFactory>(
  (_props) => {
    const props = useProps(['Input', 'InputWrapper', 'YearPickerInput'], defaultProps, _props);
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

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);

    const pickerInput = usePickerInput({
      useControllerHook: useYearPickerInput,
      controller: controllerProp,
      calendarProps,
      minLevel: 'decade',
      maxLevel: calendarProps.maxLevel,
      defaultDate: calendarProps.defaultDate,
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
        type={type as any}
        __staticSelector="YearPickerInput"
        attributes={attributes}
      >
        <YearPicker
          {...calendarProps}
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
          __staticSelector="YearPickerInput"
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

YearPickerInput.classes = { ...PickerInputBase.classes, ...YearPicker.classes };
YearPickerInput.displayName = '@mantine/dates/YearPickerInput';

export namespace YearPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = YearPickerInputProps<Type>;
  export type StylesNames = YearPickerInputStylesNames;
  export type Factory = YearPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
