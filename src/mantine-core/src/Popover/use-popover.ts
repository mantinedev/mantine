import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  useFloating,
  shift,
  flip,
  arrow,
  offset,
  size,
  Middleware,
  inline,
  limitShift,
  UseFloatingReturn,
} from '@floating-ui/react';
import { FloatingAxesOffsets, FloatingPosition, useFloatingAutoUpdate } from '../Floating';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';

interface UsePopoverOptions {
  offset: number | FloatingAxesOffsets;
  position: FloatingPosition;
  positionDependencies: any[];
  onPositionChange?(position: FloatingPosition): void;
  opened: boolean;
  defaultOpened: boolean;
  onChange(opened: boolean): void;
  onClose?(): void;
  onOpen?(): void;
  width: PopoverWidth;
  middlewares: PopoverMiddlewares;
  arrowRef: React.RefObject<HTMLDivElement>;
  arrowOffset: number;
}

function getPopoverMiddlewares(
  options: UsePopoverOptions,
  getFloating: () => UseFloatingReturn<Element>
) {
  const middlewares: Middleware[] = [offset(options.offset)];

  if (options.middlewares.shift) {
    middlewares.push(shift({ limiter: limitShift() }));
  }

  if (options.middlewares.flip) {
    middlewares.push(flip());
  }

  if (options.middlewares.inline) {
    middlewares.push(inline());
  }

  middlewares.push(arrow({ element: options.arrowRef, padding: options.arrowOffset }));

  if (options.middlewares.size || options.width === 'target') {
    middlewares.push(
      size({
        apply({ rects, availableWidth, availableHeight }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};

          if (options.middlewares.size) {
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
    options.onClose?.();
    setOpened(false);
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
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating),
  });

  useFloatingAutoUpdate({
    opened: options.opened,
    position: options.position,
    positionDependencies: options.positionDependencies,
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
