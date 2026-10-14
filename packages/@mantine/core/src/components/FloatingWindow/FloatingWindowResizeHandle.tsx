import { useEffect, useRef } from 'react';
import { useLatestRef, useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps, factory, Factory, useProps } from '../../core';
import { clampDimension } from './clamp-dimension';
import { useFloatingWindowContext } from './FloatingWindow.context';

export interface FloatingWindowResizeHandleProps extends BoxProps, ElementProps<'div', 'role'> {}

export type FloatingWindowResizeHandleFactory = Factory<{
  props: FloatingWindowResizeHandleProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {} satisfies Partial<FloatingWindowResizeHandleProps>;

const KEYBOARD_STEP = 10;

function clampToViewport(value: number, viewportMax: number | undefined) {
  return viewportMax == null ? value : Math.min(value, viewportMax);
}

function setValueNow(handle: HTMLElement, value: number | null | undefined) {
  if (value == null) {
    handle.removeAttribute('aria-valuenow');
  } else {
    handle.setAttribute('aria-valuenow', String(Math.round(value)));
  }
}

function getViewportLimits(
  rect: DOMRect,
  constrainToViewport: boolean | undefined,
  constrainOffset: number | undefined
) {
  if (!constrainToViewport) {
    return { maxWidth: undefined, maxHeight: undefined };
  }
  const offset = constrainOffset ?? 0;
  const root = document.documentElement;
  return {
    maxWidth: (root.clientWidth || window.innerWidth) - rect.left - offset,
    maxHeight: (root.clientHeight || window.innerHeight) - rect.top - offset,
  };
}

export const FloatingWindowResizeHandle = factory<FloatingWindowResizeHandleFactory>((_props) => {
  const props = useProps('FloatingWindowResizeHandle', defaultProps, _props);
  const { children, ref, style, ...others } = props;
  const ctx = useFloatingWindowContext();
  const handleRef = useRef<HTMLDivElement>(null);
  const ctxRef = useLatestRef(ctx);
  const valueNowRef = useRef<number | null>(null);

  const hasWidth =
    ctx.dimensions?.initialWidth != null ||
    ctx.dimensions?.minWidth != null ||
    ctx.dimensions?.maxWidth != null;
  const hasHeight =
    ctx.dimensions?.initialHeight != null ||
    ctx.dimensions?.minHeight != null ||
    ctx.dimensions?.maxHeight != null;

  useEffect(() => {
    const handle = handleRef.current;
    if (!handle) {
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;
    let isResizing = false;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    const applySize = (width: number | null, height: number | null) => {
      if (width === null && height === null) {
        return;
      }

      const { dimensions, constrainToViewport, constrainOffset, onSizeChange } = ctxRef.current;
      const root = ctxRef.current.rootRef.current;
      if (!root) {
        return;
      }

      const rect = root.getBoundingClientRect();
      const viewportLimits = getViewportLimits(rect, constrainToViewport, constrainOffset);

      if (width !== null) {
        const nextWidth = clampToViewport(
          clampDimension(width, dimensions?.minWidth, dimensions?.maxWidth),
          viewportLimits.maxWidth
        );
        root.style.width = `${nextWidth}px`;
      }

      if (height !== null) {
        const nextHeight = clampToViewport(
          clampDimension(height, dimensions?.minHeight, dimensions?.maxHeight),
          viewportLimits.maxHeight
        );
        root.style.height = `${nextHeight}px`;
      }

      const resizedRect = root.getBoundingClientRect();

      if (width !== null) {
        valueNowRef.current = resizedRect.width;
        setValueNow(handle, resizedRect.width);
      }

      onSizeChange?.({ width: resizedRect.width, height: resizedRect.height });
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      if ('button' in e && e.button !== 0) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (!hasWidth && !hasHeight) {
        return;
      }

      const root = ctxRef.current.rootRef.current;
      if (!root) {
        return;
      }

      const point = 'touches' in e ? e.touches[0] : e;
      startX = point.clientX;
      startY = point.clientY;
      const rect = root.getBoundingClientRect();
      startWidth = rect.width;
      startHeight = rect.height;
      isResizing = true;

      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      ctxRef.current.onResizeStart?.();

      document.addEventListener('mousemove', onMove, { signal });
      document.addEventListener('mouseup', onEnd, { signal });
      document.addEventListener('touchmove', onMove, { signal, passive: false });
      document.addEventListener('touchend', onEnd, { signal });
      document.addEventListener('touchcancel', onEnd, { signal });
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isResizing) {
        return;
      }

      e.preventDefault();
      const point = 'touches' in e ? e.touches[0] : e;
      const deltaX = point.clientX - startX;
      const deltaY = point.clientY - startY;
      applySize(hasWidth ? startWidth + deltaX : null, hasHeight ? startHeight + deltaY : null);
    };

    const onEnd = () => {
      if (!isResizing) {
        return;
      }

      isResizing = false;
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      ctxRef.current.onResizeEnd?.();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const { dimensions } = ctxRef.current;
      const root = ctxRef.current.rootRef.current;
      if (!root) {
        return;
      }

      const rect = root.getBoundingClientRect();
      let newWidth: number | null = null;
      let newHeight: number | null = null;

      if (e.key === 'ArrowRight' && hasWidth) {
        newWidth = rect.width + KEYBOARD_STEP;
      } else if (e.key === 'ArrowLeft' && hasWidth) {
        newWidth = rect.width - KEYBOARD_STEP;
      } else if (e.key === 'ArrowDown' && hasHeight) {
        newHeight = rect.height + KEYBOARD_STEP;
      } else if (e.key === 'ArrowUp' && hasHeight) {
        newHeight = rect.height - KEYBOARD_STEP;
      } else if (e.key === 'Home') {
        if (hasWidth) {
          newWidth = dimensions?.minWidth ?? rect.width;
        }
        if (hasHeight) {
          newHeight = dimensions?.minHeight ?? rect.height;
        }
      } else if (e.key === 'End') {
        if (hasWidth) {
          newWidth = dimensions?.maxWidth ?? rect.width;
        }
        if (hasHeight) {
          newHeight = dimensions?.maxHeight ?? rect.height;
        }
      }

      if (newWidth !== null || newHeight !== null) {
        e.preventDefault();
        applySize(newWidth, newHeight);
      }
    };

    handle.addEventListener('mousedown', onStart, { signal });
    handle.addEventListener('touchstart', onStart, { signal, passive: false });
    handle.addEventListener('keydown', onKeyDown, { signal });

    return () => {
      onEnd();
      controller.abort();
    };
  }, [hasWidth, hasHeight]);

  useEffect(() => {
    const handle = handleRef.current;
    if (!handle) {
      return;
    }

    if (!hasWidth) {
      valueNowRef.current = null;
      setValueNow(handle, null);
      return;
    }

    if (valueNowRef.current !== null) {
      return;
    }

    const initialWidth = ctx.dimensions?.initialWidth;
    setValueNow(
      handle,
      initialWidth == null
        ? null
        : clampDimension(initialWidth, ctx.dimensions?.minWidth, ctx.dimensions?.maxWidth)
    );
  }, [hasWidth, ctx.dimensions?.initialWidth, ctx.dimensions?.minWidth, ctx.dimensions?.maxWidth]);

  return (
    <Box
      ref={useMergedRef(ref, handleRef)}
      role="separator"
      aria-label="Resize window"
      aria-valuemin={ctx.dimensions?.minWidth}
      aria-valuemax={ctx.dimensions?.maxWidth}
      tabIndex={0}
      {...others}
      style={[{ touchAction: 'none' }, style]}
    >
      {children}
    </Box>
  );
});

FloatingWindowResizeHandle.displayName = '@mantine/core/FloatingWindowResizeHandle';
