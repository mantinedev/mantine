import React, { forwardRef, useRef } from 'react';
import { DefaultProps, Box, Selectors, useComponentDefaultProps } from '@mantine/core';
import dayjs from 'dayjs';
import { MonthLevel, MonthLevelStylesNames, MonthLevelSettings } from '../MonthLevel';
import { handleControlKeyDown } from '../../utils';
import useStyles from './MonthLevelGroup.styles';

export type MonthLevelGroupStylesNames = Selectors<typeof useStyles> | MonthLevelStylesNames;

export interface MonthLevelGroupProps
  extends DefaultProps<MonthLevelGroupStylesNames>,
    Omit<MonthLevelSettings, 'withPrevious' | 'withNext' | '__onDayKeyDown' | '__getDayRef'>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector?: string;

  /** Number of columns to render next to each other */
  numberOfColumns?: number;

  /** Month that is currently displayed */
  month: Date;

  /** Function that returns level control aria-label based on month date */
  levelControlAriaLabel?: ((month: Date) => string) | string;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

const defaultProps: Partial<MonthLevelGroupProps> = {
  numberOfColumns: 1,
};

export const MonthLevelGroup = forwardRef<HTMLDivElement, MonthLevelGroupProps>((props, ref) => {
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
    __onDayClick,
    __onDayMouseEnter,
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

    // Other settings
    className,
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    variant,
    static: isStatic,
    ...others
  } = useComponentDefaultProps('MonthLevelGroup', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['MonthLevelGroup', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const daysRefs = useRef<HTMLButtonElement[][][]>([]);

  const months = Array(numberOfColumns)
    .fill(0)
    .map((_, monthIndex) => {
      const currentMonth = dayjs(month).add(monthIndex, 'months').toDate();

      return (
        <MonthLevel
          key={monthIndex}
          month={currentMonth}
          withNext={monthIndex === numberOfColumns - 1}
          withPrevious={monthIndex === 0}
          monthLabelFormat={monthLabelFormat}
          __stopPropagation={__stopPropagation}
          __onDayClick={__onDayClick}
          __onDayMouseEnter={__onDayMouseEnter}
          __onDayKeyDown={(event, payload) =>
            handleControlKeyDown({
              levelIndex: monthIndex,
              rowIndex: payload.rowIndex,
              cellIndex: payload.cellIndex,
              event,
              controlsRef: daysRefs,
            })
          }
          __getDayRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(daysRefs.current[monthIndex])) {
              daysRefs.current[monthIndex] = [];
            }

            if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
              daysRefs.current[monthIndex][rowIndex] = [];
            }

            daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
          }}
          levelControlAriaLabel={
            typeof levelControlAriaLabel === 'function'
              ? levelControlAriaLabel(currentMonth)
              : levelControlAriaLabel
          }
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
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
          __staticSelector={__staticSelector || 'MonthLevelGroup'}
          size={size}
          variant={variant}
          static={isStatic}
          withCellSpacing={withCellSpacing}
        />
      );
    });

  return (
    <Box className={cx(classes.monthLevelGroup, className)} ref={ref} {...others}>
      {months}
    </Box>
  );
});

MonthLevelGroup.displayName = '@mantine/dates/MonthLevelGroup';
