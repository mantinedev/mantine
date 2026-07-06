import { forwardRef, useCallback } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useImageCropperContext } from './ImageCropper.context';

export interface ImageCropperImageProps extends React.ComponentPropsWithoutRef<'img'> {}

export const ImageCropperImage = forwardRef<HTMLImageElement, ImageCropperImageProps>(
  ({ className, style, onLoad, alt = '', ...others }, ref) => {
    const ctx = useImageCropperContext();
    const { crop, zoom, rotation, flip } = ctx.controller;

    const setRef = useCallback(
      (node: HTMLImageElement | null) => {
        if (node && node.complete && node.naturalWidth) {
          ctx.controller._internal.registerImage(node);
        }
      },
      [ctx.controller._internal]
    );

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
      ctx.controller._internal.registerImage(event.currentTarget);
      onLoad?.(event);
    };

    const transform = `translate(${crop.x}px, ${crop.y}px) rotate(${rotation}deg) scale(${
      zoom * (flip.horizontal ? -1 : 1)
    }, ${zoom * (flip.vertical ? -1 : 1)})`;

    return (
      <img
        {...ctx.getStyles('image', { className, style: { transform, ...style } })}
        ref={useMergedRef(ref, setRef)}
        src={ctx.src}
        alt={alt}
        crossOrigin={ctx.crossOrigin}
        draggable={false}
        onLoad={handleLoad}
        {...others}
      />
    );
  }
);

ImageCropperImage.displayName = '@mantine/core/ImageCropperImage';
