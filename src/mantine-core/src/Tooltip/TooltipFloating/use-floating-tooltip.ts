import { useState, useEffect, useCallback, useRef } from 'react';
import { useFloating, shift, getOverflowAncestors } from '@floating-ui/react';
import { FloatingPosition } from '../../Floating';

interface UseFloatingTooltip {
  offset: number;
  position: FloatingPosition;
}

export function useFloatingTooltip<T extends HTMLElement = any>({
  offset,
  position,
}: UseFloatingTooltip) {
  const [opened, setOpened] = useState(false);
  const boundaryRef = useRef<T>();
  const { x, y, reference, floating, refs, update, placement } = useFloating({
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
      reference({
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
    [reference]
  );

  useEffect(() => {
    if (refs.floating.current) {
      const boundary = boundaryRef.current;
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
  }, [reference, refs.floating.current, update, handleMouseMove, opened]);

  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating };
}
