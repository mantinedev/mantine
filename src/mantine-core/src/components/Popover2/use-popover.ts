import { useEffect } from 'react';
import { useDidUpdate } from '@mantine/hooks';
import {
  Placement,
  useFloating,
  shift,
  flip,
  offset,
  autoUpdate,
} from '@floating-ui/react-dom-interactions';

interface UsePopoverOptions {
  offset: number;
  position: Placement;
  positionDependencies: any[];
  onPositionChange?(position: Placement): void;
  opened: boolean;
}

export function usePopover(options: UsePopoverOptions) {
  const floating = useFloating({
    placement: options.position,
    middleware: [shift(), flip(), offset(options.offset)],
  });

  useEffect(() => {
    if (floating.refs.reference.current && floating.refs.floating.current) {
      return autoUpdate(floating.refs.reference.current, floating.refs.floating.current, () => {
        floating.update();
      });
    }

    return undefined;
  }, [options.opened]);

  useDidUpdate(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);

  useDidUpdate(() => {
    floating.update();
  }, options.positionDependencies);

  return floating;
}
