import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
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
import {
  DateLabelFormat,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleViewLevel,
} from '../../types';
import {
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
  toDateString,
} from '../../utils';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { MonthYearSelectProps } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { useMonthViewEvents } from './use-month-view-events/use-month-view-events';
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
  | 'monthViewEvents'
  | CombinedScheduleHeaderStylesNames;

export type MonthViewCssVariables = {
  monthView: '--month-view-radius';
};

export interface MonthViewProps
  extends BoxProps, StylesApiProps<MonthViewFactory>, ElementProps<'div'> {
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

  /** Props passed to previous month control */
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to next month control */
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to today control */
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to view level select */
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;

  /** Events to display */
  events?: ScheduleEventData[];
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
  __staticSelector: 'MonthView',
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
    todayControlProps,
    nextControlProps,
    previousControlProps,
    viewSelectProps,
    events,
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: __staticSelector,
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
    attributes,
    __staticSelector,
    radius,
  };

  const ctx = useScheduleContext();

  const monthEvents = useMonthViewEvents({
    date,
    events,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    withOutsideDays,
    consistentWeeks,
  });

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
    const events = (monthEvents[index] || []).map((event) => (
      <ScheduleEvent
        key={event.id}
        event={event}
        style={{
          position: 'absolute',
          top: `calc(${event.position.row * 50}% + 1px)`,
          left: `calc(${event.position.startOffset}% + 1px)`,
          width: `calc(${event.position.width}% - 1px)`,
          height: `calc(50% - 2px)`,
        }}
      />
    ));

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

        <div {...getStyles('monthViewEvents')} key="week-events">
          {events}
        </div>

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
            onClick={() =>
              onDateChange?.(toDateString(dayjs(date).subtract(1, 'month').startOf('month')))
            }
            {...previousControlProps}
          />

          <ScheduleHeader.MonthYearSelect
            {...stylesApiProps}
            yearValue={dayjs(date).get('year')}
            monthValue={dayjs(date).get('month')}
            onYearChange={(year) =>
              onDateChange?.(toDateString(dayjs(date).set('year', year).startOf('month')))
            }
            onMonthChange={(month) =>
              onDateChange?.(toDateString(dayjs(date).set('month', month).startOf('month')))
            }
            {...monthYearSelectProps}
          />

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() =>
              onDateChange?.(toDateString(dayjs(date).add(1, 'month').startOf('month')))
            }
            {...nextControlProps}
          />

          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
            {...todayControlProps}
          />

          <ScheduleHeader.ViewSelect
            value="month"
            onChange={onViewChange}
            ml="auto"
            {...stylesApiProps}
            {...viewSelectProps}
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
