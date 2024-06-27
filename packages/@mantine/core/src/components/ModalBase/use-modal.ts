import { useState } from 'react';
import { useFocusReturn, useId, useWindowEvent } from '@mantine/hooks';
import { TransitionOverride } from '../Transition';
import { useLockScroll } from './use-lock-scroll';

interface UseModalInput {
  opened: boolean;
  onClose: () => void;
  id: string | undefined;
  transitionProps: TransitionOverride | undefined;
  trapFocus: boolean | undefined;
  closeOnEscape: boolean | undefined;
  returnFocus: boolean | undefined;
}

export function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus,
}: UseModalInput) {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);

  const transitionDuration =
    typeof transitionProps?.duration === 'number' ? transitionProps?.duration : 200;

  const shouldLockScroll = useLockScroll({ opened, transitionDuration });

  useWindowEvent(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && closeOnEscape && opened) {
        const shouldTrigger =
          (event.target as HTMLElement)?.getAttribute('data-mantine-stop-propagation') !== 'true';
        shouldTrigger && onClose();
      }
    },
    { capture: true }
  );

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });

  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted,
  };
}
