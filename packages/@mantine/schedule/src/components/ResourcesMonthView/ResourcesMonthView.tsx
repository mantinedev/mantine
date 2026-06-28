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
  ScheduleResourceGroup,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateMonthDropDate,
  expandRecurringEvents,
  formatDate,
  getGroupToResourceIdMap,
  getIndexFromDragPoint,
  getOrderedResources,
  toDateString,
} from '../../utils';
import { DragContext } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from '../MoreEvents/MoreEvents';
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
  | 'resourcesMonthViewGroupColumn'
  | 'resourcesMonthViewGroupColumnEmpty'
  | MoreEventsStylesNames
  | CombinedScheduleHeaderStylesNames;

export type ResourcesMonthViewCssVariables = {
  resourcesMonthView:
    | '--resources-month-view-radius'
    | '--resources-month-view-day-width'
    | '--resources-month-view-row-height'
    | '--resources-month-view-group-label-width';
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

  /** List of resource groups to display as a column to the left of resource labels */
  groups?: ScheduleResourceGroup[];

  /** Function to customize group label rendering */
  renderGroupLabel?: (group: ScheduleResourceGroup) => React.ReactNode;

  /** Width of the group label column @default 80px */
  groupLabelWidth?: React.CSSProperties['width'];

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
  maxEventsPerTimeSlot?: number;

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
  (_theme, { radius, dayWidth, rowHeight, groupLabelWidth }) => ({
    resourcesMonthView: {
      '--resources-month-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-month-view-day-width': rem(dayWidth),
      '--resources-month-view-row-height': rem(rowHeight),
      '--resources-month-view-group-label-width': rem(groupLabelWidth),
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

function compareCellEvents(a: ScheduleEventData, b: ScheduleEventData): number {
  const aStart = dayjs(a.start);
  const bStart = dayjs(b.start);
  const aSpan = dayjs(a.end).startOf('day').diff(aStart.startOf('day'), 'day');
  const bSpan = dayjs(b.end).startOf('day').diff(bStart.startOf('day'), 'day');

  if (aSpan !== bSpan) {
    return bSpan - aSpan;
  }

  return aStart.valueOf() - bStart.valueOf();
}

function getFirstAvailableRow(usedRows: Set<number>, maxRows: number): number | null {
  for (let row = 0; row < maxRows; row += 1) {
    if (!usedRows.has(row)) {
      return row;
    }
  }

  return null;
}

interface ResourcesMonthViewCellLayout {
  visible: { event: ScheduleEventData; row: number }[];
  hiddenCount: number;
}

interface ResourcesMonthViewSegment {
  event: ScheduleEventData;
  startDayIndex: number;
  endDayIndex: number;
  row: number;
  clipStart: boolean;
  clipEnd: boolean;
  hanging: 'start' | 'end' | 'both' | 'none';

  /** True when any day the segment covers shows a "+N more" indicator (those days compress rows) */
  hiddenInSpan: boolean;
}

interface ResourcesMonthViewResourceLayout {
  byDay: Record<string, ResourcesMonthViewCellLayout>;
  segments: ResourcesMonthViewSegment[];
}

function isMultiDayEvent(event: ScheduleEventData): boolean {
  return dayjs(event.end).startOf('day').isAfter(dayjs(event.start).startOf('day'));
}

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
    groups,
    renderGroupLabel,
    groupLabelWidth,
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
    maxEventsPerTimeSlot: _maxEventsPerTimeSlot,
    moreEventsProps,
    recurrenceExpansionLimit,
    ...others
  } = props;

  const maxEventsPerTimeSlot = Math.min(10, Math.max(1, _maxEventsPerTimeSlot ?? 2));

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
  const { orderedResources, groupRanges, resourceGroupMap } = useMemo(
    () => getOrderedResources(resources, groups),
    [resources, groups]
  );
  const hasGroups = groupRanges.length > 0;

  const monthDays = useMemo(() => {
    const start = dayjs(date).startOf('month');
    const daysCount = start.endOf('month').date();
    const weekendDayList = ctx.getWeekendDays(weekendDays);
    const days: string[] = [];
    for (let d = 1; d <= daysCount; d++) {
      const day = start.date(d);
      if (!withWeekendDays && weekendDayList.includes(day.day() as DayOfWeek)) {
        continue;
      }
      days.push(day.format('YYYY-MM-DD'));
    }
    return days;
  }, [date, withWeekendDays, weekendDays, ctx]);

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

  const expandedEvents = useMemo(
    () =>
      expandRecurringEvents({
        events,
        rangeStart: dayjs(date).startOf('month').toDate(),
        rangeEnd: dayjs(date).endOf('month').toDate(),
        expansionLimit: recurrenceExpansionLimit,
      }),
    [events, date, recurrenceExpansionLimit]
  );

  const { eventsByResourceAndDay, eventLayoutByResource } = useMemo(() => {
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

    const eventLayoutByResource: Record<string | number, ResourcesMonthViewResourceLayout> = {};
    const monthRangeStart = dayjs(monthDays[0]).startOf('day');
    const monthEndExclusive = dayjs(monthDays[monthDays.length - 1])
      .add(1, 'day')
      .startOf('day');

    for (const resource of resources) {
      const byDay: Record<string, ResourcesMonthViewCellLayout> = {};
      const lastRow = new Map<string | number, number>();
      const rowByEventDay = new Map<string | number, Map<number, number>>();
      const overlapByEvent = new Map<
        string | number,
        { event: ScheduleEventData; days: number[] }
      >();

      monthDays.forEach((day, dayIndex) => {
        const dayEvents = eventsByResourceAndDay[resource.id][day];
        dayEvents.sort(compareCellEvents);

        for (const event of dayEvents) {
          const overlap = overlapByEvent.get(event.id);
          if (overlap) {
            overlap.days.push(dayIndex);
          } else {
            overlapByEvent.set(event.id, { event, days: [dayIndex] });
          }
        }

        const usedRows = new Set<number>();
        const visible: ResourcesMonthViewCellLayout['visible'] = [];
        let hiddenCount = 0;

        for (const event of dayEvents) {
          let row: number | null | undefined = lastRow.get(event.id);

          if (row === undefined || row >= maxEventsPerTimeSlot || usedRows.has(row)) {
            row = getFirstAvailableRow(usedRows, maxEventsPerTimeSlot);
          }

          if (row === null) {
            hiddenCount += 1;
            continue;
          }

          usedRows.add(row);
          visible.push({ event, row });
          if (!rowByEventDay.has(event.id)) {
            rowByEventDay.set(event.id, new Map());
          }
          rowByEventDay.get(event.id)!.set(dayIndex, row);
          lastRow.set(event.id, row);
        }

        byDay[day] = { visible, hiddenCount };
      });

      const segments: ResourcesMonthViewSegment[] = [];

      for (const { event, days } of overlapByEvent.values()) {
        if (!isMultiDayEvent(event)) {
          continue;
        }

        const firstOverlap = days[0];
        const lastOverlap = days[days.length - 1];
        const rows = rowByEventDay.get(event.id);
        const extendsBefore = dayjs(event.start).isBefore(monthRangeStart);
        const extendsAfter = dayjs(event.end).isAfter(monthEndExclusive);
        let run: { startDayIndex: number; endDayIndex: number; row: number } | null = null;

        const flushRun = () => {
          if (!run) {
            return;
          }
          const clipStart = run.startDayIndex > firstOverlap;
          const clipEnd = run.endDayIndex < lastOverlap;
          const hangStart = !clipStart && extendsBefore;
          const hangEnd = !clipEnd && extendsAfter;
          let hiddenInSpan = false;
          for (let dayIndex = run.startDayIndex; dayIndex <= run.endDayIndex; dayIndex += 1) {
            if ((byDay[monthDays[dayIndex]]?.hiddenCount ?? 0) > 0) {
              hiddenInSpan = true;
              break;
            }
          }
          segments.push({
            event,
            startDayIndex: run.startDayIndex,
            endDayIndex: run.endDayIndex,
            row: run.row,
            clipStart,
            clipEnd,
            hanging: hangStart && hangEnd ? 'both' : hangStart ? 'start' : hangEnd ? 'end' : 'none',
            hiddenInSpan,
          });
          run = null;
        };

        for (let dayIndex = firstOverlap; dayIndex <= lastOverlap; dayIndex += 1) {
          const row = rows?.get(dayIndex);

          if (row === undefined) {
            flushRun();
            continue;
          }

          if (run && run.row === row && run.endDayIndex === dayIndex - 1) {
            run.endDayIndex = dayIndex;
          } else {
            flushRun();
            run = { startDayIndex: dayIndex, endDayIndex: dayIndex, row };
          }
        }

        flushRun();
      }

      eventLayoutByResource[resource.id] = { byDay, segments };
    }

    return { eventsByResourceAndDay, eventLayoutByResource };
  }, [resources, monthDays, expandedEvents, maxEventsPerTimeSlot]);

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

  const groupToResourceId = useMemo(() => getGroupToResourceIdMap(resources), [resources]);

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
    return getIndexFromDragPoint(cellsRef.current[resourceIndex] ?? [], event.clientX);
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

  const rowHeightPercent = 100 / maxEventsPerTimeSlot;

  const rows = orderedResources.map((resource, resourceIndex) => {
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
      const layout = eventLayoutByResource[resource.id]?.byDay[day];
      const visibleEvents = layout?.visible ?? [];
      const hiddenEventsCount = layout?.hiddenCount ?? 0;
      const isFirstCell = resourceIndex === 0 && dayIndex === 0;
      const dayLeftPercent = (dayIndex / totalDays) * 100;
      const dayWidthPercent = 100 / totalDays;

      const hasHiddenEvents = hiddenEventsCount > 0 && mode !== 'static';

      visibleEvents.forEach(({ event, row }) => {
        if (isMultiDayEvent(event)) {
          return;
        }

        const isDraggable = dragDrop.isDraggableEvent(event);
        const topValue = hasHiddenEvents
          ? `calc((100% - 18px) * ${row} / ${maxEventsPerTimeSlot} + 1px)`
          : `calc(${row * rowHeightPercent}% + 1px)`;
        const heightValue = hasHiddenEvents
          ? `calc((100% - 18px) / ${maxEventsPerTimeSlot} - 2px)`
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
            labels={labels}
            renderEventBody={renderEventBody}
            renderEvent={renderEvent}
            onEventClick={onEventClick}
            style={{
              position: 'absolute',
              bottom: 1,
              left: `calc(${dayLeftPercent}% + 1px)`,
              width: `calc(${dayWidthPercent}% - 2px)`,
              height: 18,
              zIndex: 4,
            }}
            {...stylesApiProps}
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

    const resourceSegments = eventLayoutByResource[resource.id]?.segments ?? [];

    resourceSegments.forEach((segment) => {
      const isDraggable = dragDrop.isDraggableEvent(segment.event);
      const segmentLeftPercent = (segment.startDayIndex / totalDays) * 100;
      const segmentWidthPercent =
        ((segment.endDayIndex - segment.startDayIndex + 1) / totalDays) * 100;
      const compressed = segment.hiddenInSpan && mode !== 'static';
      const topValue = compressed
        ? `calc((100% - 18px) * ${segment.row} / ${maxEventsPerTimeSlot} + 1px)`
        : `calc(${segment.row * rowHeightPercent}% + 1px)`;
      const heightValue = compressed
        ? `calc((100% - 18px) / ${maxEventsPerTimeSlot} - 2px)`
        : `calc(${rowHeightPercent}% - 2px)`;

      eventNodes.push(
        <ScheduleEvent
          key={`${segment.event.id}-segment-${segment.startDayIndex}`}
          event={segment.event}
          nowrap
          autoSize
          size="sm"
          hanging={segment.hanging}
          draggable={isDraggable}
          renderEventBody={renderEventBody}
          renderEvent={renderEvent}
          radius={radius}
          mode={mode}
          mod={{ 'clip-start': segment.clipStart, 'clip-end': segment.clipEnd }}
          onClick={onEventClick ? (e) => onEventClick(segment.event, e) : undefined}
          style={{
            position: 'absolute',
            top: topValue,
            left: `calc(${segmentLeftPercent}% + 1px)`,
            width: `calc(${segmentWidthPercent}% - 2px)`,
            height: heightValue,
            zIndex: 3,
          }}
        />
      );
    });

    const groupInfo = hasGroups ? resourceGroupMap[resourceIndex] : undefined;
    const isGroupStart = groupInfo?.position === 'first' || groupInfo?.position === 'only';

    const groupCell =
      groupInfo !== undefined ? (
        groupInfo !== null ? (
          <Box
            {...getStyles('resourcesMonthViewGroupColumn')}
            mod={{ 'group-position': groupInfo.position }}
          >
            {isGroupStart && (
              <span
                style={
                  groupInfo.count > 1
                    ? {
                        transform: `translateY(calc((${groupInfo.count - 1} * (var(--resources-month-view-row-height) + 1px)) / 2))`,
                      }
                    : undefined
                }
              >
                {renderGroupLabel ? renderGroupLabel(groupInfo.group) : groupInfo.group.label}
              </span>
            )}
          </Box>
        ) : (
          <Box {...getStyles('resourcesMonthViewGroupColumnEmpty')} />
        )
      ) : null;

    return (
      <div {...getStyles('resourcesMonthViewRow')} key={resource.id}>
        {groupCell}
        <div
          {...getStyles('resourcesMonthViewResourceLabel')}
          data-has-groups={hasGroups || undefined}
        >
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
          'event-interaction': dragDrop.dragContextValue.isDragging,
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
          scrollbars="x"
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
              <div
                {...getStyles('resourcesMonthViewCorner')}
                key="corner"
                ref={resourceLabelRef}
                style={
                  hasGroups
                    ? {
                        flexBasis:
                          'calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))',
                        minWidth:
                          'calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))',
                      }
                    : undefined
                }
              >
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
