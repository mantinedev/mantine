import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { useImageCropper } from './use-image-cropper';

describe('@mantine/core/useImageCropper', () => {
  tests.itSupportsControllerMemoization({
    hook: () => useImageCropper(),
    actions: [
      'setZoom',
      'zoomBy',
      'setRotation',
      'rotateBy',
      'flipHorizontal',
      'flipVertical',
      'setCrop',
      'reset',
      'getCropData',
      'getCroppedImage',
      'getZoom',
      'getRotation',
      'getFlip',
      'getCrop',
      'getCropSize',
    ],
    changeState: (controller) => controller.setZoom(2),
  });

  it('returns current state from getters', () => {
    const hook = renderHook(() => useImageCropper());
    expect(hook.result.current.getZoom()).toBe(hook.result.current.zoom);
    expect(hook.result.current.getRotation()).toBe(0);
    expect(hook.result.current.getFlip()).toEqual(hook.result.current.flip);
    expect(hook.result.current.getCrop()).toEqual({ x: 0, y: 0 });
    expect(hook.result.current.getCropSize()).toBe(null);

    act(() => hook.result.current.setZoom(2));
    act(() => hook.result.current.setRotation(90));
    act(() => hook.result.current.flipHorizontal());
    expect(hook.result.current.getZoom()).toBe(2);
    expect(hook.result.current.getRotation()).toBe(90);
    expect(hook.result.current.getFlip().horizontal).toBe(true);
  });

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

    // Controlled: value follows the prop, not the internal call
    expect(result.current.zoom).toBe(1);
    rerender({ zoom: 2 });
    expect(result.current.zoom).toBe(2);
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

  it('reads the current min/max zoom bounds after the options change', () => {
    const { result, rerender } = renderHook(
      ({ maxZoom }: { maxZoom: number }) => useImageCropper({ maxZoom }),
      { initialProps: { maxZoom: 3 } }
    );

    const { setZoom } = result.current;
    rerender({ maxZoom: 6 });

    act(() => setZoom(10));
    expect(result.current.zoom).toBe(6);
  });

  it('keeps getCroppedImage identity when options change', () => {
    const { result, rerender } = renderHook<
      ReturnType<typeof useImageCropper>,
      { cropShape: 'rectangle' | 'circle' }
    >(({ cropShape }) => useImageCropper({ cropShape }), {
      initialProps: { cropShape: 'rectangle' },
    });

    const { getCroppedImage } = result.current;
    rerender({ cropShape: 'circle' });

    expect(result.current.getCroppedImage).toBe(getCroppedImage);
  });
});
