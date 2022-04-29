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
} from '@floating-ui/react-dom-interactions';
import { PopoverWidth } from './Popover.types';

interface UsePopoverOptions {
  offset: number;
  position: Placement;
  positionDependencies: any[];
  onPositionChange?(position: Placement): void;
  opened: boolean;
  width: PopoverWidth;
}

export function usePopover(options: UsePopoverOptions) {
  const [delayedUpdate, setDelayedUpdate] = useState(0);
  const floating = useFloating({
    placement: options.position,
    middleware: [
      shift(),
      flip(),
      offset(options.offset),
      ...(options.width === 'target'
        ? [
            size({
              apply({ reference, height }) {
                Object.assign(floating.refs.floating.current?.style ?? {}, {
                  width: `${reference.width}px`,
                  maxHeight: `${height}px`,
                });
              },
              padding: 8,
            }),
          ]
        : []),
    ],
  });

  useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(floating.refs.reference.current, floating.refs.floating.current, () => {
        floating.update();
      });
    }

    return undefined;
  }, [floating.refs, options.opened, delayedUpdate]);

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
