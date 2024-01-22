import { itHandlesControlsKeyboardEvents } from './it-handles-controls-keyboard-events';
import { itHandlesMonthKeyboardEvents } from './it-handles-month-keyboard-events';
import { itSupportsHeaderProps } from './it-support-header-props';
import { itSupportsClearableProps } from './it-supports-clearable-props';
import { itSupportsDateInputProps } from './it-supports-date-input-props';
import { itSupportsGetControlRef } from './it-supports-get-control-ref';
import { itSupportsGetDayRef } from './it-supports-get-day-ref';
import { itSupportsMonthProps } from './it-supports-month-props';
import { itSupportsMonthsListProps } from './it-supports-months-list-props';
import { itSupportsOnControlClick } from './it-supports-on-control-click';
import { itSupportsOnControlKeydown } from './it-supports-on-control-key-down';
import { itSupportsOnControlMouseEnter } from './it-supports-on-control-mouse-enter';
import { itSupportsOnDayClick } from './it-supports-on-day-click';
import { itSupportsOnDayKeydown } from './it-supports-on-day-keydown';
import { itSupportsWeekdaysProps } from './it-supports-weekdays-props';
import { itSupportsWithNextPrevious } from './it-supports-with-next-previous';
import { itSupportsYearsListProps } from './it-supports-years-list-props';

export const datesTests = {
  itSupportsWeekdaysProps,
  itSupportsMonthProps,
  itSupportsHeaderProps,
  itSupportsGetDayRef,
  itSupportsWithNextPrevious,
  itSupportsOnDayKeydown,
  itSupportsGetControlRef,
  itSupportsMonthsListProps,
  itSupportsYearsListProps,
  itSupportsOnControlKeydown,
  itSupportsOnControlClick,
  itSupportsOnDayClick,
  itHandlesMonthKeyboardEvents,
  itHandlesControlsKeyboardEvents,
  itSupportsOnControlMouseEnter,
  itSupportsClearableProps,
  itSupportsDateInputProps,
};

export * from './date-input-test-helpers';
export { expectWeekdaysNames } from './it-supports-weekdays-props';
