import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getFontSize,
  MantineSize,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { DatePickerType, DateStringValue, PickerBaseProps, PickerPreset } from '../../types';
import { DecadeLevelBaseSettings, QuarterLevelBaseSettings } from '../Calendar';
import { Calendar } from '../Calendar/Calendar';
import { CalendarOptionsProvider } from '../Calendar/Calendar.context';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import {
  QuartersListStylesNames,
  YearsListStylesNames,
} from '../Calendar/ControlsList/ControlsList';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import {
  useCalendar,
  type CalendarController,
  type CalendarControllerOptions,
} from '../Calendar/use-calendar/use-calendar';
import { usePickerSelection } from '../Calendar/use-picker-selection/use-picker-selection';
import { CalendarHeaderStylesNames } from '../CalendarHeader';
import { normalizeQuarterValue } from './normalize-quarter-value/normalize-quarter-value';

export type QuarterPickerLevel = 'year' | 'decade';

export type QuarterPickerPreset<Type extends DatePickerType> = PickerPreset<Type>;

export interface QuarterPickerAriaLabels {
  yearLevelControl?: string;
  nextYear?: string;
  previousYear?: string;
  nextDecade?: string;
  previousDecade?: string;
}

export type QuarterPickerCssVariables = {
  quarterPickerRoot: '--preset-font-size';
};

export type QuarterPickerStylesNames =
  | 'levelsGroup'
  | CalendarHeaderStylesNames
  | YearsListStylesNames
  | QuartersListStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'quarterPickerRoot';

export interface QuarterPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>, DecadeLevelBaseSettings, QuarterLevelBaseSettings {
  __staticSelector?: string;

  /** Initial displayed date in uncontrolled mode @category state */
  defaultDate?: DateStringValue | Date;

  /** Displayed date in controlled mode @category state */
  date?: DateStringValue | Date;

  /** Called when date changes @category state */
  onDateChange?: (date: DateStringValue) => void;

  /** Max level that user can go up to @default 'decade' @category behavior */
  maxLevel?: QuarterPickerLevel;

  /** Initial displayed level (uncontrolled) @category state */
  defaultLevel?: QuarterPickerLevel;

  /** Current displayed level (controlled) @category state */
  level?: QuarterPickerLevel;

  /** Called when level changes @category state */
  onLevelChange?: (level: QuarterPickerLevel) => void;

  /** Number of columns displayed next to each other @default 1 @category appearance */
  numberOfColumns?: number;

  /** Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly @category behavior */
  columnsToScroll?: number;

  /** `aria-label` attributes for controls on different levels @category accessibility */
  ariaLabels?: QuarterPickerAriaLabels;

  /** Next button `aria-label` @category accessibility */
  nextLabel?: string;

  /** Previous button `aria-label` @category accessibility */
  previousLabel?: string;

  /** Change next icon @category appearance */
  nextIcon?: React.ReactNode;

  /** Change previous icon @category appearance */
  previousIcon?: React.ReactNode;

  /** Controls order @default ['previous', 'level', 'next'] @category appearance */
  headerControlsOrder?: ('previous' | 'next' | 'level')[];

  /** Determines whether level select controls should be rendered as native `<select>` elements @default false @category behavior */
  withNativeLevelSelect?: boolean;

  /** Year range for native level select, tuple of `[startYear, endYear]` @category appearance */
  yearsSelectRange?: [number, number];

  /** Determines whether the picker should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;

  /** Component size @category appearance */
  size?: MantineSize;

  /** Predefined values to pick from @category appearance */
  presets?: QuarterPickerPreset<Type>[];

  /** Called when user selects year on decade level @category behavior */
  onYearSelect?: (date: DateStringValue) => void;

  /** Called when the next year button is clicked @category behavior */
  onNextYear?: (date: DateStringValue) => void;

  /** Called when the previous year button is clicked @category behavior */
  onPreviousYear?: (date: DateStringValue) => void;

  /** Called when the next decade button is clicked @category behavior */
  onNextDecade?: (date: DateStringValue) => void;

  /** Called when the previous decade button is clicked @category behavior */
  onPreviousDecade?: (date: DateStringValue) => void;

  /** Called when mouse enters year control @category behavior */
  onYearMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters quarter control @category behavior */
  onQuarterMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;
}

export interface QuarterPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    QuarterPickerBaseProps<Type>,
    StylesApiProps<QuarterPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when quarter is selected @category behavior */
  onQuarterSelect?: (date: DateStringValue) => void;

  /** Controller returned by the `useCalendar` hook. When provided, the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: CalendarController;
}

export type QuarterPickerFactory = Factory<{
  props: QuarterPickerProps;
  ref: HTMLDivElement;
  stylesNames: QuarterPickerStylesNames;
  vars: QuarterPickerCssVariables;
  signature: <Type extends DatePickerType = 'default'>(
    props: QuarterPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
}>;

const varsResolver = createVarsResolver<QuarterPickerFactory>((_, { size }) => ({
  quarterPickerRoot: {
    '--preset-font-size': getFontSize(size),
  },
}));

const defaultProps = {
  type: 'default',
  maxLevel: 'decade',
  numberOfColumns: 1,
} satisfies Partial<QuarterPickerProps>;

const classes = getPresetsClasses('quarterPickerRoot');

export const QuarterPicker = genericFactory<QuarterPickerFactory>((_props) => {
  const props = useProps('QuarterPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getQuarterControlProps,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onQuarterSelect,
    onYearSelect,
    onQuarterMouseEnter,
    onYearMouseEnter,
    presets,
    className,
    style,
    unstyled,
    size,
    attributes,
    maxLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    nextLabel,
    previousLabel,
    nextIcon,
    previousIcon,
    headerControlsOrder,
    withNativeLevelSelect,
    yearsSelectRange,
    fullWidth,
    minDate,
    maxDate,
    locale,
    quartersListFormat,
    yearLabelFormat,
    yearsListFormat,
    decadeLabelFormat,
    withCellSpacing,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    controller: controllerProp,
    ...others
  } = props;

  const getStyles = useStyles<QuarterPickerFactory>({
    name: __staticSelector || 'QuarterPicker',
    classes,
    props: props as QuarterPickerProps,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: presets ? 'quarterPickerRoot' : undefined,
    varsResolver,
    vars,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<QuarterPickerFactory>({
    classNames,
    styles,
    props: props as QuarterPickerProps,
  });

  const controller = useController(useCalendar, controllerProp, {
    date,
    defaultDate,
    onDateChange,
    level: level ? clampLevel(level, 'year', maxLevel) : undefined,
    defaultLevel: clampLevel(defaultLevel ?? 'year', 'year', maxLevel),
    onLevelChange: onLevelChange as CalendarControllerOptions['onLevelChange'],
  });

  const selection = usePickerSelection({
    type: type as any,
    level: 'quarter',
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange: onChange as any,
    onMouseLeave,
  });

  return (
    <Presets
      presets={presets}
      onPresetSelect={selection.createPresetSelectHandler({
        controller,
        targetLevel: 'year',
        normalize: normalizeQuarterValue as any,
      })}
      getStyles={getStyles}
      rootSelector="quarterPickerRoot"
      size={size}
      rootProps={others}
    >
      <CalendarOptionsProvider
        value={{
          yearBody: 'quarters',
          quartersListFormat,
          getQuarterControlProps: (quarter) => ({
            ...selection.getControlProps(quarter),
            ...getQuarterControlProps?.(quarter),
          }),
          selection: {
            onQuarterClick: (_event, quarter) => {
              selection.onDateChange(quarter);
              onQuarterSelect?.(quarter);
            },
            onQuarterMouseEnter: (event, quarter) => {
              selection.onHoveredDateChange(quarter);
              onQuarterMouseEnter?.(event, quarter);
            },
          },
        }}
      >
        <Calendar
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          size={size}
          {...(!presets ? others : {})}
          {...(!presets ? { className, style } : {})}
          __staticSelector={__staticSelector || 'QuarterPicker'}
          controller={controller}
          minLevel="year"
          maxLevel={maxLevel}
          enableKeyboardNavigation={false}
          onMouseLeave={selection.onRootMouseLeave}
          numberOfColumns={numberOfColumns}
          columnsToScroll={columnsToScroll}
          ariaLabels={ariaLabels}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          headerControlsOrder={headerControlsOrder}
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          fullWidth={fullWidth}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          yearLabelFormat={yearLabelFormat}
          yearsListFormat={yearsListFormat}
          decadeLabelFormat={decadeLabelFormat}
          withCellSpacing={withCellSpacing}
          onNextYear={onNextYear}
          onPreviousYear={onPreviousYear}
          onNextDecade={onNextDecade}
          onPreviousDecade={onPreviousDecade}
          onYearSelect={onYearSelect}
          onYearMouseEnter={onYearMouseEnter}
          getYearControlProps={(year) => ({
            ...selection.getSelectedYearProps(year),
            ...getYearControlProps?.(year),
          })}
          attributes={attributes}
        />
      </CalendarOptionsProvider>
    </Presets>
  );
});

QuarterPicker.classes = { ...Calendar.classes, ...classes };
QuarterPicker.varsResolver = varsResolver;
QuarterPicker.displayName = '@mantine/dates/QuarterPicker';

export namespace QuarterPicker {
  export type Props<Type extends DatePickerType = 'default'> = QuarterPickerProps<Type>;
  export type StylesNames = QuarterPickerStylesNames;
  export type Level = QuarterPickerLevel;
  export type AriaLabels = QuarterPickerAriaLabels;
  export type Factory = QuarterPickerFactory;
}
