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

  const _ref = useRef<T>();

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
      console.error(
        `[@mantine/hooks] use-fullscreen: Error attempting full-screen mode method: ${event} (${event.target})`
      );
    },
    [setFullscreen]
  );

  const toggle = useCallback(async () => {
    if (!getFullscreenElement()) {
      await _ref.current.requestFullscreen();
    } else {
      await exitFullscreen();
    }
  }, []);

  const ref = useCallback((element: T | null) => {
    if (_ref.current) {
      _ref.current.removeEventListener('fullscreenchange', handleFullscreenChange);
      _ref.current.removeEventListener('fullscreenerror', handleFullscreenError);
      _ref.current = null;
    }

    if (element === null) {
      _ref.current = window.document.documentElement as T;
    } else {
      _ref.current = element;
    }

    _ref.current.addEventListener('fullscreenchange', handleFullscreenChange);
    _ref.current.addEventListener('fullscreenerror', handleFullscreenError);
  }, []);

  useEffect(() => {
    if (!_ref.current && window.document) {
      _ref.current = window.document.documentElement as T;
      _ref.current.addEventListener('fullscreenchange', handleFullscreenChange);
      _ref.current.addEventListener('fullscreenerror', handleFullscreenError);
    }
  }, []);

  return { ref, toggle, fullscreen } as const;
}
