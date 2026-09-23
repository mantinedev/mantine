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
import { useDatesContext } from '../DatesProvider';
import {
  DateInputSharedProps,
  PickerInputBase,
  type PickerInputController,
  type PickerInputControllerOptions,
} from '../PickerInputBase';
import { usePickerInput } from '../PickerInputBase/use-picker-input/use-picker-input';
import { WeekPicker, WeekPickerBaseProps, WeekPickerStylesNames } from '../WeekPicker';
import { getWeekFormatter } from './get-week-formatter/get-week-formatter';
import { useWeekPickerInput } from './use-week-picker-input/use-week-picker-input';

export type WeekPickerInputStylesNames = __InputStylesNames | 'placeholder' | WeekPickerStylesNames;

export interface WeekPickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    WeekPickerBaseProps<Type>,
    StylesApiProps<WeekPickerInputFactory> {
  /** `dayjs` format applied to the start and end dates of the week @default "MMM D, YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useWeekPickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: PickerInputController;
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
      controller: controllerProp,
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

    const pickerInput = usePickerInput({
      useControllerHook: useWeekPickerInput,
      controller: controllerProp,
      calendarProps,
      minLevel: calendarProps.minLevel || 'month',
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
      valueFormatter: valueFormatter || getWeekFormatter(firstDayOfWeek),
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
        __staticSelector="WeekPickerInput"
        attributes={attributes}
      >
        <WeekPicker
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
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
