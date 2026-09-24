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
import { CalendarLevel, DatePickerType, PickerBaseProps, PickerPreset } from '../../types';
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

export type DatePickerPreset<Type extends DatePickerType> = PickerPreset<Type>;

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
  signature: <Type extends DatePickerType = 'default'>(
    props: DatePickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
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

const classes = getPresetsClasses('datePickerRoot');

export const DatePicker = genericFactory<DatePickerFactory>((_props) => {
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
    presets,
    className,
    style,
    unstyled,
    size,
    vars,
    attributes,
    fullWidth,
    controller: controllerProp,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);

  const getStyles = useStyles<DatePickerFactory>({
    name: __staticSelector || 'DatePicker',
    classes,
    props: props as DatePickerProps,
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
    value,
    defaultValue,
    onChange: onChange as any,
    onMouseLeave,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DatePickerFactory>({
    classNames,
    styles,
    props: props as DatePickerProps,
  });

  return (
    <Presets
      presets={presets}
      onPresetSelect={selection.createPresetSelectHandler({ controller, targetLevel: 'month' })}
      getStyles={getStyles}
      rootSelector="datePickerRoot"
      size={size}
      rootProps={others}
    >
      <CalendarOptionsProvider
        value={{
          selection: {
            onDayClick: (_event, date) => selection.onDateChange(date),
            onDayMouseEnter: (_event, date) => selection.onHoveredDateChange(date),
          },
        }}
      >
        <Calendar
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          __staticSelector={__staticSelector || 'DatePicker'}
          onMouseLeave={selection.onRootMouseLeave}
          size={size}
          fullWidth={fullWidth}
          {...calendarProps}
          {...(!presets ? others : {})}
          controller={controller}
          minLevel={minLevel}
          getDayProps={(date) => ({
            ...selection.getControlProps(date),
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
          attributes={attributes}
          {...(!presets ? { className, style } : {})}
        />
      </CalendarOptionsProvider>
    </Presets>
  );
});

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
