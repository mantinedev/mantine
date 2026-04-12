import { useEffect } from 'react';

interface UseLightboxKeyboardInput {
  opened: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen?: () => void;
  onToggleThumbnails?: () => void;
  onToggleZoom?: () => void;
}

export function useLightboxKeyboard({
  opened,
  onClose,
  onNext,
  onPrev,
  onToggleFullscreen,
  onToggleThumbnails,
  onToggleZoom,
}: UseLightboxKeyboardInput) {
  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const handler = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          onToggleFullscreen?.();
          break;
        case 't':
        case 'T':
          event.preventDefault();
          onToggleThumbnails?.();
          break;
        case 'z':
        case 'Z':
          event.preventDefault();
          onToggleZoom?.();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [opened, onClose, onNext, onPrev, onToggleFullscreen, onToggleThumbnails, onToggleZoom]);
}
