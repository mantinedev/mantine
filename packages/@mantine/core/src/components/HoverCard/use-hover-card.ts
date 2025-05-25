import { useCallback, useState } from 'react';
import {
  useDelayGroup,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useDismiss,
} from '@floating-ui/react';
import { useId } from '@mantine/hooks';
import { useHoverCardGroupContext } from './HoverCardGroup/HoverCardGroup.context';

interface UseHoverCard {
  openDelay?: number;
  closeDelay?: number;
  opened?: boolean;
  defaultOpened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useHoverCard(settings: UseHoverCard) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(settings.defaultOpened);
  const controlled = typeof settings.opened === 'boolean';
  const opened = controlled ? settings.opened : uncontrolledOpened;
  const withinGroup = useHoverCardGroupContext();
  const uid = useId();

  const onChange = useCallback(
    (_opened: boolean) => {
      setUncontrolledOpened(_opened);

      if (_opened) {
        setCurrentId(uid);
        settings.onOpen?.();
      } else {
        settings.onClose?.();
      }
    },
    [uid, settings.onOpen, settings.onClose]
  );

  const { context, refs } = useFloating({
    open: opened,
    onOpenChange: onChange,
  });

  const { delay: groupDelay, setCurrentId } = useDelayGroup(context, { id: uid });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: true,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
    }),
    useRole(context, { role: 'dialog' }),
    useDismiss(context, { enabled: typeof settings.opened === 'undefined' }),
  ]);

  return {
    opened,
    reference: refs.setReference,
    floating: refs.setFloating,
    getReferenceProps,
    getFloatingProps,
  };
} 