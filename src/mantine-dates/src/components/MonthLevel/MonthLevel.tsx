import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { Box, DefaultProps, useComponentDefaultProps, Selectors } from '@mantine/core';
import {
  CalendarHeader,
  CalendarHeaderStylesNames,
  CalendarHeaderSettings,
} from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { Month, MonthSettings, MonthStylesNames } from '../Month';
import useStyles from './MonthLevel.styles';

export type MonthLevelStylesNames =
  | Selectors<typeof useStyles>
  | MonthStylesNames
  | CalendarHeaderStylesNames;

export interface MonthLevelBaseSettings extends MonthSettings {
  /** dayjs label format to display month label or a function that returns month label based on month value, defaults to "MMMM YYYY" */
  monthLabelFormat?: string | ((month: Date) => React.ReactNode);
}

export interface MonthLevelSettings extends MonthLevelBaseSettings, CalendarHeaderSettings {}

export interface MonthLevelProps
  extends DefaultProps<MonthLevelStylesNames>,
    MonthLevelSettings,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector?: string;

  /** Month that is currently displayed */
  month: Date;

  /** aria-label for change level control */
  levelControlAriaLabel?: string;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

const defaultProps: Partial<MonthLevelProps> = {
  monthLabelFormat: 'MMMM YYYY',
};

export const MonthLevel = forwardRef<HTMLDivElement, MonthLevelProps>((props, ref) => {
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,

    // CalendarHeader settings
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,

    // Other props
    className,
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    variant,
    static: isStatic,
    ...others
  } = useComponentDefaultProps('MonthLevel', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['MonthLevel', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const ctx = useDatesContext();

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'MonthLevel',
    classNames,
    styles,
    unstyled,
    variant,
    size,
  };

  const _nextDisabled =
    typeof nextDisabled === 'boolean'
      ? nextDisabled
      : maxDate
      ? !dayjs(month).endOf('month').isBefore(maxDate)
      : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
      ? !dayjs(month).startOf('month').isAfter(minDate)
      : false;

  return (
    <Box className={cx(classes.monthLevel, className)} data-month-level ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof monthLabelFormat === 'function'
            ? monthLabelFormat(month)
            : dayjs(month)
                .locale(locale || ctx.locale)
                .format(monthLabelFormat)
        }
        className={classes.calendarHeader}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        nextIcon={nextIcon}
        previousIcon={previousIcon}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        onNext={onNext}
        onPrevious={onPrevious}
        onLevelClick={onLevelClick}
        nextDisabled={_nextDisabled}
        previousDisabled={_previousDisabled}
        hasNextLevel={hasNextLevel}
        levelControlAriaLabel={levelControlAriaLabel}
        withNext={withNext}
        withPrevious={withPrevious}
        {...stylesApiProps}
      />

      <Month
        month={month}
        locale={locale}
        firstDayOfWeek={firstDayOfWeek}
        weekdayFormat={weekdayFormat}
        weekendDays={weekendDays}
        getDayProps={getDayProps}
        excludeDate={excludeDate}
        minDate={minDate}
        maxDate={maxDate}
        renderDay={renderDay}
        hideOutsideDates={hideOutsideDates}
        hideWeekdays={hideWeekdays}
        getDayAriaLabel={getDayAriaLabel}
        __getDayRef={__getDayRef}
        __onDayKeyDown={__onDayKeyDown}
        __onDayClick={__onDayClick}
        __onDayMouseEnter={__onDayMouseEnter}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        static={isStatic}
        withCellSpacing={withCellSpacing}
        {...stylesApiProps}
      />
    </Box>
  );
});

MonthLevel.displayName = '@mantine/dates/MonthLevel';
