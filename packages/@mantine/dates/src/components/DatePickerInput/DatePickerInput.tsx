import {
  __InputStylesNames,
  BoxProps,
  factory,
  Factory,
  InputVariant,
  MantineComponentStaticProperties,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { useDatesInput } from '../../hooks';
import { DatePickerType } from '../../types';
import { getDefaultClampedDate, toDateString } from '../../utils';
import { pickCalendarProps } from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import { DateInputSharedProps, PickerInputBase } from '../PickerInputBase';
import {
  useDatePickerInput,
  type DatePickerInputController,
  type DatePickerInputControllerOptions,
} from './use-date-picker-input/use-date-picker-input';

export type DatePickerInputStylesNames = __InputStylesNames | 'placeholder' | DatePickerStylesNames;

export interface DatePickerInputProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DateInputSharedProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerInputFactory> {
  /** `dayjs` format for input value @default "MMMM D, YYYY" @category appearance */
  valueFormat?: string;

  /** Controller returned by the `useDatePickerInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: DatePickerInputController;
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
    const { minLevel, maxLevel } = calendarProps;
    const initialValue = value !== undefined ? value : defaultValue;
    const initialValueDate = Array.isArray(initialValue) ? initialValue[0] : initialValue;

    const controller = useController(useDatePickerInput, controllerProp, {
      date: calendarProps.date,
      defaultDate: toDateString(initialValueDate) || defaultDate,
      onDateChange: calendarProps.onDateChange,
      level: calendarProps.level ? clampLevel(calendarProps.level, minLevel, maxLevel) : undefined,
      defaultLevel: clampLevel(calendarProps.defaultLevel, minLevel, maxLevel),
      onLevelChange: calendarProps.onLevelChange,
    });

    const dropdownHandlers = {
      open: controller.openDropdown,
      close: controller.closeDropdown,
      toggle: controller.toggleDropdown,
      set: controller.setDropdownOpened,
    };

    const { _value, setValue, formattedValue, onClear, shouldClear } = useDatesInput({
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
      dropdown: { opened: controller.dropdownOpened, handlers: dropdownHandlers },
    });

    const valueDate =
      (Array.isArray(_value) ? _value[0] : _value) ||
      (controllerProp ? null : toDateString(defaultDate)) ||
      null;
    const fallbackDate = getDefaultClampedDate({ maxDate, minDate });
    const cannotOpen = !!(others.disabled || others.readOnly);

    controller.registerPickerInput({ valueDate, fallbackDate, disabled: cannotOpen });

    useDidUpdate(() => {
      if (!controller.dropdownOpened && type === 'range' && Array.isArray(_value)) {
        if (_value[0] && !_value[1]) {
          onClear();
        }
      }
    }, [controller.dropdownOpened]);

    return (
      <PickerInputBase
        formattedValue={formattedValue}
        withPresets={!!presets}
        dropdownOpened={controller.dropdownOpened && !cannotOpen}
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
        __staticSelector="DatePickerInput"
        __clearIncompleteRangeOnClose={false}
        attributes={attributes}
      >
        <DatePicker
          {...calendarProps}
          size={size}
          variant={variant}
          type={type}
          value={_value}
          controller={controller}
          onChange={setValue}
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
  export type Controller = DatePickerInputController;
  export type ControllerOptions = DatePickerInputControllerOptions;
}
