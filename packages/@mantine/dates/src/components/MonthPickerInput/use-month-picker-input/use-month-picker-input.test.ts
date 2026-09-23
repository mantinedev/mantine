import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useMonthPickerInput } from './use-month-picker-input';

const settings = { valueDate: '2024-06-01', fallbackDate: '2022-04-11', disabled: false };

describe('@mantine/dates/MonthPickerInput/use-month-picker-input', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useMonthPickerInput(),
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
    ],
    setup: (controller) => controller.registerPickerInput(settings),
    changeState: (controller) => controller.openDropdown(),
  });

  it('returns closed dropdown, null date and year level by default', () => {
    const hook = renderHook(() => useMonthPickerInput());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
    expect(hook.result.current.getDate()).toBe(null);
    expect(hook.result.current.getLevel()).toBe('year');
  });

  it('resets the displayed date to the value and the level to year on open', () => {
    const hook = renderHook(() => useMonthPickerInput());
    act(() => hook.result.current.registerPickerInput(settings));
    act(() => {
      hook.result.current.setDate('2030-01-01');
      hook.result.current.setLevel('decade');
    });

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);
    expect(hook.result.current.getDate()).toBe('2024-06-01');
    expect(hook.result.current.getLevel()).toBe('year');
  });

  it('resets the level to defaultLevel when it is set', () => {
    const hook = renderHook(() => useMonthPickerInput({ defaultLevel: 'decade' }));
    act(() => hook.result.current.registerPickerInput(settings));
    act(() => hook.result.current.setLevel('year'));
    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.getLevel()).toBe('decade');
  });
});
