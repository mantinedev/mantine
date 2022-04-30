import { useEffect, useState, useCallback } from 'react';
import {
  useFloating,
  Placement,
  autoUpdate,
  flip,
  offset,
  shift,
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
  offset: number;
  events: { hover: boolean; focus: boolean; touch: boolean };
  positionDependencies: any[];
}

export function useTooltip(settings: UseTooltip) {
  const [delayedUpdate, setDelayedUpdate] = useState(0);
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
    middleware: [offset(settings.offset), shift({ padding: 8 }), flip()],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: settings.events.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events.touch,
    }),
    useFocus(context, { enabled: settings.events.focus, keyboardOnly: true }),
    useRole(context, { role: 'tooltip' }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === undefined }),
    useDelayGroup(context, { id: uid }),
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }

    return undefined;
  }, [refs.reference, refs.floating, opened, delayedUpdate]);

  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);

  useDidUpdate(() => {
    settings.onPositionChange?.(placement);
  }, [placement]);

  useDidUpdate(() => {
    update();
  }, settings.positionDependencies);

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
    placement,
  };
}
