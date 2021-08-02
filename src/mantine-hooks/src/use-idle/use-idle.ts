import { useState, useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll'];

export function useIdle(timeout: number, events: string[] = DEFAULT_EVENTS) {
  const [idle, setIdle] = useState<boolean>(true);
  const timer = useRef<number>();

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

    return () => {
      events.forEach((event) => document.removeEventListener(event, handleEvents));
    };
  }, [timeout]);

  return idle;
}
