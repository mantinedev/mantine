import { itSupportsWeekdaysProps } from './it-supports-weekdays-props';
import { itSupportsMonthProps } from './it-supports-month-props';
import { itSupportsHeaderProps } from './it-support-header-props';
import { itSupportsGetDayRef } from './it-supports-get-day-ref';
import { itSupportsWithNextPrevious } from './it-supports-with-next-previous';
import { itSupportsOnDayKeydown } from './it-supports-on-day-keydown';
import { itSupportsGetControlRef } from './it-supports-get-control-ref';
import { itSupportsMonthsListProps } from './it-supports-months-list-props';
import { itSupportsYearsListProps } from './it-supports-years-list-props';
import { itSupportsOnControlKeydown } from './it-supports-on-control-key-down';
import { itSupportsOnControlClick } from './it-supports-on-control-click';
import { itSupportsOnDayClick } from './it-supports-on-day-click';
import { itHandlesMonthKeyboardEvents } from './it-handles-month-keyboard-events';
import { itHandlesControlsKeyboardEvents } from './it-handles-controls-keyboard-events';
import { itSupportsOnControlMouseEnter } from './it-supports-on-control-mouse-enter';
import { itSupportsClearableProps } from './it-supports-clearable-props';
import { itSupportsDateInputProps } from './it-supports-date-input-props';

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
