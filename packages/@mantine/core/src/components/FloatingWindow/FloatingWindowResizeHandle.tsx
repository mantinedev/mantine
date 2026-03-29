/* eslint-disable @typescript-eslint/no-deprecated */
import { useEffect, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps, factory, Factory, useProps } from '../../core';
import { FloatingWindowDimensions, useFloatingWindowContext } from './FloatingWindow.context';

export interface FloatingWindowResizeHandleProps extends BoxProps, ElementProps<'div', 'role'> {}

export type FloatingWindowResizeHandleFactory = Factory<{
  props: FloatingWindowResizeHandleProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {} satisfies Partial<FloatingWindowResizeHandleProps>;

const KEYBOARD_STEP = 10;

function clampDimension(
  value: number,
  min: number | undefined,
  max: number | undefined,
  viewportMax: number | undefined
) {
  let v = value;
  if (min != null) {
    v = Math.max(v, min);
  }
  if (max != null) {
    v = Math.min(v, max);
  }
  if (viewportMax != null) {
    v = Math.min(v, viewportMax);
  }
  return v;
}

function getViewportLimits(
  root: HTMLElement,
  constrainToViewport: boolean | undefined,
  constrainOffset: number | undefined
) {
  if (!constrainToViewport) {
    return { maxWidth: undefined, maxHeight: undefined };
  }
  const rect = root.getBoundingClientRect();
  const offset = constrainOffset ?? 0;
  return {
    maxWidth: window.innerWidth - rect.left - offset,
    maxHeight: window.innerHeight - rect.top - offset,
  };
}

function constrainWidth(
  root: HTMLElement,
  width: number,
  dimensions: FloatingWindowDimensions | undefined,
  constrainToViewport: boolean | undefined,
  constrainOffset: number | undefined
) {
  const { maxWidth: vpMax } = getViewportLimits(root, constrainToViewport, constrainOffset);
  return clampDimension(width, dimensions?.minWidth, dimensions?.maxWidth, vpMax);
}

function constrainHeight(
  root: HTMLElement,
  height: number,
  dimensions: FloatingWindowDimensions | undefined,
  constrainToViewport: boolean | undefined,
  constrainOffset: number | undefined
) {
  const { maxHeight: vpMax } = getViewportLimits(root, constrainToViewport, constrainOffset);
  return clampDimension(height, dimensions?.minHeight, dimensions?.maxHeight, vpMax);
}

export const FloatingWindowResizeHandle = factory<FloatingWindowResizeHandleFactory>((_props) => {
  const props = useProps('FloatingWindowResizeHandle', defaultProps, _props);
  const { children, ref, style, ...others } = props;
  const ctx = useFloatingWindowContext();
  const handleRef = useRef<HTMLDivElement>(null);

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
      const root = ctx.rootRef.current;
      if (!root) {
        return;
      }

      if (width !== null) {
        const w = constrainWidth(
          root,
          width,
          ctx.dimensions,
          ctx.constrainToViewport,
          ctx.constrainOffset
        );
        root.style.width = `${w}px`;
        handle.setAttribute('aria-valuenow', String(Math.round(w)));
      }

      if (height !== null) {
        const h = constrainHeight(
          root,
          height,
          ctx.dimensions,
          ctx.constrainToViewport,
          ctx.constrainOffset
        );
        root.style.height = `${h}px`;
      }
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      if ('button' in e && e.button !== 0) {
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      const root = ctx.rootRef.current;
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

      document.addEventListener('mousemove', onMove, { signal });
      document.addEventListener('mouseup', onEnd, { signal });
      document.addEventListener('touchmove', onMove, { signal, passive: false });
      document.addEventListener('touchend', onEnd, { signal });
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
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const root = ctx.rootRef.current;
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
          newWidth = ctx.dimensions?.minWidth ?? rect.width;
        }
        if (hasHeight) {
          newHeight = ctx.dimensions?.minHeight ?? rect.height;
        }
      } else if (e.key === 'End') {
        if (hasWidth) {
          newWidth = ctx.dimensions?.maxWidth ?? rect.width;
        }
        if (hasHeight) {
          newHeight = ctx.dimensions?.maxHeight ?? rect.height;
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
      controller.abort();
    };
  }, [
    ctx.rootRef,
    ctx.dimensions,
    ctx.constrainToViewport,
    ctx.constrainOffset,
    hasWidth,
    hasHeight,
  ]);

  return (
    <Box
      ref={useMergedRef(ref, handleRef)}
      role="separator"
      aria-label="Resize window"
      aria-valuenow={ctx.dimensions?.initialWidth}
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
