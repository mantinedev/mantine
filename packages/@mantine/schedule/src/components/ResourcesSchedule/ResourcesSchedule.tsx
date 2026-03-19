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
  ScheduleEventData,
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
import { RenderEventBody } from '../ScheduleEvent/ScheduleEvent';
import classes from './ResourcesSchedule.module.css';

export type ResourcesScheduleStylesNames =
  | 'root'
  | ResourcesDayViewStylesNames
  | ResourcesMonthViewStylesNames;

export type ResourcesScheduleViewLevel = 'day' | 'month';

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
  | 'recurrenceExpansionLimit';

type ResourcesScheduleViewProps<T> = Partial<Omit<T, ResourcesScheduleCommonProps>>;

export interface ResourcesScheduleProps
  extends BoxProps, StylesApiProps<ResourcesScheduleFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** List of resources to display */
  resources: ScheduleResourceData[];

  /** Current date to display (controlled) */
  date?: Date | DateStringValue;

  /** Default date (uncontrolled) */
  defaultDate?: Date | DateStringValue;

  /** Called when date changes via navigation */
  onDateChange?: (date: DateStringValue) => void;

  /** Current view level (controlled) */
  view?: ResourcesScheduleViewLevel;

  /** Default view level (uncontrolled) @default 'day' */
  defaultView?: ResourcesScheduleViewLevel;

  /** Called when view level changes */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Events to display across all views */
  events?: ScheduleEventData[];

  /** Locale for date formatting */
  locale?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius */
  radius?: MantineRadius;

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Custom event body renderer */
  renderEventBody?: RenderEventBody;

  /** Custom resource label renderer */
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;

  /** Enable drag and drop for events @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped */
  onEventDrop?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue,
    event: ScheduleEventData,
    resourceId?: string | number
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
    event: React.MouseEvent<HTMLButtonElement>,
    resourceId?: string | number
  ) => void;

  /** Called when day is clicked in month view */
  onDayClick?: (
    date: DateStringValue,
    event: React.MouseEvent<HTMLButtonElement>,
    resourceId?: string | number
  ) => void;

  /** Called when event is clicked */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select slot ranges @default false */
  withDragSlotSelect?: boolean;

  /** Called when a slot range is selected by dragging */
  onSlotDragEnd?: (
    rangeStart: DateTimeStringValue,
    rangeEnd: DateTimeStringValue,
    resourceId?: string | number
  ) => void;

  /** Interaction mode @default default */
  mode?: ScheduleMode;

  /** Called when an external item is dropped onto the schedule */
  onExternalEventDrop?: (
    dataTransfer: DataTransfer,
    dropDateTime: DateTimeStringValue,
    resourceId?: string | number
  ) => void;

  /** If true, events can be resized @default false */
  withEventResize?: boolean;

  /** Called when event is resized */
  onEventResize?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue,
    event: ScheduleEventData
  ) => void;

  /** Function to determine if event can be resized */
  canResizeEvent?: (event: ScheduleEventData) => boolean;

  /** Max number of generated recurring instances @default 2000 */
  recurrenceExpansionLimit?: number;

  /** Props specific to ResourcesDayView */
  dayViewProps?: ResourcesScheduleViewProps<ResourcesDayViewProps>;

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
    recurrenceExpansionLimit,
    mode,
    dayViewProps,
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
    onChange: onViewChange as (view: ResourcesScheduleViewLevel) => void,
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
    if (newView === 'day' || newView === 'month') {
      _setView(newView);
    }
    onViewChange?.(newView);
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
            {...dayViewProps}
          />
        );
      case 'month':
        return <ResourcesMonthView {...commonProps} onDayClick={onDayClick} {...monthViewProps} />;
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
