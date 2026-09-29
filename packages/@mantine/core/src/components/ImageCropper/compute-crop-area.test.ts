import {
  computeCroppedArea,
  getContainedSize,
  getCropSize,
  measureMedia,
  restrictPosition,
  rotateSize,
} from './compute-crop-area';

describe('@mantine/core/ImageCropper/compute-crop-area', () => {
  it('rotateSize returns the axis-aligned bounding box of a rotated rectangle', () => {
    expect(rotateSize(100, 50, 0)).toEqual({ width: 100, height: 50 });

    const rotated = rotateSize(100, 50, 90);
    expect(rotated.width).toBeCloseTo(50);
    expect(rotated.height).toBeCloseTo(100);
  });

  it('getContainedSize scales the media to fit the container preserving the ratio', () => {
    expect(getContainedSize({ width: 200, height: 100 }, { width: 100, height: 100 })).toEqual({
      width: 100,
      height: 50,
    });
  });

  it('getContainedSize returns a zero size when a dimension is missing', () => {
    expect(getContainedSize({ width: 0, height: 100 }, { width: 100, height: 100 })).toEqual({
      width: 0,
      height: 0,
    });
  });

  it('getCropSize derives the crop window from media, container and aspect ratio', () => {
    expect(getCropSize({ width: 100, height: 50 }, { width: 100, height: 100 }, 1)).toEqual({
      width: 50,
      height: 50,
    });
  });

  it('getCropSize fits the crop window into the rotated media bounding box', () => {
    const media = { width: 480, height: 270 };
    const container = { width: 480, height: 270 };
    expect(getCropSize(media, container, 16 / 9, 0)).toEqual({ width: 480, height: 270 });

    const rotated = getCropSize(media, container, 16 / 9, -90);
    expect(rotated.width).toBeCloseTo(270);
    expect(rotated.height).toBeCloseTo(151.875);

    const diagonal = getCropSize({ width: 200, height: 200 }, { width: 400, height: 400 }, 1, 45);
    expect(diagonal.width).toBeCloseTo(282.84, 1);
    expect(diagonal.height).toBeCloseTo(282.84, 1);
  });

  it('measureMedia returns the contained size together with the natural size', () => {
    expect(
      measureMedia({ naturalWidth: 200, naturalHeight: 100 }, { width: 400, height: 400 })
    ).toEqual({ width: 400, height: 200, naturalWidth: 200, naturalHeight: 100 });
    expect(
      measureMedia({ naturalWidth: 200, naturalHeight: 100 }, { width: 0, height: 400 })
    ).toBeNull();
    expect(
      measureMedia({ naturalWidth: 0, naturalHeight: 0 }, { width: 400, height: 400 })
    ).toBeNull();
  });

  it('restrictPosition keeps the crop offset within the image bounds', () => {
    const media = { width: 200, height: 200, naturalWidth: 400, naturalHeight: 400 };
    const cropSize = { width: 100, height: 100 };

    expect(restrictPosition({ x: 1000, y: -1000 }, media, cropSize, 1, 0)).toEqual({
      x: 50,
      y: -50,
    });

    expect(restrictPosition({ x: 10, y: -20 }, media, cropSize, 1, 0)).toEqual({ x: 10, y: -20 });
  });

  it('restrictPosition centers the image when it is smaller than the crop window', () => {
    const media = { width: 100, height: 100, naturalWidth: 100, naturalHeight: 100 };
    const cropSize = { width: 200, height: 200 };

    expect(restrictPosition({ x: 40, y: -40 }, media, cropSize, 1, 0)).toEqual({ x: 0, y: 0 });
  });

  it('computeCroppedArea maps a centered crop window to natural source pixels', () => {
    const { pixels, percent } = computeCroppedArea({
      crop: { x: 0, y: 0 },
      mediaSize: { width: 200, height: 100, naturalWidth: 400, naturalHeight: 200 },
      cropSize: { width: 100, height: 100 },
      aspect: 1,
      zoom: 1,
      rotation: 0,
    });

    expect(pixels).toEqual({ x: 100, y: 0, width: 200, height: 200, rotation: 0 });
    expect(percent.width).toBeCloseTo(50);
    expect(percent.height).toBeCloseTo(100);
  });

  it('computeCroppedArea returns percent values without floating point noise', () => {
    const { percent } = computeCroppedArea({
      crop: { x: 48, y: 72 },
      mediaSize: measureMedia(
        { naturalWidth: 900, naturalHeight: 1125 },
        { width: 120, height: 120 }
      )!,
      cropSize: { width: 96, height: 96 },
      aspect: 1,
      zoom: 2,
      rotation: 0,
    });

    expect(percent).toEqual({ x: 0, y: 0, width: 50, height: 40, rotation: 0 });
  });

  it('computeCroppedArea shifts the crop rectangle when the image is panned', () => {
    const centered = computeCroppedArea({
      crop: { x: 0, y: 0 },
      mediaSize: { width: 200, height: 100, naturalWidth: 400, naturalHeight: 200 },
      cropSize: { width: 100, height: 100 },
      aspect: 1,
      zoom: 1,
      rotation: 0,
    });

    const panned = computeCroppedArea({
      crop: { x: 50, y: 0 },
      mediaSize: { width: 200, height: 100, naturalWidth: 400, naturalHeight: 200 },
      cropSize: { width: 100, height: 100 },
      aspect: 1,
      zoom: 1,
      rotation: 0,
    });

    expect(panned.pixels.x).toBeLessThan(centered.pixels.x);
  });
});
