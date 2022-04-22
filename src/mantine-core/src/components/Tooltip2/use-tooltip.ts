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
import { useTooltipGroupContext } from './TooltipGroup/TooltipGroup.context';

interface UseTooltip {
  position: Placement;
  closeDelay: number;
  openDelay: number;
  onPositionChange?(position: Placement): void;
  opened?: boolean;
}

export function useTooltip(settings: UseTooltip) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
  const opened = typeof settings.opened === 'boolean' ? settings.opened : uncontrolledOpened;
  const withinGroup = useTooltipGroupContext();
  const uid = useId();

  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroupContext();

  const onChange = useCallback(
    (_opened: boolean) => {
      setUncontrolledOpened(_opened);

      if (_opened) {
        setCurrentId(uid);
      }
    },
    [setCurrentId, uid]
  );

  const { x, y, reference, floating, context, refs, update, placement } = useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [offset(5), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      restMs: 100,
      mouseOnly: true,
    }),
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
    settings.onPositionChange?.(placement);
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
