import dayjs from 'dayjs';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AccordionChevron,
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineRadius,
  StylesApiProps,
  Text,
  UnstyledButton,
  useDirection,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { useUncontrolled } from '@mantine/hooks';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
} from '../../types';
import {
  expandRecurringEvents,
  formatDate,
  getHiddenWeekendColumns,
  getVisibleWeekDays,
  getWeekdaysNames,
  getWeekNumber,
  isAllDayEvent,
  isMultidayEvent,
  isSameMonth,
  sortEvents,
  toDateString,
} from '../../utils';
import { groupEventsByDay } from '../../utils/group-events-by-day/group-events-by-day';
import {
  handleMonthViewKeyDown,
  MonthViewControlsRef,
} from '../MonthView/handle-month-view-key-down';
import { RenderEvent } from '../ScheduleEvent/ScheduleEvent';
import { getMobileMonthViewWeeks } from './get-mobile-month-view-weeks';
import classes from './MobileMonthView.module.css';

export type MobileMonthViewStylesNames =
  | 'mobileMonthView'
  | 'mobileMonthViewHeader'
  | 'mobileMonthViewHeaderBackButton'
  | 'mobileMonthViewHeaderLabel'
  | 'mobileMonthViewCalendar'
  | 'mobileMonthViewWeekdays'
  | 'mobileMonthViewWeekday'
  | 'mobileMonthViewWeekdaysCorner'
  | 'mobileMonthViewWeek'
  | 'mobileMonthViewWeekNumber'
  | 'mobileMonthViewDay'
  | 'mobileMonthViewDayIndicators'
  | 'mobileMonthViewDayIndicator'
  | 'mobileMonthViewEventsList'
  | 'mobileMonthViewEventsHeader'
  | 'mobileMonthViewEvent'
  | 'mobileMonthViewEventColor'
  | 'mobileMonthViewEventBody'
  | 'mobileMonthViewEventTitle'
  | 'mobileMonthViewEventTime'
  | 'mobileMonthViewNoEvents';

export type MobileMonthViewCssVariables = {
  mobileMonthView: '--mobile-month-view-radius';
};

export interface MobileMonthViewRenderHeaderInput {
  /** Current interaction mode */
  mode: ScheduleMode;
  /** Current date displayed in the view */
  date: Date | string;
  /** Default header element */
  defaultHeader: React.ReactNode;
}

export interface MobileMonthViewProps
  extends BoxProps, StylesApiProps<MobileMonthViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format @category state */
  date: Date | string;

  /** Called with the new date value when a date is selected @category state */
  onDateChange?: (value: DateStringValue) => void;

  /** Currently selected date (controlled) @category state */
  selectedDate?: Date | string | null;

  /** Default selected date (uncontrolled) @category state */
  defaultSelectedDate?: Date | string | null;

  /** Called when selected date changes @category state */
  onSelectedDateChange?: (value: DateStringValue | null) => void;

  /** If set, week numbers are displayed in the first column @default false @category appearance */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default true @category appearance */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` @category appearance */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default 1 – Monday @category appearance */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. By default, the first letter of the weekday. @category appearance */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. @category appearance */
  weekendDays?: DayOfWeek[];

  /** If set, weekend days are displayed. When `false`, weekend columns are hidden and the month grid shrinks. @default true */
  withWeekendDays?: boolean;

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: DateStringValue) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: DateStringValue) => Record<string, any>;

  /** Called when day is clicked @category behavior */
  onDayClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked @category behavior */
  onWeekNumberClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, always renders 6 weeks in the month view @default true @category appearance */
  consistentWeeks?: boolean;

  /** If set, highlights the current day @default true @category appearance */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** If set, days from the previous and next months are displayed to fill the weeks @default false @category appearance */
  withOutsideDays?: boolean;

  /** Events to display @category appearance */
  events?: ScheduleEventData[];

  /** Labels override for i18n @category appearance */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default 'default' @category behavior */
  mode?: ScheduleMode;

  /** Function to fully customize event rendering, receives all props that would be passed to the root element including children @category appearance */
  renderEvent?: RenderEvent;

  /** Format for the events list header date @default 'dddd, MMMM D' @category appearance */
  eventsHeaderFormat?: DateLabelFormat;

  /** Called when the year back button in the header is clicked @category behavior */
  onYearClick?: () => void;

  /** Called when event is clicked @category behavior */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Custom header renderer, receives object with mode, date, and default header element @category appearance */
  renderHeader?: (input: MobileMonthViewRenderHeaderInput) => React.ReactNode;

  /** Max number of generated recurring instances per recurring series @default 2000 */
  recurrenceExpansionLimit?: number;
}

export type MobileMonthViewFactory = Factory<{
  props: MobileMonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MobileMonthViewStylesNames;
  vars: MobileMonthViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'MobileMonthView',
  withWeekDays: true,
  withWeekendDays: true,
  consistentWeeks: true,
  highlightToday: true,
  mode: 'default',
  eventsHeaderFormat: 'dddd, MMMM D',
} satisfies Partial<MobileMonthViewProps>;

const varsResolver = createVarsResolver<MobileMonthViewFactory>((_theme, { radius }) => ({
  mobileMonthView: {
    '--mobile-month-view-radius': getRadius(radius),
  },
}));

export const MobileMonthView = factory<MobileMonthViewFactory>((_props) => {
  const props = useProps('MobileMonthView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    __staticSelector,
    date,
    onDateChange,
    selectedDate,
    defaultSelectedDate,
    onSelectedDateChange,
    withWeekNumbers,
    withWeekDays,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    withWeekendDays,
    getWeekNumberProps,
    getDayProps,
    onDayClick,
    onWeekNumberClick,
    consistentWeeks,
    highlightToday,
    radius,
    withOutsideDays,
    events,
    labels,
    mode,
    renderEvent,
    eventsHeaderFormat,
    onYearClick,
    onEventClick,
    renderHeader,
    recurrenceExpansionLimit,
    ...others
  } = props;

  const ctx = useDatesContext();
  const theme = useMantineTheme();
  const today = dayjs();

  const [_selectedDate, _setSelectedDate] = useUncontrolled<Date | string | null>({
    value: selectedDate,
    defaultValue: defaultSelectedDate ?? toDateString(today),
    onChange: (value) => onSelectedDateChange?.(value ? toDateString(dayjs(value)) : null),
  });

  const { dir } = useDirection();

  const getStyles = useStyles<MobileMonthViewFactory>({
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
    rootSelector: 'mobileMonthView',
  });

  const daysRef: MonthViewControlsRef = useRef<HTMLButtonElement[][]>([]);
  const [focusedDay, setFocusedDay] = useState<{ month: string; day: string | null }>({
    month: dayjs(date).format('YYYY-MM'),
    day: null,
  });
  const pendingFocusDayRef = useRef<string | null>(null);

  const resolvedFirstDayOfWeek = ctx.getFirstDayOfWeek(firstDayOfWeek);
  const resolvedWeekendDays = ctx.getWeekendDays(weekendDays);
  const hiddenColumns = new Set(
    getHiddenWeekendColumns({
      weekendDays: resolvedWeekendDays,
      firstDayOfWeek: resolvedFirstDayOfWeek,
      withWeekendDays,
    })
  );
  const columnsCount = 7 - hiddenColumns.size;

  const displayedMonth = dayjs(date).startOf('month').format('YYYY-MM-DD');
  const monthDays = getMobileMonthViewWeeks({
    month: displayedMonth,
    firstDayOfWeek: resolvedFirstDayOfWeek,
    consistentWeeks,
    withOutsideDays,
    weekendDays: resolvedWeekendDays,
    withWeekendDays,
  });
  const monthWeeks = monthDays.map((week) => ({
    week,
    visibleDays: getVisibleWeekDays({ week, weekendDays: resolvedWeekendDays, withWeekendDays }),
  }));

  const displayedRangeStart = monthDays[0]?.[0] ?? displayedMonth;
  const displayedRangeEnd = monthDays[monthDays.length - 1]?.[6] ?? displayedMonth;

  const groupedEvents = useMemo(() => {
    const expandedEvents = expandRecurringEvents({
      events,
      rangeStart: dayjs(displayedRangeStart).startOf('day').toDate(),
      rangeEnd: dayjs(displayedRangeEnd).endOf('day').toDate(),
      expansionLimit: recurrenceExpansionLimit,
    });

    return groupEventsByDay({
      events: expandedEvents,
      rangeStart: displayedRangeStart,
      rangeEnd: displayedRangeEnd,
      componentName: 'MobileMonthView',
    });
  }, [events, displayedRangeStart, displayedRangeEnd, recurrenceExpansionLimit]);

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: resolvedFirstDayOfWeek,
      })
        .map((day, index) => ({ day, index }))
        .filter(({ index }) => !hiddenColumns.has(index))
        .map(({ day, index }) => (
          <div key={index} {...getStyles('mobileMonthViewWeekday')}>
            {day}
          </div>
        ))
    : null;

  const currentMonth = dayjs(date).format('YYYY-MM');
  if (focusedDay.month !== currentMonth) {
    setFocusedDay({ month: currentMonth, day: null });
  }

  const isDayVisible = (dayDate: string) => withOutsideDays || isSameMonth(dayDate, date);
  const daysProps = monthWeeks.map(({ visibleDays }) =>
    visibleDays.map((dayDate) => getDayProps?.(dayjs(dayDate).format('YYYY-MM-DD')) || {})
  );
  const focusableDays = monthWeeks
    .flatMap(({ visibleDays }, weekIndex) =>
      visibleDays.filter((_dayDate, dayIndex) => !daysProps[weekIndex][dayIndex].disabled)
    )
    .filter(isDayVisible);
  const findFocusableDay = (candidate: Date | string | null | undefined) =>
    candidate
      ? focusableDays.find((dayDate) => dayjs(dayDate).isSame(dayjs(candidate), 'day'))
      : undefined;

  const tabStopDay =
    findFocusableDay(focusedDay.month === currentMonth ? focusedDay.day : null) ??
    findFocusableDay(_selectedDate) ??
    findFocusableDay(today.toDate()) ??
    findFocusableDay(dayjs(date).startOf('month').toDate()) ??
    focusableDays.find((dayDate) => isSameMonth(dayDate, date)) ??
    focusableDays[0];

  useEffect(() => {
    const pendingDay = pendingFocusDayRef.current;
    pendingFocusDayRef.current = null;

    if (!pendingDay || (document.activeElement && document.activeElement !== document.body)) {
      return;
    }

    monthWeeks.forEach(({ visibleDays }, weekIndex) =>
      visibleDays.forEach((dayDate, dayIndex) => {
        if (dayDate === pendingDay && isDayVisible(dayDate)) {
          daysRef.current[weekIndex]?.[dayIndex]?.focus();
        }
      })
    );
  });

  daysRef.current.length = monthWeeks.length;

  const weeks = monthWeeks.map(({ week, visibleDays }, weekIndex) => {
    daysRef.current[weekIndex] = [];

    const days = visibleDays.map((dayDate, dayIndex) => {
      const outside = !isSameMonth(dayDate, date);
      const weekend = resolvedWeekendDays.includes(dayjs(dayDate).day() as DayOfWeek);
      const ariaLabel = dayjs(dayDate)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = daysProps[weekIndex][dayIndex];
      const isToday = dayjs(dayDate).isSame(today, 'day') && highlightToday;
      const isSelected = _selectedDate && dayjs(dayDate).isSame(dayjs(_selectedDate), 'day');
      const dayEvents = groupedEvents[dayjs(dayDate).format('YYYY-MM-DD')] || [];

      const shouldRender = withOutsideDays || !outside;
      const isTabStop = dayDate === tabStopDay;

      const indicators = dayEvents.slice(0, 3).map((event) => (
        <div
          key={event.id}
          {...getStyles('mobileMonthViewDayIndicator', {
            style: { backgroundColor: getThemeColor(event.color, theme) },
          })}
        />
      ));

      const handleDayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const dateStr = dayjs(dayDate).format('YYYY-MM-DD');
        if (
          event.currentTarget === document.activeElement &&
          dayjs(dayDate).format('YYYY-MM') !== currentMonth
        ) {
          pendingFocusDayRef.current = dayDate;
          window.setTimeout(() => {
            if (pendingFocusDayRef.current === dayDate) {
              pendingFocusDayRef.current = null;
            }
          }, 0);
        }
        _setSelectedDate(dateStr);
        onDateChange?.(dateStr);
        onDayClick?.(dateStr, event);
        dayProps.onClick?.(event);
      };

      const handleDayFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (focusedDay.month !== currentMonth || focusedDay.day !== dayDate) {
          setFocusedDay({ month: currentMonth, day: dayDate });
        }
        dayProps.onFocus?.(event);
      };

      const handleDayKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        handleMonthViewKeyDown({
          controlsRef: daysRef,
          weekIndex,
          dayIndex,
          event,
          dir,
        });
      };

      return (
        <UnstyledButton
          key={dayDate}
          aria-label={ariaLabel}
          aria-selected={isSelected || undefined}
          {...dayProps}
          {...getStyles('mobileMonthViewDay', {
            className: dayProps.className,
            style: dayProps.style,
          })}
          ref={(node) => {
            if (node) {
              daysRef.current[weekIndex][dayIndex] = node;
            }
          }}
          mod={[
            {
              outside,
              weekend,
              today: isToday,
              selected: isSelected,
              static: mode === 'static',
              hidden: !shouldRender,
            },
            dayProps.mod,
          ]}
          tabIndex={mode === 'static' || !shouldRender ? -1 : isTabStop ? 0 : -1}
          onClick={mode === 'static' || !shouldRender ? undefined : handleDayClick}
          onFocus={mode === 'static' || !shouldRender ? dayProps.onFocus : handleDayFocus}
          onKeyDown={mode === 'static' || !shouldRender ? undefined : handleDayKeyDown}
        >
          {shouldRender ? dayjs(dayDate).format('D') : null}
          {shouldRender && <div {...getStyles('mobileMonthViewDayIndicators')}>{indicators}</div>}
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(dayjs(week[0]).format('YYYY-MM-DD')) || {};
    const weekNumber = getWeekNumber(week);
    const hasVisibleDays = visibleDays.some(isDayVisible);

    return (
      <div key={weekIndex} {...getStyles('mobileMonthViewWeek')}>
        {withWeekNumbers && !hasVisibleDays && (
          <div {...getStyles('mobileMonthViewWeekNumber')} data-hidden aria-hidden />
        )}
        {withWeekNumbers && hasVisibleDays && (
          <UnstyledButton
            key={weekNumber}
            aria-label={getLabel('weekNumber', labels)(weekNumber)}
            {...weekNumberProps}
            onClick={
              mode === 'static'
                ? undefined
                : (event) => {
                    onWeekNumberClick?.(dayjs(week[0]).format('YYYY-MM-DD'), event);
                    weekNumberProps.onClick?.(event);
                  }
            }
            mod={{ static: mode === 'static' }}
            tabIndex={mode === 'static' ? -1 : 0}
            {...getStyles('mobileMonthViewWeekNumber', {
              className: weekNumberProps.className,
              style: weekNumberProps.style,
            })}
          >
            {weekNumber}
          </UnstyledButton>
        )}
        {days}
      </div>
    );
  });

  const selectedDay = _selectedDate ? dayjs(_selectedDate).format('YYYY-MM-DD') : null;
  const isSelectedDayDisplayed =
    selectedDay !== null &&
    !dayjs(selectedDay).isBefore(displayedRangeStart, 'day') &&
    !dayjs(selectedDay).isAfter(displayedRangeEnd, 'day');

  const selectedDateEvents = useMemo(() => {
    if (selectedDay === null) {
      return [];
    }

    if (isSelectedDayDisplayed) {
      return sortEvents(groupedEvents[selectedDay] || []);
    }

    const expandedEvents = expandRecurringEvents({
      events,
      rangeStart: dayjs(selectedDay).startOf('day').toDate(),
      rangeEnd: dayjs(selectedDay).endOf('day').toDate(),
      expansionLimit: recurrenceExpansionLimit,
    });

    return sortEvents(
      groupEventsByDay({
        events: expandedEvents,
        rangeStart: selectedDay,
        rangeEnd: selectedDay,
        componentName: 'MobileMonthView',
      })[selectedDay] || []
    );
  }, [selectedDay, isSelectedDayDisplayed, groupedEvents, events, recurrenceExpansionLimit]);

  const eventsList = selectedDateEvents.map((event) => {
    const startTime = dayjs(event.start).format('HH:mm');
    const endTime = dayjs(event.end).format('HH:mm');
    const isAllDay = isMultidayEvent(event) || isAllDayEvent({ event, date: _selectedDate! });

    const eventChildren = (
      <Box {...getStyles('mobileMonthViewEventBody')}>
        <div
          {...getStyles('mobileMonthViewEventColor', {
            style: { backgroundColor: getThemeColor(event.color, theme) },
          })}
        />
        <div>
          <Text {...getStyles('mobileMonthViewEventTitle')}>{event.title}</Text>
          <Text {...getStyles('mobileMonthViewEventTime')}>
            {isAllDay ? getLabel('allDay', labels) : `${startTime} – ${endTime}`}
          </Text>
        </div>
      </Box>
    );

    const rootProps: React.ComponentPropsWithoutRef<'button'> & { children: React.ReactNode } = {
      ...getStyles('mobileMonthViewEvent'),
      onClick:
        mode === 'static'
          ? undefined
          : (e: React.MouseEvent<HTMLButtonElement>) => {
              onEventClick?.(event, e);
            },
      tabIndex: mode === 'static' ? -1 : 0,
      children: eventChildren,
    };

    if (typeof renderEvent === 'function') {
      return <React.Fragment key={event.id}>{renderEvent(event, rootProps)}</React.Fragment>;
    }

    return <UnstyledButton key={event.id} {...rootProps} />;
  });

  const eventsHeader = _selectedDate
    ? formatDate({
        locale: ctx.getLocale(locale),
        date: _selectedDate,
        format: eventsHeaderFormat,
      })
    : '';

  const headerLabel = formatDate({ locale: ctx.getLocale(locale), date, format: 'MMMM YYYY' });

  const defaultHeader = (
    <>
      <UnstyledButton
        {...getStyles('mobileMonthViewHeaderBackButton')}
        onClick={onYearClick}
        mod={{ static: mode === 'static' }}
        tabIndex={mode === 'static' ? -1 : 0}
      >
        <AccordionChevron
          style={{ transform: `rotate(${dir === 'rtl' ? -90 : 90}deg)` }}
          size={20}
        />
        {dayjs(date).format('YYYY')}
      </UnstyledButton>
      <Text {...getStyles('mobileMonthViewHeaderLabel')}>{headerLabel}</Text>
    </>
  );

  return (
    <Box
      {...getStyles('mobileMonthView')}
      mod={{
        'with-week-numbers': withWeekNumbers,
        'without-weekend-days': hiddenColumns.size > 0,
      }}
      __vars={
        hiddenColumns.size > 0 ? { '--mobile-month-view-columns': `${columnsCount}` } : undefined
      }
      {...others}
    >
      <div {...getStyles('mobileMonthViewHeader')}>
        {typeof renderHeader === 'function'
          ? renderHeader({ mode: mode!, date, defaultHeader })
          : defaultHeader}
      </div>

      <Box {...getStyles('mobileMonthViewCalendar')} mod={{ 'with-weekdays': withWeekDays }}>
        {weekdays && (
          <div {...getStyles('mobileMonthViewWeekdays')}>
            {withWeekNumbers && <div {...getStyles('mobileMonthViewWeekdaysCorner')} />}
            {weekdays}
          </div>
        )}
        {weeks}
      </Box>

      <Box {...getStyles('mobileMonthViewEventsList')}>
        <Text {...getStyles('mobileMonthViewEventsHeader')}>{eventsHeader}</Text>

        {eventsList.length > 0 ? (
          eventsList
        ) : (
          <Text {...getStyles('mobileMonthViewNoEvents')}>{getLabel('noEvents', labels)}</Text>
        )}
      </Box>
    </Box>
  );
});

MobileMonthView.displayName = '@mantine/schedule/MobileMonthView';
MobileMonthView.classes = classes;
MobileMonthView.varsResolver = varsResolver;

export namespace MobileMonthView {
  export type Props = MobileMonthViewProps;
  export type Factory = MobileMonthViewFactory;
  export type StylesNames = MobileMonthViewStylesNames;
  export type CssVariables = MobileMonthViewCssVariables;
}
