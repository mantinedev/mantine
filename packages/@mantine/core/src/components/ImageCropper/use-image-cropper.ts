import { useCallback, useMemo, useRef, useState } from 'react';
import { clamp, useCallbackRef, useDidUpdate, useLatestRef, useUncontrolled } from '@mantine/hooks';
import {
  computeCroppedArea,
  getContainedSize,
  getCropSize as computeCropSize,
  ImageCropperArea,
  ImageCropperCropData,
  ImageCropperMediaSize,
  ImageCropperPoint,
  ImageCropperSize,
  restrictPosition,
} from './compute-crop-area';
import {
  getCroppedImage as rasterizeCroppedImage,
  GetCroppedImageOptions,
  ImageCropperFlip,
} from './get-cropped-image';

export type ImageCropperCropShape = 'rectangle' | 'circle';

export interface ResolvedImageCropperFlip {
  horizontal: boolean;
  vertical: boolean;
}

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

  /** Called with the resolved crop rectangle when the crop changes */
  onCropChange?: (data: ImageCropperCropData) => void;
}

interface ImageCropperGeometry {
  container: ImageCropperSize;
  media: ImageCropperMediaSize | null;
  cropSize: ImageCropperSize | null;
  aspect: number;
  image: HTMLImageElement | null;
}

export interface ImageCropperInternal {
  cropRef: React.RefObject<ImageCropperPoint>;
  geometryRef: React.RefObject<ImageCropperGeometry>;
  setContainerSize: (size: ImageCropperSize) => void;
  registerImage: (image: HTMLImageElement | null) => void;
  panBy: (deltaX: number, deltaY: number) => void;
  commit: () => void;
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

  /** Resolved crop aspect ratio */
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

  /** Internal wiring used by the compound components, not part of the public API */
  _internal: ImageCropperInternal;
}

const DEFAULT_CROP: ImageCropperPoint = { x: 0, y: 0 };

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
    value: options.flip
      ? { horizontal: !!options.flip.horizontal, vertical: !!options.flip.vertical }
      : undefined,
    defaultValue: options.defaultFlip
      ? { horizontal: !!options.defaultFlip.horizontal, vertical: !!options.defaultFlip.vertical }
      : undefined,
    finalValue: { horizontal: false, vertical: false },
    onChange: options.onFlipChange,
  });

  const [crop, setCropState] = useState<ImageCropperPoint>(DEFAULT_CROP);
  const [cropSize, setCropSizeState] = useState<ImageCropperSize | null>(null);

  const cropRef = useLatestRef<ImageCropperPoint>(crop);
  const cropSizeRef = useLatestRef(cropSize);

  const latest = useLatestRef({ zoom, rotation, flip });

  const initialRef = useRef({
    zoom: options.defaultZoom ?? 1,
    rotation: options.defaultRotation ?? 0,
    flip: {
      horizontal: !!options.defaultFlip?.horizontal,
      vertical: !!options.defaultFlip?.vertical,
    },
  });

  const geometryRef = useRef<ImageCropperGeometry>({
    container: { width: 0, height: 0 },
    media: null,
    cropSize: null,
    aspect: aspectRatio ?? 1,
    image: null,
  });

  const resolveAspect = useCallbackRef(() => {
    if (cropShape === 'circle') {
      return 1;
    }
    if (aspectRatio) {
      return aspectRatio;
    }
    const { container } = geometryRef.current;
    return container.width && container.height ? container.width / container.height : 1;
  });

  const emitCropChange = useCallbackRef(() => {
    const geometry = geometryRef.current;
    if (!geometry.media || !geometry.cropSize || !onCropChange) {
      return;
    }

    onCropChange(
      computeCroppedArea({
        crop: cropRef.current,
        mediaSize: geometry.media,
        cropSize: geometry.cropSize,
        aspect: geometry.aspect,
        zoom: latest.current.zoom,
        rotation: latest.current.rotation,
      })
    );
  });

  const applyCrop = useCallback((next: ImageCropperPoint) => {
    const geometry = geometryRef.current;
    if (!geometry.media || !geometry.cropSize) {
      cropRef.current = next;
      setCropState(next);
      return;
    }

    const restricted = restrictPosition(
      next,
      geometry.media,
      geometry.cropSize,
      latest.current.zoom,
      latest.current.rotation
    );
    cropRef.current = restricted;
    setCropState(restricted);
  }, []);

  const recompute = useCallback(() => {
    const geometry = geometryRef.current;
    if (!geometry.media || !geometry.container.width || !geometry.container.height) {
      return;
    }

    geometry.aspect = resolveAspect();
    geometry.cropSize = computeCropSize(geometry.media, geometry.container, geometry.aspect);
    setCropSizeState(geometry.cropSize);
    applyCrop(cropRef.current);
    emitCropChange();
  }, [applyCrop, emitCropChange, resolveAspect]);

  const setContainerSize = useCallback(
    (size: ImageCropperSize) => {
      const geometry = geometryRef.current;
      geometry.container = size;
      if (geometry.image) {
        geometry.media = {
          naturalWidth: geometry.image.naturalWidth,
          naturalHeight: geometry.image.naturalHeight,
          ...getContainedSize(
            { width: geometry.image.naturalWidth, height: geometry.image.naturalHeight },
            size
          ),
        };
      }
      recompute();
    },
    [recompute]
  );

  const registerImage = useCallback(
    (image: HTMLImageElement | null) => {
      const geometry = geometryRef.current;
      geometry.image = image;
      if (!image || !image.naturalWidth || !image.naturalHeight) {
        geometry.media = null;
        return;
      }

      geometry.media = {
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        ...getContainedSize(
          { width: image.naturalWidth, height: image.naturalHeight },
          geometry.container
        ),
      };
      recompute();
    },
    [recompute]
  );

  const setCrop = useCallback(
    (next: ImageCropperPoint) => {
      applyCrop(next);
      emitCropChange();
    },
    [applyCrop, emitCropChange]
  );

  const panBy = useCallback(
    (deltaX: number, deltaY: number) => {
      applyCrop({ x: cropRef.current.x + deltaX, y: cropRef.current.y + deltaY });
    },
    [applyCrop]
  );

  const setZoom = useCallbackRef((next: number) => {
    const value = clamp(next, minZoom, maxZoom);
    latest.current.zoom = value;
    setZoomValue(value);
  });

  const zoomBy = useCallback((delta: number) => setZoom(latest.current.zoom + delta), [setZoom]);

  const setRotation = useCallbackRef((next: number) => {
    latest.current.rotation = next;
    setRotationValue(next);
  });

  const rotateBy = useCallback(
    (delta: number) => setRotation(latest.current.rotation + delta),
    [setRotation]
  );

  const flipHorizontal = useCallbackRef(() => {
    const next = { ...latest.current.flip, horizontal: !latest.current.flip.horizontal };
    latest.current.flip = next;
    setFlipValue(next);
    emitCropChange();
  });

  const flipVertical = useCallbackRef(() => {
    const next = { ...latest.current.flip, vertical: !latest.current.flip.vertical };
    latest.current.flip = next;
    setFlipValue(next);
    emitCropChange();
  });

  const reset = useCallbackRef(() => {
    const initial = initialRef.current;
    latest.current.zoom = initial.zoom;
    latest.current.rotation = initial.rotation;
    latest.current.flip = { ...initial.flip };
    cropRef.current = DEFAULT_CROP;
    setZoomValue(initial.zoom);
    setRotationValue(initial.rotation);
    setFlipValue({ ...initial.flip });
    setCropState(DEFAULT_CROP);
    emitCropChange();
  });

  useDidUpdate(() => {
    applyCrop(cropRef.current);
    emitCropChange();
  }, [zoom, rotation, applyCrop, emitCropChange]);

  useDidUpdate(() => {
    recompute();
  }, [aspectRatio, cropShape, recompute]);

  const getCropData = useCallback((): ImageCropperArea | null => {
    const geometry = geometryRef.current;
    if (!geometry.media || !geometry.cropSize) {
      return null;
    }

    return computeCroppedArea({
      crop: cropRef.current,
      mediaSize: geometry.media,
      cropSize: geometry.cropSize,
      aspect: geometry.aspect,
      zoom: latest.current.zoom,
      rotation: latest.current.rotation,
    }).pixels;
  }, []);

  const getCroppedImage = useCallbackRef((imageOptions?: GetCroppedImageOptions) => {
    const geometry = geometryRef.current;
    const area = getCropData();
    if (!geometry.image || !area) {
      return Promise.reject(new Error('ImageCropper: image is not loaded yet'));
    }

    return rasterizeCroppedImage(
      geometry.image,
      area,
      latest.current.flip,
      cropShape,
      imageOptions
    );
  });

  const commit = useCallback(() => emitCropChange(), [emitCropChange]);

  const _internal = useMemo<ImageCropperInternal>(
    () => ({
      cropRef,
      geometryRef,
      setContainerSize,
      registerImage,
      panBy,
      commit,
    }),
    [commit, panBy, registerImage, setContainerSize]
  );

  const getZoom = useCallback(() => latest.current.zoom, []);
  const getRotation = useCallback(() => latest.current.rotation, []);
  const getFlip = useCallback(() => latest.current.flip, []);
  const getCrop = useCallback(() => cropRef.current, []);
  const getCropSize = useCallback(() => cropSizeRef.current, []);

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
      aspectRatio: cropShape === 'circle' ? 1 : aspectRatio,
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
      _internal,
    }),
    [zoom, rotation, flip, crop, cropSize, aspectRatio, cropShape, minZoom, maxZoom, zoomStep]
  );
}
