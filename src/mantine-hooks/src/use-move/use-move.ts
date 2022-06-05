/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState, useRef } from 'react';
import { clamp } from '../utils';

export interface UseMovePosition {
  x: number;
  y: number;
}

export const clampUseMovePosition = (position: UseMovePosition) => ({
  x: clamp({ min: 0, max: 1, value: position.x }),
  y: clamp({ min: 0, max: 1, value: position.y }),
});

interface useMoveHandlers {
  onScrubStart?(): void;
  onScrubEnd?(): void;
}

export function useMove<T extends HTMLElement = HTMLDivElement>(
  onChange: (value: UseMovePosition) => void,
  handlers?: useMoveHandlers,
  dir: 'ltr' | 'rtl' = 'ltr'
) {
  const ref = useRef<T>();
  const mounted = useRef<boolean>(false);
  const isSliding = useRef(false);
  const frame = useRef(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  useEffect(() => {
    const onScrub = ({ x, y }: UseMovePosition) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          ref.current.style.userSelect = 'none';
          const rect = ref.current.getBoundingClientRect();

          if (rect.width && rect.height) {
            const _x = clamp({ value: (x - rect.left) / rect.width, min: 0, max: 1 });
            onChange({
              x: dir === 'ltr' ? _x : 1 - _x,
              y: clamp({ value: (y - rect.top) / rect.height, min: 0, max: 1 }),
            });
          }
        }
      });
    };

    const bindEvents = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', stopScrubbing);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', stopScrubbing);
    };

    const unbindEvents = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', stopScrubbing);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', stopScrubbing);
    };

    const startScrubbing = () => {
      if (!isSliding.current && mounted.current) {
        isSliding.current = true;
        typeof handlers?.onScrubStart === 'function' && handlers.onScrubStart();
        setActive(true);
        bindEvents();
      }
    };

    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        isSliding.current = false;
        setActive(false);
        unbindEvents();
        setTimeout(() => {
          typeof handlers?.onScrubEnd === 'function' && handlers.onScrubEnd();
        }, 0);
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      startScrubbing();
      onMouseMove(event);
    };

    const onMouseMove = (event: MouseEvent) => onScrub({ x: event.clientX, y: event.clientY });

    const onTouchStart = (event: TouchEvent) => {
      startScrubbing();
      event?.preventDefault();
      onTouchMove(event);
    };

    const onTouchMove = (event: TouchEvent) => {
      event?.preventDefault();
      onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    };

    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('touchstart', onTouchStart, { passive: false });

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousedown', onMouseDown);
        ref.current.removeEventListener('touchstart', onTouchStart);
      }
    };
  }, [dir, onChange]);

  return { ref, active };
}
