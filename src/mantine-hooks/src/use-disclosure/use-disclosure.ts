import { useState, useCallback } from 'react';

export function useDisclosure(
  initialState: boolean,
  callbacks?: { onOpen?(): void; onClose?(): void }
) {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        callbacks?.onOpen?.();
        return true;
      }
      return isOpened;
    });
  }, []);

  const close = useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        callbacks?.onClose?.();
        return false;
      }
      return isOpened;
    });
  }, []);

  const toggle = useCallback(() => {
    opened ? close() : open();
  }, [opened]);

  return [opened, { open, close, toggle }] as const;
}
