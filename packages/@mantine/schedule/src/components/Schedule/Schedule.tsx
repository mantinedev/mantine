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
import { DateStringValue, ScheduleEventData, ScheduleViewLevel } from '../../types';
import { DayView, DayViewProps, DayViewStylesNames } from '../DayView/DayView';
import { MonthView, MonthViewProps, MonthViewStylesNames } from '../MonthView/MonthView';
import { RenderEventBody } from '../ScheduleEvent/ScheduleEvent';
import { WeekView, WeekViewProps, WeekViewStylesNames } from '../WeekView/WeekView';
import { YearView, YearViewProps, YearViewStylesNames } from '../YearView/YearView';
import classes from './Schedule.module.css';

export type ScheduleStylesNames =
  | 'root'
  | DayViewStylesNames
  | WeekViewStylesNames
  | MonthViewStylesNames
  | YearViewStylesNames;

type ScheduleCommonProps =
  | 'date'
  | 'onDateChange'
  | 'events'
  | 'locale'
  | 'radius'
  | 'labels'
  | 'renderEventBody'
  | 'withDragDrop'
  | 'onEventDrop'
  | 'canDragEvent'
  | 'view'
  | 'onViewChange';

type ScheduleViewProps<T> = Partial<Omit<T, ScheduleCommonProps>>;

export interface ScheduleProps
  extends BoxProps,
    StylesApiProps<ScheduleFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  // === Date Management ===
  /** Current date to display (controlled) */
  date?: Date | DateStringValue;

  /** Default date (uncontrolled) */
  defaultDate?: Date | DateStringValue;

  /** Called when date changes via navigation */
  onDateChange?: (date: DateStringValue) => void;

  // === View Level ===
  /** Current view level (controlled) */
  view?: ScheduleViewLevel;

  /** Default view level (uncontrolled) */
  defaultView?: ScheduleViewLevel;

  /** Called when view level changes */
  onViewChange?: (view: ScheduleViewLevel) => void;

  // === Events ===
  /** Events to display across all views */
  events?: ScheduleEventData[];

  // === Common View Props ===
  /** Locale for date formatting (overrides DatesProvider) */
  locale?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius */
  radius?: MantineRadius;

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Custom event body renderer */
  renderEventBody?: RenderEventBody;

  // === Drag and Drop ===
  /** Enable drag and drop for events (default: false) */
  withDragDrop?: boolean;

  /** Called when event is dropped */
  onEventDrop?: (eventId: string | number, newStart: Date, newEnd: Date) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  // === View-specific Props ===
  /** Props specific to DayView (includes startTime, endTime, intervalMinutes, etc.) */
  dayViewProps?: ScheduleViewProps<DayViewProps>;

  /** Props specific to WeekView (includes startTime, endTime, intervalMinutes, etc.) */
  weekViewProps?: ScheduleViewProps<WeekViewProps>;

  /** Props specific to MonthView (includes firstDayOfWeek, weekendDays, etc.) */
  monthViewProps?: ScheduleViewProps<MonthViewProps>;

  /** Props specific to YearView (includes firstDayOfWeek, weekendDays, etc.) */
  yearViewProps?: ScheduleViewProps<YearViewProps>;
}

export type ScheduleFactory = Factory<{
  props: ScheduleProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleStylesNames;
}>;

const defaultProps: Partial<ScheduleProps> = {
  defaultView: 'week',
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
    withDragDrop,
    onEventDrop,
    canDragEvent,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    yearViewProps,
    __staticSelector,
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

  // Common props shared by ALL views
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
    withDragDrop,
    onEventDrop,
    canDragEvent,
  };

  const content = (() => {
    switch (_view) {
      case 'day':
        return <DayView {...commonProps} {...dayViewProps} />;
      case 'week':
        return <WeekView {...commonProps} {...weekViewProps} />;
      case 'month':
        return <MonthView {...commonProps} {...monthViewProps} />;
      case 'year':
        return <YearView {...commonProps} {...yearViewProps} />;
      default:
        return null;
    }
  })();

  return (
    <Box {...getStyles('root')} {...others}>
      {content}
    </Box>
  );
});

Schedule.displayName = '@mantine/schedule/Schedule';
Schedule.classes = classes;

export namespace Schedule {
  export type Props = ScheduleProps;
  export type StylesNames = ScheduleStylesNames;
  export type Factory = ScheduleFactory;
}
