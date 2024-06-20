import { useCallback, useState } from 'react';
import {
  arrow,
  flip,
  inline,
  offset,
  shift,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useDidUpdate, useId } from '@mantine/hooks';
import {
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  useFloatingAutoUpdate,
} from '../Floating';
import { useTooltipGroupContext } from './TooltipGroup/TooltipGroup.context';

interface UseTooltip {
  position: FloatingPosition;
  closeDelay?: number;
  openDelay?: number;
  onPositionChange?: (position: FloatingPosition) => void;
  opened?: boolean;
  offset: number | FloatingAxesOffsets;
  arrowRef?: React.RefObject<HTMLDivElement>;
  arrowOffset?: number;
  events?: { hover: boolean; focus: boolean; touch: boolean };
  positionDependencies: any[];
  inline?: boolean;
  strategy?: FloatingStrategy;
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
    context,
    refs,
    update,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    strategy: settings.strategy,
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: [
      offset(settings.offset),
      shift({ padding: 8 }),
      flip(),
      arrow({ element: settings.arrowRef!, padding: settings.arrowOffset }),
      ...(settings.inline ? [inline()] : []),
    ],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: settings.events?.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events?.touch,
    }),
    useFocus(context, { enabled: settings.events?.focus, visibleOnly: true }),
    useRole(context, { role: 'tooltip' }),
    // cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === 'undefined' }),
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
    reference: refs.setReference,
    floating: refs.setFloating,
    getFloatingProps,
    getReferenceProps,
    isGroupPhase,
    opened,
    placement,
  };
}
