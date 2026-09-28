import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { ComboboxStore, useCombobox } from './use-combobox';

const STORE_ACTIONS: (keyof ComboboxStore)[] = [
  'isDropdownOpened',
  'openDropdown',
  'closeDropdown',
  'toggleDropdown',
  'getSelectedOptionIndex',
  'selectOption',
  'selectFirstOption',
  'selectActiveOption',
  'selectNextOption',
  'selectPreviousOption',
  'resetSelectedOption',
  'updateSelectedOptionIndex',
  'clickSelectedOption',
  'getListId',
  'setListId',
  'focusSearchInput',
  'focusTarget',
];

describe('@mantine/core/Combobox/use-combobox', () => {
  tests.itSupportsControllerMemoization<ComboboxStore>({
    hook: () => useCombobox({ onDropdownOpen: () => {}, onDropdownClose: () => {} }),
    actions: STORE_ACTIONS,
    changeState: (store) => store.openDropdown(),
  });

  it('reads dropdown state changed earlier in the same handler', () => {
    const onDropdownOpen = jest.fn();
    const onDropdownClose = jest.fn();
    const hook = renderHook(() => useCombobox({ onDropdownOpen, onDropdownClose }));
    const reads: boolean[] = [];

    act(() => {
      hook.result.current.openDropdown();
      reads.push(hook.result.current.isDropdownOpened());
      hook.result.current.closeDropdown();
      reads.push(hook.result.current.isDropdownOpened());
    });

    expect(reads).toEqual([true, false]);
    expect(onDropdownOpen).toHaveBeenCalledTimes(1);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('returns current state from getters', () => {
    const hook = renderHook(() => useCombobox());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);
  });

  it('supports uncontrolled opened state', () => {
    const hook = renderHook(() => useCombobox({ defaultOpened: true }));
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.closeDropdown);
    expect(hook.result.current.dropdownOpened).toBe(false);

    act(hook.result.current.openDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.toggleDropdown);
    expect(hook.result.current.dropdownOpened).toBe(false);
  });

  it('supports controlled opened state', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ opened: true, onOpenedChange: spy }));
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.closeDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);
    expect(spy).toHaveBeenCalledWith(false);

    act(hook.result.current.toggleDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('calls onDropdownOpen when dropdown is opened', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ onDropdownOpen: spy }));
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.openDropdown);
    expect(spy).toHaveBeenCalled();

    act(hook.result.current.closeDropdown);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onDropdownClose when dropdown is closed', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ onDropdownClose: spy }));
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.openDropdown);
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.closeDropdown);
    expect(spy).toHaveBeenCalled();
  });
});
