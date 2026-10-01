import { useCallback, useRef } from 'react';
import { ComboboxDropdownEventSource, useCombobox } from './use-combobox';

/** Dropdown callbacks registered on a store by the component it is passed to */
export interface ComboboxDropdownCallbacks {
  /** Called when the dropdown opens */
  onOpen?: (eventSource: ComboboxDropdownEventSource) => void;

  /** Called when the dropdown closes */
  onClose?: (eventSource: ComboboxDropdownEventSource) => void;
}

interface ComboboxWithCallbacksOptions {
  dropdownOpened?: boolean;
  defaultDropdownOpened?: boolean;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
  scrollBehavior?: ScrollBehavior;
}

export function useComboboxWithCallbacks({
  dropdownOpened,
  defaultDropdownOpened,
  onDropdownOpen,
  onDropdownClose,
  scrollBehavior,
}: ComboboxWithCallbacksOptions) {
  const callbacksRef = useRef<ComboboxDropdownCallbacks>({});

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    scrollBehavior,
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
