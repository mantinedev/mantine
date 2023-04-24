/* eslint-disable react/no-unused-prop-types */
import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { Box, DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { MonthLevelGroup, MonthLevelGroupStylesNames } from '../MonthLevelGroup';
import { YearLevelGroup, YearLevelGroupStylesNames } from '../YearLevelGroup';
import { DecadeLevelGroup, DecadeLevelGroupStylesNames } from '../DecadeLevelGroup';
import { CalendarLevel } from '../../types';
import { clampLevel } from './clamp-level/clamp-level';
import useStyles from './Calendar.styles';
import { MonthLevelSettings } from '../MonthLevel';
import { YearLevelSettings } from '../YearLevel';
import { DecadeLevelSettings } from '../DecadeLevel';

export type CalendarStylesNames =
  | Selectors<typeof useStyles>
  | DecadeLevelGroupStylesNames
  | YearLevelGroupStylesNames
  | MonthLevelGroupStylesNames;

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

export interface CalendarSettings
  extends Omit<DecadeLevelSettings, 'onNext' | 'onPrevious'>,
    Omit<YearLevelSettings, 'onNext' | 'onPrevious'>,
    Omit<MonthLevelSettings, 'onNext' | 'onPrevious'> {
  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: CalendarLevel;

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?(level: CalendarLevel): void;

  /** Called when user clicks year on decade level */
  onYearSelect?(date: Date): void;

  /** Called when user clicks month on year level */
  onMonthSelect?(date: Date): void;

  /** Called when mouse enters year control */
  onYearMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;

  /** Called when mouse enters month control */
  onMonthMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;
}

export interface CalendarSystemProps
  extends DefaultProps<CalendarStylesNames>,
    Omit<React.ComponentPropsWithRef<'div'>, 'value' | 'defaultValue' | 'onChange'> {
  variant?: string;
}

export interface CalendarBaseProps {
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Determines whether date should be updated when year control is clicked */
  __updateDateOnYearSelect?: boolean;

  /** Determines whether date should be updated when month control is clicked */
  __updateDateOnMonthSelect?: boolean;

  /** Initial date that is displayed, used for uncontrolled component */
  defaultDate?: Date;

  /** Date that is displayed, used for controlled component */
  date?: Date;

  /** Called when date changes */
  onDateChange?(date: Date): void;

  /** Number of columns to render next to each other */
  numberOfColumns?: number;

  /** Number of columns to scroll when user clicks next/prev buttons, defaults to numberOfColumns */
  columnsToScroll?: number;

  /** aria-label attributes for controls on different levels */
  ariaLabels?: CalendarAriaLabels;

  /** Called when next decade button is clicked */
  onNextDecade?(date: Date): void;

  /** Called when previous decade button is clicked */
  onPreviousDecade?(date: Date): void;

  /** Called when next year button is clicked */
  onNextYear?(date: Date): void;

  /** Called when previous year button is clicked */
  onPreviousYear?(date: Date): void;

  /** Called when next month button is clicked */
  onNextMonth?(date: Date): void;

  /** Called when previous month button is clicked */
  onPreviousMonth?(date: Date): void;
}

export interface CalendarProps extends CalendarSettings, CalendarBaseProps, CalendarSystemProps {
  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel;

  /** Min level that user can go down to (decade, year, month), defaults to month */
  minLevel?: CalendarLevel;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

const defaultProps: Partial<CalendarProps> = {
  maxLevel: 'decade',
  minLevel: 'month',
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true,
};

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const {
    // CalendarLevel props
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
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,

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

    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,

    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,

    // Other props
    minDate,
    maxDate,
    locale,
    className,
    classNames,
    styles,
    __staticSelector,
    unstyled,
    variant,
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
    ...others
  } = useComponentDefaultProps('Calendar', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['Calendar', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : undefined,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : undefined,
    finalValue: clampLevel(undefined, minLevel, maxLevel),
    onChange: onLevelChange,
  });

  const [_date, setDate] = useUncontrolled({
    value: date,
    defaultValue: defaultDate,
    finalValue: null,
    onChange: onDateChange,
  });

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'Calendar',
    styles,
    classNames,
    unstyled,
    variant,
    size,
  };

  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || new Date();

  const handleNextMonth = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, 'month').toDate();
    onNextMonth?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousMonth = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, 'month').toDate();
    onPreviousMonth?.(nextDate);
    setDate(nextDate);
  };

  const handleNextYear = () => {
    const nextDate = dayjs(currentDate).add(_columnsToScroll, 'year').toDate();
    onNextYear?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousYear = () => {
    const nextDate = dayjs(currentDate).subtract(_columnsToScroll, 'year').toDate();
    onPreviousYear?.(nextDate);
    setDate(nextDate);
  };

  const handleNextDecade = () => {
    const nextDate = dayjs(currentDate)
      .add(10 * _columnsToScroll, 'year')
      .toDate();
    onNextDecade?.(nextDate);
    setDate(nextDate);
  };

  const handlePreviousDecade = () => {
    const nextDate = dayjs(currentDate)
      .subtract(10 * _columnsToScroll, 'year')
      .toDate();
    onPreviousDecade?.(nextDate);
    setDate(nextDate);
  };

  return (
    <Box className={cx(classes.calendar, className)} ref={ref} {...others}>
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
          nextLabel={ariaLabels?.nextMonth}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousMonth}
          previousIcon={previousIcon}
          monthLabelFormat={monthLabelFormat}
          __onDayClick={__onDayClick}
          __onDayMouseEnter={__onDayMouseEnter}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          static={isStatic}
          withCellSpacing={withCellSpacing}
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
          nextLabel={ariaLabels?.nextYear}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousYear}
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
          nextLabel={ariaLabels?.nextDecade}
          nextIcon={nextIcon}
          previousLabel={ariaLabels?.previousDecade}
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
          {...stylesApiProps}
        />
      )}
    </Box>
  );
});

Calendar.displayName = '@mantine/dates/Calendar';
