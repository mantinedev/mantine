import React, { useEffect, useRef } from 'react';

interface Options {
  timeout?: number;
  type?: 'mouse' | 'touch' | 'both';
}

const defaultOptions: Options = {
  timeout: 400,
  type: 'both',
};
export function useLongPress<Elm extends HTMLElement>(
  cb: () => void,
  options: Options = defaultOptions
): React.Ref<Elm> {
  const ref = useRef<Elm>(null);
  const timerRef = useRef(null);
  const isLongPress = useRef(false);
  const { timeout, type } = options;

  function startTimer() {
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      cb();
    }, timeout);
  }

  function handleMouseDown() {
    startTimer();
  }
  function handleMouseUp() {
    clearTimeout(timerRef.current);
  }
  function handleTouchStart() {
    startTimer();
  }
  function handleTouchEnd() {
    clearTimeout(timerRef.current);
  }

  const bindEvents = () => {
    if (type !== 'touch') {
      ref.current.addEventListener('mousedown', handleMouseDown);
      ref.current.addEventListener('mouseup', handleMouseUp);
    }
    if (type !== 'mouse') {
      ref.current.addEventListener('touchstart', handleTouchStart);
      ref.current.addEventListener('touchend', handleTouchEnd);
    }
  };
  const unbindEvents = () => {
    if (type !== 'touch') {
      ref.current?.removeEventListener('mousedown', handleMouseDown);
      ref.current?.removeEventListener('mouseup', handleMouseUp);
    }
    if (type !== 'mouse') {
      ref.current?.removeEventListener('touchstart', handleTouchStart);
      ref.current?.removeEventListener('touchend', handleTouchEnd);
    }
  };

  useEffect(() => {
    if (ref.current) {
      bindEvents();
      return () => unbindEvents();
    }
    return undefined;
  }, [cb, options]);

  return ref;
}
