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
  DecadeLevelBaseSettings,
  pickCalendarProps,
  useCalendar,
  YearLevelBaseSettings,
} from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { MonthsListStylesNames, YearsListStylesNames } from '../Calendar/ControlsList/ControlsList';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import { usePickerSelection } from '../Calendar/use-picker-selection/use-picker-selection';
import { CalendarHeaderStylesNames } from '../CalendarHeader';

export type MonthPickerPreset<Type extends DatePickerType> = PickerPreset<Type>;

export type MonthPickerCssVariables = {
  monthPickerRoot: '--preset-font-size';
};

export type MonthPickerStylesNames =
  | 'levelsGroup'
  | CalendarHeaderStylesNames
  | YearsListStylesNames
  | MonthsListStylesNames
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
  /** Determines whether level select controls should be rendered as native `<select>` elements @default false @category behavior */
  withNativeLevelSelect?: boolean;

  /** Max level that user can go up to @default 'decade' @category behavior */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) @category state */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) @category state */
  level?: CalendarLevel;

  /** Called when level changes @category state */
  onLevelChange?: (level: MonthPickerLevel) => void;

  /** Predefined values to pick from @category appearance */
  presets?: MonthPickerPreset<Type>[];
}

export interface MonthPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    MonthPickerBaseProps<Type>,
    StylesApiProps<MonthPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Controller returned by the `useCalendar` hook. When provided, the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: CalendarController;

  /** Called when month is selected @category behavior */
  onMonthSelect?: (date: DateStringValue) => void;
}

export type MonthPickerFactory = Factory<{
  props: MonthPickerProps;
  ref: HTMLDivElement;
  stylesNames: MonthPickerStylesNames;
  vars: MonthPickerCssVariables;
  signature: <Type extends DatePickerType = 'default'>(
    props: MonthPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
}>;

const varsResolver = createVarsResolver<MonthPickerFactory>((_, { size }) => ({
  monthPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
} satisfies Partial<MonthPickerProps>;

const classes = getPresetsClasses('monthPickerRoot');

export const MonthPicker = genericFactory<MonthPickerFactory>((_props) => {
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
    presets,
    className,
    style,
    unstyled,
    size,
    attributes,
    controller: controllerProp,
    onLevelChange,
    fullWidth,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);

  const getStyles = useStyles<MonthPickerFactory>({
    name: __staticSelector || 'MonthPicker',
    classes,
    props: props as MonthPickerProps,
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

  const controller = useController(useCalendar, controllerProp, {
    date: calendarProps.date,
    defaultDate: calendarProps.defaultDate,
    onDateChange: calendarProps.onDateChange,
    level: calendarProps.level
      ? clampLevel(calendarProps.level, 'year', calendarProps.maxLevel)
      : undefined,
    defaultLevel: clampLevel(calendarProps.defaultLevel, 'year', calendarProps.maxLevel),
    onLevelChange: onLevelChange as any,
  });

  const selection = usePickerSelection({
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
    props: props as MonthPickerProps,
  });

  return (
    <Presets
      presets={presets}
      onPresetSelect={selection.createPresetSelectHandler({ controller, targetLevel: 'year' })}
      getStyles={getStyles}
      rootSelector="monthPickerRoot"
      size={size}
      rootProps={others}
    >
      <Calendar
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        size={size}
        fullWidth={fullWidth}
        {...calendarProps}
        {...(!presets ? others : {})}
        minLevel="year"
        __staticSelector={__staticSelector || 'MonthPicker'}
        onMouseLeave={selection.onRootMouseLeave}
        onMonthMouseEnter={(event, date) => {
          selection.onHoveredDateChange(date);
          calendarProps.onMonthMouseEnter?.(event, date);
        }}
        onMonthSelect={(date) => {
          selection.onDateChange(date);
          onMonthSelect?.(date);
        }}
        getMonthControlProps={(date) => ({
          ...selection.getControlProps(date),
          ...getMonthControlProps?.(date),
        })}
        getYearControlProps={(date) => ({
          ...selection.getSelectedYearProps(date),
          ...calendarProps.getYearControlProps?.(date),
        })}
        onLevelChange={onLevelChange as any}
        controller={controller}
        attributes={attributes}
        {...(!presets ? { className, style } : {})}
      />
    </Presets>
  );
});

MonthPicker.classes = { ...Calendar.classes, ...classes };
MonthPicker.varsResolver = varsResolver;
MonthPicker.displayName = '@mantine/dates/MonthPicker';

export namespace MonthPicker {
  export type Props<Type extends DatePickerType = 'default'> = MonthPickerProps<Type>;
  export type StylesNames = MonthPickerStylesNames;
  export type Factory = MonthPickerFactory;
}
