import { useCallback, useEffect, useRef, useState } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  hide,
  inline,
  limitShift,
  Middleware,
  offset,
  shift,
  size,
  useFloating,
  UseFloatingReturn,
} from '@floating-ui/react';
import { useDidUpdate, useIsomorphicEffect, useUncontrolled } from '@mantine/hooks';
import { FloatingAxesOffsets, FloatingPosition, FloatingStrategy } from '../../utils/Floating';
import { PopoverMiddlewares, PopoverWidth } from './Popover.types';

interface UsePopoverOptions {
  offset: number | FloatingAxesOffsets;
  position: FloatingPosition;
  onPositionChange?: (position: FloatingPosition) => void;
  opened: boolean | undefined;
  defaultOpened: boolean | undefined;
  onChange?: (opened: boolean) => void;
  onClose?: () => void;
  onDismiss?: () => void;
  onOpen?: () => void;
  width: PopoverWidth;
  middlewares: PopoverMiddlewares | undefined;
  arrowRef: React.RefObject<HTMLDivElement | null>;
  arrowOffset: number;
  strategy?: FloatingStrategy;
  disabled: boolean | undefined;
  preventPositionChangeWhenVisible: boolean | undefined;
  keepMounted: boolean | undefined;
}

function getDefaultMiddlewares(middlewares: PopoverMiddlewares | undefined): PopoverMiddlewares {
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

function getPopoverMiddlewares(
  options: UsePopoverOptions,
  getFloating: () => UseFloatingReturn<Element>,
  disableFlip: boolean,
  lockEnabled: boolean
) {
  const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
  const middlewares: Middleware[] = [offset(options.offset), hide()];

  if (middlewaresOptions.flip && !disableFlip) {
    const userFlip = typeof middlewaresOptions.flip === 'boolean' ? {} : middlewaresOptions.flip;
    const flipOptions = lockEnabled
      ? { fallbackStrategy: 'initialPlacement' as const, ...userFlip }
      : userFlip;
    middlewares.push(flip(flipOptions));
  }

  if (middlewaresOptions.shift) {
    middlewares.push(
      shift(
        typeof middlewaresOptions.shift === 'boolean'
          ? { limiter: limitShift(), padding: 5 }
          : { limiter: limitShift(), padding: 5, ...middlewaresOptions.shift }
      )
    );
  }

  if (middlewaresOptions.inline) {
    middlewares.push(
      typeof middlewaresOptions.inline === 'boolean' ? inline() : inline(middlewaresOptions.inline)
    );
  }

  middlewares.push(arrow({ element: options.arrowRef, padding: options.arrowOffset }));

  if (middlewaresOptions.size || options.width === 'target') {
    middlewares.push(
      size({
        ...(typeof middlewaresOptions.size === 'boolean' ? {} : middlewaresOptions.size),
        apply({ rects, availableWidth, availableHeight, ...rest }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (middlewaresOptions.size) {
            // If custom apply function is given use that else set defaults
            if (typeof middlewaresOptions.size === 'object' && !!middlewaresOptions.size.apply) {
              middlewaresOptions.size.apply({ rects, availableWidth, availableHeight, ...rest });
            } else {
              Object.assign(styles, {
                maxWidth: `${availableWidth}px`,
                maxHeight: `${availableHeight}px`,
              });
            }
          }

          if (options.width === 'target') {
            Object.assign(styles, {
              width: `${rects.reference.width}px`,
            });
          }
        },
      })
    );
  }

  return middlewares;
}

export function usePopover(options: UsePopoverOptions) {
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange,
  });

  const previouslyOpened = useRef(_opened);

  const [lockedPlacement, setLockedPlacement] = useState<FloatingPosition | null>(null);
  const lockEnabled = options.preventPositionChangeWhenVisible !== false;

  const wasOpenedRef = useRef(_opened);
  if (_opened !== wasOpenedRef.current) {
    wasOpenedRef.current = _opened;
    if (_opened && lockedPlacement !== null) {
      setLockedPlacement(null);
    }
  }

  const resetLockedPlacement = useCallback(() => setLockedPlacement(null), []);

  const onClose = () => {
    if (_opened && !options.disabled) {
      setOpened(false);
    }
  };

  const onToggle = () => {
    if (!options.disabled) {
      setOpened(!_opened);
    }
  };

  const floating: UseFloatingReturn<Element> = useFloating({
    open: _opened,
    strategy: options.strategy,
    placement: lockEnabled ? (lockedPlacement ?? options.position) : options.position,
    middleware: getPopoverMiddlewares(
      options,
      () => floating,
      lockEnabled && lockedPlacement !== null,
      lockEnabled
    ),
    whileElementsMounted: !options.keepMounted ? autoUpdate : undefined,
  });

  useEffect(() => {
    if (!floating.refs.reference.current || !floating.refs.floating.current) {
      return;
    }

    if (_opened) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
  }, [_opened, floating.update]);

  const measuredAfterShowRef = useRef(false);

  useIsomorphicEffect(() => {
    if (!_opened) {
      measuredAfterShowRef.current = false;
      return;
    }

    if (!lockEnabled || lockedPlacement !== null) {
      return;
    }

    const flEl = floating.refs.floating.current as HTMLElement | null;
    if (!flEl || flEl.offsetHeight === 0 || flEl.offsetWidth === 0) {
      return;
    }

    if (!measuredAfterShowRef.current) {
      measuredAfterShowRef.current = true;
      floating.update();
      return;
    }

    if (floating.isPositioned) {
      setLockedPlacement(floating.placement);
    }
  }, [
    lockEnabled,
    _opened,
    floating.isPositioned,
    floating.placement,
    lockedPlacement,
    floating.update,
  ]);

  const previousPlacementRef = useRef(floating.placement);
  useIsomorphicEffect(() => {
    if (previousPlacementRef.current !== floating.placement) {
      previousPlacementRef.current = floating.placement;
      options.onPositionChange?.(floating.placement);
    }
  }, [floating.placement]);

  useDidUpdate(() => {
    if (_opened !== previouslyOpened.current) {
      if (!_opened) {
        options.onClose?.();
      } else {
        options.onOpen?.();
      }
    }

    previouslyOpened.current = _opened;
  }, [_opened, options.onClose, options.onOpen]);

  return {
    floating,
    controlled: typeof options.opened === 'boolean',
    opened: _opened,
    onClose,
    onToggle,
    resetLockedPlacement,
  };
}
