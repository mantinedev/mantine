import dayjs from 'dayjs';
import { useRef } from 'react';
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
  ScrollArea,
  ScrollAreaProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { useDragDropHandlers } from '../../hooks/use-drag-drop-handlers';
import { useSlotDragSelect } from '../../hooks/use-slot-drag-select';
import { ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
  ScheduleViewLevel,
} from '../../types';
import {
  calculateMonthDropDate,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
  toDateString,
} from '../../utils';
import { DragContext } from '../DragContext/DragContext';
import { MoreEvents, MoreEventsProps } from '../MoreEvents/MoreEvents';
import { RenderEvent, RenderEventBody, ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import { MonthYearSelectProps } from '../ScheduleHeader/MonthYearSelect/MonthYearSelect';
import { CombinedScheduleHeaderStylesNames } from '../ScheduleHeader/ScheduleHeader';
import { ScheduleHeaderBase } from '../ScheduleHeader/ScheduleHeaderBase';
import { ViewSelectProps } from '../ScheduleHeader/ViewSelect/ViewSelect';
import { getMonthViewEvents } from './get-month-view-events/get-month-view-events';
import { handleMonthViewKeyDown, MonthViewControlsRef } from './handle-month-view-key-down';
import classes from './MonthView.module.css';

export type MonthViewStylesNames =
  | 'monthView'
  | 'monthViewScrollArea'
  | 'monthViewInner'
  | 'monthViewWeek'
  | 'monthViewDay'
  | 'monthViewDayLabel'
  | 'monthViewWeekNumber'
  | 'monthViewWeekday'
  | 'monthViewWeekdays'
  | 'monthViewWeekdaysCorner'
  | 'monthViewEvents'
  | CombinedScheduleHeaderStylesNames;

export type MonthViewCssVariables = {
  monthView: '--month-view-radius';
};

export interface MonthViewProps
  extends BoxProps, StylesApiProps<MonthViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** If set, week numbers are displayed in the first column @default false */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default true */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. By default, the first letter of the weekday. */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: Date) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: Date) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, always renders 6 weeks in the month view @default true */
  consistentWeeks?: boolean;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** If set, days from the previous and next months are displayed to fill the weeks @default true */
  withOutsideDays?: boolean;

  /** If set, the header is displayed @default true */
  withHeader?: boolean;

  /** Props passed down to `MonthYearSelect` component in the header */
  monthYearSelectProps?: Partial<MonthYearSelectProps>;

  /** Called when view level select button is clicked */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Props passed to previous month control */
  previousControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to next month control */
  nextControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to today control */
  todayControlProps?: React.ComponentProps<'button'> & DataAttributes;

  /** Props passed to view level select */
  viewSelectProps?: Partial<ViewSelectProps> & DataAttributes;

  /** Events to display */
  events?: ScheduleEventData[];

  /** Props passed down to `MoreEvents` component */
  moreEventsProps?: Partial<MoreEventsProps>;

  /** Function to customize event body, `event` object is passed as first argument */
  renderEventBody?: RenderEventBody;

  /** Function to fully customize event rendering, receives all props that would be passed to the root element including children */
  renderEvent?: RenderEvent;

  /** If true, events can be dragged and dropped @default false */
  withEventsDragAndDrop?: boolean;

  /** Called when event is dropped on new date */
  onEventDrop?: (eventId: string | number, newStart: Date, newEnd: Date) => void;

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

  /** Called when a day range is selected by dragging */
  onSlotDragEnd?: (rangeStart: Date, rangeEnd: Date) => void;

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default default */
  mode?: ScheduleMode;

  /** Props passed down to `ScrollArea` component */
  scrollAreaProps?: Partial<ScrollAreaProps> & DataAttributes;
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
  vars: MonthViewCssVariables;
}>;

const varsResolver = createVarsResolver<MonthViewFactory>((_theme, { radius }) => ({
  monthView: { '--month-view-radius': radius ? getRadius(radius) : undefined },
}));

const defaultProps = {
  __staticSelector: 'MonthView',
  withWeekDays: true,
  consistentWeeks: true,
  highlightToday: true,
  withOutsideDays: true,
  withHeader: true,
  weekdayFormat: 'ddd',
  withEventsDragAndDrop: false,
  withDragSlotSelect: false,
  mode: 'default',
} satisfies Partial<MonthViewProps>;

export const MonthView = factory<MonthViewFactory>((_props) => {
  const props = useProps('MonthView', defaultProps, _props);
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
    withWeekNumbers,
    withWeekDays,
    locale,
    weekdayFormat,
    firstDayOfWeek,
    weekendDays,
    __staticSelector,
    getDayProps,
    getWeekNumberProps,
    onDayClick,
    onWeekNumberClick,
    consistentWeeks,
    highlightToday,
    radius,
    withOutsideDays,
    withHeader,
    monthYearSelectProps,
    onViewChange,
    todayControlProps,
    nextControlProps,
    previousControlProps,
    viewSelectProps,
    events,
    moreEventsProps,
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
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
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
    rootSelector: 'monthView',
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MonthViewFactory>({
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

  const monthEvents = getMonthViewEvents({
    date,
    events,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    withOutsideDays,
    consistentWeeks,
  });

  const dragDrop = useDragDropHandlers<string>({
    enabled: withEventsDragAndDrop,
    mode,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    calculateDropTarget: (targetDay: string, draggedEvent: ScheduleEventData) => {
      return calculateMonthDropDate({
        draggedEvent,
        targetDay,
      });
    },
  });

  const flatDaysRef = useRef<string[]>([]);

  const slotDragSelect = useSlotDragSelect({
    enabled: withDragSlotSelect && mode !== 'static',
    onDragEnd: (startIndex, endIndex) => {
      if (!onSlotDragEnd) {
        return;
      }
      const startDay = flatDaysRef.current[startIndex];
      const endDay = flatDaysRef.current[endIndex];
      if (startDay && endDay) {
        onSlotDragEnd(dayjs(startDay).startOf('day').toDate(), dayjs(endDay).endOf('day').toDate());
      }
    },
  });

  const daysRef: MonthViewControlsRef = useRef<HTMLButtonElement[][]>([]);

  const monthDays = getMonthDays({
    month: dayjs(date).format('YYYY-MM-DD 00:00:00'),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: consistentWeeks && withOutsideDays,
  });

  const firstDayIndex = (() => {
    for (let weekIndex = 0; weekIndex < monthDays.length; weekIndex++) {
      const week = monthDays[weekIndex];
      for (let dayIndex = 0; dayIndex < week.length; dayIndex++) {
        const day = week[dayIndex];
        const outside = !isSameMonth(date, day);
        if (!outside || withOutsideDays) {
          return { weekIndex, dayIndex };
        }
      }
    }
    return { weekIndex: 0, dayIndex: 0 };
  })();

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }).map((day, index) => (
        <div {...getStyles('monthViewWeekday')} key={index}>
          {day}
        </div>
      ))
    : null;

  const monthGroup = 'month';
  flatDaysRef.current = monthDays.flat();

  const weeks = monthDays.map((week, weekIndex) => {
    if (!daysRef.current[weekIndex]) {
      daysRef.current[weekIndex] = [];
    }

    const days = week.map((day, dayIndex) => {
      const outside = !isSameMonth(date, day);
      const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day());
      const ariaLabel = dayjs(day)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(new Date(day)) || {};
      const today = dayjs(day).isSame(dayjs(), 'day') && highlightToday;

      if (outside && !withOutsideDays) {
        return (
          <div key={day} data-static {...getStyles('monthViewDay', { style: dayProps.style })} />
        );
      }

      const isFirstDay =
        weekIndex === firstDayIndex.weekIndex && dayIndex === firstDayIndex.dayIndex;

      const isDropTarget = dragDrop.isDropTarget(day);
      const flatIndex = weekIndex * 7 + dayIndex;
      const isDragSelected = slotDragSelect.isSlotSelected(flatIndex, monthGroup);

      return (
        <UnstyledButton
          aria-label={ariaLabel}
          {...dayProps}
          {...getStyles('monthViewDay', { className: dayProps.className, style: dayProps.style })}
          key={day}
          ref={(node) => {
            if (node) {
              if (!daysRef.current[weekIndex]) {
                daysRef.current[weekIndex] = [];
              }
              daysRef.current[weekIndex][dayIndex] = node;
            }
          }}
          data-drag-slot-index={withDragSlotSelect && mode !== 'static' ? flatIndex : undefined}
          data-drag-slot-group={withDragSlotSelect && mode !== 'static' ? monthGroup : undefined}
          onClick={
            mode === 'static'
              ? undefined
              : (event) => {
                  onDayClick?.(dayjs(day).startOf('day').toDate(), event);
                  dayProps.onClick?.(event);
                }
          }
          onPointerDown={
            withDragSlotSelect && mode !== 'static'
              ? (e) =>
                  slotDragSelect.handleSlotPointerDown(
                    e as React.PointerEvent<HTMLButtonElement>,
                    flatIndex,
                    monthGroup
                  )
              : undefined
          }
          onKeyDown={(event) => {
            handleMonthViewKeyDown({
              controlsRef: daysRef,
              weekIndex,
              dayIndex,
              event,
            });
            dayProps.onKeyDown?.(event);
          }}
          mod={[
            {
              outside,
              weekend,
              today,
              'drop-target': isDropTarget,
              'drag-selected': isDragSelected,
              static: mode === 'static',
            },
            dayProps.mod,
          ]}
          data-outside={outside || undefined}
          tabIndex={mode === 'static' ? -1 : isFirstDay ? 0 : -1}
          onDragOver={
            withEventsDragAndDrop && mode !== 'static'
              ? (e) => dragDrop.handleDragOver(e, day)
              : undefined
          }
          onDragLeave={
            withEventsDragAndDrop && mode !== 'static' ? dragDrop.handleDragLeave : undefined
          }
          onDrop={
            withEventsDragAndDrop && mode !== 'static'
              ? (e) => dragDrop.handleDrop(e, day)
              : undefined
          }
        >
          <span data-today={today || undefined} {...getStyles('monthViewDayLabel')}>
            {dayjs(day).format('D')}
          </span>
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(new Date(week[0])) || {};
    const weekNumber = getWeekNumber(week);

    const events = (monthEvents.groupedByWeek[weekIndex] || [])
      .filter((event) => event.position.row < 2)
      .map((event) => {
        const isDraggable = dragDrop.isDraggableEvent(event);

        return (
          <ScheduleEvent
            key={event.id}
            event={event}
            nowrap
            autoSize
            hanging={event.position.hanging}
            draggable={isDraggable}
            renderEventBody={renderEventBody}
            renderEvent={renderEvent}
            radius={radius}
            mode={mode}
            onClick={onEventClick ? (e) => onEventClick(event, e) : undefined}
            style={{
              position: 'absolute',
              top: `calc(${event.position.row * 50}% + 1px)`,
              left: `calc(${event.position.startOffset}% + 1px)`,
              width: `calc(${event.position.width}% - 2px)`,
              height: `calc(50% - 2px)`,
            }}
          />
        );
      });

    const moreEventsNodes = week.map((day, dayIndex) => {
      const dayEvents = monthEvents.groupedByDay[day] || [];
      const hiddenEventsCount = Math.max(0, dayEvents.length - 2);

      if (hiddenEventsCount <= 0) {
        return null;
      }

      // Calculate position based on day's position within the week (each day is 1/7 of the week)
      const dayStartOffset = (dayIndex / 7) * 100;
      const dayWidth = (1 / 7) * 100;

      return (
        <MoreEvents
          key={`more-${day}`}
          events={dayEvents}
          moreEventsCount={hiddenEventsCount}
          mode={mode}
          style={{
            position: 'absolute',
            top: `calc(100% - 2px)`,
            left: `calc(${dayStartOffset}% + 1px)`,
            width: `calc(${dayWidth}% - 1px)`,
            height: '22px',
            paddingInline: 4,
          }}
          {...moreEventsProps}
        />
      );
    });

    return (
      <div {...getStyles('monthViewWeek')} key={weekIndex}>
        {withWeekNumbers && (
          <UnstyledButton
            key={weekNumber}
            aria-label={`Week ${weekNumber}`}
            {...weekNumberProps}
            onClick={
              mode === 'static'
                ? undefined
                : (event) => {
                    onViewChange?.('week');
                    onDateChange?.(toDateString(week[0]));
                    onWeekNumberClick?.(dayjs(week[0]).startOf('day').toDate(), event);
                    weekNumberProps.onClick?.(event);
                  }
            }
            mod={{ static: mode === 'static' }}
            tabIndex={mode === 'static' ? -1 : 0}
            {...getStyles('monthViewWeekNumber', {
              className: weekNumberProps.className,
              style: weekNumberProps.style,
            })}
          >
            {weekNumber}
          </UnstyledButton>
        )}

        <div {...getStyles('monthViewEvents')} key="week-events">
          {events}
          {moreEventsNodes}
        </div>

        {days}
      </div>
    );
  });

  const content = (
    <Box
      mod={[
        {
          'with-week-numbers': withWeekNumbers,
          'with-weekdays': withWeekDays,
          static: mode === 'static',
          'slot-dragging': slotDragSelect.isDragging,
        },
        mod,
      ]}
      {...getStyles('monthView')}
      {...others}
    >
      {withHeader && (
        <ScheduleHeaderBase
          view="month"
          navigationHandlers={{
            previous: () => toDateString(dayjs(date).subtract(1, 'month').startOf('month')),
            next: () => toDateString(dayjs(date).add(1, 'month').startOf('month')),
            today: () => toDateString(dayjs()),
          }}
          control={{
            monthYearSelect: {
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
          viewSelectProps={viewSelectProps}
          stylesApiProps={stylesApiProps}
        />
      )}

      <ScrollArea
        scrollbarSize={4}
        {...scrollAreaProps}
        {...getStyles('monthViewScrollArea', {
          className: scrollAreaProps?.className,
          style: scrollAreaProps?.style,
        })}
      >
        <div {...getStyles('monthViewInner')}>
          {weekdays && (
            <div {...getStyles('monthViewWeekdays')}>
              {withWeekNumbers && <div {...getStyles('monthViewWeekdaysCorner')} />}
              {weekdays}
            </div>
          )}

          {weeks}
        </div>
      </ScrollArea>
    </Box>
  );

  if (withEventsDragAndDrop) {
    return <DragContext.Provider value={dragDrop.dragContextValue}>{content}</DragContext.Provider>;
  }

  return content;
});

MonthView.displayName = '@mantine/schedule/MonthView';
MonthView.classes = classes;
MonthView.varsResolver = varsResolver;
