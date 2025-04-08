import { useCallback, useRef, useState, type RefCallback } from 'react';
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

interface useMoveHandlers {
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
}

export function useMove<T extends HTMLElement = any>(
  onChange: (value: UseMovePosition) => void,
  handlers?: useMoveHandlers,
  dir: 'ltr' | 'rtl' = 'ltr'
) {
  const isSliding = useRef(false);
  const frame = useRef(0);
  const [active, setActive] = useState(false);

  const cleanupAbortControllerRef = useRef<AbortController>(null);

  const onRefChange: RefCallback<T> = useCallback(
    (node) => {
      const onScrub = ({ x, y }: UseMovePosition) => {
        cancelAnimationFrame(frame.current);

        frame.current = requestAnimationFrame(() => {
          if (!node) {
            return;
          }

          node.style.userSelect = 'none';
          const rect = node.getBoundingClientRect();

          if (rect.width && rect.height) {
            const _x = clamp((x - rect.left) / rect.width, 0, 1);
            onChange({
              x: dir === 'ltr' ? _x : 1 - _x,
              y: clamp((y - rect.top) / rect.height, 0, 1),
            });
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
        if (!isSliding.current) {
          isSliding.current = true;
          handlers?.onScrubStart?.();
          setActive(true);
          bindEvents();
        }
      };

      const stopScrubbing = () => {
        if (isSliding.current) {
          isSliding.current = false;
          setActive(false);
          unbindEvents();
          setTimeout(() => {
            handlers?.onScrubEnd?.();
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

      cleanupAbortControllerRef.current?.abort();

      const controller = new AbortController();
      const { signal } = controller;

      node?.addEventListener('mousedown', onMouseDown, { signal });
      node?.addEventListener('touchstart', onTouchStart, { signal, passive: false });

      cleanupAbortControllerRef.current = controller;
    },
    [dir, onChange]
  );

  return { ref: onRefChange, active };
}
