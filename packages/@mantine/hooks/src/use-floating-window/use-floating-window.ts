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
  /** If `false`, the element can not be dragged. @default true @category behavior */
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

  /** Called when the element position changes: on initial placement, drag, keyboard move, `setPosition` call and re-clamp after the element or the browser window is resized @category state */
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
  const pos = useRef<FloatingWindowPosition>({ x: 0, y: 0 });
  const grabOffset = useRef<FloatingWindowPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const initializedElement = useRef<T | null>(null);
  const optionsRef = useLatestRef(options);

  const setDragging = useCallback((value: boolean) => {
    setIsDragging(value);
    isDraggingRef.current = value;
  }, []);

  const assignRef = useCallback((node: T | null) => {
    ref.current = node;
    setElement(node);
  }, []);

  const applyPosition = useCallback((el: HTMLElement, next: FloatingWindowPosition) => {
    pos.current = next;
    el.style.left = `${next.x}px`;
    el.style.top = `${next.y}px`;
    optionsRef.current.onPositionChange?.(next);
  }, []);

  const reclamp = useCallback(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const constrained = getConstrainedPosition(el, pos.current, optionsRef.current);
    if (constrained.x !== pos.current.x || constrained.y !== pos.current.y) {
      applyPosition(el, constrained);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (el && initializedElement.current !== el) {
      initializedElement.current = el;
      const initial = calculateInitialPosition(el, optionsRef.current);
      el.style.right = 'unset';
      el.style.bottom = 'unset';
      applyPosition(el, initial);
    }
  }, [element]);

  useEffect(() => {
    reclamp();
  }, [options.constrainToViewport, options.constrainOffset]);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    let dragController: AbortController | null = null;

    const onStart = (e: MouseEvent | TouchEvent) => {
      if (optionsRef.current.enabled === false) {
        return;
      }

      const point = 'touches' in e ? e.touches[0] : e;

      if ('button' in e && e.button !== 0) {
        return;
      }

      if (!isDragHandleTarget(el, e.target, optionsRef.current)) {
        return;
      }

      setDragging(true);
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      const rect = el.getBoundingClientRect();

      grabOffset.current = {
        x: point.clientX - rect.left,
        y: point.clientY - rect.top,
      };

      optionsRef.current.onDragStart?.();

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

      moveTo({ x: point.clientX - grabOffset.current.x, y: point.clientY - grabOffset.current.y });
    };

    const moveTo = (target: FloatingWindowPosition) => {
      const { axis } = optionsRef.current;
      const constrained = getConstrainedPosition(el, target, optionsRef.current);
      applyPosition(el, {
        x: axis === 'y' ? pos.current.x : constrained.x,
        y: axis === 'x' ? pos.current.y : constrained.y,
      });
    };

    const onEnd = () => {
      dragController?.abort();
      dragController = null;

      if (isDraggingRef.current) {
        setDragging(false);
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        optionsRef.current.onDragEnd?.();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (optionsRef.current.enabled === false || e.target !== el) {
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
      onEnd();
      controller.abort();
    };
  }, [element]);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new ResizeObserver(reclamp);
    observer.observe(el);
    window.addEventListener('resize', reclamp);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', reclamp);
    };
  }, [element]);

  const setPosition = useCallback((position: FloatingWindowPositionConfig) => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const { x, y } = resolvePosition(el, position);

    applyPosition(
      el,
      getConstrainedPosition(
        el,
        { x: x ?? pos.current.x, y: y ?? pos.current.y },
        optionsRef.current
      )
    );
  }, []);

  return {
    ref: assignRef,
    setPosition,
    isDragging,
  };
}

function px(v: string) {
  return v.endsWith('px') ? parseFloat(v) : 0;
}

function getViewportSize() {
  const root = document.documentElement;
  return {
    width: root.clientWidth || window.innerWidth,
    height: root.clientHeight || window.innerHeight,
  };
}

function calculateInitialPosition(
  el: HTMLElement,
  options: UseFloatingWindowOptions
): FloatingWindowPosition {
  const style = window.getComputedStyle(el);
  const offset = options.constrainOffset ?? 0;
  const fromStyle = resolvePosition(el, {
    left: px(style.left) || undefined,
    right: px(style.right),
    top: px(style.top) || undefined,
    bottom: px(style.bottom),
  });
  const initial = resolvePosition(el, options.initialPosition ?? {});

  return getConstrainedPosition(
    el,
    { x: initial.x ?? (fromStyle.x || offset), y: initial.y ?? (fromStyle.y || offset) },
    options
  );
}

function resolvePosition(
  el: HTMLElement,
  position: FloatingWindowPositionConfig
): Partial<FloatingWindowPosition> {
  const rect = el.getBoundingClientRect();
  const viewport = getViewportSize();
  return {
    x:
      position.left ??
      (position.right != null ? viewport.width - rect.width - position.right : undefined),
    y:
      position.top ??
      (position.bottom != null ? viewport.height - rect.height - position.bottom : undefined),
  };
}

function getConstrainedPosition(
  el: HTMLElement,
  pos: FloatingWindowPosition,
  options: UseFloatingWindowOptions
): FloatingWindowPosition {
  if (!options.constrainToViewport) {
    return pos;
  }

  const rect = el.getBoundingClientRect();
  const offset = options.constrainOffset ?? 0;
  const viewport = getViewportSize();
  const maxX = viewport.width - rect.width - offset;
  const maxY = viewport.height - rect.height - offset;

  return {
    x: Math.max(offset, Math.min(pos.x, maxX)),
    y: Math.max(offset, Math.min(pos.y, maxY)),
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

function isDragHandleTarget(
  el: HTMLElement,
  target: EventTarget | null,
  options: UseFloatingWindowOptions
): boolean {
  if (!(target instanceof Node)) {
    return false;
  }

  if (!options.dragHandleSelector) {
    return !matchesExcludeSelector(target, options.excludeDragHandleSelector);
  }

  const handles = Array.from(el.querySelectorAll(options.dragHandleSelector));
  return handles.some(
    (handle) =>
      handle.contains(target) && !matchesExcludeSelector(target, options.excludeDragHandleSelector)
  );
}

export namespace useFloatingWindow {
  export type Options = UseFloatingWindowOptions;
  export type Position = FloatingWindowPosition;
  export type SetPosition = SetFloatingWindowPosition;
  export type ReturnValue<T extends HTMLElement> = UseFloatingWindowReturnValue<T>;
}
