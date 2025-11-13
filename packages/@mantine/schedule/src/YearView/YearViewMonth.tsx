import dayjs from 'dayjs';
import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import {
  DayOfWeek,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
  useDatesContext,
} from '@mantine/dates-utils';
import { DateLabelFormat } from '../../../dates-utils/lib/types';
import type { YearViewFactory } from './YearView';

export interface YearViewMonthSettings {
  /** `dayjs` format for month label  @default `'MMMM'` */
  monthLabelFormat?: string;

  /** If set, show week numbers */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday @default `0` */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names  @default `'d'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Props passed down to the day button */
  getDayProps?: (date: Date) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with the first day of the month when month label is clicked */
  onMonthClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface YearViewMonthProps extends YearViewMonthSettings {
  /** Month to display, Date object or date string in `YYYY-MM-DD` format */
  month: Date | string;

  /** `useStyles` return value of `YearView` */
  getStyles: GetStylesApi<YearViewFactory>;
}

export function YearViewMonth({
  month,
  getStyles,
  monthLabelFormat,
  withWeekNumbers,
  withWeekDays,
  locale,
  firstDayOfWeek,
  weekdayFormat,
  weekendDays,
  getDayProps,
  onDayClick,
  onWeekNumberClick,
  onMonthClick,
}: YearViewMonthProps) {
  const ctx = useDatesContext();

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
      }).map((day, index) => (
        <div {...getStyles('yearViewWeekday')} key={index}>
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
        .format('D MMMM YYYY');

      const dayProps = getDayProps?.(new Date(date)) || {};

      return (
        <UnstyledButton
          {...getStyles('yearViewDay')}
          key={date}
          aria-label={ariaLabel}
          mod={{ outside, weekend }}
          onClick={(event) => {
            onDayClick?.(new Date(date), event);
            dayProps.onClick?.(event);
          }}
        >
          {dayjs(date).format('D')}
        </UnstyledButton>
      );
    });

    return (
      <div {...getStyles('yearViewWeek')} key={index}>
        {withWeekNumbers && (
          <UnstyledButton
            onClick={(event) => onWeekNumberClick?.(new Date(week[0]), event)}
            {...getStyles('yearViewWeekNumber')}
          >
            {getWeekNumber(week)}
          </UnstyledButton>
        )}

        {days}
      </div>
    );
  });

  return (
    <Box
      mod={[{ 'with-week-numbers': withWeekNumbers, 'with-weekdays': withWeekDays }]}
      {...getStyles('yearViewMonth')}
    >
      <UnstyledButton
        onClick={(event) => onMonthClick?.(dayjs(month).startOf('month').toDate(), event)}
        {...getStyles('yearViewMonthCaption')}
      >
        {dayjs(month).locale(ctx.getLocale(locale)).format(monthLabelFormat)}
      </UnstyledButton>

      {weekdays && (
        <div {...getStyles('yearViewWeekdays')}>
          {withWeekNumbers && <div {...getStyles('yearViewWeekdaysCorner')} />}
          {weekdays}
        </div>
      )}

      {weeks}
    </Box>
  );
}
