import { useEffect, useImperativeHandle, useRef } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { useFocusAfterLevelChange } from '../../hooks';
import { CalendarLevel, DateStringValue } from '../../types';
import { getDefaultClampedDate } from '../../utils';
import { DecadeLevelSettings } from '../DecadeLevel';
import { DecadeLevelGroup, DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { MonthLevelSettings } from '../MonthLevel';
import { MonthLevelGroup, MonthLevelGroupStylesNames } from '../MonthLevelGroup';
import { YearLevelSettings } from '../YearLevel';
import { YearLevelGroup, YearLevelGroupStylesNames } from '../YearLevelGroup';
import { clampLevel } from './clamp-level/clamp-level';
import {
  type CalendarShiftUnit,
  shiftCalendarDate,
} from './shift-calendar-date/shift-calendar-date';
import {
  useCalendar,
  type CalendarController,
  type CalendarControllerOptions,
} from './use-calendar/use-calendar';

export type CalendarStylesNames =
  | MonthLevelGroupStylesNames
  | YearLevelGroupStylesNames
  | DecadeLevelGroupStylesNames;

export interface CalendarAriaLabels {
  monthLevelControl?: string;
  yearLevelControl?: string;

  nextMonth?: string;
  previousMonth?: string;

  nextYear?: string;
  previousYear?: string;

  nextDecade?: string;
  previousDecade?: string;
}

type OmittedSettings =
  | 'onNext'
  | 'onPrevious'
  | 'onLevelClick'
  | 'withNext'
  | 'withPrevious'
  | 'nextDisabled'
  | 'previousDisabled'
  | 'hasNextLevel';

export interface CalendarSettings
  extends
    Omit<DecadeLevelSettings, OmittedSettings>,
    Omit<YearLevelSettings, OmittedSettings>,
    Omit<MonthLevelSettings, OmittedSettings> {
  /** Initial displayed level in uncontrolled mode @category state */
  defaultLevel?: CalendarLevel;

  /** Current displayed level displayed in controlled mode @category state */
  level?: CalendarLevel;

  /** Called when level changes @category state */
  onLevelChange?: (level: CalendarLevel) => void;

  /** Called when user selects year @category behavior */
  onYearSelect?: (date: DateStringValue) => void;

  /** Called when user selects month @category behavior */
  onMonthSelect?: (date: DateStringValue) => void;

  /** Called when mouse enters year control @category behavior */
  onYearMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters month control @category behavior */
  onMonthMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;
}

export interface CalendarBaseProps {
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether date should be updated when year control is clicked */
  __updateDateOnYearSelect?: boolean;

  /** Determines whether date should be updated when month control is clicked */
  __updateDateOnMonthSelect?: boolean;

  /** Assigns function to set date to the given ref */
  __setDateRef?: React.RefObject<((date: DateStringValue) => void) | null>;

  /** Assigns function to set level to the given ref */
  __setLevelRef?: React.RefObject<((level: CalendarLevel) => void) | null>;

  /** Initial displayed date in uncontrolled mode @category state */
  defaultDate?: DateStringValue | Date;

  /** Displayed date in controlled mode @category state */
  date?: DateStringValue | Date;

  /** Called when date changes @category state */
  onDateChange?: (date: DateStringValue) => void;

  /** Number of columns displayed next to each other @default 1 @category appearance */
  numberOfColumns?: number;

  /** Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly @category behavior */
  columnsToScroll?: number;

  /** `aria-label` attributes for controls on different levels @category accessibility */
  ariaLabels?: CalendarAriaLabels;

  /** Next button `aria-label` @category accessibility */
  nextLabel?: string;

  /** Previous button `aria-label` @category accessibility */
  previousLabel?: string;

  /** Determines whether the calendar should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;

  /** Called when the next decade button is clicked @category behavior */
  onNextDecade?: (date: DateStringValue) => void;

  /** Called when the previous decade button is clicked @category behavior */
  onPreviousDecade?: (date: DateStringValue) => void;

  /** Called when the next year button is clicked @category behavior */
  onNextYear?: (date: DateStringValue) => void;

  /** Called when the previous year button is clicked @category behavior */
  onPreviousYear?: (date: DateStringValue) => void;

  /** Called when the next month button is clicked @category behavior */
  onNextMonth?: (date: DateStringValue) => void;

  /** Called when the previous month button is clicked @category behavior */
  onPreviousMonth?: (date: DateStringValue) => void;
}

export interface CalendarProps
  extends
    BoxProps,
    CalendarSettings,
    CalendarBaseProps,
    StylesApiProps<CalendarFactory>,
    ElementProps<'div'> {
  /** Max level that user can go up to (decade, year, month) @default 'decade' @category behavior */
  maxLevel?: CalendarLevel;

  /** Min level that user can go down to (decade, year, month) @default 'month' @category behavior */
  minLevel?: CalendarLevel;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way @category behavior */
  static?: boolean;

  /** Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) @category behavior */
  enableKeyboardNavigation?: boolean;

  /** Controller returned by the `useCalendar` hook. When provided, the displayed date and level are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel` and `onLevelChange` props are ignored @category state */
  controller?: CalendarController;
}

export type CalendarFactory = Factory<{
  props: CalendarProps;
  ref: HTMLDivElement;
  stylesNames: CalendarStylesNames;
}>;

const defaultProps = {
  maxLevel: 'decade',
  minLevel: 'month',
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true,
  enableKeyboardNavigation: true,
} satisfies Partial<CalendarProps>;

export const Calendar = factory<CalendarFactory>((_props) => {
  const props = useProps('Calendar', defaultProps, _props);
  const {
    // CalendarLevel props
    vars,
    maxLevel,
    minLevel,
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
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    headerControlsOrder,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    __setDateRef,
    __setLevelRef,

    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    highlightToday,
    withWeekNumbers,
    __withWeekControls,
    __getWeekControlProps,

    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,

    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,

    // Other props
    classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic,
    enableKeyboardNavigation,
    controller,
    withNativeLevelSelect,
    yearsSelectRange,
    fullWidth,
    attributes,
    ref,
    ...others
  } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CalendarFactory>({
    classNames,
    styles,
    props,
  });

  const calendar = useController(useCalendar, controller, {
    date,
    defaultDate,
    onDateChange,
    level: level ? clampLevel(level, minLevel, maxLevel) : undefined,
    defaultLevel: clampLevel(defaultLevel, minLevel, maxLevel),
    onLevelChange,
  });

  const _level = clampLevel(calendar.level, minLevel, maxLevel);
  const disableNativeLevelSelect = calendar.dateReadOnly;

  useImperativeHandle(__setDateRef, () => calendar.setDate);
  useImperativeHandle(__setLevelRef, () => calendar.setLevel);

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'Calendar',
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size,
    attributes,
  };

  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;

  const fallbackDateRef = useRef<DateStringValue | null>(null);
  if (fallbackDateRef.current === null) {
    fallbackDateRef.current = getDefaultClampedDate({ minDate, maxDate });
  }
  const fallbackDate = fallbackDateRef.current;
  const currentDate = calendar.date || fallbackDate;

  useEffect(
    () =>
      calendar.registerCalendar({
        minLevel,
        maxLevel,
        columnsToScroll: _columnsToScroll,
        fallbackDate,
      }),
    [calendar.registerCalendar, minLevel, maxLevel, _columnsToScroll, fallbackDate]
  );

  const shiftDate = (
    amount: number,
    unit: CalendarShiftUnit,
    onShift: ((date: DateStringValue) => void) | undefined
  ) => {
    const nextDate = shiftCalendarDate(currentDate, amount, unit, _columnsToScroll);
    onShift?.(nextDate);
    calendar.setDate(nextDate);
  };

  const handleNextMonth = () => shiftDate(1, 'month', onNextMonth);
  const handlePreviousMonth = () => shiftDate(-1, 'month', onPreviousMonth);
  const handleNextYear = () => shiftDate(1, 'year', onNextYear);
  const handlePreviousYear = () => shiftDate(-1, 'year', onPreviousYear);
  const handleNextDecade = () => shiftDate(10, 'year', onNextDecade);
  const handlePreviousDecade = () => shiftDate(-10, 'year', onPreviousDecade);

  const calendarRef = useRef<HTMLDivElement>(null);

  const focusAfterLevelChange = useFocusAfterLevelChange({
    rootRef: calendarRef,
    level: _level,
    disabled: __preventFocus || isStatic,
  });

  const changeLevel = (nextLevel: CalendarLevel) => {
    focusAfterLevelChange();
    calendar.setLevel(nextLevel);
  };

  useEffect(() => {
    if (!enableKeyboardNavigation || isStatic) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!calendarRef.current?.contains(document.activeElement)) {
        return;
      }

      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const isShift = event.shiftKey;

      switch (event.key) {
        case 'ArrowUp':
          if (isCtrlOrCmd && isShift) {
            event.preventDefault();
            handlePreviousDecade();
          } else if (isCtrlOrCmd) {
            event.preventDefault();
            handlePreviousYear();
          }
          break;

        case 'ArrowDown':
          if (isCtrlOrCmd && isShift) {
            event.preventDefault();
            handleNextDecade();
          } else if (isCtrlOrCmd) {
            event.preventDefault();
            handleNextYear();
          }
          break;

        case 'y':
        case 'Y':
          if (_level === 'month') {
            event.preventDefault();
            changeLevel('year');
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    enableKeyboardNavigation,
    isStatic,
    _level,
    handleNextYear,
    handlePreviousYear,
    handleNextDecade,
    handlePreviousDecade,
  ]);

  return (
    <Box
      ref={useMergedRef(calendarRef, ref)}
      size={size}
      data-calendar
      data-full-width={fullWidth || undefined}
      {...others}
    >
      {_level === 'month' && (
        <MonthLevelGroup
          month={currentDate}
          minDate={minDate}
          maxDate={maxDate}
          firstDayOfWeek={firstDayOfWeek}
          weekdayFormat={weekdayFormat}
          weekendDays={weekendDays}
          getDayProps={getDayProps}
          excludeDate={excludeDate}
          renderDay={renderDay}
          hideOutsideDates={hideOutsideDates}
          hideWeekdays={hideWeekdays}
          getDayAriaLabel={getDayAriaLabel}
          onNext={handleNextMonth}
          onPrevious={handlePreviousMonth}
          hasNextLevel={maxLevel !== 'month'}
          onLevelClick={() => changeLevel('year')}
          numberOfColumns={numberOfColumns}
          locale={locale}
          levelControlAriaLabel={ariaLabels?.monthLevelControl}
          nextLabel={ariaLabels?.nextMonth ?? nextLabel}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousMonth ?? previousLabel}
          previousIcon={previousIcon}
          monthLabelFormat={monthLabelFormat}
          __onDayClick={__onDayClick}
          __onDayMouseEnter={__onDayMouseEnter}
          __onDateChange={calendar.setDate}
          __disableNativeLevelSelect={disableNativeLevelSelect}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          static={isStatic}
          withCellSpacing={withCellSpacing}
          highlightToday={highlightToday}
          withWeekNumbers={withWeekNumbers}
          __withWeekControls={__withWeekControls}
          __getWeekControlProps={__getWeekControlProps}
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          headerControlsOrder={headerControlsOrder}
          fullWidth={fullWidth}
          {...stylesApiProps}
        />
      )}

      {_level === 'year' && (
        <YearLevelGroup
          year={currentDate}
          numberOfColumns={numberOfColumns}
          minDate={minDate}
          maxDate={maxDate}
          monthsListFormat={monthsListFormat}
          getMonthControlProps={getMonthControlProps}
          locale={locale}
          onNext={handleNextYear}
          onPrevious={handlePreviousYear}
          hasNextLevel={maxLevel !== 'month' && maxLevel !== 'year'}
          onLevelClick={() => changeLevel('decade')}
          levelControlAriaLabel={ariaLabels?.yearLevelControl}
          nextLabel={ariaLabels?.nextYear ?? nextLabel}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousYear ?? previousLabel}
          previousIcon={previousIcon}
          yearLabelFormat={yearLabelFormat}
          __onControlMouseEnter={onMonthMouseEnter}
          __onControlClick={(_event, payload) => {
            __updateDateOnMonthSelect && calendar.setDate(payload);
            changeLevel(clampLevel('month', minLevel, maxLevel));
            onMonthSelect?.(payload);
          }}
          __onDateChange={calendar.setDate}
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
          getYearControlProps={getYearControlProps}
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
            __updateDateOnYearSelect && calendar.setDate(payload);
            changeLevel(clampLevel('year', minLevel, maxLevel));
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
});

Calendar.classes = {
  ...DecadeLevelGroup.classes,
  ...YearLevelGroup.classes,
  ...MonthLevelGroup.classes,
};
Calendar.displayName = '@mantine/dates/Calendar';

export namespace Calendar {
  export type Props = CalendarProps;
  export type Controller = CalendarController;
  export type ControllerOptions = CalendarControllerOptions;
  export type StylesNames = CalendarStylesNames;
  export type AriaLabels = CalendarAriaLabels;
  export type Settings = CalendarSettings;
  export type BaseProps = CalendarBaseProps;
  export type Factory = CalendarFactory;
}
