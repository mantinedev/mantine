import dayjs from 'dayjs';
import { useRef } from 'react';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '@mantine/core';
import { DateStringValue } from '../../types';
import { handleControlKeyDown } from '../../utils';
import { DecadeLevel, DecadeLevelSettings, DecadeLevelStylesNames } from '../DecadeLevel';
import { LevelsGroup, LevelsGroupStylesNames } from '../LevelsGroup';

export type DecadeLevelGroupStylesNames = LevelsGroupStylesNames | DecadeLevelStylesNames;

export interface DecadeLevelGroupProps
  extends BoxProps,
    Omit<StylesApiProps<DecadeLevelGroupFactory>, 'classNames' | 'styles'>,
    Omit<
      DecadeLevelSettings,
      'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'
    >,
    ElementProps<'div'> {
  classNames?: Partial<Record<string, string>>;
  styles?: Partial<Record<string, React.CSSProperties>>;
  __staticSelector?: string;

  /** Number of columns to display next to each other */
  numberOfColumns?: number;

  /** Displayed decade */
  decade: DateStringValue;

  /** Function that returns level control `aria-label` based on year date */
  levelControlAriaLabel?: ((decade: DateStringValue) => string) | string;
}

export type DecadeLevelGroupFactory = Factory<{
  props: DecadeLevelGroupProps;
  ref: HTMLDivElement;
  stylesNames: DecadeLevelGroupStylesNames;
}>;

const defaultProps = {
  numberOfColumns: 1,
} satisfies Partial<DecadeLevelGroupProps>;

export const DecadeLevelGroup = factory<DecadeLevelGroupFactory>((_props, ref) => {
  const props = useProps('DecadeLevelGroup', defaultProps, _props);
  const {
    // DecadeLevel settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
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
    headerControlsOrder,

    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    size,
    vars,
    ...others
  } = props;

  const controlsRef = useRef<HTMLButtonElement[][][]>([]);

  const decades = Array(numberOfColumns)
    .fill(0)
    .map((_, decadeIndex) => {
      const currentDecade = dayjs(decade)
        .add(decadeIndex * 10, 'years')
        .format('YYYY-MM-DD');

      return (
        <DecadeLevel
          key={decadeIndex}
          size={size}
          yearsListFormat={yearsListFormat}
          decade={currentDecade}
          withNext={decadeIndex === numberOfColumns - 1}
          withPrevious={decadeIndex === 0}
          decadeLabelFormat={decadeLabelFormat}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __onControlKeyDown={(event, payload) =>
            handleControlKeyDown({
              levelIndex: decadeIndex,
              rowIndex: payload.rowIndex,
              cellIndex: payload.cellIndex,
              event,
              controlsRef,
            })
          }
          __getControlRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRef.current[decadeIndex])) {
              controlsRef.current[decadeIndex] = [];
            }

            if (!Array.isArray(controlsRef.current[decadeIndex][rowIndex])) {
              controlsRef.current[decadeIndex][rowIndex] = [];
            }

            controlsRef.current[decadeIndex][rowIndex][cellIndex] = node;
          }}
          levelControlAriaLabel={
            typeof levelControlAriaLabel === 'function'
              ? levelControlAriaLabel(currentDecade)
              : levelControlAriaLabel
          }
          locale={locale}
          minDate={minDate}
          maxDate={maxDate}
          __preventFocus={__preventFocus}
          __stopPropagation={__stopPropagation}
          nextIcon={nextIcon}
          previousIcon={previousIcon}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          nextDisabled={nextDisabled}
          previousDisabled={previousDisabled}
          getYearControlProps={getYearControlProps}
          __staticSelector={__staticSelector || 'DecadeLevelGroup'}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
          withCellSpacing={withCellSpacing}
          headerControlsOrder={headerControlsOrder}
        />
      );
    });

  return (
    <LevelsGroup
      classNames={classNames}
      styles={styles}
      __staticSelector={__staticSelector || 'DecadeLevelGroup'}
      ref={ref}
      size={size}
      unstyled={unstyled}
      {...others}
    >
      {decades}
    </LevelsGroup>
  );
});

DecadeLevelGroup.classes = { ...LevelsGroup.classes, ...DecadeLevel.classes };
DecadeLevelGroup.displayName = '@mantine/dates/DecadeLevelGroup';
