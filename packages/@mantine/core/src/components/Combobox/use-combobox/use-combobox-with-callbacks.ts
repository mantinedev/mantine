import { useCallback, useRef } from 'react';
import { ComboboxDropdownEventSource, useCombobox } from './use-combobox';

export interface ComboboxDropdownCallbacks {
  onOpen?: (eventSource: ComboboxDropdownEventSource) => void;
  onClose?: (eventSource: ComboboxDropdownEventSource) => void;
}

interface ComboboxWithCallbacksOptions {
  dropdownOpened?: boolean;
  defaultDropdownOpened?: boolean;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
}

export function useComboboxWithCallbacks({
  dropdownOpened,
  defaultDropdownOpened,
  onDropdownOpen,
  onDropdownClose,
}: ComboboxWithCallbacksOptions) {
  const callbacksRef = useRef<ComboboxDropdownCallbacks>({});

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: (eventSource) => {
      onDropdownOpen?.();
      callbacksRef.current.onOpen?.(eventSource);
    },
    onDropdownClose: (eventSource) => {
      onDropdownClose?.();
      callbacksRef.current.onClose?.(eventSource);
    },
  });

  const registerDropdownCallbacks = useCallback((callbacks: ComboboxDropdownCallbacks) => {
    callbacksRef.current = callbacks;
  }, []);

  return { combobox, registerDropdownCallbacks };
}
