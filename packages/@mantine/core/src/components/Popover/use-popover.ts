import { useEffect, useRef } from 'react';
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
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import { useMantineEnv } from '../../core';
import { FloatingAxesOffsets, FloatingPosition, FloatingStrategy } from '../Floating';
import { PopoverMiddlewares, PopoverWidth } from './Popover.types';

interface UsePopoverOptions {
  offset: number | FloatingAxesOffsets;
  position: FloatingPosition;
  positionDependencies: any[] | undefined;
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
  dropdownVisible: boolean;
  setDropdownVisible: (visible: boolean) => void;
  positionRef: React.RefObject<FloatingPosition>;
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
  env: 'test' | 'default'
) {
  const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
  const middlewares: Middleware[] = [offset(options.offset), hide()];

  if (options.dropdownVisible && env !== 'test' && options.preventPositionChangeWhenVisible) {
    middlewaresOptions.flip = false;
    middlewaresOptions.shift = false;
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

  if (middlewaresOptions.flip) {
    middlewares.push(
      typeof middlewaresOptions.flip === 'boolean' ? flip() : flip(middlewaresOptions.flip)
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
            //If custom apply function is given use that else set defaults
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
  const env = useMantineEnv();
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange,
  });

  const previouslyOpened = useRef(_opened);

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
    strategy: options.strategy,
    placement: options.preventPositionChangeWhenVisible
      ? options.positionRef.current
      : options.position,
    middleware: getPopoverMiddlewares(options, () => floating, env),
    // Only use whileElementsMounted when elements are conditionally rendered (not keepMounted)
    // When keepMounted=true, elements are hidden with CSS and we need manual autoUpdate control
    whileElementsMounted: options.keepMounted ? undefined : autoUpdate,
  });

  // Manual autoUpdate control for keepMounted scenario
  // This follows Floating UI's recommendation for CSS-hidden elements
  useEffect(() => {
    if (
      !options.keepMounted ||
      !floating.refs.reference.current ||
      !floating.refs.floating.current
    ) {
      return;
    }

    // Only run autoUpdate when the popover is actually opened
    if (_opened) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
  }, [
    options.keepMounted,
    _opened,
    floating.refs.reference,
    floating.refs.floating,
    floating.update,
  ]);

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
    options.positionRef.current = floating.placement;
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

  useDidUpdate(() => {
    let timeout: number = -1;

    if (_opened) {
      // Required to be in timeout to give floating ui render time to flip/shift popover
      timeout = window.setTimeout(() => options.setDropdownVisible(true), 4);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [_opened, options.position]);

  return {
    floating,
    controlled: typeof options.opened === 'boolean',
    opened: _opened,
    onClose,
    onToggle,
  };
}
