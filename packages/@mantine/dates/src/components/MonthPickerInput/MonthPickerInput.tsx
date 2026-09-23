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
import { MonthPicker, MonthPickerBaseProps, MonthPickerStylesNames } from '../MonthPicker';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { usePickerInput } from '../PickerInputBase/use-picker-input/use-picker-input';
import { useMonthPickerInput } from './use-month-picker-input/use-month-picker-input';

export type MonthPickerInputStylesNames =
  | __InputStylesNames
  | 'placeholder'
  | MonthPickerStylesNames;

export interface MonthPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerInputFactory> {
  /** `dayjs` format for input value @default "MMMM YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useMonthPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type MonthPickerInputFactory = Factory<{
  props: MonthPickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: MonthPickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMMM YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<MonthPickerInputProps>;

type MonthPickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<MonthPickerInputFactory>;

export const MonthPickerInput: MonthPickerInputComponent = factory<MonthPickerInputFactory>(
  (_props) => {
    const props = useProps(['Input', 'InputWrapper', 'MonthPickerInput'], defaultProps, _props);
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

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthPickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);

    const pickerInput = usePickerInput({
      useControllerHook: useMonthPickerInput,
      controller: controllerProp,
      calendarProps,
      minLevel: 'year',
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
        attributes={attributes}
        type={type as any}
        __staticSelector="MonthPickerInput"
      >
        <MonthPicker
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
          __staticSelector="MonthPickerInput"
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

MonthPickerInput.classes = { ...PickerInputBase.classes, ...MonthPicker.classes };
MonthPickerInput.displayName = '@mantine/dates/MonthPickerInput';

export namespace MonthPickerInput {
  export type Props<Type extends DatePickerType = 'default'> = MonthPickerInputProps<Type>;
  export type StylesNames = MonthPickerInputStylesNames;
  export type Factory = MonthPickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
