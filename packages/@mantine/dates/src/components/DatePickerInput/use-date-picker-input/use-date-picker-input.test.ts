import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import type {
  PickerInputControllerOptions,
  PickerInputRegisteredSettings,
} from '../../PickerInputBase';
import { useDatePickerInput } from './use-date-picker-input';

const defaultSettings: PickerInputRegisteredSettings = {
  valueDate: null,
  fallbackDate: '2022-04-11',
  disabled: false,
};

function renderController(
  options: PickerInputControllerOptions = {},
  settings: Partial<PickerInputRegisteredSettings> = {}
) {
  const hook = renderHook(() => useDatePickerInput(options));
  act(() => {
    hook.result.current.registerPickerInput({ ...defaultSettings, ...settings });
  });
  return hook;
}

describe('@mantine/dates/DatePickerInput/use-date-picker-input', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useDatePickerInput(),
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
    setup: (controller) => controller.registerPickerInput(defaultSettings),
    changeState: (controller) => controller.openDropdown(),
  });

  it('returns closed dropdown, null date and month level by default', () => {
    const hook = renderHook(() => useDatePickerInput());
    expect(hook.result.current.dropdownOpened).toBe(false);
    expect(hook.result.current.isDropdownOpened()).toBe(false);
    expect(hook.result.current.getDate()).toBe(null);
    expect(hook.result.current.getLevel()).toBe('month');
  });

  it('opens, closes and toggles the dropdown', () => {
    const hook = renderController();

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);

    act(() => hook.result.current.closeDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.toggleDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);

    act(() => hook.result.current.setDropdownOpened(false));
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.setDropdownOpened(true));
    expect(hook.result.current.dropdownOpened).toBe(true);
  });

  it('reads the new dropdown state from isDropdownOpened in the same event', () => {
    const hook = renderController();
    const observed: boolean[] = [];

    act(() => {
      hook.result.current.openDropdown();
      observed.push(hook.result.current.isDropdownOpened());
      hook.result.current.toggleDropdown();
      observed.push(hook.result.current.isDropdownOpened());
    });

    expect(observed).toStrictEqual([true, false]);
  });

  it('calls onDropdownOpenedChange synchronously and only when the state changes', () => {
    const spy = jest.fn();
    const hook = renderController({ onDropdownOpenedChange: spy });

    act(() => hook.result.current.closeDropdown());
    expect(spy).not.toHaveBeenCalled();

    act(() => hook.result.current.openDropdown());
    expect(spy).toHaveBeenLastCalledWith(true);

    act(() => hook.result.current.openDropdown());
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => hook.result.current.toggleDropdown());
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('supports controlled dropdownOpened', () => {
    const spy = jest.fn();
    const hook = renderController({ dropdownOpened: false, onDropdownOpenedChange: spy });

    act(() => hook.result.current.openDropdown());
    expect(spy).toHaveBeenCalledWith(true);
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('supports defaultDropdownOpened', () => {
    const hook = renderHook(() => useDatePickerInput({ defaultDropdownOpened: true }));
    expect(hook.result.current.isDropdownOpened()).toBe(true);
  });

  it('resets the displayed date to the registered value date and the level to defaultLevel on open', () => {
    const hook = renderController(
      { defaultDate: '2020-01-01', defaultLevel: 'year' },
      { valueDate: '2024-06-15' }
    );

    act(() => hook.result.current.setDate('2030-01-01'));
    act(() => hook.result.current.setLevel('decade'));
    act(() => hook.result.current.openDropdown());

    expect(hook.result.current.getDate()).toBe('2024-06-15');
    expect(hook.result.current.getLevel()).toBe('year');
  });

  it('resets the displayed date to defaultDate and then to the fallback date when there is no value', () => {
    const withDefaultDate = renderController({ defaultDate: '2020-01-01' });
    act(() => withDefaultDate.result.current.setDate('2030-01-01'));
    act(() => withDefaultDate.result.current.openDropdown());
    expect(withDefaultDate.result.current.getDate()).toBe('2020-01-01');

    const withFallback = renderController();
    act(() => withFallback.result.current.openDropdown());
    expect(withFallback.result.current.getDate()).toBe('2022-04-11');
  });

  it('resets on every open, not while the dropdown is already opened', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });

    act(() => hook.result.current.openDropdown());
    act(() => hook.result.current.setDate('2025-01-01'));
    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.getDate()).toBe('2025-01-01');

    act(() => hook.result.current.closeDropdown());
    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.getDate()).toBe('2024-06-15');
  });

  it('lets the caller override the reset right after opening', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });

    act(() => {
      hook.result.current.openDropdown();
      hook.result.current.setLevel('decade');
      hook.result.current.setDate('2010-01-01');
    });

    expect(hook.result.current.getLevel()).toBe('decade');
    expect(hook.result.current.getDate()).toBe('2010-01-01');
  });

  it('does not reset controlled date and level on open', () => {
    const onDateChange = jest.fn();
    const onLevelChange = jest.fn();
    const hook = renderController(
      { date: '2030-01-01', onDateChange, level: 'decade', onLevelChange },
      { valueDate: '2024-06-15' }
    );

    act(() => hook.result.current.openDropdown());
    expect(onDateChange).not.toHaveBeenCalled();
    expect(onLevelChange).not.toHaveBeenCalled();
    expect(hook.result.current.getDate()).toBe('2030-01-01');
    expect(hook.result.current.getLevel()).toBe('decade');
  });

  it('does not open the dropdown when the registered component is disabled', () => {
    const hook = renderController({}, { disabled: true });
    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('uses the latest registration', () => {
    const hook = renderController({}, { disabled: true });
    act(() => {
      hook.result.current.registerPickerInput({ ...defaultSettings, valueDate: '2024-06-15' });
    });

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);
    expect(hook.result.current.getDate()).toBe('2024-06-15');
  });

  it('resets the view when a new calendar instance registers', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });
    const calendarSettings = {
      minLevel: undefined,
      maxLevel: undefined,
      columnsToScroll: 1,
      fallbackDate: null,
    };

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

  it('does not reset the view when the same calendar instance registers again', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });
    const instance = {};
    const calendarSettings = {
      instance,
      minLevel: undefined,
      maxLevel: undefined,
      columnsToScroll: 1,
      fallbackDate: null,
    };

    act(() => {
      hook.result.current.registerCalendar(calendarSettings);
    });
    act(() => hook.result.current.setDate('2030-01-01'));
    act(() => {
      hook.result.current.registerCalendar({ ...calendarSettings, columnsToScroll: 2 });
    });

    expect(hook.result.current.getDate()).toBe('2030-01-01');
  });

  it('does not reset the view again when the calendar mounts after openDropdown', () => {
    const hook = renderController({}, { valueDate: '2024-06-15' });

    act(() => {
      hook.result.current.openDropdown();
      hook.result.current.setLevel('year');
    });
    act(() => {
      hook.result.current.registerCalendar({
        instance: {},
        minLevel: undefined,
        maxLevel: undefined,
        columnsToScroll: 1,
        fallbackDate: null,
      });
    });

    expect(hook.result.current.getLevel()).toBe('year');
  });
});
