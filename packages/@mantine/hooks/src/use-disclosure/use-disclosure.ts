import { useCallback, useRef, useState } from 'react';

export interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface UseDisclosureHandlers {
  set: (value: boolean) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export type UseDisclosureReturnValue = [boolean, UseDisclosureHandlers];

export function useDisclosure(
  initialState = false,
  options: UseDisclosureOptions = {}
): UseDisclosureReturnValue {
  const [opened, setOpened] = useState(initialState);
  const openedRef = useRef(initialState);

  const setOpen = useCallback((value: boolean) => {
    openedRef.current = value;
    setOpened(value);
  }, []);

  const open = useCallback(() => {
    if (openedRef.current) {
      return;
    }
    options.onOpen?.();
    setOpen(true);
  }, [options.onOpen, setOpen]);

  const close = useCallback(() => {
    if (!openedRef.current) {
      return;
    }
    options.onClose?.();
    setOpen(false);
  }, [options.onClose, setOpen]);

  const toggle = useCallback(() => {
    openedRef.current ? close() : open();
  }, [close, open]);

  return [opened, { open, close, toggle, set: setOpen }];
}

export namespace useDisclosure {
  export type Options = UseDisclosureOptions;
  export type Handlers = UseDisclosureHandlers;
  export type ReturnValue = UseDisclosureReturnValue;
}
