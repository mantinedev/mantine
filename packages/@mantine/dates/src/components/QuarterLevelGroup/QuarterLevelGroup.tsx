import dayjs from 'dayjs';
import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '@mantine/core';
import { DateStringValue } from '../../types';
import { handleControlKeyDown } from '../../utils';
import { LevelsGroup, LevelsGroupStylesNames } from '../LevelsGroup';
import { QuarterLevel, QuarterLevelSettings, QuarterLevelStylesNames } from '../QuarterLevel';

export type QuarterLevelGroupStylesNames = QuarterLevelStylesNames | LevelsGroupStylesNames;

export interface QuarterLevelGroupProps
  extends
    BoxProps,
    Omit<
      QuarterLevelSettings,
      'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'
    >,
    Omit<StylesApiProps<QuarterLevelGroupFactory>, 'classNames' | 'styles'>,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Number of columns displayed next to each other */
  numberOfColumns?: number;

  /** Displayed year */
  year: DateStringValue;

  /** Function that returns level control `aria-label` */
  levelControlAriaLabel?: ((year: DateStringValue) => string) | string;

  /** Determines whether the calendar should take the full width of its container @default false */
  fullWidth?: boolean;

  /** Called when date is changed via native level select */
  __onDateChange?: (date: DateStringValue) => void;

  /** Disables native level selects when date changes would not take effect */
  __disableNativeLevelSelect?: boolean;
}

export type QuarterLevelGroupFactory = Factory<{
  props: QuarterLevelGroupProps;
  ref: HTMLDivElement;
  stylesNames: QuarterLevelGroupStylesNames;
}>;

const defaultProps = {
  numberOfColumns: 1,
} satisfies Partial<QuarterLevelGroupProps>;

export const QuarterLevelGroup = factory<QuarterLevelGroupFactory>((_props) => {
  const props = useProps('QuarterLevelGroup', defaultProps, _props);
  const {
    year,
    locale,
    minDate,
    maxDate,
    quartersListFormat,
    getQuarterControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
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
    withNativeLevelSelect,
    yearsSelectRange,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    __onDateChange,
    __disableNativeLevelSelect,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size,
    fullWidth,
    vars,
    attributes,
    ...others
  } = props;

  const controlsRef = useRef<HTMLButtonElement[][][]>([]);

  const years = Array(numberOfColumns)
    .fill(0)
    .map((_, yearIndex) => {
      const currentYear = dayjs(year).add(yearIndex, 'years').format('YYYY-MM-DD');

      return (
        <QuarterLevel
          key={yearIndex}
          size={size}
          quartersListFormat={quartersListFormat}
          year={currentYear}
          withNext={yearIndex === numberOfColumns - 1}
          withPrevious={yearIndex === 0}
          yearLabelFormat={yearLabelFormat}
          __stopPropagation={__stopPropagation}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __onControlKeyDown={(event, payload) =>
            handleControlKeyDown({
              levelIndex: yearIndex,
              rowIndex: payload.rowIndex,
              cellIndex: payload.cellIndex,
              event,
              controlsRef,
            })
          }
          __getControlRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRef.current[yearIndex])) {
              controlsRef.current[yearIndex] = [];
            }

            if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
              controlsRef.current[yearIndex][rowIndex] = [];
            }

            controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
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
          withNativeLevelSelect={withNativeLevelSelect}
          yearsSelectRange={yearsSelectRange}
          __onDateChange={__onDateChange}
          __disableNativeLevelSelect={__disableNativeLevelSelect}
          getQuarterControlProps={getQuarterControlProps}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
          __staticSelector={__staticSelector || 'QuarterLevelGroup'}
          withCellSpacing={withCellSpacing}
          headerControlsOrder={headerControlsOrder}
          fullWidth={fullWidth}
          attributes={attributes}
        />
      );
    });

  return (
    <LevelsGroup
      classNames={classNames}
      styles={styles}
      __staticSelector={__staticSelector || 'QuarterLevelGroup'}
      size={size}
      unstyled={unstyled}
      fullWidth={fullWidth}
      attributes={attributes}
      {...others}
    >
      {years}
    </LevelsGroup>
  );
});

QuarterLevelGroup.classes = { ...QuarterLevel.classes, ...LevelsGroup.classes };
QuarterLevelGroup.displayName = '@mantine/dates/QuarterLevelGroup';
