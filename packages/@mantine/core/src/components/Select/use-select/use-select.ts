import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import { Primitive } from '../../../core';
import { ComboboxItem, ComboboxStore } from '../../Combobox';
import {
  ComboboxDropdownCallbacks,
  useComboboxWithCallbacks,
} from '../../Combobox/use-combobox/use-combobox-with-callbacks';

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

export interface SelectStore<Value extends Primitive = string> extends ComboboxStore {
  /** Current value */
  value: Value | null;

  /** Returns current value */
  getValue: () => Value | null;

  /** Sets the value and calls `onChange`. When `option` is passed, its label is used for the value until `data` contains it */
  setValue: (value: Value | null, option?: ComboboxItem<Value>) => void;

  /** Current search value */
  search: string;

  /** Returns current search value, same as `search` */
  getSearch: () => string;

  /** Returns the text displayed in the input: the search value, or the label of the current value until the search is set */
  getDisplayedSearch: () => string;

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
  registerDropdownCallbacks: (callbacks: ComboboxDropdownCallbacks) => void;
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

  const { combobox, registerDropdownCallbacks } = useComboboxWithCallbacks({
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
  });

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
  const getSearch = useCallback(() => latest.current.search, []);
  const getDisplayedSearch = useCallback(
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

  return useMemo(
    () => ({
      ...combobox,
      value,
      getValue,
      setValue,
      search,
      getSearch,
      getDisplayedSearch,
      setSearch,
      getValueOption,
      valueControlled,
      searchControlled,
      registerOptions,
      registerDropdownCallbacks,
    }),
    [combobox, value, search, valueControlled, searchControlled]
  );
}
