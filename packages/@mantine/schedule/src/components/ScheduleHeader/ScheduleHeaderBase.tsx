import { StylesApiProps } from '@mantine/core';
import { ScheduleLabelsOverride } from '../../labels';
import { DateStringValue, ScheduleViewLevel } from '../../types';
import { MonthYearSelectProps } from './MonthYearSelect/MonthYearSelect';
import { ScheduleHeader } from './ScheduleHeader';
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

/**
 * Component for rendering a consistent schedule header across all views
 * Handles navigation controls (previous, next, today), central control
 * (title or month/year select), and view selector
 */
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

  return (
    <ScheduleHeader {...stylesApiProps}>
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

      <ScheduleHeader.Today
        {...stylesApiProps}
        onClick={() => onDateChange?.(navigationHandlers.today())}
        labels={labels}
        {...todayControlProps}
      />

      <ScheduleHeader.ViewSelect
        value={view}
        onChange={onViewChange}
        ml="auto"
        labels={labels}
        {...stylesApiProps}
        {...viewSelectProps}
      />
    </ScheduleHeader>
  );
}
