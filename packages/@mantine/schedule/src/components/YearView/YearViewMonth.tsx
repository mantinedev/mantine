import dayjs from 'dayjs';
import { Box, GetStylesApi, getThemeColor, UnstyledButton, useMantineTheme } from '@mantine/core';
import { DateLabelFormat, DayOfWeek } from '../../types';
import {
  formatDate,
  getMonthDays,
  getWeekdaysNames,
  getWeekNumber,
  isSameMonth,
} from '../../utils';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { GroupedEvents } from './get-year-view-events/get-year-view-events';
import type { YearViewFactory } from './YearView';

export interface YearViewMonthSettings {
  /** `dayjs` format for month label  @default `'MMMM'` */
  monthLabelFormat?: DateLabelFormat;

  /** If set, show week numbers */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default `true` */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `ScheduleProvider` */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday @default `0` */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names  @default `'d'` */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `ScheduleProvider`. */
  weekendDays?: DayOfWeek[];

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: Date) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: Date) => Record<string, any>;

  /** Called when day is clicked */
  onDayClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked */
  onWeekNumberClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with the first day of the month when month label is clicked */
  onMonthClick?: (date: Date, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, highlights the current day @default true */
  highlightToday?: boolean;
}

export interface YearViewMonthProps extends YearViewMonthSettings {
  /** Month to display, Date object or date string in `YYYY-MM-DD` format */
  month: Date | string;

  /** `useStyles` return value of `YearView` */
  getStyles: GetStylesApi<YearViewFactory>;

  /** Events grouped by date */
  groupedEvents?: GroupedEvents;
}

export function YearViewMonth({
  month,
  getStyles,
  monthLabelFormat = 'MMMM',
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
  getWeekNumberProps,
  highlightToday,
  groupedEvents,
}: YearViewMonthProps) {
  const ctx = useScheduleContext();
  const theme = useMantineTheme();
  const today = dayjs();

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
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(new Date(date)) || {};
      const isToday = dayjs(date).isSame(today, 'day') && highlightToday;
      const dayEvents = groupedEvents?.[dayjs(date).format('YYYY-MM-DD')] || [];

      const indicators = dayEvents.slice(0, 3).map((event) => (
        <div
          {...getStyles('yearViewDayIndicator', {
            style: { backgroundColor: getThemeColor(event.color, theme) },
          })}
          key={event.id}
        />
      ));

      return (
        <UnstyledButton
          aria-label={ariaLabel}
          {...dayProps}
          {...getStyles('yearViewDay', { className: dayProps.className, style: dayProps.style })}
          key={date}
          mod={[{ outside, weekend, today: isToday }, dayProps.mod]}
          onClick={(event) => {
            onDayClick?.(dayjs(date).startOf('day').toDate(), event);
            dayProps.onClick?.(event);
          }}
        >
          {dayjs(date).format('D')}

          <div {...getStyles('yearViewDayIndicators')}>{indicators}</div>
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(new Date(week[0])) || {};
    const weekNumber = getWeekNumber(week);

    return (
      <div {...getStyles('yearViewWeek')} key={index}>
        {withWeekNumbers && (
          <UnstyledButton
            key={weekNumber}
            aria-label={`Week ${weekNumber}`}
            {...weekNumberProps}
            onClick={(event) => {
              onWeekNumberClick?.(dayjs(week[0]).startOf('day').toDate(), event);
              weekNumberProps.onClick?.(event);
            }}
            {...getStyles('yearViewWeekNumber', {
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
      mod={[{ 'with-week-numbers': withWeekNumbers, 'with-weekdays': withWeekDays }]}
      {...getStyles('yearViewMonth')}
    >
      <UnstyledButton
        onClick={(event) => onMonthClick?.(dayjs(month).startOf('month').toDate(), event)}
        {...getStyles('yearViewMonthCaption')}
      >
        {formatDate({ locale: ctx.getLocale(locale), date: month, format: monthLabelFormat })}
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
