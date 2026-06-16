import { use, useCallback, useEffect, useRef, useState } from 'react';
import {
  useDelayGroup,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useId } from '@mantine/hooks';
import { HoverCardGroupContext } from './HoverCardGroup/HoverCardGroup';

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
  const withinGroup = use(HoverCardGroupContext).withinGroup;
  const uid = useId();

  const openTimeout = useRef(-1);
  const closeTimeout = useRef(-1);
  const targetRef = useRef<HTMLElement | null>(null);

  const assignTarget = useCallback((node: HTMLElement | null) => {
    targetRef.current = node;
  }, []);

  const clearTimeouts = useCallback(() => {
    window.clearTimeout(openTimeout.current);
    window.clearTimeout(closeTimeout.current);
  }, []);

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
    useDismiss(context, { enabled: withinGroup }),
  ]);

  const openDropdown = useCallback(() => {
    if (withinGroup) {
      return; // Group mode handles this automatically
    }

    clearTimeouts();
    if (settings.openDelay === 0 || settings.openDelay === undefined) {
      onChange(true);
    } else {
      openTimeout.current = window.setTimeout(() => onChange(true), settings.openDelay);
    }
  }, [withinGroup, clearTimeouts, settings.openDelay, onChange]);

  const closeDropdown = useCallback(() => {
    if (withinGroup) {
      return; // Group mode handles this automatically
    }

    clearTimeouts();
    if (settings.closeDelay === 0 || settings.closeDelay === undefined) {
      onChange(false);
    } else {
      closeTimeout.current = window.setTimeout(() => onChange(false), settings.closeDelay);
    }
  }, [withinGroup, clearTimeouts, settings.closeDelay, onChange]);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => () => clearTimeouts(), [clearTimeouts]);

  useEffect(() => {
    if (!opened || withinGroup || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const node = targetRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(() => {
      if (!node.isConnected || node.getClientRects().length === 0) {
        clearTimeouts();
        onChangeRef.current(false);
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [opened, withinGroup, clearTimeouts]);

  return {
    opened,
    reference: refs.setReference,
    floating: refs.setFloating,
    assignTarget,
    getReferenceProps,
    getFloatingProps,
    openDropdown,
    closeDropdown,
  };
}
