import { forwardRef, useEffect, useRef, useState } from 'react';
import { useMergedRef, useResizeObserver } from '@mantine/hooks';
import { useImageCropperContext } from './ImageCropper.context';

export interface ImageCropperViewportProps extends React.ComponentPropsWithoutRef<'div'> {}

const KEYBOARD_PAN_STEP = 10;
const KEYBOARD_PAN_STEP_LARGE = 50;

export const ImageCropperViewport = forwardRef<HTMLDivElement, ImageCropperViewportProps>(
  (
    {
      className,
      style,
      children,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel,
      onKeyDown,
      ...others
    },
    ref
  ) => {
    const ctx = useImageCropperContext();
    const { controller, disabled, cropShape, withGrid } = ctx;
    const { cropSize, zoomBy, zoomStep } = controller;
    const { setContainerSize, panBy, wheelZoom } = controller.__internal;

    const [resizeRef, rect] = useResizeObserver<HTMLDivElement>();
    const nodeRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const pointerRef = useRef<{ id: number; x: number; y: number } | null>(null);

    useEffect(() => {
      if (rect.width && rect.height) {
        setContainerSize({ width: rect.width, height: rect.height });
      }
    }, [rect.width, rect.height, setContainerSize]);

    useEffect(() => {
      const node = nodeRef.current;
      if (!node || disabled) {
        return undefined;
      }

      const handleWheel = (event: WheelEvent) => {
        if (wheelZoom(event.deltaY)) {
          event.preventDefault();
        }
      };

      node.addEventListener('wheel', handleWheel, { passive: false });
      return () => node.removeEventListener('wheel', handleWheel);
    }, [disabled, wheelZoom]);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerDown?.(event);
      if (disabled || event.button !== 0) {
        return;
      }
      pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
      event.currentTarget.setPointerCapture?.(event.pointerId);
      setActive(true);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerMove?.(event);
      const pointer = pointerRef.current;
      if (!pointer || pointer.id !== event.pointerId) {
        return;
      }
      panBy(event.clientX - pointer.x, event.clientY - pointer.y);
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const stopPointer = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerRef.current || pointerRef.current.id !== event.pointerId) {
        return;
      }
      pointerRef.current = null;
      setActive(false);
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerUp?.(event);
      stopPointer(event);
    };

    const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
      onPointerCancel?.(event);
      stopPointer(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (disabled || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      const step = event.shiftKey ? KEYBOARD_PAN_STEP_LARGE : KEYBOARD_PAN_STEP;

      switch (event.key) {
        case 'ArrowLeft':
          panBy(-step, 0);
          break;
        case 'ArrowRight':
          panBy(step, 0);
          break;
        case 'ArrowUp':
          panBy(0, -step);
          break;
        case 'ArrowDown':
          panBy(0, step);
          break;
        case '+':
        case '=':
          zoomBy(zoomStep);
          break;
        case '-':
          zoomBy(-zoomStep);
          break;
        default:
          return;
      }

      event.preventDefault();
    };

    const aspectStyle = controller.aspectRatio
      ? { aspectRatio: `${controller.aspectRatio}`, ...style }
      : style;

    return (
      <div
        {...ctx.getStyles('viewport', { className, style: aspectStyle, focusable: true })}
        ref={useMergedRef(ref, resizeRef, nodeRef)}
        role="group"
        aria-label="Image cropper"
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? undefined : 0}
        data-disabled={disabled || undefined}
        data-active={active || undefined}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onKeyDown={handleKeyDown}
        {...others}
      >
        {children}

        <div
          {...ctx.getStyles('overlay', {
            style: cropSize
              ? { width: cropSize.width, height: cropSize.height }
              : { display: 'none' },
          })}
          data-shape={cropShape}
        >
          {withGrid && (
            <div {...ctx.getStyles('grid')} aria-hidden>
              <span {...ctx.getStyles('gridLine')} data-orientation="vertical" data-position="1" />
              <span {...ctx.getStyles('gridLine')} data-orientation="vertical" data-position="2" />
              <span
                {...ctx.getStyles('gridLine')}
                data-orientation="horizontal"
                data-position="1"
              />
              <span
                {...ctx.getStyles('gridLine')}
                data-orientation="horizontal"
                data-position="2"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

ImageCropperViewport.displayName = '@mantine/core/ImageCropperViewport';
