import dayjs from 'dayjs';
import React, { useRef } from 'react';
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
import { ScheduleLabelsOverride } from '../../labels';
import {
  DateLabelFormat,
  DateStringValue,
  DayOfWeek,
  ScheduleEventData,
  ScheduleMode,
} from '../../types';
import {
  formatDate,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
  sortEvents,
  toDateString,
} from '../../utils';
import {
  handleMonthViewKeyDown,
  MonthViewControlsRef,
} from '../MonthView/handle-month-view-key-down';
import { RenderEvent } from '../ScheduleEvent/ScheduleEvent';
import { getMobileMonthViewEvents } from './get-mobile-month-view-events';
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

  /** Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format */
  date: Date | string;

  /** Called with the new date value when a date is selected */
  onDateChange?: (value: DateStringValue) => void;

  /** Currently selected date (controlled) */
  selectedDate?: Date | string | null;

  /** Default selected date (uncontrolled) */
  defaultSelectedDate?: Date | string | null;

  /** Called when selected date changes */
  onSelectedDateChange?: (value: DateStringValue | null) => void;

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
  getWeekNumberProps?: (weekStartDate: DateStringValue) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: DateStringValue) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, always renders 6 weeks in the month view @default true */
  consistentWeeks?: boolean;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** If set, days from the previous and next months are displayed to fill the weeks @default false */
  withOutsideDays?: boolean;

  /** Events to display */
  events?: ScheduleEventData[];

  /** Labels override for i18n */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @default 'default' */
  mode?: ScheduleMode;

  /** Function to fully customize event rendering, receives all props that would be passed to the root element including children */
  renderEvent?: RenderEvent;

  /** Format for the events list header date @default 'dddd, MMMM D' */
  eventsHeaderFormat?: DateLabelFormat;

  /** Placeholder text when no events for selected date @default 'No events' */
  noEventsText?: string;

  /** Called when the year back button in the header is clicked */
  onYearClick?: () => void;

  /** Called when event is clicked */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Custom header renderer, receives object with mode, date, and default header element */
  renderHeader?: (input: MobileMonthViewRenderHeaderInput) => React.ReactNode;
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
  consistentWeeks: true,
  highlightToday: true,
  mode: 'default',
  eventsHeaderFormat: 'dddd, MMMM D',
  noEventsText: 'No events',
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
    noEventsText,
    onYearClick,
    onEventClick,
    renderHeader,
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
  const firstDayPosition = useRef<{ weekIndex: number; dayIndex: number } | null>(null);

  const groupedEvents = getMobileMonthViewEvents({ date, events });

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }).map((day, index) => (
        <div {...getStyles('mobileMonthViewWeekday')} key={index}>
          {day}
        </div>
      ))
    : null;

  const weeks = getMonthDays({
    month: dayjs(date).format('YYYY-MM-DD'),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks,
  }).map((week, weekIndex) => {
    const days = week.map((dayDate, dayIndex) => {
      const outside = !isSameMonth(dayDate, date);
      const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(dayDate).day());
      const ariaLabel = dayjs(dayDate)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(dayjs(dayDate).format('YYYY-MM-DD')) || {};
      const isToday = dayjs(dayDate).isSame(today, 'day') && highlightToday;
      const isSelected = _selectedDate && dayjs(dayDate).isSame(dayjs(_selectedDate), 'day');
      const dayEvents = groupedEvents[dayjs(dayDate).format('YYYY-MM-DD')] || [];

      const shouldRender = withOutsideDays || !outside;

      if (shouldRender && firstDayPosition.current === null) {
        firstDayPosition.current = { weekIndex, dayIndex };
      }

      const isFirstDay =
        firstDayPosition.current?.weekIndex === weekIndex &&
        firstDayPosition.current?.dayIndex === dayIndex;

      const indicators = dayEvents.slice(0, 3).map((event) => (
        <div
          {...getStyles('mobileMonthViewDayIndicator', {
            style: { backgroundColor: getThemeColor(event.color, theme) },
          })}
          key={event.id}
        />
      ));

      const handleDayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const dateStr = dayjs(dayDate).format('YYYY-MM-DD');
        _setSelectedDate(dateStr);
        onDayClick?.(dateStr, event);
        dayProps.onClick?.(event);
      };

      const handleDayKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        handleMonthViewKeyDown({
          controlsRef: daysRef,
          weekIndex,
          dayIndex,
          event,
        });
      };

      return (
        <UnstyledButton
          aria-label={ariaLabel}
          aria-selected={isSelected || undefined}
          {...dayProps}
          {...getStyles('mobileMonthViewDay', {
            className: dayProps.className,
            style: dayProps.style,
          })}
          key={dayDate}
          ref={(node) => {
            if (node) {
              if (!daysRef.current[weekIndex]) {
                daysRef.current[weekIndex] = [];
              }
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
          tabIndex={mode === 'static' || !shouldRender ? -1 : isFirstDay ? 0 : -1}
          onClick={mode === 'static' || !shouldRender ? undefined : handleDayClick}
          onKeyDown={mode === 'static' || !shouldRender ? undefined : handleDayKeyDown}
        >
          {shouldRender ? dayjs(dayDate).format('D') : null}
          {shouldRender && <div {...getStyles('mobileMonthViewDayIndicators')}>{indicators}</div>}
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(dayjs(week[0]).format('YYYY-MM-DD')) || {};
    const weekNumber = getWeekNumber(week);

    return (
      <div {...getStyles('mobileMonthViewWeek')} key={weekIndex}>
        {withWeekNumbers && (
          <UnstyledButton
            key={weekNumber}
            aria-label={`Week ${weekNumber}`}
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

  const selectedDateEvents = _selectedDate
    ? sortEvents(groupedEvents[dayjs(_selectedDate).format('YYYY-MM-DD')] || [])
    : [];

  const eventsList = selectedDateEvents.map((event) => {
    const startTime = dayjs(event.start).format('HH:mm');
    const endTime = dayjs(event.end).format('HH:mm');
    const isAllDay = startTime === '00:00' && endTime === '00:00';

    const eventChildren = (
      <Box {...getStyles('mobileMonthViewEventBody')}>
        <div
          {...getStyles('mobileMonthViewEventColor', {
            style: { backgroundColor: getThemeColor(event.color, theme) },
          })}
        />
        <div>
          <Text {...getStyles('mobileMonthViewEventTitle')}>{event.title}</Text>
          <Text {...getStyles('mobileMonthViewEventTime')} size="xs" c="dimmed">
            {isAllDay ? 'All day' : `${startTime} – ${endTime}`}
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

    return <UnstyledButton {...rootProps} key={event.id} />;
  });

  const eventsHeader = _selectedDate
    ? formatDate({
        locale: ctx.getLocale(locale),
        date: _selectedDate,
        format: eventsHeaderFormat,
      })
    : '';

  const { dir } = useDirection();

  const headerLabel = formatDate({ locale: ctx.getLocale(locale), date, format: 'MMMM YYYY' });

  const defaultHeader = (
    <>
      <UnstyledButton
        {...getStyles('mobileMonthViewHeaderBackButton')}
        onClick={onYearClick}
        mod={{ static: mode === 'static' }}
        tabIndex={mode === 'static' ? -1 : 0}
      >
        <AccordionChevron transform={`rotate(${dir === 'rtl' ? -90 : 90} 0 0)`} size={20} />
        {dayjs(date).format('YYYY')}
      </UnstyledButton>
      <Text {...getStyles('mobileMonthViewHeaderLabel')} fw={600} tt="capitalize">
        {headerLabel}
      </Text>
    </>
  );

  return (
    <Box
      {...getStyles('mobileMonthView')}
      mod={{ 'with-week-numbers': withWeekNumbers }}
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
        <Text {...getStyles('mobileMonthViewEventsHeader')} fw={600} tt="capitalize">
          {eventsHeader}
        </Text>

        {eventsList.length > 0 ? (
          eventsList
        ) : (
          <Text {...getStyles('mobileMonthViewNoEvents')} c="dimmed" ta="center" py="xl">
            {noEventsText}
          </Text>
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
