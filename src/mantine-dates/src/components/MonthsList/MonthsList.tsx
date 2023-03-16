/* eslint-disable react/no-unused-prop-types */
import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { DefaultProps, Box, Selectors, useComponentDefaultProps, MantineSize } from '@mantine/core';
import { PickerControl, PickerControlStylesNames, PickerControlProps } from '../PickerControl';
import { ControlsGroupSettings } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { getMonthsData } from './get-months-data/get-months-data';
import { isMonthDisabled } from './is-month-disabled/is-month-disabled';
import useStyles from './MonthsList.styles';
import { getMonthInTabOrder } from './get-month-in-tab-order/get-month-in-tab-order';

export type MonthsListStylesNames = PickerControlStylesNames | Selectors<typeof useStyles>;

export interface MonthsListSettings extends ControlsGroupSettings {
  /** dayjs format for months list  */
  monthsListFormat?: string;

  /** Adds props to month picker control based on date */
  getMonthControlProps?(date: Date): Partial<PickerControlProps>;

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean;
}

export interface MonthsListProps
  extends DefaultProps<MonthsListStylesNames>,
    MonthsListSettings,
    React.ComponentPropsWithoutRef<'table'> {
  variant?: string;
  __staticSelector?: string;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Year for which months list should be displayed */
  year: Date;

  /** Component size */
  size?: MantineSize;
}

const defaultProps: Partial<MonthsListProps> = {
  monthsListFormat: 'MMM',
  size: 'sm',
  withCellSpacing: true,
};

export const MonthsList = forwardRef<HTMLTableElement, MonthsListProps>((props, ref) => {
  const {
    year,
    className,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    size,
    variant,
    __stopPropagation,
    withCellSpacing,
    ...others
  } = useComponentDefaultProps('MonthsList', defaultProps, props);
  const { classes, cx } = useStyles(null, {
    name: ['MonthsList', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const ctx = useDatesContext();

  const months = getMonthsData(year);

  const monthInTabOrder = getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps);

  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps?.(month);
      const isMonthInTabOrder = dayjs(month).isSame(monthInTabOrder, 'month');
      return (
        <td
          key={cellIndex}
          className={classes.monthsListCell}
          data-with-spacing={withCellSpacing || undefined}
        >
          <PickerControl
            variant={variant}
            size={size}
            classNames={classNames}
            styles={styles}
            unstyled={unstyled}
            __staticSelector={__staticSelector || 'MonthsList'}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            disabled={isMonthDisabled(month, minDate, maxDate)}
            ref={(node) => __getControlRef?.(rowIndex, cellIndex, node)}
            {...controlProps}
            onKeyDown={(event) => {
              controlProps?.onKeyDown?.(event);
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: month });
            }}
            onClick={(event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, month);
            }}
            onMouseEnter={(event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, month);
            }}
            onMouseDown={(event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            }}
            tabIndex={__preventFocus || !isMonthInTabOrder ? -1 : 0}
          >
            {dayjs(month).locale(ctx.getLocale(locale)).format(monthsListFormat)}
          </PickerControl>
        </td>
      );
    });

    return (
      <tr key={rowIndex} className={classes.monthsListRow}>
        {cells}
      </tr>
    );
  });

  return (
    <Box component="table" ref={ref} className={cx(classes.monthsList, className)} {...others}>
      <tbody>{rows}</tbody>
    </Box>
  );
});

MonthsList.displayName = '@mantine/dates/MonthsList';
