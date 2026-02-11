import { NativeSelect, StylesApiProps } from '@mantine/core';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { DateStringValue, ScheduleViewLevel } from '../../types';
import { MonthYearSelectProps } from './MonthYearSelect/MonthYearSelect';
import { ScheduleHeader } from './ScheduleHeader';
import classes from './ScheduleHeader.module.css';
import { ViewSelectProps } from './ViewSelect/ViewSelect';

interface NavigationHandlers {
  /** Handler for previous button click, returns new date */
  previous: () => DateStringValue;

  /** Handler for next button click, returns new date */
  next: () => DateStringValue;

  /** Handler for today button click, returns new date */
  today: () => DateStringValue;
}

interface HeaderControlOptions {
  /** Title to render in a simple control (used by DayView, WeekView) */
  title?: React.ReactNode;
  /** MonthYearSelect props (used by MonthView, YearView) */
  monthYearSelect?: {
    yearValue: number;
    monthValue: number;
    onYearChange?: (year: number) => void;
    onMonthChange?: (month: number) => void;
    withMonths?: boolean;
  } & Partial<MonthYearSelectProps>;
  /** Minimum width for control */
  miw?: React.CSSProperties['minWidth'];
}

export interface ScheduleHeaderBaseProps {
  /** Current view level */
  view: ScheduleViewLevel;

  /** Navigation handlers for previous, next, and today */
  navigationHandlers: NavigationHandlers;

  /** Central control configuration (either title or monthYearSelect) */
  control: HeaderControlOptions;

  /** Label overrides */
  labels?: ScheduleLabelsOverride;

  /** Called when date is changed */
  onDateChange?: (date: DateStringValue) => void;

  /** Called when view is changed */
  onViewChange?: (view: ScheduleViewLevel) => void;

  /** Props passed to previous control button */
  previousControlProps?: React.ComponentProps<'button'>;

  /** Props passed to next control button */
  nextControlProps?: React.ComponentProps<'button'>;

  /** Props passed to today control button */
  todayControlProps?: React.ComponentProps<'button'>;

  /** Props passed to view select */
  viewSelectProps?: Partial<ViewSelectProps>;

  /** Styles API props to pass through */
  stylesApiProps?: StylesApiProps<any>;
}

const VIEW_LEVELS: ScheduleViewLevel[] = ['day', 'week', 'month', 'year'];

export function ScheduleHeaderBase({
  view,
  navigationHandlers,
  control,
  labels,
  onDateChange,
  onViewChange,
  previousControlProps,
  nextControlProps,
  todayControlProps,
  viewSelectProps,
  stylesApiProps,
}: ScheduleHeaderBaseProps) {
  const centralControl = control.monthYearSelect ? (
    <ScheduleHeader.MonthYearSelect {...stylesApiProps} {...control.monthYearSelect} />
  ) : (
    <ScheduleHeader.Control {...stylesApiProps} interactive={false} miw={control.miw}>
      {control.title}
    </ScheduleHeader.Control>
  );

  const views = viewSelectProps?.views || VIEW_LEVELS;
  const compactViewSelectData = views.map((v) => ({
    value: v,
    label: getLabel(v, labels) as string,
  }));

  return (
    <ScheduleHeader {...stylesApiProps}>
      <div className={classes.navigationGroup}>
        <ScheduleHeader.Previous
          {...stylesApiProps}
          onClick={() => onDateChange?.(navigationHandlers.previous())}
          labels={labels}
          {...previousControlProps}
        />

        {centralControl}

        <ScheduleHeader.Next
          {...stylesApiProps}
          onClick={() => onDateChange?.(navigationHandlers.next())}
          labels={labels}
          {...nextControlProps}
        />
      </div>

      <div className={classes.todayControl}>
        <ScheduleHeader.Today
          {...stylesApiProps}
          onClick={() => onDateChange?.(navigationHandlers.today())}
          labels={labels}
          {...todayControlProps}
        />
      </div>

      <NativeSelect
        className={classes.compactViewSelect}
        data={compactViewSelectData}
        value={view}
        onChange={(event) => onViewChange?.(event.currentTarget.value as ScheduleViewLevel)}
        aria-label={getLabel('viewSelectLabel', labels) as string}
        size="sm"
      />

      <div className={classes.viewSelect} style={{ marginInlineStart: 'auto' }}>
        <ScheduleHeader.ViewSelect
          value={view}
          onChange={onViewChange}
          labels={labels}
          {...stylesApiProps}
          {...viewSelectProps}
        />
      </div>
    </ScheduleHeader>
  );
}
