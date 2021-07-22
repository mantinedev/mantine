import { useState, useEffect, useRef } from 'react';

export function useIdle(timeout: number) {
    const [idleStatus, setIdleStatus] = useState<boolean>(true);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        const events = ['keypress', 'mousemove', 'touchmove', 'click', 'scroll'];
        const handleEvents = () => {
          setIdleStatus(false);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => {
            setIdleStatus(true);
          }, timeout);
        };
        events.forEach((event) => document.addEventListener(event, handleEvents));
        return () => {
          events.forEach((event) =>
            document.removeEventListener(event, handleEvents)
          );
        };
      }, [timeout]);

    return idleStatus;
}
