import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  DayOfWeek,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  useDatesContext,
} from '@mantine/dates-utils';
import { DateLabelFormat } from '../../../dates-utils/lib/types';
import classes from './MonthView.module.css';

export type MonthViewStylesNames =
  | 'monthView'
  | 'week'
  | 'day'
  | 'weekNumber'
  | 'weekday'
  | 'weekdays';

export interface MonthViewProps
  extends BoxProps,
    StylesApiProps<MonthViewFactory>,
    ElementProps<'div'> {
  /** Month to display, date string in `YYYY-MM-DD` format */
  month: string;

  /** If set, week numbers are displayed in the first column @default `false` */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names @default `'dd'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
}>;

const defaultProps = {
  withWeekDays: true,
} satisfies Partial<MonthViewProps>;

export const MonthView = factory<MonthViewFactory>((_props) => {
  const props = useProps('MonthView', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    mod,
    month,
    withWeekNumbers,
    withWeekDays,
    locale,
    weekdayFormat,
    firstDayOfWeek,
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: 'MonthView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: 'monthView',
  });

  const ctx = useDatesContext();

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }).map((day, index) => (
        <div {...getStyles('weekday')} key={index}>
          {day}
        </div>
      ))
    : null;

  const weeks = getMonthDays({ month, firstDayOfWeek: 1, consistentWeeks: false }).map(
    (week, index) => {
      const days = week.map((day) => (
        <div {...getStyles('day')} key={day}>
          {dayjs(day).format('D')}
        </div>
      ));

      return (
        <div {...getStyles('week')} key={index}>
          {withWeekNumbers && <div {...getStyles('weekNumber')}>{getWeekNumber(week)}</div>}
          {days}
        </div>
      );
    }
  );

  return (
    <Box
      mod={[{ 'with-week-numbers': withWeekNumbers }, mod]}
      {...getStyles('monthView')}
      {...others}
    >
      {weekdays && <div {...getStyles('weekdays')}>{weekdays}</div>}
      {weeks}
    </Box>
  );
});

MonthView.displayName = '@mantine/schedule/MonthView';
MonthView.classes = classes;
