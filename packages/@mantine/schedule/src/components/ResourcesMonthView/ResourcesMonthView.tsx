import dayjs from 'dayjs';
import { useCallback, useMemo, useRef } from 'react';
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
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
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
  calculateMonthDropDate,
  expandRecurringEvents,
  formatDate,
  toDateString,
} from '../../utils';
import { DragContext } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps } from '../MoreEvents/MoreEvents';
import { RenderEvent, RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { MonthYearSelectProps } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import classes from './ResourcesMonthView.module.css';

export type ResourcesMonthViewStylesNames =
  | 'resourcesMonthView'
  | 'resourcesMonthViewRoot'
  | 'resourcesMonthViewScrollArea'
  | 'resourcesMonthViewDayLabelsRow'
  | 'resourcesMonthViewCorner'
  | 'resourcesMonthViewDayLabel'
  | 'resourcesMonthViewDayLabelWeekday'
  | 'resourcesMonthViewDayLabelNumber'
  | 'resourcesMonthViewRow'
  | 'resourcesMonthViewResourceLabel'
  | 'resourcesMonthViewRowSlots'
  | 'resourcesMonthViewCell'
  | 'resourcesMonthViewInner'
  | CombinedScheduleHeaderStylesNames;

export type ResourcesMonthViewCssVariables = {
  resourcesMonthView:
    | '--resources-month-view-radius'
    | '--resources-month-view-day-width'
    | '--resources-month-view-row-height';
};

export interface ResourcesMonthViewProps
  extends BoxProps, StylesApiProps<ResourcesMonthViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** List of resources to display as rows */
  resources: ScheduleResourceData[];

  /** Locale passed down to dayjs */
  locale?: string;

  /** `dayjs` format for weekdays in day column headers @default 'dd' */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default true */
  withWeekendDays?: boolean;

  /** Date to scroll to on initial render, in `YYYY-MM-DD` format */
  startScrollDate?: string;

  /** Called when a cell is clicked, includes resourceId */
  onDayClick?: (data: {
    date: DateStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => void;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** If set, the header is displayed @default true */
  withHeader?: boolean;

  /** Props passed down to `MonthYearSelect` component */
  monthYearSelectProps?: Partial<MonthYearSelectProps>;

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

  /** Events to display */
  events?: ScheduleEventData[];

  /** Width of each day column @default 40px */
  dayWidth?: React.CSSProperties['width'];

  /** Height of each resource row @default 48px */
  rowHeight?: React.CSSProperties['height'];

  /** Function to customize event body */
  renderEventBody?: RenderEventBody;

  /** Function to fully customize event rendering */
  renderEvent?: RenderEvent;

  /** Function to customize resource label rendering */
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;

  /** If true, events can be dragged and dropped @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped, includes target resourceId */
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

  /** Called when event is clicked */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select day ranges @default false */
  withDragSlotSelect?: boolean;

  /** Called when a day range is selected by dragging, includes resourceId */
  onSlotDragEnd?: (data: {
    rangeStart: DateTimeStringValue;
    rangeEnd: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode @default default */
  mode?: ScheduleMode;

  /** Props passed down to `ScrollArea` component */
  scrollAreaProps?: Partial<ScrollAreaProps> & DataAttributes;

  /** Called when an external item is dropped */
  onExternalEventDrop?: (data: {
    dataTransfer: DataTransfer;
    dropDateTime: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** Maximum number of events visible per cell before "+more" indicator @default 2 */
  maxEventsPerCell?: number;

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;

  /** Max number of generated recurring instances @default 2000 */
  recurrenceExpansionLimit?: number;
}

export type ResourcesMonthViewFactory = Factory<{
  props: ResourcesMonthViewProps;
  ref: HTMLDivElement;
  stylesNames: ResourcesMonthViewStylesNames;
  vars: ResourcesMonthViewCssVariables;
}>;

const varsResolver = createVarsResolver<ResourcesMonthViewFactory>(
  (_theme, { radius, dayWidth, rowHeight }) => ({
    resourcesMonthView: {
      '--resources-month-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-month-view-day-width': rem(dayWidth),
      '--resources-month-view-row-height': rem(rowHeight),
    },
  })
);

const defaultProps = {
  __staticSelector: 'ResourcesMonthView',
  highlightToday: true,
  withHeader: true,
  weekdayFormat: 'ddd',
  withWeekendDays: true,
  withEventsDragAndDrop: false,
  withDragSlotSelect: false,
  mode: 'default',
} satisfies Partial<ResourcesMonthViewProps>;

export const ResourcesMonthView = factory<ResourcesMonthViewFactory>((_props) => {
  const props = useProps('ResourcesMonthView', defaultProps, _props);
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
    resources,
    locale,
    weekdayFormat,
    weekendDays,
    withWeekendDays,
    startScrollDate,
    __staticSelector,
    onDayClick,
    highlightToday,
    radius,
    withHeader,
    monthYearSelectProps,
    onViewChange,
    todayControlProps,
    nextControlProps,
    previousControlProps,
    viewSelectProps,
    events,
    dayWidth,
    rowHeight,
    renderResourceLabel,
    renderEventBody,
    renderEvent,
    withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    labels,
    mode,
    scrollAreaProps,
    onExternalEventDrop,
    maxEventsPerCell: _maxEventsPerCell,
    moreEventsProps,
    recurrenceExpansionLimit,
    ...others
  } = props;

  const maxEventsPerCell = Math.min(10, Math.max(1, _maxEventsPerCell ?? 2));

  const getStyles = useStyles<ResourcesMonthViewFactory>({
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
    rootSelector: 'resourcesMonthView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ResourcesMonthViewFactory>({
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
  const resolvedWeekendDays = ctx.getWeekendDays(weekendDays);

  const monthStart = dayjs(date).startOf('month');
  const monthEnd = dayjs(date).endOf('month');
  const daysInMonth = monthEnd.date();

  const monthDays: string[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const day = monthStart.date(d);
    if (!withWeekendDays && resolvedWeekendDays.includes(day.day() as DayOfWeek)) {
      continue;
    }
    monthDays.push(day.format('YYYY-MM-DD'));
  }

  const viewportRef = useRef<HTMLDivElement>(null);
  const mergedViewportRef = useMergedRef(viewportRef, scrollAreaProps?.viewportRef);
  const dayLabelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const resourceLabelRef = useRef<HTMLDivElement>(null);

  const scrollToDay = useCallback(
    (targetDate: string) => {
      if (!viewportRef.current) {
        return;
      }
      const targetIndex = monthDays.indexOf(targetDate);
      if (targetIndex < 0) {
        return;
      }
      const targetLabel = dayLabelRefs.current[targetIndex];
      if (!targetLabel) {
        return;
      }
      const labelRect = targetLabel.getBoundingClientRect();
      const viewportRect = viewportRef.current.getBoundingClientRect();
      const labelWidth = resourceLabelRef.current?.getBoundingClientRect().width ?? 0;
      viewportRef.current.scrollTo({
        left: labelRect.left - viewportRect.left - labelWidth,
        top: 0,
      });
    },
    [monthDays]
  );

  useIsomorphicEffect(() => {
    if (startScrollDate) {
      scrollToDay(startScrollDate);
    }
  }, []);

  const expandedEvents = expandRecurringEvents({
    events,
    rangeStart: monthStart.toDate(),
    rangeEnd: monthEnd.toDate(),
    expansionLimit: recurrenceExpansionLimit,
  });

  const eventsByResourceAndDay: Record<string | number, Record<string, ScheduleEventData[]>> = {};
  for (const resource of resources) {
    eventsByResourceAndDay[resource.id] = {};
    for (const day of monthDays) {
      eventsByResourceAndDay[resource.id][day] = [];
    }
  }

  if (expandedEvents) {
    for (const event of expandedEvents) {
      if (event.resourceId === undefined || !(event.resourceId in eventsByResourceAndDay)) {
        continue;
      }

      const eventStart = dayjs(event.start);
      const eventEnd = dayjs(event.end);

      for (const day of monthDays) {
        const dayStart = dayjs(day).startOf('day');
        const dayEnd = dayjs(day).endOf('day');

        if (eventStart.isBefore(dayEnd) && eventEnd.isAfter(dayStart)) {
          eventsByResourceAndDay[event.resourceId][day].push(event);
        }
      }
    }
  }

  type DropTargetCell = { day: string; resourceId: string | number };

  const handleExternalDrop = useCallback(
    (e: React.DragEvent, target: DropTargetCell) => {
      if (!onExternalEventDrop) {
        return;
      }
      onExternalEventDrop({
        dataTransfer: e.dataTransfer,
        dropDateTime: `${dayjs(target.day).format('YYYY-MM-DD')} 00:00:00`,
        resourceId: target.resourceId,
      });
    },
    [onExternalEventDrop]
  );

  const dragDrop = useDragDropHandlers<DropTargetCell>({
    enabled: withEventsDragAndDrop,
    mode,
    onEventDrop: (data) => {
      onEventDrop?.({ ...data, resourceId: lastDropResourceId.current });
    },
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    calculateDropTarget: (target: DropTargetCell, draggedEvent: ScheduleEventData) => {
      lastDropResourceId.current = target.resourceId;
      return calculateMonthDropDate({ draggedEvent, targetDay: target.day });
    },
    onExternalDrop: onExternalEventDrop ? handleExternalDrop : undefined,
  });

  const lastDropResourceId = useRef<string | number | undefined>(undefined);

  const withDragHandlers = (withEventsDragAndDrop || !!onExternalEventDrop) && mode !== 'static';

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
      const startDay = monthDays[startIndex];
      const endDay = monthDays[endIndex];
      if (startDay && endDay) {
        onSlotDragEnd({
          rangeStart: dayjs(startDay).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
          rangeEnd: dayjs(endDay).endOf('day').format('YYYY-MM-DD HH:mm:ss'),
          resourceId: groupToResourceId.get(group) ?? group,
        });
      }
    },
  });

  const dayLabels = monthDays.map((day, dayIndex) => {
    const d = dayjs(day);
    const weekend = resolvedWeekendDays.includes(d.day() as DayOfWeek);
    const today = d.isSame(dayjs(), 'day') && highlightToday;

    return (
      <Box
        {...getStyles('resourcesMonthViewDayLabel')}
        key={day}
        mod={{ weekend, today }}
        ref={(node) => {
          dayLabelRefs.current[dayIndex] = node;
        }}
      >
        <span {...getStyles('resourcesMonthViewDayLabelWeekday')}>
          {formatDate({ date: d, locale: ctx.getLocale(locale), format: weekdayFormat })}
        </span>
        <span {...getStyles('resourcesMonthViewDayLabelNumber')}>{d.date()}</span>
      </Box>
    );
  });

  const cellsRef = useRef<HTMLButtonElement[][]>([]);

  const getDayIndexFromDragPoint = useCallback((event: React.DragEvent, resourceIndex: number) => {
    const resourceCells = cellsRef.current[resourceIndex] ?? [];
    const dayIndex = resourceCells.findIndex((cellNode) => {
      if (!cellNode) {
        return false;
      }
      const rect = cellNode.getBoundingClientRect();
      return event.clientX >= rect.left && event.clientX <= rect.right;
    });

    if (dayIndex >= 0) {
      return dayIndex;
    }

    const firstCell = resourceCells[0];
    const lastCell = resourceCells[resourceCells.length - 1];

    if (!firstCell || !lastCell) {
      return null;
    }

    const firstRect = firstCell.getBoundingClientRect();
    const lastRect = lastCell.getBoundingClientRect();

    if (event.clientX < firstRect.left) {
      return 0;
    }

    if (event.clientX > lastRect.right) {
      return resourceCells.length - 1;
    }

    return null;
  }, []);

  const handleCellKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    resourceIndex: number,
    dayIndex: number
  ) => {
    const key = event.key;
    let nextResourceIndex = resourceIndex;
    let nextDayIndex = dayIndex;

    if (key === 'ArrowRight') {
      nextDayIndex = Math.min(dayIndex + 1, monthDays.length - 1);
    } else if (key === 'ArrowLeft') {
      nextDayIndex = Math.max(dayIndex - 1, 0);
    } else if (key === 'ArrowDown') {
      nextResourceIndex = Math.min(resourceIndex + 1, resources.length - 1);
    } else if (key === 'ArrowUp') {
      nextResourceIndex = Math.max(resourceIndex - 1, 0);
    } else {
      return;
    }

    event.preventDefault();
    cellsRef.current[nextResourceIndex]?.[nextDayIndex]?.focus();
  };

  const rowHeightPercent = 100 / maxEventsPerCell;

  const rows = resources.map((resource, resourceIndex) => {
    if (!cellsRef.current[resourceIndex]) {
      cellsRef.current[resourceIndex] = [];
    }

    const slotGroup = String(resource.id);
    const dropTarget = dragDrop.dropTarget;

    const totalDays = monthDays.length;
    const eventNodes: React.ReactNode[] = [];
    const moreNodes: React.ReactNode[] = [];

    const cells = monthDays.map((day, dayIndex) => {
      const d = dayjs(day);
      const weekend = ctx.getWeekendDays(weekendDays).includes(d.day() as DayOfWeek);
      const isDropTarget =
        dropTarget !== null &&
        typeof dropTarget === 'object' &&
        'day' in dropTarget &&
        (dropTarget as DropTargetCell).day === day &&
        (dropTarget as DropTargetCell).resourceId === resource.id;
      const isDragSelected = slotDragSelect.isSlotSelected(dayIndex, slotGroup);
      const dayEvents = eventsByResourceAndDay[resource.id]?.[day] || [];
      const visibleEvents = dayEvents.slice(0, maxEventsPerCell);
      const hiddenEventsCount = Math.max(0, dayEvents.length - maxEventsPerCell);
      const isFirstCell = resourceIndex === 0 && dayIndex === 0;
      const dayLeftPercent = (dayIndex / totalDays) * 100;
      const dayWidthPercent = 100 / totalDays;

      const hasHiddenEvents = hiddenEventsCount > 0 && mode !== 'static';

      visibleEvents.forEach((event, eventIndex) => {
        const isDraggable = dragDrop.isDraggableEvent(event);
        const topValue = hasHiddenEvents
          ? `calc((100% - 18px) * ${eventIndex} / ${maxEventsPerCell} + 1px)`
          : `calc(${eventIndex * rowHeightPercent}% + 1px)`;
        const heightValue = hasHiddenEvents
          ? `calc((100% - 18px) / ${maxEventsPerCell} - 2px)`
          : `calc(${rowHeightPercent}% - 2px)`;

        eventNodes.push(
          <ScheduleEvent
            key={`${event.id}-${day}`}
            event={event}
            nowrap
            autoSize
            size="sm"
            draggable={isDraggable}
            renderEventBody={renderEventBody}
            renderEvent={renderEvent}
            radius={radius}
            mode={mode}
            onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
            style={{
              position: 'absolute',
              top: topValue,
              left: `calc(${dayLeftPercent}% + 1px)`,
              width: `calc(${dayWidthPercent}% - 2px)`,
              height: heightValue,
              zIndex: 3,
            }}
          />
        );
      });

      if (hiddenEventsCount > 0 && mode !== 'static') {
        moreNodes.push(
          <MoreEvents
            key={`more-${resource.id}-${day}`}
            events={dayEvents}
            moreEventsCount={hiddenEventsCount}
            mode={mode}
            style={{
              position: 'absolute',
              bottom: 1,
              left: `calc(${dayLeftPercent}% + 1px)`,
              width: `calc(${dayWidthPercent}% - 2px)`,
              height: 18,
              zIndex: 4,
            }}
            {...moreEventsProps}
          />
        );
      }

      return (
        <UnstyledButton
          key={day}
          ref={(node) => {
            if (node) {
              if (!cellsRef.current[resourceIndex]) {
                cellsRef.current[resourceIndex] = [];
              }
              cellsRef.current[resourceIndex][dayIndex] = node;
            }
          }}
          {...getStyles('resourcesMonthViewCell')}
          aria-label={`${resource.label} ${d.format('MMMM D, YYYY')}`}
          data-drag-slot-index={withDragSlotSelect && mode !== 'static' ? dayIndex : undefined}
          data-drag-slot-group={withDragSlotSelect && mode !== 'static' ? slotGroup : undefined}
          mod={{
            weekend,
            'drop-target': isDropTarget,
            'drag-selected': isDragSelected,
            static: mode === 'static',
          }}
          tabIndex={mode === 'static' ? -1 : isFirstCell ? 0 : -1}
          onClick={
            mode === 'static'
              ? undefined
              : (e) => onDayClick?.({ date: day, nativeEvent: e, resourceId: resource.id })
          }
          onKeyDown={
            mode === 'static' ? undefined : (e) => handleCellKeyDown(e, resourceIndex, dayIndex)
          }
          onPointerDown={
            withDragSlotSelect && mode !== 'static'
              ? (e) =>
                  slotDragSelect.handleSlotPointerDown(
                    e as React.PointerEvent<HTMLButtonElement>,
                    dayIndex,
                    slotGroup
                  )
              : undefined
          }
          onDragOver={withDragHandlers ? (e) => e.preventDefault() : undefined}
        />
      );
    });

    return (
      <div {...getStyles('resourcesMonthViewRow')} key={resource.id}>
        <div {...getStyles('resourcesMonthViewResourceLabel')}>
          {renderResourceLabel ? renderResourceLabel(resource) : resource.label}
        </div>
        <div
          {...getStyles('resourcesMonthViewRowSlots')}
          onDragOver={
            withDragHandlers
              ? (e) => {
                  const dayIndex = getDayIndexFromDragPoint(e, resourceIndex);
                  if (dayIndex !== null && monthDays[dayIndex]) {
                    dragDrop.handleDragOver(e, {
                      day: monthDays[dayIndex],
                      resourceId: resource.id,
                    });
                  }
                }
              : undefined
          }
          onDragLeave={withDragHandlers ? dragDrop.handleDragLeave : undefined}
          onDrop={
            withDragHandlers
              ? (e) => {
                  const dayIndex = getDayIndexFromDragPoint(e, resourceIndex);
                  if (dayIndex !== null && monthDays[dayIndex]) {
                    dragDrop.handleDrop(e, {
                      day: monthDays[dayIndex],
                      resourceId: resource.id,
                    });
                  }
                }
              : undefined
          }
        >
          {eventNodes}
          {moreNodes}
          {cells}
        </div>
      </div>
    );
  });

  const content = (
    <Box
      mod={[
        {
          static: mode === 'static',
          'slot-dragging': slotDragSelect.isDragging,
        },
        mod,
      ]}
      {...getStyles('resourcesMonthView')}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="month"
          navigationHandlers={{
            previous: () => toDateString(dayjs(date).subtract(1, 'month').startOf('month')),
            next: () => toDateString(dayjs(date).add(1, 'month').startOf('month')),
            today: () => {
              requestAnimationFrame(() => {
                scrollToDay(dayjs().format('YYYY-MM-DD'));
              });
              return toDateString(dayjs());
            },
          }}
          control={{
            monthYearSelect: {
              locale,
              yearValue: dayjs(date).get('year'),
              monthValue: dayjs(date).get('month'),
              onYearChange: (year) =>
                onDateChange?.(toDateString(dayjs(date).set('year', year).startOf('month'))),
              onMonthChange: (month) =>
                onDateChange?.(toDateString(dayjs(date).set('month', month).startOf('month'))),
              ...monthYearSelectProps,
            },
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

      <Box {...getStyles('resourcesMonthViewRoot')}>
        <ScrollArea
          scrollbarSize={4}
          {...scrollAreaProps}
          {...getStyles('resourcesMonthViewScrollArea', {
            className: scrollAreaProps?.className,
            style: scrollAreaProps?.style,
          })}
          viewportRef={mergedViewportRef}
        >
          <div {...getStyles('resourcesMonthViewInner')}>
            <div {...getStyles('resourcesMonthViewDayLabelsRow')}>
              <div {...getStyles('resourcesMonthViewCorner')} key="corner" ref={resourceLabelRef}>
                {getLabel('resources', labels)}
              </div>
              {dayLabels}
            </div>

            {rows}
          </div>
        </ScrollArea>
      </Box>
    </Box>
  );

  if (withEventsDragAndDrop) {
    return <DragContext.Provider value={dragDrop.dragContextValue}>{content}</DragContext.Provider>;
  }

  return content;
});

ResourcesMonthView.displayName = '@mantine/schedule/ResourcesMonthView';
ResourcesMonthView.classes = classes;
ResourcesMonthView.varsResolver = varsResolver;
