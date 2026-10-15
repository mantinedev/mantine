import { useCallback, useEffect, useRef } from 'react';
import { useFullscreenDocument } from '@mantine/hooks';

function exitDocumentFullscreen() {
  const _document = document as any;
  const exit =
    _document.exitFullscreen ||
    _document.msExitFullscreen ||
    _document.webkitExitFullscreen ||
    _document.mozCancelFullScreen;

  if (typeof exit === 'function') {
    Promise.resolve(exit.call(_document)).catch(() => {});
  }
}

export function useLightboxFullscreen() {
  const { toggle, fullscreen: isFullscreen } = useFullscreenDocument();
  const fullscreenRequestedRef = useRef(false);
  const ownsFullscreenRef = useRef(false);
  const pendingFullscreenRef = useRef<Promise<void> | null>(null);
  const exitOnSettleRef = useRef(false);

  const toggleFullscreen = useCallback(() => {
    fullscreenRequestedRef.current = !isFullscreen;
    if (isFullscreen) {
      ownsFullscreenRef.current = false;
    }

    const request = toggle()
      .then(() => {
        if (pendingFullscreenRef.current === request && exitOnSettleRef.current) {
          exitOnSettleRef.current = false;
          exitDocumentFullscreen();
        }
      })
      .catch(() => {
        fullscreenRequestedRef.current = false;
        exitOnSettleRef.current = false;
      })
      .finally(() => {
        if (pendingFullscreenRef.current === request) {
          pendingFullscreenRef.current = null;
        }
      });

    pendingFullscreenRef.current = request;
  }, [toggle, isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) {
      fullscreenRequestedRef.current = false;
      ownsFullscreenRef.current = false;
    } else if (fullscreenRequestedRef.current) {
      fullscreenRequestedRef.current = false;
      ownsFullscreenRef.current = true;
    }
  }, [isFullscreen]);

  const exitOwnedFullscreen = useCallback(() => {
    if (!ownsFullscreenRef.current && !fullscreenRequestedRef.current) {
      return;
    }

    if (pendingFullscreenRef.current !== null && fullscreenRequestedRef.current) {
      exitOnSettleRef.current = true;
    }

    fullscreenRequestedRef.current = false;
    ownsFullscreenRef.current = false;
    exitDocumentFullscreen();
  }, []);

  useEffect(() => exitOwnedFullscreen, [exitOwnedFullscreen]);

  return { isFullscreen, toggleFullscreen, exitOwnedFullscreen };
}
