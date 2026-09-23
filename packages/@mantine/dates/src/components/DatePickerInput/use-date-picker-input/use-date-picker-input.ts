import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import type { DateStringValue } from '../../../types';
import { toDateString } from '../../../utils';
import {
  useCalendar,
  type CalendarController,
  type CalendarControllerOptions,
  type CalendarRegisteredSettings,
} from '../../Calendar/use-calendar/use-calendar';

export interface DatePickerInputControllerOptions extends CalendarControllerOptions {
  /** Dropdown opened state in controlled mode */
  dropdownOpened?: boolean;

  /** Initial dropdown opened state in uncontrolled mode @default false */
  defaultDropdownOpened?: boolean;

  /** Called when the dropdown opened state changes */
  onDropdownOpenedChange?: (opened: boolean) => void;
}

export interface DatePickerInputRegisteredSettings {
  /** Date the displayed date is reset to when the dropdown opens: the value of the associated `DatePickerInput` (its first date for `range` and `multiple` types), `null` when it has no value */
  valueDate: DateStringValue | null;

  /** Date displayed when the dropdown opens and neither the value nor `defaultDate` is set */
  fallbackDate: DateStringValue | null;

  /** `true` when the associated `DatePickerInput` is disabled or read only and cannot open its dropdown */
  disabled: boolean;
}

export interface DatePickerInputController extends CalendarController {
  /** Dropdown opened state */
  dropdownOpened: boolean;

  /** Returns `true` when the dropdown is opened. The associated `DatePickerInput` does not display the dropdown while it is disabled or read only */
  isDropdownOpened: () => boolean;

  /** Opens the dropdown with `true`, closes it with `false`, same as `openDropdown`/`closeDropdown` */
  setDropdownOpened: (opened: boolean) => void;

  /** Opens the dropdown, resets the displayed date to the value (or `defaultDate`) and the level to `defaultLevel` unless they are controlled. No-op when the dropdown is already opened or the associated `DatePickerInput` is disabled or read only. The same reset is applied whenever the calendar is mounted by any other way of opening the dropdown */
  openDropdown: () => void;

  /** Closes the dropdown. The associated `DatePickerInput` clears a half-selected range, the same as when the user dismisses the dropdown */
  closeDropdown: () => void;

  /** Toggles the dropdown */
  toggleDropdown: () => void;

  /** Registers the resolved settings of the associated component, used internally by `DatePickerInput` on every render */
  registerPickerInput: (settings: DatePickerInputRegisteredSettings) => void;
}

const EMPTY_SETTINGS: DatePickerInputRegisteredSettings = {
  valueDate: null,
  fallbackDate: null,
  disabled: false,
};

export function useDatePickerInput(
  options: DatePickerInputControllerOptions = {}
): DatePickerInputController {
  const {
    dropdownOpened: dropdownOpenedProp,
    defaultDropdownOpened,
    onDropdownOpenedChange,
    ...calendarOptions
  } = options;

  const calendar = useCalendar(calendarOptions);

  const [dropdownOpened, setDropdownOpenedState] = useUncontrolled<boolean>({
    value: dropdownOpenedProp,
    defaultValue: defaultDropdownOpened,
    finalValue: false,
    onChange: onDropdownOpenedChange,
  });

  const settingsRef = useRef(EMPTY_SETTINGS);
  const dropdownOpenedRef = useLatestRef(dropdownOpened);
  const calendarInstanceRef = useRef<object | null>(null);
  const openResetDoneRef = useRef(false);

  const writeDropdownOpened = useCallbackRef((next: boolean) => {
    if (dropdownOpenedProp === undefined) {
      dropdownOpenedRef.current = next;
    }

    setDropdownOpenedState(next);
  });

  const resetDate = useCallbackRef(() => {
    if (calendarOptions.date !== undefined) {
      return;
    }

    const nextDate =
      settingsRef.current.valueDate ??
      toDateString(calendarOptions.defaultDate) ??
      settingsRef.current.fallbackDate;

    if (nextDate) {
      calendar.setDate(nextDate);
    }
  });

  const resetView = useCallbackRef(() => {
    resetDate();

    if (calendarOptions.level === undefined) {
      calendar.setLevel(calendarOptions.defaultLevel ?? 'month');
    }
  });

  const openDropdown = useCallbackRef(() => {
    if (dropdownOpenedRef.current || settingsRef.current.disabled) {
      return;
    }

    resetView();
    openResetDoneRef.current = true;
    writeDropdownOpened(true);
  });

  const closeDropdown = useCallbackRef(() => {
    if (!dropdownOpenedRef.current) {
      return;
    }

    openResetDoneRef.current = false;
    writeDropdownOpened(false);
  });

  const toggleDropdown = useCallbackRef(() => {
    if (dropdownOpenedRef.current) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  const setDropdownOpened = useCallbackRef((next: boolean) => {
    if (next) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });

  const isDropdownOpened = useCallback(() => dropdownOpenedRef.current, []);

  const registerPickerInput = useCallback((settings: DatePickerInputRegisteredSettings) => {
    settingsRef.current = settings;
  }, []);

  const registerCalendar = useCallback((settings: CalendarRegisteredSettings) => {
    const cleanup = calendar.registerCalendar(settings);

    if (settings.instance !== calendarInstanceRef.current) {
      calendarInstanceRef.current = settings.instance ?? null;

      if (openResetDoneRef.current) {
        openResetDoneRef.current = false;
      } else {
        resetView();
      }
    }

    return cleanup;
  }, []);

  return useMemo(
    () => ({
      ...calendar,
      registerCalendar,
      dropdownOpened,
      isDropdownOpened,
      setDropdownOpened,
      openDropdown,
      closeDropdown,
      toggleDropdown,
      registerPickerInput,
    }),
    [calendar, dropdownOpened]
  );
}
