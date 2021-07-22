import { useCallback, useRef, useState, useEffect } from 'react';

function getFullscreenElement(): HTMLElement | null {
  const _document = window.document as any;

  const fullscreenElement =
    _document.fullscreenElement ||
    _document.webkitFullscreenElement ||
    _document.mozFullScreenElement ||
    _document.msFullscreenElement;

  return fullscreenElement;
}

async function exitFullscreen() {
  const _document = window.document as any;

  if (typeof _document.exitFullscreen === 'function') return _document.exitFullscreen();
  if (typeof _document.msExitFullscreen === 'function') return _document.msExitFullscreen();
  if (typeof _document.webkitExitFullscreen === 'function') return _document.webkitExitFullscreen();
  if (typeof _document.mozCancelFullScreen === 'function') return _document.mozCancelFullScreen();

  return null;
}

export function useFullscreen<T extends HTMLElement = any>() {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const elementRef = useRef<T>();

  const handleFullscreenChange = useCallback(
    (event: Event) => {
      setFullscreen(event.target === getFullscreenElement());
    },
    [setFullscreen]
  );

  const handleFullscreenError = useCallback(
    (event: Event) => {
      setFullscreen(false);
      // eslint-disable-next-line no-console
      console.error(`Error attempting full-screen mode method: ${event} (${event.target})`);
    },
    [setFullscreen]
  );

  const toggle = useCallback(async () => {
    if (!getFullscreenElement()) {
      await elementRef.current.requestFullscreen();
    } else {
      await exitFullscreen();
    }
  }, []);

  const ref = useCallback((element: T | null) => {
    if (elementRef.current) {
      elementRef.current.removeEventListener('fullscreenchange', handleFullscreenChange);
      elementRef.current.removeEventListener('fullscreenerror', handleFullscreenError);
      elementRef.current = null;
    }

    if (element === null) {
      elementRef.current = window.document.documentElement as T;
    } else {
      elementRef.current = element;
    }

    elementRef.current.addEventListener('fullscreenchange', handleFullscreenChange);
    elementRef.current.addEventListener('fullscreenerror', handleFullscreenError);
  }, []);

  useEffect(() => {
    if (!elementRef.current && window.document) {
      elementRef.current = window.document.documentElement as T;
      elementRef.current.addEventListener('fullscreenchange', handleFullscreenChange);
      elementRef.current.addEventListener('fullscreenerror', handleFullscreenError);
    }
  }, []);

  return { ref, toggle, fullscreen } as const;
}
