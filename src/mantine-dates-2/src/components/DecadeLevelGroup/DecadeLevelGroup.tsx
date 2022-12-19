import React, { forwardRef, useRef } from 'react';
import { DefaultProps, Box, Selectors, useComponentDefaultProps } from '@mantine/core';
import dayjs from 'dayjs';
import { DecadeLevel, DecadeLevelStylesNames, DecadeLevelSettings } from '../DecadeLevel';
import { handleControlKeyDown } from '../../utils';
import useStyles from './DecadeLevelGroup.styles';

export type DecadeLevelGroupStylesNames = Selectors<typeof useStyles> | DecadeLevelStylesNames;

export interface DecadeLevelGroupProps
  extends DefaultProps<DecadeLevelGroupStylesNames>,
    Omit<
      DecadeLevelSettings,
      'withPrevious' | 'withNext' | '__onControlKeyDown' | '__getControlRef'
    >,
    React.ComponentPropsWithoutRef<'div'> {
  __staticSelector?: string;

  /** Number of columns to render next to each other */
  numberOfColumns?: number;

  /** Decade that is currently displayed */
  decade: Date;

  /** Function that returns level control aria-label based on year date */
  levelControlAriaLabel?: ((decade: Date) => string) | string;
}

const defaultProps: Partial<DecadeLevelGroupProps> = {
  numberOfColumns: 1,
};

export const DecadeLevelGroup = forwardRef<HTMLDivElement, DecadeLevelGroupProps>((props, ref) => {
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
    decadeLabelFormat,
    ...others
  } = useComponentDefaultProps('DecadeLevelGroup', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    styles,
    classNames,
    unstyled,
    name: ['DecadeLevelGroup', __staticSelector],
  });

  const controlsRefs = useRef<HTMLButtonElement[][][]>([]);

  const decades = Array(numberOfColumns)
    .fill(0)
    .map((_, decadeIndex) => {
      const currentDecade = dayjs(decade)
        .add(decadeIndex * 10, 'years')
        .toDate();

      return (
        <DecadeLevel
          key={decadeIndex}
          yearsListFormat={yearsListFormat}
          decade={currentDecade}
          withNext={decadeIndex === numberOfColumns - 1}
          withPrevious={decadeIndex === 0}
          decadeLabelFormat={decadeLabelFormat}
          __onControlClick={__onControlClick}
          __onControlMouseEnter={__onControlMouseEnter}
          __onControlKeyDown={(event, payload) =>
            handleControlKeyDown({
              index: decadeIndex,
              event,
              payload,
              controlsRef: controlsRefs,
              numberOfColumns,
              controlsPerRow: [3, 3, 3, 1],
            })
          }
          __getControlRef={(rowIndex, cellIndex, node) => {
            if (!Array.isArray(controlsRefs.current[decadeIndex])) {
              controlsRefs.current[decadeIndex] = [];
            }

            if (!Array.isArray(controlsRefs.current[decadeIndex][rowIndex])) {
              controlsRefs.current[decadeIndex][rowIndex] = [];
            }

            controlsRefs.current[decadeIndex][rowIndex][cellIndex] = node;
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
          getYearControlProps={getYearControlProps}
          __staticSelector={__staticSelector || 'DecadeLevelGroup'}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
        />
      );
    });

  return (
    <Box className={cx(classes.decadeLevelGroup, className)} ref={ref} {...others}>
      {decades}
    </Box>
  );
});

DecadeLevelGroup.displayName = '@mantine/dates/DecadeLevelGroup';
