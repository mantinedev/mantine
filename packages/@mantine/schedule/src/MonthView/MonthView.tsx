import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import {
  DayOfWeek,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
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
  | 'weekdays'
  | 'weekdaysCorner';

export type MonthViewCssVariables = {
  monthView: '--month-view-radius';
};

export interface MonthViewProps
  extends BoxProps,
    StylesApiProps<MonthViewFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Month to display, Date object or date string in `YYYY-MM-DD` format */
  month: Date | string;

  /** If set, week numbers are displayed in the first column @default `false` */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday. @default `1` – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names @default `'ddd'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
}>;

const varsResolver = createVarsResolver<MonthViewFactory>((_theme, { radius }) => ({
  monthView: { '--month-view-radius': radius ? getRadius(radius) : undefined },
}));

const defaultProps = {
  withWeekDays: true,
  weekdayFormat: 'ddd',
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
    weekendDays,
    radius,
    __staticSelector,
    ...others
  } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: __staticSelector || 'MonthView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
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

  const weeks = getMonthDays({
    month: dayjs(month).format('YYYY-MM-DD'),
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: false,
  }).map((week, index) => {
    const days = week.map((date) => {
      const outside = !isSameMonth(date, month);
      const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(date).day());
      const ariaLabel = dayjs(date)
        .locale(locale || ctx.locale)
        .format('D MMMM YYYY');

      return (
        <Box {...getStyles('day')} key={date} aria-label={ariaLabel} mod={{ outside, weekend }}>
          {dayjs(date).format('D')}
        </Box>
      );
    });

    return (
      <div {...getStyles('week')} key={index}>
        {withWeekNumbers && <div {...getStyles('weekNumber')}>{getWeekNumber(week)}</div>}
        {days}
      </div>
    );
  });

  return (
    <Box
      mod={[{ 'with-week-numbers': withWeekNumbers, 'with-weekdays': withWeekDays }, mod]}
      {...getStyles('monthView')}
      {...others}
    >
      {weekdays && (
        <div {...getStyles('weekdays')}>
          {withWeekNumbers && <div {...getStyles('weekdaysCorner')} />}
          {weekdays}
        </div>
      )}

      {weeks}
    </Box>
  );
});

MonthView.displayName = '@mantine/schedule/MonthView';
MonthView.classes = classes;
