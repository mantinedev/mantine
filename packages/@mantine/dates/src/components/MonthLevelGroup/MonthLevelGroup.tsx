import dayjs from 'dayjs';
import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '@mantine/core';
import { handleControlKeyDown } from '../../utils';
import { LevelsGroup, LevelsGroupStylesNames } from '../LevelsGroup';
import { MonthLevel, MonthLevelSettings, MonthLevelStylesNames } from '../MonthLevel';

export type MonthLevelGroupStylesNames = MonthLevelStylesNames | LevelsGroupStylesNames;

export interface MonthLevelGroupProps
  extends BoxProps,
    Omit<MonthLevelSettings, 'withPrevious' | 'withNext' | '__onDayKeyDown' | '__getDayRef'>,
    Omit<StylesApiProps<MonthLevelGroupFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
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

export type MonthLevelGroupFactory = Factory<{
  props: MonthLevelGroupProps;
  ref: HTMLDivElement;
  stylesNames: MonthLevelGroupStylesNames;
}>;

const defaultProps: Partial<MonthLevelGroupProps> = {
  numberOfColumns: 1,
};

export const MonthLevelGroup = factory<MonthLevelGroupFactory>((_props, ref) => {
  const props = useProps('MonthLevelGroup', defaultProps, _props);
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
    highlightToday,
    withWeekNumbers,

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
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars,
    ...others
  } = props;

  const daysRefs = useRef<HTMLButtonElement[][][]>([]);

  const months = Array(numberOfColumns)
    .fill(0)
    .map((_, monthIndex) => {
      const currentMonth = dayjs(month).add(monthIndex, 'months').toDate();

      return (
        <MonthLevel
          key={monthIndex}
          month={currentMonth}
          withNext={monthIndex === numberOfColumns! - 1}
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
          static={isStatic}
          withCellSpacing={withCellSpacing}
          highlightToday={highlightToday}
          withWeekNumbers={withWeekNumbers}
        />
      );
    });

  return (
    <LevelsGroup
      classNames={classNames}
      styles={styles}
      __staticSelector={__staticSelector || 'MonthLevelGroup'}
      ref={ref}
      size={size}
      {...others}
    >
      {months}
    </LevelsGroup>
  );
});

MonthLevelGroup.classes = { ...LevelsGroup.classes, ...MonthLevel.classes };
MonthLevelGroup.displayName = '@mantine/dates/MonthLevelGroup';
