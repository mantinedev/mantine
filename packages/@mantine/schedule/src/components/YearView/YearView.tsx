import dayjs from 'dayjs';
import { useMemo, useRef } from 'react';
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
  useDirection,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { DateStringValue, ScheduleEventData, ScheduleMode, ScheduleViewLevel } from '../../types';
import {
  expandRecurringEvents,
  getMonthDays,
  getMonthsByQuarter,
  isSameMonth,
  toDateString,
} from '../../utils';
import {
  getHiddenWeekendColumns,
  getVisibleWeekDays,
} from '../../utils/get-visible-week-days/get-visible-week-days';
import { MonthYearSelectProps } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getYearViewEvents, getYearViewRange } from './get-year-view-events/get-year-view-events';
import { handleYearViewKeyDown, YearViewControlsRef } from './handle-year-view-key-down';
import { YearViewMonth, YearViewMonthSettings } from './YearViewMonth';
import classes from './YearView.module.css';

export type YearViewStylesNames =
  | 'yearView'
  | 'yearViewMonths'
  | 'yearViewMonth'
  | 'yearViewWeekday'
  | 'yearViewDay'
  | 'yearViewWeek'
  | 'yearViewWeekNumber'
  | 'yearViewWeekdays'
  | 'yearViewWeekdaysCorner'
  | 'yearViewMonthCaption'
  | 'yearViewDayIndicators'
  | 'yearViewDayIndicator'
  | CombinedScheduleHeaderStylesNames;

export type YearViewCssVariables = {
  yearView: '--year-view-radius';
};

export interface YearViewProps
  extends YearViewMonthSettings, BoxProps, StylesApiProps<YearViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format @category state */
  date: Date | string;

  /** Called with the new date value when a date is selected @category state */
  onDateChange?: (value: DateStringValue) => void;

  /** Events to display, must be a stable reference @category appearance */
  events?: ScheduleEventData[];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** If set, highlights the current day @default true @category appearance */
  highlightToday?: boolean;

  /** If set, the header is displayed @default true @category appearance */
  withHeader?: boolean;

  /** Props passed down to `MonthYearSelect` component in the header */
  monthYearSelectProps?: Partial<MonthYearSelectProps>;

  /** Called when view level select button is clicked @category state */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Props passed to previous year control */
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to next year control */
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to today control */
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to view level select */
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default default @category behavior */
  mode?: ScheduleMode;

  /** Max number of generated recurring instances per recurring series @default 2000 */
  recurrenceExpansionLimit?: number;
}

export type YearViewFactory = Factory<{
  props: YearViewProps;
  ref: HTMLDivElement;
  stylesNames: YearViewStylesNames;
  vars: YearViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'YearView',
  monthLabelFormat: 'MMMM',
  withWeekDays: true,
  withWeekendDays: true,
  highlightToday: true,
  withHeader: true,
  withOutsideDays: true,
  mode: 'default',
} satisfies Partial<YearViewProps>;

const varsResolver = createVarsResolver<YearViewFactory>((_theme, { radius }) => ({
  yearView: { '--year-view-radius': radius !== undefined ? getRadius(radius) : undefined },
}));

export const YearView = factory<YearViewFactory>((_props) => {
  const props = useProps('YearView', defaultProps, _props);
  const {
    // YearView props
    date,
    onDateChange,
    events,

    // YearViewMonth settings
    monthLabelFormat,
    withWeekNumbers,
    withWeekDays,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    withWeekendDays,
    onMonthClick,
    onDayClick,
    onWeekNumberClick,
    getDayProps,
    getWeekNumberProps,
    highlightToday,
    labels,
    withOutsideDays,
    renderDay,

    // ScheduleHeader props
    withHeader,
    monthYearSelectProps,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,

    // System props
    __staticSelector,
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    radius,
    mode,
    recurrenceExpansionLimit,
    ...others
  } = props;

  const ctx = useDatesContext();

  const { dir } = useDirection();

  const getStyles = useStyles<YearViewFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
    rootSelector: 'yearView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearViewFactory>({
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

  // [monthIndex][weekIndex][dayIndex]
  const daysRef = useRef<HTMLButtonElement[][][]>([]) as YearViewControlsRef;

  const resolvedFirstDayOfWeek = ctx.getFirstDayOfWeek(firstDayOfWeek);
  const resolvedWeekendDays = ctx.getWeekendDays(weekendDays);
  const hiddenColumns = getHiddenWeekendColumns({
    weekendDays: resolvedWeekendDays,
    firstDayOfWeek: resolvedFirstDayOfWeek,
    withWeekendDays,
  });
  const columnsCount = 7 - hiddenColumns.length;

  const yearStart = toDateString(dayjs(date).startOf('year'));
  const yearRange = getYearViewRange({
    date: yearStart,
    firstDayOfWeek: resolvedFirstDayOfWeek,
    withOutsideDays,
  });

  const groupedEvents = useMemo(() => {
    const expandedEvents = expandRecurringEvents({
      events,
      rangeStart: dayjs(yearRange.start).startOf('day').toDate(),
      rangeEnd: dayjs(yearRange.end).endOf('day').toDate(),
      expansionLimit: recurrenceExpansionLimit,
    });

    return getYearViewEvents({
      date: yearStart,
      events: expandedEvents,
      firstDayOfWeek: resolvedFirstDayOfWeek,
      withOutsideDays,
    });
  }, [
    events,
    yearStart,
    yearRange.start,
    yearRange.end,
    resolvedFirstDayOfWeek,
    withOutsideDays,
    recurrenceExpansionLimit,
  ]);

  const getFirstDayIndex = (month: string): { weekIndex: number; dayIndex: number } | undefined => {
    const weeks = getMonthDays({
      month: dayjs(month).format('YYYY-MM-DD'),
      firstDayOfWeek: resolvedFirstDayOfWeek,
      consistentWeeks: true,
    });

    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      const week = getVisibleWeekDays({
        week: weeks[weekIndex],
        weekendDays: resolvedWeekendDays,
        withWeekendDays,
      });

      for (let dayIndex = 0; dayIndex < week.length; dayIndex++) {
        const dayDate = week[dayIndex];
        if (isSameMonth(dayDate, month)) {
          return { weekIndex, dayIndex };
        }
      }
    }

    return undefined;
  };

  let globalMonthIndex = 0;
  const months = getMonthsByQuarter(dayjs(date).format('YYYY-MM-DD'))
    .flat()
    .map((month) => {
      const currentMonthIndex = globalMonthIndex;
      globalMonthIndex++;

      return (
        <YearViewMonth
          key={month}
          month={month}
          getStyles={getStyles}
          monthLabelFormat={monthLabelFormat}
          withWeekNumbers={withWeekNumbers}
          withWeekDays={withWeekDays}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          weekdayFormat={
            weekdayFormat ||
            ((date) => dayjs(date).locale(ctx.getLocale(locale)).format('dd').slice(0, 1))
          }
          weekendDays={weekendDays}
          withWeekendDays={withWeekendDays}
          getDayProps={getDayProps}
          getWeekNumberProps={getWeekNumberProps}
          onMonthClick={onMonthClick}
          onDayClick={onDayClick}
          onWeekNumberClick={onWeekNumberClick}
          highlightToday={highlightToday}
          labels={labels}
          groupedEvents={groupedEvents}
          mode={mode}
          withOutsideDays={withOutsideDays}
          renderDay={renderDay}
          firstDayIndex={getFirstDayIndex(month)}
          __getDayRef={(weekIndex, dayIndex, node) => {
            if (!Array.isArray(daysRef.current[currentMonthIndex])) {
              daysRef.current[currentMonthIndex] = [];
            }
            if (!Array.isArray(daysRef.current[currentMonthIndex][weekIndex])) {
              daysRef.current[currentMonthIndex][weekIndex] = [];
            }
            const week = daysRef.current[currentMonthIndex][weekIndex];
            week[dayIndex] = node;

            return () => {
              if (week[dayIndex] === node) {
                delete week[dayIndex];
              }
              while (week.length > 0 && !week[week.length - 1]) {
                week.pop();
              }
            };
          }}
          __onDayKeyDown={(event, payload) => {
            handleYearViewKeyDown({
              controlsRef: daysRef,
              monthIndex: currentMonthIndex,
              weekIndex: payload.weekIndex,
              dayIndex: payload.dayIndex,
              event,
              dir,
            });
          }}
        />
      );
    });

  return (
    <Box
      {...getStyles('yearView')}
      mod={{ static: mode === 'static', 'without-weekend-days': hiddenColumns.length > 0 }}
      __vars={hiddenColumns.length > 0 ? { '--year-view-columns': `${columnsCount}` } : undefined}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="year"
          navigationHandlers={{
            previous: () => toDateString(dayjs(date).subtract(1, 'year').startOf('year')),
            next: () => toDateString(dayjs(date).add(1, 'year').startOf('year')),
            today: () => toDateString(dayjs()),
          }}
          control={{
            monthYearSelect: {
              locale,
              withMonths: false,
              yearValue: dayjs(date).get('year'),
              monthValue: dayjs(date).get('month'),
              onYearChange: (year) =>
                onDateChange?.(toDateString(dayjs(date).set('year', year).startOf('year'))),
              ...monthYearSelectProps,
            },
          }}
          labels={labels}
          onDateChange={onDateChange}
          onViewChange={onViewChange}
          previousControlProps={previousControlProps}
          nextControlProps={nextControlProps}
          todayControlProps={todayControlProps}
          viewSelectProps={viewSelectProps}
          stylesApiProps={stylesApiProps}
        />
      )}

      <div {...getStyles('yearViewMonths')}>{months}</div>
    </Box>
  );
});

YearView.displayName = '@mantine/schedule/YearView';
YearView.classes = classes;
YearView.varsResolver = varsResolver;

export namespace YearView {
  export type Props = YearViewProps;
  export type Factory = YearViewFactory;
  export type StylesNames = YearViewStylesNames;
  export type CssVariables = YearViewCssVariables;
}
