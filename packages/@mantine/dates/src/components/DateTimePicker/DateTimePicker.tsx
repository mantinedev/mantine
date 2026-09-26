import dayjs from 'dayjs';
import { useState } from 'react';
import {
  ActionIconProps,
  BoxProps,
  Factory,
  genericFactory,
  InputVariant,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DatePickerType, DatePickerValue, DateStringValue } from '../../types';
import { clampDate, getDefaultClampedDate, toDateString } from '../../utils';
import {
  CalendarBaseProps,
  CalendarSettings,
  CalendarStylesNames,
  pickCalendarProps,
} from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { DatePickerPreset } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import {
  InlineDateTimePicker,
  InlineDateTimePickerStylesNames,
} from '../InlineDateTimePicker/InlineDateTimePicker';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';
import { TimePickerProps } from '../TimePicker/TimePicker';
import {
  useDateTimePicker,
  DateTimePickerController,
} from './use-date-time-picker/use-date-time-picker';

export type DateTimePickerStylesNames =
  | InlineDateTimePickerStylesNames
  | 'placeholder'
  | PickerInputBaseStylesNames
  | CalendarStylesNames;

export interface DateTimePickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    Omit<
      DateInputSharedProps,
      'classNames' | 'styles' | 'closeOnChange' | 'size' | 'valueFormatter'
    >,
    CalendarBaseProps,
    Omit<CalendarSettings, 'onYearMouseEnter' | 'onMonthMouseEnter' | 'hasNextLevel'>,
    StylesApiProps<DateTimePickerFactory> {
  /** Picker type: range or default @default 'default' @category state */
  type?: Type;

  /** `dayjs` format for input value, or a function that receives the value as a `YYYY-MM-DD HH:mm:ss` string and returns the formatted value @default "DD/MM/YYYY HH:mm" @category appearance */
  valueFormat?: string | ((date: DateStringValue) => string);

  /** Controlled component value @category state */
  value?: DatePickerValue<Type>;

  /** Uncontrolled component default value @category state */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes @category state */
  onChange?: (value: DatePickerValue<Type, DateStringValue>) => void;

  /** Default time value in HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. @category state */
  defaultTimeValue?: string;

  /** Props passed down to `TimePicker` component */
  timePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value' | 'controller'>;

  /** Props passed down to the end time `TimePicker` component in range mode */
  endTimePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value' | 'controller'>;

  /** Props passed down to the submit button */
  submitButtonProps?: ActionIconProps & React.ComponentProps<'button'>;

  /** Determines whether the seconds input should be displayed @default false @category appearance */
  withSeconds?: boolean;

  /** Max level that user can go up to @default 'decade' @category behavior */
  maxLevel?: CalendarLevel;

  /** Presets values @category appearance */
  presets?: DatePickerPreset<Type>[];

  /** Determines whether a single day can be selected as range, applicable only when type="range" @category behavior */
  allowSingleDateInRange?: Type extends 'range' ? boolean : never;

  /** Separator between range values @category appearance */
  labelSeparator?: string;

  /** Controller returned by the `useDateTimePicker` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange`, `defaultTimeValue`, `popoverProps.opened` and `popoverProps.onChange` props are ignored @category state */
  controller?: DateTimePickerController;
}

export type DateTimePickerFactory = Factory<{
  props: DateTimePickerProps;
  ref: HTMLButtonElement;
  stylesNames: DateTimePickerStylesNames;
  variant: InputVariant;
  signature: <Type extends DatePickerType = 'default'>(
    props: DateTimePickerProps<Type> & { ref?: React.Ref<HTMLButtonElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  dropdownType: 'popover',
  size: 'sm',
} satisfies Partial<DateTimePickerProps>;

export const DateTimePicker = genericFactory<DateTimePickerFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'DateTimePicker'], defaultProps as any, _props);
  const {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timePickerProps,
    endTimePickerProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars,
    minDate,
    maxDate,
    defaultDate,
    defaultTimeValue,
    presets,
    attributes,
    onDropdownClose,
    type,
    labelSeparator,
    allowSingleDateInRange,
    controller: controllerProp,
    ...rest
  } = props;

  const isRange = (type as string) === 'range';

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DateTimePickerFactory>({
    classNames,
    styles,
    props: props as DateTimePickerProps,
  });

  const _withSeconds = withSeconds || timePickerProps?.withSeconds;
  const _valueFormat = valueFormat || (_withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');

  const {
    calendarProps: { allowSingleDateInRange: _asdir, ...calendarProps },
    others,
  } = pickCalendarProps(rest);

  const ctx = useDatesContext();
  const _labelSeparator = ctx.getLabelSeparator(labelSeparator);

  const [_value, setValue] = useUncontrolledDates({
    type: type as any,
    value,
    defaultValue,
    onChange: onChange as any,
    withTime: true,
  });

  const minLevel = calendarProps.minLevel || 'month';
  const initialValue = value !== undefined ? value : defaultValue;
  const initialValueDate = Array.isArray(initialValue) ? initialValue[0] : initialValue;

  const {
    opened: popoverOpened,
    onChange: onPopoverChange,
    ...popoverRest
  } = others.popoverProps || {};
  const withPopoverState = dropdownType !== 'modal';

  const controller = useController(useDateTimePicker, controllerProp, {
    date: calendarProps.date,
    defaultDate: toDateString(initialValueDate) || defaultDate,
    onDateChange: calendarProps.onDateChange,
    level: level ? clampLevel(level, minLevel, calendarProps.maxLevel) : undefined,
    defaultLevel: clampLevel(defaultLevel, minLevel, calendarProps.maxLevel),
    onLevelChange: calendarProps.onLevelChange,
    dropdownOpened: withPopoverState ? popoverOpened : undefined,
    onDropdownOpenedChange: withPopoverState ? onPopoverChange : undefined,
    defaultTimeValue,
  });

  const dropdownHandlers = {
    open: controller.openDropdown,
    close: controller.closeDropdown,
    toggle: controller.toggleDropdown,
    set: controller.setDropdownOpened,
  };

  const valueDate =
    toDateString(Array.isArray(_value) ? _value[0] : _value) ||
    (controllerProp ? null : toDateString(defaultDate)) ||
    null;
  const cannotOpen = !!(others.disabled || others.readOnly);

  controller.registerPickerInput({
    valueDate,
    fallbackDate: getDefaultClampedDate({ minDate, maxDate }),
    disabled: cannotOpen,
  });

  const dropdownOpened = controller.dropdownOpened && !cannotOpen;
  const [openSession, setOpenSession] = useState({ opened: dropdownOpened, key: 0 });

  if (openSession.opened !== dropdownOpened) {
    setOpenSession({
      opened: dropdownOpened,
      key: dropdownOpened ? openSession.key + 1 : openSession.key,
    });
  }

  const formatDate = (v: DateStringValue | null) => {
    if (!v) {
      return '';
    }
    if (typeof _valueFormat === 'function') {
      return _valueFormat(v);
    }
    return dayjs(v).locale(ctx.getLocale(locale)).format(_valueFormat);
  };

  const getFormattedValue = () => {
    if (isRange && Array.isArray(_value)) {
      const start = formatDate(_value[0]);
      const end = formatDate(_value[1]);
      if (start && end) {
        return `${start} ${_labelSeparator} ${end}`;
      }
      if (start) {
        return `${start} ${_labelSeparator} ...`;
      }
      return '';
    }

    return formatDate(_value as DateStringValue | null);
  };

  const formattedValue = getFormattedValue();

  const clearIncompleteRange = () => {
    if (isRange && Array.isArray(_value) && _value[0] && !_value[1]) {
      setValue([null, null] as any);
    }
  };

  const handleDropdownClose = () => {
    clearIncompleteRange();

    if (isRange && Array.isArray(_value)) {
      const clampedStart = _value[0] ? clampDate(minDate, maxDate, _value[0]) : null;
      const clampedEnd = _value[1] ? clampDate(minDate, maxDate, _value[1]) : null;
      if ((_value[0] && _value[0] !== clampedStart) || (_value[1] && _value[1] !== clampedEnd)) {
        setValue([clampedStart, clampedEnd] as any);
      }
    } else if (_value) {
      const clamped = clampDate(minDate, maxDate, _value as DateStringValue);
      if (_value !== clamped) {
        setValue(clamped);
      }
    }
    onDropdownClose?.();
  };

  useDidUpdate(() => {
    if (!controller.dropdownOpened) {
      handleDropdownClose();
    }
  }, [controller.dropdownOpened]);

  const onClear = () => {
    if (isRange) {
      setValue([null, null] as any);
    } else {
      setValue(null);
    }
  };

  const shouldClear = isRange ? Array.isArray(_value) && !!_value[0] : !!_value;

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
      popoverProps={withPopoverState ? popoverRest : others.popoverProps}
      type={type as any}
      __staticSelector="DateTimePicker"
      withTime
      attributes={attributes}
    >
      <InlineDateTimePicker
        key={openSession.key}
        {...calendarProps}
        controller={controller}
        fullWidth={false}
        type={type as any}
        value={_value as any}
        onChange={setValue as any}
        maxDate={maxDate}
        minDate={minDate}
        size={size}
        variant={variant}
        locale={locale}
        classNames={resolvedClassNames as any}
        styles={resolvedStyles as any}
        unstyled={unstyled}
        defaultTimeValue={defaultTimeValue}
        presets={presets as any}
        allowSingleDateInRange={allowSingleDateInRange}
        timePickerProps={timePickerProps}
        endTimePickerProps={endTimePickerProps}
        submitButtonProps={submitButtonProps}
        withSeconds={withSeconds}
        valueFormat={valueFormat}
        labelSeparator={labelSeparator}
        attributes={attributes}
        onSubmit={controller.closeDropdown}
        __staticSelector="DateTimePicker"
      />
    </PickerInputBase>
  );
});

DateTimePicker.classes = {
  ...PickerInputBase.classes,
  ...InlineDateTimePicker.classes,
};
DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
