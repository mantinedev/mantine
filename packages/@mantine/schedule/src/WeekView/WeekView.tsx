import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  ScrollArea,
  ScrollAreaAutosizeProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  DateLabelFormat,
  DayOfWeek,
  getDayTimeIntervals,
  getWeekDays,
  getWeekNumber,
  useDatesContext,
} from '@mantine/dates-utils';
import { WeekViewDay } from './WeekViewDay';
import classes from './WeekView.module.css';

export type WeekViewHighlightToday = 'weekday' | 'column' | false;

export type WeekViewStylesNames =
  | 'weekView'
  | 'weekViewHeader'
  | 'weekViewInner'
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
  | 'weekViewWeekNumber';

export type WeekViewCssVariables = {
  weekView: '--week-view-radius';
};

export interface WeekViewProps
  extends BoxProps,
    StylesApiProps<WeekViewFactory>,
    ElementProps<'div'> {
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

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days are hidden @default `true` */
  withWeekendDays?: boolean;

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column @default `'weekday'` */
  highlightToday?: WeekViewHighlightToday;

  /** If set, displays a line indicating the current time @default `true` */
  withCurrentTimeLine?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Makes the current day twice larger @default false */
  emphasizeToday?: boolean;

  /** Props passed down to the `ScrollArea.Autosize` component */
  scrollAreaProps?: ScrollAreaAutosizeProps;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** If set, the week number is displayed at the top left corner @default `true` */
  withWeekNumber?: boolean;
}

export type WeekViewFactory = Factory<{
  props: WeekViewProps;
  ref: HTMLDivElement;
  stylesNames: WeekViewStylesNames;
  vars: WeekViewCssVariables;
}>;

const defaultProps = {
  withWeekendDays: true,
  highlightToday: 'weekday',
  withCurrentTimeLine: true,
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
  weekdayFormat: 'ddd',
  withWeekNumber: true,
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
    withCurrentTimeLine,
    emphasizeToday,
    scrollAreaProps,
    locale,
    withWeekNumber,
    ...others
  } = props;

  const getStyles = useStyles<WeekViewFactory>({
    name: 'WeekView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'weekView',
  });

  const [scrolled, setScrolled] = useState(false);
  const ctx = useDatesContext();
  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const timeValues = slots.map((interval) => {
    const intervalTime = dayjs(`${dayjs(week).format('YYYY-MM-DD')} ${interval.startTime}`);
    const label =
      typeof slotLabelFormat === 'function'
        ? slotLabelFormat(intervalTime.format('YYYY-MM-DD HH:mm:ss'))
        : intervalTime.locale(ctx.getLocale(locale)).format(slotLabelFormat);

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

  const weekdaysLabels = weekdays.map((day) => (
    <Box {...getStyles('weekViewDayLabel')} key={day}>
      <Box {...getStyles('weekViewDayWeekday')}>
        {typeof weekdayFormat === 'function'
          ? weekdayFormat(dayjs(day).format('YYYY-MM-DD'))
          : dayjs(day).locale(ctx.getLocale(locale)).format(weekdayFormat)}
      </Box>
      <div {...getStyles('weekViewDayNumber')}>{dayjs(day).date()}</div>
    </Box>
  ));

  const days = weekdays.map((day) => (
    <WeekViewDay
      key={day}
      day={day}
      slots={slots}
      getStyles={getStyles}
      highlightToday={highlightToday}
      weekendDays={weekendDays}
      emphasizeToday={emphasizeToday}
    />
  ));

  return (
    <Box {...getStyles('weekView')} {...others}>
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
          <div {...getStyles('weekViewCorner')}>
            {withWeekNumber && (
              <>
                <div {...getStyles('weekViewWeekLabel')}>{ctx.labels.week}</div>
                <div {...getStyles('weekViewWeekNumber')}>{getWeekNumber(week)}</div>
              </>
            )}
          </div>

          {weekdaysLabels}
        </Box>
        <div {...getStyles('weekViewInner')}>
          <div {...getStyles('weekViewSlotLabels')}>{timeValues}</div>
          {days}
        </div>
      </ScrollArea.Autosize>
    </Box>
  );
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
