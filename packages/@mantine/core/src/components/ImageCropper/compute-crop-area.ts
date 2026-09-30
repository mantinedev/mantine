/*
 * Geometry helpers ported from react-easy-crop 5.x (https://github.com/ValentinH/react-easy-crop)
 * — MIT License, Copyright (c) Valentin Hervieu. See ./LICENSE for the full license text.
 *
 * Local changes compared to react-easy-crop 5.x:
 * - Only rotateSize, getCropSize, restrictPosition and computeCroppedArea are ported,
 *   object-fit handling, zoom-to-point and initial-crop helpers are not included
 * - getCropSize, restrictPosition and computeCroppedArea take size objects instead of
 *   positional width/height arguments
 * - computeCroppedArea rounds percent values to 1e-6 to drop floating point noise
 * - getContainedSize and measureMedia added: the displayed media size is always the
 *   image contained in the viewport (small images are scaled up)
 * - computeCropGeometry added: derives media size, crop window, clamped offset and crop data
 *   from the image, viewport and transform state in one call
 * - Also hosts the shared ImageCropper types (crop shape, flip) and exports toRadians
 * - TypeScript types adjusted for the Mantine build, formatted with oxfmt
 */

import { clamp } from '@mantine/hooks';

export type ImageCropperCropShape = 'rectangle' | 'circle';

export type ImageCropperFlip = {
  horizontal?: boolean;
  vertical?: boolean;
};

export interface ResolvedImageCropperFlip {
  horizontal: boolean;
  vertical: boolean;
}

export interface ImageCropperSize {
  width: number;
  height: number;
}

export interface ImageCropperMediaSize {
  width: number;
  height: number;
  naturalWidth: number;
  naturalHeight: number;
}

export interface ImageCropperPoint {
  x: number;
  y: number;
}

export interface ImageCropperArea {
  /** Horizontal offset of the crop rectangle */
  x: number;

  /** Vertical offset of the crop rectangle */
  y: number;

  /** Width of the crop rectangle */
  width: number;

  /** Height of the crop rectangle */
  height: number;

  /** Rotation applied to the image in degrees */
  rotation: number;
}

export interface ImageCropperCropData {
  /** Crop rectangle in natural source pixels */
  pixels: ImageCropperArea;

  /** Crop rectangle in percentages of the source image (0–100) */
  percent: ImageCropperArea;
}

export const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

const limit = (max: number, value: number) => Math.min(max, Math.max(0, value));

const roundPercent = (value: number) => Math.round(value * 1e6) / 1e6;

export function rotateSize(width: number, height: number, rotation: number): ImageCropperSize {
  const rad = toRadians(rotation);
  return {
    width: Math.abs(Math.cos(rad) * width) + Math.abs(Math.sin(rad) * height),
    height: Math.abs(Math.sin(rad) * width) + Math.abs(Math.cos(rad) * height),
  };
}

export function getContainedSize(
  natural: ImageCropperSize,
  container: ImageCropperSize
): ImageCropperSize {
  if (!natural.width || !natural.height || !container.width || !container.height) {
    return { width: 0, height: 0 };
  }

  const scale = Math.min(container.width / natural.width, container.height / natural.height);
  return { width: natural.width * scale, height: natural.height * scale };
}

export function measureMedia(
  image: { naturalWidth: number; naturalHeight: number },
  container: ImageCropperSize
): ImageCropperMediaSize | null {
  const contained = getContainedSize(
    { width: image.naturalWidth, height: image.naturalHeight },
    container
  );

  if (!contained.width || !contained.height) {
    return null;
  }

  return { naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, ...contained };
}

export function getCropSize(
  mediaSize: ImageCropperSize,
  containerSize: ImageCropperSize,
  aspect: number,
  rotation = 0
): ImageCropperSize {
  const rotated = rotateSize(mediaSize.width, mediaSize.height, rotation);
  const fittingWidth = Math.min(rotated.width, containerSize.width);
  const fittingHeight = Math.min(rotated.height, containerSize.height);

  if (fittingWidth > fittingHeight * aspect) {
    return { width: fittingHeight * aspect, height: fittingHeight };
  }

  return { width: fittingWidth, height: fittingWidth / aspect };
}

function restrictCoordinate(
  position: number,
  mediaBBoxSide: number,
  cropSide: number,
  zoom: number
): number {
  const maxPosition = (mediaBBoxSide * zoom) / 2 - cropSide / 2;
  if (maxPosition <= 0) {
    return 0;
  }
  return clamp(position, -maxPosition, maxPosition);
}

export function restrictPosition(
  position: ImageCropperPoint,
  mediaSize: ImageCropperSize,
  cropSize: ImageCropperSize,
  zoom: number,
  rotation: number
): ImageCropperPoint {
  const bbox = rotateSize(mediaSize.width, mediaSize.height, rotation);
  return {
    x: restrictCoordinate(position.x, bbox.width, cropSize.width, zoom),
    y: restrictCoordinate(position.y, bbox.height, cropSize.height, zoom),
  };
}

export interface ComputeCroppedAreaInput {
  crop: ImageCropperPoint;
  mediaSize: ImageCropperMediaSize;
  cropSize: ImageCropperSize;
  aspect: number;
  zoom: number;
  rotation: number;
}

export function computeCroppedArea({
  crop,
  mediaSize,
  cropSize,
  aspect,
  zoom,
  rotation,
}: ComputeCroppedAreaInput): ImageCropperCropData {
  const bbox = rotateSize(mediaSize.width, mediaSize.height, rotation);
  const naturalBBox = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);

  const percentArea = {
    x: limit(100, (((bbox.width - cropSize.width / zoom) / 2 - crop.x / zoom) / bbox.width) * 100),
    y: limit(
      100,
      (((bbox.height - cropSize.height / zoom) / 2 - crop.y / zoom) / bbox.height) * 100
    ),
    width: limit(100, ((cropSize.width / bbox.width) * 100) / zoom),
    height: limit(100, ((cropSize.height / bbox.height) * 100) / zoom),
  };

  const widthInPixels = Math.round(
    limit(naturalBBox.width, (percentArea.width * naturalBBox.width) / 100)
  );
  const heightInPixels = Math.round(
    limit(naturalBBox.height, (percentArea.height * naturalBBox.height) / 100)
  );
  const isWider = naturalBBox.width >= naturalBBox.height * aspect;
  const size = isWider
    ? { width: Math.round(heightInPixels * aspect), height: heightInPixels }
    : { width: widthInPixels, height: Math.round(widthInPixels / aspect) };

  const pixels: ImageCropperArea = {
    ...size,
    x: Math.round(limit(naturalBBox.width - size.width, (percentArea.x * naturalBBox.width) / 100)),
    y: Math.round(
      limit(naturalBBox.height - size.height, (percentArea.y * naturalBBox.height) / 100)
    ),
    rotation,
  };

  return {
    pixels,
    percent: {
      x: roundPercent(percentArea.x),
      y: roundPercent(percentArea.y),
      width: roundPercent(percentArea.width),
      height: roundPercent(percentArea.height),
      rotation,
    },
  };
}

export interface ComputeCropGeometryInput {
  image: { naturalWidth: number; naturalHeight: number };
  container: ImageCropperSize;
  aspectRatio: number | undefined;
  rotation: number;
  zoom: number;
  crop: ImageCropperPoint;
}

export interface ImageCropperGeometry {
  media: ImageCropperMediaSize;
  cropSize: ImageCropperSize;
  crop: ImageCropperPoint;
  cropData: ImageCropperCropData;
}

export function computeCropGeometry({
  image,
  container,
  aspectRatio,
  rotation,
  zoom,
  crop,
}: ComputeCropGeometryInput): ImageCropperGeometry | null {
  const media = measureMedia(image, container);
  if (!media) {
    return null;
  }

  const aspect = aspectRatio || container.width / container.height;
  const cropSize = getCropSize(media, container, aspect, rotation);
  const restricted = restrictPosition(crop, media, cropSize, zoom, rotation);
  const cropData = computeCroppedArea({
    crop: restricted,
    mediaSize: media,
    cropSize,
    aspect,
    zoom,
    rotation,
  });

  return { media, cropSize, crop: restricted, cropData };
}
