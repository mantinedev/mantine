import { useEffect, useState, useCallback } from 'react';
import {
  useFloating,
  Placement,
  shift,
  autoUpdate,
  flip,
  offset,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useDelayGroupContext,
  useDelayGroup,
} from '@floating-ui/react-dom-interactions';
import { useId } from '@mantine/utils';

interface UseTooltip {
  position: Placement;
  closeDelay: number;
  openDelay: number;
}

export function useTooltip({ position, closeDelay, openDelay }: UseTooltip) {
  const [opened, setOpened] = useState(true);
  const uid = useId();

  const { delay, currentId, setCurrentId } = useDelayGroupContext();

  const onChange = useCallback(
    (_opened: boolean) => {
      setOpened(_opened);

      if (opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId]
  );

  const { x, y, reference, floating, context, refs, update } = useFloating({
    placement: position,
    open: opened,
    onOpenChange: onChange,
    middleware: [offset(5), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay: closeDelay, restMs: openDelay, mouseOnly: true }),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
    useDelayGroup(context, { id: uid }),
  ]);

  useEffect(() => {
    if (opened && refs.floating.current) {
      autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [opened, refs]);

  const isGroupPhase = opened && currentId && currentId !== uid;

  return {
    x,
    y,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
  };
}
