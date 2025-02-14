import { type MouseEvent, useEffect, useState } from 'react';

export function useMouse<T extends HTMLElement = any>(
  options: { resetOnExit?: boolean } = { resetOnExit: false }
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [node, setNode] = useState<T | null>(null);

  const setMousePosition = (event: MouseEvent<HTMLElement>) => {
    if (node) {
      const rect = event.currentTarget.getBoundingClientRect();

      const x = Math.max(
        0,
        Math.round(event.pageX - rect.left - (window.pageXOffset || window.scrollX))
      );

      const y = Math.max(
        0,
        Math.round(event.pageY - rect.top - (window.pageYOffset || window.scrollY))
      );

      setPosition({ x, y });
    } else {
      setPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const resetMousePosition = () => setPosition({ x: 0, y: 0 });

  useEffect(() => {
    const element = node ?? document;

    element.addEventListener('mousemove', setMousePosition as any);
    if (options.resetOnExit) {
      element.addEventListener('mouseleave', resetMousePosition as any);
    }

    return () => {
      element.removeEventListener('mousemove', setMousePosition as any);
      if (options.resetOnExit) {
        element.removeEventListener('mouseleave', resetMousePosition as any);
      }
    };
  }, [node]);

  return { ref: setNode, ...position };
}
