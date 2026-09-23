import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import type { Primitive } from '../../../core';
import {
  ComboboxDropdownEventSource,
  ComboboxItem,
  ComboboxStore,
  useCombobox,
} from '../../Combobox';

export interface SelectStoreOptions<Value extends Primitive = string> {
  /** Controlled value. Not used to infer the value type, pass it explicitly for non-string values: `useSelect<number>()` */
  value?: NoInfer<Value> | null;

  /** Uncontrolled default value */
  defaultValue?: NoInfer<Value> | null;

  /** Called when value changes */
  onChange?: (value: Value | null, option: ComboboxItem<Value>) => void;

  /** Controlled search value */
  searchValue?: string;

  /** Uncontrolled default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;
}

export interface SelectDropdownCallbacks {
  onOpen?: (eventSource: ComboboxDropdownEventSource) => void;
  onClose?: (eventSource: ComboboxDropdownEventSource) => void;
}

export interface SelectStore<Value extends Primitive = string> extends ComboboxStore {
  /** Current value */
  value: Value | null;

  /** Returns current value */
  getValue: () => Value | null;

  /** Sets the value and calls `onChange`. When `option` is passed, its label is used for the value until `data` contains it */
  setValue: (value: Value | null, option?: ComboboxItem<Value>) => void;

  /** Current search value */
  search: string;

  /** Returns the text displayed in the input: the search value, or the label of the current value until the search is set */
  getSearch: () => string;

  /** Sets the search value and calls `onSearchChange`. `Select` sets it back to the selected option label on blur */
  setSearch: (search: string) => void;

  /** Returns the option of the current value. Keeps the last known option of the value after it is removed from `data`. Returns `undefined` until `Select` is rendered with the store */
  getValueOption: () => ComboboxItem<Value> | undefined;

  /** `true` when `value` option is set, used by `Select` to decide whether to sync the search with the selected option */
  valueControlled: boolean;

  /** `true` when `searchValue` option is set, used by `Select` to decide whether to sync the search with the selected option */
  searchControlled: boolean;

  /** Registers options parsed from `data`, used internally by `Select` on every render */
  registerOptions: (options: Record<string, ComboboxItem<Value>>) => void;

  /** Registers dropdown open and close callbacks, used internally by `Select` on every render */
  registerDropdownCallbacks: (callbacks: SelectDropdownCallbacks) => void;
}

export function useSelect<Value extends Primitive = string>(
  options: SelectStoreOptions<Value> = {}
): SelectStore<Value> {
  const {
    value: valueOption,
    defaultValue,
    onChange,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
  } = options;

  const dropdownCallbacksRef = useRef<SelectDropdownCallbacks>({});

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: (eventSource) => {
      onDropdownOpen?.();
      dropdownCallbacksRef.current.onOpen?.(eventSource);
    },
    onDropdownClose: (eventSource) => {
      onDropdownClose?.();
      dropdownCallbacksRef.current.onClose?.(eventSource);
    },
  });

  const latestCombobox = useLatestRef(combobox);

  const [value, setValueState, valueControlled] = useUncontrolled<Value | null>({
    value: valueOption,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const [search, setSearchState, searchControlled] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const latest = useLatestRef({ value, search });
  const searchSetRef = useRef(searchValue !== undefined || defaultSearchValue !== undefined);

  const optionsRef = useRef<Record<string, ComboboxItem<Value>>>({});
  const retainedRef = useRef<Record<string, ComboboxItem<Value>>>({});

  const resolveOption = useCallback((target: Value | null) => {
    if (target == null) {
      return undefined;
    }

    const key = `${target}`;
    return key in optionsRef.current ? optionsRef.current[key] : retainedRef.current[key];
  }, []);

  const getValue = useCallback(() => latest.current.value, []);
  const getSearch = useCallback(
    () =>
      searchSetRef.current
        ? latest.current.search
        : latest.current.search || resolveOption(latest.current.value)?.label || '',
    [resolveOption]
  );
  const getValueOption = useCallback(() => resolveOption(latest.current.value), [resolveOption]);

  const setValue = useCallbackRef((next: Value | null, option?: ComboboxItem<Value>) => {
    if (next != null && option) {
      retainedRef.current[`${next}`] = option;
    }

    if (!valueControlled) {
      latest.current.value = next;
    }

    setValueState(next, (option ?? resolveOption(next) ?? null) as ComboboxItem<Value>);
  });

  const setSearch = useCallbackRef((next: string) => {
    searchSetRef.current = true;

    if (!searchControlled) {
      latest.current.search = next;
    }

    setSearchState(next);
  });

  const registerOptions = useCallback((registered: Record<string, ComboboxItem<Value>>) => {
    optionsRef.current = registered;
    const current = latest.current.value;

    if (current != null && `${current}` in registered) {
      retainedRef.current[`${current}`] = registered[`${current}`];
    }
  }, []);

  const registerDropdownCallbacks = useCallback((callbacks: SelectDropdownCallbacks) => {
    dropdownCallbacksRef.current = callbacks;
  }, []);

  const openDropdown = useCallback(
    (eventSource?: ComboboxDropdownEventSource) => latestCombobox.current.openDropdown(eventSource),
    []
  );

  const closeDropdown = useCallback(
    (eventSource?: ComboboxDropdownEventSource) =>
      latestCombobox.current.closeDropdown(eventSource),
    []
  );

  const toggleDropdown = useCallback(
    (eventSource?: ComboboxDropdownEventSource) =>
      latestCombobox.current.toggleDropdown(eventSource),
    []
  );

  return useMemo(
    () => ({
      value,
      getValue,
      setValue,
      search,
      getSearch,
      setSearch,
      getValueOption,
      valueControlled,
      searchControlled,
      registerOptions,
      registerDropdownCallbacks,

      dropdownOpened: combobox.dropdownOpened,
      isDropdownOpened: combobox.isDropdownOpened,
      openDropdown,
      closeDropdown,
      toggleDropdown,

      getSelectedOptionIndex: combobox.getSelectedOptionIndex,
      selectOption: combobox.selectOption,
      selectFirstOption: combobox.selectFirstOption,
      selectActiveOption: combobox.selectActiveOption,
      selectNextOption: combobox.selectNextOption,
      selectPreviousOption: combobox.selectPreviousOption,
      resetSelectedOption: combobox.resetSelectedOption,
      updateSelectedOptionIndex: combobox.updateSelectedOptionIndex,
      clickSelectedOption: combobox.clickSelectedOption,

      getListId: combobox.getListId,
      setListId: combobox.setListId,

      searchRef: combobox.searchRef,
      focusSearchInput: combobox.focusSearchInput,

      targetRef: combobox.targetRef,
      focusTarget: combobox.focusTarget,
    }),
    [value, search, valueControlled, searchControlled, combobox.dropdownOpened]
  );
}
