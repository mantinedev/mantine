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
  ScheduleViewLevel,
} from '../../types';
import { DayView, DayViewProps, DayViewStylesNames } from '../DayView/DayView';
import {
  MobileMonthView,
  MobileMonthViewProps,
  MobileMonthViewStylesNames,
} from '../MobileMonthView/MobileMonthView';
import { MonthView, MonthViewProps, MonthViewStylesNames } from '../MonthView/MonthView';
import { RenderEventBody } from '../ScheduleEvent/ScheduleEvent';
import { WeekView, WeekViewProps, WeekViewStylesNames } from '../WeekView/WeekView';
import { YearView, YearViewProps, YearViewStylesNames } from '../YearView/YearView';
import classes from './Schedule.module.css';

export type ScheduleStylesNames =
  | 'root'
  | 'desktopView'
  | 'mobileView'
  | DayViewStylesNames
  | WeekViewStylesNames
  | MonthViewStylesNames
  | YearViewStylesNames
  | MobileMonthViewStylesNames;

export type ScheduleLayout = 'default' | 'responsive';

type ScheduleCommonProps =
  | 'date'
  | 'onDateChange'
  | 'events'
  | 'locale'
  | 'radius'
  | 'labels'
  | 'renderEventBody'
  | 'withEventsDragAndDrop'
  | 'onEventDrop'
  | 'canDragEvent'
  | 'onEventDragStart'
  | 'onEventDragEnd'
  | 'onTimeSlotClick'
  | 'onAllDaySlotClick'
  | 'onEventClick'
  | 'onDayClick'
  | 'onMonthClick'
  | 'withDragSlotSelect'
  | 'onSlotDragEnd'
  | 'view'
  | 'onViewChange'
  | 'mode'
  | 'withAgenda'
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

type ScheduleViewProps<T> = Partial<Omit<T, ScheduleCommonProps>>;

export interface ScheduleProps
  extends BoxProps, StylesApiProps<ScheduleFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Current date to display (controlled) */
  date?: Date | DateStringValue;

  /** Default date (uncontrolled) */
  defaultDate?: Date | DateStringValue;

  /** Called when date changes via navigation */
  onDateChange?: (date: DateStringValue) => void;

  /** Current view level (controlled) */
  view?: ScheduleViewLevel;

  /** Default view level (uncontrolled) */
  defaultView?: ScheduleViewLevel;

  /** Called when view level changes */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Events to display across all views */
  events?: ScheduleEventData[];

  /** Locale for date formatting (overrides `DatesProvider`) */
  locale?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius */
  radius?: MantineRadius;

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Custom event body renderer */
  renderEventBody?: RenderEventBody;

  /** Enable drag and drop for events @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped */
  onEventDrop?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends */
  onEventDragEnd?: () => void;

  /** Called when time slot is clicked in DayView/WeekView */
  onTimeSlotClick?: (data: {
    slotStart: DateTimeStringValue;
    slotEnd: DateTimeStringValue;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
  }) => void;

  /** Called when all-day slot is clicked in DayView/WeekView */
  onAllDaySlotClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called when a day is clicked in MonthView and YearView */
  onDayClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, enables drag-to-select slot ranges @default false */
  withDragSlotSelect?: boolean;

  /** Called when a slot range is selected by dragging */
  onSlotDragEnd?: (rangeStart: DateTimeStringValue, rangeEnd: DateTimeStringValue) => void;

  /** Called when event is clicked in any view */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Interaction mode:
   * - `'default'` allows all interactions
   * - `'static'` disables event interactions
   * @default 'default' */
  mode?: ScheduleMode;

  /** Called when an external item is dropped onto the schedule. Receives the `DataTransfer` object and the drop target datetime. */
  onExternalEventDrop?: (dataTransfer: DataTransfer, dropDateTime: DateTimeStringValue) => void;

  /** If true, events can be resized by dragging their edges @default false */
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

  /** Called while an event is dragged over a target to compute live feedback and again before the drop is committed, return `false` to reject the drop. Must be pure and cheap. */
  canDropEvent?: (data: ScheduleCanDropEventData) => boolean;

  /** Called while an external item is dragged over a target to compute live feedback and again before the drop is committed, return `false` to reject the drop. Must be pure and cheap. Only `dataTransfer.types` can be read while the drag is in progress. */
  canDropExternalEvent?: (data: ScheduleCanDropExternalEventData) => boolean;

  /** Called on every pointer move while an event is resized to compute live feedback and again before the resize is committed, return `false` to reject the new size. Must be pure and cheap. */
  canResizeEventTo?: (data: ScheduleCanResizeEventToData) => boolean;

  /** If set, drops and resizes that would make the event overlap another event are rejected. Pass a function to decide per pair of events: return `true` to forbid the overlap. The function runs while dragging and resizing to compute live feedback, it must be pure and cheap. @default false */
  preventEventOverlap?: PreventEventOverlap;

  /** Called when a drop or resize is rejected */
  onEventPlacementRejected?: (data: ScheduleEventPlacementRejectedData) => void;

  /** If set, background events (`display: 'background'`) can be clicked and trigger `onEventClick`. Applies to `day`, `week` and `month` views only – `YearView` and the `MobileMonthView` used by `layout="responsive"` on small screens do not render background events at all. @default false */
  withInteractiveBackgroundEvents?: boolean;

  /** Max number of generated recurring instances per recurring series @default 2000 */
  recurrenceExpansionLimit?: number;

  /** Layout mode:
   * - `'default'` uses same views on all screen sizes
   * - `'responsive'` switches to YearView/MobileMonthView on small screens
   * @default 'default' */
  layout?: ScheduleLayout;

  /** Props specific to DayView (includes `startTime`, `endTime`, `intervalMinutes`, etc.) */
  dayViewProps?: ScheduleViewProps<DayViewProps>;

  /** Props specific to WeekView (includes `startTime`, `endTime`, `intervalMinutes`, etc.) */
  weekViewProps?: ScheduleViewProps<WeekViewProps>;

  /** Props specific to MonthView (includes `firstDayOfWeek`, `weekendDays`, etc.) */
  monthViewProps?: ScheduleViewProps<MonthViewProps>;

  /** Props specific to YearView (includes `firstDayOfWeek`, `weekendDays`, etc.) */
  yearViewProps?: ScheduleViewProps<YearViewProps>;

  /** Props specific to MobileMonthView (used in responsive layout) */
  mobileMonthViewProps?: ScheduleViewProps<MobileMonthViewProps>;

  /** If set, displays an Agenda button in the header of DayView, WeekView and MonthView @default false */
  withAgenda?: boolean;
}

export type ScheduleFactory = Factory<{
  props: ScheduleProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleStylesNames;
}>;

const defaultProps: Partial<ScheduleProps> = {
  defaultView: 'week',
  mode: 'default',
  layout: 'default',
};

export const Schedule = factory<ScheduleFactory>((_props) => {
  const props = useProps('Schedule', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
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
    withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onTimeSlotClick,
    onAllDaySlotClick,
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
    layout,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    yearViewProps,
    mobileMonthViewProps,
    withAgenda,
    __staticSelector,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<ScheduleFactory>({
    name: __staticSelector || 'Schedule',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const [_view, _setView] = useUncontrolled<ScheduleViewLevel>({
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
    _setView(newView);
    onViewChange?.(newView);
  };

  const handleMonthClick = (monthDate: DateStringValue) => {
    handleDateChange(monthDate);
    handleViewChange('month');
  };

  const commonProps = {
    date: _date,
    onDateChange: handleDateChange,
    view: _view,
    onViewChange: handleViewChange,
    events,
    locale,
    radius,
    labels,
    renderEventBody,
    withEventsDragAndDrop: mode === 'static' ? false : withEventsDragAndDrop,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    onTimeSlotClick,
    onAllDaySlotClick,
    onDayClick,
    onEventClick,
    withDragSlotSelect,
    onSlotDragEnd,
    onExternalEventDrop,
    withEventResize: mode === 'static' ? false : withEventResize,
    onEventResize,
    canResizeEvent,
    recurrenceExpansionLimit,
    mode,
    withAgenda,
  };

  const dropValidationProps = {
    canDropEvent,
    canDropExternalEvent,
    preventEventOverlap,
    onEventPlacementRejected,
  };

  const placementValidationProps = { ...dropValidationProps, canResizeEventTo };

  const desktopContent = (() => {
    switch (_view) {
      case 'day':
        return (
          <DayView
            {...commonProps}
            {...placementValidationProps}
            withInteractiveBackgroundEvents={
              mode === 'static' ? false : withInteractiveBackgroundEvents
            }
            {...dayViewProps}
          />
        );
      case 'week':
        return (
          <WeekView
            {...commonProps}
            {...placementValidationProps}
            withInteractiveBackgroundEvents={
              mode === 'static' ? false : withInteractiveBackgroundEvents
            }
            {...weekViewProps}
          />
        );
      case 'month':
        return (
          <MonthView
            {...commonProps}
            {...dropValidationProps}
            withInteractiveBackgroundEvents={
              mode === 'static' ? false : withInteractiveBackgroundEvents
            }
            {...monthViewProps}
          />
        );
      case 'year':
        return <YearView {...commonProps} onMonthClick={handleMonthClick} {...yearViewProps} />;
      default:
        return null;
    }
  })();

  const mobileContent = (() => {
    switch (_view) {
      case 'day':
      case 'week':
      case 'month':
        return (
          <MobileMonthView
            date={_date}
            onDateChange={handleDateChange}
            events={events}
            locale={locale}
            radius={radius}
            labels={labels}
            mode={mode}
            recurrenceExpansionLimit={recurrenceExpansionLimit}
            onYearClick={() => handleViewChange('year')}
            onEventClick={onEventClick}
            {...mobileMonthViewProps}
          />
        );
      case 'year':
        return <YearView {...commonProps} onMonthClick={handleMonthClick} {...yearViewProps} />;
      default:
        return null;
    }
  })();

  if (layout === 'responsive') {
    return (
      <Box {...getStyles('root')} mod={[{ layout }, mod]} {...others}>
        <Box {...getStyles('desktopView')}>{desktopContent}</Box>
        <Box {...getStyles('mobileView')}>{mobileContent}</Box>
      </Box>
    );
  }

  return (
    <Box {...getStyles('root')} mod={mod} {...others}>
      {desktopContent}
    </Box>
  );
});

Schedule.displayName = '@mantine/schedule/Schedule';
Schedule.classes = classes;

export namespace Schedule {
  export type Props = ScheduleProps;
  export type StylesNames = ScheduleStylesNames;
  export type Factory = ScheduleFactory;
  export type Layout = ScheduleLayout;
}
