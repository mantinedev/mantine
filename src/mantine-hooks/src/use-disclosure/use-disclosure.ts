import { useState } from 'react';

export function useDisclosure(
  initialState: boolean,
  callbacks?: { onOpen?(): void; onClose?(): void }
) {
  const [opened, setOpened] = useState(initialState);

  const open = () => {
    if (!opened) {
      setOpened(true);
      callbacks?.onOpen?.();
    }
  };

  const close = () => {
    if (opened) {
      setOpened(false);
      callbacks?.onClose?.();
    }
  };

  const toggle = () => {
    opened ? close() : open();
  };

  return [opened, { open, close, toggle }] as const;
}
