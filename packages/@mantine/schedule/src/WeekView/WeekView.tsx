import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { DateLabelFormat, DayOfWeek, getDayTimeIntervals, getWeekDays } from '@mantine/dates-utils';
import { WeekViewDay } from './WeekViewDay';
import classes from './WeekView.module.css';

export type WeekViewHighlightToday = 'weekday' | 'column' | false;

export type WeekViewStylesNames =
  | 'weekView'
  | 'weekViewSlotLabels'
  | 'weekViewSlotLabel'
  | 'weekViewDayLabel'
  | 'weekViewWeekday'
  | 'weekViewDay'
  | 'weekViewDayNumber';

export type WeekViewCssVariables = {
  weekView: '--test';
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

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column @default `'column'` */
  highlightToday?: WeekViewHighlightToday;

  /** If set, displays a line indicating the current time @default `true` */
  withCurrentTimeLine?: boolean;
}

export type WeekViewFactory = Factory<{
  props: WeekViewProps;
  ref: HTMLDivElement;
  stylesNames: WeekViewStylesNames;
  vars: WeekViewCssVariables;
}>;

const defaultProps = {
  withWeekendDays: true,
  highlightToday: 'column',
  withCurrentTimeLine: true,
  startTime: '00:00:00',
  endTime: '23:59:59',
  slotLabelFormat: 'HH:mm',
  intervalMinutes: 60,
} satisfies Partial<WeekViewProps>;

const varsResolver = createVarsResolver<WeekViewFactory>(() => ({
  weekView: {
    '--test': 'test',
  },
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

  const slots = getDayTimeIntervals({ startTime, endTime, intervalMinutes });

  const labels = slots.map((interval) => {
    const intervalTime = dayjs(`${week} ${interval.startTime}`);
    const label =
      typeof slotLabelFormat === 'function'
        ? slotLabelFormat(intervalTime.format('YYYY-MM-DD HH:mm:ss'))
        : intervalTime.format(slotLabelFormat);

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

  const days = getWeekDays({ week, withWeekendDays, weekendDays, firstDayOfWeek }).map((day) => (
    <WeekViewDay key={day} day={day} slots={slots} getStyles={getStyles} />
  ));

  return (
    <Box {...getStyles('weekView')} {...others}>
      <div {...getStyles('weekViewSlotLabels')}>{labels}</div>
      {days}
    </Box>
  );
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
