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
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { usePickerInput } from '../PickerInputBase/use-picker-input/use-picker-input';
import { useDatePickerInput } from './use-date-picker-input/use-date-picker-input';

export type DatePickerInputStylesNames = __InputStylesNames | 'placeholder' | DatePickerStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** `dayjs` format for input value @default "MMMM D, YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useDatePickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type DatePickerInputFactory = Factory<{
  props: DatePickerInputProps;
  ref: HTMLButtonElement;
  stylesNames: DatePickerInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
  valueFormat: 'MMMM D, YYYY',
  closeOnChange: true,
  sortDates: true,
  dropdownType: 'popover',
} satisfies Partial<DatePickerInputProps>;

type DatePickerInputComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerInputProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<DatePickerInputFactory>;

export const DatePickerInput: DatePickerInputComponent = factory<DatePickerInputFactory>(
  (_props) => {
    const props = useProps(['Input', 'InputWrapper', 'DatePickerInput'], defaultProps, _props);
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
      controller: controllerProp,
      ...rest
    } = props;

    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DatePickerInputFactory>({
      classNames,
      styles,
      props,
    });

    const { calendarProps, others } = pickCalendarProps(rest);

    const pickerInput = usePickerInput({
      useControllerHook: useDatePickerInput,
      controller: controllerProp,
      calendarProps,
      minLevel: calendarProps.minLevel,
      maxLevel: calendarProps.maxLevel,
      defaultDate,
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
        __staticSelector="DatePickerInput"
        attributes={attributes}
      >
        <DatePicker
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

export namespace DatePickerInput {
  export type Props = DatePickerInputProps;
  export type StylesNames = DatePickerInputStylesNames;
  export type Factory = DatePickerInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
