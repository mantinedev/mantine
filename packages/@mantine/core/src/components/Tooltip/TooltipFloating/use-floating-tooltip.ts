import { useCallback, useEffect, useRef, useState } from 'react';
import { getOverflowAncestors, shift, useFloating } from '@floating-ui/react';
import { FloatingPosition } from '../../Floating';

interface UseFloatingTooltip {
  offset: number;
  position: FloatingPosition;
  defaultOpened?: boolean;
}

export function useFloatingTooltip<T extends HTMLElement = any>({
  offset,
  position,
  defaultOpened,
}: UseFloatingTooltip) {
  const [opened, setOpened] = useState(defaultOpened);
  const boundaryRef = useRef<T>(null);
  const { x, y, elements, refs, update, placement } = useFloating({
    placement: position,
    middleware: [
      shift({
        crossAxis: true,
        padding: 5,
        rootBoundary: 'document',
      }),
    ],
  });

  const horizontalOffset = placement.includes('right')
    ? offset
    : position.includes('left')
      ? offset * -1
      : 0;

  const verticalOffset = placement.includes('bottom')
    ? offset
    : position.includes('top')
      ? offset * -1
      : 0;

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent | React.MouseEvent<T, MouseEvent>) => {
      refs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX + horizontalOffset,
            top: clientY + verticalOffset,
            right: clientX,
            bottom: clientY,
          };
        },
      });
    },
    [elements.reference]
  );

  useEffect(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current!;
      boundary.addEventListener('mousemove', handleMouseMove);

      const parents = getOverflowAncestors(refs.floating.current);
      parents.forEach((parent) => {
        parent.addEventListener('scroll', update);
      });

      return () => {
        boundary.removeEventListener('mousemove', handleMouseMove);
        parents.forEach((parent) => {
          parent.removeEventListener('scroll', update);
        });
      };
    }

    return undefined;
  }, [elements.reference, refs.floating.current, update, handleMouseMove, opened]);

  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating: refs.setFloating };
}
