import { useEffect, useRef } from 'react';
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
  useStyles,
} from '@mantine/core';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { useFocusAfterLevelChange } from '../../hooks';
import { CalendarLevel, DateStringValue } from '../../types';
import { getDefaultClampedDate, toDateString } from '../../utils';
import { CalendarHeader, CalendarHeaderStylesNames } from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { Month, MonthStylesNames } from '../Month';
import { useDatesDropdownContext } from '../PickerInputBase/DatesDropdown.context';
import {
  CalendarContextValue,
  CalendarControlHandler,
  CalendarProvider,
  CalendarStylesApiProps,
  useCalendarOptions,
} from './Calendar.context';
import { DecadeLevelSettings, MonthLevelSettings, YearLevelSettings } from './Calendar.types';
import {
  CalendarLevelsGroup,
  CalendarLevelsGroupStylesNames,
} from './CalendarLevelsGroup/CalendarLevelsGroup';
import { clampLevel } from './clamp-level/clamp-level';
import {
  ControlsList,
  MonthsListStylesNames,
  QuartersListStylesNames,
  YearsListStylesNames,
} from './ControlsList/ControlsList';
import {
  getPeriodBounds,
  isNextDisabled,
  isPreviousDisabled,
} from './get-period-bounds/get-period-bounds';
import {
  type CalendarShiftUnit,
  shiftCalendarDate,
} from './shift-calendar-date/shift-calendar-date';
import {
  useCalendar,
  type CalendarController,
  type CalendarControllerOptions,
} from './use-calendar/use-calendar';
import { useControlsNavigation } from './use-controls-navigation/use-controls-navigation';

export type CalendarStylesNames =
  | CalendarLevelsGroupStylesNames
  | CalendarHeaderStylesNames
  | MonthStylesNames
  | MonthsListStylesNames
  | YearsListStylesNames;

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

export type CalendarEngineFactory = Factory<{
  props: CalendarProps;
  ref: HTMLDivElement;
  stylesNames: CalendarStylesNames | QuartersListStylesNames;
}>;

const defaultProps = {
  maxLevel: 'decade',
  minLevel: 'month',
  enableKeyboardNavigation: true,
} satisfies Partial<CalendarProps>;

const classes = {
  ...CalendarLevelsGroup.classes,
  ...CalendarHeader.classes,
  ...Month.classes,
  ...ControlsList.classes,
};

export const Calendar = factory<CalendarFactory>((_props) => {
  const props = useProps('Calendar', defaultProps, _props);
  const {
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
    withCellSpacing,
    highlightToday,
    withWeekNumbers,
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
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

  const options = useCalendarOptions();
  const dropdown = useDatesDropdownContext();
  const datesCtx = useDatesContext();
  const yearBody = options.yearBody ?? 'months';

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CalendarFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<CalendarEngineFactory>({
    name: __staticSelector || 'Calendar',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
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

  const stylesApiProps: CalendarStylesApiProps = {
    __staticSelector: __staticSelector || 'Calendar',
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size,
    attributes,
  };

  const _numberOfColumns = numberOfColumns ?? 1;
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;

  const fallbackDateRef = useRef<DateStringValue | null>(null);
  if (fallbackDateRef.current === null) {
    fallbackDateRef.current = getDefaultClampedDate({ minDate, maxDate });
  }
  const fallbackDate = fallbackDateRef.current;
  const currentDate = calendar.date || fallbackDate;

  const instanceRef = useRef({});

  useIsomorphicEffect(
    () =>
      calendar.registerCalendar({
        instance: instanceRef.current,
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
    disabled: dropdown.preventFocus || isStatic,
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

  const _minDate = toDateString(minDate);
  const _maxDate = toDateString(maxDate);
  const _locale = datesCtx.getLocale(locale);

  const bounds = getPeriodBounds({ level: _level, date: currentDate, columns: _numberOfColumns });
  const previousDisabled = isPreviousDisabled(bounds, _minDate);
  const nextDisabled = isNextDisabled(bounds, _maxDate);

  const levelHandlers = {
    month: {
      onNext: handleNextMonth,
      onPrevious: handlePreviousMonth,
      onLevelClick: () => changeLevel('year'),
      hasNextLevel: maxLevel !== 'month',
      levelControlAriaLabel: ariaLabels?.monthLevelControl,
      nextLabel: ariaLabels?.nextMonth ?? nextLabel,
      previousLabel: ariaLabels?.previousMonth ?? previousLabel,
    },
    year: {
      onNext: handleNextYear,
      onPrevious: handlePreviousYear,
      onLevelClick: () => changeLevel('decade'),
      hasNextLevel: maxLevel !== 'month' && maxLevel !== 'year',
      levelControlAriaLabel: ariaLabels?.yearLevelControl,
      nextLabel: ariaLabels?.nextYear ?? nextLabel,
      previousLabel: ariaLabels?.previousYear ?? previousLabel,
    },
    decade: {
      onNext: handleNextDecade,
      onPrevious: handlePreviousDecade,
      onLevelClick: () => {},
      hasNextLevel: false,
      levelControlAriaLabel: undefined,
      nextLabel: ariaLabels?.nextDecade ?? nextLabel,
      previousLabel: ariaLabels?.previousDecade ?? previousLabel,
    },
  }[_level];

  const navigation = useControlsNavigation({
    level: _level,
    yearBody,
    date: currentDate,
    numberOfColumns: _numberOfColumns,
    firstDayOfWeek: datesCtx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: datesCtx.consistentWeeks,
    minDate: _minDate,
    maxDate: _maxDate,
    previousDisabled,
    nextDisabled,
    onPrevious: levelHandlers.onPrevious,
    onNext: levelHandlers.onNext,
  });

  const monthDescends = clampLevel('month', minLevel, maxLevel) === 'month';
  const yearDescends = clampLevel('year', minLevel, maxLevel) === 'year';

  const handleControlClick: CalendarControlHandler = (event, payload) => {
    if (_level === 'decade') {
      yearDescends && calendar.setDate(payload);
      changeLevel(clampLevel('year', minLevel, maxLevel));
      onYearSelect?.(payload);
      return;
    }

    if (yearBody === 'quarters') {
      options.selection?.onQuarterClick?.(event, payload);
      return;
    }

    monthDescends && calendar.setDate(payload);
    changeLevel(clampLevel('month', minLevel, maxLevel));
    onMonthSelect?.(payload);
  };

  const handleControlMouseEnter: CalendarControlHandler = (event, payload) => {
    if (_level === 'decade') {
      onYearMouseEnter?.(event, payload);
      return;
    }

    if (yearBody === 'quarters') {
      options.selection?.onQuarterMouseEnter?.(event, payload);
      return;
    }

    onMonthMouseEnter?.(event, payload);
  };

  const contextValue: CalendarContextValue = {
    controller: calendar,
    level: _level,
    locale: _locale,
    minDate: _minDate,
    maxDate: _maxDate,
    static: !!isStatic,
    getStyles,
    stylesApiProps,
    navigation,
    weekControls: {
      enabled: !!options.weekControls,
      getWeekControlProps: options.weekControls?.getWeekControlProps,
    },
    onDayClick: options.selection?.onDayClick,
    onDayMouseEnter: options.selection?.onDayMouseEnter,
    onControlClick: handleControlClick,
    onControlMouseEnter: handleControlMouseEnter,
  };

  return (
    <CalendarProvider value={contextValue}>
      <Box
        ref={useMergedRef(calendarRef, ref)}
        size={size}
        data-calendar
        data-quarter-picker={yearBody === 'quarters' || undefined}
        data-full-width={fullWidth || undefined}
        {...others}
      >
        <CalendarLevelsGroup
          key={_level}
          date={currentDate}
          numberOfColumns={_numberOfColumns}
          level={_level}
          yearBody={yearBody}
          nextDisabled={nextDisabled}
          previousDisabled={previousDisabled}
          onNext={levelHandlers.onNext}
          onPrevious={levelHandlers.onPrevious}
          onLevelClick={levelHandlers.onLevelClick}
          hasNextLevel={levelHandlers.hasNextLevel}
          levelControlAriaLabel={levelHandlers.levelControlAriaLabel}
          nextLabel={levelHandlers.nextLabel}
          previousLabel={levelHandlers.previousLabel}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          headerControlsOrder={headerControlsOrder}
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          fullWidth={fullWidth}
          withCellSpacing={withCellSpacing ?? true}
          static={!!isStatic}
          monthLabelFormat={monthLabelFormat ?? 'MMMM YYYY'}
          yearLabelFormat={yearLabelFormat ?? 'YYYY'}
          decadeLabelFormat={decadeLabelFormat ?? 'YYYY'}
          monthsListFormat={monthsListFormat ?? 'MMM'}
          quartersListFormat={options.quartersListFormat ?? '[Q]Q'}
          yearsListFormat={yearsListFormat ?? 'YYYY'}
          getMonthControlProps={getMonthControlProps}
          getQuarterControlProps={options.getQuarterControlProps}
          getYearControlProps={getYearControlProps}
          monthSettings={{
            firstDayOfWeek,
            weekdayFormat,
            weekendDays,
            getDayProps,
            excludeDate,
            renderDay,
            hideOutsideDates,
            hideWeekdays,
            getDayAriaLabel,
            highlightToday,
            withWeekNumbers,
          }}
        />
      </Box>
    </CalendarProvider>
  );
});

Calendar.classes = classes;
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
