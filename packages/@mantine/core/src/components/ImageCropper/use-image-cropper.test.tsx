import { act, renderHook } from '@testing-library/react';
import { fakeImage } from './test-utils';
import { useImageCropper, UseImageCropperOptions } from './use-image-cropper';

function setup(options: UseImageCropperOptions = {}) {
  return renderHook((props: UseImageCropperOptions) => useImageCropper(props), {
    initialProps: options,
  });
}

function load(
  result: { current: ReturnType<typeof useImageCropper> },
  image: HTMLImageElement,
  container = { width: 480, height: 270 }
) {
  act(() => result.current.__internal.setContainerSize(container));
  act(() => result.current.__internal.registerImage(image));
}

describe('@mantine/core/useImageCropper', () => {
  it('returns the initial state', () => {
    const { result } = renderHook(() => useImageCropper());
    expect(result.current.zoom).toBe(1);
    expect(result.current.rotation).toBe(0);
    expect(result.current.flip).toEqual({ horizontal: false, vertical: false });
    expect(result.current.crop).toEqual({ x: 0, y: 0 });
    expect(result.current.cropSize).toBeNull();
    expect(result.current.getCropData()).toBeNull();
  });

  it('clamps zoom to the min/max bounds', () => {
    const { result } = renderHook(() => useImageCropper({ minZoom: 0.5, maxZoom: 3 }));

    act(() => result.current.setZoom(10));
    expect(result.current.zoom).toBe(3);

    act(() => result.current.setZoom(0.1));
    expect(result.current.zoom).toBe(0.5);
  });

  it('changes zoom by a delta with zoomBy', () => {
    const { result } = renderHook(() => useImageCropper({ maxZoom: 5 }));
    act(() => result.current.zoomBy(0.5));
    expect(result.current.zoom).toBe(1.5);
  });

  it('sets and increments rotation', () => {
    const { result } = renderHook(() => useImageCropper());

    act(() => result.current.setRotation(45));
    expect(result.current.rotation).toBe(45);

    act(() => result.current.rotateBy(90));
    expect(result.current.rotation).toBe(135);
  });

  it('toggles flip on both axes', () => {
    const { result } = renderHook(() => useImageCropper());

    act(() => result.current.flipHorizontal());
    expect(result.current.flip).toEqual({ horizontal: true, vertical: false });

    act(() => result.current.flipVertical());
    expect(result.current.flip).toEqual({ horizontal: true, vertical: true });

    act(() => result.current.flipHorizontal());
    expect(result.current.flip).toEqual({ horizontal: false, vertical: true });
  });

  it('resets zoom, rotation, flip and crop', () => {
    const { result } = renderHook(() => useImageCropper({ maxZoom: 5 }));

    act(() => {
      result.current.setZoom(3);
      result.current.setRotation(90);
      result.current.flipHorizontal();
    });

    act(() => result.current.reset());
    expect(result.current.zoom).toBe(1);
    expect(result.current.rotation).toBe(0);
    expect(result.current.flip).toEqual({ horizontal: false, vertical: false });
    expect(result.current.crop).toEqual({ x: 0, y: 0 });
  });

  it('resets to the configured initial values', () => {
    const { result } = renderHook(() =>
      useImageCropper({
        defaultZoom: 2,
        defaultRotation: 90,
        defaultFlip: { horizontal: true },
        maxZoom: 5,
      })
    );

    act(() => {
      result.current.setZoom(3);
      result.current.setRotation(45);
      result.current.flipVertical();
    });

    act(() => result.current.reset());
    expect(result.current.zoom).toBe(2);
    expect(result.current.rotation).toBe(90);
    expect(result.current.flip).toEqual({ horizontal: true, vertical: false });
  });

  it('supports controlled zoom with onZoomChange', () => {
    const onZoomChange = jest.fn();
    const { result, rerender } = renderHook(
      ({ zoom }) => useImageCropper({ zoom, maxZoom: 5, onZoomChange }),
      { initialProps: { zoom: 1 } }
    );

    act(() => result.current.setZoom(2));
    expect(onZoomChange).toHaveBeenLastCalledWith(2);

    expect(result.current.zoom).toBe(1);
    rerender({ zoom: 2 });
    expect(result.current.zoom).toBe(2);
  });

  it('ignores non-finite zoom and rotation values', () => {
    const { result } = setup();
    load(result, fakeImage(800, 800), { width: 400, height: 400 });

    act(() => result.current.setZoom(NaN));
    act(() => result.current.setRotation(Number.POSITIVE_INFINITY));

    expect(result.current.zoom).toBe(1);
    expect(result.current.rotation).toBe(0);
    expect(result.current.crop).toEqual({ x: 0, y: 0 });
  });

  it('does not loop when a controlled zoom is NaN', () => {
    const { result } = renderHook(() => useImageCropper({ zoom: NaN }));
    load(result, fakeImage(800, 800), { width: 400, height: 400 });
    expect(Number.isNaN(result.current.zoom)).toBe(true);
  });

  it('calls onFlipChange with the resolved flip value', () => {
    const onFlipChange = jest.fn();
    const { result } = renderHook(() => useImageCropper({ onFlipChange }));

    act(() => result.current.flipHorizontal());
    expect(onFlipChange).toHaveBeenLastCalledWith({ horizontal: true, vertical: false });
  });

  it('enforces a square aspect ratio for the circle crop shape', () => {
    const { result } = renderHook(() => useImageCropper({ cropShape: 'circle', aspectRatio: 2 }));
    expect(result.current.cropShape).toBe('circle');
    expect(result.current.aspectRatio).toBe(1);
  });

  it('rejects getCroppedImage when the image is not loaded', async () => {
    const { result } = renderHook(() => useImageCropper());
    await expect(result.current.getCroppedImage()).rejects.toThrow(/not loaded/);
  });
  describe('internal wiring (jsdom has no layout or image decoding, sizes are fed through __internal)', () => {
    it('computes the crop window and crop data once the image and viewport are measured', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ aspectRatio: 16 / 9, onCropChange });
      expect(result.current.cropSize).toBeNull();

      load(result, fakeImage(1920, 1080));
      expect(result.current.__internal.mediaSize).toEqual({ width: 480, height: 270 });
      expect(result.current.cropSize).toEqual({ width: 480, height: 270 });
      expect(result.current.getCropData()).toEqual({
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
        rotation: 0,
      });
      expect(onCropChange).toHaveBeenCalledTimes(1);
    });

    it('scales images smaller than the viewport up to the contained size', () => {
      const { result } = setup();
      load(result, fakeImage(200, 100), { width: 400, height: 400 });
      expect(result.current.__internal.mediaSize).toEqual({ width: 400, height: 200 });
      expect(result.current.cropSize).toEqual({ width: 200, height: 200 });
      expect(result.current.getCropData()).toEqual({
        x: 50,
        y: 0,
        width: 100,
        height: 100,
        rotation: 0,
      });
    });

    it('fits the crop window into the rotated image when rotation changes', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ aspectRatio: 16 / 9, onCropChange });
      load(result, fakeImage(1920, 1080));
      onCropChange.mockClear();

      act(() => result.current.setRotation(-90));
      expect(result.current.cropSize!.width).toBeCloseTo(270);
      expect(result.current.cropSize!.height).toBeCloseTo(151.875);

      const data = result.current.getCropData()!;
      expect(data.width).toBe(1080);
      expect(data.height).toBe(608);
      expect(data.x).toBe(0);
      expect(data.rotation).toBe(-90);
      expect(onCropChange).toHaveBeenCalledTimes(1);
      expect(onCropChange.mock.calls[0][0].pixels).toEqual(data);
    });

    it('recomputes the crop window when aspectRatio changes', () => {
      const onCropChange = jest.fn();
      const { result, rerender } = setup({ onCropChange });
      load(result, fakeImage(1920, 1080));
      expect(result.current.cropSize).toEqual({ width: 480, height: 270 });
      onCropChange.mockClear();

      rerender({ aspectRatio: 1, onCropChange });
      expect(result.current.cropSize).toEqual({ width: 270, height: 270 });
      expect(onCropChange).toHaveBeenCalledTimes(1);
      expect(onCropChange.mock.calls[0][0].pixels).toEqual(
        expect.objectContaining({ width: 1080, height: 1080 })
      );
    });

    it('clamps setCrop to keep the crop window covered by the image', () => {
      const { result } = setup({ aspectRatio: 16 / 9 });
      load(result, fakeImage(1920, 1080));

      act(() => result.current.setCrop({ x: 100, y: 100 }));
      expect(result.current.crop).toEqual({ x: 0, y: 0 });

      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 1000, y: -1000 }));
      expect(result.current.crop).toEqual({ x: 240, y: -135 });
    });

    it('re-clamps the crop offset when zoom decreases', () => {
      const { result } = setup({ aspectRatio: 16 / 9 });
      load(result, fakeImage(1920, 1080));
      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 240, y: 0 }));

      act(() => result.current.setZoom(1.5));
      expect(result.current.crop).toEqual({ x: 120, y: 0 });
    });

    it('emits onCropChange on every pan update', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ aspectRatio: 16 / 9, onCropChange, defaultZoom: 2 });
      load(result, fakeImage(1920, 1080));
      onCropChange.mockClear();

      act(() => result.current.__internal.panBy(10, 0));
      act(() => result.current.__internal.panBy(10, 0));
      expect(onCropChange).toHaveBeenCalledTimes(2);
      expect(result.current.crop).toEqual({ x: 20, y: 0 });
    });

    it('emits onCropChange once on reset and not on flip', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ aspectRatio: 16 / 9, onCropChange });
      load(result, fakeImage(1920, 1080));
      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 50, y: 20 }));
      onCropChange.mockClear();

      act(() => result.current.flipHorizontal());
      expect(onCropChange).not.toHaveBeenCalled();

      act(() => result.current.reset());
      expect(onCropChange).toHaveBeenCalledTimes(1);
      expect(result.current.crop).toEqual({ x: 0, y: 0 });
    });

    it('keeps the selected region when the viewport shrinks and grows back', () => {
      const { result } = setup();
      load(result, fakeImage(900, 1125), { width: 320, height: 320 });
      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 100, y: 150 }));
      const before = result.current.getCropData();

      act(() => result.current.__internal.setContainerSize({ width: 120, height: 120 }));
      const shrunk = result.current.getCropData()!;
      expect(Math.abs(shrunk.x - before!.x)).toBeLessThanOrEqual(1);
      expect(Math.abs(shrunk.y - before!.y)).toBeLessThanOrEqual(1);

      act(() => result.current.__internal.setContainerSize({ width: 320, height: 320 }));
      expect(result.current.getCropData()).toEqual(before);
    });

    it('keeps the re-clamped offset when zoom goes back up', () => {
      const { result } = setup({ aspectRatio: 1 });
      load(result, fakeImage(800, 800), { width: 400, height: 400 });
      act(() => result.current.setZoom(1.3));
      act(() => result.current.setCrop({ x: 1000, y: 1000 }));
      expect(result.current.crop.y).toBeCloseTo(60);

      act(() => result.current.setZoom(1.1));
      expect(result.current.crop.y).toBeCloseTo(20);

      act(() => result.current.setZoom(1.3));
      expect(result.current.crop.y).toBeCloseTo(20);
    });

    it('does not emit onCropChange when the viewport returns to its size at the pan limit', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ onCropChange });
      load(result, fakeImage(900, 1125), { width: 320, height: 320 });
      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 1000, y: 1000 }));
      const before = result.current.getCropData();
      onCropChange.mockClear();

      act(() => result.current.__internal.setContainerSize({ width: 120, height: 120 }));
      act(() => result.current.__internal.setContainerSize({ width: 320, height: 320 }));
      act(() => result.current.__internal.setContainerSize({ width: 120, height: 120 }));
      act(() => result.current.__internal.setContainerSize({ width: 320, height: 320 }));
      expect(onCropChange).not.toHaveBeenCalled();
      expect(result.current.getCropData()).toEqual(before);
    });

    it('does not emit onCropChange again when the same image is registered after being unregistered', () => {
      const onCropChange = jest.fn();
      const image = fakeImage(800, 800);
      const { result } = setup({ onCropChange });
      act(() => result.current.__internal.setContainerSize({ width: 400, height: 400 }));

      act(() => result.current.__internal.registerImage(image));
      expect(onCropChange).toHaveBeenCalledTimes(1);

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.registerImage(image));
      expect(onCropChange).toHaveBeenCalledTimes(1);

      act(() => result.current.__internal.registerImage(fakeImage(1600, 800)));
      expect(onCropChange).toHaveBeenCalledTimes(2);
    });

    it('emits onCropChange for a new image with the same rectangle as the previous one', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ onCropChange });
      act(() => result.current.__internal.setContainerSize({ width: 400, height: 400 }));

      act(() => result.current.__internal.registerImage(fakeImage(800, 600, 'a.png')));
      expect(onCropChange).toHaveBeenCalledTimes(1);

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.registerImage(fakeImage(800, 600, 'b.png')));
      expect(onCropChange).toHaveBeenCalledTimes(2);
      expect(onCropChange.mock.calls[1][0].pixels).toEqual(onCropChange.mock.calls[0][0].pixels);
    });

    it('rescales the pan offset when the viewport changed while the image was unregistered', () => {
      const image = fakeImage(800, 800);
      const { result } = setup({ aspectRatio: 1 });
      load(result, image, { width: 400, height: 400 });

      act(() => result.current.setZoom(2));
      act(() => result.current.setCrop({ x: 100, y: 0 }));
      expect(result.current.getCropData()!.x).toBe(100);

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.setContainerSize({ width: 200, height: 200 }));
      act(() => result.current.__internal.registerImage(image));

      expect(result.current.crop).toEqual({ x: 50, y: 0 });
      expect(result.current.getCropData()!.x).toBe(100);
    });

    it('scales wheel zoom with deltaY and snaps to min/max', () => {
      const { result } = setup({ maxZoom: 5 });
      load(result, fakeImage(1920, 1080));

      for (let i = 0; i < 40; i += 1) {
        act(() => {
          result.current.__internal.wheelZoom(-1);
        });
      }
      expect(result.current.zoom).toBeCloseTo(1.04, 5);

      let changed = false;
      act(() => {
        changed = result.current.__internal.wheelZoom(-10000);
      });
      expect(changed).toBe(true);
      expect(result.current.zoom).toBe(5);

      act(() => {
        changed = result.current.__internal.wheelZoom(-100);
      });
      expect(changed).toBe(false);

      act(() => {
        changed = result.current.__internal.wheelZoom(10000);
      });
      expect(changed).toBe(true);
      expect(result.current.zoom).toBe(1);
    });

    it('resyncs zoom with the controlled value on the next render after a rejected change', () => {
      const onZoomChange = jest.fn();
      const { result, rerender } = setup({ zoom: 1, maxZoom: 5, onZoomChange });

      act(() => result.current.setZoom(2));
      expect(onZoomChange).toHaveBeenLastCalledWith(2);

      rerender({ zoom: 1, maxZoom: 5, onZoomChange });
      act(() => result.current.zoomBy(0.5));
      expect(onZoomChange).toHaveBeenLastCalledWith(1.5);
    });

    it('chains flips called in the same handler', () => {
      const { result } = setup();
      load(result, fakeImage(800, 800), { width: 400, height: 400 });

      act(() => {
        result.current.flipHorizontal();
        result.current.flipVertical();
      });
      expect(result.current.flip).toEqual({ horizontal: true, vertical: true });
    });

    it('clamps setCrop with the zoom set earlier in the same handler', () => {
      const { result } = setup();
      load(result, fakeImage(800, 800), { width: 400, height: 400 });

      act(() => {
        result.current.setZoom(3);
        result.current.setCrop({ x: 100, y: 50 });
      });
      expect(result.current.zoom).toBe(3);
      expect(result.current.crop).toEqual({ x: 100, y: 50 });
    });

    it('accumulates zoomBy and rotateBy called in the same handler', () => {
      const { result } = setup();
      load(result, fakeImage(800, 800), { width: 400, height: 400 });

      act(() => {
        result.current.zoomBy(0.5);
        result.current.zoomBy(0.5);
        result.current.rotateBy(90);
        result.current.rotateBy(90);
      });
      expect(result.current.zoom).toBe(2);
      expect(result.current.rotation).toBe(180);
    });

    it('returns crop data for changes made earlier in the same handler', () => {
      const { result } = setup();
      load(result, fakeImage(800, 800), { width: 400, height: 400 });

      let area: ReturnType<typeof result.current.getCropData> = null;
      act(() => {
        result.current.setZoom(2);
        result.current.setCrop({ x: 100, y: 0 });
        area = result.current.getCropData();
      });
      expect(area).toEqual({ x: 100, y: 200, width: 400, height: 400, rotation: 0 });
      expect(result.current.getCropData()).toEqual(area);
    });

    it('exports the crop and flip set earlier in the same handler', async () => {
      const image = fakeImage(800, 800);
      const { result } = setup();
      load(result, image, { width: 400, height: 400 });

      const drawImage = jest.fn();
      const getContext = jest.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(
        () =>
          ({
            translate: jest.fn(),
            rotate: jest.fn(),
            scale: jest.fn(),
            drawImage,
          }) as any
      );
      const toDataURL = jest
        .spyOn(HTMLCanvasElement.prototype, 'toDataURL')
        .mockImplementation(function toDataURLStub(this: HTMLCanvasElement) {
          return `${this.width}x${this.height}`;
        });

      let promise: Promise<Blob | string> | undefined;
      act(() => {
        result.current.setZoom(2);
        promise = result.current.getCroppedImage({ output: 'dataURL' });
      });
      await expect(promise).resolves.toBe('400x400');

      getContext.mockRestore();
      toDataURL.mockRestore();
    });

    it('does not reset a zoom set after the new-image reset', () => {
      const { result } = setup();
      load(result, fakeImage(800, 800, 'a.png'), { width: 400, height: 400 });
      act(() => result.current.__internal.registerImage(fakeImage(800, 800, 'b.png')));

      act(() => result.current.setZoom(2));
      expect(result.current.zoom).toBe(2);
    });

    it('emits onCropChange once with the reset rectangle when a new image is registered', () => {
      const onCropChange = jest.fn();
      const { result } = setup({ onCropChange });
      load(result, fakeImage(800, 800, 'a.png'), { width: 400, height: 400 });
      act(() => result.current.setZoom(3));
      act(() => result.current.setCrop({ x: 100, y: 0 }));
      onCropChange.mockClear();

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.registerImage(fakeImage(800, 800, 'b.png')));
      expect(onCropChange).toHaveBeenCalledTimes(1);
      expect(onCropChange.mock.calls[0][0].pixels).toEqual({
        x: 0,
        y: 0,
        width: 800,
        height: 800,
        rotation: 0,
      });
      expect(result.current.zoom).toBe(1);
      expect(result.current.rotation).toBe(0);
      expect(result.current.flip).toEqual({ horizontal: false, vertical: false });
      expect(result.current.crop).toEqual({ x: 0, y: 0 });
    });

    it('does not update state when the same image is registered twice', () => {
      const image = fakeImage(800, 800);
      let renders = 0;
      const { result } = renderHook(() => {
        renders += 1;
        return useImageCropper();
      });
      load(result, image, { width: 400, height: 400 });
      const before = renders;

      act(() => result.current.__internal.registerImage(image));
      act(() => result.current.__internal.registerImage(fakeImage(800, 800)));
      expect(renders).toBe(before);
    });

    it('resets zoom, rotation, flip and offset when a new image is registered', () => {
      const { result } = setup({ aspectRatio: 16 / 9 });
      load(result, fakeImage(1920, 1080, 'a.png'));
      act(() => {
        result.current.setZoom(3);
        result.current.setRotation(90);
        result.current.flipVertical();
      });
      act(() => result.current.setCrop({ x: 30, y: 10 }));
      expect(result.current.crop).not.toEqual({ x: 0, y: 0 });

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.registerImage(fakeImage(800, 600, 'b.png')));
      expect(result.current.zoom).toBe(1);
      expect(result.current.rotation).toBe(0);
      expect(result.current.flip).toEqual({ horizontal: false, vertical: false });
      expect(result.current.crop).toEqual({ x: 0, y: 0 });
    });

    it('keeps the state when the same image is registered again', () => {
      const image = fakeImage(1920, 1080);
      const { result } = setup({ aspectRatio: 16 / 9 });
      load(result, image);
      act(() => result.current.setZoom(3));

      act(() => result.current.__internal.registerImage(null));
      act(() => result.current.__internal.registerImage(image));
      expect(result.current.zoom).toBe(3);
    });

    it('resets controlled values through their onChange handlers on a new image', () => {
      const onZoomChange = jest.fn();
      const { result } = setup({ zoom: 3, maxZoom: 5, onZoomChange });
      load(result, fakeImage(1920, 1080, 'a.png'));
      expect(onZoomChange).not.toHaveBeenCalled();

      act(() => result.current.__internal.registerImage(fakeImage(800, 600, 'b.png')));
      expect(onZoomChange).toHaveBeenLastCalledWith(1);
    });

    it('returns null crop data and rejects the export after the image is unregistered', async () => {
      const { result } = setup();
      load(result, fakeImage(1920, 1080));
      expect(result.current.getCropData()).not.toBeNull();

      act(() => result.current.__internal.registerImage(null));
      expect(result.current.getCropData()).toBeNull();
      expect(result.current.cropSize).toBeNull();
      await expect(result.current.getCroppedImage()).rejects.toThrow(/not loaded/);
    });
  });
});
