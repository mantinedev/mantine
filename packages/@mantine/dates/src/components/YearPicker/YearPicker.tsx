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
import { DatePickerType, DateStringValue, PickerBaseProps, PickerPreset } from '../../types';
import {
  Calendar,
  CalendarBaseProps,
  CalendarController,
  DecadeLevelBaseSettings,
  pickCalendarProps,
  useCalendar,
} from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { YearsListStylesNames } from '../Calendar/ControlsList/ControlsList';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import { usePickerSelection } from '../Calendar/use-picker-selection/use-picker-selection';
import { CalendarHeaderStylesNames } from '../CalendarHeader';

export type YearPickerPreset<Type extends DatePickerType> = PickerPreset<Type>;

export type YearPickerCssVariables = {
  yearPickerRoot: '--preset-font-size';
};

export type YearPickerStylesNames =
  | 'levelsGroup'
  | CalendarHeaderStylesNames
  | YearsListStylesNames
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
  /** Determines whether level select controls should be rendered as native `<select>` elements @default false @category behavior */
  withNativeLevelSelect?: boolean;

  /** Predefined values to pick from @category appearance */
  presets?: YearPickerPreset<Type>[];
}

export interface YearPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Controller returned by the `useCalendar` hook. When provided, the displayed date is owned by the controller and `date`, `defaultDate` and `onDateChange` props are ignored @category state */
  controller?: CalendarController;

  /** Called when year is selected @category behavior */
  onYearSelect?: (date: DateStringValue) => void;
}

export type YearPickerFactory = Factory<{
  props: YearPickerProps;
  ref: HTMLDivElement;
  stylesNames: YearPickerStylesNames;
  vars: YearPickerCssVariables;
  signature: <Type extends DatePickerType = 'default'>(
    props: YearPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
}>;

const varsResolver = createVarsResolver<YearPickerFactory>((_, { size }) => ({
  yearPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
} satisfies Partial<YearPickerProps>;

const classes = getPresetsClasses('yearPickerRoot');

export const YearPicker = genericFactory<YearPickerFactory>((_props) => {
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
    presets,
    className,
    style,
    unstyled,
    size,
    attributes,
    controller: controllerProp,
    fullWidth,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);

  const getStyles = useStyles<YearPickerFactory>({
    name: __staticSelector || 'YearPicker',
    classes,
    props: props as YearPickerProps,
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

  const controller = useController(useCalendar, controllerProp, {
    date: calendarProps.date,
    defaultDate: calendarProps.defaultDate,
    onDateChange: calendarProps.onDateChange,
    level: calendarProps.level
      ? clampLevel(calendarProps.level, 'decade', calendarProps.maxLevel)
      : undefined,
    defaultLevel: clampLevel(calendarProps.defaultLevel, 'decade', calendarProps.maxLevel),
    onLevelChange: calendarProps.onLevelChange,
  });

  const selection = usePickerSelection({
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
    props: props as YearPickerProps,
  });

  return (
    <Presets
      presets={presets}
      onPresetSelect={selection.createPresetSelectHandler({ controller, targetLevel: 'decade' })}
      getStyles={getStyles}
      rootSelector="yearPickerRoot"
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
        minLevel="decade"
        __staticSelector={__staticSelector || 'YearPicker'}
        onMouseLeave={selection.onRootMouseLeave}
        onYearMouseEnter={(event, date) => {
          selection.onHoveredDateChange(date);
          calendarProps.onYearMouseEnter?.(event, date);
        }}
        onYearSelect={(date) => {
          selection.onDateChange(date);
          onYearSelect?.(date);
        }}
        getYearControlProps={(date) => ({
          ...selection.getControlProps(date),
          ...getYearControlProps?.(date),
        })}
        controller={controller}
        attributes={attributes}
        {...(!presets ? { className, style } : {})}
      />
    </Presets>
  );
});

YearPicker.classes = { ...Calendar.classes, ...classes };
YearPicker.varsResolver = varsResolver;
YearPicker.displayName = '@mantine/dates/YearPicker';

export namespace YearPicker {
  export type Props<Type extends DatePickerType = 'default'> = YearPickerProps<Type>;
  export type BaseProps = YearPickerBaseProps;
  export type StylesNames = YearPickerStylesNames;
  export type Factory = YearPickerFactory;
}
