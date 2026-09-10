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
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useDatesState, useUncontrolledDates } from '../../hooks';
import { DatePickerType, DateStringValue, PickerBaseProps } from '../../types';
import { getDefaultClampedDate, toDateString } from '../../utils';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { DecadeLevelGroup, DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { QuarterLevelBaseSettings } from '../QuarterLevel';
import { QuarterLevelGroup, QuarterLevelGroupStylesNames } from '../QuarterLevelGroup';
import { normalizeQuarterValue } from './normalize-quarter-value/normalize-quarter-value';
import classes from './QuarterPicker.module.css';

export type QuarterPickerLevel = 'year' | 'decade';

export interface QuarterPickerPreset<Type extends DatePickerType> {
  value: Type extends 'range'
    ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple'
      ? DateStringValue[]
      : DateStringValue | null;
  label: React.ReactNode;
}

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
  | DecadeLevelGroupStylesNames
  | QuarterLevelGroupStylesNames
  | 'presetsList'
  | 'presetButton'
  | 'quarterPickerRoot';

export interface QuarterPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>, DecadeLevelBaseSettings, QuarterLevelBaseSettings {
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether propagation for `Escape` key should be stopped */
  __stopPropagation?: boolean;

  /** Determines whether date should be updated when year control is clicked @default true */
  __updateDateOnYearSelect?: boolean;

  /** If defined, called with preset value, suppresses `onChange` call */
  __onPresetSelect?: (
    preset: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => void;

  /** Initial displayed date in uncontrolled mode */
  defaultDate?: DateStringValue | Date;

  /** Displayed date in controlled mode */
  date?: DateStringValue | Date;

  /** Called when date changes */
  onDateChange?: (date: DateStringValue) => void;

  /** Max level that user can go up to @default 'decade' */
  maxLevel?: QuarterPickerLevel;

  /** Initial displayed level (uncontrolled) */
  defaultLevel?: QuarterPickerLevel;

  /** Current displayed level (controlled) */
  level?: QuarterPickerLevel;

  /** Called when level changes */
  onLevelChange?: (level: QuarterPickerLevel) => void;

  /** Number of columns displayed next to each other @default 1 */
  numberOfColumns?: number;

  /** Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly */
  columnsToScroll?: number;

  /** `aria-label` attributes for controls on different levels */
  ariaLabels?: QuarterPickerAriaLabels;

  /** Next button `aria-label` */
  nextLabel?: string;

  /** Previous button `aria-label` */
  previousLabel?: string;

  /** Change next icon */
  nextIcon?: React.ReactNode;

  /** Change previous icon */
  previousIcon?: React.ReactNode;

  /** Controls order @default ['previous', 'level', 'next'] */
  headerControlsOrder?: ('previous' | 'next' | 'level')[];

  /** Determines whether level select controls should be rendered as native `<select>` elements @default false */
  withNativeLevelSelect?: boolean;

  /** Year range for native level select, tuple of `[startYear, endYear]` */
  yearsSelectRange?: [number, number];

  /** Determines whether the picker should take the full width of its container @default false */
  fullWidth?: boolean;

  /** Component size */
  size?: MantineSize;

  /** Predefined values to pick from */
  presets?: QuarterPickerPreset<Type>[];

  /** Called when user selects year on decade level */
  onYearSelect?: (date: DateStringValue) => void;

  /** Called when the next year button is clicked */
  onNextYear?: (date: DateStringValue) => void;

  /** Called when the previous year button is clicked */
  onPreviousYear?: (date: DateStringValue) => void;

  /** Called when the next decade button is clicked */
  onNextDecade?: (date: DateStringValue) => void;

  /** Called when the previous decade button is clicked */
  onPreviousDecade?: (date: DateStringValue) => void;

  /** Called when mouse enters year control */
  onYearMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters quarter control */
  onQuarterMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;
}

export interface QuarterPickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    QuarterPickerBaseProps<Type>,
    StylesApiProps<QuarterPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when quarter is selected */
  onQuarterSelect?: (date: DateStringValue) => void;
}

export type QuarterPickerFactory = Factory<{
  props: QuarterPickerProps;
  ref: HTMLDivElement;
  stylesNames: QuarterPickerStylesNames;
  vars: QuarterPickerCssVariables;
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
  __updateDateOnYearSelect: true,
} satisfies Partial<QuarterPickerProps>;

function clampQuarterLevel(
  level: QuarterPickerLevel | undefined,
  maxLevel: QuarterPickerLevel
): QuarterPickerLevel {
  if (maxLevel === 'year') {
    return 'year';
  }

  return level || 'year';
}

type QuarterPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: QuarterPickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
) => React.JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<QuarterPickerFactory>;

export const QuarterPicker: QuarterPickerComponent = factory<QuarterPickerFactory>((_props) => {
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
    __preventFocus,
    __stopPropagation,
    __updateDateOnYearSelect,
    __onPresetSelect,
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
    ...others
  } = props;

  const getStyles = useStyles<QuarterPickerFactory>({
    name: __staticSelector || 'QuarterPicker',
    classes,
    props,
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
    props,
  });

  const [_level, setLevel] = useUncontrolled<QuarterPickerLevel>({
    value: level ? clampQuarterLevel(level, maxLevel) : undefined,
    defaultValue: defaultLevel ? clampQuarterLevel(defaultLevel, maxLevel) : undefined,
    finalValue: 'year',
    onChange: onLevelChange,
  });

  const [_date, setDate, dateControlled] = useUncontrolledDates({
    type: 'default',
    value: toDateString(date),
    defaultValue: toDateString(defaultDate),
    onChange: onDateChange as any,
  });

  const fallbackDateRef = useRef<DateStringValue | null>(null);
  if (fallbackDateRef.current === null) {
    fallbackDateRef.current = getDefaultClampedDate({ minDate, maxDate });
  }
  const currentDate: DateStringValue = _date || fallbackDateRef.current;

  const disableNativeLevelSelect = dateControlled && !onDateChange;
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;

  const {
    onDateChange: onValueChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue,
  } = useDatesState({
    type: type as any,
    level: 'quarter',
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange: onChange as any,
    onMouseLeave,
  });

  const handleNextYear = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, 'year').format('YYYY-MM-DD');
    onNextYear?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousYear = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, 'year').format('YYYY-MM-DD');
    onPreviousYear?.(nextDate);
    setDate(nextDate);
  };

  const handleNextDecade = () => {
    const nextDate = dayjs(currentDate)
      .add(10 * _columnsToScroll, 'year')
      .format('YYYY-MM-DD');
    onNextDecade?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousDecade = () => {
    const nextDate = dayjs(currentDate)
      .subtract(10 * _columnsToScroll, 'year')
      .format('YYYY-MM-DD');
    onPreviousDecade?.(nextDate);
    setDate(nextDate);
  };

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'QuarterPicker',
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size,
    attributes,
  };

  const calendar = (
    <Box
      size={size}
      data-quarter-picker
      data-full-width={fullWidth || undefined}
      onMouseLeave={onRootMouseLeave}
      {...(!presets ? { className, style, ...others } : {})}
    >
      {_level === 'year' && (
        <QuarterLevelGroup
          year={currentDate}
          numberOfColumns={numberOfColumns}
          minDate={minDate}
          maxDate={maxDate}
          quartersListFormat={quartersListFormat}
          locale={locale}
          onNext={handleNextYear}
          onPrevious={handlePreviousYear}
          hasNextLevel={maxLevel !== 'year'}
          onLevelClick={() => setLevel('decade')}
          levelControlAriaLabel={ariaLabels?.yearLevelControl}
          nextLabel={ariaLabels?.nextYear ?? nextLabel}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousYear ?? previousLabel}
          previousIcon={previousIcon}
          yearLabelFormat={yearLabelFormat}
          getQuarterControlProps={(quarter) => ({
            ...getControlProps(quarter),
            ...getQuarterControlProps?.(quarter),
          })}
          __onControlMouseEnter={(event, payload) => {
            onHoveredDateChange(payload);
            onQuarterMouseEnter?.(event, payload);
          }}
          __onControlClick={(_event, payload) => {
            onValueChange(payload);
            onQuarterSelect?.(payload);
          }}
          __onDateChange={setDate}
          __disableNativeLevelSelect={disableNativeLevelSelect}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          withCellSpacing={withCellSpacing}
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          headerControlsOrder={headerControlsOrder}
          fullWidth={fullWidth}
          {...stylesApiProps}
        />
      )}

      {_level === 'decade' && (
        <DecadeLevelGroup
          decade={currentDate}
          minDate={minDate}
          maxDate={maxDate}
          yearsListFormat={yearsListFormat}
          getYearControlProps={(year) => ({
            selected: typeof _value === 'string' ? dayjs(year).isSame(_value, 'year') : false,
            ...getYearControlProps?.(year),
          })}
          locale={locale}
          onNext={handleNextDecade}
          onPrevious={handlePreviousDecade}
          numberOfColumns={numberOfColumns}
          nextLabel={ariaLabels?.nextDecade ?? nextLabel}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousDecade ?? previousLabel}
          previousIcon={previousIcon}
          decadeLabelFormat={decadeLabelFormat}
          __onControlMouseEnter={onYearMouseEnter}
          __onControlClick={(_event, payload) => {
            __updateDateOnYearSelect && setDate(payload);
            setLevel('year');
            onYearSelect?.(payload);
          }}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          withCellSpacing={withCellSpacing}
          headerControlsOrder={headerControlsOrder}
          fullWidth={fullWidth}
          {...stylesApiProps}
        />
      )}
    </Box>
  );

  if (!presets) {
    return calendar;
  }

  const handlePresetSelect = (
    val: DateStringValue | null | [DateStringValue | null, DateStringValue | null]
  ) => {
    const normalized = normalizeQuarterValue(val as any) as typeof val;
    const _val = Array.isArray(normalized) ? normalized[0] : normalized;
    if (_val !== undefined) {
      if (_val) {
        setDate(_val);
      }
      setLevel('year');
      __onPresetSelect ? __onPresetSelect(normalized) : setValue(normalized);
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
    <Box {...getStyles('quarterPickerRoot')} size={size} {...others}>
      <div {...getStyles('presetsList')}>{presetButtons}</div>
      {calendar}
    </Box>
  );
}) as any;

QuarterPicker.classes = { ...DecadeLevelGroup.classes, ...QuarterLevelGroup.classes, ...classes };
QuarterPicker.varsResolver = varsResolver;
QuarterPicker.displayName = '@mantine/dates/QuarterPicker';

export namespace QuarterPicker {
  export type Props<Type extends DatePickerType = 'default'> = QuarterPickerProps<Type>;
  export type StylesNames = QuarterPickerStylesNames;
  export type Level = QuarterPickerLevel;
  export type AriaLabels = QuarterPickerAriaLabels;
  export type Factory = QuarterPickerFactory;
}
