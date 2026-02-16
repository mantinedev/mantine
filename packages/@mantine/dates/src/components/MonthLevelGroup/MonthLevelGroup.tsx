import dayjs from 'dayjs';
import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '@mantine/core';
import { DateStringValue } from '../../types';
import { handleControlKeyDown } from '../../utils';
import { LevelsGroup, LevelsGroupStylesNames } from '../LevelsGroup';
import { MonthLevel, MonthLevelSettings, MonthLevelStylesNames } from '../MonthLevel';

export type MonthLevelGroupStylesNames = MonthLevelStylesNames | LevelsGroupStylesNames;

export interface MonthLevelGroupProps
  extends
    BoxProps,
    Omit<MonthLevelSettings, 'withPrevious' | 'withNext' | '__onDayKeyDown' | '__getDayRef'>,
    Omit<StylesApiProps<MonthLevelGroupFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Number of columns to display next to each other */
  numberOfColumns?: number;

  /** Number of rows to display */
  numberOfRows?: number;

  /** Month to display */
  month: DateStringValue;

  /** Function that returns level control `aria-label` based on month date */
  levelControlAriaLabel?: ((month: DateStringValue) => string) | string;

  /** Passed as `isStatic` prop to `Month` component */
  static?: boolean;
}

export type MonthLevelGroupFactory = Factory<{
  props: MonthLevelGroupProps;
  ref: HTMLDivElement;
  stylesNames: MonthLevelGroupStylesNames;
}>;

const defaultProps = {
  numberOfColumns: 1,
  numberOfRows: 1,
} satisfies Partial<MonthLevelGroupProps>;

export const MonthLevelGroup = factory<MonthLevelGroupFactory>((_props) => {
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
    headerControlsOrder,

    // Other settings
    style,
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    numberOfRows,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars,
    attributes,
    ...others
  } = props;

  const daysRefs = useRef<HTMLButtonElement[][][]>([]);

  const totalMonths = numberOfColumns * numberOfRows;

  const months = Array(totalMonths)
    .fill(0)
    .map((_, monthIndex) => {
      const currentMonth = dayjs(month).add(monthIndex, 'months').format('YYYY-MM-DD');

      return (
        <MonthLevel
          key={monthIndex}
          month={currentMonth}
          withNext={monthIndex === totalMonths - 1}
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
          headerControlsOrder={headerControlsOrder}
          attributes={attributes}
        />
      );
    });

  return (
    <LevelsGroup
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numberOfColumns}, max-content)`,
        ...style,
      }}
      classNames={classNames}
      styles={styles}
      __staticSelector={__staticSelector || 'MonthLevelGroup'}
      size={size}
      attributes={attributes}
      {...others}
    >
      {months}
    </LevelsGroup>
  );
});

MonthLevelGroup.classes = { ...LevelsGroup.classes, ...MonthLevel.classes };
MonthLevelGroup.displayName = '@mantine/dates/MonthLevelGroup';
