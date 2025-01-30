import type { ControlKeydownPayload, DateStringValue } from './GeneralTypes';

export interface ControlsGroupSettings {
  /** Called when control is clicked with event and date */
  __onControlClick?: (event: React.MouseEvent<HTMLButtonElement>, date: DateStringValue) => void;

  /** Called when mouse enters control with event and date, used for ranges */
  __onControlMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement>,
    date: DateStringValue
  ) => void;

  /** Called when any keydown event is registered on control, used for arrows navigation */
  __onControlKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: ControlKeydownPayload
  ) => void;

  /** Assigns ref of every control based on its position in the table, used for arrows navigation */
  __getControlRef?: (rowIndex: number, cellIndex: number, node: HTMLButtonElement) => void;

  /** Minimum possible date in `YYYY-MM-DD` format or Date object */
  minDate?: DateStringValue | Date;

  /** Maximum possible date in `YYYY-MM-DD` format or Date object */
  maxDate?: DateStringValue | Date;

  /** Dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;
}
