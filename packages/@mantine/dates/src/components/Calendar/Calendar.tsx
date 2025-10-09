import dayjs from 'dayjs';
import { useEffect, useImperativeHandle, useRef } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DateStringValue } from '../../types';
import { toDateString } from '../../utils';
import { DecadeLevelSettings } from '../DecadeLevel';
import { DecadeLevelGroup, DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { MonthLevelSettings } from '../MonthLevel';
import { MonthLevelGroup, MonthLevelGroupStylesNames } from '../MonthLevelGroup';
import { YearLevelSettings } from '../YearLevel';
import { YearLevelGroup, YearLevelGroupStylesNames } from '../YearLevelGroup';
import { clampLevel } from './clamp-level/clamp-level';

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
  extends Omit<DecadeLevelSettings, OmittedSettings>,
    Omit<YearLevelSettings, OmittedSettings>,
    Omit<MonthLevelSettings, OmittedSettings> {
  /** Initial displayed level in uncontrolled mode */
  defaultLevel?: CalendarLevel;

  /** Current displayed level displayed in controlled mode */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?: (level: CalendarLevel) => void;

  /** Called when user selects year */
  onYearSelect?: (date: DateStringValue) => void;

  /** Called when user selects month */
  onMonthSelect?: (date: DateStringValue) => void;

  /** Called when mouse enters year control */
  onYearMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters month control */
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

  /** Initial displayed date in uncontrolled mode */
  defaultDate?: DateStringValue | Date;

  /** Displayed date in controlled mode */
  date?: DateStringValue | Date;

  /** Called when date changes */
  onDateChange?: (date: DateStringValue) => void;

  /** Number of columns displayed next to each other @default `1` */
  numberOfColumns?: number;

  /** Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly */
  columnsToScroll?: number;

  /** `aria-label` attributes for controls on different levels */
  ariaLabels?: CalendarAriaLabels;

  /** Next button `aria-label` */
  nextLabel?: string;

  /** Previous button `aria-label` */
  previousLabel?: string;

  /** Called when the next decade button is clicked */
  onNextDecade?: (date: DateStringValue) => void;

  /** Called when the previous decade button is clicked */
  onPreviousDecade?: (date: DateStringValue) => void;

  /** Called when the next year button is clicked */
  onNextYear?: (date: DateStringValue) => void;

  /** Called when the previous year button is clicked */
  onPreviousYear?: (date: DateStringValue) => void;

  /** Called when the next month button is clicked */
  onNextMonth?: (date: DateStringValue) => void;

  /** Called when the previous month button is clicked */
  onPreviousMonth?: (date: DateStringValue) => void;
}

export interface CalendarProps
  extends BoxProps,
    CalendarSettings,
    CalendarBaseProps,
    StylesApiProps<CalendarFactory>,
    ElementProps<'div'> {
  /** Max level that user can go up to (decade, year, month) @default `'decade'` */
  maxLevel?: CalendarLevel;

  /** Min level that user can go down to (decade, year, month) @default `'month'` */
  minLevel?: CalendarLevel;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;

  /** Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) */
  enableKeyboardNavigation?: boolean;
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

export const Calendar = factory<CalendarFactory>((_props, ref) => {
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
    attributes,
    ...others
  } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<CalendarFactory>({
    classNames,
    styles,
    props,
  });

  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : undefined,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : undefined,
    finalValue: clampLevel(undefined, minLevel, maxLevel),
    onChange: onLevelChange,
  });

  const [_date, setDate] = useUncontrolledDates({
    type: 'default',
    value: toDateString(date),
    defaultValue: toDateString(defaultDate),
    onChange: onDateChange as any,
  });

  useImperativeHandle(__setDateRef, () => (date: DateStringValue) => {
    setDate(date);
  });

  useImperativeHandle(__setLevelRef, () => (level: CalendarLevel) => {
    setLevel(level);
  });

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'Calendar',
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size,
    attributes,
  };

  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;

  const now = new Date();
  const fallbackDate =
    minDate && dayjs(now).isAfter(minDate) ? minDate : dayjs(now).format('YYYY-MM-DD');
  const currentDate = _date || fallbackDate;

  const handleNextMonth = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, 'month').format('YYYY-MM-DD');
    onNextMonth?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousMonth = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, 'month').format('YYYY-MM-DD');
    onPreviousMonth?.(nextDate);
    setDate(nextDate);
  };

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

  // Keyboard navigation
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableKeyboardNavigation || isStatic) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard events when focus is within the calendar
      if (!calendarRef.current?.contains(document.activeElement)) {
        return;
      }

      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      const isShift = event.shiftKey;

      switch (event.key) {
        case 'ArrowUp':
          if (isCtrlOrCmd && isShift) {
            event.preventDefault();
            // Navigate by decade (10 years back)
            handlePreviousDecade();
          } else if (isCtrlOrCmd) {
            event.preventDefault();
            // Navigate by year
            handlePreviousYear();
          }
          break;

        case 'ArrowDown':
          if (isCtrlOrCmd && isShift) {
            event.preventDefault();
            // Navigate by decade (10 years forward)
            handleNextDecade();
          } else if (isCtrlOrCmd) {
            event.preventDefault();
            // Navigate by year
            handleNextYear();
          }
          break;

        case 'y':
        case 'Y':
          if (_level === 'month') {
            event.preventDefault();
            // Open year selection view
            setLevel('year');
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

  // Merge refs
  const mergedRef = (node: HTMLDivElement) => {
    calendarRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <Box ref={mergedRef} size={size} data-calendar {...others}>
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
          onLevelClick={() => setLevel('year')}
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
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          static={isStatic}
          withCellSpacing={withCellSpacing}
          highlightToday={highlightToday}
          withWeekNumbers={withWeekNumbers}
          headerControlsOrder={headerControlsOrder}
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
          onLevelClick={() => setLevel('decade')}
          levelControlAriaLabel={ariaLabels?.yearLevelControl}
          nextLabel={ariaLabels?.nextYear ?? nextLabel}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousYear ?? previousLabel}
          previousIcon={previousIcon}
          yearLabelFormat={yearLabelFormat}
          __onControlMouseEnter={onMonthMouseEnter}
          __onControlClick={(_event, payload) => {
            __updateDateOnMonthSelect && setDate(payload);
            setLevel(clampLevel('month', minLevel, maxLevel));
            onMonthSelect?.(payload);
          }}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          withCellSpacing={withCellSpacing}
          headerControlsOrder={headerControlsOrder}
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
            __updateDateOnYearSelect && setDate(payload);
            setLevel(clampLevel('year', minLevel, maxLevel));
            onYearSelect?.(payload);
          }}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          withCellSpacing={withCellSpacing}
          headerControlsOrder={headerControlsOrder}
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
