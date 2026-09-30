/*
 * Canvas export adapted from the getCroppedImg helper of the react-easy-crop 5.x examples
 * (https://github.com/ValentinH/react-easy-crop) — MIT License, Copyright (c) Valentin Hervieu.
 * See ./LICENSE for the full license text.
 *
 * Local changes compared to react-easy-crop 5.x:
 * - The rotated/flipped image is drawn straight into an integer-sized canvas of the crop size
 *   with a pre-translated transform, no intermediate canvas of the whole rotated image
 * - Circle crop shape is applied with a destination-in mask
 * - Resolves with a Blob or a data URL, every failure (including synchronous canvas errors
 *   such as a tainted canvas SecurityError) rejects the returned promise
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import {
  ImageCropperArea,
  ImageCropperCropShape,
  ImageCropperFlip,
  rotateSize,
  toRadians,
} from './compute-crop-area';

export interface GetCroppedImageOptions {
  /** Output image MIME type, `'image/png'` by default */
  type?: 'image/png' | 'image/jpeg' | 'image/webp';

  /** Output image quality from `0` to `1`, applies to lossy formats only */
  quality?: number;

  /** Output format of the resolved value, `'blob'` by default */
  output?: 'blob' | 'dataURL';
}

export function getCroppedImage(
  image: HTMLImageElement,
  area: ImageCropperArea,
  flip: ImageCropperFlip,
  cropShape: ImageCropperCropShape,
  options: GetCroppedImageOptions = {}
): Promise<Blob | string> {
  const { type = 'image/png', quality, output = 'blob' } = options;

  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('ImageCropper: unable to get canvas 2d context'));
        return;
      }

      const bbox = rotateSize(image.naturalWidth, image.naturalHeight, area.rotation);

      canvas.width = Math.max(1, Math.round(area.width));
      canvas.height = Math.max(1, Math.round(area.height));

      ctx.translate(-area.x, -area.y);
      ctx.translate(bbox.width / 2, bbox.height / 2);
      ctx.rotate(toRadians(area.rotation));
      ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
      ctx.translate(-image.naturalWidth / 2, -image.naturalHeight / 2);
      ctx.drawImage(image, 0, 0);

      if (cropShape === 'circle') {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width, canvas.height) / 2,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
      }

      if (output === 'dataURL') {
        resolve(canvas.toDataURL(type, quality));
        return;
      }

      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('ImageCropper: canvas is empty'))),
        type,
        quality
      );
    } catch (error) {
      reject(error);
    }
  });
}
