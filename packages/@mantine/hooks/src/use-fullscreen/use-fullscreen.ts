import { useCallback, useEffect, useRef, useState } from 'react';

function getFullscreenElement(): HTMLElement | null {
  const _document = window.document as any;

  const fullscreenElement =
    _document.fullscreenElement ||
    _document.webkitFullscreenElement ||
    _document.mozFullScreenElement ||
    _document.msFullscreenElement;

  return fullscreenElement;
}

function exitFullscreen() {
  const _document = window.document as any;

  if (typeof _document.exitFullscreen === 'function') {
    return _document.exitFullscreen();
  }
  if (typeof _document.msExitFullscreen === 'function') {
    return _document.msExitFullscreen();
  }
  if (typeof _document.webkitExitFullscreen === 'function') {
    return _document.webkitExitFullscreen();
  }
  if (typeof _document.mozCancelFullScreen === 'function') {
    return _document.mozCancelFullScreen();
  }

  return null;
}

function enterFullScreen(element: HTMLElement) {
  const _element = element as any;

  return (
    _element.requestFullscreen?.() ||
    _element.msRequestFullscreen?.() ||
    _element.webkitEnterFullscreen?.() ||
    _element.webkitRequestFullscreen?.() ||
    _element.mozRequestFullscreen?.()
  );
}

const prefixes = ['', 'webkit', 'moz', 'ms'];

interface FullscreenEvents {
  onFullScreen: (event: Event) => void;
  onError: (event: Event) => void;
}

function addEvents(element: HTMLElement, { onFullScreen, onError }: FullscreenEvents) {
  prefixes.forEach((prefix) => {
    element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);
    element.addEventListener(`${prefix}fullscreenerror`, onError);
  });
}

function removeEvents(element: HTMLElement, { onFullScreen, onError }: FullscreenEvents) {
  prefixes.forEach((prefix) => {
    element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);
    element.removeEventListener(`${prefix}fullscreenerror`, onError);
  });
}

export interface UseFullscreenElementReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

export function useFullscreenElement<
  T extends HTMLElement = any,
>(): UseFullscreenElementReturnValue<T> {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const refElement = useRef<T | null>(null);
  const prevNodeRef = useRef<T | null>(null);

  const handleFullscreenChange = useCallback(() => {
    setFullscreen(refElement.current === getFullscreenElement());
  }, []);

  const handleFullscreenError = useCallback(() => {
    setFullscreen(false);
  }, []);

  const toggle = useCallback(async () => {
    if (!getFullscreenElement() && refElement.current) {
      await enterFullScreen(refElement.current);
    } else {
      await exitFullscreen();
    }
  }, []);

  const refCallback: React.RefCallback<T | null> = useCallback((node) => {
    if (prevNodeRef.current && prevNodeRef.current !== node) {
      removeEvents(prevNodeRef.current, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError,
      });
    }

    if (node) {
      addEvents(node, {
        onFullScreen: handleFullscreenChange,
        onError: handleFullscreenError,
      });
    }

    refElement.current = node;
    prevNodeRef.current = node;
  }, []);

  return { ref: refCallback, toggle, fullscreen };
}

export interface UseFullscreenDocumentReturnValue {
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

export function useFullscreenDocument(): UseFullscreenDocumentReturnValue {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const handleFullscreenChange = useCallback(() => {
    setFullscreen(getFullscreenElement() === window.document.documentElement);
  }, []);

  const handleFullscreenError = useCallback(() => {
    setFullscreen(false);
  }, []);

  const toggle = useCallback(async () => {
    if (!getFullscreenElement()) {
      await enterFullScreen(window.document.documentElement);
    } else {
      await exitFullscreen();
    }
  }, []);

  useEffect(() => {
    return addEvents(window.document.documentElement, {
      onFullScreen: handleFullscreenChange,
      onError: handleFullscreenError,
    });
  }, []);

  return { toggle, fullscreen };
}
