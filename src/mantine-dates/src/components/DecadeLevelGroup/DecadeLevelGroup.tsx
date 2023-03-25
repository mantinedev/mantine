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
  variant?: string;
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

    // Other settings
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    variant,
    size,
    ...others
  } = useComponentDefaultProps('DecadeLevelGroup', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['DecadeLevelGroup', __staticSelector],
    styles,
    classNames,
    unstyled,
    variant,
    size,
  });

  const controlsRef = useRef<HTMLButtonElement[][][]>([]);

  const decades = Array(numberOfColumns)
    .fill(0)
    .map((_, decadeIndex) => {
      const currentDecade = dayjs(decade)
        .add(decadeIndex * 10, 'years')
        .toDate();

      return (
        <DecadeLevel
          key={decadeIndex}
          variant={variant}
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
