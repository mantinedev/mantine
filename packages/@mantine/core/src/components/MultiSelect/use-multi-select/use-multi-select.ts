import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import { Primitive } from '../../../core';
import { ComboboxItem, ComboboxStore } from '../../Combobox';
import {
  ComboboxDropdownCallbacks,
  useComboboxWithCallbacks,
} from '../../Combobox/use-combobox/use-combobox-with-callbacks';

export interface MultiSelectStoreOptions<Value extends Primitive = string> {
  /** Controlled value. Not used to infer the value type, pass it explicitly for non-string values: `useMultiSelect<number>()` */
  value?: NoInfer<Value>[];

  /** Uncontrolled default value */
  defaultValue?: NoInfer<Value>[];

  /** Called when value changes */
  onChange?: (value: Value[]) => void;

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

export interface MultiSelectStore<Value extends Primitive = string> extends ComboboxStore {
  /** Current value */
  value: Value[];

  /** Returns current value */
  getValue: () => Value[];

  /** Sets the value and calls `onChange`. Labels of the passed `options` are used for their values until `data` contains them */
  setValue: (value: Value[], options?: ComboboxItem<Value>[]) => void;

  /** Current search value */
  search: string;

  /** Returns current search value */
  getSearch: () => string;

  /** Sets the search value and calls `onSearchChange`. `MultiSelect` clears it on blur and, with `clearSearchOnChange`, after an option is picked */
  setSearch: (search: string) => void;

  /** Returns options of the current values in value order. Keeps the last known option of each value after it is removed from `data`. A value without a known option is returned as `{ value, label: String(value) }` */
  getValueOptions: () => ComboboxItem<Value>[];

  /** Registers options parsed from `data`, used internally by `MultiSelect` on every render */
  registerOptions: (options: Record<string, ComboboxItem<Value>>) => void;

  /** Registers dropdown open and close callbacks, used internally by `MultiSelect` on every render */
  registerDropdownCallbacks: (callbacks: ComboboxDropdownCallbacks) => void;
}

export function useMultiSelect<Value extends Primitive = string>(
  options: MultiSelectStoreOptions<Value> = {}
): MultiSelectStore<Value> {
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

  const [value, setValueState, valueControlled] = useUncontrolled<Value[]>({
    value: valueOption,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const [search, setSearchState, searchControlled] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const latest = useLatestRef({ value, search });

  const optionsRef = useRef<Record<string, ComboboxItem<Value>>>({});
  const retainedRef = useRef<Record<string, ComboboxItem<Value>>>({});

  const retain = useCallback((values: Value[]) => {
    values.forEach((item) => {
      const key = `${item}`;
      if (key in optionsRef.current) {
        retainedRef.current[key] = optionsRef.current[key];
      }
    });
  }, []);

  const getValue = useCallback(() => latest.current.value, []);
  const getSearch = useCallback(() => latest.current.search, []);

  const getValueOptions = useCallback(
    () =>
      latest.current.value.map((item) => {
        const key = `${item}`;
        return (
          (key in optionsRef.current ? optionsRef.current[key] : retainedRef.current[key]) ?? {
            value: item,
            label: key,
          }
        );
      }),
    []
  );

  const setValue = useCallbackRef((next: Value[], nextOptions?: ComboboxItem<Value>[]) => {
    retain(next);
    nextOptions?.forEach((option) => {
      retainedRef.current[`${option.value}`] = option;
    });

    if (!valueControlled) {
      latest.current.value = next;
    }

    setValueState(next);
  });

  const setSearch = useCallbackRef((next: string) => {
    if (!searchControlled) {
      latest.current.search = next;
    }

    setSearchState(next);
  });

  const registerOptions = useCallback((registered: Record<string, ComboboxItem<Value>>) => {
    optionsRef.current = registered;
    retain(latest.current.value);
  }, []);

  return useMemo(
    () => ({
      ...combobox,
      value,
      getValue,
      setValue,
      search,
      getSearch,
      setSearch,
      getValueOptions,
      registerOptions,
      registerDropdownCallbacks,
    }),
    [combobox, value, search]
  );
}
