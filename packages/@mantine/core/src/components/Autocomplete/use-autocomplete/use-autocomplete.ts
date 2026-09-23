import { useCallback, useMemo } from 'react';
import { useCallbackRef, useLatestRef, useUncontrolled } from '@mantine/hooks';
import type { ComboboxStore } from '../../Combobox';
import {
  ComboboxDropdownCallbacks,
  useComboboxWithCallbacks,
} from '../../Combobox/use-combobox/use-combobox-with-callbacks';

export interface AutocompleteStoreOptions {
  /** Controlled value, the text displayed in the input */
  value?: string;

  /** Uncontrolled default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;
}

export interface AutocompleteStore extends ComboboxStore {
  /** Current value, the text displayed in the input */
  value: string;

  /** Returns current value */
  getValue: () => string;

  /** Sets the value and calls `onChange` */
  setValue: (value: string) => void;

  /** Registers dropdown open and close callbacks, used internally by `Autocomplete` on every render */
  registerDropdownCallbacks: (callbacks: ComboboxDropdownCallbacks) => void;
}

export function useAutocomplete(options: AutocompleteStoreOptions = {}): AutocompleteStore {
  const { combobox, registerDropdownCallbacks } = useComboboxWithCallbacks({
    dropdownOpened: options.dropdownOpened,
    defaultDropdownOpened: options.defaultDropdownOpened,
    onDropdownOpen: options.onDropdownOpen,
    onDropdownClose: options.onDropdownClose,
  });

  const [value, setValueState, valueControlled] = useUncontrolled({
    value: options.value,
    defaultValue: options.defaultValue,
    finalValue: '',
    onChange: options.onChange,
  });

  const latest = useLatestRef({ value });

  const getValue = useCallback(() => latest.current.value, []);

  const setValue = useCallbackRef((next: string) => {
    if (!valueControlled) {
      latest.current.value = next;
    }

    setValueState(next);
  });

  return useMemo(
    () => ({
      ...combobox,
      value,
      getValue,
      setValue,
      registerDropdownCallbacks,
    }),
    [combobox, value]
  );
}
