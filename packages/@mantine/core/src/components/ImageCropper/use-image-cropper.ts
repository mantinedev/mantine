import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { clamp, useCallbackRef, useIsomorphicEffect, useUncontrolled } from '@mantine/hooks';
import {
  computeCropGeometry,
  ImageCropperArea,
  ImageCropperCropData,
  ImageCropperCropShape,
  ImageCropperFlip,
  ImageCropperPoint,
  ImageCropperSize,
  measureMedia,
  ResolvedImageCropperFlip,
} from './compute-crop-area';
import {
  getCroppedImage as rasterizeCroppedImage,
  GetCroppedImageOptions,
} from './get-cropped-image';

export interface ImageCropperControllerOptions {
  /** Crop aspect ratio, e.g. `1` or `16 / 9`. Defaults to the viewport aspect ratio when not set */
  aspectRatio?: number;

  /** Crop shape, `'rectangle'` by default. `'circle'` enforces a square aspect ratio */
  cropShape?: ImageCropperCropShape;

  /** Controlled zoom value */
  zoom?: number;

  /** Uncontrolled zoom initial value, `1` by default */
  defaultZoom?: number;

  /** Minimum zoom value, `1` by default */
  minZoom?: number;

  /** Maximum zoom value, `5` by default */
  maxZoom?: number;

  /** Zoom step used by wheel and imperative actions, `0.1` by default */
  zoomStep?: number;

  /** Controlled rotation value in degrees */
  rotation?: number;

  /** Uncontrolled rotation initial value in degrees, `0` by default */
  defaultRotation?: number;

  /** Controlled flip value */
  flip?: ImageCropperFlip;

  /** Uncontrolled flip initial value */
  defaultFlip?: ImageCropperFlip;

  /** Called when zoom changes */
  onZoomChange?: (zoom: number) => void;

  /** Called when rotation changes */
  onRotationChange?: (rotation: number) => void;

  /** Called when flip changes */
  onFlipChange?: (flip: ResolvedImageCropperFlip) => void;

  /** Called with `{ pixels, percent }` crop data whenever the crop rectangle changes, including during panning */
  onCropChange?: (data: ImageCropperCropData) => void;
}

interface ImageCropperSource {
  naturalWidth: number;
  naturalHeight: number;
}

interface ImageCropperRegisteredImage extends ImageCropperSource {
  element: HTMLImageElement;
  src: string | undefined;
}

export interface ImageCropperInternal {
  mediaSize: ImageCropperSize | null;
  setContainerSize: (size: ImageCropperSize) => void;
  registerImage: (image: HTMLImageElement | null) => void;
  panBy: (deltaX: number, deltaY: number) => void;
  wheelZoom: (deltaY: number) => boolean;
}

export interface ImageCropperController {
  /** Current zoom value */
  zoom: number;

  /** Current rotation value in degrees */
  rotation: number;

  /** Current flip state */
  flip: ResolvedImageCropperFlip;

  /** Current crop offset in pixels relative to the viewport center */
  crop: ImageCropperPoint;

  /** Size of the crop window in viewport pixels, `null` until the image and viewport are measured */
  cropSize: ImageCropperSize | null;

  /** Returns current zoom value */
  getZoom: () => number;

  /** Returns current rotation value in degrees */
  getRotation: () => number;

  /** Returns current flip state */
  getFlip: () => ResolvedImageCropperFlip;

  /** Returns current crop offset in pixels relative to the viewport center */
  getCrop: () => ImageCropperPoint;

  /** Returns size of the crop window in viewport pixels, `null` until the image and viewport are measured */
  getCropSize: () => ImageCropperSize | null;

  /** Crop aspect ratio from options (`1` for the circle crop shape), `undefined` when the crop window follows the viewport aspect ratio */
  aspectRatio: number | undefined;

  /** Resolved crop shape */
  cropShape: ImageCropperCropShape;

  /** Resolved minimum zoom */
  minZoom: number;

  /** Resolved maximum zoom */
  maxZoom: number;

  /** Resolved zoom step */
  zoomStep: number;

  /** Sets zoom to the given value, clamped to `minZoom`/`maxZoom` */
  setZoom: (zoom: number) => void;

  /** Changes zoom by the given delta */
  zoomBy: (delta: number) => void;

  /** Sets rotation to the given value in degrees */
  setRotation: (rotation: number) => void;

  /** Changes rotation by the given delta in degrees */
  rotateBy: (delta: number) => void;

  /** Toggles horizontal flip */
  flipHorizontal: () => void;

  /** Toggles vertical flip */
  flipVertical: () => void;

  /** Sets the crop offset in pixels, constrained to keep the crop area covered by the image */
  setCrop: (crop: ImageCropperPoint) => void;

  /** Resets zoom, rotation, flip and crop position to their initial values */
  reset: () => void;

  /** Returns the current crop rectangle in natural source pixels, or `null` if the image is not ready */
  getCropData: () => ImageCropperArea | null;

  /** Rasterizes the current crop and returns it as a `Blob` or data URL */
  getCroppedImage: (options?: GetCroppedImageOptions) => Promise<Blob | string>;

  /** @internal Wiring used by the compound components, not part of the public API */
  __internal: ImageCropperInternal;
}

const DEFAULT_CROP: ImageCropperPoint = { x: 0, y: 0 };
const EMPTY_CONTAINER: ImageCropperSize = { width: 0, height: 0 };

function resolveFlip(flip?: ImageCropperFlip): ResolvedImageCropperFlip {
  return { horizontal: !!flip?.horizontal, vertical: !!flip?.vertical };
}

const normalizeZoom = (value: number) => Math.round(value * 1e6) / 1e6;

function isSameArea(a: ImageCropperArea, b: ImageCropperArea) {
  return (
    a.x === b.x &&
    a.y === b.y &&
    a.width === b.width &&
    a.height === b.height &&
    a.rotation === b.rotation
  );
}

function isSameCropData(a: ImageCropperCropData | null, b: ImageCropperCropData) {
  return !!a && isSameArea(a.pixels, b.pixels) && isSameArea(a.percent, b.percent);
}

function isSameImage(a: ImageCropperRegisteredImage | null, b: ImageCropperRegisteredImage) {
  return (
    !!a &&
    a.src === b.src &&
    a.naturalWidth === b.naturalWidth &&
    a.naturalHeight === b.naturalHeight
  );
}

export function useImageCropper(
  options: ImageCropperControllerOptions = {}
): ImageCropperController {
  const {
    aspectRatio,
    cropShape = 'rectangle',
    minZoom = 1,
    maxZoom = 5,
    zoomStep = 0.1,
    onCropChange,
  } = options;

  const resolvedAspectRatio = cropShape === 'circle' ? 1 : aspectRatio;

  const [zoom, setZoomValue] = useUncontrolled({
    value: options.zoom,
    defaultValue: options.defaultZoom,
    finalValue: 1,
    onChange: options.onZoomChange,
  });

  const [rotation, setRotationValue] = useUncontrolled({
    value: options.rotation,
    defaultValue: options.defaultRotation,
    finalValue: 0,
    onChange: options.onRotationChange,
  });

  const [flip, setFlipValue] = useUncontrolled<ResolvedImageCropperFlip>({
    value: options.flip ? resolveFlip(options.flip) : undefined,
    defaultValue: options.defaultFlip ? resolveFlip(options.defaultFlip) : undefined,
    finalValue: resolveFlip(),
    onChange: options.onFlipChange,
  });

  const [cropState, setCropState] = useState<ImageCropperPoint>(DEFAULT_CROP);
  const [container, setContainer] = useState<ImageCropperSize>(EMPTY_CONTAINER);
  const [source, setSource] = useState<ImageCropperSource | null>(null);

  const geometry = useMemo(
    () =>
      source
        ? computeCropGeometry({
            image: source,
            container,
            aspectRatio: resolvedAspectRatio,
            rotation,
            zoom,
            crop: cropState,
          })
        : null,
    [source, container, resolvedAspectRatio, rotation, zoom, cropState]
  );

  const crop = geometry ? geometry.crop : cropState;
  const cropSize = geometry ? geometry.cropSize : null;
  const cropData = geometry ? geometry.cropData : null;
  const mediaWidth = geometry?.media.width;
  const mediaHeight = geometry?.media.height;

  const zoomRef = useRef(zoom);
  const rotationRef = useRef(rotation);
  const flipRef = useRef(flip);
  const cropRef = useRef<ImageCropperPoint>(crop);
  const aspectRatioRef = useRef(resolvedAspectRatio);
  const onCropChangeRef = useRef(onCropChange);
  const resetRef = useRef<() => void>(() => {});
  const containerRef = useRef<ImageCropperSize>(EMPTY_CONTAINER);
  const imageRef = useRef<ImageCropperRegisteredImage | null>(null);
  const previousImageRef = useRef<ImageCropperRegisteredImage | null>(null);
  const lastEmittedRef = useRef<ImageCropperCropData | null>(null);
  const cropMediaWidthRef = useRef(0);
  const initialRef = useRef({
    zoom: options.defaultZoom ?? 1,
    rotation: options.defaultRotation ?? 0,
    flip: resolveFlip(options.defaultFlip),
  });

  const getLiveGeometry = useCallback(
    (liveCrop: ImageCropperPoint) =>
      imageRef.current
        ? computeCropGeometry({
            image: imageRef.current,
            container: containerRef.current,
            aspectRatio: aspectRatioRef.current,
            rotation: rotationRef.current,
            zoom: zoomRef.current,
            crop: liveCrop,
          })
        : null,
    []
  );

  const setCrop = useCallback(
    (next: ImageCropperPoint) => {
      const restricted = getLiveGeometry(next)?.crop ?? next;
      cropRef.current = restricted;
      setCropState(restricted);
    },
    [getLiveGeometry]
  );

  const panBy = useCallback(
    (deltaX: number, deltaY: number) =>
      setCrop({ x: cropRef.current.x + deltaX, y: cropRef.current.y + deltaY }),
    [setCrop]
  );

  const setZoom = useCallbackRef((next: number) => {
    if (!Number.isFinite(next)) {
      return;
    }

    const value = clamp(normalizeZoom(next), minZoom, maxZoom);
    zoomRef.current = value;
    setZoomValue(value);
  });

  const zoomBy = useCallback((delta: number) => setZoom(zoomRef.current + delta), [setZoom]);

  const wheelZoom = useCallbackRef((deltaY: number) => {
    const current = zoomRef.current;
    const next = clamp(normalizeZoom(current - (deltaY / 100) * zoomStep), minZoom, maxZoom);
    if (next === current) {
      return false;
    }
    setZoom(next);
    return true;
  });

  const setRotation = useCallbackRef((next: number) => {
    if (!Number.isFinite(next)) {
      return;
    }

    rotationRef.current = next;
    setRotationValue(next);
  });

  const rotateBy = useCallback(
    (delta: number) => setRotation(rotationRef.current + delta),
    [setRotation]
  );

  const setFlip = useCallbackRef((next: ResolvedImageCropperFlip) => {
    flipRef.current = next;
    setFlipValue(next);
  });

  const flipHorizontal = useCallback(
    () => setFlip({ ...flipRef.current, horizontal: !flipRef.current.horizontal }),
    [setFlip]
  );

  const flipVertical = useCallback(
    () => setFlip({ ...flipRef.current, vertical: !flipRef.current.vertical }),
    [setFlip]
  );

  resetRef.current = () => {
    const initial = initialRef.current;
    zoomRef.current = initial.zoom;
    setZoomValue(initial.zoom);
    setRotation(initial.rotation);
    setFlip({ ...initial.flip });
    cropRef.current = DEFAULT_CROP;
    setCropState(DEFAULT_CROP);
  };

  const reset = useCallback(() => resetRef.current(), []);

  const rescaleCrop = useCallback((nextMediaWidth: number) => {
    const previousMediaWidth = cropMediaWidthRef.current;
    cropMediaWidthRef.current = nextMediaWidth;

    if (previousMediaWidth && nextMediaWidth && previousMediaWidth !== nextMediaWidth) {
      const ratio = nextMediaWidth / previousMediaWidth;
      const scaled = { x: cropRef.current.x * ratio, y: cropRef.current.y * ratio };
      cropRef.current = scaled;
      setCropState(scaled);
    }
  }, []);

  const setContainerSize = useCallback(
    (size: ImageCropperSize) => {
      const previousContainer = containerRef.current;
      if (previousContainer.width === size.width && previousContainer.height === size.height) {
        return;
      }

      containerRef.current = size;

      if (imageRef.current) {
        rescaleCrop(measureMedia(imageRef.current, size)?.width ?? 0);
      }

      setContainer(size);
    },
    [rescaleCrop]
  );

  const registerImage = useCallback(
    (image: HTMLImageElement | null) => {
      if (!image || !image.naturalWidth || !image.naturalHeight) {
        if (imageRef.current) {
          imageRef.current = null;
          setSource(null);
        }
        return;
      }

      const next: ImageCropperRegisteredImage = {
        element: image,
        src: image.currentSrc || image.src,
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
      };
      const isAlreadyRegistered = isSameImage(imageRef.current, next);
      const isNewImage = !!previousImageRef.current && !isSameImage(previousImageRef.current, next);

      imageRef.current = next;
      previousImageRef.current = next;

      if (isAlreadyRegistered) {
        return;
      }

      setSource({ naturalWidth: next.naturalWidth, naturalHeight: next.naturalHeight });

      if (isNewImage) {
        lastEmittedRef.current = null;
        resetRef.current();
      }

      rescaleCrop(measureMedia(next, containerRef.current)?.width ?? 0);
    },
    [rescaleCrop]
  );

  const getCropData = useCallback(
    (): ImageCropperArea | null => getLiveGeometry(cropRef.current)?.cropData.pixels ?? null,
    [getLiveGeometry]
  );

  const getCroppedImage = useCallbackRef((imageOptions?: GetCroppedImageOptions) => {
    const area = getCropData();
    if (!imageRef.current || !area) {
      return Promise.reject(new Error('ImageCropper: image is not loaded yet'));
    }

    return rasterizeCroppedImage(
      imageRef.current.element,
      area,
      flipRef.current,
      cropShape,
      imageOptions
    );
  });

  useIsomorphicEffect(() => {
    zoomRef.current = zoom;
    rotationRef.current = rotation;
    flipRef.current = flip;
    cropRef.current = crop;
    aspectRatioRef.current = resolvedAspectRatio;
    onCropChangeRef.current = onCropChange;
  });

  useIsomorphicEffect(() => {
    if (!Object.is(crop.x, cropState.x) || !Object.is(crop.y, cropState.y)) {
      setCropState((current) => (current === cropState ? crop : current));
    }
  }, [crop, cropState]);

  useEffect(() => {
    if (!cropData) {
      return;
    }

    if (!isSameCropData(lastEmittedRef.current, cropData)) {
      lastEmittedRef.current = cropData;
      onCropChangeRef.current?.(cropData);
    }
  }, [cropData]);

  const __internal = useMemo<ImageCropperInternal>(
    () => ({
      mediaSize:
        mediaWidth !== undefined && mediaHeight !== undefined
          ? { width: mediaWidth, height: mediaHeight }
          : null,
      setContainerSize,
      registerImage,
      panBy,
      wheelZoom,
    }),
    [mediaWidth, mediaHeight, panBy, registerImage, setContainerSize, wheelZoom]
  );

  const getZoom = useCallback(() => zoomRef.current, []);
  const getRotation = useCallback(() => rotationRef.current, []);
  const getFlip = useCallback(() => flipRef.current, []);
  const getCrop = useCallback(() => cropRef.current, []);
  const getCropSize = useCallback(
    () => getLiveGeometry(cropRef.current)?.cropSize ?? null,
    [getLiveGeometry]
  );

  return useMemo(
    () => ({
      zoom,
      rotation,
      flip,
      crop,
      cropSize,
      getZoom,
      getRotation,
      getFlip,
      getCrop,
      getCropSize,
      aspectRatio: resolvedAspectRatio,
      cropShape,
      minZoom,
      maxZoom,
      zoomStep,
      setZoom,
      zoomBy,
      setRotation,
      rotateBy,
      flipHorizontal,
      flipVertical,
      setCrop,
      reset,
      getCropData,
      getCroppedImage,
      __internal,
    }),
    [
      zoom,
      rotation,
      flip,
      crop,
      cropSize,
      getZoom,
      getRotation,
      getFlip,
      getCrop,
      getCropSize,
      resolvedAspectRatio,
      cropShape,
      minZoom,
      maxZoom,
      zoomStep,
      setZoom,
      zoomBy,
      setRotation,
      rotateBy,
      flipHorizontal,
      flipVertical,
      setCrop,
      reset,
      getCropData,
      getCroppedImage,
      __internal,
    ]
  );
}
