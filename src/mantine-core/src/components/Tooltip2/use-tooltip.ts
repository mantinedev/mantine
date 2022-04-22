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
import { useDidUpdate } from '@mantine/hooks';

interface UseTooltip {
  position: Placement;
  closeDelay: number;
  openDelay: number;
  onPositionChange?(position: Placement): void;
}

export function useTooltip({ position, closeDelay, openDelay, onPositionChange }: UseTooltip) {
  const [opened, setOpened] = useState(true);
  const uid = useId();

  const { delay, currentId, setCurrentId } = useDelayGroupContext();

  const onChange = useCallback(
    (_opened: boolean) => {
      setOpened(_opened);

      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );

  const { x, y, reference, floating, context, refs, update, placement } = useFloating({
    placement: position,
    open: opened,
    onOpenChange: onChange,
    middleware: [offset(5), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { delay, restMs: 100, mouseOnly: true }),
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

  useDidUpdate(() => {
    onPositionChange?.(placement);
  }, [placement]);

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
