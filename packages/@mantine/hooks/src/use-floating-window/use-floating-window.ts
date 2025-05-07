import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

function useRefValue<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

interface FloatingWindowPositionConfig {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface FloatingWindowPosition {
  /** Element offset from the left side of the viewport */
  x: number;

  /** Element offset from the top side of the viewport */
  y: number;
}

export interface UseFloatingWindowOptions {
  /** If `false`, the element can not be dragged. */
  enabled?: boolean;

  /** If `true`, the element can only move within the current viewport boundaries. */
  constrainToViewport?: boolean;

  /** The offset from the viewport edges when constraining the element. Requires `constrainToViewport: true`. */
  constrainOffset?: number;

  /** Selector of an element that should be used to drag floating window. If not specified, the entire root element is used as a drag target. */
  dragHandleSelector?: string;

  /** Selector of an element within `dragHandleSelector` that should be excluded from the drag event. */
  excludeDragHandleSelector?: string;

  /** If set, restricts movement to the specified axis */
  axis?: 'x' | 'y';

  /** Initial position. If not set, calculated from element styles. */
  initialPosition?: FloatingWindowPositionConfig;

  /** Called when the element position changes */
  onPositionChange?: (pos: FloatingWindowPosition) => void;

  /** Called when the drag starts */
  onDragStart?: () => void;

  /** Called when the drag stops */
  onDragEnd?: () => void;
}

export type SetFloatingWindowPosition = (position: FloatingWindowPositionConfig) => void;

export interface UseFloatingWindowReturnValue<T extends HTMLElement> {
  /** Ref to the element that should be draggable */
  ref: RefObject<T>;

  /** Function to set the position of the element */
  setPosition: SetFloatingWindowPosition;

  /** `true` if the element is currently being dragged */
  isDragging: boolean;
}

export function useFloatingWindow<T extends HTMLElement>(
  options: UseFloatingWindowOptions = {}
): UseFloatingWindowReturnValue<T> {
  const [element, setElement] = useState<T | null>(null);
  const ref = useRef<T>(null);
  const pos = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const initialized = useRef(false);
  const enabledRef = useRefValue(options.enabled);

  const setDragging = useCallback((value: boolean) => {
    setIsDragging(value);
    isDraggingRef.current = value;
  }, []);

  const assignRef = useCallback((node: T | null) => {
    if (node) {
      ref.current = node;
      setElement(node);
    } else {
      ref.current = null;
      setElement(null);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!initialized.current && el) {
      initialized.current = true;
      pos.current = calculateInitialPosition(el, options);
      el.style.left = `${pos.current.x}px`;
      el.style.top = `${pos.current.y}px`;
      el.style.right = 'unset';
      el.style.bottom = 'unset';
    }

    return () => {
      initialized.current = false;
    };
  }, [
    element,
    options.constrainOffset,
    options.initialPosition?.top,
    options.initialPosition?.left,
    options.initialPosition?.right,
    options.initialPosition?.bottom,
    options.constrainToViewport,
  ]);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const onStart = (e: MouseEvent | TouchEvent) => {
      if (enabledRef.current === false) {
        return;
      }

      const point = 'touches' in e ? e.touches[0] : e;

      if ('button' in e && e.button !== 0) {
        return;
      }

      if (!getHandle(el, e.target, options)) {
        return;
      }

      setDragging(true);
      document.body.style.userSelect = 'none';

      const rect = el.getBoundingClientRect();

      offset.current = {
        x: point.clientX - rect.left,
        y: point.clientY - rect.top,
      };

      options.onDragStart?.();

      document.addEventListener('mousemove', onMove, { signal });
      document.addEventListener('mouseup', onEnd, { signal });
      document.addEventListener('touchmove', onMove, { signal, passive: false });
      document.addEventListener('touchend', onEnd, { signal });
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      const point = 'touches' in e ? e.touches[0] : e;
      e.preventDefault();

      let x = point.clientX - offset.current.x;
      let y = point.clientY - offset.current.y;

      const constrained = getConstrainedPosition(el, { x, y }, options);
      if (options.axis === 'x') {
        x = constrained.x;
        y = pos.current.y;
      } else if (options.axis === 'y') {
        x = pos.current.x;
        y = constrained.y;
      } else {
        x = constrained.x;
        y = constrained.y;
      }

      pos.current = { x, y };

      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }

      options.onPositionChange?.({ x, y });
    };

    const onEnd = () => {
      if (isDraggingRef.current) {
        setDragging(false);
        document.body.style.userSelect = '';
        options.onDragEnd?.();
      }
    };

    el.addEventListener('mousedown', onStart, { signal });
    el.addEventListener('touchstart', onStart, { signal, passive: false });

    return () => {
      controller.abort();
    };
  }, [
    options.constrainToViewport,
    options.constrainOffset,
    options.dragHandleSelector,
    options.axis,
    options.onPositionChange,
    options.onDragStart,
    options.onDragEnd,
    options.initialPosition?.top,
    options.initialPosition?.left,
    options.initialPosition?.right,
    options.initialPosition?.bottom,
    element,
  ]);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new ResizeObserver(() => {
      // Re-clamp current position if element size changes
      const constrained = getConstrainedPosition(el, pos.current, options);
      pos.current = constrained;
      el.style.left = `${constrained.x}px`;
      el.style.top = `${constrained.y}px`;
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options.constrainToViewport, options.constrainOffset]);

  return {
    ref: assignRef as any,
    setPosition: createSetPosition(ref, pos, options),
    isDragging,
  };
}

// -------------------------------------------------------
// Helper functions
// -------------------------------------------------------

function px(v: string) {
  return v.endsWith('px') ? parseFloat(v) : 0;
}

function calculateInitialPosition(
  el: HTMLElement,
  options: UseFloatingWindowOptions
): { x: number; y: number } {
  const rect = el.getBoundingClientRect();
  const offset = options.constrainOffset ?? 0;
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const style = window.getComputedStyle(el);
  const top = options.initialPosition?.top;
  const left = options.initialPosition?.left;
  const right = options.initialPosition?.right;
  const bottom = options.initialPosition?.bottom;

  let x = offset;
  let y = offset;

  if (left != null) {
    x = left;
  } else if (right != null) {
    x = winW - rect.width - right;
  } else {
    x = px(style.left) || winW - rect.width - px(style.right) || offset;
  }

  if (top != null) {
    y = top;
  } else if (bottom != null) {
    y = winH - rect.height - bottom;
  } else {
    y = px(style.top) || winH - rect.height - px(style.bottom) || offset;
  }

  return options.constrainToViewport
    ? clampToViewport(x, y, el, options.constrainOffset)
    : { x, y };
}

function getConstrainedPosition(
  el: HTMLElement,
  pos: FloatingWindowPosition,
  options: UseFloatingWindowOptions
) {
  if (!options.constrainToViewport || !el) {
    return pos;
  }

  const rect = el.getBoundingClientRect();
  const offset = options.constrainOffset ?? 0;
  const maxX = window.innerWidth - rect.width - offset;
  const maxY = window.innerHeight - rect.height - offset;

  return {
    x: Math.min(Math.max(offset, pos.x), maxX),
    y: Math.min(Math.max(offset, pos.y), maxY),
  };
}

function matchesExcludeSelector(target: Node, excludeSelector?: string): boolean {
  if (!excludeSelector) {
    return false;
  }
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest(excludeSelector));
}

function getHandle(
  el: HTMLElement,
  target: EventTarget | null,
  options: UseFloatingWindowOptions
): boolean {
  if (!(target instanceof Node)) {
    return false;
  }

  // If no drag handle selector, allow dragging from entire element
  if (!options.dragHandleSelector) {
    return !matchesExcludeSelector(target, options.excludeDragHandleSelector);
  }

  const handles = Array.from(el.querySelectorAll(options.dragHandleSelector));
  return handles.some(
    (handle) =>
      handle.contains(target) && !matchesExcludeSelector(target, options.excludeDragHandleSelector)
  );
}

function clampToViewport(
  x: number,
  y: number,
  el: HTMLElement,
  offset: number = 0
): { x: number; y: number } {
  const rect = el.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - offset;
  const maxY = window.innerHeight - rect.height - offset;

  return {
    x: Math.min(Math.max(offset, x), maxX),
    y: Math.min(Math.max(offset, y), maxY),
  };
}

function createSetPosition(
  elRef: RefObject<HTMLElement | null>,
  posRef: React.RefObject<{ x: number; y: number }>,
  options: UseFloatingWindowOptions
) {
  return useCallback(
    (position: FloatingWindowPositionConfig) => {
      const el = elRef.current;
      if (!el) {
        return;
      }

      const offset = options.constrainOffset ?? 0;
      const rect = el.getBoundingClientRect();

      let x: number | undefined;
      let y: number | undefined;

      if (position.left != null) {
        x = position.left;
      } else if (position.right != null) {
        x = window.innerWidth - rect.width - position.right;
      }

      if (position.top != null) {
        y = position.top;
      } else if (position.bottom != null) {
        y = window.innerHeight - rect.height - position.bottom;
      }

      x = x ?? posRef.current.x;
      y = y ?? posRef.current.y;

      if (options.constrainToViewport) {
        const clamped = clampToViewport(x, y, el, offset);
        x = clamped.x;
        y = clamped.y;
      }

      posRef.current = { x, y };
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      options.onPositionChange?.({ x, y });
    },
    [options.constrainToViewport, options.constrainOffset, options.onPositionChange]
  );
}
