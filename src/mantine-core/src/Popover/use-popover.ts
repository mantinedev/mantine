import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  useFloating,
  shift,
  flip,
  arrow,
  offset,
  size,
  Middleware,
} from '@floating-ui/react-dom-interactions';
import { FloatingPosition, useFloatingAutoUpdate } from '../Floating';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';

interface UsePopoverOptions {
  offset: number;
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
}

function getPopoverMiddlewares(options: UsePopoverOptions) {
  const middlewares: Middleware[] = [offset(options.offset)];

  if (options.middlewares.shift) {
    middlewares.push(shift());
  }

  if (options.middlewares.flip) {
    middlewares.push(flip());
  }

  middlewares.push(arrow({ element: options.arrowRef }));

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

  const floating = useFloating({
    placement: options.position,
    middleware: [
      ...getPopoverMiddlewares(options),
      ...(options.width === 'target'
        ? [
            size({
              apply({ rects }) {
                Object.assign(floating.refs.floating.current?.style ?? {}, {
                  width: `${rects.reference.width}px`,
                });
              },
            }),
          ]
        : []),
    ],
  });

  useFloatingAutoUpdate({
    opened: options.opened,
    positionDependencies: options.positionDependencies,
    floating,
  });

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);

  return {
    floating,
    controlled: typeof options.opened === 'boolean',
    opened: _opened,
    onClose,
    onToggle,
  };
}
