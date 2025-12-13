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
  rem,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import {
  DateLabelFormat,
  DateStringValue,
  ScheduleEventData,
  ScheduleViewLevel,
} from '../../types';
import {
  clampIntervalMinutes,
  formatDate,
  getDayTimeIntervals,
  getVisibleEvents,
  toDateString,
} from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from '../MoreEvents/MoreEvents';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleEvent, ScheduleEventStylesNames } from '../ScheduleEvent/ScheduleEvent';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { useDayViewEvents } from './use-day-view-events/use-day-view-events';
import classes from './DayView.module.css';

export type DayViewStylesNames =
  | 'dayView'
  | 'dayViewInner'
  | 'dayViewAllDay'
  | 'dayViewAllDayEvents'
  | 'dayViewSlot'
  | 'dayViewSlots'
  | 'dayViewTimeSlots'
  | 'dayViewSlotLabel'
  | 'dayViewSlotLabels'
  | MoreEventsStylesNames
  | ScheduleEventStylesNames
  | CombinedScheduleHeaderStylesNames
  | CurrentTimeIndicatorStylesNames
  | CombinedScheduleHeaderStylesNames;

export type DayViewCssVariables = {
  dayView: '--day-view-radius' | '--day-view-slot-height' | '--day-view-all-day-slot-height';
};

export interface DayViewProps
  extends BoxProps, StylesApiProps<DayViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Day to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | DateStringValue;

  /** Called when date is changed */
  onDateChange?: (date: DateStringValue) => void;

  /** Events to display */
  events?: ScheduleEventData[];

  /** Time slots start time, in `HH:mm:ss` format @default `00:00:00` */
  startTime?: string;

  /** Time slots end time in `HH:mm:ss` format @default `23:59:59` */
  endTime?: string;

  /** Number of minutes for each time slot @default `15` */
  intervalMinutes?: number;

  /** If set, the all-day slot is displayed below the header @default `true` */
  withAllDaySlot?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default `HH:mm`  */
  slotLabelFormat?: DateLabelFormat;

  /** Date format in the header @default `MMMM D, YYYY` */
  headerFormat?: DateLabelFormat;

  /** If set, displays a line indicating the current time. By default, displayed only for the current day. */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default `true` */
  withCurrentTimeBubble?: boolean;

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

  /** Height of 1hr slot @default `64px` */
  slotHeight?: React.CSSProperties['height'];

  /** Height of all-day slot @default `44px` */
  allDaySlotHeight?: React.CSSProperties['height'];

  /** If true, events will have 95% width allowing time slot selection under the event @default false */
  truncateEvents?: boolean;

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;
}

export type DayViewFactory = Factory<{
  props: DayViewProps;
  ref: HTMLDivElement;
  stylesNames: DayViewStylesNames;
  vars: DayViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'DayView',
  startTime: '00:00:00',
  endTime: '23:59:59',
  intervalMinutes: 15,
  withAllDaySlot: true,
  slotLabelFormat: 'HH:mm',
  headerFormat: 'MMMM D, YYYY',
  withCurrentTimeBubble: true,
  withHeader: true,
} satisfies Partial<DayViewProps>;

const varsResolver = createVarsResolver<DayViewFactory>(
  (_theme, { radius, slotHeight, allDaySlotHeight }) => ({
    dayView: {
      '--day-view-radius': radius !== undefined ? getRadius(radius) : undefined,
      '--day-view-slot-height': rem(slotHeight),
      '--day-view-all-day-slot-height': rem(allDaySlotHeight),
    },
  })
);

export const DayView = factory<DayViewFactory>((_props) => {
  const props = useProps('DayView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    attributes,
    vars,
    __staticSelector,
    startTime,
    endTime,
    intervalMinutes,
    withAllDaySlot,
    date,
    locale,
    slotLabelFormat,
    headerFormat,
    withCurrentTimeIndicator = dayjs(date).isSame(dayjs(), 'day'),
    withCurrentTimeBubble,
    withHeader,
    radius,
    onDateChange,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,
    slotHeight,
    allDaySlotHeight,
    events,
    truncateEvents,
    moreEventsProps,
    ...others
  } = props;

  const getStyles = useStyles<DayViewFactory>({
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
    rootSelector: 'dayView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DayViewFactory>({
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
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const eventsData = useDayViewEvents({ events, date, startTime, endTime });

  const eventsNodes = eventsData.regularEvents.map((event) => (
    <ScheduleEvent
      event={event}
      key={event.id}
      truncate={truncateEvents}
      {...stylesApiProps}
      style={{
        ...stylesApiProps.styles?.event,
        top: `${event.position.top}%`,
        height: `${event.position.height}%`,
        insetInlineStart: `${event.position.offset}%`,
        width: `${event.position.width}%`,
        position: 'absolute',
      }}
    />
  ));

  const allDayEventsCount = getVisibleEvents({
    maxEvents: 2,
    totalEvents: eventsData.allDayEvents.length,
  });

  const allDayEventsNodes = eventsData.allDayEvents
    .slice(0, allDayEventsCount.visibleEventsCount)
    .map((event) => (
      <ScheduleEvent key={event.id} truncate={truncateEvents} event={event} {...stylesApiProps} />
    ));

  const items = slots.map((slot) => (
    <UnstyledButton
      {...getStyles('dayViewSlot')}
      key={slot.startTime}
      mod={{ 'hour-start': slot.isHourStart }}
      __vars={{ '--slot-size': `${clampIntervalMinutes(intervalMinutes) / 60}` }}
      aria-label={`${ctx.labels.timeSlot} ${slot.startTime} - ${slot.endTime}`}
    />
  ));

  const slotsLabels = slots.reduce<React.ReactNode[]>((acc, slot) => {
    if (slot.isHourStart) {
      const slotTime = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${slot.startTime}`);
      const label = formatDate({
        locale: ctx.getLocale(locale),
        date: slotTime,
        format: slotLabelFormat,
      });

      acc.push(
        <Box {...getStyles('dayViewSlotLabel')} key={slot.startTime}>
          {label}
        </Box>
      );
    }
    return acc;
  }, []);

  return (
    <Box {...getStyles('dayView')} {...others}>
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).subtract(1, 'day')))}
            {...previousControlProps}
          />

          <ScheduleHeader.Control {...stylesApiProps} interactive={false} miw={140}>
            {formatDate({ locale: ctx.getLocale(locale), date, format: headerFormat })}
          </ScheduleHeader.Control>

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs(date).add(1, 'day')))}
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

      <div {...getStyles('dayViewInner')}>
        <div {...getStyles('dayViewSlotLabels')}>
          {withAllDaySlot && (
            <Box {...getStyles('dayViewSlotLabel')} mod={{ 'all-day': true }}>
              {ctx.labels.allDay}
            </Box>
          )}
          {slotsLabels}
        </div>

        <div {...getStyles('dayViewSlots')}>
          {withAllDaySlot && (
            <div {...getStyles('dayViewAllDay')}>
              <div {...getStyles('dayViewAllDayEvents')}>
                {allDayEventsNodes}
                {allDayEventsCount.hiddenEventsCount > 0 && (
                  <MoreEvents
                    events={eventsData.allDayEvents}
                    moreEventsCount={allDayEventsCount.hiddenEventsCount}
                    {...stylesApiProps}
                    {...moreEventsProps}
                  />
                )}
              </div>
              <UnstyledButton
                {...getStyles('dayViewSlot')}
                mod={{ 'all-day': true }}
                aria-label={`${ctx.labels.timeSlot} ${ctx.labels.allDay}`}
              />
            </div>
          )}

          <div {...getStyles('dayViewTimeSlots')}>
            {eventsNodes}

            {withCurrentTimeIndicator && (
              <CurrentTimeIndicator
                startOffset="calc(var(--day-view-slot-labels-width) * -1)"
                endOffset="0rem"
                topOffset="0rem"
                timeBubbleStartOffset="calc(var(--day-view-slot-labels-width) * -1 + 30px)"
                currentTimeFormat={slotLabelFormat}
                withTimeBubble={withCurrentTimeBubble}
                withThumb={!withCurrentTimeBubble}
                locale={locale}
                startTime={startTime}
                endTime={endTime}
                {...stylesApiProps}
              />
            )}
            {items}
          </div>
        </div>
      </div>
    </Box>
  );
});

DayView.displayName = '@mantine/schedule/DayView';
DayView.classes = classes;
