import {
  arrow,
  flip,
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
import {
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  useFloatingAutoUpdate,
} from '../Floating';
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
  onOpen?: () => void;
  width: PopoverWidth;
  middlewares: PopoverMiddlewares | undefined;
  arrowRef: React.RefObject<HTMLDivElement>;
  arrowOffset: number;
  strategy?: FloatingStrategy;
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
  getFloating: () => UseFloatingReturn<Element>
) {
  const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
  const middlewares: Middleware[] = [offset(options.offset)];

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
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (middlewaresOptions.size) {
            Object.assign(styles, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`,
            });
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

  const onClose = () => {
    if (_opened) {
      options.onClose?.();
      setOpened(false);
    }
  };

  const onToggle = () => {
    if (_opened) {
      options.onClose?.();
      setOpened(false);
    } else {
      options.onOpen?.();
      setOpened(true);
    }
  };

  const floating: UseFloatingReturn<Element> = useFloating({
    strategy: options.strategy,
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating),
  });

  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating,
  });

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);

  useDidUpdate(() => {
    if (!options.opened) {
      options.onClose?.();
    } else {
      options.onOpen?.();
    }
  }, [options.opened]);

  return {
    floating,
    controlled: typeof options.opened === 'boolean',
    opened: _opened,
    onClose,
    onToggle,
  };
}
