import { useEffect, useRef, useState } from 'react';

export function useMouse<T extends HTMLElement = any>(): {
  x: number;
  y: number;
  ref: React.MutableRefObject<T>;
} {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef<T>();

  const setMousePosition = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const element = ref?.current ? ref.current : document;

    element.addEventListener('mousemove', setMousePosition);

    return (): void => element.removeEventListener('mousemove', setMousePosition);
  }, [ref.current]);

  return { ref, ...position };
}
