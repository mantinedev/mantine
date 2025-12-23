export interface ScheduleLabels {
  day: string;
  week: string;
  month: string;
  year: string;
  allDay: string;
  weekday: string;
  timeSlot: string;
  today: string;
  next: string;
  previous: string;
  more: string;
  selectMonth: string;
  selectYear: string;
  switchToDayView: string;
  switchToWeekView: string;
  switchToMonthView: string;
  switchToYearView: string;
  moreLabel: (hiddenEventsCount: number) => string;
}

export const DEFAULT_SCHEDULE_LABELS: ScheduleLabels = {
  today: 'Today',
  next: 'Next',
  previous: 'Previous',
  more: 'More',
  day: 'Day',
  week: 'Week',
  month: 'Month',
  year: 'Year',
  allDay: 'All day',
  weekday: 'Weekday',
  timeSlot: 'Time slot',
  selectMonth: 'Select month',
  selectYear: 'Select year',
  switchToDayView: 'Switch to day view',
  switchToWeekView: 'Switch to week view',
  switchToMonthView: 'Switch to month view',
  switchToYearView: 'Switch to year view',
  moreLabel: (hiddenEventsCount: number) => `+${hiddenEventsCount} more`,
};

export type ScheduleLabelsOverride = Partial<ScheduleLabels>;

export function getLabel<K extends keyof ScheduleLabels>(
  key: K,
  override?: ScheduleLabelsOverride
): ScheduleLabels[K] {
  if (override) {
    return { ...DEFAULT_SCHEDULE_LABELS, ...override }[key];
  }

  return DEFAULT_SCHEDULE_LABELS[key];
}
