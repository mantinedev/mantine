import { forwardRef, useRef } from 'react';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { useImageCropperContext } from './ImageCropper.context';

export interface ImageCropperImageProps extends React.ComponentPropsWithoutRef<'img'> {}

const round = (value: number) => Math.round(value * 1000) / 1000;

export const ImageCropperImage = forwardRef<HTMLImageElement, ImageCropperImageProps>(
  ({ className, style, onLoad, onError, src: srcProp, alt = '', ...others }, ref) => {
    const ctx = useImageCropperContext();
    const { crop, zoom, rotation, flip } = ctx.controller;
    const { registerImage, mediaSize } = ctx.controller.__internal;
    const src = srcProp ?? ctx.src;
    const imageRef = useRef<HTMLImageElement>(null);
    const mergedRef = useMergedRef(ref, imageRef);

    useIsomorphicEffect(() => {
      const node = imageRef.current;
      if (node && node.complete && node.naturalWidth) {
        registerImage(node);
      }
      return () => registerImage(null);
    }, [src, registerImage]);

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
      registerImage(event.currentTarget);
      onLoad?.(event);
    };

    const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
      registerImage(null);
      onError?.(event);
    };

    const transform = `translate(${round(crop.x)}px, ${round(crop.y)}px) rotate(${rotation}deg) scale(${
      zoom * (flip.horizontal ? -1 : 1)
    }, ${zoom * (flip.vertical ? -1 : 1)})`;

    const sizeStyle: React.CSSProperties = mediaSize
      ? { width: mediaSize.width, height: mediaSize.height }
      : { visibility: 'hidden' };

    return (
      <img
        {...ctx.getStyles('image', { className, style: { ...sizeStyle, transform, ...style } })}
        ref={mergedRef}
        src={src}
        alt={alt}
        crossOrigin={ctx.crossOrigin}
        draggable={false}
        onLoad={handleLoad}
        onError={handleError}
        {...others}
      />
    );
  }
);

ImageCropperImage.displayName = '@mantine/core/ImageCropperImage';
