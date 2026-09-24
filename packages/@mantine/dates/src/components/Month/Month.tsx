import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DateStringValue, DayOfWeek } from '../../types';
import { toDateString } from '../../utils';
import { useCalendarColumn, useOptionalCalendarContext } from '../Calendar/Calendar.context';
import { useDatesContext } from '../DatesProvider';
import { Day, DayProps, DayStylesNames, RenderDay } from '../Day';
import { useDatesDropdownContext } from '../PickerInputBase/DatesDropdown.context';
import { WeekdaysRow } from '../WeekdaysRow';
import { getDateInTabOrder } from './get-date-in-tab-order/get-date-in-tab-order';
import { getMonthDays } from './get-month-days/get-month-days';
import { getWeekInTabOrder } from './get-week-in-tab-order/get-week-in-tab-order';
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
  | 'weekControl'
  | DayStylesNames;

export type MonthCssVariables = {
  weekNumber: '--wn-fz' | '--wn-size';
};

export interface MonthWeekControlProps extends ElementProps<'button'>, DataAttributes {
  /** Determines whether the week is selected */
  selected?: boolean;
}

export interface MonthSettings {
  /** `dayjs` locale, the default value is defined by `DatesProvider` @category appearance */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default 1 – Monday @category appearance */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names @default 'dd' @category appearance */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. @category appearance */
  weekendDays?: DayOfWeek[];

  /** Passes props down to `Day` components */
  getDayProps?: (
    date: DateStringValue
  ) => Omit<Partial<DayProps>, 'classNames' | 'styles' | 'vars'> & DataAttributes;

  /** Callback function to determine whether the day should be disabled @category behavior */
  excludeDate?: (date: DateStringValue) => boolean;

  /** Minimum possible date, in `YYYY-MM-DD` format @category behavior */
  minDate?: DateStringValue | Date;

  /** Maximum possible date, in `YYYY-MM-DD` format @category behavior */
  maxDate?: DateStringValue | Date;

  /** Controls day value rendering @category appearance */
  renderDay?: RenderDay;

  /** Determines whether outside dates should be hidden @default false @category appearance */
  hideOutsideDates?: boolean;

  /** Determines whether weekdays row should be hidden @default false @category appearance */
  hideWeekdays?: boolean;

  /** Assigns `aria-label` to `Day` components based on date @category accessibility */
  getDayAriaLabel?: (date: DateStringValue) => string;

  /** Controls size @category appearance */
  size?: MantineSize;

  /** Determines whether controls should be separated by space @default true @category appearance */
  withCellSpacing?: boolean;

  /** Determines whether today should be highlighted with a border @default false @category appearance */
  highlightToday?: boolean;

  /** Determines whether week numbers should be displayed @default false @category appearance */
  withWeekNumbers?: boolean;

  /** Determines whether the month should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;
}

export interface MonthProps
  extends BoxProps, MonthSettings, StylesApiProps<MonthFactory>, ElementProps<'table'> {
  __staticSelector?: string;

  /** Month to display, value `YYYY-MM-DD` @category state */
  month: DateStringValue;

  /** Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way @category behavior */
  static?: boolean;
}

export type MonthFactory = Factory<{
  props: MonthProps;
  ref: HTMLTableElement;
  stylesNames: MonthStylesNames;
  vars: MonthCssVariables;
}>;

const defaultProps = {
  withCellSpacing: true,
} satisfies Partial<MonthProps>;

const varsResolver = createVarsResolver<MonthFactory>((_, { size }) => ({
  weekNumber: {
    '--wn-fz': getFontSize(size),
    '--wn-size': getSize(size, 'wn-size'),
  },
}));

export const Month = factory<MonthFactory>((_props) => {
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
    withCellSpacing,
    size,
    highlightToday,
    withWeekNumbers,
    fullWidth,
    attributes,
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
    attributes,
    vars,
    varsResolver,
    rootSelector: 'month',
  });

  const ctx = useDatesContext();
  const calendar = useOptionalCalendarContext();
  const column = useCalendarColumn();
  const dropdown = useDatesDropdownContext();
  const levelIndex = column?.index ?? 0;
  const withWeekControls = !!calendar?.weekControls.enabled;
  const getWeekControlProps = calendar?.weekControls.getWeekControlProps;

  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: ctx.consistentWeeks,
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

  const isDayDisabled = (date: DateStringValue) =>
    !!excludeDate?.(date) ||
    !isBeforeMaxDate(date, toDateString(maxDate)!) ||
    !isAfterMinDate(date, toDateString(minDate)!);

  const weekInTabOrder = withWeekControls
    ? getWeekInTabOrder({ dates, isDayDisabled, getWeekControlProps })
    : -1;

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
          {...getStyles('monthCell')}
          data-with-spacing={withCellSpacing || undefined}
        >
          <Day
            __staticSelector={__staticSelector || 'Month'}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            attributes={attributes}
            unstyled={unstyled}
            highlightToday={highlightToday}
            renderDay={renderDay}
            date={date}
            size={size}
            weekend={ctx.getWeekendDays(weekendDays).includes(dayjs(date).get('day') as DayOfWeek)}
            outside={outside}
            hidden={hideOutsideDates ? outside : false}
            aria-label={ariaLabel}
            static={isStatic}
            fullWidth={fullWidth}
            disabled={isDayDisabled(date)}
            ref={(node) => {
              if (node) {
                calendar?.navigation.getDayRef(levelIndex, rowIndex, cellIndex, node);
              }
            }}
            {...dayProps}
            onKeyDown={(event) => {
              dayProps?.onKeyDown?.(event);
              calendar?.navigation.onDayKeyDown(event, { rowIndex, cellIndex, date });
            }}
            onMouseEnter={(event) => {
              dayProps?.onMouseEnter?.(event);
              calendar?.onDayMouseEnter?.(event, date);
            }}
            onClick={(event) => {
              dayProps?.onClick?.(event);
              calendar?.onDayClick?.(event, date);
            }}
            tabIndex={withWeekControls || !isDateInTabOrder ? -1 : 0}
          />
        </td>
      );
    });

    const weekStart = row[0];
    const { selected: weekSelected, ...weekControlProps } = withWeekControls
      ? getWeekControlProps?.(weekStart) || {}
      : {};
    const weekDisabled = row.every(isDayDisabled);

    return (
      <tr key={rowIndex} {...getStyles('monthRow')}>
        {withWeekNumbers && (
          <td {...getStyles('weekNumber')}>
            {withWeekControls ? (
              <UnstyledButton
                {...getStyles('weekControl')}
                data-week-control
                data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
                disabled={weekDisabled}
                data-disabled={weekDisabled || undefined}
                data-selected={weekSelected || undefined}
                ref={(node) => {
                  if (node) {
                    calendar?.navigation.getWeekControlRef(levelIndex, rowIndex, node);
                  }
                }}
                {...weekControlProps}
                onKeyDown={(event) => {
                  weekControlProps.onKeyDown?.(event);
                  calendar?.navigation.onWeekControlKeyDown(event, { rowIndex, date: weekStart });
                }}
                onMouseDown={(event) => {
                  weekControlProps.onMouseDown?.(event);
                  dropdown.preventFocus && event.preventDefault();
                }}
                tabIndex={dropdown.preventFocus || rowIndex !== weekInTabOrder ? -1 : 0}
              >
                {getWeekNumber(row)}
              </UnstyledButton>
            ) : (
              getWeekNumber(row)
            )}
          </td>
        )}
        {cells}
      </tr>
    );
  });

  return (
    <Box
      component="table"
      {...getStyles('month')}
      size={size}
      data-full-width={fullWidth || undefined}
      data-week-mode={withWeekControls || undefined}
      {...others}
    >
      {!hideWeekdays && (
        <thead {...getStyles('monthThead')}>
          <WeekdaysRow
            __staticSelector={__staticSelector || 'Month'}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            weekdayFormat={weekdayFormat}
            withWeekNumbers={withWeekNumbers}
            size={size}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            attributes={attributes}
          />
        </thead>
      )}
      <tbody {...getStyles('monthTbody')}>{rows}</tbody>
    </Box>
  );
});

Month.classes = classes;
Month.varsResolver = varsResolver;
Month.displayName = '@mantine/dates/Month';

export namespace Month {
  export type Props = MonthProps;
  export type Settings = MonthSettings;
  export type StylesNames = MonthStylesNames;
  export type Factory = MonthFactory;
}
