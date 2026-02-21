import dayjs from 'dayjs';
import { useCallback, useRef } from 'react';
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
import { useSlotDragSelect } from '../../hooks/use-slot-drag-select';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DateTimeStringValue,
  ScheduleEventData,
  ScheduleMode,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateDropTime,
  clampIntervalMinutes,
  formatDate,
  getBusinessHoursMod,
  getDayTimeIntervals,
  getVisibleEvents,
  isAllDayEvent,
  toDateString,
} from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { DragContext } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from '../MoreEvents/MoreEvents';
import {
  RenderEvent,
  RenderEventBody,
  ScheduleEvent,
  ScheduleEventStylesNames,
} from '../ScheduleEvent/ScheduleEvent';
import { MonthYearSelectStylesNames } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import classes from './DayView.module.css';
import { getDayViewEvents } from './get-day-view-events/get-day-view-events';

export type DayViewStylesNames =
  | 'dayView'
  | 'dayViewInner'
  | 'dayViewScrollArea'
  | 'dayViewAllDay'
  | 'dayViewAllDayEvents'
  | 'dayViewSlot'
  | 'dayViewSlots'
  | 'dayViewTimeSlots'
  | 'dayViewSlotLabel'
  | 'dayViewSlotLabels'
  | MoreEventsStylesNames
  | ScheduleEventStylesNames
  | Exclude<CombinedScheduleHeaderStylesNames, MonthYearSelectStylesNames>
  | CurrentTimeIndicatorStylesNames;

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

  /** Events to display, must be a stable reference */
  events?: ScheduleEventData[];

  /** Time slots start time, in `HH:mm:ss` format @default 00:00:00 */
  startTime?: string;

  /** Time slots end time in `HH:mm:ss` format @default 23:59:59 */
  endTime?: string;

  /** Number of minutes for each time slot @default 15 */
  intervalMinutes?: number;

  /** If set, the all-day slot is displayed below the header @default true */
  withAllDaySlot?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default HH:mm  */
  slotLabelFormat?: DateLabelFormat;

  /** Date format in the header @default MMMM D, YYYY */
  headerFormat?: DateLabelFormat;

  /** If set, displays a line indicating the current time. By default, displayed only for the current day. */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default true */
  withCurrentTimeBubble?: boolean;

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

  /** Height of 1hr slot @default 64px */
  slotHeight?: React.CSSProperties['height'];

  /** Height of all-day slot @default 44px */
  allDaySlotHeight?: React.CSSProperties['height'];

  /** Props passed down to the `ScrollArea.Autosize` component */
  scrollAreaProps?: ScrollAreaAutosizeProps & DataAttributes;

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;

  /** Function to customize event body, `event` object is passed as first argument */
  renderEventBody?: RenderEventBody;

  /** Function to fully customize event rendering, receives all props that would be passed to the root element including children */
  renderEvent?: RenderEvent;

  /** Labels override */
  labels?: ScheduleLabelsOverride;

  /** If set to true, highlights business hours with white background @default false */
  highlightBusinessHours?: boolean;

  /** Business hours range in `HH:mm:ss` format @default ['09:00:00', '17:00:00'] */
  businessHours?: [string, string];

  /** If true, events can be dragged and dropped @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped at new time */
  onEventDrop?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue
  ) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends */
  onEventDragEnd?: () => void;

  /** Called when time slot is clicked */
  onTimeSlotClick?: (
    slotStart: DateTimeStringValue,
    slotEnd: DateTimeStringValue,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;

  /** Called when all-day slot is clicked */
  onAllDaySlotClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called when event is clicked */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select time slot ranges @default false */
  withDragSlotSelect?: boolean;

  /** Called when a time slot range is selected by dragging */
  onSlotDragEnd?: (rangeStart: DateTimeStringValue, rangeEnd: DateTimeStringValue) => void;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default default */
  mode?: ScheduleMode;
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
  highlightBusinessHours: false,
  businessHours: ['09:00:00', '17:00:00'],
  withEventsDragAndDrop: false,
  withDragSlotSelect: false,
  mode: 'default',
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
    scrollAreaProps,
    events,
    moreEventsProps,
    renderEventBody,
    renderEvent,
    labels,
    highlightBusinessHours,
    businessHours,
    withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onTimeSlotClick,
    onAllDaySlotClick,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    mode,
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

  const ctx = useDatesContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });
  const slotsRef = useRef<HTMLButtonElement[]>([]);

  const getSlotIndexFromDragPoint = useCallback((event: React.DragEvent) => {
    const slotIndex = slotsRef.current.findIndex((slotNode) => {
      if (!slotNode) {
        return false;
      }

      const rect = slotNode.getBoundingClientRect();
      return event.clientY >= rect.top && event.clientY <= rect.bottom;
    });

    if (slotIndex >= 0) {
      return slotIndex;
    }

    const firstSlot = slotsRef.current[0];
    const lastSlot = slotsRef.current[slotsRef.current.length - 1];

    if (!firstSlot || !lastSlot) {
      return null;
    }

    const firstRect = firstSlot.getBoundingClientRect();
    const lastRect = lastSlot.getBoundingClientRect();

    if (event.clientY < firstRect.top) {
      return 0;
    }

    if (event.clientY > lastRect.bottom) {
      return slotsRef.current.length - 1;
    }

    return null;
  }, []);

  const handleSlotKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, slotIndex: number) => {
    const direction = event.key;
    if (direction === 'ArrowDown' && slotIndex < slots.length - 1) {
      event.preventDefault();
      slotsRef.current[slotIndex + 1]?.focus();
    } else if (direction === 'ArrowUp' && slotIndex > 0) {
      event.preventDefault();
      slotsRef.current[slotIndex - 1]?.focus();
    }
  };

  const slotDragSelect = useSlotDragSelect({
    enabled: withDragSlotSelect && mode !== 'static',
    onDragEnd: (startIndex, endIndex) => {
      if (!onSlotDragEnd) {
        return;
      }
      const slotDate = dayjs(date).format('YYYY-MM-DD');
      onSlotDragEnd(
        `${slotDate} ${slots[startIndex].startTime}`,
        `${slotDate} ${slots[endIndex].endTime}`
      );
    },
  });

  const eventsData = getDayViewEvents({ events, date, startTime, endTime });

  const dragDrop = useDragDropHandlers({
    enabled: withEventsDragAndDrop,
    mode,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    calculateDropTarget: (slotIndex: number, draggedEvent: ScheduleEventData) => {
      const slotTime = slots[slotIndex].startTime;
      return calculateDropTime({
        draggedEvent,
        targetDate: date,
        targetSlotTime: slotTime,
        intervalMinutes,
      });
    },
  });

  const eventsNodes = eventsData.regularEvents.map((event) => {
    const eventIsAllDay = isAllDayEvent({ event, date });
    const isDraggable = !eventIsAllDay && dragDrop.isDraggableEvent(event);

    return (
      <ScheduleEvent
        event={event}
        key={event.id}
        renderEventBody={renderEventBody}
        renderEvent={renderEvent}
        autoSize
        draggable={isDraggable}
        mode={mode}
        onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
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
    );
  });

  const allDayEventsCount = getVisibleEvents({
    maxEvents: 2,
    totalEvents: eventsData.allDayEvents.length,
  });

  const allDayEventsNodes = eventsData.allDayEvents
    .slice(0, allDayEventsCount.visibleEventsCount)
    .map((event) => (
      <ScheduleEvent
        key={event.id}
        event={event}
        renderEventBody={renderEventBody}
        renderEvent={renderEvent}
        style={{ maxHeight: '50%' }}
        nowrap
        autoSize
        mode={mode}
        onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
        {...stylesApiProps}
      />
    ));

  const dayGroup = dayjs(date).format('YYYY-MM-DD');

  const items = slots.map((slot, index) => {
    const isDropTarget = dragDrop.isDropTarget(index);
    const isDragSelected = slotDragSelect.isSlotSelected(index, dayGroup);

    return (
      <UnstyledButton
        {...getStyles('dayViewSlot')}
        key={slot.startTime}
        ref={(node) => {
          slotsRef.current[index] = node!;
        }}
        mod={{
          'hour-start': slot.isHourStart,
          ...getBusinessHoursMod({
            time: slot.startTime,
            businessHours,
            highlightBusinessHours,
          }),
          'drop-target': isDropTarget,
          'drag-selected': isDragSelected,
          static: mode === 'static',
        }}
        __vars={{ '--slot-size': `${clampIntervalMinutes(intervalMinutes) / 60}` }}
        aria-label={`${getLabel('timeSlot', labels)} ${slot.startTime} - ${slot.endTime}`}
        tabIndex={mode === 'static' ? -1 : index === 0 ? 0 : -1}
        data-drag-slot-index={withDragSlotSelect && mode !== 'static' ? index : undefined}
        data-drag-slot-group={withDragSlotSelect && mode !== 'static' ? dayGroup : undefined}
        onKeyDown={mode === 'static' ? undefined : (e) => handleSlotKeyDown(e, index)}
        onPointerDown={
          withDragSlotSelect && mode !== 'static'
            ? (e) => slotDragSelect.handleSlotPointerDown(e, index, dayGroup)
            : undefined
        }
        onClick={
          mode === 'static' || !onTimeSlotClick
            ? undefined
            : (event) => {
                const slotDate = dayjs(date).format('YYYY-MM-DD');
                onTimeSlotClick(
                  `${slotDate} ${slot.startTime}`,
                  `${slotDate} ${slot.endTime}`,
                  event
                );
              }
        }
        onDragOver={
          withEventsDragAndDrop && mode !== 'static' ? (event) => event.preventDefault() : undefined
        }
      />
    );
  });

  const slotsLabels = slots.reduce<React.ReactNode[]>((acc, slot) => {
    if (slot.isHourStart) {
      const slotTime = dayjs(`${dayjs(date).format('YYYY-MM-DD')} ${slot.startTime}`);
      const label = formatDate({
        locale: ctx.getLocale(locale),
        date: slotTime,
        format: slotLabelFormat,
      });

      acc.push(
        <Box
          {...getStyles('dayViewSlotLabel')}
          key={slot.startTime}
          mod={getBusinessHoursMod({
            time: slot.startTime,
            businessHours,
            highlightBusinessHours,
          })}
        >
          {label}
        </Box>
      );
    }
    return acc;
  }, []);

  const content = (
    <Box
      {...getStyles('dayView')}
      mod={{ static: mode === 'static', 'slot-dragging': slotDragSelect.isDragging }}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="day"
          navigationHandlers={{
            previous: () => toDateString(dayjs(date).subtract(1, 'day')),
            next: () => toDateString(dayjs(date).add(1, 'day')),
            today: () => toDateString(dayjs()),
          }}
          control={{
            title: formatDate({ locale: ctx.getLocale(locale), date, format: headerFormat }),
            miw: 140,
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

      <ScrollArea.Autosize
        scrollbarSize={4}
        {...scrollAreaProps}
        {...getStyles('dayViewScrollArea', {
          className: scrollAreaProps?.className,
          style: scrollAreaProps?.style,
        })}
      >
        <Box {...getStyles('dayViewInner')}>
          <div {...getStyles('dayViewSlotLabels')}>
            {withAllDaySlot && (
              <Box {...getStyles('dayViewSlotLabel')} mod={{ 'all-day': true }}>
                {getLabel('allDay', labels)}
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
                      renderEventBody={renderEventBody}
                      mode={mode}
                      {...stylesApiProps}
                      {...moreEventsProps}
                    />
                  )}
                </div>
                <UnstyledButton
                  {...getStyles('dayViewSlot')}
                  mod={{ 'all-day': true }}
                  aria-label={`${getLabel('timeSlot', labels)} ${getLabel('allDay', labels)}`}
                  onClick={
                    mode === 'static' || !onAllDaySlotClick
                      ? undefined
                      : (e) => {
                          onAllDaySlotClick(dayjs(date).format('YYYY-MM-DD'), e);
                        }
                  }
                />
              </div>
            )}

            <div
              {...getStyles('dayViewTimeSlots')}
              onDragOver={
                withEventsDragAndDrop && mode !== 'static'
                  ? (event) => {
                      const slotIndex = getSlotIndexFromDragPoint(event);
                      if (slotIndex !== null) {
                        dragDrop.handleDragOver(event, slotIndex);
                      }
                    }
                  : undefined
              }
              onDragLeave={
                withEventsDragAndDrop && mode !== 'static' ? dragDrop.handleDragLeave : undefined
              }
              onDrop={
                withEventsDragAndDrop && mode !== 'static'
                  ? (event) => {
                      const slotIndex = getSlotIndexFromDragPoint(event);
                      if (slotIndex !== null) {
                        dragDrop.handleDrop(event, slotIndex);
                      }
                    }
                  : undefined
              }
            >
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
        </Box>
      </ScrollArea.Autosize>
    </Box>
  );

  if (withEventsDragAndDrop) {
    return <DragContext.Provider value={dragDrop.dragContextValue}>{content}</DragContext.Provider>;
  }

  return content;
});

DayView.displayName = '@mantine/schedule/DayView';
DayView.classes = classes;
DayView.varsResolver = varsResolver;
