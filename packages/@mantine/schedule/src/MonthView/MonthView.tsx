import dayjs from 'dayjs';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  UnstyledButton,
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
}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
  vars: MonthViewCssVariables;
}>;

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
    __staticSelector,
    getDayProps,
    getWeekNumberProps,
    onDayClick,
    onWeekNumberClick,
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
    consistentWeeks: true,
  }).map((week, index) => {
    const days = week.map((date) => {
      const outside = !isSameMonth(date, month);
      const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(date).day());
      const ariaLabel = dayjs(date)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(new Date(date)) || {};

      return (
        <UnstyledButton
          aria-label={ariaLabel}
          {...dayProps}
          {...getStyles('day', { className: dayProps.className, style: dayProps.style })}
          key={date}
          mod={{ outside, weekend }}
          onClick={(event) => {
            onDayClick?.(dayjs(date).startOf('day').toDate(), event);
            dayProps.onClick?.(event);
          }}
        >
          {dayjs(date).format('D')}
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(new Date(week[0])) || {};
    const weekNumber = getWeekNumber(week);

    return (
      <div {...getStyles('week')} key={index}>
        {withWeekNumbers && (
          <UnstyledButton
            key={weekNumber}
            aria-label={`Week ${weekNumber}`}
            {...weekNumberProps}
            onClick={(event) => {
              onWeekNumberClick?.(dayjs(week[0]).startOf('day').toDate(), event);
              weekNumberProps.onClick?.(event);
            }}
            {...getStyles('weekNumber', {
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
