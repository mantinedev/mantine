import { DateStringValue } from './GeneralTypes';

export interface ControlsGroupSettings {
  /** Minimum possible date in `YYYY-MM-DD` format or Date object @category behavior */
  minDate?: DateStringValue | Date;

  /** Maximum possible date in `YYYY-MM-DD` format or Date object @category behavior */
  maxDate?: DateStringValue | Date;

  /** Dayjs locale, defaults to value defined in DatesProvider @category appearance */
  locale?: string;
}
