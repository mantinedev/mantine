import { useEffect, useRef, useState } from 'react';

export interface UseIdleOptions {
  events?: (keyof DocumentEventMap)[];
  initialState?: boolean;
}

const DEFAULT_OPTIONS: Required<UseIdleOptions> = {
  events: ['keydown', 'mousemove', 'touchmove', 'click', 'scroll', 'wheel'],
  initialState: true,
};

export function useIdle(timeout: number, options?: UseIdleOptions) {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options };
  const [idle, setIdle] = useState(initialState);
  const timer = useRef(-1);

  useEffect(() => {
    const handleEvents = () => {
      setIdle(false);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };

    events.forEach((event) => document.addEventListener(event, handleEvents));

    // Start the timer immediately instead of waiting for the first event to happen
    timer.current = window.setTimeout(() => {
      setIdle(true);
    }, timeout);

    return () => {
      events.forEach((event) => document.removeEventListener(event, handleEvents));
      window.clearTimeout(timer.current);
      timer.current = -1;
    };
  }, [timeout]);

  return idle;
}

export namespace useIdle {
  export type Options = UseIdleOptions;
}
