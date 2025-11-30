import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DateStringValue, DayOfWeek, ScheduleViewLevel } from '../../types';
import {
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
  toDateString,
} from '../../utils';
import { useScheduleContext } from '../Schedule/Schedule.context';
import {
  MonthYearSelectProps,
  MonthYearSelectStylesNames,
} from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import classes from './MonthView.module.css';

export type MonthViewStylesNames =
  | 'monthView'
  | 'monthViewWeek'
  | 'monthViewDay'
  | 'monthViewDayLabel'
  | 'monthViewWeekNumber'
  | 'monthViewWeekday'
  | 'monthViewWeekdays'
  | 'monthViewWeekdaysCorner'
  | CombinedScheduleHeaderStylesNames
  | MonthYearSelectStylesNames;

export type MonthViewCssVariables = {
  monthView: '--month-view-radius';
};

export interface MonthViewProps
  extends BoxProps,
    StylesApiProps<MonthViewFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** If set, week numbers are displayed in the first column @default `false` */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. By default, the first letter of the weekday. */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `ScheduleProvider`. */
  weekendDays?: DayOfWeek[];

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: Date) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: Date) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, always renders 6 weeks in the month view @default true */
  consistentWeeks?: boolean;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, days from the previous and next months are displayed to fill the weeks @default `true` */
  withOutsideDays?: boolean;

  /** If set, the header is displayed @default `true` */
  withHeader?: boolean;

  /** Props passed down to `MonthYearSelect` component in the header */
  monthYearSelectProps?: Partial<MonthYearSelectProps>;

  /** Called when view level select button is clicked */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** A list of views to display @default `['day', 'week', 'month', 'year']` */
  views?: readonly ScheduleViewLevel[];
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
  vars: MonthViewCssVariables;
}>;

const varsResolver = createVarsResolver<MonthViewFactory>((_theme, { radius }) => ({
  monthView: { '--month-view-radius': radius ? getRadius(radius) : undefined },
}));

const defaultProps = {
  withWeekDays: true,
  consistentWeeks: true,
  highlightToday: true,
  withOutsideDays: true,
  withHeader: true,
  weekdayFormat: 'ddd',
} satisfies Partial<MonthViewProps>;

export const MonthView = factory<MonthViewFactory>((_props) => {
  const props = useProps('MonthView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    attributes,
    vars,
    mod,
    date,
    onDateChange,
    withWeekNumbers,
    withWeekDays,
    locale,
    weekdayFormat,
    firstDayOfWeek,
    weekendDays,
    __staticSelector,
    getDayProps,
    getWeekNumberProps,
    onDayClick,
    onWeekNumberClick,
    consistentWeeks,
    highlightToday,
    radius,
    withOutsideDays,
    withHeader,
    monthYearSelectProps,
    onViewChange,
    views,
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: __staticSelector || 'MonthView',
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
    rootSelector: 'monthView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthViewFactory>({
    classNames,
    styles,
    props,
  });

  const stylesApiProps = {
    classNames: resolvedClassNames,
    styles: resolvedStyles,
    __staticSelector: __staticSelector || 'MonthView',
    radius,
  };

  const ctx = useScheduleContext();

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }).map((day, index) => (
        <div {...getStyles('monthViewWeekday')} key={index}>
          {day}
        </div>
      ))
    : null;

  const weeks = getMonthDays({
    month: dayjs(date).format('YYYY-MM-DD 00:00:00'),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: consistentWeeks && withOutsideDays,
  }).map((week, index) => {
    const days = week.map((day) => {
      const outside = !isSameMonth(date, day);
      const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day());
      const ariaLabel = dayjs(day)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(new Date(day)) || {};
      const today = dayjs(day).isSame(dayjs(), 'day') && highlightToday;

      if (outside && !withOutsideDays) {
        return (
          <div key={day} data-static {...getStyles('monthViewDay', { style: dayProps.style })} />
        );
      }

      return (
        <UnstyledButton
          aria-label={ariaLabel}
          {...dayProps}
          {...getStyles('monthViewDay', { className: dayProps.className, style: dayProps.style })}
          key={day}
          onClick={(event) => {
            onDayClick?.(dayjs(day).startOf('day').toDate(), event);
            dayProps.onClick?.(event);
          }}
          mod={[{ outside, weekend, today }, dayProps.mod]}
        >
          <span data-today={today || undefined} {...getStyles('monthViewDayLabel')}>
            {dayjs(day).format('D')}
          </span>
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(new Date(week[0])) || {};
    const weekNumber = getWeekNumber(week);

    return (
      <div {...getStyles('monthViewWeek')} key={index}>
        {withWeekNumbers && (
          <UnstyledButton
            key={weekNumber}
            aria-label={`Week ${weekNumber}`}
            {...weekNumberProps}
            onClick={(event) => {
              onWeekNumberClick?.(dayjs(week[0]).startOf('day').toDate(), event);
              weekNumberProps.onClick?.(event);
            }}
            {...getStyles('monthViewWeekNumber', {
              className: weekNumberProps.className,
              style: weekNumberProps.style,
            })}
          >
            {weekNumber}
          </UnstyledButton>
        )}

        {days}
      </div>
    );
  });

  return (
    <Box
      mod={[{ 'with-week-numbers': withWeekNumbers, 'with-weekdays': withWeekDays }, mod]}
      {...getStyles('monthView')}
      {...others}
    >
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).subtract(1, 'month')))}
          />
          <ScheduleHeader.MonthYearSelect
            {...stylesApiProps}
            yearValue={dayjs(date).get('year')}
            monthValue={dayjs(date).get('month')}
            onYearChange={(year) => onDateChange?.(toDateString(dayjs(date).set('year', year)))}
            onMonthChange={(month) => onDateChange?.(toDateString(dayjs(date).set('month', month)))}
            {...monthYearSelectProps}
          />
          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).add(1, 'month')))}
          />
          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
          />

          <ScheduleHeader.ViewSelect
            value="month"
            onChange={onViewChange}
            views={views}
            ml="auto"
            {...stylesApiProps}
          />
        </ScheduleHeader>
      )}

      {weekdays && (
        <div {...getStyles('monthViewWeekdays')}>
          {withWeekNumbers && <div {...getStyles('monthViewWeekdaysCorner')} />}
          {weekdays}
        </div>
      )}

      {weeks}
    </Box>
  );
});

MonthView.displayName = '@mantine/schedule/MonthView';
MonthView.classes = classes;
