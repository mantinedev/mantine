import { useEffect, useRef } from 'react';

interface UseLightboxKeyboardInput {
  opened: boolean;
  enabled: boolean;
  /** Text direction of the lightbox, arrow keys follow it the same way the navigation buttons do */
  dir: 'ltr' | 'rtl';
  /** Lightbox content element, `Escape` coming from another layer inside or above it is left to that layer */
  contentRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleFullscreen?: () => void;
  onToggleThumbnails?: () => void;
  onToggleZoom?: () => void;
  onZoomPan?: (deltaX: number, deltaY: number) => boolean;
}

/** Elements that consume typing wherever they are, including the lightbox chrome */
const TEXT_ENTRY_SELECTOR =
  'input, textarea, select, video, audio, [contenteditable]:not([contenteditable="false"])';

/**
 * Elements that consume arrow keys and letter shortcuts only inside slide content – the
 * lightbox toolbar and navigation are buttons too, and keyboard shortcuts have to keep
 * working while one of them has focus.
 */
const SLIDE_WIDGET_SELECTOR = [
  'button',
  'a[href]',
  '[role="button"]',
  '[role="link"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="switch"]',
  '[role="tab"]',
  '[role="textbox"]',
  '[role="combobox"]',
  '[role="listbox"]',
  '[role="menu"]',
  '[role="menubar"]',
  '[role="tablist"]',
  '[role="tree"]',
  '[role="treeitem"]',
  '[role="grid"]',
  '[role="gridcell"]',
].join(', ');

const ESCAPE_LAYER_SELECTOR = '[data-mantine-stop-propagation="true"], [aria-modal="true"]';

const ZOOM_PAN_STEP = 50;

export function useLightboxKeyboard({
  opened,
  enabled,
  dir,
  contentRef,
  onClose,
  onNext,
  onPrev,
  onFirst,
  onLast,
  onToggleFullscreen,
  onToggleThumbnails,
  onToggleZoom,
  onZoomPan,
}: UseLightboxKeyboardInput) {
  const layeredEscapeEventRef = useRef<KeyboardEvent | null>(null);

  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const onLeadingArrow = dir === 'rtl' ? onNext : onPrev;
    const onTrailingArrow = dir === 'rtl' ? onPrev : onNext;

    const isInsideOtherLayer = (target: EventTarget | null) => {
      const layer = target instanceof Element ? target.closest(ESCAPE_LAYER_SELECTOR) : null;
      return !!layer && layer !== contentRef.current;
    };

    const captureHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isInsideOtherLayer(event.target)) {
        layeredEscapeEventRef.current = event;
      }
    };

    const handler = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Escape') {
        if (event === layeredEscapeEventRef.current || isInsideOtherLayer(event.target)) {
          return;
        }

        event.preventDefault();
        onClose();
        return;
      }

      if (!enabled || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (event.target instanceof Element) {
        if (event.target.closest(TEXT_ENTRY_SELECTOR)) {
          return;
        }

        if (
          event.target.closest('[data-lightbox-slide]') &&
          event.target.closest(SLIDE_WIDGET_SELECTOR)
        ) {
          return;
        }
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (!onZoomPan?.(ZOOM_PAN_STEP, 0)) {
            onLeadingArrow();
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (!onZoomPan?.(-ZOOM_PAN_STEP, 0)) {
            onTrailingArrow();
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
        case 'Home':
          event.preventDefault();
          onFirst();
          break;
        case 'End':
          event.preventDefault();
          onLast();
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

    window.addEventListener('keydown', captureHandler, true);
    document.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', captureHandler, true);
      document.removeEventListener('keydown', handler);
    };
  }, [
    opened,
    enabled,
    dir,
    contentRef,
    onClose,
    onNext,
    onPrev,
    onFirst,
    onLast,
    onToggleFullscreen,
    onToggleThumbnails,
    onToggleZoom,
    onZoomPan,
  ]);
}
