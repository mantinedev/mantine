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
import { ControlKeydownPayload, DateLabelFormat, DateStringValue, DayOfWeek } from '../../types';
import { toDateString } from '../../utils';
import { useDatesContext } from '../DatesProvider';
import { Day, DayProps, DayStylesNames, RenderDay } from '../Day';
import { WeekdaysRow } from '../WeekdaysRow';
import { getDateInTabOrder } from './get-date-in-tab-order/get-date-in-tab-order';
import { getMonthDays } from './get-month-days/get-month-days';
import { getWeekNumber } from './get-week-number/get-week-number';
import { isAfterMinDate } from './is-after-min-date/is-after-min-date';
import { isBeforeMaxDate } from './is-before-max-date/is-before-max-date';
import { isSameMonth } from './is-same-month/is-same-month';
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
  __onDayClick?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters day */
  __onDayMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when any keydown event is registered on day, used for arrows navigation */
  __onDayKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void;

  /** Assigns ref of every day based on its position in the table, used for arrows navigation */
  __getDayRef?: (rowIndex: number, cellIndex: number, node: HTMLButtonElement) => void;

  /** dayjs locale, the default value is defined by `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. 1 – Monday by default */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format for weekdays names, `'dd'` by default */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider` */
  weekendDays?: DayOfWeek[];

  /** Passes props down to `Day` components */
  getDayProps?: (
    date: DateStringValue
  ) => Omit<Partial<DayProps>, 'classNames' | 'styles' | 'vars'>;

  /** Callback function to determine whether the day should be disabled */
  excludeDate?: (date: DateStringValue) => boolean;

  /** Minimum possible date, in `YYYY-MM-DD` format */
  minDate?: DateStringValue | Date;

  /** Maximum possible date, in `YYYY-MM-DD` format */
  maxDate?: DateStringValue | Date;

  /** Controls day value rendering */
  renderDay?: RenderDay;

  /** Determines whether outside dates should be hidden, `false` by default */
  hideOutsideDates?: boolean;

  /** Determines whether weekdays row should be hidden, `false` by default */
  hideWeekdays?: boolean;

  /** Assigns `aria-label` to `Day` components based on date */
  getDayAriaLabel?: (date: DateStringValue) => string;

  /** Controls size */
  size?: MantineSize;

  /** Determines whether controls should be separated by space, `true` by default */
  withCellSpacing?: boolean;

  /** Determines whether today should be highlighted with a border, `false` by default */
  highlightToday?: boolean;

  /** Determines whether week numbers should be displayed, `false` by default */
  withWeekNumbers?: boolean;
}

export interface MonthProps
  extends BoxProps,
    MonthSettings,
    StylesApiProps<MonthFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Month to display, value `YYYY-MM-DD` */
  month: DateStringValue;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way  */
  static?: boolean;

  /** Custom first day of the month (1-31) */
  customFirstDayOfMonth?: number;

  /** Custom number of days in the month (1-31) */
  customDaysInMonth?: number;
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
    customFirstDayOfMonth,
    customDaysInMonth,
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
    customFirstDayOfMonth,
    customDaysInMonth,
  });

  const dateInTabOrder = getDateInTabOrder({
    dates,
    minDate: toDateString(minDate) as DateStringValue,
    maxDate: toDateString(maxDate) as DateStringValue,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthFactory>({
    classNames,
    styles,
    props,
  });

  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      // Check if date is outside the custom month range
      let outside = !isSameMonth(date, month);

      if (customFirstDayOfMonth || customDaysInMonth) {
        const monthStart = dayjs(month);
        const customStart = customFirstDayOfMonth
          ? monthStart.date(customFirstDayOfMonth)
          : monthStart.startOf('month');
        const customEnd = customDaysInMonth
          ? customStart.add(customDaysInMonth - 1, 'day')
          : monthStart.endOf('month');

        const currentDate = dayjs(date);
        outside = currentDate.isBefore(customStart, 'day') || currentDate.isAfter(customEnd, 'day');
      }

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
            weekend={ctx.getWeekendDays(weekendDays).includes(dayjs(date).get('day') as DayOfWeek)}
            outside={outside}
            hidden={hideOutsideDates ? outside : false}
            aria-label={ariaLabel}
            static={isStatic}
            disabled={
              excludeDate?.(date) ||
              !isBeforeMaxDate(date, toDateString(maxDate)!) ||
              !isAfterMinDate(date, toDateString(minDate)!)
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
