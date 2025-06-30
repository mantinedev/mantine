import { useCallback, useEffect, useState } from 'react';

export interface UseMouseReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  x: number;
  y: number;
}

export function useMouse<T extends HTMLElement = any>(
  options: { resetOnExit?: boolean } = { resetOnExit: false }
): UseMouseReturnValue<T> {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const refCallback: React.RefCallback<T | null> = useCallback(
    (node) => {
      const setMousePosition = (event: Event) => {
        const mouseEvent = event as globalThis.MouseEvent;
        if (node) {
          const rect = node.getBoundingClientRect();

          const x = Math.max(
            0,
            Math.round(mouseEvent.pageX - rect.left - (window.scrollX || window.scrollX))
          );

          const y = Math.max(
            0,
            Math.round(mouseEvent.pageY - rect.top - (window.scrollY || window.scrollY))
          );

          setPosition({ x, y });
        } else {
          setPosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
        }
      };

      const resetMousePosition = () => setPosition({ x: 0, y: 0 });

      node?.addEventListener('mousemove', setMousePosition);
      if (options.resetOnExit) {
        node?.addEventListener('mouseleave', resetMousePosition);
      }

      return () => {
        node?.removeEventListener('mousemove', setMousePosition);
        if (options.resetOnExit) {
          node?.removeEventListener('mouseleave', resetMousePosition);
        }
      };
    },
    [options.resetOnExit]
  );

  return { ref: refCallback, ...position };
}

export interface UseMousePositionReturnValue {
  x: number;
  y: number;
}

export function useMousePosition(): UseMousePositionReturnValue {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setMousePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', setMousePosition);

    return () => {
      document.removeEventListener('mousemove', setMousePosition);
    };
  }, []);

  return position;
}
