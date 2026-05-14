import dayjs from 'dayjs';
import { useState } from 'react';
import {
  ActionIconProps,
  BoxProps,
  Factory,
  genericFactory,
  InputVariant,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DatePickerType, DatePickerValue, DateStringValue } from '../../types';
import { clampDate } from '../../utils';
import {
  CalendarBaseProps,
  CalendarSettings,
  CalendarStylesNames,
  pickCalendarProps,
} from '../Calendar';
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
import classes from './DateTimePicker.module.css';

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
  /** Picker type: range or default @default 'default' */
  type?: Type;

  /** `dayjs` format for input value, or a function that receives the value as a `YYYY-MM-DD HH:mm:ss` string and returns the formatted value @default "DD/MM/YYYY HH:mm"  */
  valueFormat?: string | ((date: DateStringValue) => string);

  /** Controlled component value */
  value?: DatePickerValue<Type>;

  /** Uncontrolled component default value */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes */
  onChange?: (value: DatePickerValue<Type, DateStringValue>) => void;

  /** Default time value in HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. */
  defaultTimeValue?: string;

  /** Props passed down to `TimePicker` component */
  timePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value'>;

  /** Props passed down to the end time `TimePicker` component in range mode */
  endTimePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value'>;

  /** Props passed down to the submit button */
  submitButtonProps?: ActionIconProps & React.ComponentProps<'button'>;

  /** Determines whether the seconds input should be displayed @default false */
  withSeconds?: boolean;

  /** Max level that user can go up to @default 'decade' */
  maxLevel?: CalendarLevel;

  /** Presets values */
  presets?: DatePickerPreset<Type>[];

  /** Determines whether a single day can be selected as range, applicable only when type="range" */
  allowSingleDateInRange?: Type extends 'range' ? boolean : never;

  /** Separator between range values */
  labelSeparator?: string;
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
    ...rest
  } = props;

  const isRange = (type as string) === 'range';

  useStyles<DateTimePickerFactory>({
    name: 'DateTimePicker',
    classes,
    props: props as DateTimePickerProps,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

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

  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const [inlineKey, setInlineKey] = useState(0);

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

  useDidUpdate(() => {
    if (dropdownOpened) {
      setInlineKey((k) => k + 1);
    }
  }, [dropdownOpened]);

  const __stopPropagation = dropdownType === 'popover';

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

  const handleSubmitOrEnter = () => {
    handleDropdownClose();
    dropdownHandlers.close();
  };

  const onClear = () => {
    if (isRange) {
      setValue([null, null] as any);
    } else {
      setValue(null);
    }
  };

  const shouldClear = isRange ? Array.isArray(_value) && !!_value[0] : !!_value;

  const handlePresetSelect = !isRange
    ? (val: any) => {
        setValue(val);
      }
    : undefined;

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={!rest.disabled ? dropdownOpened : false}
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
      __staticSelector="DateTimePicker"
      onDropdownClose={handleDropdownClose}
      withTime
      attributes={attributes}
    >
      <InlineDateTimePicker
        key={inlineKey}
        {...calendarProps}
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
        level={level}
        defaultLevel={defaultLevel}
        defaultDate={defaultDate}
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
        onSubmit={handleSubmitOrEnter}
        __stopPropagation={__stopPropagation}
        __staticSelector="DateTimePicker"
        __onEnter={handleSubmitOrEnter}
        __onPresetSelect={handlePresetSelect}
      />
    </PickerInputBase>
  );
});

DateTimePicker.classes = {
  ...classes,
  ...PickerInputBase.classes,
  ...InlineDateTimePicker.classes,
};
DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
