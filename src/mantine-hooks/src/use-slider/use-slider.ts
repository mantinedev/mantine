/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState, useRef } from 'react';
import { clamp } from '../utils';

export function useSlider<T extends HTMLElement = HTMLDivElement>(
  onChange: (value: number) => void
) {
  const ref = useRef<T>();
  const mounted = useRef<boolean>(false);
  const isSliding = useRef(false);
  const frame = useRef(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  useEffect(() => {
    const onScrub = (clientX: number) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          ref.current.style.userSelect = 'none';
          const rect = ref.current.getBoundingClientRect();

          if (rect.width) {
            const val = clamp({ value: (clientX - rect.left) / rect.width, min: 0, max: 1 });
            onChange(val);
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
        setSliding(true);
        bindEvents();
      }
    };

    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        isSliding.current = false;
        setSliding(false);
        unbindEvents();
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      startScrubbing();
      onMouseMove(event);
    };

    const onMouseMove = (event: MouseEvent) => onScrub(event.clientX);

    const onTouchStart = (event: TouchEvent) => {
      startScrubbing();
      onTouchMove(event);
    };

    const onTouchMove = (event: TouchEvent) => onScrub(event.changedTouches[0].clientX);

    ref.current.addEventListener('mousedown', onMouseDown);
    ref.current.addEventListener('touchstart', onTouchStart);

    return () => {
      ref.current.removeEventListener('mousedown', onMouseDown);
      ref.current.removeEventListener('touchstart', onTouchStart);
    };
  }, [ref]);

  return { ref, sliding };
}
