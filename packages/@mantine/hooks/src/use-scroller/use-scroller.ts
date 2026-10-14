import { RefCallback, useCallback, useEffect, useRef, useState } from 'react';
import { useCallbackRef } from '../utils';

export interface UseScrollerOptions {
  /** Amount of pixels to scroll when calling scroll functions, `200` by default */
  scrollAmount?: number;

  /** Determines whether content can be scrolled by dragging with mouse, `true` by default */
  draggable?: boolean;

  /** Called when `canScrollStart` or `canScrollEnd` changes */
  onScrollStateChange?: (state: UseScrollerScrollState) => void;
}

export interface UseScrollerScrollState {
  /** Whether content can be scrolled towards the start (left in LTR, right in RTL) */
  canScrollStart: boolean;

  /** Whether content can be scrolled towards the end (right in LTR, left in RTL) */
  canScrollEnd: boolean;
}

export interface UseScrollerReturnValue<T extends HTMLElement = HTMLDivElement> {
  /** Ref callback to attach to the scrollable container element */
  ref: RefCallback<T | null>;

  /** Whether content can be scrolled towards the start */
  canScrollStart: boolean;

  /** Whether content can be scrolled towards the end */
  canScrollEnd: boolean;

  /** Scrolls towards the start direction */
  scrollStart: () => void;

  /** Scrolls towards the end direction */
  scrollEnd: () => void;

  /** `true` while the user drags the content, use it to style the container (for example, `cursor: grabbing`) */
  isDragging: boolean;

  /** Props to spread on the scrollable container for drag functionality */
  dragHandlers: {
    onMouseDown: (e: React.MouseEvent) => void;
  };
}

function isRtl(element: HTMLElement) {
  return getComputedStyle(element).direction === 'rtl';
}

export function useScroller<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollerOptions = {}
): UseScrollerReturnValue<T> {
  const { scrollAmount = 200, draggable = true, onScrollStateChange } = options;

  const latestElementRef = useRef<T | null>(null);
  const [element, setElement] = useState<T | null>(null);

  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const lastStateRef = useRef<UseScrollerScrollState>({
    canScrollStart: false,
    canScrollEnd: false,
  });
  const stopDragRef = useRef<(() => void) | null>(null);

  const handleScrollStateChange = useCallbackRef(onScrollStateChange);

  const updateScrollState = useCallback(() => {
    const container = latestElementRef.current;
    if (!container) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;

    const nextState: UseScrollerScrollState = isRtl(container)
      ? {
          canScrollStart: scrollLeft < -1,
          canScrollEnd: scrollLeft > -(scrollWidth - clientWidth) + 1,
        }
      : {
          canScrollStart: scrollLeft > 1,
          canScrollEnd: scrollLeft < scrollWidth - clientWidth - 1,
        };

    setCanScrollStart(nextState.canScrollStart);
    setCanScrollEnd(nextState.canScrollEnd);

    const lastState = lastStateRef.current;
    if (
      lastState.canScrollStart !== nextState.canScrollStart ||
      lastState.canScrollEnd !== nextState.canScrollEnd
    ) {
      lastStateRef.current = nextState;
      handleScrollStateChange(nextState);
    }
  }, []);

  useEffect(() => {
    if (!element) {
      return undefined;
    }

    updateScrollState();
    element.addEventListener('scroll', updateScrollState);

    const resizeObserver = new ResizeObserver(updateScrollState);
    const observeChildren = () => {
      resizeObserver.observe(element);
      Array.from(element.children).forEach((child) => resizeObserver.observe(child));
    };
    observeChildren();

    const mutationObserver = new MutationObserver(() => {
      resizeObserver.disconnect();
      observeChildren();
      updateScrollState();
    });
    mutationObserver.observe(element, { childList: true, subtree: true });

    return () => {
      element.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      stopDragRef.current?.();
    };
  }, [element, updateScrollState]);

  const scroll = useCallback(
    (direction: 'start' | 'end') => {
      const container = latestElementRef.current;
      if (container) {
        const scrollBy = direction === 'end' ? scrollAmount : -scrollAmount;
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        container.scrollBy({
          left: isRtl(container) ? -scrollBy : scrollBy,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      }
    },
    [scrollAmount]
  );

  const scrollStart = useCallback(() => scroll('start'), [scroll]);
  const scrollEnd = useCallback(() => scroll('end'), [scroll]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      const container = latestElementRef.current;
      if (!draggable || event.button !== 0 || !container) {
        return;
      }

      stopDragRef.current?.();

      const pressTarget = event.target as Node;
      const startX = event.clientX;
      const scrollLeftStart = container.scrollLeft;
      let hasDragged = false;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if ((moveEvent.buttons & 1) === 0) {
          stopDrag();
          return;
        }

        const walk = moveEvent.clientX - startX;
        if (Math.abs(walk) > 5) {
          hasDragged = true;
        }
        moveEvent.preventDefault();
        container.scrollLeft = scrollLeftStart - walk;
      };

      const preventSelection = (selectEvent: Event) => selectEvent.preventDefault();

      const handleDragStart = (dragEvent: DragEvent) => {
        if (dragEvent.target instanceof Node && dragEvent.target.contains(pressTarget)) {
          stopDrag();
        } else {
          dragEvent.preventDefault();
        }
      };

      const stopDrag = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('selectstart', preventSelection);
        container.removeEventListener('dragstart', handleDragStart);
        window.removeEventListener('blur', stopDrag);
        stopDragRef.current = null;
        setIsDragging(false);
      };

      const handleMouseUp = () => {
        stopDrag();

        if (hasDragged) {
          const suppressClick = (clickEvent: MouseEvent) => {
            clickEvent.stopPropagation();
            clickEvent.preventDefault();
          };
          window.addEventListener('click', suppressClick, true);
          setTimeout(() => window.removeEventListener('click', suppressClick, true), 0);
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('selectstart', preventSelection);
      container.addEventListener('dragstart', handleDragStart);
      window.addEventListener('blur', stopDrag);
      stopDragRef.current = stopDrag;
      setIsDragging(true);
    },
    [draggable]
  );

  const assignRef: RefCallback<T | null> = useCallback((node) => {
    latestElementRef.current = node;
    setElement(node);
  }, []);

  return {
    ref: assignRef,
    canScrollStart,
    canScrollEnd,
    scrollStart,
    scrollEnd,
    isDragging,
    dragHandlers: {
      onMouseDown: handleMouseDown,
    },
  };
}

export namespace useScroller {
  export type Options = UseScrollerOptions;
  export type ReturnValue<T extends HTMLElement = HTMLDivElement> = UseScrollerReturnValue<T>;
  export type ScrollState = UseScrollerScrollState;
}
