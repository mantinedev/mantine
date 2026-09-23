import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { MultiSelectStore, useMultiSelect } from './use-multi-select';

const STORE_ACTIONS: (keyof MultiSelectStore)[] = [
  'getValue',
  'setValue',
  'getSearch',
  'setSearch',
  'getValueOptions',
  'registerOptions',
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

const options = {
  React: { value: 'React', label: 'React.js' },
  Vue: { value: 'Vue', label: 'Vue.js' },
};

describe('@mantine/core/MultiSelect/use-multi-select', () => {
  tests.itSupportsControllerMemoization<MultiSelectStore>({
    hook: () => useMultiSelect(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.setValue(['React']),
  });

  tests.itSupportsControllerMemoization<MultiSelectStore>({
    hook: () => useMultiSelect(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.openDropdown(),
  });

  it('returns value from getValue and calls onChange from setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useMultiSelect({ defaultValue: ['React'], onChange }));
    expect(hook.result.current.getValue()).toEqual(['React']);

    act(() => hook.result.current.setValue(['React', 'Vue']));
    expect(hook.result.current.getValue()).toEqual(['React', 'Vue']);
    expect(hook.result.current.value).toEqual(['React', 'Vue']);
    expect(onChange).toHaveBeenLastCalledWith(['React', 'Vue']);
  });

  it('returns an empty array when no value is set', () => {
    const hook = renderHook(() => useMultiSelect());
    expect(hook.result.current.getValue()).toEqual([]);
    expect(hook.result.current.getValueOptions()).toEqual([]);
  });

  it('reads values set earlier in the same handler when uncontrolled', () => {
    const hook = renderHook(() => useMultiSelect());
    let read: string[] = [];

    act(() => {
      hook.result.current.setValue([...hook.result.current.getValue(), 'React']);
      hook.result.current.setValue([...hook.result.current.getValue(), 'Vue']);
      read = hook.result.current.getValue();
    });

    expect(read).toEqual(['React', 'Vue']);
    expect(hook.result.current.getValue()).toEqual(['React', 'Vue']);
  });

  it('keeps the controlled value when the parent does not update it', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useMultiSelect({ value: ['React'], onChange }));

    act(() => hook.result.current.setValue(['React', 'Vue']));
    expect(onChange).toHaveBeenCalledWith(['React', 'Vue']);
    expect(hook.result.current.getValue()).toEqual(['React']);
  });

  it('returns fallback options from getValueOptions until options are registered', () => {
    const hook = renderHook(() => useMultiSelect({ defaultValue: ['React', 'Vue'] }));
    expect(hook.result.current.getValueOptions()).toEqual([
      { value: 'React', label: 'React' },
      { value: 'Vue', label: 'Vue' },
    ]);

    hook.result.current.registerOptions(options);
    expect(hook.result.current.getValueOptions()).toEqual([options.React, options.Vue]);
  });

  it('retains options of current values after they are removed from registered options', () => {
    const hook = renderHook(() => useMultiSelect({ defaultValue: ['React'] }));
    hook.result.current.registerOptions(options);
    hook.result.current.registerOptions({ Vue: options.Vue });

    expect(hook.result.current.getValueOptions()).toEqual([options.React]);
  });

  it('retains registered options of values passed to setValue', () => {
    const hook = renderHook(() => useMultiSelect());
    hook.result.current.registerOptions(options);

    act(() => hook.result.current.setValue(['Vue']));
    hook.result.current.registerOptions({});

    expect(hook.result.current.getValueOptions()).toEqual([options.Vue]);
  });

  it('retains options passed to setValue', () => {
    const hook = renderHook(() => useMultiSelect());
    const created = { value: 'Svelte', label: 'Svelte!' };

    act(() => hook.result.current.setValue(['Svelte'], [created]));
    expect(hook.result.current.getValueOptions()).toEqual([created]);
  });

  it('sets search and calls onSearchChange', () => {
    const onSearchChange = jest.fn();
    const hook = renderHook(() => useMultiSelect({ defaultSearchValue: 'Re', onSearchChange }));
    expect(hook.result.current.getSearch()).toBe('Re');

    act(() => hook.result.current.setSearch('Vu'));
    expect(hook.result.current.getSearch()).toBe('Vu');
    expect(hook.result.current.search).toBe('Vu');
    expect(onSearchChange).toHaveBeenCalledWith('Vu');
  });

  it('reads search set earlier in the same handler when uncontrolled', () => {
    const hook = renderHook(() => useMultiSelect());
    let read = '';

    act(() => {
      hook.result.current.setSearch('Vue');
      read = hook.result.current.getSearch();
    });

    expect(read).toBe('Vue');
  });

  it('opens, closes and toggles the dropdown', () => {
    const hook = renderHook(() => useMultiSelect());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);

    act(() => hook.result.current.toggleDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.toggleDropdown());
    act(() => hook.result.current.closeDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('supports defaultDropdownOpened', () => {
    const hook = renderHook(() => useMultiSelect({ defaultDropdownOpened: true }));
    expect(hook.result.current.isDropdownOpened()).toBe(true);
  });

  it('calls dropdown options before registered dropdown callbacks', () => {
    const calls: string[] = [];
    const hook = renderHook(() =>
      useMultiSelect({
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
    const hook = renderHook(() => useMultiSelect());

    hook.result.current.registerDropdownCallbacks({ onOpen: first });
    hook.result.current.registerDropdownCallbacks({ onOpen: second });
    act(() => hook.result.current.openDropdown());

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('supports non-string values', () => {
    const hook = renderHook(() => useMultiSelect<number>({ defaultValue: [1] }));
    hook.result.current.registerOptions({ 1: { value: 1, label: 'One' } });

    act(() => hook.result.current.setValue([1, 2]));
    expect(hook.result.current.getValue()).toEqual([1, 2]);
    expect(hook.result.current.getValueOptions()).toEqual([
      { value: 1, label: 'One' },
      { value: 2, label: '2' },
    ]);
  });
});
