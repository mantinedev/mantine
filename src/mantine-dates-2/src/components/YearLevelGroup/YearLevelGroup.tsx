import React, { forwardRef, useRef } from 'react';
import { DefaultProps, Box, Selectors, useComponentDefaultProps } from '@mantine/core';
import dayjs from 'dayjs';
import { YearLevel, YearLevelStylesNames, YearLevelSettings } from '../YearLevel';
import { handleControlKeyDown } from '../../utils';
import useStyles from './YearLevelGroup.styles';

export type YearLevelGroupStylesNames = Selectors<typeof useStyles> | YearLevelStylesNames;

export interface YearLevelGroupProps
  extends DefaultProps<YearLevelGroupStylesNames>,
    Omit<YearLevelSettings, 'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'>,
    React.ComponentPropsWithoutRef<'div'> {
  __staticSelector?: string;

  /** Number of columns to render next to each other */
  numberOfColumns?: number;

  /** Year that is currently displayed */
  year: Date;

  /** Function that returns level control aria-label based on year date */
  levelControlAriaLabel?: ((year: Date) => string) | string;
}

const defaultProps: Partial<YearLevelGroupProps> = {
  numberOfColumns: 1,
};

export const YearLevelGroup = forwardRef<HTMLDivElement, YearLevelGroupProps>((props, ref) => {
  const {
    // YearLevel settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __onControlClick,
    __onControlMouseEnter,

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

    // Other settings
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    ...others
  } = useComponentDefaultProps('YearLevelGroup', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    styles,
    classNames,
    unstyled,
    name: ['YearLevelGroup', __staticSelector],
  });

  const controlsRefs = useRef<HTMLButtonElement[][][]>([]);

  const years = Array(numberOfColumns)
    .fill(0)
    .map((_, yearIndex) => {
      const currentYear = dayjs(year).add(yearIndex, 'years').toDate();

      return (
        <YearLevel
          key={yearIndex}
          monthsListFormat={monthsListFormat}
          year={currentYear}
          withNext={yearIndex === numberOfColumns - 1}
          withPrevious={yearIndex === 0}
          yearLabelFormat={yearLabelFormat}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __onControlKeyDown={(event, payload) =>
            handleControlKeyDown({
              index: yearIndex,
              event,
              payload,
              controlsRef: controlsRefs,
              numberOfColumns,
              controlsPerRow: 3,
            })
          }
          __getControlRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRefs.current[yearIndex])) {
              controlsRefs.current[yearIndex] = [];
            }

            if (!Array.isArray(controlsRefs.current[yearIndex][rowIndex])) {
              controlsRefs.current[yearIndex][rowIndex] = [];
            }

            controlsRefs.current[yearIndex][rowIndex][cellIndex] = node;
          }}
          levelControlAriaLabel={
            typeof levelControlAriaLabel === 'function'
              ? levelControlAriaLabel(currentYear)
              : levelControlAriaLabel
          }
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          __preventFocus={__preventFocus}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          onLevelClick={onLevelClick}
          nextDisabled={nextDisabled}
          previousDisabled={previousDisabled}
          hasNextLevel={hasNextLevel}
          getMonthControlProps={getMonthControlProps}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
          __staticSelector={__staticSelector || 'YearLevelGroup'}
        />
      );
    });

  return (
    <Box className={cx(classes.yearLevelGroup, className)} ref={ref} {...others}>
      {years}
    </Box>
  );
});

YearLevelGroup.displayName = '@mantine/dates/YearLevelGroup';
