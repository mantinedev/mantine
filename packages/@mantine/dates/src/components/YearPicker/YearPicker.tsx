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
import classes from './YearPicker.module.css';

export interface YearPickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}

export type YearPickerCssVariables = {
  yearPickerRoot: '--preset-font-size';
};

export type YearPickerStylesNames =
  | DecadeLevelGroupStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'yearPickerRoot';

export interface YearPickerBaseProps<Type extends DatePickerType = 'default'>
  extends
    PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    Omit<
      CalendarBaseProps,
      'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth' | 'hasNextLevel'
    > {
  /** Predefined values to pick from */
  presets?: YearPickerPreset<Type>[];

  /** If defined, called with preset value, suppresses `onChange` call */
  __onPresetSelect?: (
    preset: Type extends 'range'
      ? [DateStringValue | null, DateStringValue | null]
      : DateStringValue | null
  ) => void;
}

export interface YearPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when year is selected */
  onYearSelect?: (date: DateStringValue) => void;
}

export type YearPickerFactory = Factory<{
  props: YearPickerProps;
  ref: HTMLDivElement;
  stylesNames: YearPickerStylesNames;
  vars: YearPickerCssVariables;
}>;

const varsResolver = createVarsResolver<YearPickerFactory>((_, { size }) => ({
  yearPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
} satisfies Partial<YearPickerProps>;

type YearPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<YearPickerFactory>;

export const YearPicker: YearPickerComponent = factory<YearPickerFactory>((_props) => {
  const props = useProps('YearPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onYearSelect,
    __updateDateOnYearSelect,
    __onPresetSelect,
    __stopPropagation,
    presets,
    className,
    style,
    unstyled,
    size,
    attributes,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);
  const setDateRef = useRef<((date: DateValue) => void) | null>(null);
  const setLevelRef = useRef<((level: CalendarLevel) => void) | null>(null);

  const getStyles = useStyles<YearPickerFactory>({
    name: __staticSelector || 'YearPicker',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: presets ? 'yearPickerRoot' : undefined,
    varsResolver,
    vars,
  });

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps, setValue } =
    useDatesState({
      type: type as any,
      level: 'year',
      allowDeselect,
      allowSingleDateInRange,
      value,
      defaultValue,
      onChange: onChange as any,
      onMouseLeave,
    });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerFactory>({
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
      minLevel="decade"
      __updateDateOnYearSelect={__updateDateOnYearSelect ?? false}
      __staticSelector={__staticSelector || 'YearPicker'}
      onMouseLeave={onRootMouseLeave}
      onYearMouseEnter={(_event, date) => onHoveredDateChange(date)}
      onYearSelect={(date) => {
        onDateChange(date);
        onYearSelect?.(date);
      }}
      getYearControlProps={(date) => ({
        ...getControlProps(date),
        ...getYearControlProps?.(date),
      })}
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
      setLevelRef.current?.('decade');
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
    <Box {...getStyles('yearPickerRoot')} size={size} {...others}>
      <div {...getStyles('presetsList')}>{presetButtons}</div>
      {calendar}
    </Box>
  );
}) as any;

YearPicker.classes = { ...Calendar.classes, ...classes };
YearPicker.varsResolver = varsResolver;
YearPicker.displayName = '@mantine/dates/YearPicker';
