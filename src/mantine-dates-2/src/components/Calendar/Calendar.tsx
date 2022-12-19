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
  decadeLevelControl?: string;

  nextMonth?: string;
  previousMonth?: string;

  nextYear?: string;
  previousYear?: string;

  nextDecade?: string;
  previousDecade?: string;
}

export interface CalendarSettings
  extends DecadeLevelSettings,
    YearLevelSettings,
    MonthLevelSettings {
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
    Omit<React.ComponentPropsWithRef<'div'>, 'value' | 'defaultValue' | 'onChange'> {}

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

  /** Number of columns to scroll when user clicks next/prev month, defaults to numberOfColumns */
  columnsToScroll?: number;

  /** aria-label attributes for controls on different levels */
  ariaLabels?: CalendarAriaLabels;
}

export interface CalendarProps extends CalendarSettings, CalendarBaseProps, CalendarSystemProps {
  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel;

  /** Min level that user can go down to (decade, year, month), defaults to month */
  minLevel?: CalendarLevel;
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
    __onDayClick,
    __onDayMouseEnter,

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
    __preventFocus,
    ...others
  } = useComponentDefaultProps('Calendar', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    classNames,
    styles,
    unstyled,
    name: ['Calendar', __staticSelector],
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
    styles,
    classNames,
    unstyled,
    __staticSelector: __staticSelector || 'Calendar',
  };

  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || new Date();

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
          onNext={() => setDate(dayjs(currentDate).add(_columnsToScroll, 'month').toDate())}
          onPrevious={() =>
            setDate(dayjs(currentDate).subtract(_columnsToScroll, 'month').toDate())
          }
          hasNextLevel={maxLevel !== 'month'}
          onLevelClick={() => setLevel('year')}
          numberOfColumns={numberOfColumns}
          locale={locale}
          levelControlAriaLabel={ariaLabels?.monthLevelControl}
          nextLabel={ariaLabels?.nextMonth}
          previousLabel={ariaLabels?.previousMonth}
          monthLabelFormat={monthLabelFormat}
          __onDayClick={__onDayClick}
          __onDayMouseEnter={__onDayMouseEnter}
          __preventFocus={__preventFocus}
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
          onNext={() => setDate(dayjs(currentDate).add(_columnsToScroll, 'year').toDate())}
          onPrevious={() => setDate(dayjs(currentDate).subtract(_columnsToScroll, 'year').toDate())}
          hasNextLevel={maxLevel !== 'month' && maxLevel !== 'year'}
          onLevelClick={() => setLevel('decade')}
          levelControlAriaLabel={ariaLabels?.yearLevelControl}
          nextLabel={ariaLabels?.nextYear}
          previousLabel={ariaLabels?.previousYear}
          yearLabelFormat={yearLabelFormat}
          __onControlMouseEnter={onMonthMouseEnter}
          __onControlClick={(_event, payload) => {
            __updateDateOnMonthSelect && setDate(payload);
            setLevel(clampLevel('month', minLevel, maxLevel));
            onMonthSelect?.(payload);
          }}
          __preventFocus={__preventFocus}
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
          onNext={() =>
            setDate(
              dayjs(currentDate)
                .add(10 * _columnsToScroll, 'year')
                .toDate()
            )
          }
          onPrevious={() =>
            setDate(
              dayjs(currentDate)
                .subtract(10 * _columnsToScroll, 'year')
                .toDate()
            )
          }
          hasNextLevel={false}
          numberOfColumns={numberOfColumns}
          levelControlAriaLabel={ariaLabels?.decadeLevelControl}
          nextLabel={ariaLabels?.nextDecade}
          previousLabel={ariaLabels?.previousDecade}
          decadeLabelFormat={decadeLabelFormat}
          __onControlMouseEnter={onYearMouseEnter}
          __onControlClick={(_event, payload) => {
            __updateDateOnYearSelect && setDate(payload);
            setLevel(clampLevel('year', minLevel, maxLevel));
            onYearSelect?.(payload);
          }}
          __preventFocus={__preventFocus}
          {...stylesApiProps}
        />
      )}
    </Box>
  );
});

Calendar.displayName = '@mantine/dates/Calendar';
