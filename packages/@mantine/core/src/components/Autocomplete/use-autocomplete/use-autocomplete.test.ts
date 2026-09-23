import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { AutocompleteStore, useAutocomplete } from './use-autocomplete';

const STORE_ACTIONS: (keyof AutocompleteStore)[] = [
  'getValue',
  'setValue',
  'registerDropdownCallbacks',
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

describe('@mantine/core/Autocomplete/use-autocomplete', () => {
  tests.itSupportsControllerMemoization<AutocompleteStore>({
    hook: () => useAutocomplete(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.setValue('React'),
  });

  tests.itSupportsControllerMemoization<AutocompleteStore>({
    hook: () => useAutocomplete(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.openDropdown(),
  });

  it('returns an empty string from getValue by default', () => {
    const hook = renderHook(() => useAutocomplete());
    expect(hook.result.current.getValue()).toBe('');
    expect(hook.result.current.value).toBe('');
  });

  it('returns value from getValue and calls onChange from setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useAutocomplete({ defaultValue: 'Re', onChange }));
    expect(hook.result.current.getValue()).toBe('Re');

    act(() => hook.result.current.setValue('React'));
    expect(hook.result.current.getValue()).toBe('React');
    expect(hook.result.current.value).toBe('React');
    expect(onChange).toHaveBeenLastCalledWith('React');
  });

  it('reads the new value in the same handler when uncontrolled', () => {
    const hook = renderHook(() => useAutocomplete());
    let read = '';

    act(() => {
      hook.result.current.setValue('Vue');
      read = hook.result.current.getValue();
    });

    expect(read).toBe('Vue');
  });

  it('keeps the controlled value when the parent does not update it', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useAutocomplete({ value: 'React', onChange }));

    act(() => hook.result.current.setValue('Vue'));
    expect(onChange).toHaveBeenCalledWith('Vue');
    expect(hook.result.current.getValue()).toBe('React');
  });

  it('reads the controlled value passed on the latest render', () => {
    const hook = renderHook((props: { value: string }) => useAutocomplete(props), {
      initialProps: { value: 'React' },
    });

    hook.rerender({ value: 'Vue' });
    expect(hook.result.current.getValue()).toBe('Vue');
  });

  it('opens, closes and toggles the dropdown', () => {
    const hook = renderHook(() => useAutocomplete());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(() => hook.result.current.toggleDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.toggleDropdown());
    act(() => hook.result.current.closeDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('supports defaultDropdownOpened', () => {
    const hook = renderHook(() => useAutocomplete({ defaultDropdownOpened: true }));
    expect(hook.result.current.isDropdownOpened()).toBe(true);
  });

  it('calls dropdown options before registered dropdown callbacks', () => {
    const calls: string[] = [];
    const hook = renderHook(() =>
      useAutocomplete({
        onDropdownOpen: () => calls.push('option-open'),
        onDropdownClose: () => calls.push('option-close'),
      })
    );

    hook.result.current.registerDropdownCallbacks({
      onOpen: (source) => calls.push(`registered-open-${source}`),
      onClose: (source) => calls.push(`registered-close-${source}`),
    });

    act(() => hook.result.current.openDropdown('keyboard'));
    act(() => hook.result.current.closeDropdown('mouse'));

    expect(calls).toEqual([
      'option-open',
      'registered-open-keyboard',
      'option-close',
      'registered-close-mouse',
    ]);
  });

  it('replaces registered dropdown callbacks', () => {
    const first = jest.fn();
    const second = jest.fn();
    const hook = renderHook(() => useAutocomplete());

    hook.result.current.registerDropdownCallbacks({ onOpen: first });
    hook.result.current.registerDropdownCallbacks({ onOpen: second });
    act(() => hook.result.current.openDropdown());

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('reads list id and selected option index through getters', () => {
    const hook = renderHook(() => useAutocomplete());
    const store = hook.result.current;
    expect(store.getListId()).toBeNull();
    expect(store.getSelectedOptionIndex()).toBe(-1);

    store.setListId('list-id');
    store.updateSelectedOptionIndex(2);

    expect(store.getListId()).toBe('list-id');
    expect(store.getSelectedOptionIndex()).toBe(2);
  });
});
