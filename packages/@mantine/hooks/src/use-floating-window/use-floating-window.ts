// Required to disable for webkit-user-select, although deprecated, it is still required for Safari support
import { RefCallback, useCallback, useEffect, useRef, useState } from 'react';
import { useLatestRef } from '../utils';

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
  /** If `false`, the element can not be dragged. @category behavior */
  enabled?: boolean;

  /** If `true`, the element can only move within the current viewport boundaries. @category behavior */
  constrainToViewport?: boolean;

  /** The offset from the viewport edges when constraining the element. Requires `constrainToViewport: true`. @category behavior */
  constrainOffset?: number;

  /** Selector of an element that should be used to drag floating window. If not specified, the entire root element is used as a drag target. @category behavior */
  dragHandleSelector?: string;

  /** Selector of an element within `dragHandleSelector` that should be excluded from the drag event. @category behavior */
  excludeDragHandleSelector?: string;

  /** If set, restricts movement to the specified axis @category behavior */
  axis?: 'x' | 'y';

  /** Initial position. If not set, calculated from element styles. @category state */
  initialPosition?: FloatingWindowPositionConfig;

  /** Called when the element position changes: on initial placement, drag, keyboard move, `setPosition` call and re-clamp after the element is resized @category state */
  onPositionChange?: (pos: FloatingWindowPosition) => void;

  /** Called when the drag starts @category behavior */
  onDragStart?: () => void;

  /** Called when the drag stops @category behavior */
  onDragEnd?: () => void;
}

export type SetFloatingWindowPosition = (position: FloatingWindowPositionConfig) => void;

export interface UseFloatingWindowReturnValue<T extends HTMLElement> {
  /** Ref to the element that should be draggable */
  ref: RefCallback<T | null>;

  /** Function to set the position of the element */
  setPosition: SetFloatingWindowPosition;

  /** `true` if the element is currently being dragged */
  isDragging: boolean;
}

const KEYBOARD_STEP = 10;
const KEYBOARD_LARGE_STEP = 50;
const KEYBOARD_DELTAS: Record<string, FloatingWindowPosition | undefined> = {
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
};

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
  const enabledRef = useLatestRef(options.enabled);
  const constrainToViewportRef = useLatestRef(options.constrainToViewport);
  const constrainOffsetRef = useLatestRef(options.constrainOffset);
  const onPositionChangeRef = useLatestRef(options.onPositionChange);
  const onDragStartRef = useLatestRef(options.onDragStart);
  const onDragEndRef = useLatestRef(options.onDragEnd);

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
      onPositionChangeRef.current?.(pos.current);
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
    let dragController: AbortController | null = null;

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
      document.body.style.webkitUserSelect = 'none';

      const rect = el.getBoundingClientRect();

      offset.current = {
        x: point.clientX - rect.left,
        y: point.clientY - rect.top,
      };

      onDragStartRef.current?.();

      dragController?.abort();
      dragController = new AbortController();
      const dragSignal = dragController.signal;

      document.addEventListener('mousemove', onMove, { signal: dragSignal });
      document.addEventListener('mouseup', onEnd, { signal: dragSignal });
      document.addEventListener('touchmove', onMove, { signal: dragSignal, passive: false });
      document.addEventListener('touchend', onEnd, { signal: dragSignal });
      document.addEventListener('touchcancel', onEnd, { signal: dragSignal });
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      const point = 'touches' in e ? e.touches[0] : e;
      e.preventDefault();

      moveTo({ x: point.clientX - offset.current.x, y: point.clientY - offset.current.y });
    };

    const moveTo = (target: FloatingWindowPosition) => {
      const constrained = getConstrainedPosition(el, target, options);
      const x = options.axis === 'y' ? pos.current.x : constrained.x;
      const y = options.axis === 'x' ? pos.current.y : constrained.y;

      pos.current = { x, y };

      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }

      onPositionChangeRef.current?.({ x, y });
    };

    const onEnd = () => {
      dragController?.abort();
      dragController = null;

      if (isDraggingRef.current) {
        setDragging(false);
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        onDragEndRef.current?.();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (enabledRef.current === false || e.target !== el) {
        return;
      }

      const step = e.shiftKey ? KEYBOARD_LARGE_STEP : KEYBOARD_STEP;
      const delta = KEYBOARD_DELTAS[e.key];

      if (!delta) {
        return;
      }

      e.preventDefault();
      moveTo({ x: pos.current.x + delta.x * step, y: pos.current.y + delta.y * step });
    };

    el.addEventListener('mousedown', onStart, { signal });
    el.addEventListener('touchstart', onStart, { signal, passive: false });
    el.addEventListener('keydown', onKeyDown, { signal });

    return () => {
      controller.abort();
      dragController?.abort();
    };
  }, [
    options.constrainToViewport,
    options.constrainOffset,
    options.dragHandleSelector,
    options.axis,
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
      const constrained = getConstrainedPosition(el, pos.current, options);
      const changed = constrained.x !== pos.current.x || constrained.y !== pos.current.y;
      pos.current = constrained;
      el.style.left = `${constrained.x}px`;
      el.style.top = `${constrained.y}px`;

      if (changed) {
        onPositionChangeRef.current?.(constrained);
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options.constrainToViewport, options.constrainOffset, element]);

  const setPosition = useCallback((position: FloatingWindowPositionConfig) => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const offset = constrainOffsetRef.current ?? 0;
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

    x = x ?? pos.current.x;
    y = y ?? pos.current.y;

    if (constrainToViewportRef.current) {
      const clamped = clampToViewport(x, y, el, offset);
      x = clamped.x;
      y = clamped.y;
    }

    pos.current = { x, y };
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    onPositionChangeRef.current?.({ x, y });
  }, []);

  return {
    ref: assignRef,
    setPosition,
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

export namespace useFloatingWindow {
  export type Options = UseFloatingWindowOptions;
  export type Position = FloatingWindowPosition;
  export type SetPosition = SetFloatingWindowPosition;
  export type ReturnValue<T extends HTMLElement> = UseFloatingWindowReturnValue<T>;
}
