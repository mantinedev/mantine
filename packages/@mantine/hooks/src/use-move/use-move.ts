import { useCallback, useEffect, useRef, useState } from 'react';
import { clamp } from '../utils';

export interface UseMovePosition {
  x: number;
  y: number;
}

export function clampUseMovePosition(position: UseMovePosition) {
  return {
    x: clamp(position.x, 0, 1),
    y: clamp(position.y, 0, 1),
  };
}

export interface UseMoveHandlers {
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
}

export interface UseMoveReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  active: boolean;
}

export function useMove<T extends HTMLElement = any>(
  onChange: (value: UseMovePosition) => void,
  handlers?: UseMoveHandlers,
  dir: 'ltr' | 'rtl' = 'ltr'
): UseMoveReturnValue<T> {
  const mounted = useRef<boolean>(false);
  const isSliding = useRef(false);
  const frame = useRef(0);
  const [active, setActive] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const refCallback: React.RefCallback<T | null> = useCallback(
    (node) => {
      // Clean up previous node if it exists
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      if (!node) {
        return;
      }

      const onScrub = ({ x, y }: UseMovePosition) => {
        cancelAnimationFrame(frame.current);

        frame.current = requestAnimationFrame(() => {
          if (mounted.current && node) {
            node.style.userSelect = 'none';
            const rect = node.getBoundingClientRect();

            if (rect.width && rect.height) {
              const _x = clamp((x - rect.left) / rect.width, 0, 1);
              onChange({
                x: dir === 'ltr' ? _x : 1 - _x,
                y: clamp((y - rect.top) / rect.height, 0, 1),
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
        event.preventDefault();
        onMouseMove(event);
      };

      const onMouseMove = (event: MouseEvent) => onScrub({ x: event.clientX, y: event.clientY });

      const onTouchStart = (event: TouchEvent) => {
        if (event.cancelable) {
          event.preventDefault();
        }

        startScrubbing();
        onTouchMove(event);
      };

      const onTouchMove = (event: TouchEvent) => {
        if (event.cancelable) {
          event.preventDefault();
        }

        onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
      };

      node.addEventListener('mousedown', onMouseDown);
      node.addEventListener('touchstart', onTouchStart, { passive: false });

      // Store cleanup function in ref instead of returning it
      cleanupRef.current = () => {
        node.removeEventListener('mousedown', onMouseDown);
        node.removeEventListener('touchstart', onTouchStart);
      };
    },
    [dir, onChange]
  );

  return { ref: refCallback, active };
}
