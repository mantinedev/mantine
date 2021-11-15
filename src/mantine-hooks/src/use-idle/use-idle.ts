import { useState, useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll'];
const DEFAULT_OPTIONS = {
  events: DEFAULT_EVENTS,
  initialState: true,
};

export function useIdle(
  timeout: number,
  options?: Partial<{ events: string[]; initialState: boolean }>
) {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options };
  const [idle, setIdle] = useState<boolean>(initialState);
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
