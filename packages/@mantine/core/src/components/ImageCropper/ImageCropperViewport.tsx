import { forwardRef, useEffect, useRef, useState } from 'react';
import { useMergedRef, useResizeObserver } from '@mantine/hooks';
import { useImageCropperContext } from './ImageCropper.context';

export interface ImageCropperViewportProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ImageCropperViewport = forwardRef<HTMLDivElement, ImageCropperViewportProps>(
  ({ className, style, children, ...others }, ref) => {
    const ctx = useImageCropperContext();
    const { controller, disabled, cropShape, withGrid } = ctx;
    const { cropSize } = controller;

    const [resizeRef, rect] = useResizeObserver<HTMLDivElement>();
    const nodeRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const pointerRef = useRef<{ id: number; x: number; y: number } | null>(null);

    useEffect(() => {
      if (rect.width && rect.height) {
        controller._internal.setContainerSize({ width: rect.width, height: rect.height });
      }
    }, [rect.width, rect.height, controller._internal]);

    useEffect(() => {
      const node = nodeRef.current;
      if (!node || disabled) {
        return undefined;
      }

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        controller.zoomBy(-Math.sign(event.deltaY) * controller.zoomStep);
      };

      node.addEventListener('wheel', handleWheel, { passive: false });
      return () => node.removeEventListener('wheel', handleWheel);
    }, [disabled, controller]);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
      if (disabled || event.button !== 0) {
        return;
      }
      pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
      event.currentTarget.setPointerCapture(event.pointerId);
      setActive(true);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      const pointer = pointerRef.current;
      if (!pointer || pointer.id !== event.pointerId) {
        return;
      }
      controller._internal.panBy(event.clientX - pointer.x, event.clientY - pointer.y);
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const stopPointer = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerRef.current || pointerRef.current.id !== event.pointerId) {
        return;
      }
      pointerRef.current = null;
      setActive(false);
      controller._internal.commit();
    };

    const aspectStyle = controller.aspectRatio
      ? { aspectRatio: `${controller.aspectRatio}`, ...style }
      : style;

    return (
      <div
        {...ctx.getStyles('viewport', { className, style: aspectStyle })}
        ref={useMergedRef(ref, resizeRef, nodeRef)}
        data-disabled={disabled || undefined}
        data-active={active || undefined}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopPointer}
        onPointerCancel={stopPointer}
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
