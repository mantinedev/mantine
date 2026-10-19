import dayjs from 'dayjs';
import { Box, GetStylesApi, getThemeColor, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
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
} from '../../utils';
import {
  getHiddenWeekendColumns,
  getVisibleWeekDays,
} from '../../utils/get-visible-week-days/get-visible-week-days';
import { GroupedEvents } from './get-year-view-events/get-year-view-events';
import type { YearViewFactory } from './YearView';

export type YearViewRenderDay = (
  date: DateStringValue,
  events: ScheduleEventData[]
) => React.ReactNode;

export interface YearViewDayKeydownPayload {
  weekIndex: number;
  dayIndex: number;
  date: string;
}

export interface YearViewMonthSettings {
  /** `dayjs` format for month label  @default 'MMMM' @category appearance */
  monthLabelFormat?: DateLabelFormat;

  /** If set, show week numbers @category appearance */
  withWeekNumbers?: boolean;

  /** If set, weekdays names are displayed in the first row @default true @category appearance */
  withWeekDays?: boolean;

  /** Locale passed down to dayjs, overrides value defined on `DatesProvider` @category appearance */
  locale?: string;

  /** Number 0-6, where 0 – Sunday and 6 – Saturday @default 0 @category appearance */
  firstDayOfWeek?: DayOfWeek;

  /** `dayjs` format for weekdays names  @default 'd' @category appearance */
  weekdayFormat?: DateLabelFormat;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. @category appearance */
  weekendDays?: DayOfWeek[];

  /** If set, weekend days are displayed. When `false`, weekend columns are hidden and the month grid shrinks. @default true @category appearance */
  withWeekendDays?: boolean;

  /** Props passed down to the week number button */
  getWeekNumberProps?: (weekStartDate: DateStringValue) => Record<string, any>;

  /** Props passed down to the day button */
  getDayProps?: (date: DateStringValue) => Record<string, any>;

  /** Called when day is clicked @category behavior */
  onDayClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with first day of the week when week number is clicked @category behavior */
  onWeekNumberClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Called with the first day of the month when month label is clicked @category behavior */
  onMonthClick?: (date: DateStringValue, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** If set, highlights the current day @default true @category appearance */
  highlightToday?: boolean;

  /** Labels override for i18n @category appearance */
  labels?: ScheduleLabelsOverride;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions @category behavior */
  mode?: ScheduleMode;

  /** If true, days from adjacent months are displayed @default true @category appearance */
  withOutsideDays?: boolean;

  /**
   * A function to replace the entire content of a day cell, called with the day date
   * and the events grouped on that day – the same list that is used to render the default
   * indicators. When set, default event indicators are not rendered.
   * @category appearance
   */
  renderDay?: YearViewRenderDay;
}

export interface YearViewMonthProps extends YearViewMonthSettings {
  /** Month to display, Date object or date string in `YYYY-MM-DD` format */
  month: Date | string;

  /** `useStyles` return value of `YearView` */
  getStyles: GetStylesApi<YearViewFactory>;

  /** Events grouped by date */
  groupedEvents?: GroupedEvents;

  /** Assigns ref of every day based on its position in the month, used for keyboard navigation */
  __getDayRef?: (
    weekIndex: number,
    dayIndex: number,
    node: HTMLButtonElement
  ) => void | (() => void);

  /** Called when any keydown event is registered on day, used for keyboard navigation */
  __onDayKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: YearViewDayKeydownPayload
  ) => void;

  /** Index of the first day of the month in the grid (for determining which day should be in tab order) */
  firstDayIndex?: { weekIndex: number; dayIndex: number };
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
  withWeekendDays,
  getDayProps,
  onDayClick,
  onWeekNumberClick,
  onMonthClick,
  getWeekNumberProps,
  highlightToday,
  labels,
  groupedEvents,
  mode,
  withOutsideDays,
  renderDay,
  __getDayRef,
  __onDayKeyDown,
  firstDayIndex,
}: YearViewMonthProps) {
  const ctx = useDatesContext();
  const theme = useMantineTheme();
  const today = dayjs();

  const resolvedFirstDayOfWeek = ctx.getFirstDayOfWeek(firstDayOfWeek);
  const resolvedWeekendDays = ctx.getWeekendDays(weekendDays);
  const hiddenColumns = new Set(
    getHiddenWeekendColumns({
      weekendDays: resolvedWeekendDays,
      firstDayOfWeek: resolvedFirstDayOfWeek,
      withWeekendDays,
    })
  );

  const weekdays = withWeekDays
    ? getWeekdaysNames({
        locale: ctx.getLocale(locale),
        format: weekdayFormat,
        firstDayOfWeek: resolvedFirstDayOfWeek,
      })
        .filter((_, index) => !hiddenColumns.has(index))
        .map((day, index) => (
          <div key={index} {...getStyles('yearViewWeekday')}>
            {day}
          </div>
        ))
    : null;

  const weeks = getMonthDays({
    month: dayjs(month).format('YYYY-MM-DD'),
    firstDayOfWeek: resolvedFirstDayOfWeek,
    consistentWeeks: true,
  }).map((week, weekIndex) => {
    const visibleDays = getVisibleWeekDays({
      week,
      weekendDays: resolvedWeekendDays,
      withWeekendDays,
    });

    const days = visibleDays.map((date, dayIndex) => {
      const outside = !isSameMonth(date, month);

      if (outside && !withOutsideDays) {
        return <div key={date} {...getStyles('yearViewDay')} data-day-placeholder />;
      }

      const weekend = resolvedWeekendDays.includes(dayjs(date).day() as DayOfWeek);
      const ariaLabel = dayjs(date)
        .locale(locale || ctx.locale)
        .format('MMMM D, YYYY');

      const dayProps = getDayProps?.(dayjs(date).format('YYYY-MM-DD')) || {};
      const isToday = dayjs(date).isSame(today, 'day') && highlightToday;
      const dayEvents = groupedEvents?.[dayjs(date).format('YYYY-MM-DD')] || [];

      // Determine if this day should be in the tab order
      // Only the first day of the month (not outside) should be focusable via tab
      const isFirstDayOfMonth =
        firstDayIndex &&
        weekIndex === firstDayIndex.weekIndex &&
        dayIndex === firstDayIndex.dayIndex;
      const isInTabOrder = mode !== 'static' && !outside && isFirstDayOfMonth;

      const dayContent =
        typeof renderDay === 'function' ? (
          renderDay(dayjs(date).format('YYYY-MM-DD'), dayEvents)
        ) : (
          <>
            {dayjs(date).format('D')}

            <div {...getStyles('yearViewDayIndicators')}>
              {dayEvents.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  {...getStyles('yearViewDayIndicator', {
                    style: { backgroundColor: getThemeColor(event.color, theme) },
                  })}
                />
              ))}
            </div>
          </>
        );

      return (
        <UnstyledButton
          key={date}
          aria-label={ariaLabel}
          {...dayProps}
          {...getStyles('yearViewDay', { className: dayProps.className, style: dayProps.style })}
          mod={[{ outside, weekend, today: isToday, static: mode === 'static' }, dayProps.mod]}
          tabIndex={isInTabOrder ? 0 : -1}
          ref={(node) => (node ? __getDayRef?.(weekIndex, dayIndex, node) : undefined)}
          onKeyDown={(event) => {
            dayProps.onKeyDown?.(event);
            __onDayKeyDown?.(event, { weekIndex, dayIndex, date });
          }}
          onClick={
            mode === 'static'
              ? undefined
              : (event) => {
                  onDayClick?.(dayjs(date).format('YYYY-MM-DD'), event);
                  dayProps.onClick?.(event);
                }
          }
        >
          {dayContent}
        </UnstyledButton>
      );
    });

    const weekNumberProps = getWeekNumberProps?.(dayjs(week[0]).format('YYYY-MM-DD')) || {};
    const weekNumber = getWeekNumber(week);
    const weekNumberLabel = getLabel('weekNumber', labels)(weekNumber);
    const hasVisibleDays = withOutsideDays || visibleDays.some((date) => isSameMonth(date, month));

    return (
      <div key={weekIndex} {...getStyles('yearViewWeek')}>
        {withWeekNumbers && !hasVisibleDays && (
          <div {...getStyles('yearViewWeekNumber')} data-hidden aria-hidden />
        )}
        {withWeekNumbers && hasVisibleDays && (
          <UnstyledButton
            key={weekNumber}
            aria-label={weekNumberLabel}
            title={weekNumberLabel}
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
      mod={[
        {
          'with-week-numbers': withWeekNumbers,
          'with-weekdays': withWeekDays,
          static: mode === 'static',
        },
      ]}
      {...getStyles('yearViewMonth')}
    >
      <UnstyledButton
        onClick={
          mode === 'static'
            ? undefined
            : (event) => onMonthClick?.(dayjs(month).startOf('month').format('YYYY-MM-DD'), event)
        }
        mod={{ static: mode === 'static' }}
        tabIndex={mode === 'static' ? -1 : 0}
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
