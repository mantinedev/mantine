import dayjs from 'dayjs';
import { useMemo, useRef, useState } from 'react';
import cx from 'clsx';
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
import { useDatesContext } from '../DatesProvider';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { getEndOfWeek, getStartOfWeek, isSameMonth, MonthWeekControlProps } from '../Month';
import { MonthLevelBaseSettings } from '../MonthLevel';
import { PresetsList } from '../PresetsList';
import { YearLevelBaseSettings } from '../YearLevel';
import {
  getWeekPickerDayProps,
  normalizeWeekValue,
} from './get-week-picker-day-props/get-week-picker-day-props';
import classes from './WeekPicker.module.css';

export interface WeekPickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}

export type WeekPickerCssVariables = {
  weekPickerRoot: '--preset-font-size';
};

export type WeekPickerStylesNames =
  | CalendarStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'weekPickerRoot';

export interface WeekPickerBaseProps<Type extends DatePickerType = 'default'>
  extends
    PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    YearLevelBaseSettings,
    Omit<
      MonthLevelBaseSettings,
      'withWeekNumbers' | '__withWeekControls' | '__getWeekControlProps'
    >,
    CalendarBaseProps,
    Omit<
      CalendarSettings,
      'hasNextLevel' | 'withWeekNumbers' | '__withWeekControls' | '__getWeekControlProps'
    >,
    Pick<CalendarProps, 'enableKeyboardNavigation'> {
  /** Max level that user can go up to @default 'decade' @category behavior */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) @category state */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) @category state */
  level?: CalendarLevel;

  /** Called when level changes @category state */
  onLevelChange?: (level: CalendarLevel) => void;

  /** Predefined values to pick from @category appearance */
  presets?: WeekPickerPreset<Type>[];

  /** Passes props down to week controls, receives the first date of the week in `YYYY-MM-DD` format */
  getWeekControlProps?: (weekStart: DateStringValue) => Partial<MonthWeekControlProps>;

  /** If defined, called with preset value, suppresses `onChange` call */
  __onPresetSelect?: (
    preset: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => void;
}

export interface WeekPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    WeekPickerBaseProps<Type>,
    StylesApiProps<WeekPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Controller returned by the `useCalendar` hook. When provided, the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: CalendarController;
}

export type WeekPickerFactory = Factory<{
  props: WeekPickerProps;
  ref: HTMLDivElement;
  stylesNames: WeekPickerStylesNames;
  vars: WeekPickerCssVariables;
}>;

const varsResolver = createVarsResolver<WeekPickerFactory>((_, { size }) => ({
  weekPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
  defaultLevel: 'month',
  numberOfColumns: 1,
  size: 'sm',
} satisfies Partial<WeekPickerProps>;

type WeekPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: WeekPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<WeekPickerFactory>;

export const WeekPicker: WeekPickerComponent = factory<WeekPickerFactory>((_props) => {
  const props = useProps('WeekPicker', defaultProps, _props);
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
    controller,
    fullWidth,
    getWeekControlProps,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);
  const setDateRef = useRef<((date: DateValue) => void) | null>(null);
  const setLevelRef = useRef<((level: CalendarLevel) => void) | null>(null);

  const ctx = useDatesContext();
  const firstDayOfWeek = ctx.getFirstDayOfWeek(calendarProps.firstDayOfWeek);
  const [hoveredWeek, setHoveredWeek] = useState<DateStringValue | null>(null);

  const normalizedValue = useMemo(
    () => normalizeWeekValue(value, firstDayOfWeek),
    [value, firstDayOfWeek]
  );
  const normalizedDefaultValue = useMemo(
    () => normalizeWeekValue(defaultValue, firstDayOfWeek),
    [defaultValue, firstDayOfWeek]
  );

  const getStyles = useStyles<WeekPickerFactory>({
    name: __staticSelector || 'WeekPicker',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: presets ? 'weekPickerRoot' : undefined,
    varsResolver,
    vars,
  });

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps, _value, setValue } =
    useDatesState({
      type: others.type as any,
      level: 'day',
      allowDeselect,
      allowSingleDateInRange,
      value: normalizedValue,
      defaultValue: normalizedDefaultValue,
      onChange: onChange as any,
      onMouseLeave: (event) => {
        setHoveredWeek(null);
        onMouseLeave?.(event);
      },
    });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<WeekPickerFactory>({
    classNames,
    styles,
    props,
  });

  const calendarClassNames = unstyled
    ? resolvedClassNames
    : {
        ...resolvedClassNames,
        monthRow: cx(classes.weekRow, resolvedClassNames?.monthRow),
        day: cx(classes.weekDay, resolvedClassNames?.day),
      };

  const calendar = (
    <Calendar
      classNames={calendarClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector || 'WeekPicker'}
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
        const weekStart = getStartOfWeek(date, firstDayOfWeek);
        setHoveredWeek(weekStart);
        onHoveredDateChange(weekStart);
        __onDayMouseEnter?.(_event, date);
      }}
      __onDayClick={(_event, date) => {
        onDateChange(getStartOfWeek(date, firstDayOfWeek));
        __onDayClick?.(_event, date);
      }}
      getDayProps={(date) => ({
        ...getWeekPickerDayProps({ date, firstDayOfWeek, hoveredWeek, getControlProps }),
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
      withWeekNumbers
      __withWeekControls
      __getWeekControlProps={(weekStart) => {
        const control = getControlProps(weekStart);
        const userProps = getWeekControlProps?.(weekStart);
        const locale = ctx.getLocale(calendarProps.locale);

        return {
          selected: !!control.selected,
          'aria-label': `${dayjs(weekStart).locale(locale).format('D MMMM YYYY')} – ${dayjs(
            getEndOfWeek(weekStart, firstDayOfWeek)
          )
            .locale(locale)
            .format('D MMMM YYYY')}`,
          'data-autofocus': control.selected || undefined,
          ...userProps,
          onClick: (event) => {
            userProps?.onClick?.(event);
            onDateChange(weekStart);
          },
          onMouseEnter: (event) => {
            userProps?.onMouseEnter?.(event);
            setHoveredWeek(weekStart);
            onHoveredDateChange(weekStart);
          },
        };
      }}
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
    const normalized = normalizeWeekValue(val as any, firstDayOfWeek) as typeof val;
    const _val = Array.isArray(normalized) ? normalized[0] : normalized;
    if (_val !== undefined) {
      setDateRef.current?.(_val);
      setLevelRef.current?.('month');
      __onPresetSelect ? __onPresetSelect(normalized) : setValue(normalized);
    }
  };

  return (
    <Box {...getStyles('weekPickerRoot')} size={size} {...others}>
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

WeekPicker.classes = { ...Calendar.classes, ...classes };
WeekPicker.varsResolver = varsResolver;
WeekPicker.displayName = '@mantine/dates/WeekPicker';

export namespace WeekPicker {
  export type Props<Type extends DatePickerType = 'default'> = WeekPickerProps<Type>;
  export type BaseProps = WeekPickerBaseProps;
  export type StylesNames = WeekPickerStylesNames;
  export type Factory = WeekPickerFactory;
  export type Preset<Type extends DatePickerType> = WeekPickerPreset<Type>;
  export type CssVariables = WeekPickerCssVariables;
}
