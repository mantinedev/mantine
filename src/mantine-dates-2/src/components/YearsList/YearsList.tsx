/* eslint-disable react/no-unused-prop-types */
import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { DefaultProps, Box, Selectors, useComponentDefaultProps } from '@mantine/core';
import { PickerControl, PickerControlStylesNames, PickerControlProps } from '../PickerControl';
import { ControlsGroupSettings } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { getYearsData } from './get-years-data/get-years-data';
import { isYearDisabled } from './is-year-disabled/is-year-disabled';
import useStyles from './YearsList.styles';

export type YearsListStylesNames = PickerControlStylesNames | Selectors<typeof useStyles>;

export interface YearsListSettings extends ControlsGroupSettings {
  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** dayjs format for years list  */
  yearsListFormat?: string;

  /** Adds props to year picker control based on date */
  getYearControlProps?(date: Date): Partial<PickerControlProps>;
}

export interface YearsListProps
  extends DefaultProps<YearsListStylesNames>,
    YearsListSettings,
    React.ComponentPropsWithoutRef<'table'> {
  __staticSelector?: string;

  /** Decade for which years list should be displayed */
  decade: Date;
}

const defaultProps: Partial<YearsListProps> = {
  yearsListFormat: 'YYYY',
};

export const YearsList = forwardRef<HTMLTableElement, YearsListProps>((props, ref) => {
  const {
    decade,
    className,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    ...others
  } = useComponentDefaultProps('YearsList', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    classNames,
    styles,
    unstyled,
    name: ['YearsList', __staticSelector],
  });

  const ctx = useDatesContext();

  const years = getYearsData(decade);

  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps?.(year);
      return (
        <td key={cellIndex} className={classes.yearsListCell}>
          <PickerControl
            classNames={classNames}
            styles={styles}
            unstyled={unstyled}
            __staticSelector={__staticSelector || 'YearsList'}
            disabled={isYearDisabled(year, minDate, maxDate)}
            ref={(node) => __getControlRef?.(rowIndex, cellIndex, node)}
            {...controlProps}
            onKeyDown={(event) => {
              controlProps?.onKeyDown?.(event);
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: year });
            }}
            onClick={(event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, year);
            }}
            onMouseEnter={(event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, year);
            }}
            onMouseDown={(event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            }}
            tabIndex={__preventFocus ? -1 : 0}
          >
            {dayjs(year).locale(ctx.getLocale(locale)).format(yearsListFormat)}
          </PickerControl>
        </td>
      );
    });

    return (
      <tr key={rowIndex} className={classes.yearsListRow}>
        {cells}
      </tr>
    );
  });

  return (
    <Box component="table" ref={ref} className={cx(classes.yearsList, className)} {...others}>
      <tbody>{rows}</tbody>
    </Box>
  );
});

YearsList.displayName = '@mantine/dates/YearsList';
