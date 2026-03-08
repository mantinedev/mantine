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
import { Calendar, CalendarBaseProps, pickCalendarProps } from '../Calendar';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { YearLevelBaseSettings } from '../YearLevel';
import { YearLevelGroupStylesNames } from '../YearLevelGroup';
import classes from './MonthPicker.module.css';

export interface MonthPickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}

export type MonthPickerCssVariables = {
  monthPickerRoot: '--preset-font-size';
};

export type MonthPickerStylesNames =
  | DecadeLevelGroupStylesNames
  | YearLevelGroupStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'monthPickerRoot';

type MonthPickerLevel = Exclude<CalendarLevel, 'month'>;

export interface MonthPickerBaseProps<Type extends DatePickerType = 'default'>
  extends
    PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    Omit<CalendarBaseProps, 'onNextMonth' | 'onPreviousMonth' | 'hasNextLevel'> {
  /** Max level that user can go up to @default 'decade' */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?: (level: MonthPickerLevel) => void;

  /** Predefined values to pick from */
  presets?: MonthPickerPreset<Type>[];

  /** If defined, called with preset value, suppresses `onChange` call */
  __onPresetSelect?: (
    preset: Type extends 'range'
      ? [DateStringValue | null, DateStringValue | null]
      : DateStringValue | null
  ) => void;
}

export interface MonthPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when month is selected */
  onMonthSelect?: (date: DateStringValue) => void;
}

export type MonthPickerFactory = Factory<{
  props: MonthPickerProps;
  ref: HTMLDivElement;
  stylesNames: MonthPickerStylesNames;
  vars: MonthPickerCssVariables;
}>;

const varsResolver = createVarsResolver<MonthPickerFactory>((_, { size }) => ({
  monthPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
} satisfies Partial<MonthPickerProps>;

type MonthPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: MonthPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<MonthPickerFactory>;

export const MonthPicker: MonthPickerComponent = factory<MonthPickerFactory>((_props) => {
  const props = useProps('MonthPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getMonthControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect,
    __updateDateOnMonthSelect,
    __onPresetSelect,
    __stopPropagation,
    presets,
    className,
    style,
    unstyled,
    size,
    attributes,
    onLevelChange,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);
  const setDateRef = useRef<((date: DateValue) => void) | null>(null);
  const setLevelRef = useRef<((level: CalendarLevel) => void) | null>(null);

  const getStyles = useStyles<MonthPickerFactory>({
    name: __staticSelector || 'MonthPicker',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: presets ? 'monthPickerRoot' : undefined,
    varsResolver,
    vars,
  });

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps, setValue } =
    useDatesState({
      type: type as any,
      level: 'month',
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange: onChange as any,
      onMouseLeave,
    });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthPickerFactory>({
    classNames,
    styles,
    props,
  });

  const calendar = (
    <Calendar
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      size={size}
      {...calendarProps}
      {...(!presets ? others : {})}
      minLevel="year"
      __updateDateOnMonthSelect={__updateDateOnMonthSelect ?? false}
      __staticSelector={__staticSelector || 'MonthPicker'}
      onMouseLeave={onRootMouseLeave}
      onMonthMouseEnter={(_event, date) => onHoveredDateChange(date)}
      onMonthSelect={(date) => {
        onDateChange(date);
        onMonthSelect?.(date);
      }}
      getMonthControlProps={(date) => ({
        ...getControlProps(date),
        ...getMonthControlProps?.(date),
      })}
      onLevelChange={onLevelChange as any}
      __setDateRef={setDateRef}
      __setLevelRef={setLevelRef}
      __stopPropagation={__stopPropagation}
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
      setLevelRef.current?.('year');
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
    <Box {...getStyles('monthPickerRoot')} size={size} {...others}>
      <div {...getStyles('presetsList')}>{presetButtons}</div>
      {calendar}
    </Box>
  );
}) as any;

MonthPicker.classes = { ...Calendar.classes, ...classes };
MonthPicker.varsResolver = varsResolver;
MonthPicker.displayName = '@mantine/dates/MonthPicker';
