/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState, useRef } from 'react';

const noop = () => {};

function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
}

function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
}

interface UseSliderOptions {
  value: number;
  onChange(value: number): void;
}

export function useSlider<T extends HTMLElement = HTMLDivElement>(options: UseSliderOptions) {
  const ref = useRef<T>();
  const mounted = useRef<boolean>(false);
  const isSliding = useRef(false);
  const valueRef = useRef(0);
  const frame = useRef(0);
  const [value, setValue] = useState(0);
  const [sliding, setSliding] = useState(false);

  valueRef.current = value;

  useEffect(() => {
    mounted.current = true;
  }, []);

  useEffect(() => {
    const styles = true;
    const reverse = false;

    if (ref.current && styles) {
      // eslint-disable-next-line no-param-reassign
      ref.current.style.userSelect = 'none';
    }

    const onScrub = (clientXY: number) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          const rect = ref.current.getBoundingClientRect();

          if (!rect.width) {
            return;
          }

          let val = (clientXY - rect.left) / rect.width;

          if (val > 1) {
            val = 1;
          } else if (val < 0) {
            val = 0;
          }

          if (reverse) {
            val = 1 - val;
          }
          setValue(val);

          (options.onChange || noop)(val);
        }
      });
    };

    const bindEvents = () => {
      on(document, 'mousemove', onMouseMove);
      on(document, 'mouseup', stopScrubbing);

      on(document, 'touchmove', onTouchMove);
      on(document, 'touchend', stopScrubbing);
    };

    const unbindEvents = () => {
      off(document, 'mousemove', onMouseMove);
      off(document, 'mouseup', stopScrubbing);

      off(document, 'touchmove', onTouchMove);
      off(document, 'touchend', stopScrubbing);
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

    on(ref.current, 'mousedown', onMouseDown);
    on(ref.current, 'touchstart', onTouchStart);

    return () => {
      off(ref.current, 'mousedown', onMouseDown);
      off(ref.current, 'touchstart', onTouchStart);
    };
  }, [ref]);

  return { ref, sliding };
}
