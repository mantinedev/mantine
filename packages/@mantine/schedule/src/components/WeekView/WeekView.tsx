import dayjs from 'dayjs';
import { useState } from 'react';
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
  ScrollArea,
  ScrollAreaAutosizeProps,
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
  formatDate,
  getDayTimeIntervals,
  getWeekDays,
  getWeekNumber,
  nextWeek,
  previousWeek,
  toDateString,
} from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { useWeekViewEvents } from './use-week-view-events/use-week-view-events';
import { WeekViewDay } from './WeekViewDay';
import classes from './WeekView.module.css';

export type WeekViewHighlightToday = 'weekday' | 'column' | false;

export type WeekViewStylesNames =
  | 'weekView'
  | 'weekViewRoot'
  | 'weekViewHeader'
  | 'weekViewInner'
  | 'weekViewAllDaySlotsEvents'
  | 'weekViewAllDaySlots'
  | 'weekViewAllDaySlotsList'
  | 'weekViewAllDaySlot'
  | 'weekViewAllDaySlotsLabel'
  | 'weekViewScrollArea'
  | 'weekViewCorner'
  | 'weekViewSlotLabels'
  | 'weekViewSlotLabel'
  | 'weekViewDayLabel'
  | 'weekViewDayWeekday'
  | 'weekViewDay'
  | 'weekViewDayNumber'
  | 'weekViewDaySlot'
  | 'weekViewDaySlots'
  | 'weekViewWeekLabel'
  | 'weekViewWeekNumber'
  | CurrentTimeIndicatorStylesNames
  | CombinedScheduleHeaderStylesNames;

export type WeekViewCssVariables = {
  weekView: '--week-view-radius';
};

export interface WeekViewProps
  extends BoxProps, StylesApiProps<WeekViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Week to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** Start time for the day view, in `HH:mm:ss` format @default `00:00:00` */
  startTime?: string;

  /** End time for the day view, in `HH:mm:ss` format @default `23:59:59` */
  endTime?: string;

  /** Number of minutes for each interval in the day view @default `60` */
  intervalMinutes?: number;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default `HH:mm`  */
  slotLabelFormat?: DateLabelFormat;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. @default `'ddd'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `ScheduleProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column @default `'weekday'` */
  highlightToday?: WeekViewHighlightToday;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Props passed down to the `ScrollArea.Autosize` component */
  scrollAreaProps?: ScrollAreaAutosizeProps & DataAttributes;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** If set, the week number is displayed at the top left corner @default `true` */
  withWeekNumber?: boolean;

  /** If set, displays a line indicating the current time @default `true` */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default `true` */
  withCurrentTimeBubble?: boolean;

  /** If set, displays all-day slots at the top of the view @default `true` */
  withAllDaySlots?: boolean;

  /** If set, the header is displayed @default `true` */
  withHeader?: boolean;

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

  /** Format for week label @default `'MMM DD'` */
  weekLabelFormat?: DateLabelFormat;

  /** List of events to display in the week view */
  events?: ScheduleEventData[];
}

export type WeekViewFactory = Factory<{
  props: WeekViewProps;
  ref: HTMLDivElement;
  stylesNames: WeekViewStylesNames;
  vars: WeekViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'WeekView',
  withWeekendDays: true,
  highlightToday: 'weekday',
  withCurrentTimeIndicator: true,
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
  weekdayFormat: 'ddd',
  withWeekNumber: true,
  withCurrentTimeBubble: true,
  withAllDaySlots: true,
  withHeader: true,
  weekLabelFormat: 'MMM DD',
} satisfies Partial<WeekViewProps>;

const varsResolver = createVarsResolver<WeekViewFactory>((_theme, { radius }) => ({
  weekView: { '--week-view-radius': radius ? getRadius(radius) : undefined },
}));

export const WeekView = factory<WeekViewFactory>((_props) => {
  const props = useProps('WeekView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    attributes,
    vars,
    startTime,
    endTime,
    date,
    onDateChange,
    intervalMinutes,
    slotLabelFormat,
    withWeekendDays,
    weekendDays,
    firstDayOfWeek,
    weekdayFormat,
    radius,
    highlightToday,
    withCurrentTimeIndicator,
    scrollAreaProps,
    locale,
    withWeekNumber,
    mod,
    withCurrentTimeBubble,
    withAllDaySlots,
    __staticSelector,
    withHeader,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,
    weekLabelFormat,
    events,
    ...others
  } = props;

  const getStyles = useStyles<WeekViewFactory>({
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
    rootSelector: 'weekView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<WeekViewFactory>({
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

  const [scrolled, setScrolled] = useState(false);
  const ctx = useScheduleContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const weekEvents = useWeekViewEvents({
    date,
    events,
    startTime,
    endTime,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    weekendDays: ctx.getWeekendDays(weekendDays),
    withWeekendDays,
  });

  const timeValues = slots.map((interval) => {
    const intervalTime = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${interval.startTime}`);
    const label = formatDate({
      date: intervalTime,
      locale: ctx.getLocale(locale),
      format: slotLabelFormat,
    });

    return (
      <Box
        {...getStyles('weekViewSlotLabel')}
        key={interval.startTime}
        mod={{ 'hour-start': interval.isHourStart }}
      >
        {label}
      </Box>
    );
  });

  const weekdays = getWeekDays({
    week: date,
    withWeekendDays,
    weekendDays: ctx.getWeekendDays(weekendDays),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  });

  const currentWeekdayIndex = withCurrentTimeIndicator
    ? weekdays.findIndex((day) => dayjs(day).isSame(dayjs(), 'date'))
    : -1;

  const weekdaysLabels = weekdays.map((day) => (
    <UnstyledButton
      {...getStyles('weekViewDayLabel')}
      key={day}
      aria-label={`${ctx.labels.weekday} ${dayjs(day).format('YYYY-MM-DD')}`}
      mod={{
        today: dayjs(day).isSame(dayjs(), 'day') && !!highlightToday,
        weekend: ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek),
      }}
    >
      <Box {...getStyles('weekViewDayWeekday')} key="weekday">
        {formatDate({ locale: ctx.getLocale(locale), date: day, format: weekdayFormat })}
      </Box>
      <div {...getStyles('weekViewDayNumber')} key="date">
        {dayjs(day).date()}
      </div>
    </UnstyledButton>
  ));

  const days = weekdays.map((day) => {
    const dayEvents = (weekEvents.regularEvents[day] || []).map((event) => (
      <ScheduleEvent
        key={event.id}
        event={event}
        autoSize
        hanging={event.position.hanging}
        style={{
          position: 'absolute',
          top: `${event.position.top}%`,
          left: `${event.position.offset}%`,
          width: `${event.position.width}%`,
          height: `${event.position.height}%`,
        }}
      />
    ));

    return (
      <WeekViewDay
        key={day}
        day={day}
        slots={slots}
        getStyles={getStyles}
        highlightToday={highlightToday}
        weekendDays={weekendDays}
      >
        {dayEvents}
      </WeekViewDay>
    );
  });

  const allDaySlots = weekdays.map((day) => (
    <UnstyledButton
      aria-label={`${ctx.labels.allDay} ${dayjs(day).format('YYYY-MM-DD')}`}
      key={day}
      {...getStyles('weekViewDaySlot')}
    />
  ));

  const allDayEvents = weekEvents.allDayEvents.map((event) => (
    <ScheduleEvent
      key={event.id}
      event={event}
      autoSize
      nowrap
      hanging={event.position.hanging}
      style={{
        position: 'absolute',
        zIndex: 2,
        top: `calc(${event.position.row * 50}% + 1px)`,
        left: `calc(${event.position.offset}% + 1px)`,
        width: `calc(${event.position.width}% - 1px)`,
        height: 'calc(50% - 2px)',
        maxHeight: 'calc(50% - 2px)',
      }}
    />
  ));

  // Extra rows show on hover = total rows - 2 visible rows (starts from 0, so -1)
  const extraRows = Math.max(...weekEvents.allDayEvents.map((event) => event.position.row), 1) - 1;

  return (
    <Box {...getStyles('weekView')} {...others}>
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() =>
              onDateChange?.(previousWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)))
            }
            {...previousControlProps}
          />

          <ScheduleHeader.Control {...stylesApiProps} interactive={false} miw={140}>
            {`${formatDate({ locale: ctx.getLocale(locale), date: weekdays[0], format: weekLabelFormat })} – ${formatDate(
              {
                locale: ctx.getLocale(locale),
                date: weekdays[weekdays.length - 1],
                format: weekLabelFormat,
              }
            )}`}
          </ScheduleHeader.Control>

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(nextWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)))}
            {...nextControlProps}
          />

          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
            {...todayControlProps}
          />

          <ScheduleHeader.ViewSelect
            value="week"
            onChange={onViewChange}
            ml="auto"
            {...stylesApiProps}
            {...viewSelectProps}
          />
        </ScheduleHeader>
      )}

      <Box
        {...getStyles('weekViewRoot')}
        __vars={{
          '--indicator-offset-index':
            currentWeekdayIndex === -1 ? undefined : `${currentWeekdayIndex + 1}`,
          '--number-of-days': withWeekendDays
            ? '7'
            : `${7 - ctx.getWeekendDays(weekendDays).length}`,
        }}
        mod={[{ 'with-weekends': withWeekendDays }, mod]}
      >
        <ScrollArea.Autosize
          scrollbarSize={4}
          {...scrollAreaProps}
          {...getStyles('weekViewScrollArea', {
            className: scrollAreaProps?.className,
            style: scrollAreaProps?.style,
          })}
          onScrollPositionChange={(position) => {
            scrollAreaProps?.onScrollPositionChange?.(position);
            setScrolled(position.y !== 0);
          }}
        >
          <Box {...getStyles('weekViewHeader')} mod={{ scrolled }}>
            <div {...getStyles('weekViewCorner')} key="corner">
              {withWeekNumber && (
                <>
                  <div {...getStyles('weekViewWeekLabel')}>{ctx.labels.week}</div>
                  <div {...getStyles('weekViewWeekNumber')}>{getWeekNumber(date)}</div>
                </>
              )}
            </div>

            {weekdaysLabels}
          </Box>

          {withAllDaySlots && (
            <div {...getStyles('weekViewAllDaySlots')}>
              <div {...getStyles('weekViewAllDaySlotsLabel')}>{ctx.labels.allDay}</div>
              <div {...getStyles('weekViewAllDaySlotsList')}>
                <Box
                  {...getStyles('weekViewAllDaySlotsEvents')}
                  __vars={{ '--extra-rows': `${extraRows}` }}
                >
                  {allDayEvents}
                </Box>
                {allDaySlots}
              </div>
            </div>
          )}

          <div {...getStyles('weekViewInner')}>
            <div {...getStyles('weekViewSlotLabels')}>{timeValues}</div>

            {withCurrentTimeIndicator && currentWeekdayIndex !== -1 && (
              <CurrentTimeIndicator
                startOffset="calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))"
                endOffset="calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))"
                timeBubbleStartOffset="calc(var(--week-view-slots-label-width) - var(--time-bubble-width))"
                currentTimeFormat={slotLabelFormat}
                withTimeBubble={withCurrentTimeBubble}
                withThumb={withCurrentTimeBubble ? currentWeekdayIndex !== 0 : true}
                locale={locale}
                startTime={startTime}
                endTime={endTime}
                {...stylesApiProps}
              />
            )}
            {days}
          </div>
        </ScrollArea.Autosize>
      </Box>
    </Box>
  );
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
