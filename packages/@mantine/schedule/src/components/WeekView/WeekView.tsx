import dayjs from 'dayjs';
import { useState } from 'react';
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
  ScrollAreaAutosizeProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DayOfWeek } from '../../types';
import { formatDate, getDayTimeIntervals, getWeekDays, getWeekNumber } from '../../utils';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorStylesNames,
} from '../CurrentTimeIndicator/CurrentTimeIndicator';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { WeekViewDay } from './WeekViewDay';
import classes from './WeekView.module.css';

export type WeekViewHighlightToday = 'weekday' | 'column' | false;

export type WeekViewStylesNames =
  | 'weekView'
  | 'weekViewHeader'
  | 'weekViewInner'
  | 'weekViewAllDaySlots'
  | 'weekViewAllDaySlot'
  | 'weekViewAllDaySlotsLabel'
  | 'weekViewScrollArea'
  | 'weekViewCorner'
  | 'weekViewSlotLabels'
  | 'weekViewSlotLabel'
  | 'weekViewDayLabel'
  | 'weekViewDayWeekday'
  | 'weekViewDay'
  | 'weekViewDayNumber'
  | 'weekViewDaySlot'
  | 'weekViewDaySlots'
  | 'weekViewWeekLabel'
  | 'weekViewWeekNumber'
  | CurrentTimeIndicatorStylesNames;

export type WeekViewCssVariables = {
  weekView: '--week-view-radius';
};

export interface WeekViewProps
  extends BoxProps, StylesApiProps<WeekViewFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Week to display, Date object or date string in `YYYY-MM-DD` format */
  week: Date | string;

  /** Start time for the day view, in `HH:mm:ss` format @default `00:00:00` */
  startTime?: string;

  /** End time for the day view, in `HH:mm:ss` format @default `23:59:59` */
  endTime?: string;

  /** Number of minutes for each interval in the day view @default `60` */
  intervalMinutes?: number;

  /** Dayjs format for slot labels or a callback function that returns formatted value @default `HH:mm`  */
  slotLabelFormat?: DateLabelFormat;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. @default `'ddd'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `ScheduleProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column @default `'weekday'` */
  highlightToday?: WeekViewHighlightToday;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Props passed down to the `ScrollArea.Autosize` component */
  scrollAreaProps?: ScrollAreaAutosizeProps & DataAttributes;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** If set, the week number is displayed at the top left corner @default `true` */
  withWeekNumber?: boolean;

  /** If set, displays a line indicating the current time @default `true` */
  withCurrentTimeIndicator?: boolean;

  /** If set, the time indicator displays the current time in the bubble @default `true` */
  withCurrentTimeBubble?: boolean;

  /** If set, displays all-day slots at the top of the view @default `true` */
  withAllDaySlots?: boolean;
}

export type WeekViewFactory = Factory<{
  props: WeekViewProps;
  ref: HTMLDivElement;
  stylesNames: WeekViewStylesNames;
  vars: WeekViewCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'WeekView',
  withWeekendDays: true,
  highlightToday: 'weekday',
  withCurrentTimeIndicator: true,
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
  weekdayFormat: 'ddd',
  withWeekNumber: true,
  withCurrentTimeBubble: true,
  withAllDaySlots: true,
} satisfies Partial<WeekViewProps>;

const varsResolver = createVarsResolver<WeekViewFactory>((_theme, { radius }) => ({
  weekView: { '--week-view-radius': radius ? getRadius(radius) : undefined },
}));

export const WeekView = factory<WeekViewFactory>((_props) => {
  const props = useProps('WeekView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    attributes,
    vars,
    startTime,
    endTime,
    week,
    intervalMinutes,
    slotLabelFormat,
    withWeekendDays,
    weekendDays,
    firstDayOfWeek,
    weekdayFormat,
    radius,
    highlightToday,
    withCurrentTimeIndicator,
    scrollAreaProps,
    locale,
    withWeekNumber,
    mod,
    withCurrentTimeBubble,
    withAllDaySlots,
    __staticSelector,
    ...others
  } = props;

  const getStyles = useStyles<WeekViewFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
    rootSelector: 'weekView',
  });

  const [scrolled, setScrolled] = useState(false);
  const ctx = useScheduleContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const timeValues = slots.map((interval) => {
    const intervalTime = dayjs(`${dayjs(week).format('YYYY-MM-DD')} ${interval.startTime}`);
    const label = formatDate({
      date: intervalTime,
      locale: ctx.getLocale(locale),
      format: slotLabelFormat,
    });

    return (
      <Box
        {...getStyles('weekViewSlotLabel')}
        key={interval.startTime}
        mod={{ 'hour-start': interval.isHourStart }}
      >
        {label}
      </Box>
    );
  });

  const weekdays = getWeekDays({
    week,
    withWeekendDays,
    weekendDays: ctx.getWeekendDays(weekendDays),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
  });

  const currentWeekdayIndex = withCurrentTimeIndicator
    ? weekdays.findIndex((day) => dayjs(day).isSame(dayjs(), 'date'))
    : -1;

  const weekdaysLabels = weekdays.map((day) => (
    <UnstyledButton
      {...getStyles('weekViewDayLabel')}
      key={day}
      aria-label={`${ctx.labels.weekday} ${dayjs(day).format('YYYY-MM-DD')}`}
      mod={{
        today: dayjs(day).isSame(dayjs(), 'day') && !!highlightToday,
        weekend: ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek),
      }}
    >
      <Box {...getStyles('weekViewDayWeekday')} key="weekday">
        {formatDate({ locale: ctx.getLocale(locale), date: day, format: weekdayFormat })}
      </Box>
      <div {...getStyles('weekViewDayNumber')} key="date">
        {dayjs(day).date()}
      </div>
    </UnstyledButton>
  ));

  const days = weekdays.map((day) => (
    <WeekViewDay
      key={day}
      day={day}
      slots={slots}
      getStyles={getStyles}
      highlightToday={highlightToday}
      weekendDays={weekendDays}
    />
  ));

  const allDaySlots = weekdays.map((day) => (
    <UnstyledButton
      aria-label={`${ctx.labels.allDay} ${dayjs(day).format('YYYY-MM-DD')}`}
      key={day}
      {...getStyles('weekViewDaySlot')}
    />
  ));

  return (
    <Box
      {...getStyles('weekView')}
      __vars={{
        '--indicator-offset-index':
          currentWeekdayIndex === -1 ? undefined : `${currentWeekdayIndex + 1}`,
        '--number-of-days': withWeekendDays ? '7' : `${7 - ctx.getWeekendDays(weekendDays).length}`,
      }}
      mod={[{ 'with-weekends': withWeekendDays }, mod]}
      {...others}
    >
      <ScrollArea.Autosize
        scrollbarSize={4}
        {...scrollAreaProps}
        {...getStyles('weekViewScrollArea', {
          className: scrollAreaProps?.className,
          style: scrollAreaProps?.style,
        })}
        onScrollPositionChange={(position) => {
          scrollAreaProps?.onScrollPositionChange?.(position);
          setScrolled(position.y !== 0);
        }}
      >
        <Box {...getStyles('weekViewHeader')} mod={{ scrolled }}>
          <div {...getStyles('weekViewCorner')} key="corner">
            {withWeekNumber && (
              <>
                <div {...getStyles('weekViewWeekLabel')}>{ctx.labels.week}</div>
                <div {...getStyles('weekViewWeekNumber')}>{getWeekNumber(week)}</div>
              </>
            )}
          </div>

          {weekdaysLabels}
        </Box>

        {withAllDaySlots && (
          <div {...getStyles('weekViewAllDaySlots')}>
            <div {...getStyles('weekViewAllDaySlotsLabel')}>{ctx.labels.allDay}</div>
            {allDaySlots}
          </div>
        )}

        <div {...getStyles('weekViewInner')}>
          <div {...getStyles('weekViewSlotLabels')}>{timeValues}</div>

          {withCurrentTimeIndicator && currentWeekdayIndex !== -1 && (
            <CurrentTimeIndicator
              startOffset="calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))"
              endOffset="calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))"
              timeBubbleStartOffset="calc(var(--week-view-slots-label-width) - var(--time-bubble-width))"
              currentTimeFormat={slotLabelFormat}
              withTimeBubble={withCurrentTimeBubble}
              withThumb={withCurrentTimeBubble ? currentWeekdayIndex !== 0 : true}
              locale={locale}
              __staticSelector={__staticSelector}
            />
          )}
          {days}
        </div>
      </ScrollArea.Autosize>
    </Box>
  );
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
