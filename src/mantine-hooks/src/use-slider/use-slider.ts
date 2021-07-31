/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState, useRef } from 'react';

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

export interface Options {
  onScrub: (value: number) => void;
  onScrubStart: () => void;
  onScrubStop: (value: number) => void;
  reverse: boolean;
  styles: boolean | React.CSSProperties;
  vertical?: boolean;
}

export function useSlider(ref: React.RefObject<HTMLElement>, options: Partial<Options> = {}) {
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
    const styles = options.styles === undefined ? true : options.styles;
    const reverse = options.reverse === undefined ? false : options.reverse;

    if (ref.current && styles) {
      // eslint-disable-next-line no-param-reassign
      ref.current.style.userSelect = 'none';
    }

    const onScrub = (clientXY: number) => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (mounted.current && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const pos = options.vertical ? rect.top : rect.left;
          const length = options.vertical ? rect.height : rect.width;

          // Prevent returning 0 when element is hidden by CSS
          if (!length) {
            return;
          }

          let val = (clientXY - pos) / length;

          if (val > 1) {
            val = 1;
          } else if (val < 0) {
            val = 0;
          }

          if (reverse) {
            val = 1 - val;
          }
          setValue(val);

          (options.onScrub || noop)(val);
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
        (options.onScrubStart || noop)();
        isSliding.current = true;
        setSliding(true);
        bindEvents();
      }
    };

    const stopScrubbing = () => {
      if (isSliding.current && mounted.current) {
        (options.onScrubStop || noop)(valueRef.current);
        isSliding.current = false;
        setSliding(false);
        unbindEvents();
      }
    };

    const onMouseDown = (event: MouseEvent) => {
      startScrubbing();
      onMouseMove(event);
    };

    const onMouseMove = options.vertical
      ? (event: MouseEvent) => onScrub(event.clientY)
      : (event: MouseEvent) => onScrub(event.clientX);

    const onTouchStart = (event: TouchEvent) => {
      startScrubbing();
      onTouchMove(event);
    };

    const onTouchMove = options.vertical
      ? (event: TouchEvent) => onScrub(event.changedTouches[0].clientY)
      : (event: TouchEvent) => onScrub(event.changedTouches[0].clientX);

    on(ref.current, 'mousedown', onMouseDown);
    on(ref.current, 'touchstart', onTouchStart);

    return () => {
      off(ref.current, 'mousedown', onMouseDown);
      off(ref.current, 'touchstart', onTouchStart);
    };
  }, [ref, options.vertical]);

  return { sliding, value };
}
