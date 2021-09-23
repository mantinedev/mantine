import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

export function useMouse<T extends HTMLElement = any>(): {
  readonly x: number;
  readonly y: number;
  ref: React.MutableRefObject<T>;
} {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef<T>();

  const setMousePosition = (event: MouseEvent<HTMLElement>) => {
    if (ref.current) {
      const rect = event.currentTarget.getBoundingClientRect();

      const x = event.pageX - rect.left - (window.pageXOffset || window.scrollX);
      const y = event.pageY - rect.top - (window.pageYOffset || window.scrollY);

      setPosition({ x, y });
    } else {
      setPosition({ x: event.clientX, y: event.clientY });
    }
  };

  useEffect(() => {
    const element = ref?.current ? ref.current : document;

    // @ts-ignore ts doesn't respect MouseEvent<HTMLElement> type
    element.addEventListener('mousemove', setMousePosition);

    // @ts-ignore
    return (): void => element.removeEventListener('mousemove', setMousePosition);
  }, [ref.current]);

  return { ref, ...position };
}
