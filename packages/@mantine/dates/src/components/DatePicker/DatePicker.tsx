import dayjs from 'dayjs';
import { useRef } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineComponentStaticProperties,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesState } from '../../hooks';
import {
  CalendarLevel,
  DatePickerType,
  DateStringValue,
  DateValue,
  PickerBaseProps,
} from '../../types';
import {
  Calendar,
  CalendarBaseProps,
  CalendarController,
  CalendarProps,
  CalendarSettings,
  CalendarStylesNames,
  pickCalendarProps,
} from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { isSameMonth } from '../Month';
import { MonthLevelBaseSettings } from '../MonthLevel';
import { PresetsList } from '../PresetsList';
import { YearLevelBaseSettings } from '../YearLevel';
import classes from './DatePicker.module.css';

export interface DatePickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}

export type DatePickerCssVariables = {
  datePickerRoot: '--preset-font-size';
};

export type DatePickerStylesNames =
  | CalendarStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'datePickerRoot';

export interface DatePickerBaseProps<Type extends DatePickerType = 'default'>
  extends
    PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    MonthLevelBaseSettings,
    CalendarBaseProps,
    Omit<CalendarSettings, 'hasNextLevel'>,
    Pick<CalendarProps, 'enableKeyboardNavigation'> {
  /** @category behavior */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) @category state */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) @category state */
  level?: CalendarLevel;

  /** Called when level changes @category state */
  onLevelChange?: (level: CalendarLevel) => void;

  /** Predefined values to pick from @category appearance */
  presets?: DatePickerPreset<Type>[];

  /** If defined, called with preset value, suppresses `onChange` call */
  __onPresetSelect?: (
    preset: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => void;
}

export interface DatePickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Controller returned by the `useCalendar` hook. When provided, the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: CalendarController;
}

export type DatePickerFactory = Factory<{
  props: DatePickerProps;
  ref: HTMLDivElement;
  stylesNames: DatePickerStylesNames;
  vars: DatePickerCssVariables;
}>;

const varsResolver = createVarsResolver<DatePickerFactory>((_, { size }) => ({
  datePickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
  defaultLevel: 'month',
  numberOfColumns: 1,
  size: 'sm',
} satisfies Partial<DatePickerProps>;

type DatePickerComponent = (<Type extends DatePickerType = 'default'>(
  props: DatePickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<DatePickerFactory>;

export const DatePicker: DatePickerComponent = factory<DatePickerFactory>((_props) => {
  const props = useProps('DatePicker', defaultProps, _props);
  const {
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    classNames,
    styles,
    __staticSelector,
    __onDayClick,
    __onDayMouseEnter,
    __onPresetSelect,
    __stopPropagation,
    presets,
    className,
    style,
    unstyled,
    size,
    vars,
    attributes,
    fullWidth,
    controller,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);
  const setDateRef = useRef<((date: DateValue) => void) | null>(null);
  const setLevelRef = useRef<((level: CalendarLevel) => void) | null>(null);

  const getStyles = useStyles<DatePickerFactory>({
    name: __staticSelector || 'DatePicker',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: presets ? 'datePickerRoot' : undefined,
    varsResolver,
    vars,
  });

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps, _value, setValue } =
    useDatesState({
      type: others.type as any,
      level: 'day',
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange: onChange as any,
      onMouseLeave,
    });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DatePickerFactory>({
    classNames,
    styles,
    props,
  });

  const calendar = (
    <Calendar
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector || 'DatePicker'}
      onMouseLeave={onRootMouseLeave}
      size={size}
      fullWidth={fullWidth}
      {...calendarProps}
      {...(!presets ? others : {})}
      __stopPropagation={__stopPropagation}
      controller={controller}
      __setDateRef={setDateRef}
      __setLevelRef={setLevelRef}
      minLevel={calendarProps.minLevel || 'month'}
      __onDayMouseEnter={(_event, date) => {
        onHoveredDateChange(date);
        __onDayMouseEnter?.(_event, date);
      }}
      __onDayClick={(_event, date) => {
        onDateChange(date);
        __onDayClick?.(_event, date);
      }}
      getDayProps={(date) => ({
        ...getControlProps(date),
        ...calendarProps.getDayProps?.(date),
      })}
      getMonthControlProps={(date) => ({
        selected: typeof _value === 'string' ? isSameMonth(date, _value) : false,
        ...calendarProps.getMonthControlProps?.(date),
      })}
      getYearControlProps={(date) => ({
        selected: typeof _value === 'string' ? dayjs(date).isSame(_value, 'year') : false,
        ...calendarProps.getYearControlProps?.(date),
      })}
      hideOutsideDates={calendarProps.hideOutsideDates ?? calendarProps.numberOfColumns !== 1}
      attributes={attributes}
      {...(!presets ? { className, style } : {})}
    />
  );

  if (!presets) {
    return calendar;
  }

  const handlePresetSelect = (
    val: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => {
    const _val = Array.isArray(val) ? val[0] : val;
    if (_val !== undefined) {
      setDateRef.current?.(_val);
      setLevelRef.current?.('month');
      __onPresetSelect ? __onPresetSelect(val) : setValue(val);
    }
  };

  return (
    <Box {...getStyles('datePickerRoot')} size={size} {...others}>
      <PresetsList
        {...getStyles('presetsList')}
        presets={presets}
        onPresetSelect={handlePresetSelect}
        buttonProps={getStyles('presetButton')}
        stopPropagation={__stopPropagation}
      />
      {calendar}
    </Box>
  );
}) as any;

DatePicker.classes = Calendar.classes;
DatePicker.varsResolver = varsResolver;
DatePicker.displayName = '@mantine/dates/DatePicker';

export namespace DatePicker {
  export type Props<Type extends DatePickerType> = DatePickerProps<Type>;
  export type BaseProps = DatePickerBaseProps;
  export type StylesNames = DatePickerStylesNames;
  export type Factory = DatePickerFactory;
  export type Preset<Type extends DatePickerType> = DatePickerPreset<Type>;
  export type CssVariables = DatePickerCssVariables;
}
