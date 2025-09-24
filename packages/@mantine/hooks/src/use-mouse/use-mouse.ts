import { MouseEvent, useEffect, useRef, useState } from 'react';

export function useMouse<T extends HTMLElement = any>(
  options: { resetOnExit?: boolean } = { resetOnExit: false }
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef<T>(null);
  const ticking = useRef(false);

  const resetMousePosition = () => setPosition({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number | null = null;

    const setMousePosition = (event: MouseEvent<HTMLElement>) => {
      if (!ticking.current) {
        ticking.current = true;
        rafId = window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.round(event.pageX - rect.left - window.scrollX));
            const y = Math.max(0, Math.round(event.pageY - rect.top - window.scrollY));

            setPosition({ x, y });
          } else {
            setPosition({ x: event.clientX, y: event.clientY });
          }

          ticking.current = false;
        });
      }
    };

    const element = ref.current ? ref.current : document;
    element.addEventListener('mousemove', setMousePosition as any);
    if (options.resetOnExit) {
      element.addEventListener('mouseleave', resetMousePosition);
    }

    return () => {
      element.removeEventListener('mousemove', setMousePosition as any);
      if (options.resetOnExit) {
        element.removeEventListener('mouseleave', resetMousePosition);
      }

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [ref.current]);

  return { ref, ...position };
}
