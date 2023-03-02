import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { Box, DefaultProps, useComponentDefaultProps, Selectors } from '@mantine/core';
import {
  CalendarHeader,
  CalendarHeaderStylesNames,
  CalendarHeaderSettings,
} from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { MonthsListSettings, MonthsListStylesNames, MonthsList } from '../MonthsList';
import useStyles from './YearLevel.styles';

export type YearLevelStylesNames =
  | Selectors<typeof useStyles>
  | MonthsListStylesNames
  | CalendarHeaderStylesNames;

export interface YearLevelBaseSettings extends MonthsListSettings {
  /** dayjs label format to display year label or a function that returns year label based on year value, defaults to "YYYY" */
  yearLabelFormat?: string | ((year: Date) => React.ReactNode);
}

export interface YearLevelSettings extends YearLevelBaseSettings, CalendarHeaderSettings {}

export interface YearLevelProps
  extends DefaultProps<YearLevelStylesNames>,
    YearLevelSettings,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector?: string;

  /** Year that is currently displayed */
  year: Date;

  /** aria-label for change level control */
  levelControlAriaLabel?: string;
}

const defaultProps: Partial<YearLevelProps> = {
  yearLabelFormat: 'YYYY',
  size: 'sm',
};

export const YearLevel = forwardRef<HTMLDivElement, YearLevelProps>((props, ref) => {
  const {
    // MonthsList settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,

    // CalendarHeader settings
    __preventFocus,
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
    yearLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    variant,
    ...others
  } = useComponentDefaultProps('YearLevel', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['YearLevel', __staticSelector],
    classNames,
    styles,
    unstyled,
    size,
    variant,
  });

  const ctx = useDatesContext();

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'YearLevel',
    classNames,
    styles,
    unstyled,
    size,
    variant,
  };

  const _nextDisabled =
    typeof nextDisabled === 'boolean'
      ? nextDisabled
      : maxDate
      ? !dayjs(year).endOf('year').isBefore(maxDate)
      : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
      ? !dayjs(year).startOf('year').isAfter(minDate)
      : false;

  return (
    <Box className={cx(classes.yearLevel, className)} data-year-level ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof yearLabelFormat === 'function'
            ? yearLabelFormat(year)
            : dayjs(year)
                .locale(locale || ctx.locale)
                .format(yearLabelFormat)
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

      <MonthsList
        year={year}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        monthsListFormat={monthsListFormat}
        getMonthControlProps={getMonthControlProps}
        __getControlRef={__getControlRef}
        __onControlKeyDown={__onControlKeyDown}
        __onControlClick={__onControlClick}
        __onControlMouseEnter={__onControlMouseEnter}
        __preventFocus={__preventFocus}
        __stopPropagation={__stopPropagation}
        withCellSpacing={withCellSpacing}
        {...stylesApiProps}
      />
    </Box>
  );
});

YearLevel.displayName = '@mantine/dates/YearLevel';
