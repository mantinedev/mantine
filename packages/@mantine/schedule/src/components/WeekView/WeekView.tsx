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
  rem,
  ScrollArea,
  ScrollAreaAutosizeProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { useDragDropHandlers } from '../../hooks/use-drag-drop-handlers';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateDropTime,
  formatDate,
  getDayTimeIntervals,
  getWeekDays,
  getWeekNumber,
  isAllDayEvent,
  nextWeek,
  previousWeek,
  toDateString,
} from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { DragContext } from '../DragContext/DragContext';
import { RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import {
  CombinedScheduleHeaderStylesNames,
  ScheduleHeader,
} from '../ScheduleHeader/ScheduleHeader';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getWeekLabel } from './get-week-label/get-week-label';
import { getWeekViewEvents } from './get-week-view-events/get-week-view-events';
import classes from './WeekView.module.css';
import { WeekViewDay } from './WeekViewDay';

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
  weekView: '--week-view-radius' | '--week-view-slot-height' | '--week-view-all-day-slots-height';
};

export interface WeekViewProps
  extends BoxProps, StylesApiProps<WeekViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Week to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** Start time for the day view, in `HH:mm:ss` format @default 00:00:00 */
  startTime?: string;

  /** End time for the day view, in `HH:mm:ss` format @default 23:59:59 */
  endTime?: string;

  /** Number of minutes for each interval in the day view @default 60 */
  intervalMinutes?: number;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default HH:mm  */
  slotLabelFormat?: DateLabelFormat;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. @default 'ddd' */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default true */
  withWeekendDays?: boolean;

  /** If set to true, highlights today in the weekday row @default false */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Props passed down to the `ScrollArea.Autosize` component */
  scrollAreaProps?: ScrollAreaAutosizeProps & DataAttributes;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** If set, the week number is displayed at the top left corner @default true */
  withWeekNumber?: boolean;

  /** If set, displays a line indicating the current time @default true */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default true */
  withCurrentTimeBubble?: boolean;

  /** If set, displays all-day slots at the top of the view @default true */
  withAllDaySlots?: boolean;

  /** If set, the header is displayed @default true */
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

  /** Format for week label @default 'MMM DD' */
  weekLabelFormat?: DateLabelFormat;

  /** List of events to display in the week view */
  events?: ScheduleEventData[];

  /** Height of 1hr slot @default 64px */
  slotHeight?: React.CSSProperties['height'];

  /** Height of all-day slot @default 48px */
  allDaySlotHeight?: React.CSSProperties['height'];

  /** Labels override */
  labels?: ScheduleLabelsOverride;

  /** If set to true, highlights business hours with white background @default false */
  highlightBusinessHours?: boolean;

  /** Business hours range in `HH:mm:ss` format @default ['09:00:00', '17:00:00'] */
  businessHours?: [string, string];

  /** Function to customize event body, `event` object is passed as first argument */
  renderEventBody?: RenderEventBody;

  /** If true, events can be dragged and dropped @default false */
  withDragDrop?: boolean;

  /** Called when event is dropped at new time */
  onEventDrop?: (eventId: string | number, newStart: Date, newEnd: Date) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default default */
  mode?: ScheduleMode;

  /** Function to customize week label in the header */
  renderWeekLabel?: (params: { weekStart: Date; weekEnd: Date }) => React.ReactNode;
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
  highlightBusinessHours: false,
  businessHours: ['09:00:00', '17:00:00'],
  withDragDrop: false,
  mode: 'default',
} satisfies Partial<WeekViewProps>;

const varsResolver = createVarsResolver<WeekViewFactory>(
  (_theme, { radius, allDaySlotHeight, slotHeight }) => ({
    weekView: {
      '--week-view-radius': radius ? getRadius(radius) : undefined,
      '--week-view-all-day-slots-height': rem(allDaySlotHeight),
      '--week-view-slot-height': rem(slotHeight),
    },
  })
);

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
    allDaySlotHeight,
    slotHeight,
    labels,
    highlightBusinessHours,
    businessHours,
    renderEventBody,
    withDragDrop,
    onEventDrop,
    canDragEvent,
    mode,
    renderWeekLabel,
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
  const ctx = useDatesContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  type DropTargetSlot = { day: string; slotIndex: number };

  const dragDrop = useDragDropHandlers<DropTargetSlot>({
    enabled: withDragDrop,
    mode,
    onEventDrop,
    canDragEvent,
    calculateDropTarget: (target: DropTargetSlot, draggedEvent: ScheduleEventData) => {
      const slotTime = slots[target.slotIndex].startTime;
      return calculateDropTime({
        draggedEvent,
        targetDate: target.day,
        targetSlotTime: slotTime,
        intervalMinutes,
      });
    },
  });

  const handleSlotDragOver = (
    e: React.DragEvent<HTMLButtonElement>,
    day: string,
    slotIndex: number
  ) => {
    dragDrop.handleDragOver(e, { day, slotIndex });
  };

  const handleSlotDrop = (
    e: React.DragEvent<HTMLButtonElement>,
    day: string,
    _slotTime: string,
    slotIndex: number
  ) => {
    dragDrop.handleDrop(e, { day, slotIndex });
  };

  const weekEvents = getWeekViewEvents({
    date,
    events,
    startTime,
    endTime,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    weekendDays: ctx.getWeekendDays(weekendDays),
    withWeekendDays,
  });

  const isSlotInBusinessHours = (slotTime: string) => {
    if (!highlightBusinessHours || !businessHours) {
      return null;
    }
    const [start, end] = businessHours;
    return slotTime >= start && slotTime < end;
  };

  const timeValues = slots.map((interval) => {
    const intervalTime = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${interval.startTime}`);
    const label = formatDate({
      date: intervalTime,
      locale: ctx.getLocale(locale),
      format: slotLabelFormat,
    });

    const inBusinessHours = isSlotInBusinessHours(interval.startTime);

    return (
      <Box
        {...getStyles('weekViewSlotLabel')}
        key={interval.startTime}
        mod={{
          'hour-start': interval.isHourStart,
          'business-hours': inBusinessHours === true,
          'non-business-hours': inBusinessHours === false,
        }}
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
      aria-label={`${getLabel('weekday', labels)} ${dayjs(day).format('YYYY-MM-DD')}`}
      mod={{
        today: dayjs(day).isSame(dayjs(), 'day') && !!highlightToday,
        weekend: ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek),
        static: mode === 'static',
      }}
      tabIndex={mode === 'static' ? -1 : 0}
      onClick={
        mode === 'static'
          ? undefined
          : () => {
              onViewChange?.('day');
              onDateChange?.(toDateString(day));
            }
      }
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
    const dayEvents = (weekEvents.regularEvents[day] || []).map((event) => {
      const eventIsAllDay = isAllDayEvent({ event, date: day });
      const isDraggable = !eventIsAllDay && dragDrop.isDraggableEvent(event);

      return (
        <ScheduleEvent
          key={event.id}
          event={event}
          autoSize
          hanging={event.position.hanging}
          draggable={isDraggable}
          renderEventBody={renderEventBody}
          radius={radius}
          mode={mode}
          style={{
            position: 'absolute',
            top: `calc(${event.position.top}% + 1px)`,
            left: `${event.position.offset}%`,
            width: `${event.position.width}%`,
            height: `calc(${event.position.height}% - 1px)`,
          }}
        />
      );
    });

    return (
      <WeekViewDay
        key={day}
        day={day}
        slots={slots}
        getStyles={getStyles}
        weekendDays={weekendDays}
        highlightBusinessHours={highlightBusinessHours}
        businessHours={businessHours}
        labels={labels}
        withDragDrop={withDragDrop}
        mode={mode}
        onSlotDragOver={handleSlotDragOver}
        onSlotDragLeave={dragDrop.handleDragLeave}
        onSlotDrop={(e, dayStr, slotTime) => {
          const slotIndex = slots.findIndex((s) => s.startTime === slotTime);
          handleSlotDrop(e, dayStr, slotTime, slotIndex);
        }}
        dropTargetSlotIndex={
          dragDrop.dropTarget?.day === day ? dragDrop.dropTarget.slotIndex : undefined
        }
      >
        {dayEvents}
      </WeekViewDay>
    );
  });

  const allDaySlots = weekdays.map((day) => (
    <UnstyledButton
      aria-label={`${getLabel('allDay', labels)} ${dayjs(day).format('YYYY-MM-DD')}`}
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
      mode={mode}
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

  const content = (
    <Box {...getStyles('weekView')} mod={{ static: mode === 'static' }} {...others}>
      {withHeader && (
        <ScheduleHeader {...stylesApiProps}>
          <ScheduleHeader.Previous
            {...stylesApiProps}
            onClick={() =>
              onDateChange?.(previousWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)))
            }
            labels={labels}
            {...previousControlProps}
          />

          <ScheduleHeader.Control {...stylesApiProps} interactive={false} miw={140}>
            {getWeekLabel({
              weekdays,
              locale: ctx.getLocale(locale),
              weekLabelFormat,
              renderWeekLabel,
            })}
          </ScheduleHeader.Control>

          <ScheduleHeader.Next
            {...stylesApiProps}
            onClick={() => onDateChange?.(nextWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)))}
            labels={labels}
            {...nextControlProps}
          />

          <ScheduleHeader.Today
            {...stylesApiProps}
            onClick={() => onDateChange?.(toDateString(dayjs()))}
            labels={labels}
            {...todayControlProps}
          />

          <ScheduleHeader.ViewSelect
            value="week"
            onChange={onViewChange}
            ml="auto"
            labels={labels}
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
        mod={{ 'with-weekends': withWeekendDays }}
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
                  <div {...getStyles('weekViewWeekLabel')}>{getLabel('week', labels)}</div>
                  <div {...getStyles('weekViewWeekNumber')}>{getWeekNumber(date)}</div>
                </>
              )}
            </div>

            {weekdaysLabels}
          </Box>

          {withAllDaySlots && (
            <div {...getStyles('weekViewAllDaySlots')}>
              <div {...getStyles('weekViewAllDaySlotsLabel')}>{getLabel('allDay', labels)}</div>
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

  if (withDragDrop) {
    return <DragContext.Provider value={dragDrop.dragContextValue}>{content}</DragContext.Provider>;
  }

  return content;
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
