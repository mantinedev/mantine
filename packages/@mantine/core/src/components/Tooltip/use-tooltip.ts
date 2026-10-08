import { use, useCallback, useEffect, useRef, useState } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  hide,
  inline,
  offset,
  safePolygon,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  type Middleware,
} from '@floating-ui/react';
import { useId, useIsomorphicEffect } from '@mantine/hooks';
import { useMantineEnv } from '../../core';
import { FloatingAxesOffsets, FloatingPosition, FloatingStrategy } from '../../utils/Floating';
import { type TooltipMiddlewares } from './Tooltip.types';
import { TooltipGroupContext } from './TooltipGroup/TooltipGroup';

interface UseTooltip {
  position: FloatingPosition;
  closeDelay?: number;
  openDelay?: number;
  onPositionChange?: (position: FloatingPosition) => void;
  opened?: boolean;
  defaultOpened?: boolean;
  disabled?: boolean;
  offset: number | FloatingAxesOffsets;
  arrowRef?: React.RefObject<HTMLDivElement | null>;
  arrowOffset?: number;
  events?: { hover: boolean; focus: boolean; touch: boolean };
  interactive?: boolean;
  inline?: boolean;
  strategy?: FloatingStrategy;
  middlewares?: TooltipMiddlewares;
  hideDetached?: boolean;
}

function getDefaultMiddlewares(middlewares: TooltipMiddlewares | undefined): TooltipMiddlewares {
  if (middlewares === undefined) {
    return { shift: true, flip: true };
  }

  const result = { ...middlewares };
  if (middlewares.shift === undefined) {
    result.shift = true;
  }

  if (middlewares.flip === undefined) {
    result.flip = true;
  }

  return result;
}

function getTooltipMiddlewares(settings: UseTooltip) {
  const middlewaresOptions = getDefaultMiddlewares(settings.middlewares);
  const middlewares: Middleware[] = [offset(settings.offset), hide()];

  if (middlewaresOptions.shift) {
    middlewares.push(
      shift(
        typeof middlewaresOptions.shift === 'boolean'
          ? { padding: 8 }
          : { padding: 8, ...middlewaresOptions.shift }
      )
    );
  }

  if (middlewaresOptions.flip) {
    middlewares.push(
      typeof middlewaresOptions.flip === 'boolean' ? flip() : flip(middlewaresOptions.flip)
    );
  }

  middlewares.push(arrow({ element: settings.arrowRef!, padding: settings.arrowOffset }));

  if (middlewaresOptions.inline) {
    middlewares.push(
      typeof middlewaresOptions.inline === 'boolean' ? inline() : inline(middlewaresOptions.inline)
    );
  } else if (settings.inline) {
    middlewares.push(inline());
  }

  return middlewares;
}

export function useTooltip(settings: UseTooltip) {
  const [uncontrolledOpened, setUncontrolledOpened] = useState(settings.defaultOpened);
  const controlled = typeof settings.opened === 'boolean';
  const opened = !settings.disabled && (controlled ? settings.opened : uncontrolledOpened);

  useEffect(() => {
    if (settings.disabled) {
      setUncontrolledOpened(false);
    }
  }, [settings.disabled]);
  const withinGroup = use(TooltipGroupContext).withinGroup;
  const uid = useId();
  const env = useMantineEnv();

  const onChange = useCallback(
    (_opened: boolean) => {
      setUncontrolledOpened(_opened);

      if (_opened) {
        setCurrentId(uid);
      }
    },
    [uid]
  );

  const {
    x,
    y,
    context,
    refs,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {}, hide: hideData },
  } = useFloating({
    strategy: settings.strategy,
    placement: settings.position,
    open: opened,
    onOpenChange: onChange,
    middleware: getTooltipMiddlewares(settings),
    whileElementsMounted: autoUpdate,
  });

  const { delay: groupDelay, currentId, setCurrentId } = useDelayGroup(context, { id: uid });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: !settings.disabled && settings.events?.hover,
      delay: withinGroup ? groupDelay : { open: settings.openDelay, close: settings.closeDelay },
      mouseOnly: !settings.events?.touch,
      handleClose: settings.interactive ? safePolygon() : null,
    }),
    useFocus(context, { enabled: !settings.disabled && settings.events?.focus, visibleOnly: true }),
    useRole(context, { role: 'tooltip' }),
    // Cannot be used with controlled tooltip, page jumps
    useDismiss(context, { enabled: typeof settings.opened === 'undefined' }),
  ]);

  const previousPlacementRef = useRef(placement);
  useIsomorphicEffect(() => {
    if (previousPlacementRef.current !== placement) {
      previousPlacementRef.current = placement;
      settings.onPositionChange?.(placement);
    }
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
    referenceHidden: settings.hideDetached && env !== 'test' ? hideData?.referenceHidden : false,
  };
}
