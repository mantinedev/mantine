import { useState, useCallback } from 'react';
import {
  useFloating,
  flip,
  arrow,
  offset,
  shift,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useDelayGroupContext,
  useDelayGroup,
  inline,
} from '@floating-ui/react';
import { useId, useDidUpdate } from '@mantine/hooks';
import { useTooltipGroupContext } from './TooltipGroup/TooltipGroup.context';
import { FloatingPosition, useFloatingAutoUpdate } from '../Floating';

interface UseTooltip {
  position: FloatingPosition;
  closeDelay: number;
  openDelay: number;
  onPositionChange?(position: FloatingPosition): void;
  opened?: boolean;
  offset: number;
  arrowRef?: React.RefObject<HTMLDivElement>;
  arrowOffset: number;
  events: { hover: boolean; focus: boolean; touch: boolean };
  positionDependencies: any[];
  inline: boolean;
}

export function useTooltip(settings: UseTooltip) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(false);
  const controlled = typeof settings.opened === 'boolean';
  const opened = controlled ? settings.opened : uncontrolledOpened;
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

  const {
    x,
    y,
    reference,
    floating,
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift({ padding: 8 }),
      flip(),
      arrow({ element: settings.arrowRef, padding: settings.arrowOffset }),
      ...(settings.inline ? [inline()] : []),
    ],
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

  useFloatingAutoUpdate({
    opened,
    position: settings.position,
    positionDependencies: settings.positionDependencies,
    floating: { refs, update },
  });

  useDidUpdate(() => {
    settings.onPositionChange?.(placement);
  }, [placement]);

  const isGroupPhase = opened && currentId && currentId !== uid;

  return {
    x,
    y,
    arrowX,
    arrowY,
    reference,
    floating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement,
  };
}
