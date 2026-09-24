import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  ClearSectionMode,
  ElementProps,
  factory,
  Factory,
  Input,
  InputVariant,
  MantineSize,
  Popover,
  PopoverProps,
  StylesApiProps,
  useController,
  useInputProps,
  useStyles,
} from '@mantine/core';
import { useClickOutside, useDidUpdate } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DateStringValue, DateValue } from '../../types';
import { toDateString } from '../../utils';
import {
  Calendar,
  CalendarBaseProps,
  CalendarStylesNames,
  DecadeLevelSettings,
  MonthLevelSettings,
  pickCalendarProps,
  YearLevelSettings,
} from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import { DatePickerPreset } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import { HiddenDatesInput } from '../HiddenDatesInput';
import { isSameMonth } from '../Month';
import { DatesDropdownProvider } from '../PickerInputBase/DatesDropdown.context';
import type {
  PickerInputController,
  PickerInputControllerOptions,
} from '../PickerInputBase/use-picker-input-controller/use-picker-input-controller';
import { dateStringParser } from './date-string-parser/date-string-parser';
import { isDateValid } from './is-date-valid/is-date-valid';
import { useDateInput } from './use-date-input/use-date-input';
import moduleClasses from './DateInput.module.css';

const classes = { ...getPresetsClasses('presetsRoot'), dropdown: moduleClasses.dropdown };
const DROPDOWN_CONTEXT = { preventFocus: true, stopPropagation: false };

export type DateInputStylesNames =
  | __InputStylesNames
  | CalendarStylesNames
  | 'presetsRoot'
  | 'presetsList'
  | 'presetButton';

export interface DateInputProps
  extends
    BoxProps,
    Omit<__BaseInputProps, 'size'>,
    CalendarBaseProps,
    DecadeLevelSettings,
    YearLevelSettings,
    MonthLevelSettings,
    StylesApiProps<DateInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** A function to parse user input and convert it to date string value @category behavior */
  dateParser?: (value: string) => DateStringValue | Date | null;

  /** Controlled component value @category state */
  value?: DateValue | Date;

  /** Uncontrolled component default value @category state */
  defaultValue?: DateValue | Date;

  /** Called when value changes @category state */
  onChange?: (value: DateStringValue | null) => void;

  /** Props passed down to the `Popover` component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentProps<'button'>;

  /** `dayjs` format to display input value, or a function that receives the value as a `YYYY-MM-DD` string and returns the formatted value. A function cannot be used to parse user input – set `dateParser` prop to support formats other than `YYYY-MM-DD`. @default "MMMM D, YYYY" @category appearance */
  valueFormat?: string | ((date: DateStringValue) => string);

  /** If set to `true`, the time part of the value is preserved. Set this to `true` when `valueFormat` includes time (e.g. `"YYYY-MM-DD HH:mm"`). @default false @category state */
  withTime?: boolean;

  /** If set to `false`, invalid user input is preserved and is not corrected on blur @category behavior */
  fixOnBlur?: boolean;

  /** If set, the value can be deselected by deleting everything from the input or by clicking the selected date in the dropdown. By default, `true` if `clearable` prop is set, `false` otherwise. @category behavior */
  allowDeselect?: boolean;

  /** Max level that user can go up to @default 'decade' @category behavior */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) @category state */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) @category state */
  level?: CalendarLevel;

  /** Called when the level changes @category state */
  onLevelChange?: (level: CalendarLevel) => void;

  /** Predefined values to pick from @category appearance */
  presets?: DatePickerPreset<'default'>[];

  /** Controller returned by the `useDateInput` hook. When provided, the dropdown opened state and the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: PickerInputController;
}

export type DateInputFactory = Factory<{
  props: DateInputProps;
  ref: HTMLInputElement;
  stylesNames: DateInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  valueFormat: 'MMMM D, YYYY',
  fixOnBlur: true,
  size: 'sm',
} satisfies Partial<DateInputProps>;

export const DateInput = factory<DateInputFactory>((_props) => {
  const props = useInputProps('DateInput', defaultProps, _props);
  const {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearSectionMode,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    withTime,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    onKeyDown,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    date,
    defaultDate,
    onDateChange,
    getMonthControlProps,
    getYearControlProps,
    disabled,
    presets,
    controller: controllerProp,
    ...rest
  } = props;

  const getStyles = useStyles<DateInputFactory>({
    name: 'DateInput',
    classes,
    props: props as unknown as DateInputProps,
    classNames,
    styles,
    unstyled,
    attributes: wrapperProps.attributes,
  });

  const _wrapperRef = useRef<HTMLDivElement>(null);
  const _dropdownRef = useRef<HTMLDivElement>(null);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val: string): DateStringValue | null => {
    if (typeof valueFormat === 'function') {
      return dateStringParser(val, withTime);
    }

    const parsedDate = dayjs(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime())
      ? dateStringParser(val, withTime)
      : dayjs(parsedDate).format(withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
  };

  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== undefined ? allowDeselect : clearable;

  const formatValue = (val: DateStringValue) => {
    if (!val) {
      return '';
    }

    return typeof valueFormat === 'function'
      ? valueFormat(val)
      : dayjs(val).locale(ctx.getLocale(locale)).format(valueFormat);
  };

  const [_value, setValue, controlled] = useUncontrolledDates({
    type: 'default',
    value,
    defaultValue,
    onChange,
    withTime,
  });

  const controller = useController(useDateInput, controllerProp, {
    date,
    defaultDate: defaultValue || defaultDate,
    onDateChange,
    level: calendarProps.level
      ? clampLevel(calendarProps.level, calendarProps.minLevel, calendarProps.maxLevel)
      : undefined,
    defaultLevel: clampLevel(
      calendarProps.defaultLevel,
      calendarProps.minLevel,
      calendarProps.maxLevel
    ),
    onLevelChange: calendarProps.onLevelChange,
  });

  const cannotOpen = !!(readOnly || disabled);

  controller.registerPickerInput({
    valueDate: (controllerProp && _value && toDateString(_value)) || null,
    fallbackDate: null,
    disabled: cannotOpen,
  });

  useEffect(() => {
    if (controlled && value != null) {
      controller.setDate(value);
    }
  }, [controlled, value, controller.setDate]);

  const [inputValue, setInputValue] = useState(formatValue(_value));

  useEffect(() => {
    setInputValue(formatValue(_value));
  }, [ctx.getLocale(locale)]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    controller.openDropdown();

    if (val.trim() === '' && (allowDeselect || clearable)) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (dateValue && isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        controller.setDate(dateValue);
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    controller.closeDropdown();
    fixOnBlur && setInputValue(formatValue(_value));
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    controller.openDropdown();
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event);
    controller.openDropdown();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      controller.closeDropdown();
    }
    onKeyDown?.(event);
  };

  const _getDayProps = (day: DateStringValue) => ({
    ...getDayProps?.(day),
    selected: dayjs(_value).isSame(day, 'day'),
    onClick: (event: any) => {
      getDayProps?.(day).onClick?.(event);

      const val = _allowDeselect ? (dayjs(_value).isSame(day, 'day') ? null : day) : day;
      setValue(val);
      !controlled && val && setInputValue(formatValue(val));
      controller.closeDropdown();
    },
  });

  const handlePresetSelect = (val: DateStringValue | null) => {
    setValue(val);
    if (val) {
      controller.setDate(val);
    }
    if (!controlled) {
      setInputValue(val ? formatValue(val) : '');
    }
    controller.closeDropdown();
  };

  const clearButton = (
    <Input.ClearButton
      onClick={() => {
        setValue(null);
        !controlled && setInputValue('');
        controller.closeDropdown();
      }}
      unstyled={unstyled}
      {...clearButtonProps}
    />
  );

  const _clearable = clearable && !!_value && !readOnly && !disabled;

  useDidUpdate(() => {
    _value !== undefined && !controller.dropdownOpened && setInputValue(formatValue(_value));
  }, [_value]);

  useClickOutside(() => controller.closeDropdown(), undefined, [
    _wrapperRef.current,
    _dropdownRef.current,
  ]);

  const calendar = (
    <Calendar
      __staticSelector="DateInput"
      {...calendarProps}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      minDate={minDate}
      maxDate={maxDate}
      locale={locale}
      getDayProps={_getDayProps}
      size={inputProps.size as MantineSize}
      controller={controller}
      getMonthControlProps={(date) => ({
        selected: typeof _value === 'string' ? isSameMonth(date, _value) : false,
        ...getMonthControlProps?.(date),
      })}
      getYearControlProps={(date) => ({
        selected: typeof _value === 'string' ? dayjs(date).isSame(_value, 'year') : false,
        ...getYearControlProps?.(date),
      })}
      attributes={wrapperProps.attributes}
    />
  );

  return (
    <>
      <Input.Wrapper {...wrapperProps} __staticSelector="DateInput" ref={_wrapperRef}>
        <Popover
          opened={controller.dropdownOpened && !cannotOpen}
          trapFocus={false}
          position="bottom-start"
          disabled={cannotOpen}
          withRoles={false}
          unstyled={unstyled}
          {...popoverProps}
        >
          <Popover.Target>
            <Input
              data-dates-input
              data-read-only={readOnly || undefined}
              autoComplete="off"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onClick={handleInputClick}
              onKeyDown={handleInputKeyDown}
              readOnly={readOnly}
              rightSection={rightSection}
              __clearSection={clearButton}
              __clearable={_clearable}
              __clearSectionMode={clearSectionMode}
              {...inputProps}
              {...others}
              disabled={disabled}
              __staticSelector="DateInput"
            />
          </Popover.Target>
          <Popover.Dropdown
            onMouseDown={(event) => event.preventDefault()}
            data-dates-dropdown
            data-with-presets={presets ? true : undefined}
            className={unstyled ? undefined : classes.dropdown}
            ref={_dropdownRef}
          >
            <DatesDropdownProvider value={DROPDOWN_CONTEXT}>
              <Presets
                presets={presets}
                onPresetSelect={handlePresetSelect}
                getStyles={getStyles}
                rootSelector="presetsRoot"
                size={inputProps.size as MantineSize}
              >
                {calendar}
              </Presets>
            </DatesDropdownProvider>
          </Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput name={name} form={form} value={_value} type="default" withTime={withTime} />
    </>
  );
});

DateInput.classes = { ...Input.classes, ...Calendar.classes, ...classes };
DateInput.displayName = '@mantine/dates/DateInput';

export namespace DateInput {
  export type Props = DateInputProps;
  export type StylesNames = DateInputStylesNames;
  export type Factory = DateInputFactory;
  export type Controller = PickerInputController;
  export type ControllerOptions = PickerInputControllerOptions;
}
