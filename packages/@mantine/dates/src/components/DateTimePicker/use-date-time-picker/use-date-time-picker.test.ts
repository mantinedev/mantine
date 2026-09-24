import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import type {
  PickerInputControllerOptions,
  PickerInputRegisteredSettings,
} from '../../PickerInputBase';
import { useDateTimePicker } from './use-date-time-picker';

const defaultSettings: PickerInputRegisteredSettings = {
  valueDate: null,
  fallbackDate: '2022-04-11',
  disabled: false,
};

const calendarSettings = {
  minLevel: undefined,
  maxLevel: undefined,
  columnsToScroll: 1,
  fallbackDate: null,
};

function renderController(
  options: PickerInputControllerOptions = {},
  settings: Partial<PickerInputRegisteredSettings> = {}
) {
  const hook = renderHook(() => useDateTimePicker(options));
  act(() => {
    hook.result.current.registerPickerInput({ ...defaultSettings, ...settings });
  });
  return hook;
}

describe('@mantine/dates/DateTimePicker/use-date-time-picker', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useDateTimePicker(),
    actions: [
      'getDate',
      'getLevel',
      'setDate',
      'setLevel',
      'next',
      'previous',
      'nextMonth',
      'previousMonth',
      'nextYear',
      'previousYear',
      'nextDecade',
      'previousDecade',
      'getDisplayedDate',
      'getDisplayedLevel',
      'registerCalendar',
      'isDropdownOpened',
      'setDropdownOpened',
      'openDropdown',
      'closeDropdown',
      'toggleDropdown',
      'registerPickerInput',
      'getTime',
      'setTime',
      'getEndTime',
      'setEndTime',
      'focusTime',
      'focusEndTime',
      'getPendingTimeFocus',
      'registerTimePicker',
    ],
    setup: (controller) => controller.registerPickerInput(defaultSettings),
    changeState: (controller) => controller.openDropdown(),
  });

  tests.itSupportsControllerMemoization({
    hook: () => useDateTimePicker(),
    actions: [
      'getDate',
      'getLevel',
      'setDate',
      'setLevel',
      'next',
      'previous',
      'nextMonth',
      'previousMonth',
      'nextYear',
      'previousYear',
      'nextDecade',
      'previousDecade',
      'getDisplayedDate',
      'getDisplayedLevel',
      'registerCalendar',
      'isDropdownOpened',
      'setDropdownOpened',
      'openDropdown',
      'closeDropdown',
      'toggleDropdown',
      'registerPickerInput',
      'getTime',
      'setTime',
      'getEndTime',
      'setEndTime',
      'focusTime',
      'focusEndTime',
      'getPendingTimeFocus',
      'registerTimePicker',
    ],
    setup: (controller) => controller.registerPickerInput(defaultSettings),
    changeState: (controller) => controller.setTime('10:30'),
  });

  it('returns closed dropdown, null date and month level by default', () => {
    const hook = renderHook(() => useDateTimePicker());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
    expect(hook.result.current.getDate()).toBe(null);
    expect(hook.result.current.getLevel()).toBe('month');
  });

  it('opens, closes and toggles the dropdown and reports every change', () => {
    const spy = jest.fn();
    const hook = renderController({ onDropdownOpenedChange: spy });

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);
    expect(spy).toHaveBeenLastCalledWith(true);

    act(() => hook.result.current.toggleDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
    expect(spy).toHaveBeenLastCalledWith(false);

    act(() => hook.result.current.setDropdownOpened(true));
    expect(hook.result.current.isDropdownOpened()).toBe(true);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('resets the displayed date to the registered value date and the level to defaultLevel on open', () => {
    const hook = renderController({ defaultLevel: 'year' }, { valueDate: '2024-06-15' });

    act(() => {
      hook.result.current.setDate('2030-01-01');
      hook.result.current.setLevel('decade');
    });
    act(() => hook.result.current.openDropdown());

    expect(hook.result.current.getDate()).toBe('2024-06-15');
    expect(hook.result.current.getLevel()).toBe('year');
  });

  it('resets the view when a new calendar instance registers', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });

    act(() => {
      hook.result.current.setDate('2030-01-01');
      hook.result.current.setLevel('year');
    });
    act(() => {
      hook.result.current.registerCalendar({ ...calendarSettings, instance: {} });
    });

    expect(hook.result.current.getDate()).toBe('2024-06-15');
    expect(hook.result.current.getLevel()).toBe('month');
  });

  it('does not reset the view again when the calendar mounts after openDropdown', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });

    act(() => {
      hook.result.current.openDropdown();
      hook.result.current.setLevel('year');
    });
    act(() => {
      hook.result.current.registerCalendar({ ...calendarSettings, instance: {} });
    });

    expect(hook.result.current.getLevel()).toBe('year');
  });

  it('does not open the dropdown when the registered component is disabled', () => {
    const hook = renderController({}, { disabled: true });
    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });
});
