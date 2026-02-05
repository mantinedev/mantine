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
import { DateStringValue, ScheduleEventData, ScheduleMode, ScheduleViewLevel } from '../../types';
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
  | 'view'
  | 'onViewChange'
  | 'mode';

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
  onEventDrop?: (eventId: string | number, newStart: Date, newEnd: Date) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends */
  onEventDragEnd?: () => void;

  /** Called when time slot is clicked in DayView/WeekView */
  onTimeSlotClick?: (
    slotStart: Date,
    slotEnd: Date,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;

  /** Called when all-day slot is clicked in DayView/WeekView */
  onAllDaySlotClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called when day is clicked in MonthView */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called when event is clicked in any view */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Interaction mode:
   * - `'default'` allows all interactions
   * - `'static'` disables event interactions
   * @default 'default' */
  mode?: ScheduleMode;

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
    mode,
    layout,
    dayViewProps,
    weekViewProps,
    monthViewProps,
    yearViewProps,
    mobileMonthViewProps,
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
    mode,
  };

  const desktopContent = (() => {
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
            renderEventBody={renderEventBody}
            mode={mode}
            {...mobileMonthViewProps}
          />
        );
      case 'year':
        return <YearView {...commonProps} {...yearViewProps} />;
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
