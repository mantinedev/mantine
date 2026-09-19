import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { ScheduleLabelsOverride } from '../../labels';
import {
  DateStringValue,
  DateTimeStringValue,
  PreventEventOverlap,
  ScheduleCanDropEventData,
  ScheduleCanDropExternalEventData,
  ScheduleCanResizeEventToData,
  ScheduleEventData,
  ScheduleEventPlacementRejectedData,
  ScheduleMode,
  ScheduleResourceData,
  ScheduleViewLevel,
} from '../../types';
import {
  ResourcesDayView,
  ResourcesDayViewProps,
  ResourcesDayViewStylesNames,
} from '../ResourcesDayView/ResourcesDayView';
import {
  ResourcesMonthView,
  ResourcesMonthViewProps,
  ResourcesMonthViewStylesNames,
} from '../ResourcesMonthView/ResourcesMonthView';
import {
  ResourcesWeekView,
  ResourcesWeekViewProps,
  ResourcesWeekViewStylesNames,
} from '../ResourcesWeekView/ResourcesWeekView';
import { RenderEventBody } from '../ScheduleEvent/ScheduleEvent';
import classes from './ResourcesSchedule.module.css';

export type ResourcesScheduleStylesNames =
  | 'root'
  | ResourcesDayViewStylesNames
  | ResourcesWeekViewStylesNames
  | ResourcesMonthViewStylesNames;

export type ResourcesScheduleViewLevel = 'day' | 'week' | 'month';

type ResourcesScheduleCommonProps =
  | 'date'
  | 'onDateChange'
  | 'resources'
  | 'events'
  | 'locale'
  | 'radius'
  | 'labels'
  | 'renderEventBody'
  | 'renderResourceLabel'
  | 'withEventsDragAndDrop'
  | 'onEventDrop'
  | 'canDragEvent'
  | 'onEventDragStart'
  | 'onEventDragEnd'
  | 'onTimeSlotClick'
  | 'onEventClick'
  | 'onDayClick'
  | 'withDragSlotSelect'
  | 'onSlotDragEnd'
  | 'view'
  | 'onViewChange'
  | 'mode'
  | 'onExternalEventDrop'
  | 'withEventResize'
  | 'onEventResize'
  | 'canResizeEvent'
  | 'canDropEvent'
  | 'canDropExternalEvent'
  | 'canResizeEventTo'
  | 'preventEventOverlap'
  | 'onEventPlacementRejected'
  | 'recurrenceExpansionLimit'
  | 'withInteractiveBackgroundEvents';

type ResourcesScheduleViewProps<T> = Partial<Omit<T, ResourcesScheduleCommonProps>>;

export interface ResourcesScheduleProps
  extends BoxProps, StylesApiProps<ResourcesScheduleFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** List of resources to display @category appearance */
  resources: ScheduleResourceData[];

  /** Current date to display (controlled) @category state */
  date?: Date | DateStringValue;

  /** Default date (uncontrolled) @category state */
  defaultDate?: Date | DateStringValue;

  /** Called when date changes via navigation @category state */
  onDateChange?: (date: DateStringValue) => void;

  /** Current view level (controlled) @category state */
  view?: ResourcesScheduleViewLevel;

  /** Default view level (uncontrolled) @default 'day' @category state */
  defaultView?: ResourcesScheduleViewLevel;

  /** Called when view level changes @category state */
  onViewChange?: (view: ResourcesScheduleViewLevel) => void;

  /** Events to display across all views @category appearance */
  events?: ScheduleEventData[];

  /** Locale for date formatting @category appearance */
  locale?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius @category appearance */
  radius?: MantineRadius;

  /** Labels override for i18n @category appearance */
  labels?: ScheduleLabelsOverride;

  /** Custom event body renderer @category appearance */
  renderEventBody?: RenderEventBody;

  /** Custom resource label renderer @category appearance */
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;

  /** Enable drag and drop for events @default false @category behavior */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped @category behavior */
  onEventDrop?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => void;

  /** Function to determine if event can be dragged @category behavior */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts @category behavior */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends @category behavior */
  onEventDragEnd?: () => void;

  /** Called when time slot is clicked @category behavior */
  onTimeSlotClick?: (data: {
    slotStart: DateTimeStringValue;
    slotEnd: DateTimeStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => void;

  /** Called when day is clicked in month view @category behavior */
  onDayClick?: (data: {
    date: DateStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => void;

  /** Called when event is clicked @category behavior */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select slot ranges @default false @category behavior */
  withDragSlotSelect?: boolean;

  /** Called when a slot range is selected by dragging @category behavior */
  onSlotDragEnd?: (data: {
    rangeStart: DateTimeStringValue;
    rangeEnd: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** Interaction mode @default default @category behavior */
  mode?: ScheduleMode;

  /** Called when an external item is dropped onto the schedule @category behavior */
  onExternalEventDrop?: (data: {
    dataTransfer: DataTransfer;
    dropDateTime: DateTimeStringValue;
    resourceId?: string | number;
  }) => void;

  /** If true, events can be resized by dragging their edges, resizing snaps to whole days in month view @default false @category behavior */
  withEventResize?: boolean;

  /** Called when event is resized @category behavior */
  onEventResize?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;

  /** Function to determine if event can be resized @category behavior */
  canResizeEvent?: (event: ScheduleEventData) => boolean;

  /** Called while an event is dragged over a target to compute live feedback and again before the drop is committed, return `false` to reject the drop. Must be pure and cheap. @category behavior */
  canDropEvent?: (data: ScheduleCanDropEventData) => boolean;

  /** Called while an external item is dragged over a target to compute live feedback and again before the drop is committed, return `false` to reject the drop. Must be pure and cheap. Only `dataTransfer.types` can be read while the drag is in progress. @category behavior */
  canDropExternalEvent?: (data: ScheduleCanDropExternalEventData) => boolean;

  /** Called on every pointer move while an event is resized to compute live feedback and again before the resize is committed, return `false` to reject the new size. Must be pure and cheap. @category behavior */
  canResizeEventTo?: (data: ScheduleCanResizeEventToData) => boolean;

  /** If set, drops and resizes that would make the event overlap another event are rejected. Pass a function to decide per pair of events: return `true` to forbid the overlap. The function runs while dragging and resizing to compute live feedback, it must be pure and cheap. @default false @category behavior */
  preventEventOverlap?: PreventEventOverlap;

  /** Called when a drop or resize is rejected @category behavior */
  onEventPlacementRejected?: (data: ScheduleEventPlacementRejectedData) => void;

  /** If set, background events (`display: 'background'`) can be clicked and trigger `onEventClick`. Applies to `day` and `week` views only – `ResourcesMonthView` does not render background events separately. @default false @category behavior */
  withInteractiveBackgroundEvents?: boolean;

  /** Max number of generated recurring instances @default 2000 */
  recurrenceExpansionLimit?: number;

  /** Props specific to ResourcesDayView */
  dayViewProps?: ResourcesScheduleViewProps<ResourcesDayViewProps>;

  /** Props specific to ResourcesWeekView */
  weekViewProps?: ResourcesScheduleViewProps<ResourcesWeekViewProps>;

  /** Props specific to ResourcesMonthView */
  monthViewProps?: ResourcesScheduleViewProps<ResourcesMonthViewProps>;
}

export type ResourcesScheduleFactory = Factory<{
  props: ResourcesScheduleProps;
  ref: HTMLDivElement;
  stylesNames: ResourcesScheduleStylesNames;
}>;

const defaultProps: Partial<ResourcesScheduleProps> = {
  defaultView: 'day',
  mode: 'default',
};

export const ResourcesSchedule = factory<ResourcesScheduleFactory>((_props) => {
  const props = useProps('ResourcesSchedule', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    resources,
    date,
    defaultDate,
    onDateChange,
    view,
    defaultView,
    onViewChange,
    events,
    locale,
    radius,
    labels,
    renderEventBody,
    renderResourceLabel,
    withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onTimeSlotClick,
    onDayClick,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    onExternalEventDrop,
    withEventResize,
    onEventResize,
    canResizeEvent,
    canDropEvent,
    canDropExternalEvent,
    canResizeEventTo,
    preventEventOverlap,
    onEventPlacementRejected,
    withInteractiveBackgroundEvents,
    recurrenceExpansionLimit,
    mode,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    __staticSelector,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<ResourcesScheduleFactory>({
    name: __staticSelector || 'ResourcesSchedule',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const [_view, _setView] = useUncontrolled<ResourcesScheduleViewLevel>({
    value: view,
    defaultValue: defaultView,
    onChange: onViewChange,
  });

  const [_date, _setDate] = useUncontrolled<Date | DateStringValue>({
    value: date,
    defaultValue: defaultDate ?? new Date(),
  });

  const handleDateChange = (newDate: DateStringValue) => {
    _setDate(newDate);
    onDateChange?.(newDate);
  };

  const handleViewChange = (newView: ScheduleViewLevel) => {
    if (newView === 'day' || newView === 'week' || newView === 'month') {
      _setView(newView);
    }
  };

  const commonProps = {
    resources,
    date: _date,
    onDateChange: handleDateChange,
    onViewChange: handleViewChange,
    events,
    locale,
    radius,
    labels,
    renderEventBody,
    renderResourceLabel,
    withEventsDragAndDrop: mode === 'static' ? false : withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    onExternalEventDrop,
    canDropEvent,
    canDropExternalEvent,
    canResizeEventTo,
    preventEventOverlap,
    onEventPlacementRejected,
    recurrenceExpansionLimit,
    mode,
  };

  const content = (() => {
    switch (_view) {
      case 'day':
        return (
          <ResourcesDayView
            {...commonProps}
            onTimeSlotClick={onTimeSlotClick}
            withEventResize={mode === 'static' ? false : withEventResize}
            onEventResize={onEventResize}
            canResizeEvent={canResizeEvent}
            withInteractiveBackgroundEvents={
              mode === 'static' ? false : withInteractiveBackgroundEvents
            }
            {...dayViewProps}
          />
        );
      case 'week':
        return (
          <ResourcesWeekView
            {...commonProps}
            onTimeSlotClick={onTimeSlotClick}
            withEventResize={mode === 'static' ? false : withEventResize}
            onEventResize={onEventResize}
            canResizeEvent={canResizeEvent}
            withInteractiveBackgroundEvents={
              mode === 'static' ? false : withInteractiveBackgroundEvents
            }
            {...weekViewProps}
          />
        );
      case 'month':
        return (
          <ResourcesMonthView
            {...commonProps}
            onDayClick={onDayClick}
            withEventResize={mode === 'static' ? false : withEventResize}
            onEventResize={onEventResize}
            canResizeEvent={canResizeEvent}
            {...monthViewProps}
          />
        );
      default:
        return null;
    }
  })();

  return (
    <Box {...getStyles('root')} mod={mod} {...others}>
      {content}
    </Box>
  );
});

ResourcesSchedule.displayName = '@mantine/schedule/ResourcesSchedule';
ResourcesSchedule.classes = classes;

export namespace ResourcesSchedule {
  export type Props = ResourcesScheduleProps;
  export type StylesNames = ResourcesScheduleStylesNames;
  export type Factory = ResourcesScheduleFactory;
  export type ViewLevel = ResourcesScheduleViewLevel;
}
