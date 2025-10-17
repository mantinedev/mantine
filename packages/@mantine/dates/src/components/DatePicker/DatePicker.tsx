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
  UnstyledButton,
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
  CalendarProps,
  CalendarSettings,
  CalendarStylesNames,
  pickCalendarProps,
} from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { isSameMonth } from '../Month';
import { MonthLevelBaseSettings } from '../MonthLevel';
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
  | 'datePickerRoot'
  | 'dropdown';

export interface DatePickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    MonthLevelBaseSettings,
    CalendarBaseProps,
    Omit<CalendarSettings, 'hasNextLevel'>,
    Pick<CalendarProps, 'enableKeyboardNavigation'> {
  maxLevel?: CalendarLevel;
  defaultLevel?: CalendarLevel;
  level?: CalendarLevel;
  onLevelChange?: (level: CalendarLevel) => void;
  presets?: DatePickerPreset<Type>[];
  __onPresetSelect?: (
    preset: Type extends 'range'
      ? [DateStringValue | null, DateStringValue | null]
      : DateStringValue | null
  ) => void;
}

export interface DatePickerProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<DatePickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {}

export type DatePickerFactory = Factory<{
  props: DatePickerProps;
  ref: HTMLDivElement;
  stylesNames: DatePickerStylesNames;
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
  props: DatePickerProps<Type> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.JSX.Element) &
  MantineComponentStaticProperties<DatePickerFactory>;

export const DatePicker: DatePickerComponent = factory<DatePickerFactory>((_props, ref) => {
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
    rootSelector: 'datePickerRoot',
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
  const mergedStyles = { ...resolvedStyles, ...styles } as Record<string, any>;

  const calendar = (
    <div
      style={
        {
          ...(mergedStyles?.dropdown || {}),
        } as React.CSSProperties
      }
    >
      <Calendar
        ref={ref}
        classNames={resolvedClassNames}
        styles={mergedStyles}
        __staticSelector={__staticSelector || 'DatePicker'}
        onMouseLeave={onRootMouseLeave}
        size={size}
        {...calendarProps}
        {...(!presets ? others : {})}
        __stopPropagation={__stopPropagation}
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
        hideOutsideDates={
          calendarProps.hideOutsideDates ?? calendarProps.numberOfColumns !== 1
        }
        {...(!presets ? { className, style, attributes } : {})}
      />
    </div>
  );

  if (!presets) return calendar;

  const handlePresetSelect = (
    val: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => {
    const _val = Array.isArray(val) ? val[0] : val;
    if (_val !== undefined) {
      setDateRef.current?.(_val);
      setLevelRef.current?.('month');
      __onPresetSelect ? __onPresetSelect(_val) : setValue(val);
    }
  };

  const presetButtons = presets.map((preset, index) => (
    <UnstyledButton
      key={index}
      {...getStyles('presetButton')}
      onClick={() => handlePresetSelect(preset.value)}
      onMouseDown={(event) => event.preventDefault()}
      data-mantine-stop-propagation={__stopPropagation || undefined}
    >
      {preset.label}
    </UnstyledButton>
  ));

  return (
    <Box
      {...getStyles('datePickerRoot')}
      style={{
        ...getStyles('datePickerRoot').style,
        ...(mergedStyles?.datePickerRoot || {}),
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        ['--popover-bg' as any]: 'transparent',
        ['--mantine-color-body' as any]: 'transparent',
        ['--popover-shadow' as any]: 'none',
        ['--mantine-shadow-md' as any]: 'none',
      }}
      size={size}
      {...others}
    >
      {presets && (
        <div
          {...getStyles('presetsList')}
          style={{
            ...getStyles('presetsList').style,
            ...(mergedStyles?.presetsList || {}),
          }}
        >
          {presetButtons}
        </div>
      )}
      {calendar}
    </Box>
  );
}) as any;

DatePicker.classes = Calendar.classes;
(DatePicker as any).displayName = '@mantine/dates/DatePicker';
