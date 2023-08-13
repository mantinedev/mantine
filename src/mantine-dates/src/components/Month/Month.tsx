/* eslint-disable react/no-unused-prop-types */
import dayjs from 'dayjs';
import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, Box, useComponentDefaultProps, MantineSize } from '@mantine/core';
import { useDatesContext } from '../DatesProvider';
import { WeekdaysRow, WeekdaysRowStylesNames } from '../WeekdaysRow';
import { Day, DayStylesNames, DayProps } from '../Day';
import { ControlKeydownPayload, DayOfWeek } from '../../types';
import { getMonthDays } from './get-month-days/get-month-days';
import { isSameMonth } from './is-same-month/is-same-month';
import { isBeforeMaxDate } from './is-before-max-date/is-before-max-date';
import { isAfterMinDate } from './is-after-min-date/is-after-min-date';
import useStyles from './Month.styles';
import { getDateInTabOrder } from './get-date-in-tab-order/get-date-in-tab-order';

export type MonthStylesNames =
  | Selectors<typeof useStyles>
  | WeekdaysRowStylesNames
  | DayStylesNames;

export interface MonthSettings {
  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Called when day is clicked with click event and date */
  __onDayClick?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;

  /** Called when mouse enters day */
  __onDayMouseEnter?(event: React.MouseEvent<HTMLButtonElement>, date: Date): void;

  /** Called when any keydown event is registered on day, used for arrows navigation */
  __onDayKeyDown?(
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ): void;

  /** Assigns ref of every day based on its position in the table, used for arrows navigation */
  __getDayRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format for weekdays names, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode);

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
  weekendDays?: DayOfWeek[];

  /** Adds props to Day component based on date */
  getDayProps?(date: Date): Partial<DayProps>;

  /** Callback function to determine whether the day should be disabled */
  excludeDate?(date: Date): boolean;

  /** Minimum possible date */
  minDate?: Date;

  /** Maximum possible date */
  maxDate?: Date;

  /** Controls day value rendering */
  renderDay?(date: Date): React.ReactNode;

  /** Determines whether outside dates should be hidden, defaults to false */
  hideOutsideDates?: boolean;

  /** Determines whether weekdays row should be hidden, defaults to false */
  hideWeekdays?: boolean;

  /** Assigns aria-label to days based on date */
  getDayAriaLabel?(date: Date): string;

  /** Controls size */
  size?: MantineSize;

  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean;
}

export interface MonthProps
  extends DefaultProps<MonthStylesNames>,
    MonthSettings,
    React.ComponentPropsWithoutRef<'table'> {
  variant?: string;
  __staticSelector?: string;

  /** Month to display */
  month: Date;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

const defaultProps: Partial<MonthProps> = {
  size: 'sm',
  withCellSpacing: true,
};

export const Month = forwardRef<HTMLTableElement, MonthProps>((props, ref) => {
  const {
    className,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    variant,
    ...others
  } = useComponentDefaultProps('Month', defaultProps, props);

  const ctx = useDatesContext();

  const { classes, cx } = useStyles(null, {
    name: ['Month', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const stylesApiProps = {
    __staticSelector: __staticSelector || 'Month',
    classNames,
    styles,
    unstyled,
    variant,
    size,
  };

  const dates = getMonthDays(month, ctx.getFirstDayOfWeek(firstDayOfWeek));

  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );

  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel =
        getDayAriaLabel?.(date) ||
        dayjs(date)
          .locale(locale || ctx.locale)
          .format('D MMMM YYYY');
      const dayProps = getDayProps?.(date);
      const isDateInTabOrder = dayjs(date).isSame(dateInTabOrder, 'date');

      return (
        <td
          key={date.toString()}
          className={classes.monthCell}
          data-with-spacing={withCellSpacing || undefined}
        >
          <Day
            {...stylesApiProps}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            renderDay={renderDay}
            date={date}
            weekend={ctx.getWeekendDays(weekendDays).includes(date.getDay() as DayOfWeek)}
            outside={outside}
            hidden={hideOutsideDates ? outside : false}
            aria-label={ariaLabel}
            static={isStatic}
            disabled={
              excludeDate?.(date) ||
              !isBeforeMaxDate(date, maxDate) ||
              !isAfterMinDate(date, minDate)
            }
            ref={(node) => __getDayRef?.(rowIndex, cellIndex, node)}
            {...dayProps}
            onKeyDown={(event) => {
              dayProps?.onKeyDown?.(event);
              __onDayKeyDown?.(event, { rowIndex, cellIndex, date });
            }}
            onMouseEnter={(event) => {
              dayProps?.onMouseEnter?.(event);
              __onDayMouseEnter?.(event, date);
            }}
            onClick={(event) => {
              dayProps?.onClick?.(event);
              __onDayClick?.(event, date);
            }}
            onMouseDown={(event) => {
              dayProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            }}
            tabIndex={__preventFocus || !isDateInTabOrder ? -1 : 0}
          />
        </td>
      );
    });

    return (
      <tr key={rowIndex} className={classes.monthRow}>
        {cells}
      </tr>
    );
  });

  return (
    <Box component="table" className={cx(classes.month, className)} ref={ref} {...others}>
      {!hideWeekdays && (
        <thead className={classes.monthThead}>
          <WeekdaysRow
            {...stylesApiProps}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            weekdayFormat={weekdayFormat}
          />
        </thead>
      )}
      <tbody className={classes.monthTbody}>{rows}</tbody>
    </Box>
  );
});

Month.displayName = '@mantine/dates/Month';
