import { useEffect, useState } from 'react';
import { useDidUpdate } from '@mantine/hooks';
import {
  Placement,
  useFloating,
  shift,
  flip,
  offset,
  size,
  autoUpdate,
  Middleware,
} from '@floating-ui/react-dom-interactions';
import { PopoverWidth, PopoverMiddlewares } from './Popover.types';

interface UsePopoverOptions {
  offset: number;
  position: Placement;
  positionDependencies: any[];
  onPositionChange?(position: Placement): void;
  opened: boolean;
  width: PopoverWidth;
  middlewares: PopoverMiddlewares;
}

function getPopoverMiddlewares(options: UsePopoverOptions) {
  const middlewares: Middleware[] = [offset(options.offset)];

  if (options.middlewares.shift) {
    middlewares.push(shift());
  }

  if (options.middlewares.flip) {
    middlewares.push(flip());
  }

  return middlewares;
}

export function usePopover(options: UsePopoverOptions) {
  const [delayedUpdate, setDelayedUpdate] = useState(0);
  const floating = useFloating({
    placement: options.position,
    middleware: [
      ...getPopoverMiddlewares(options),
      ...(options.width === 'target'
        ? [
            size({
              apply({ reference }) {
                Object.assign(floating.refs.floating.current?.style ?? {}, {
                  width: `${reference.width}px`,
                });
              },
            }),
          ]
        : []),
    ],
  });

  useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }

    return undefined;
  }, [floating.refs.reference, floating.refs.floating, options.opened, delayedUpdate]);

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);

  useDidUpdate(() => {
    floating.update();
  }, options.positionDependencies);

  useDidUpdate(() => {
    setDelayedUpdate((c) => c + 1);
  }, [options.opened]);

  return floating;
}
