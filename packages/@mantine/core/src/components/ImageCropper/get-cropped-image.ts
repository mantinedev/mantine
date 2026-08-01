import { ImageCropperArea, rotateSize } from './compute-crop-area';

export interface GetCroppedImageOptions {
  /** Output image MIME type, `'image/png'` by default */
  type?: 'image/png' | 'image/jpeg' | 'image/webp';

  /** Output image quality from `0` to `1`, applies to lossy formats only */
  quality?: number;

  /** Output format of the resolved value, `'blob'` by default */
  output?: 'blob' | 'dataURL';
}

export type ImageCropperFlip = {
  horizontal?: boolean;
  vertical?: boolean;
};

export function getCroppedImage(
  image: HTMLImageElement,
  area: ImageCropperArea,
  flip: ImageCropperFlip,
  cropShape: 'rectangle' | 'circle',
  options: GetCroppedImageOptions = {}
): Promise<Blob | string> {
  const { type = 'image/png', quality, output = 'blob' } = options;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return Promise.reject(new Error('ImageCropper: unable to get canvas 2d context'));
  }

  const rotation = area.rotation ?? 0;
  const bbox = rotateSize(image.naturalWidth, image.naturalHeight, rotation);

  canvas.width = bbox.width;
  canvas.height = bbox.height;

  ctx.translate(bbox.width / 2, bbox.height / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.naturalWidth / 2, -image.naturalHeight / 2);
  ctx.drawImage(image, 0, 0);

  const cropped = document.createElement('canvas');
  const croppedCtx = cropped.getContext('2d');

  if (!croppedCtx) {
    return Promise.reject(new Error('ImageCropper: unable to get canvas 2d context'));
  }

  cropped.width = Math.max(1, Math.round(area.width));
  cropped.height = Math.max(1, Math.round(area.height));

  croppedCtx.drawImage(
    canvas,
    area.x,
    area.y,
    area.width,
    area.height,
    0,
    0,
    area.width,
    area.height
  );

  if (cropShape === 'circle') {
    croppedCtx.globalCompositeOperation = 'destination-in';
    croppedCtx.beginPath();
    croppedCtx.arc(
      cropped.width / 2,
      cropped.height / 2,
      Math.min(cropped.width, cropped.height) / 2,
      0,
      2 * Math.PI
    );
    croppedCtx.closePath();
    croppedCtx.fill();
  }

  if (output === 'dataURL') {
    return Promise.resolve(cropped.toDataURL(type, quality));
  }

  return new Promise((resolve, reject) => {
    cropped.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('ImageCropper: canvas is empty'))),
      type,
      quality
    );
  });
}
