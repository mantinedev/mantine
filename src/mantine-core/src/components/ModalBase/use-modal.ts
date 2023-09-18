import { useState } from 'react';
import { useId, useWindowEvent, useFocusReturn } from '@mantine/hooks';
import { useLockScroll } from './use-lock-scroll';
import { TransitionOverride } from '../Transition';

interface UseModalInput {
  opened: boolean;
  onClose(): void;
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

  useWindowEvent('keydown', (event) => {
    if (!trapFocus && event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  });

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
