import type { DataAttributes, MantineSize } from '@mantine/core';
import type { ControlsGroupSettings, DateLabelFormat, DateStringValue } from '../../types';
import type { CalendarHeaderSettings } from '../CalendarHeader';
import type { MonthSettings } from '../Month';
import type { PickerControlProps } from '../PickerControl';
import type { DecadeLabelFormat } from './format-label/format-label';

export interface MonthsListSettings extends ControlsGroupSettings {
  /** `dayjs` format for months list or a function that returns month label based on the date value @default "MMM" @category appearance */
  monthsListFormat?: DateLabelFormat;

  /** Passes props down month picker control */
  getMonthControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;

  /** Determines whether controls should be separated @default true @category appearance */
  withCellSpacing?: boolean;

  /** Determines whether the list should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;
}

export interface YearsListSettings extends ControlsGroupSettings {
  /** `dayjs` format for years list or a function that returns year label based on the date value @default "YYYY" @category appearance */
  yearsListFormat?: DateLabelFormat;

  /** Passes props down to year picker control based on date */
  getYearControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;

  /** Component size @category appearance */
  size?: MantineSize;

  /** Determines whether controls should be separated @default true @category appearance */
  withCellSpacing?: boolean;

  /** Determines whether the list should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;
}

export interface QuartersListSettings extends ControlsGroupSettings {
  /** `dayjs` format for quarters list or a function that returns quarter label based on the date value @default "[Q]Q" @category appearance */
  quartersListFormat?: DateLabelFormat;

  /** Passes props down to quarter picker control */
  getQuarterControlProps?: (date: DateStringValue) => Partial<PickerControlProps> & DataAttributes;

  /** Determines whether controls should be separated @default true @category appearance */
  withCellSpacing?: boolean;

  /** Determines whether the list should take the full width of its container @default false @category appearance */
  fullWidth?: boolean;
}

export interface MonthLevelBaseSettings extends MonthSettings {
  /** dayjs label format to display month label or a function that returns month label based on month value @default "MMMM YYYY" @category appearance */
  monthLabelFormat?: DateLabelFormat;
}

export interface MonthLevelSettings extends MonthLevelBaseSettings, CalendarHeaderSettings {}

export interface YearLevelBaseSettings extends MonthsListSettings {
  /** dayjs label format to display year label or a function that returns year label based on year value @default "YYYY" @category appearance */
  yearLabelFormat?: DateLabelFormat;
}

export interface YearLevelSettings extends YearLevelBaseSettings, CalendarHeaderSettings {}

export interface QuarterLevelBaseSettings extends QuartersListSettings {
  /** dayjs label format to display year label or a function that returns year label based on year value @default "YYYY" @category appearance */
  yearLabelFormat?: DateLabelFormat;
}

export interface QuarterLevelSettings extends QuarterLevelBaseSettings, CalendarHeaderSettings {}

export interface DecadeLevelBaseSettings extends YearsListSettings {
  /** `dayjs` format for decade label or a function that returns decade label based on the date value @default "YYYY" @category appearance */
  decadeLabelFormat?: DecadeLabelFormat;
}

export interface DecadeLevelSettings
  extends DecadeLevelBaseSettings, Omit<CalendarHeaderSettings, 'onLevelClick' | 'hasNextLevel'> {}
