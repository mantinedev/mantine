import { useEffect } from 'react';

interface UseLightboxKeyboardInput {
  opened: boolean;
  enabled: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen?: () => void;
  onToggleThumbnails?: () => void;
  onToggleZoom?: () => void;
  onZoomPan?: (deltaX: number, deltaY: number) => boolean;
}

const INTERACTIVE_ELEMENTS_SELECTOR =
  'input, textarea, select, video, audio, [contenteditable]:not([contenteditable="false"])';

const ZOOM_PAN_STEP = 50;

export function useLightboxKeyboard({
  opened,
  enabled,
  onClose,
  onNext,
  onPrev,
  onToggleFullscreen,
  onToggleThumbnails,
  onToggleZoom,
  onZoomPan,
}: UseLightboxKeyboardInput) {
  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const handler = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (!enabled || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (event.target instanceof Element && event.target.closest(INTERACTIVE_ELEMENTS_SELECTOR)) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (!onZoomPan?.(ZOOM_PAN_STEP, 0)) {
            onPrev();
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (!onZoomPan?.(-ZOOM_PAN_STEP, 0)) {
            onNext();
          }
          break;
        case 'ArrowUp':
          if (onZoomPan?.(0, ZOOM_PAN_STEP)) {
            event.preventDefault();
          }
          break;
        case 'ArrowDown':
          if (onZoomPan?.(0, -ZOOM_PAN_STEP)) {
            event.preventDefault();
          }
          break;
        case 'f':
        case 'F':
          if (onToggleFullscreen) {
            event.preventDefault();
            onToggleFullscreen();
          }
          break;
        case 't':
        case 'T':
          if (onToggleThumbnails) {
            event.preventDefault();
            onToggleThumbnails();
          }
          break;
        case 'z':
        case 'Z':
          if (onToggleZoom) {
            event.preventDefault();
            onToggleZoom();
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [
    opened,
    enabled,
    onClose,
    onNext,
    onPrev,
    onToggleFullscreen,
    onToggleThumbnails,
    onToggleZoom,
    onZoomPan,
  ]);
}
