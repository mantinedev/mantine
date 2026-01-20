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
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { DateStringValue, ScheduleEventData, ScheduleMode, ScheduleViewLevel } from '../../types';
import { getMonthsByQuarter, toDateString } from '../../utils';
import { MonthYearSelectProps } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getYearViewEvents } from './get-year-view-events/get-year-view-events';
import classes from './YearView.module.css';
import { YearViewMonth, YearViewMonthSettings } from './YearViewMonth';

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
  | 'yearViewQuarter'
  | 'yearViewDayIndicators'
  | 'yearViewDayIndicator'
  | CombinedScheduleHeaderStylesNames;

export type YearViewCssVariables = {
  yearView: '--year-view-radius';
};

export interface YearViewProps
  extends YearViewMonthSettings, BoxProps, StylesApiProps<YearViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** Events to display, must be a stable reference */
  events?: ScheduleEventData[];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

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

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default `default` */
  mode?: ScheduleMode;
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
  highlightToday: true,
  withHeader: true,
  mode: 'default',
} satisfies Partial<YearViewProps>;

const varsResolver = createVarsResolver<YearViewFactory>((_theme, { radius }) => ({
  yearView: { '--year-view-radius': radius ? getRadius(radius) : undefined },
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
    onMonthClick,
    onDayClick,
    onWeekNumberClick,
    getDayProps,
    getWeekNumberProps,
    highlightToday,

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
    ...others
  } = props;

  const ctx = useDatesContext();

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

  const groupedEvents = getYearViewEvents({ date, events });

  const months = getMonthsByQuarter(dayjs(date).format('YYYY-MM-DD')).map(
    (quarter, quarterIndex) => {
      const months = quarter.map((month) => (
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
          getDayProps={getDayProps}
          getWeekNumberProps={getWeekNumberProps}
          onMonthClick={onMonthClick}
          onDayClick={onDayClick}
          onWeekNumberClick={onWeekNumberClick}
          highlightToday={highlightToday}
          groupedEvents={groupedEvents}
          mode={mode}
        />
      ));

      return (
        <div {...getStyles('yearViewQuarter')} key={quarterIndex}>
          {months}
        </div>
      );
    }
  );

  return (
    <Box {...getStyles('yearView')} mod={{ static: mode === 'static' }} {...others}>
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() =>
              onDateChange?.(toDateString(dayjs(date).subtract(1, 'year').startOf('year')))
            }
            {...previousControlProps}
          />

          <ScheduleHeader.MonthYearSelect
            {...stylesApiProps}
            withMonths={false}
            yearValue={dayjs(date).get('year')}
            monthValue={dayjs(date).get('month')}
            onYearChange={(year) =>
              onDateChange?.(toDateString(dayjs(date).set('year', year).startOf('year')))
            }
            {...monthYearSelectProps}
          />

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).add(1, 'year').startOf('year')))}
            {...nextControlProps}
          />

          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
            {...todayControlProps}
          />

          <ScheduleHeader.ViewSelect
            value="year"
            onChange={onViewChange}
            ml="auto"
            {...stylesApiProps}
            {...viewSelectProps}
          />
        </ScheduleHeader>
      )}

      <div {...getStyles('yearViewMonths')}>{months}</div>
    </Box>
  );
});

YearView.displayName = '@mantine/schedule/YearView';
YearView.classes = classes;
