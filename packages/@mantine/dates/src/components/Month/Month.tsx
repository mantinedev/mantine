import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ControlKeydownPayload, DayOfWeek } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { Day, DayProps, DayStylesNames } from '../Day';
import { WeekdaysRow } from '../WeekdaysRow';
import { getDateInTabOrder } from './get-date-in-tab-order/get-date-in-tab-order';
import { getMonthDays } from './get-month-days/get-month-days';
import { getWeekNumber } from './get-week-number/get-week-number';
import { isAfterMinDate } from './is-after-min-date/is-after-min-date';
import { isBeforeMaxDate } from './is-before-max-date/is-before-max-date';
import classes from './Month.module.css';

export type MonthStylesNames =
  | 'month'
  | 'weekday'
  | 'weekdaysRow'
  | 'monthRow'
  | 'month'
  | 'monthThead'
  | 'monthTbody'
  | 'monthCell'
  | 'weekNumber'
  | DayStylesNames;

export interface MonthSettings {
  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Prevents focus shift when buttons are clicked */
  __preventFocus?: boolean;

  /** Called when day is clicked with click event and date */
  __onDayClick?: (event: React.MouseEvent<HTMLButtonElement>, date: Date) => void;

  /** Called when mouse enters day */
  __onDayMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: Date) => void;

  /** Called when any keydown event is registered on day, used for arrows navigation */
  __onDayKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void;

  /** Assigns ref of every day based on its position in the table, used for arrows navigation */
  __getDayRef?: (rowIndex: number, cellIndex: number, node: HTMLButtonElement) => void;

  /** Dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;

  /** Number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** Dayjs format for weekdays names, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode);

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider */
  weekendDays?: DayOfWeek[];

  /** Adds props to Day component based on date */
  getDayProps?: (date: Date) => Omit<Partial<DayProps>, 'classNames' | 'styles' | 'vars'>;

  /** Callback function to determine whether the day should be disabled */
  excludeDate?: (date: Date) => boolean;

  /** Minimum possible date */
  minDate?: Date;

  /** Maximum possible date */
  maxDate?: Date;

  /** Controls day value rendering */
  renderDay?: (date: Date) => React.ReactNode;

  /** Determines whether outside dates should be hidden, defaults to false */
  hideOutsideDates?: boolean;

  /** Determines whether weekdays row should be hidden, defaults to false */
  hideWeekdays?: boolean;

  /** Assigns aria-label to days based on date */
  getDayAriaLabel?: (date: Date) => string;

  /** Controls size */
  size?: MantineSize;

  /** Determines whether controls should be separated by spacing, true by default */
  withCellSpacing?: boolean;

  /** Determines whether today should be highlighted with a border, `false` by default */
  highlightToday?: boolean;

  /** Determines whether week numbers should be displayed */
  withWeekNumbers?: boolean;
}

export interface MonthProps
  extends BoxProps,
    MonthSettings,
    StylesApiProps<MonthFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Month to display */
  month: Date;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;
}

export type MonthFactory = Factory<{
  props: MonthProps;
  ref: HTMLTableElement;
  stylesNames: MonthStylesNames;
}>;

const defaultProps: Partial<MonthProps> = {
  withCellSpacing: true,
};

const varsResolver = createVarsResolver<MonthFactory>((_, { size }) => ({
  weekNumber: {
    '--wn-fz': getFontSize(size),
    '--wn-size': getSize(size, 'wn-size'),
  },
}));

export const Month = factory<MonthFactory>((_props, ref) => {
  const props = useProps('Month', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
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
    highlightToday,
    withWeekNumbers,
    ...others
  } = props;

  const getStyles = useStyles<MonthFactory>({
    name: __staticSelector || 'Month',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'month',
  });

  const ctx = useDatesContext();
  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: ctx.consistentWeeks,
  });

  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthFactory>({
    classNames,
    styles,
    props,
  });

  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !dayjs(date).isSame(dayjs(month), 'month');
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
          {...getStyles('monthCell')}
          data-with-spacing={withCellSpacing || undefined}
        >
          <Day
            __staticSelector={__staticSelector || 'Month'}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            highlightToday={highlightToday}
            renderDay={renderDay}
            date={date}
            size={size}
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
            ref={(node) => __getDayRef?.(rowIndex, cellIndex, node!)}
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
      <tr key={rowIndex} {...getStyles('monthRow')}>
        {withWeekNumbers && <td {...getStyles('weekNumber')}>{getWeekNumber(row)}</td>}
        {cells}
      </tr>
    );
  });

  return (
    <Box component="table" {...getStyles('month')} size={size} ref={ref} {...others}>
      {!hideWeekdays && (
        <thead {...getStyles('monthThead')}>
          <WeekdaysRow
            __staticSelector={__staticSelector || 'Month'}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            weekdayFormat={weekdayFormat}
            size={size}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            withWeekNumbers={withWeekNumbers}
          />
        </thead>
      )}
      <tbody {...getStyles('monthTbody')}>{rows}</tbody>
    </Box>
  );
});

Month.classes = classes;
Month.displayName = '@mantine/dates/Month';
