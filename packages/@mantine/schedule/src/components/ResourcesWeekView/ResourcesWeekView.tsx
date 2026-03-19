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
import { useSlotDragSelect } from '../../hooks/use-slot-drag-select';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DateTimeStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
  ScheduleResourceData,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateDropTime,
  formatDate,
  getBusinessHoursMod,
  getCurrentTimePosition,
  getDayTimeIntervals,
  getWeekDays,
  isAllDayEvent,
  isInTimeRange,
  nextWeek,
  previousWeek,
  toDateString,
} from '../../utils';
import { DragContext, DragContextValue } from '../DragContext/DragContext';
import { RenderEvent, RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getWeekLabel } from '../WeekView/get-week-label/get-week-label';
import { getResourcesWeekViewEvents } from './get-resources-week-view-events/get-resources-week-view-events';
import {
  handleResourcesWeekViewKeyDown,
  ResourcesWeekViewControlsRef,
} from './handle-resources-week-view-key-down';
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
  | 'resourcesWeekViewCurrentTimeIndicator'
  | 'resourcesWeekViewCurrentTimeIndicatorLine'
  | 'resourcesWeekViewCurrentTimeIndicatorThumb'
  | 'resourcesWeekViewCurrentTimeIndicatorTimeBubble'
  | 'resourcesWeekViewEventWrapper'
  | 'resourcesWeekViewResizeHandle'
  | CombinedScheduleHeaderStylesNames;

export type ResourcesWeekViewCssVariables = {
  resourcesWeekView:
    | '--resources-week-view-radius'
    | '--resources-week-view-slot-width'
    | '--resources-week-view-row-height';
};

export interface ResourcesWeekViewProps
  extends BoxProps, StylesApiProps<ResourcesWeekViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;
  date: Date | string;
  onDateChange?: (value: DateStringValue) => void;
  resources: ScheduleResourceData[];
  startTime?: string;
  endTime?: string;
  intervalMinutes?: number;
  slotLabelFormat?: DateLabelFormat;
  radius?: MantineRadius;
  /** Date and time to scroll to on initial render, in `YYYY-MM-DD HH:mm:ss` format */
  startScrollDateTime?: string;
  scrollAreaProps?: Partial<ScrollAreaProps> & DataAttributes;
  locale?: string;
  withCurrentTimeIndicator?: boolean;
  withCurrentTimeBubble?: boolean;
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
  withEventsDragAndDrop?: boolean;
  onEventDrop?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue,
    event: ScheduleEventData,
    resourceId?: string | number
  ) => void;
  canDragEvent?: (event: ScheduleEventData) => boolean;
  onEventDragStart?: (event: ScheduleEventData) => void;
  onEventDragEnd?: () => void;
  onTimeSlotClick?: (
    slotStart: DateTimeStringValue,
    slotEnd: DateTimeStringValue,
    event: React.MouseEvent<HTMLButtonElement>,
    resourceId?: string | number
  ) => void;
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;
  withDragSlotSelect?: boolean;
  onSlotDragEnd?: (
    rangeStart: DateTimeStringValue,
    rangeEnd: DateTimeStringValue,
    resourceId?: string | number
  ) => void;
  mode?: ScheduleMode;
  onExternalEventDrop?: (
    dataTransfer: DataTransfer,
    dropDateTime: DateTimeStringValue,
    resourceId?: string | number
  ) => void;
  recurrenceExpansionLimit?: number;
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
  withHeader: true,
  weekLabelFormat: 'MMM DD',
  weekdayFormat: 'ddd D',
  highlightBusinessHours: false,
  businessHours: ['09:00:00', '17:00:00'],
  withEventsDragAndDrop: false,
  withDragSlotSelect: false,
  withWeekendDays: true,
  withCurrentTimeBubble: true,
  highlightToday: true,
  mode: 'default',
} satisfies Partial<ResourcesWeekViewProps>;

const varsResolver = createVarsResolver<ResourcesWeekViewFactory>(
  (_theme, { radius, slotWidth, rowHeight }) => ({
    resourcesWeekView: {
      '--resources-week-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-week-view-slot-width': rem(slotWidth),
      '--resources-week-view-row-height': rem(rowHeight),
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
    slotLabelFormat,
    radius,
    startScrollDateTime,
    scrollAreaProps,
    locale,
    withCurrentTimeIndicator: _withCurrentTimeIndicator,
    withCurrentTimeBubble,
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
    recurrenceExpansionLimit,
    firstDayOfWeek,
    weekendDays,
    withWeekendDays,
    weekdayFormat,
    highlightToday,
    ...others
  } = props;

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

  const weekdays = getWeekDays({
    week: date,
    withWeekendDays,
    weekendDays: ctx.getWeekendDays(weekendDays),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  });

  const totalSlotsPerDay = slots.length;

  const isToday = weekdays.some((day) => dayjs(day).isSame(dayjs(), 'day'));
  const withCurrentTimeIndicator = _withCurrentTimeIndicator ?? isToday;

  const [timeIndicatorOffset, setTimeIndicatorOffset] = useState(
    getCurrentTimePosition({ startTime, endTime })
  );
  useInterval(
    () => setTimeIndicatorOffset(getCurrentTimePosition({ startTime, endTime })),
    60000,
    { autoInvoke: true }
  );

  const todayDayIndex = weekdays.findIndex((day) => dayjs(day).isSame(dayjs(), 'day'));
  const showTimeIndicator =
    withCurrentTimeIndicator &&
    todayDayIndex >= 0 &&
    isInTimeRange({ date: dayjs().toDate(), startTime, endTime });
  const formattedCurrentTime = withCurrentTimeBubble
    ? formatDate({ locale: ctx.getLocale(locale), date: dayjs(), format: slotLabelFormat })
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
        onExternalEventDrop(
          e.dataTransfer,
          `${dayjs(slotDay).format('YYYY-MM-DD')} ${slots[slotInDay].startTime}`,
          target.resourceId
        );
      }
    },
    [onExternalEventDrop, slots, weekdays, totalSlotsPerDay]
  );

  const lastDropResourceId = useRef<string | number | undefined>(undefined);

  const handleInternalEventDrop = useCallback(
    (
      eventId: string | number,
      newStart: DateTimeStringValue,
      newEnd: DateTimeStringValue,
      event: ScheduleEventData
    ) => {
      onEventDrop?.(eventId, newStart, newEnd, event, lastDropResourceId.current);
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

  const groupToResourceId = useMemo(() => {
    const map = new Map<string, string | number>();
    for (const resource of resources) {
      map.set(String(resource.id), resource.id);
    }
    return map;
  }, [resources]);

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
        onSlotDragEnd(
          `${dayjs(startDay).format('YYYY-MM-DD')} ${slots[startSlotInDay].startTime}`,
          `${dayjs(endDay).format('YYYY-MM-DD')} ${slots[endSlotInDay].endTime}`,
          groupToResourceId.get(group) ?? group
        );
      }
    },
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
    onTimeSlotClick(`${dayStr} ${slot.startTime}`, `${dayStr} ${slot.endTime}`, e, resourceId);
  };

  const weekViewEvents = getResourcesWeekViewEvents({
    events,
    resources,
    weekdays,
    startTime,
    endTime,
    expansionLimit: recurrenceExpansionLimit,
  });

  const dayLabels = weekdays.map((day) => {
    const d = dayjs(day);
    const today = d.isSame(dayjs(), 'day') && highlightToday;
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

  const slotsRef: ResourcesWeekViewControlsRef = useRef<HTMLButtonElement[][]>([]);
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
    viewportRef.current.scrollTo({ left: slotRect.left - viewportRect.left, top: 0 });
  }, []);

  const getSlotIndexFromDragPoint = useCallback(
    (event: React.DragEvent, resourceIndex: number) => {
      const resourceSlots = slotsRef.current[resourceIndex] ?? [];
      const slotIndex = resourceSlots.findIndex((slotNode) => {
        if (!slotNode) {
          return false;
        }
        const rect = slotNode.getBoundingClientRect();
        return event.clientX >= rect.left && event.clientX <= rect.right;
      });

      if (slotIndex >= 0) {
        return slotIndex;
      }

      const firstSlot = resourceSlots[0];
      const lastSlot = resourceSlots[resourceSlots.length - 1];

      if (!firstSlot || !lastSlot) {
        return null;
      }

      const firstRect = firstSlot.getBoundingClientRect();
      const lastRect = lastSlot.getBoundingClientRect();

      if (event.clientX < firstRect.left) {
        return 0;
      }

      if (event.clientX > lastRect.right) {
        return resourceSlots.length - 1;
      }

      return null;
    },
    []
  );

  const handleSlotKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    resourceIndex: number,
    slotIndex: number
  ) => {
    handleResourcesWeekViewKeyDown({
      controlsRef: slotsRef,
      resourceIndex,
      slotIndex,
      event,
    });
  };

  const rows = resources.map((resource, resourceIndex) => {
    const eventNodes: React.ReactNode[] = [];

    weekdays.forEach((day, dayIndex) => {
      const dayEvents = weekViewEvents.byDay[day];
      if (!dayEvents) {
        return;
      }

      const bgEvents = dayEvents.backgroundTimedEvents[resource.id] || [];
      for (const event of bgEvents) {
        const colors = theme.variantColorResolver({
          color: event.color || theme.primaryColor,
          theme,
          variant: 'light',
          autoContrast: true,
        });

        const bgEventBody =
          typeof renderEventBody === 'function' ? renderEventBody(event) : event.title;

        const dayOffsetPercent = (dayIndex / weekdays.length) * 100;
        const dayWidthPercent = 100 / weekdays.length;

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

      const regularEvents = dayEvents.regularEvents[resource.id] || [];
      for (const event of regularEvents) {
        if (isAllDayEvent({ event, date: day })) {
          continue;
        }

        const isDraggable = dragDrop.isDraggableEvent(event);

        const dayOffsetPercent = (dayIndex / weekdays.length) * 100;
        const dayWidthPercent = 100 / weekdays.length;

        const eventLeft = dayOffsetPercent + (event.position.top / 100) * dayWidthPercent;
        const eventWidth = (event.position.height / 100) * dayWidthPercent;


        eventNodes.push(
          <div
            key={`${event.id}-${day}`}
            {...getStyles('resourcesWeekViewEventWrapper')}
            style={{
              left: `calc(${eventLeft}% + 1px)`,
              top: `${event.position.offset}%`,
              width: `calc(${eventWidth}% - 2px)`,
              height: `${event.position.width}%`,
            }}
          >
            <ScheduleEvent
              event={event}
              autoSize
              nowrap
              draggable={isDraggable}
              renderEventBody={renderEventBody}
              renderEvent={renderEvent}
              radius={radius}
              mode={mode}
              onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        );
      }
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
        scrolledX={scrolledX}
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

  const indicatorLeftPercent = todayDayIndex >= 0
    ? ((todayDayIndex + timeIndicatorOffset / 100) / weekdays.length) * 100
    : 0;

  const content = (
    <Box
      {...getStyles('resourcesWeekView')}
      mod={{
        static: mode === 'static',
        'slot-dragging': slotDragSelect.isDragging,
      }}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="week"
          navigationHandlers={{
            previous: () =>
              previousWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
            next: () => nextWeek(date, ctx.getFirstDayOfWeek(firstDayOfWeek)),
            today: () => toDateString(dayjs()),
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
          overscrollBehavior="none"
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
              <div {...getStyles('resourcesWeekViewCorner')}>
                {getLabel('resources', labels)}
              </div>
              <div {...getStyles('resourcesWeekViewHeaderContent')}>
                <div {...getStyles('resourcesWeekViewDayLabelsRow')}>
                  {dayLabels}
                </div>
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
                  '--indicator-left-offset': `calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${indicatorLeftPercent} / 100)`,
                  '--_time-bubble-width': formattedCurrentTime?.toString().toLowerCase().includes('m')
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
