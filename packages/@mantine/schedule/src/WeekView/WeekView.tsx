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
import { DayOfWeek, getDayTimeIntervals } from '@mantine/dates-utils';
import { DateLabelFormat } from '../../../dates-utils/lib/types';
import classes from './WeekView.module.css';

export type WeekViewStylesNames = 'weekView';
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

  /** Number of minutes for each interval in the day view @default `30` */
  intervalMinutes?: number;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names. @default `'ddd'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** If set to false, weekend days will not be displayed @default `true` */
  withWeekendDays?: boolean;

  /** `weekday` – highlights today in the weekday row, `column` – highlights today in the entire column @default `'column'` */
  highlightToday?: 'weekday' | 'column' | false;

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

  const slotsLabels = getDayTimeIntervals({
    startTime,
    endTime,
    intervalMinutes,
  }).map((interval) => (
    <div key={interval.startTime}>
      {interval.startTime} - {interval.endTime}
    </div>
  ));

  return (
    <Box {...getStyles('weekView')} {...others}>
      {slotsLabels}
    </Box>
  );
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;
