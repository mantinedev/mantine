import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getFontSize,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import {
  CalendarLevel,
  DatePickerType,
  DateStringValue,
  PickerBaseProps,
  PickerPreset,
} from '../../types';
import {
  Calendar,
  CalendarBaseProps,
  CalendarController,
  CalendarProps,
  CalendarSettings,
  CalendarStylesNames,
  DecadeLevelBaseSettings,
  MonthLevelBaseSettings,
  pickCalendarProps,
  useCalendar,
  YearLevelBaseSettings,
} from '../Calendar';
import { CalendarOptionsProvider } from '../Calendar/Calendar.context';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import { usePickerSelection } from '../Calendar/use-picker-selection/use-picker-selection';
import { useDatesContext } from '../DatesProvider';
import { getEndOfWeek, getStartOfWeek, MonthWeekControlProps } from '../Month';
import {
  getWeekPickerDayProps,
  normalizeWeekValue,
} from './get-week-picker-day-props/get-week-picker-day-props';

export type WeekPickerPreset<Type extends DatePickerType> = PickerPreset<Type>;

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
    Omit<MonthLevelBaseSettings, 'withWeekNumbers'>,
    CalendarBaseProps,
    Omit<CalendarSettings, 'hasNextLevel' | 'withWeekNumbers'>,
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
  signature: <Type extends DatePickerType = 'default'>(
    props: WeekPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
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

const classes = getPresetsClasses('weekPickerRoot');

export const WeekPicker = genericFactory<WeekPickerFactory>((_props) => {
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
    presets,
    className,
    style,
    unstyled,
    size,
    vars,
    attributes,
    controller: controllerProp,
    fullWidth,
    getWeekControlProps,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);

  const ctx = useDatesContext();
  const firstDayOfWeek = ctx.getFirstDayOfWeek(calendarProps.firstDayOfWeek);
  const [hoveredWeek, setHoveredWeek] = useState<DateStringValue | null>(null);

  const normalizedValue = useMemo(
    () => normalizeWeekValue(value as any, firstDayOfWeek),
    [value, firstDayOfWeek]
  );
  const normalizedDefaultValue = useMemo(
    () => normalizeWeekValue(defaultValue as any, firstDayOfWeek),
    [defaultValue, firstDayOfWeek]
  );

  const getStyles = useStyles<WeekPickerFactory>({
    name: __staticSelector || 'WeekPicker',
    classes,
    props: props as WeekPickerProps,
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

  const minLevel = calendarProps.minLevel || 'month';

  const controller = useController(useCalendar, controllerProp, {
    date: calendarProps.date,
    defaultDate: calendarProps.defaultDate,
    onDateChange: calendarProps.onDateChange,
    level: calendarProps.level
      ? clampLevel(calendarProps.level, minLevel, calendarProps.maxLevel)
      : undefined,
    defaultLevel: clampLevel(calendarProps.defaultLevel, minLevel, calendarProps.maxLevel),
    onLevelChange: calendarProps.onLevelChange,
  });

  const selection = usePickerSelection({
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
    props: props as WeekPickerProps,
  });

  return (
    <Presets
      presets={presets}
      onPresetSelect={selection.createPresetSelectHandler({
        controller,
        targetLevel: 'month',
        normalize: (val) => normalizeWeekValue(val as any, firstDayOfWeek) as typeof val,
      })}
      getStyles={getStyles}
      rootSelector="weekPickerRoot"
      size={size}
      rootProps={others}
    >
      <CalendarOptionsProvider
        value={{
          selection: {
            onDayClick: (_event, date) =>
              selection.onDateChange(getStartOfWeek(date, firstDayOfWeek)),
            onDayMouseEnter: (_event, date) => {
              const weekStart = getStartOfWeek(date, firstDayOfWeek);
              setHoveredWeek(weekStart);
              selection.onHoveredDateChange(weekStart);
            },
          },
          weekControls: {
            getWeekControlProps: (weekStart) => {
              const control = selection.getControlProps(weekStart);
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
                  selection.onDateChange(weekStart);
                },
                onMouseEnter: (event) => {
                  userProps?.onMouseEnter?.(event);
                  setHoveredWeek(weekStart);
                  selection.onHoveredDateChange(weekStart);
                },
              };
            },
          },
        }}
      >
        <Calendar
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          __staticSelector={__staticSelector || 'WeekPicker'}
          onMouseLeave={selection.onRootMouseLeave}
          size={size}
          fullWidth={fullWidth}
          {...calendarProps}
          {...(!presets ? others : {})}
          controller={controller}
          minLevel={minLevel}
          getDayProps={(date) => ({
            ...getWeekPickerDayProps({
              date,
              firstDayOfWeek,
              hoveredWeek,
              getControlProps: selection.getControlProps,
            }),
            ...calendarProps.getDayProps?.(date),
          })}
          getMonthControlProps={(date) => ({
            ...selection.getSelectedMonthProps(date),
            ...calendarProps.getMonthControlProps?.(date),
          })}
          getYearControlProps={(date) => ({
            ...selection.getSelectedYearProps(date),
            ...calendarProps.getYearControlProps?.(date),
          })}
          hideOutsideDates={calendarProps.hideOutsideDates ?? calendarProps.numberOfColumns !== 1}
          withWeekNumbers
          attributes={attributes}
          {...(!presets ? { className, style } : {})}
        />
      </CalendarOptionsProvider>
    </Presets>
  );
});

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
