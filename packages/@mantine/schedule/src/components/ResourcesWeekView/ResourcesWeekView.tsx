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
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
  ScheduleResourceData,
  ScheduleResourceGroup,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateDropTime,
  formatDate,
  getBusinessHoursMod,
  getCurrentTimePosition,
  getDayTimeIntervals,
  getGroupToResourceIdMap,
  getIndexFromDragPoint,
  getOrderedResources,
  getTimeAxisEventStyle,
  getWeekDays,
  handleResourcesGridKeyDown,
  isAllDayEvent,
  isInTimeRange,
  nextWeek,
  previousWeek,
  ResourcesGridControlsRef,
  toDateString,
} from '../../utils';
import { DragContext, DragContextValue } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from '../MoreEvents/MoreEvents';
import { getOverlapClusters } from '../ResourcesDayView/get-overlap-clusters/get-overlap-clusters';
import { RenderEvent, RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getWeekLabel } from '../WeekView/get-week-label/get-week-label';
import { getResourcesWeekViewEvents } from './get-resources-week-view-events/get-resources-week-view-events';
import { ResourcesWeekViewRow } from './ResourcesWeekViewRow';
import classes from './ResourcesWeekView.module.css';

export type ResourcesWeekViewStylesNames =
  | 'resourcesWeekView'
  | 'resourcesWeekViewRoot'
  | 'resourcesWeekViewInner'
  | 'resourcesWeekViewHeaderRows'
  | 'resourcesWeekViewHeaderContent'
  | 'resourcesWeekViewDayLabelsRow'
  | 'resourcesWeekViewDayLabel'
  | 'resourcesWeekViewTimeLabelsRow'
  | 'resourcesWeekViewScrollArea'
  | 'resourcesWeekViewCorner'
  | 'resourcesWeekViewTimeLabel'
  | 'resourcesWeekViewResourceLabel'
  | 'resourcesWeekViewRow'
  | 'resourcesWeekViewRowSlot'
  | 'resourcesWeekViewRowSlots'
  | 'resourcesWeekViewBackgroundEvent'
  | 'resourcesWeekViewAllDayEvent'
  | 'resourcesWeekViewCurrentTimeIndicator'
  | 'resourcesWeekViewCurrentTimeIndicatorLine'
  | 'resourcesWeekViewCurrentTimeIndicatorThumb'
  | 'resourcesWeekViewCurrentTimeIndicatorTimeBubble'
  | 'resourcesWeekViewEventWrapper'
  | 'resourcesWeekViewResizeHandle'
  | 'resourcesWeekViewGroupColumn'
  | 'resourcesWeekViewGroupColumnEmpty'
  | MoreEventsStylesNames
  | CombinedScheduleHeaderStylesNames;

export type ResourcesWeekViewCssVariables = {
  resourcesWeekView:
    | '--resources-week-view-radius'
    | '--resources-week-view-slot-width'
    | '--resources-week-view-row-height'
    | '--resources-week-view-group-label-width';
};

export interface ResourcesWeekViewProps
  extends BoxProps, StylesApiProps<ResourcesWeekViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;
  date: Date | string;
  onDateChange?: (value: DateStringValue) => void;
  resources: ScheduleResourceData[];
  startTime?: string;
  endTime?: string;
  /** Number of minutes for each interval in the week view. Must divide evenly into an hour (e.g. `15`, `30`) or be a whole number of hours (e.g. `120`, `240`) @default 60 */
  intervalMinutes?: number;
  /** Minimum on-screen size of an event along the time axis, in px. Prevents very short events from collapsing. Larger values make brief events easier to see but extend them past their real start time. @default 1 */
  minEventSize?: number;
  slotLabelFormat?: DateLabelFormat;
  radius?: MantineRadius;
  /** Date and time to scroll to on initial render, in `YYYY-MM-DD HH:mm:ss` format */
  startScrollDateTime?: string;
  scrollAreaProps?: Partial<ScrollAreaProps> & DataAttributes;
  locale?: string;
  withCurrentTimeIndicator?: boolean;
  withCurrentTimeBubble?: boolean;

  /** A function to get the current time, called on every tick. Can be used to display the current time indicator in a different timezone. @default () => dayjs() */
  getCurrentTime?: () => AnyDateValue;

  withHeader?: boolean;
  onViewChange?: (view: ScheduleViewLevel) => void;
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;
  weekLabelFormat?: DateLabelFormat;
  renderWeekLabel?: (params: {
    weekStart: DateStringValue;
    weekEnd: DateStringValue;
  }) => React.ReactNode;
  events?: ScheduleEventData[];
  slotWidth?: React.CSSProperties['width'];
  rowHeight?: React.CSSProperties['height'];
  labels?: ScheduleLabelsOverride;
  highlightBusinessHours?: boolean;
  businessHours?: [string, string];
  renderEventBody?: RenderEventBody;
  renderEvent?: RenderEvent;
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;

  /** List of resource groups to display as a column to the left of resource labels */
  groups?: ScheduleResourceGroup[];

  /** Function to customize group label rendering */
  renderGroupLabel?: (group: ScheduleResourceGroup) => React.ReactNode;

  /** Width of the group label column @default 80px */
  groupLabelWidth?: React.CSSProperties['width'];

  withEventsDragAndDrop?: boolean;
  onEventDrop?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => void;
  canDragEvent?: (event: ScheduleEventData) => boolean;
  onEventDragStart?: (event: ScheduleEventData) => void;
  onEventDragEnd?: () => void;
  onTimeSlotClick?: (data: {
    slotStart: DateTimeStringValue;
    slotEnd: DateTimeStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => void;
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;
  withDragSlotSelect?: boolean;
  onSlotDragEnd?: (data: {
    rangeStart: DateTimeStringValue;
    rangeEnd: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;
  mode?: ScheduleMode;
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

  recurrenceExpansionLimit?: number;

  /** Maximum number of events visible per time slot before "+more" indicator shows, minimum value is 1 @default 2 */
  maxEventsPerTimeSlot?: number;

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;

  firstDayOfWeek?: DayOfWeek;
  weekendDays?: DayOfWeek[];
  withWeekendDays?: boolean;
  weekdayFormat?: DateLabelFormat;
  highlightToday?: boolean;
}

export type ResourcesWeekViewFactory = Factory<{
  props: ResourcesWeekViewProps;
  ref: HTMLDivElement;
  stylesNames: ResourcesWeekViewStylesNames;
  vars: ResourcesWeekViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'ResourcesWeekView',
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
  minEventSize: 1,
  withHeader: true,
  weekLabelFormat: 'MMM DD',
  weekdayFormat: 'ddd D',
  highlightBusinessHours: false,
  businessHours: ['09:00:00', '17:00:00'],
  withEventsDragAndDrop: false,
  withEventResize: false,
  withDragSlotSelect: false,
  withWeekendDays: true,
  withCurrentTimeBubble: true,
  highlightToday: true,
  mode: 'default',
  maxEventsPerTimeSlot: 2,
} satisfies Partial<ResourcesWeekViewProps>;

const varsResolver = createVarsResolver<ResourcesWeekViewFactory>(
  (_theme, { radius, slotWidth, rowHeight, groupLabelWidth }) => ({
    resourcesWeekView: {
      '--resources-week-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-week-view-slot-width': rem(slotWidth),
      '--resources-week-view-row-height': rem(rowHeight),
      '--resources-week-view-group-label-width': rem(groupLabelWidth),
    },
  })
);

export const ResourcesWeekView = factory<ResourcesWeekViewFactory>((_props) => {
  const props = useProps('ResourcesWeekView', defaultProps, _props);
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
    startScrollDateTime,
    scrollAreaProps,
    locale,
    withCurrentTimeIndicator: _withCurrentTimeIndicator,
    withCurrentTimeBubble,
    getCurrentTime,
    __staticSelector,
    withHeader,
    onViewChange,
    previousControlProps,
    nextControlProps,
    todayControlProps,
    viewSelectProps,
    weekLabelFormat,
    renderWeekLabel,
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
    withEventResize,
    onEventResize,
    canResizeEvent,
    onTimeSlotClick,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    mode,
    onExternalEventDrop,
    recurrenceExpansionLimit,
    maxEventsPerTimeSlot: _maxEventsPerTimeSlot,
    moreEventsProps,
    firstDayOfWeek,
    weekendDays,
    withWeekendDays,
    weekdayFormat,
    highlightToday,
    ...others
  } = props;

  const maxEventsPerTimeSlot =
    _maxEventsPerTimeSlot !== undefined ? Math.max(1, _maxEventsPerTimeSlot) : undefined;

  const getStyles = useStyles<ResourcesWeekViewFactory>({
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
    rootSelector: 'resourcesWeekView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ResourcesWeekViewFactory>({
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

  const weekdays = useMemo(
    () =>
      getWeekDays({
        week: date,
        withWeekendDays,
        weekendDays: ctx.getWeekendDays(weekendDays),
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }),
    [date, withWeekendDays, weekendDays, firstDayOfWeek, ctx]
  );

  const totalSlotsPerDay = slots.length;

  const resolveNow = () => (getCurrentTime ? dayjs(getCurrentTime()) : dayjs());
  const now = resolveNow();
  const isToday = weekdays.some((day) => dayjs(day).isSame(now, 'day'));
  const withCurrentTimeIndicator = _withCurrentTimeIndicator ?? isToday;

  const [, setTimeIndicatorTick] = useState(0);
  useInterval(() => setTimeIndicatorTick((tick) => tick + 1), 60000, { autoInvoke: true });
  const timeIndicatorOffset = getCurrentTimePosition({ startTime, endTime, intervalMinutes, now });

  const todayDayIndex = weekdays.findIndex((day) => dayjs(day).isSame(now, 'day'));
  const showTimeIndicator =
    withCurrentTimeIndicator &&
    todayDayIndex >= 0 &&
    isInTimeRange({ date: now.toDate(), startTime, endTime });
  const formattedCurrentTime = withCurrentTimeBubble
    ? formatDate({ locale: ctx.getLocale(locale), date: now, format: slotLabelFormat })
    : '';

  type DropTargetSlot = { resourceId: string | number; slotIndex: number };

  const handleExternalDrop = useCallback(
    (e: React.DragEvent, target: DropTargetSlot) => {
      if (!onExternalEventDrop) {
        return;
      }
      const dayIndex = Math.floor(target.slotIndex / totalSlotsPerDay);
      const slotInDay = target.slotIndex % totalSlotsPerDay;
      const slotDay = weekdays[dayIndex];
      if (slotDay) {
        onExternalEventDrop({
          dataTransfer: e.dataTransfer,
          dropDateTime: `${dayjs(slotDay).format('YYYY-MM-DD')} ${slots[slotInDay].startTime}`,
          resourceId: target.resourceId,
        });
      }
    },
    [onExternalEventDrop, slots, weekdays, totalSlotsPerDay]
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
      const dayIndex = Math.floor(target.slotIndex / totalSlotsPerDay);
      const slotInDay = target.slotIndex % totalSlotsPerDay;
      const slotTime = slots[slotInDay].startTime;
      const targetDay = weekdays[dayIndex] || weekdays[0];
      return calculateDropTime({
        draggedEvent,
        targetDate: targetDay,
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
      const startDayIndex = Math.floor(startIndex / totalSlotsPerDay);
      const startSlotInDay = startIndex % totalSlotsPerDay;
      const endDayIndex = Math.floor(endIndex / totalSlotsPerDay);
      const endSlotInDay = endIndex % totalSlotsPerDay;
      const startDay = weekdays[startDayIndex];
      const endDay = weekdays[endDayIndex];
      if (startDay && endDay) {
        onSlotDragEnd({
          rangeStart: `${dayjs(startDay).format('YYYY-MM-DD')} ${slots[startSlotInDay].startTime}`,
          rangeEnd: `${dayjs(endDay).format('YYYY-MM-DD')} ${slots[endSlotInDay].endTime}`,
          resourceId: groupToResourceId.get(group) ?? group,
        });
      }
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
    day: string,
    slotTime: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!onTimeSlotClick) {
      return;
    }
    const slotIndex = slots.findIndex((s) => s.startTime === slotTime);
    if (slotIndex === -1) {
      return;
    }
    const slot = slots[slotIndex];
    const dayStr = dayjs(day).format('YYYY-MM-DD');
    onTimeSlotClick({
      slotStart: `${dayStr} ${slot.startTime}`,
      slotEnd: `${dayStr} ${slot.endTime}`,
      nativeEvent: e,
      resourceId,
    });
  };

  const weekViewEvents = useMemo(
    () =>
      getResourcesWeekViewEvents({
        events,
        resources,
        weekdays,
        startTime,
        endTime,
        intervalMinutes,
        expansionLimit: recurrenceExpansionLimit,
      }),
    [events, resources, weekdays, startTime, endTime, intervalMinutes, recurrenceExpansionLimit]
  );

  const dayLabels = weekdays.map((day) => {
    const d = dayjs(day);
    const today = d.isSame(now, 'day') && highlightToday;
    const weekend = ctx.getWeekendDays(weekendDays).includes(d.day() as DayOfWeek);

    return (
      <Box
        {...getStyles('resourcesWeekViewDayLabel')}
        key={day}
        mod={{ today, weekend }}
        style={{ width: `calc(var(--resources-week-view-slot-width) * ${totalSlotsPerDay})` }}
      >
        {formatDate({ date: d, locale: ctx.getLocale(locale), format: weekdayFormat })}
      </Box>
    );
  });

  const timeLabels = weekdays.flatMap((day) =>
    slots.map((interval) => {
      const dayStr = dayjs(day).format('YYYY-MM-DD');
      const intervalTime = dayjs(`${dayStr} ${interval.startTime}`);
      const label = formatDate({
        date: intervalTime,
        locale: ctx.getLocale(locale),
        format: slotLabelFormat,
      });

      return (
        <Box
          {...getStyles('resourcesWeekViewTimeLabel')}
          key={`${day}-${interval.startTime}`}
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
    })
  );

  const slotsRef: ResourcesGridControlsRef = useRef<HTMLButtonElement[][]>([]);
  const rowSlotsContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const mergedViewportRef = useMergedRef(viewportRef, scrollAreaProps?.viewportRef);

  const firstSlotIndex = { resourceIndex: 0, slotIndex: 0 };

  useIsomorphicEffect(() => {
    if (!startScrollDateTime || !viewportRef.current) {
      return;
    }
    const parsed = dayjs(startScrollDateTime);
    const targetDayStr = parsed.format('YYYY-MM-DD 00:00:00');
    const targetTime = parsed.format('HH:mm:ss');
    const dayIndex = weekdays.indexOf(targetDayStr);
    if (dayIndex < 0) {
      return;
    }
    const slotInDay = slots.findIndex((s) => s.startTime >= targetTime);
    if (slotInDay < 0) {
      return;
    }
    const flatIndex = dayIndex * totalSlotsPerDay + slotInDay;
    const firstResourceSlots = slotsRef.current[0];
    if (!firstResourceSlots || firstResourceSlots.length === 0) {
      return;
    }
    const targetSlot = firstResourceSlots[flatIndex];
    if (!targetSlot) {
      return;
    }
    const slotRect = targetSlot.getBoundingClientRect();
    const viewportRect = viewportRef.current.getBoundingClientRect();
    const cornerEl = viewportRef.current.querySelector(`.${classes.resourcesWeekViewCorner}`);
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

  const dayWidthPercent = 100 / weekdays.length;

  const rows = orderedResources.map((resource, resourceIndex) => {
    const eventNodes: React.ReactNode[] = [];
    const resourceAllDayBars = weekViewEvents.allDayBars[resource.id] ?? [];
    const maxAllDayCount = resourceAllDayBars.reduce((max, bar) => Math.max(max, bar.row + 1), 0);

    weekdays.forEach((day, dayIndex) => {
      const dayEvents = weekViewEvents.byDay[day];
      if (!dayEvents) {
        return;
      }

      const dayOffsetPercent = (dayIndex / weekdays.length) * 100;

      const bgEvents = [
        ...(dayEvents.backgroundTimedEvents[resource.id] || []),
        ...(dayEvents.backgroundAllDayEvents[resource.id] || []),
      ];
      for (const event of bgEvents) {
        const colors = theme.variantColorResolver({
          color: event.color || theme.primaryColor,
          theme,
          variant: 'light',
          autoContrast: true,
        });

        const bgEventBody =
          typeof renderEventBody === 'function' ? renderEventBody(event) : event.title;

        const bgEventProps = {
          key: `bg-${event.id}-${day}`,
          ...getStyles('resourcesWeekViewBackgroundEvent', {
            style: {
              left: `${dayOffsetPercent + (event.position.top / 100) * dayWidthPercent}%`,
              width: `${(event.position.height / 100) * dayWidthPercent}%`,
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
          eventNodes.push(renderEvent(event, bgEventProps as any));
        } else {
          eventNodes.push(<Box {...bgEventProps} />);
        }
      }

      const allRegularEvents = (dayEvents.regularEvents[resource.id] || []).filter(
        (event) => !isAllDayEvent({ event, date: day })
      );

      const visibleEvents =
        maxEventsPerTimeSlot !== undefined
          ? allRegularEvents.filter((event) => event.position.column < maxEventsPerTimeSlot)
          : allRegularEvents;

      for (const event of visibleEvents) {
        const isDraggable = dragDrop.isDraggableEvent(event);
        const isResizable = eventResize.isResizableEvent(event);
        const resizePosition = eventResize.getResizePosition(event.id);
        const isThisEventResizing = resizePosition !== null;
        const activeEdge =
          isThisEventResizing && eventResize.resizingEdge ? eventResize.resizingEdge : null;

        const effectiveTop = resizePosition ? resizePosition.left : event.position.top;
        const effectiveHeight = resizePosition ? resizePosition.width : event.position.height;
        const eventLeft = dayOffsetPercent + (effectiveTop / 100) * dayWidthPercent;
        const eventWidth = (effectiveHeight / 100) * dayWidthPercent;

        const eventColors = isResizable
          ? theme.variantColorResolver({
              color: event.color || theme.primaryColor,
              theme,
              variant: event.variant || 'light',
              autoContrast: true,
            })
          : null;

        const adjustPosition =
          maxEventsPerTimeSlot !== undefined && event.position.overlaps > maxEventsPerTimeSlot;

        const eventDate = dayjs(day).format('YYYY-MM-DD');

        eventNodes.push(
          <Box
            key={`${event.id}-${day}`}
            {...getStyles('resourcesWeekViewEventWrapper')}
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
                  {...getStyles('resourcesWeekViewResizeHandle')}
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
                        eventDate,
                        dayIndex,
                        dayCount: weekdays.length,
                        pointerEvent: e,
                      });
                    }
                  }}
                />
                <div
                  {...getStyles('resourcesWeekViewResizeHandle')}
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
                        eventDate,
                        dayIndex,
                        dayCount: weekdays.length,
                        pointerEvent: e,
                      });
                    }
                  }}
                />
              </>
            )}
          </Box>
        );
      }

      if (maxEventsPerTimeSlot !== undefined) {
        const clusters = getOverlapClusters(allRegularEvents);
        for (const cluster of clusters) {
          const hiddenCount = cluster.filter(
            (e) => e.position.column >= maxEventsPerTimeSlot
          ).length;

          if (hiddenCount > 0 && mode !== 'static') {
            const leftPercent =
              dayOffsetPercent +
              (Math.min(...cluster.map((e) => e.position.top)) / 100) * dayWidthPercent;
            const rightPercent =
              dayOffsetPercent +
              (Math.max(...cluster.map((e) => e.position.top + e.position.height)) / 100) *
                dayWidthPercent;

            eventNodes.push(
              <MoreEvents
                key={`more-${resource.id}-${day}-${cluster[0].id}`}
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
          }
        }
      }
    });

    const stickyLabelOffset = hasGroups
      ? 'calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)'
      : 'calc(var(--resources-week-view-resource-label-width) + 5px)';

    resourceAllDayBars.forEach((bar) => {
      const leftPercent = bar.startDayIndex * dayWidthPercent;
      const widthPercent = (bar.endDayIndex - bar.startDayIndex + 1) * dayWidthPercent;

      eventNodes.push(
        <div
          key={`all-day-${bar.event.id}-${bar.startDayIndex}`}
          {...getStyles('resourcesWeekViewAllDayEvent', {
            style: {
              left: `calc(${leftPercent}% + 1px)`,
              width: `calc(${widthPercent}% - 2px)`,
              top: `calc(${bar.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`,
            },
          })}
        >
          <ScheduleEvent
            event={bar.event}
            autoSize
            nowrap
            renderEventBody={(barEvent) => (
              <span
                style={{
                  position: 'sticky',
                  insetInlineStart: stickyLabelOffset,
                  display: 'inline-block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {renderEventBody ? renderEventBody(barEvent) : barEvent.title}
              </span>
            )}
            renderEvent={renderEvent}
            radius={radius}
            mode={mode}
            onClick={onEventClick ? (e) => onEventClick(bar.event, e) : undefined}
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
            styles={{
              eventInner: {
                display: 'block',
                overflow: 'visible',
                lineHeight: 'var(--resources-week-view-all-day-height)',
              },
            }}
          />
        </div>
      );
    });

    return (
      <ResourcesWeekViewRow
        key={resource.id}
        resource={resource}
        resourceIndex={resourceIndex}
        weekdays={weekdays}
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
        allDayCount={maxAllDayCount}
      >
        {eventNodes}
      </ResourcesWeekViewRow>
    );
  });

  const headerLabel = getWeekLabel({
    weekdays,
    locale: ctx.getLocale(locale),
    weekLabelFormat: weekLabelFormat!,
    renderWeekLabel,
  });

  const indicatorLeftPercent =
    todayDayIndex >= 0 ? ((todayDayIndex + timeIndicatorOffset / 100) / weekdays.length) * 100 : 0;

  const content = (
    <Box
      {...getStyles('resourcesWeekView')}
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
          view="week"
          navigationHandlers={{
            previous: () => previousWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
            next: () => nextWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
            today: () => toDateString(resolveNow()),
          }}
          control={{
            miw: 180,
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

      <Box {...getStyles('resourcesWeekViewRoot')}>
        <ScrollArea
          scrollbarSize={4}
          {...scrollAreaProps}
          {...getStyles('resourcesWeekViewScrollArea', {
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
          <div {...getStyles('resourcesWeekViewInner')}>
            <div {...getStyles('resourcesWeekViewHeaderRows')}>
              <div
                {...getStyles('resourcesWeekViewCorner')}
                key="corner"
                style={
                  hasGroups
                    ? {
                        flexBasis:
                          'calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))',
                        minWidth:
                          'calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))',
                      }
                    : undefined
                }
              >
                {getLabel('resources', labels)}
              </div>
              <div {...getStyles('resourcesWeekViewHeaderContent')}>
                <div {...getStyles('resourcesWeekViewDayLabelsRow')}>{dayLabels}</div>
                <Box {...getStyles('resourcesWeekViewTimeLabelsRow')} mod={{ scrolled }}>
                  {timeLabels}
                </Box>
              </div>
            </div>

            {rows}

            {showTimeIndicator && (
              <Box
                {...getStyles('resourcesWeekViewCurrentTimeIndicator')}
                __vars={{
                  '--indicator-left-offset': hasGroups
                    ? `calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${indicatorLeftPercent} / 100)`
                    : `calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${indicatorLeftPercent} / 100)`,
                  '--_time-bubble-width': formattedCurrentTime
                    ?.toString()
                    .toLowerCase()
                    .includes('m')
                    ? '64px'
                    : '46px',
                }}
              >
                {withCurrentTimeBubble && (
                  <div {...getStyles('resourcesWeekViewCurrentTimeIndicatorTimeBubble')}>
                    {formattedCurrentTime}
                  </div>
                )}
                {!withCurrentTimeBubble && (
                  <div {...getStyles('resourcesWeekViewCurrentTimeIndicatorThumb')} />
                )}
                <div {...getStyles('resourcesWeekViewCurrentTimeIndicatorLine')} />
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

ResourcesWeekView.displayName = '@mantine/schedule/ResourcesWeekView';
ResourcesWeekView.classes = classes;
ResourcesWeekView.varsResolver = varsResolver;
