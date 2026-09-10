import { useState } from 'react';
import { useFocusReturn, useId, useWindowEvent } from '@mantine/hooks';
import { TransitionOverride } from '../Transition';
import { useLockScroll } from './use-lock-scroll';

export interface UseOverlayInput {
  opened: boolean;
  onClose: () => void;
  id?: string;
  transitionProps?: TransitionOverride;
  trapFocus?: boolean;
  closeOnEscape?: boolean;
  returnFocus?: boolean;
  handledEscapeEvents?: WeakSet<KeyboardEvent>;
}

export interface UseOverlayReturn {
  _id: string;
  titleMounted: boolean;
  bodyMounted: boolean;
  shouldLockScroll: boolean;
  setTitleMounted: (value: boolean) => void;
  setBodyMounted: (value: boolean) => void;
  getTitleId: () => string;
  getBodyId: () => string;
  focusTrapActive: boolean;
  getContentProps: () => {
    role: 'dialog';
    tabIndex: -1;
    'aria-modal': true;
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
  };
}

export function useOverlay({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus,
  handledEscapeEvents,
}: UseOverlayInput): UseOverlayReturn {
  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);

  const transitionDuration =
    typeof transitionProps?.duration === 'number' ? transitionProps?.duration : 200;

  const shouldLockScroll = useLockScroll({ opened, transitionDuration });

  useWindowEvent(
    'keydown',
    (event) => {
      if (
        event.key === 'Escape' &&
        closeOnEscape &&
        !event.isComposing &&
        opened &&
        !handledEscapeEvents?.has(event)
      ) {
        const shouldTrigger =
          (event.target as HTMLElement)?.getAttribute('data-mantine-stop-propagation') !== 'true';
        if (shouldTrigger) {
          handledEscapeEvents?.add(event);
          onClose();
        }
      }
    },
    { capture: true }
  );

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });

  const getTitleId = () => `${_id}-title`;
  const getBodyId = () => `${_id}-body`;

  const getContentProps: UseOverlayReturn['getContentProps'] = () => ({
    role: 'dialog',
    tabIndex: -1,
    'aria-modal': true,
    'aria-describedby': bodyMounted ? getBodyId() : undefined,
    'aria-labelledby': titleMounted ? getTitleId() : undefined,
  });

  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted,
    getTitleId,
    getBodyId,
    focusTrapActive: !!(opened && trapFocus),
    getContentProps,
  };
}
