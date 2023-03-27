import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { Box, DefaultProps, useComponentDefaultProps, Selectors } from '@mantine/core';
import {
  CalendarHeader,
  CalendarHeaderStylesNames,
  CalendarHeaderSettings,
} from '../CalendarHeader';
import { useDatesContext } from '../DatesProvider';
import { YearsListSettings, YearsListStylesNames, YearsList } from '../YearsList';
import { getDecadeRange } from './get-decade-range/get-decade-range';
import useStyles from './DecadeLevel.styles';

export type DecadeLevelStylesNames =
  | Selectors<typeof useStyles>
  | YearsListStylesNames
  | CalendarHeaderStylesNames;

export interface DecadeLevelBaseSettings extends YearsListSettings {
  /** dayjs label format to display decade label or a function that returns decade label based on date value, defaults to "YYYY" */
  decadeLabelFormat?: string | ((startOfDecade: Date, endOfDecade: Date) => React.ReactNode);
}

export interface DecadeLevelSettings
  extends DecadeLevelBaseSettings,
    Omit<CalendarHeaderSettings, 'onLevelClick' | 'hasNextLevel'> {}

export interface DecadeLevelProps
  extends DefaultProps<DecadeLevelStylesNames>,
    DecadeLevelSettings,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector?: string;

  /** Decade that is currently displayed */
  decade: Date;

  /** aria-label for change level control */
  levelControlAriaLabel?: string;
}

const defaultProps: Partial<DecadeLevelProps> = {
  decadeLabelFormat: 'YYYY',
};

export const DecadeLevel = forwardRef<HTMLDivElement, DecadeLevelProps>((props, ref) => {
  const {
    // YearsList settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
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
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,

    // Other props
    className,
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    variant,
    size,
    ...others
  } = useComponentDefaultProps('DecadeLevel', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['DecadeLevel', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'DecadeLevel',
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
      ? !dayjs(endOfDecade).endOf('year').isBefore(maxDate)
      : false;

  const _previousDisabled =
    typeof previousDisabled === 'boolean'
      ? previousDisabled
      : minDate
      ? !dayjs(startOfDecade).startOf('year').isAfter(minDate)
      : false;

  const formatDecade = (date: Date, format: string) =>
    dayjs(date)
      .locale(locale || ctx.locale)
      .format(format);

  return (
    <Box className={cx(classes.decadeLevel, className)} data-decade-level ref={ref} {...others}>
      <CalendarHeader
        label={
          typeof decadeLabelFormat === 'function'
            ? decadeLabelFormat(startOfDecade, endOfDecade)
            : `${formatDecade(startOfDecade, decadeLabelFormat)} – ${formatDecade(
                endOfDecade,
                decadeLabelFormat
              )}`
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
        nextDisabled={_nextDisabled}
        previousDisabled={_previousDisabled}
        hasNextLevel={false}
        levelControlAriaLabel={levelControlAriaLabel}
        withNext={withNext}
        withPrevious={withPrevious}
        {...stylesApiProps}
      />

      <YearsList
        decade={decade}
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        yearsListFormat={yearsListFormat}
        getYearControlProps={getYearControlProps}
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

DecadeLevel.displayName = '@mantine/dates/DecadeLevel';
