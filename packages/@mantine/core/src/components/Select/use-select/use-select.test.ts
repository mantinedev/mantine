import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { SelectStore, useSelect } from './use-select';

const STORE_ACTIONS: (keyof SelectStore)[] = [
  'getValue',
  'setValue',
  'getSearch',
  'setSearch',
  'getValueOption',
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

describe('@mantine/core/Select/use-select', () => {
  tests.itSupportsControllerMemoization<SelectStore>({
    hook: () => useSelect(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.setValue('React'),
  });

  tests.itSupportsControllerMemoization<SelectStore>({
    hook: () => useSelect(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.openDropdown(),
  });

  it('returns value from getValue and calls onChange with the option passed to setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useSelect({ defaultValue: 'React', onChange }));
    expect(hook.result.current.getValue()).toBe('React');

    act(() => hook.result.current.setValue('Vue', options.Vue));
    expect(hook.result.current.getValue()).toBe('Vue');
    expect(onChange).toHaveBeenLastCalledWith('Vue', options.Vue);
  });

  it('resolves the option for onChange from registered options', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useSelect({ onChange }));
    hook.result.current.registerOptions(options);

    act(() => hook.result.current.setValue('React'));
    expect(onChange).toHaveBeenLastCalledWith('React', options.React);
  });

  it('reads the new value in the same handler when uncontrolled', () => {
    const hook = renderHook(() => useSelect());
    let read: string | null = null;

    act(() => {
      hook.result.current.setValue('Vue');
      read = hook.result.current.getValue();
    });

    expect(read).toBe('Vue');
  });

  it('keeps the controlled value when the parent does not update it', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useSelect({ value: 'React', onChange }));

    act(() => hook.result.current.setValue('Vue'));
    expect(onChange).toHaveBeenCalledWith('Vue', null);
    expect(hook.result.current.getValue()).toBe('React');
    expect(hook.result.current.valueControlled).toBe(true);
  });

  it('returns undefined from getValueOption until options are registered', () => {
    const hook = renderHook(() => useSelect({ defaultValue: 'React' }));
    expect(hook.result.current.getValueOption()).toBeUndefined();

    hook.result.current.registerOptions(options);
    expect(hook.result.current.getValueOption()).toEqual(options.React);
  });

  it('retains the option of the current value after it is removed from registered options', () => {
    const hook = renderHook(() => useSelect({ defaultValue: 'React' }));
    hook.result.current.registerOptions(options);
    hook.result.current.registerOptions({ Vue: options.Vue });

    expect(hook.result.current.getValueOption()).toEqual(options.React);
  });

  it('retains the option passed to setValue when it is not registered', () => {
    const hook = renderHook(() => useSelect());
    const created = { value: 'Svelte', label: 'Svelte!' };

    act(() => hook.result.current.setValue('Svelte', created));
    expect(hook.result.current.getValueOption()).toEqual(created);
  });

  it('returns the value label from getSearch until the search is set', () => {
    const hook = renderHook(() => useSelect({ defaultValue: 'React' }));
    expect(hook.result.current.getSearch()).toBe('');

    hook.result.current.registerOptions(options);
    expect(hook.result.current.getSearch()).toBe('React.js');

    act(() => hook.result.current.setSearch(''));
    expect(hook.result.current.getSearch()).toBe('');

    act(() => hook.result.current.setSearch('Vu'));
    expect(hook.result.current.getSearch()).toBe('Vu');
  });

  it('returns the search from getSearch when a search option is provided', () => {
    const hook = renderHook(() => useSelect({ defaultValue: 'React', defaultSearchValue: '' }));
    hook.result.current.registerOptions(options);
    expect(hook.result.current.getSearch()).toBe('');
  });

  it('calls onSearchChange from setSearch', () => {
    const onSearchChange = jest.fn();
    const hook = renderHook(() => useSelect({ onSearchChange }));

    act(() => hook.result.current.setSearch('Re'));
    expect(onSearchChange).toHaveBeenCalledWith('Re');
  });

  it('opens, closes and toggles the dropdown', () => {
    const hook = renderHook(() => useSelect());
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
    const hook = renderHook(() => useSelect({ defaultDropdownOpened: true }));
    expect(hook.result.current.isDropdownOpened()).toBe(true);
  });

  it('calls dropdown options before registered dropdown callbacks', () => {
    const calls: string[] = [];
    const hook = renderHook(() =>
      useSelect({
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
    const hook = renderHook(() => useSelect());

    hook.result.current.registerDropdownCallbacks({ onOpen: first });
    hook.result.current.registerDropdownCallbacks({ onOpen: second });
    act(() => hook.result.current.openDropdown());

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('reads list id and selected option index through getters', () => {
    const hook = renderHook(() => useSelect());
    const store = hook.result.current;
    expect(store.getListId()).toBeNull();
    expect(store.getSelectedOptionIndex()).toBe(-1);

    store.setListId('list-id');
    store.updateSelectedOptionIndex(2);

    expect(store.getListId()).toBe('list-id');
    expect(store.getSelectedOptionIndex()).toBe(2);
  });
});
