import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

export function useMouse<T extends HTMLElement = any>() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef<T>();

  const setMousePosition = (event: MouseEvent<HTMLElement>) => {
    if (ref.current) {
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

  useEffect(() => {
    const element = ref?.current ? ref.current : document;
    element.addEventListener('mousemove', setMousePosition as any);

    return () => element.removeEventListener('mousemove', setMousePosition as any);
  }, [ref.current]);

  return { ref, ...position };
}
