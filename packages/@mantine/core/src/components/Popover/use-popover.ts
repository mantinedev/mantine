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

function getPopoverMiddlewares(
  options: UsePopoverOptions,
  getFloating: () => UseFloatingReturn<Element>
) {
  const middlewares: Middleware[] = [offset(options.offset)];

  if (options.middlewares?.shift) {
    if (typeof options.middlewares.shift === 'object') {
    middlewares.push(shift({ limiter: limitShift(), ...options.middlewares.shift }));
    } else {
    middlewares.push(shift({ limiter: limitShift() }));
    }
  }

  if (options.middlewares?.flip) {
    middlewares.push(flip());
  }

  if (options.middlewares?.inline) {
    middlewares.push(inline());
  }

  middlewares.push(arrow({ element: options.arrowRef, padding: options.arrowOffset }));

  if (options.middlewares?.size || options.width === 'target') {
    middlewares.push(
      size({
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (options.middlewares?.size) {
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
