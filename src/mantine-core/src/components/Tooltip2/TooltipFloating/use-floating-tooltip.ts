import { useState, useEffect, useCallback, useRef } from 'react';
import {
  useFloating,
  shift,
  getOverflowAncestors,
  flip,
} from '@floating-ui/react-dom-interactions';

export function useFloatingTooltip<T extends HTMLElement = any>() {
  const [opened, setOpened] = useState(false);
  const boundaryRef = useRef<T>();
  const { x, y, reference, floating, refs, update } = useFloating({
    placement: 'left',
    middleware: [
      flip(),
      shift({
        crossAxis: true,
        padding: 5,
        rootBoundary: 'document',
      }),
    ],
  });

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent | React.MouseEvent<T, MouseEvent>) => {
      reference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            top: clientY,
            right: clientX,
            bottom: clientY,
          };
        },
      });
    },
    [reference]
  );

  useEffect(() => {
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
  }, [reference, refs.floating, update, handleMouseMove]);

  return { handleMouseMove, x, y, opened, setOpened, boundaryRef, floating };
}
