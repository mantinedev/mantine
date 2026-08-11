import dayjs from 'dayjs';
import { useCallback, useMemo, useRef, useState } from 'react';
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
  ScrollAreaProps,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { useInterval, useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { useDragDropHandlers } from '../../hooks/use-drag-drop-handlers';
import { useHorizontalEventResize } from '../../hooks/use-horizontal-event-resize';
import { useSlotDragSelect } from '../../hooks/use-slot-drag-select';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import {
  AnyDateValue,
  DateLabelFormat,
  DateStringValue,
  DateTimeStringValue,
  ScheduleEventData,
  ScheduleMode,
  ScheduleResourceData,
  ScheduleResourceGroup,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateDropTime,
  expandRecurringEvents,
  formatDate,
  getBusinessHoursMod,
  getCurrentTimePosition,
  getDayTimeIntervals,
  getGroupToResourceIdMap,
  getIndexFromDragPoint,
  getOrderedResources,
  getTimeAxisEventStyle,
  handleResourcesGridKeyDown,
  isAllDayEvent,
  isInTimeRange,
  ResourcesGridControlsRef,
  toDateString,
} from '../../utils';
import { DragContext, DragContextValue } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from '../MoreEvents/MoreEvents';
import { RenderEvent, RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getOverlapClusters } from './get-overlap-clusters/get-overlap-clusters';
import { getResourcesDayViewEvents } from './get-resources-day-view-events/get-resources-day-view-events';
import { ResourcesDayViewRow } from './ResourcesDayViewColumn';
import classes from './ResourcesDayView.module.css';

export type ResourcesDayViewStylesNames =
  | 'resourcesDayView'
  | 'resourcesDayViewRoot'
  | 'resourcesDayViewInner'
  | 'resourcesDayViewTimeLabelsRow'
  | 'resourcesDayViewScrollArea'
  | 'resourcesDayViewCorner'
  | 'resourcesDayViewTimeLabel'
  | 'resourcesDayViewResourceLabel'
  | 'resourcesDayViewRow'
  | 'resourcesDayViewRowSlot'
  | 'resourcesDayViewRowSlots'
  | 'resourcesDayViewBackgroundEvent'
  | 'resourcesDayViewAllDayEvent'
  | 'resourcesDayViewCurrentTimeIndicator'
  | 'resourcesDayViewCurrentTimeIndicatorLine'
  | 'resourcesDayViewCurrentTimeIndicatorThumb'
  | 'resourcesDayViewCurrentTimeIndicatorTimeBubble'
  | 'resourcesDayViewEventWrapper'
  | 'resourcesDayViewResizeHandle'
  | 'resourcesDayViewGroupColumn'
  | 'resourcesDayViewGroupColumnEmpty'
  | MoreEventsStylesNames
  | CombinedScheduleHeaderStylesNames;

export type ResourcesDayViewCssVariables = {
  resourcesDayView:
    | '--resources-day-view-radius'
    | '--resources-day-view-slot-width'
    | '--resources-day-view-row-height'
    | '--resources-day-view-group-label-width';
};

export interface ResourcesDayViewProps
  extends BoxProps, StylesApiProps<ResourcesDayViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Day to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** List of resources to display as rows */
  resources: ScheduleResourceData[];

  /** Start time for the day view, in `HH:mm:ss` format @default 00:00:00 */
  startTime?: string;

  /** End time for the day view, in `HH:mm:ss` format @default 23:59:59 */
  endTime?: string;

  /** Number of minutes for each interval in the day view. Must divide evenly into an hour (e.g. `15`, `30`) or be a whole number of hours (e.g. `120`, `240`) @default 60 */
  intervalMinutes?: number;

  /** Minimum on-screen size of an event along the time axis, in px. Prevents very short events from collapsing. Larger values make brief events easier to see but extend them past their real start time. @default 1 */
  minEventSize?: number;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default HH:mm */
  slotLabelFormat?: DateLabelFormat;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Time to scroll to on initial render, in `HH:mm:ss` format */
  startScrollTime?: string;

  /** Props passed down to the `ScrollArea` component */
  scrollAreaProps?: Partial<ScrollAreaProps> & DataAttributes;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** If set, displays a vertical line indicating the current time. By default, displayed only for the current day. */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default true */
  withCurrentTimeBubble?: boolean;

  /** A function to get the current time, called on every tick. Can be used to display the current time indicator in a different timezone. @default () => dayjs() */
  getCurrentTime?: () => AnyDateValue;

  /** If set, the header is displayed @default true */
  withHeader?: boolean;

  /** Called when view level select button is clicked */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Props passed to previous control */
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to next control */
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to today control */
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to view level select */
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;

  /** Dayjs format for header label @default 'MMMM D, YYYY' */
  headerFormat?: DateLabelFormat;

  /** List of events to display */
  events?: ScheduleEventData[];

  /** Width of each time slot column @default 80px */
  slotWidth?: React.CSSProperties['width'];

  /** Height of each resource row @default 64px */
  rowHeight?: React.CSSProperties['height'];

  /** Labels override */
  labels?: ScheduleLabelsOverride;

  /** If set to true, highlights business hours with white background @default false */
  highlightBusinessHours?: boolean;

  /** Business hours range in `HH:mm:ss` format @default ['09:00:00', '17:00:00'] */
  businessHours?: [string, string];

  /** Function to customize event body */
  renderEventBody?: RenderEventBody;

  /** Function to fully customize event rendering */
  renderEvent?: RenderEvent;

  /** Function to customize resource label rendering */
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;

  /** List of resource groups to display as a column to the left of resource labels */
  groups?: ScheduleResourceGroup[];

  /** Function to customize group label rendering */
  renderGroupLabel?: (group: ScheduleResourceGroup) => React.ReactNode;

  /** Width of the group label column @default 80px */
  groupLabelWidth?: React.CSSProperties['width'];

  /** If true, events can be dragged and dropped @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped at new time, includes target resourceId */
  onEventDrop?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends */
  onEventDragEnd?: () => void;

  /** Called when time slot is clicked, includes resourceId */
  onTimeSlotClick?: (data: {
    slotStart: DateTimeStringValue;
    slotEnd: DateTimeStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => void;

  /** Called when event is clicked */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select time slot ranges @default false */
  withDragSlotSelect?: boolean;

  /** Called when a time slot range is selected by dragging, includes resourceId */
  onSlotDragEnd?: (data: {
    rangeStart: DateTimeStringValue;
    rangeEnd: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** Interaction mode @default default */
  mode?: ScheduleMode;

  /** Called when an external item is dropped onto the schedule */
  onExternalEventDrop?: (data: {
    dataTransfer: DataTransfer;
    dropDateTime: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** If true, events can be resized by dragging their left/right edges @default false */
  withEventResize?: boolean;

  /** Called when event is resized */
  onEventResize?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;

  /** Function to determine if event can be resized */
  canResizeEvent?: (event: ScheduleEventData) => boolean;

  /** Max number of generated recurring instances per recurring series @default 2000 */
  recurrenceExpansionLimit?: number;

  /** Maximum number of events visible per time slot before "+more" indicator shows, minimum value is 1 @default 2 */
  maxEventsPerTimeSlot?: number;

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;
}

export type ResourcesDayViewFactory = Factory<{
  props: ResourcesDayViewProps;
  ref: HTMLDivElement;
  stylesNames: ResourcesDayViewStylesNames;
  vars: ResourcesDayViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'ResourcesDayView',
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
  minEventSize: 1,
  withHeader: true,
  headerFormat: 'MMMM D, YYYY',
  highlightBusinessHours: false,
  businessHours: ['09:00:00', '17:00:00'],
  withEventsDragAndDrop: false,
  withDragSlotSelect: false,
  withEventResize: false,
  mode: 'default',
  maxEventsPerTimeSlot: 2,
} satisfies Partial<ResourcesDayViewProps>;

const varsResolver = createVarsResolver<ResourcesDayViewFactory>(
  (_theme, { radius, slotWidth, rowHeight, groupLabelWidth }) => ({
    resourcesDayView: {
      '--resources-day-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-day-view-slot-width': rem(slotWidth),
      '--resources-day-view-row-height': rem(rowHeight),
      '--resources-day-view-group-label-width': rem(groupLabelWidth),
    },
  })
);

export const ResourcesDayView = factory<ResourcesDayViewFactory>((_props) => {
  const props = useProps('ResourcesDayView', defaultProps, _props);
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
    resources,
    intervalMinutes,
    minEventSize,
    slotLabelFormat,
    radius,
    startScrollTime,
    scrollAreaProps,
    locale,
    withCurrentTimeIndicator: _withCurrentTimeIndicator,
    withCurrentTimeBubble = true,
    getCurrentTime,
    __staticSelector,
    withHeader,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,
    headerFormat,
    events,
    slotWidth,
    rowHeight,
    labels,
    highlightBusinessHours,
    businessHours,
    renderEventBody,
    renderEvent,
    renderResourceLabel,
    groups,
    renderGroupLabel,
    groupLabelWidth,
    withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onTimeSlotClick,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    mode,
    onExternalEventDrop,
    withEventResize,
    onEventResize,
    canResizeEvent,
    recurrenceExpansionLimit,
    maxEventsPerTimeSlot: _maxEventsPerTimeSlot,
    moreEventsProps,
    ...others
  } = props;

  const maxEventsPerTimeSlot =
    _maxEventsPerTimeSlot !== undefined ? Math.max(1, _maxEventsPerTimeSlot) : undefined;

  const getStyles = useStyles<ResourcesDayViewFactory>({
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
    rootSelector: 'resourcesDayView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ResourcesDayViewFactory>({
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

  const theme = useMantineTheme();
  const [scrolled, setScrolled] = useState(false);
  const [scrolledX, setScrolledX] = useState(false);
  const ctx = useDatesContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });
  const { orderedResources, groupRanges, resourceGroupMap } = useMemo(
    () => getOrderedResources(resources, groups),
    [resources, groups]
  );
  const hasGroups = groupRanges.length > 0;

  type DropTargetSlot = { resourceId: string | number; slotIndex: number };

  const handleExternalDrop = useCallback(
    (e: React.DragEvent, target: DropTargetSlot) => {
      if (!onExternalEventDrop) {
        return;
      }
      const slotDate = dayjs(date).format('YYYY-MM-DD');
      onExternalEventDrop({
        dataTransfer: e.dataTransfer,
        dropDateTime: `${slotDate} ${slots[target.slotIndex].startTime}`,
        resourceId: target.resourceId,
      });
    },
    [onExternalEventDrop, slots, date]
  );

  const lastDropResourceId = useRef<string | number | undefined>(undefined);

  const handleInternalEventDrop = useCallback(
    (data: {
      eventId: string | number;
      newStart: DateTimeStringValue;
      newEnd: DateTimeStringValue;
      event: ScheduleEventData;
    }) => {
      onEventDrop?.({ ...data, resourceId: lastDropResourceId.current });
    },
    [onEventDrop]
  );

  const dragDrop = useDragDropHandlers<DropTargetSlot>({
    enabled: withEventsDragAndDrop,
    mode,
    onEventDrop: handleInternalEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    calculateDropTarget: (target: DropTargetSlot, draggedEvent: ScheduleEventData) => {
      lastDropResourceId.current = target.resourceId;
      const slotTime = slots[target.slotIndex].startTime;
      return calculateDropTime({
        draggedEvent,
        targetDate: dayjs(date).format('YYYY-MM-DD'),
        targetSlotTime: slotTime,
        intervalMinutes,
      });
    },
    onExternalDrop: onExternalEventDrop ? handleExternalDrop : undefined,
  });

  const groupToResourceId = useMemo(() => getGroupToResourceIdMap(resources), [resources]);

  const slotDragSelect = useSlotDragSelect({
    enabled: withDragSlotSelect && mode !== 'static',
    onDragEnd: (startIndex, endIndex, group) => {
      if (!onSlotDragEnd) {
        return;
      }
      const slotDate = dayjs(date).format('YYYY-MM-DD');
      onSlotDragEnd({
        rangeStart: `${slotDate} ${slots[startIndex].startTime}`,
        rangeEnd: `${slotDate} ${slots[endIndex].endTime}`,
        resourceId: groupToResourceId.get(group) ?? group,
      });
    },
  });

  const eventResize = useHorizontalEventResize({
    enabled: withEventResize,
    mode,
    startTime,
    endTime,
    intervalMinutes,
    onEventResize,
    canResizeEvent,
  });

  const withDragHandlers = (withEventsDragAndDrop || !!onExternalEventDrop) && mode !== 'static';

  const handleTimeSlotClick = (
    resourceId: string | number,
    slotTime: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!onTimeSlotClick) {
      return;
    }

    const slotDate = dayjs(date).format('YYYY-MM-DD');
    const slotIndex = slots.findIndex((s) => s.startTime === slotTime);
    if (slotIndex === -1) {
      return;
    }

    const slot = slots[slotIndex];
    onTimeSlotClick({
      slotStart: `${slotDate} ${slot.startTime}`,
      slotEnd: `${slotDate} ${slot.endTime}`,
      nativeEvent: e,
      resourceId,
    });
  };

  const dateStr = dayjs(date).format('YYYY-MM-DD');
  const resolveNow = () => (getCurrentTime ? dayjs(getCurrentTime()) : dayjs());
  const now = resolveNow();
  const isToday = dayjs(date).isSame(now, 'day');
  const withCurrentTimeIndicator = _withCurrentTimeIndicator ?? isToday;

  const [, setTimeIndicatorTick] = useState(0);
  useInterval(() => setTimeIndicatorTick((tick) => tick + 1), 60000, { autoInvoke: true });
  const timeIndicatorOffset = getCurrentTimePosition({ startTime, endTime, intervalMinutes, now });
  const showTimeIndicator =
    withCurrentTimeIndicator && isInTimeRange({ date: now.toDate(), startTime, endTime });
  const formattedCurrentTime = withCurrentTimeBubble
    ? formatDate({ locale: ctx.getLocale(locale), date: now, format: slotLabelFormat })
    : '';

  const expandedEvents = useMemo(
    () =>
      expandRecurringEvents({
        events,
        rangeStart: dayjs(date).startOf('day').toDate(),
        rangeEnd: dayjs(date).endOf('day').toDate(),
        expansionLimit: recurrenceExpansionLimit,
      }),
    [events, date, recurrenceExpansionLimit]
  );

  const resourceEvents = useMemo(
    () =>
      getResourcesDayViewEvents({
        date,
        events: expandedEvents,
        resources,
        startTime,
        endTime,
        intervalMinutes,
      }),
    [date, expandedEvents, resources, startTime, endTime, intervalMinutes]
  );

  const timeLabels = slots.map((interval) => {
    const intervalTime = dayjs(`${dateStr} ${interval.startTime}`);
    const label = formatDate({
      date: intervalTime,
      locale: ctx.getLocale(locale),
      format: slotLabelFormat,
    });

    return (
      <Box
        {...getStyles('resourcesDayViewTimeLabel')}
        key={interval.startTime}
        mod={{
          'hour-start': interval.isHourStart,
          ...getBusinessHoursMod({
            time: interval.startTime,
            businessHours,
            highlightBusinessHours,
          }),
        }}
      >
        {label}
      </Box>
    );
  });

  const slotsRef: ResourcesGridControlsRef = useRef<HTMLButtonElement[][]>([]);
  const rowSlotsContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const mergedViewportRef = useMergedRef(viewportRef, scrollAreaProps?.viewportRef);

  const firstSlotIndex = { resourceIndex: 0, slotIndex: 0 };

  useIsomorphicEffect(() => {
    if (!startScrollTime || !viewportRef.current) {
      return;
    }

    const firstResourceSlots = slotsRef.current[0];
    if (!firstResourceSlots || firstResourceSlots.length === 0) {
      return;
    }

    const targetIndex = slots.findIndex((s) => s.startTime >= startScrollTime);
    if (targetIndex < 0) {
      return;
    }

    const targetSlot = firstResourceSlots[targetIndex];
    if (!targetSlot) {
      return;
    }

    const slotRect = targetSlot.getBoundingClientRect();
    const viewportRect = viewportRef.current.getBoundingClientRect();
    const cornerEl = viewportRef.current.querySelector(`.${classes.resourcesDayViewCorner}`);
    const labelWidth = cornerEl ? cornerEl.getBoundingClientRect().width : 0;
    viewportRef.current.scrollTo({
      left: slotRect.left - viewportRect.left - labelWidth,
      top: 0,
    });
  }, []);

  const getSlotIndexFromDragPoint = useCallback((event: React.DragEvent, resourceIndex: number) => {
    return getIndexFromDragPoint(slotsRef.current[resourceIndex] ?? [], event.clientX);
  }, []);

  const handleSlotKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    resourceIndex: number,
    slotIndex: number
  ) => {
    handleResourcesGridKeyDown({
      controlsRef: slotsRef,
      resourceIndex,
      slotIndex,
      event,
    });
  };

  const rows = orderedResources.map((resource, resourceIndex) => {
    const allBgEvents = [
      ...(resourceEvents.backgroundTimedEvents[resource.id] || []),
      ...(resourceEvents.backgroundAllDayEvents[resource.id] || []),
    ];

    // oxlint-disable-next-line react/jsx-key
    const backgroundEventNodes = allBgEvents.map((event) => {
      const colors = theme.variantColorResolver({
        color: event.color || theme.primaryColor,
        theme,
        variant: 'light',
        autoContrast: true,
      });

      const bgEventBody =
        typeof renderEventBody === 'function' ? renderEventBody(event) : event.title;

      const bgEventProps = {
        key: `bg-${event.id}`,
        ...getStyles('resourcesDayViewBackgroundEvent', {
          style: {
            left: `${event.position.top}%`,
            width: `${event.position.height}%`,
            top: 0,
            height: '100%',
          },
        }),
        __vars: {
          '--bg-event-bg': colors.background,
          '--bg-event-color': colors.color,
        },
        children: bgEventBody,
      };

      if (typeof renderEvent === 'function') {
        return renderEvent(event, bgEventProps as any);
      }

      return <Box {...bgEventProps} />;
    });

    const allRegularEvents = (resourceEvents.regularEvents[resource.id] || []).filter(
      (event) => !isAllDayEvent({ event, date })
    );

    const visibleRegularEvents =
      maxEventsPerTimeSlot !== undefined
        ? allRegularEvents.filter((event) => event.position.column < maxEventsPerTimeSlot)
        : allRegularEvents;

    const regularEvents = visibleRegularEvents.map((event) => {
      const isDraggable = dragDrop.isDraggableEvent(event);
      const isResizable = eventResize.isResizableEvent(event);
      const resizePosition = eventResize.getResizePosition(event.id);
      const eventLeft = resizePosition ? resizePosition.left : event.position.top;
      const eventWidth = resizePosition ? resizePosition.width : event.position.height;

      const adjustPosition =
        maxEventsPerTimeSlot !== undefined && event.position.overlaps > maxEventsPerTimeSlot;

      const eventColors = isResizable
        ? theme.variantColorResolver({
            color: event.color || theme.primaryColor,
            theme,
            variant: event.variant || 'light',
            autoContrast: true,
          })
        : null;

      const isThisEventResizing = resizePosition !== null;
      const activeEdge =
        isThisEventResizing && eventResize.resizingEdge ? eventResize.resizingEdge : null;

      return (
        <Box
          key={event.id}
          {...getStyles('resourcesDayViewEventWrapper')}
          __vars={eventColors ? { '--event-color': eventColors.color } : undefined}
          data-resizing={isThisEventResizing || undefined}
          style={{
            ...getTimeAxisEventStyle({
              start: eventLeft,
              span: eventWidth,
              minSize: minEventSize,
            }),
            top: adjustPosition
              ? `calc((100% - 22px) * ${event.position.column} / ${maxEventsPerTimeSlot})`
              : `${event.position.offset}%`,
            height: adjustPosition
              ? `calc((100% - 22px) / ${maxEventsPerTimeSlot})`
              : `${event.position.width}%`,
          }}
        >
          <ScheduleEvent
            event={event}
            autoSize
            nowrap
            draggable={isDraggable}
            isResizing={isThisEventResizing}
            renderEventBody={renderEventBody}
            renderEvent={renderEvent}
            radius={radius}
            mode={mode}
            onClick={
              onEventClick
                ? (e) => {
                    if (!eventResize.wasResizing()) {
                      onEventClick(event, e);
                    }
                  }
                : undefined
            }
            style={{ width: '100%', height: '100%', padding: 0 }}
          />
          {isResizable && mode !== 'static' && (
            <>
              <div
                {...getStyles('resourcesDayViewResizeHandle')}
                data-edge="start"
                data-active={activeEdge === 'start' || undefined}
                onPointerDown={(e) => {
                  const container = rowSlotsContainersRef.current[resourceIndex];
                  if (container) {
                    eventResize.handleResizeStart({
                      event,
                      edge: 'start',
                      container,
                      originalLeft: event.position.top,
                      originalWidth: event.position.height,
                      eventDate: dateStr,
                      pointerEvent: e,
                    });
                  }
                }}
              />
              <div
                {...getStyles('resourcesDayViewResizeHandle')}
                data-edge="end"
                data-active={activeEdge === 'end' || undefined}
                onPointerDown={(e) => {
                  const container = rowSlotsContainersRef.current[resourceIndex];
                  if (container) {
                    eventResize.handleResizeStart({
                      event,
                      edge: 'end',
                      container,
                      originalLeft: event.position.top,
                      originalWidth: event.position.height,
                      eventDate: dateStr,
                      pointerEvent: e,
                    });
                  }
                }}
              />
            </>
          )}
        </Box>
      );
    });

    const allDayEvents = resourceEvents.allDayEvents[resource.id] || [];

    const allDayEventNodes = allDayEvents.map((event, index) => (
      <Box
        key={`all-day-${event.id}`}
        {...getStyles('resourcesDayViewAllDayEvent', {
          style: {
            top: `calc(${index} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`,
          },
        })}
      >
        <ScheduleEvent
          event={event}
          autoSize
          nowrap
          renderEventBody={renderEventBody}
          renderEvent={renderEvent}
          radius={radius}
          mode={mode}
          onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
    ));

    const moreEventsForResource =
      maxEventsPerTimeSlot !== undefined
        ? getOverlapClusters(allRegularEvents)
            .filter((cluster) => cluster.some((e) => e.position.column >= maxEventsPerTimeSlot))
            .map((cluster) => {
              const hiddenCount = cluster.filter(
                (e) => e.position.column >= maxEventsPerTimeSlot
              ).length;
              const leftPercent = Math.min(...cluster.map((e) => e.position.top));
              const rightPercent = Math.max(
                ...cluster.map((e) => e.position.top + e.position.height)
              );

              return (
                <MoreEvents
                  key={`more-${cluster[0].id}`}
                  events={cluster}
                  moreEventsCount={hiddenCount}
                  mode={mode}
                  labels={labels}
                  renderEventBody={renderEventBody}
                  renderEvent={renderEvent}
                  onEventClick={onEventClick}
                  style={{
                    position: 'absolute',
                    left: `calc(${leftPercent}% + 1px)`,
                    width: `calc(${rightPercent - leftPercent}% - 2px)`,
                    bottom: 0,
                    height: '22px',
                    paddingInline: 4,
                    zIndex: 4,
                  }}
                  {...stylesApiProps}
                  {...moreEventsProps}
                />
              );
            })
        : [];

    return (
      <ResourcesDayViewRow
        key={resource.id}
        resource={resource}
        resourceIndex={resourceIndex}
        date={dateStr}
        slots={slots}
        getStyles={getStyles}
        labels={labels}
        highlightBusinessHours={highlightBusinessHours}
        businessHours={businessHours}
        withEventsDragAndDrop={withDragHandlers}
        mode={mode}
        slotsRef={slotsRef}
        firstSlotIndex={firstSlotIndex}
        onSlotKeyDown={handleSlotKeyDown}
        onSlotClick={handleTimeSlotClick}
        onRowSlotsDragOver={(event, resourceId, resIdx) => {
          const slotIndex = getSlotIndexFromDragPoint(event, resIdx);
          if (slotIndex !== null) {
            dragDrop.handleDragOver(event, { resourceId, slotIndex });
          }
        }}
        onRowSlotsDragLeave={dragDrop.handleDragLeave}
        onRowSlotsDrop={(event, resourceId, resIdx) => {
          const slotIndex = getSlotIndexFromDragPoint(event, resIdx);
          if (slotIndex !== null) {
            dragDrop.handleDrop(event, { resourceId, slotIndex });
          }
        }}
        dropTargetSlotIndex={
          dragDrop.dropTarget?.resourceId === resource.id
            ? dragDrop.dropTarget.slotIndex
            : undefined
        }
        withDragSlotSelect={withDragSlotSelect}
        onSlotPointerDown={slotDragSelect.handleSlotPointerDown}
        isSlotDragSelected={slotDragSelect.isSlotSelected}
        rowSlotsContainerRef={(node) => {
          rowSlotsContainersRef.current[resourceIndex] = node;
        }}
        renderResourceLabel={renderResourceLabel}
        renderGroupLabel={renderGroupLabel}
        scrolledX={scrolledX}
        groupInfo={hasGroups ? resourceGroupMap[resourceIndex] : undefined}
        allDayCount={allDayEvents.length}
      >
        {backgroundEventNodes}
        {allDayEventNodes}
        {regularEvents}
        {moreEventsForResource}
      </ResourcesDayViewRow>
    );
  });

  const headerLabel = formatDate({
    date: dayjs(date),
    locale: ctx.getLocale(locale),
    format: headerFormat,
  });

  const content = (
    <Box
      {...getStyles('resourcesDayView')}
      mod={{
        static: mode === 'static',
        'slot-dragging': slotDragSelect.isDragging,
        resizing: eventResize.isResizing,
        'event-interaction': eventResize.isResizing || dragDrop.dragContextValue.isDragging,
      }}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="day"
          navigationHandlers={{
            previous: () => toDateString(dayjs(date).subtract(1, 'day')),
            next: () => toDateString(dayjs(date).add(1, 'day')),
            today: () => toDateString(resolveNow()),
          }}
          control={{
            miw: 140,
            title: headerLabel,
          }}
          labels={labels}
          onDateChange={onDateChange}
          onViewChange={onViewChange}
          previousControlProps={previousControlProps}
          nextControlProps={nextControlProps}
          todayControlProps={todayControlProps}
          viewSelectProps={{ views: ['day', 'week', 'month'] as const, ...viewSelectProps }}
          stylesApiProps={stylesApiProps}
        />
      )}

      <Box {...getStyles('resourcesDayViewRoot')}>
        <ScrollArea
          scrollbarSize={4}
          {...scrollAreaProps}
          {...getStyles('resourcesDayViewScrollArea', {
            className: scrollAreaProps?.className,
            style: scrollAreaProps?.style,
          })}
          onScrollPositionChange={(position) => {
            scrollAreaProps?.onScrollPositionChange?.(position);
            setScrolled(position.y !== 0);
            setScrolledX(position.x !== 0);
          }}
          viewportRef={mergedViewportRef}
        >
          <div {...getStyles('resourcesDayViewInner')}>
            <Box {...getStyles('resourcesDayViewTimeLabelsRow')} mod={{ scrolled }}>
              <div
                {...getStyles('resourcesDayViewCorner')}
                key="corner"
                style={
                  hasGroups
                    ? {
                        flexBasis:
                          'calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))',
                        minWidth:
                          'calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))',
                      }
                    : undefined
                }
              >
                {getLabel('resources', labels)}
              </div>
              {timeLabels}
            </Box>

            {rows}

            {showTimeIndicator && (
              <Box
                {...getStyles('resourcesDayViewCurrentTimeIndicator')}
                __vars={{
                  '--indicator-left-offset': hasGroups
                    ? `calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${timeIndicatorOffset} / 100)`
                    : `calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${timeIndicatorOffset} / 100)`,
                  '--_time-bubble-width': formattedCurrentTime
                    ?.toString()
                    .toLowerCase()
                    .includes('m')
                    ? '64px'
                    : '46px',
                }}
              >
                {withCurrentTimeBubble && (
                  <div {...getStyles('resourcesDayViewCurrentTimeIndicatorTimeBubble')}>
                    {formattedCurrentTime}
                  </div>
                )}
                {!withCurrentTimeBubble && (
                  <div {...getStyles('resourcesDayViewCurrentTimeIndicatorThumb')} />
                )}
                <div {...getStyles('resourcesDayViewCurrentTimeIndicatorLine')} />
              </Box>
            )}
          </div>
        </ScrollArea>
      </Box>
    </Box>
  );

  const dragContextValue = useMemo<DragContextValue>(
    () => dragDrop.dragContextValue,
    [dragDrop.dragContextValue]
  );

  if (withEventsDragAndDrop) {
    return <DragContext.Provider value={dragContextValue}>{content}</DragContext.Provider>;
  }

  return content;
});

ResourcesDayView.displayName = '@mantine/schedule/ResourcesDayView';
ResourcesDayView.classes = classes;
ResourcesDayView.varsResolver = varsResolver;
