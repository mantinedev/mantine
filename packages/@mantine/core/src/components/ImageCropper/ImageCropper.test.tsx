import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { ImageCropper, ImageCropperProps, ImageCropperStylesNames } from './ImageCropper';
import { ImageCropperControls } from './ImageCropperControls';
import { ImageCropperImage } from './ImageCropperImage';
import { ImageCropperViewport } from './ImageCropperViewport';
import { fakeImage } from './test-utils';
import {
  useImageCropper,
  UseImageCropperOptions,
  UseImageCropperReturnValue,
} from './use-image-cropper';

function firePointer(node: HTMLElement, type: string, init: MouseEventInit) {
  const event = new MouseEvent(type, { bubbles: true, cancelable: true, ...init });
  Object.defineProperty(event, 'pointerId', { value: 1 });
  fireEvent(node, event);
}

const src = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

function renderWithController(
  options: UseImageCropperOptions = {},
  props: Partial<ImageCropperProps> = {},
  image: HTMLImageElement | null = fakeImage(800, 800)
) {
  const controllerRef: { current: UseImageCropperReturnValue | null } = { current: null };

  function Wrapper(wrapperProps: Partial<ImageCropperProps>) {
    const controller = useImageCropper(options);
    controllerRef.current = controller;
    return <ImageCropper src={src} controller={controller} {...wrapperProps} />;
  }

  const view = render(<Wrapper {...props} />);
  act(() => controllerRef.current!.__internal.setContainerSize({ width: 400, height: 400 }));
  if (image) {
    act(() => controllerRef.current!.__internal.registerImage(image));
  }
  const viewport = view.container.querySelector('.mantine-ImageCropper-viewport') as HTMLElement;
  const img = view.container.querySelector('.mantine-ImageCropper-image') as HTMLImageElement;
  const setProps = (next: Partial<ImageCropperProps>) =>
    view.rerender(
      <>
        <Wrapper {...props} {...next} />
      </>
    );
  return { ...view, controllerRef, viewport, img, setProps };
}

function mockLoadedImages(naturalWidth: number, naturalHeight: number) {
  const spies = [
    jest.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(true),
    jest.spyOn(HTMLImageElement.prototype, 'naturalWidth', 'get').mockReturnValue(naturalWidth),
    jest.spyOn(HTMLImageElement.prototype, 'naturalHeight', 'get').mockReturnValue(naturalHeight),
  ];
  return () => spies.forEach((spy) => spy.mockRestore());
}

const defaultProps: ImageCropperProps = {
  src,
  withControls: true,
  withGrid: true,
};

describe('@mantine/core/ImageCropper', () => {
  tests.itSupportsSystemProps<ImageCropperProps, ImageCropperStylesNames>({
    component: ImageCropper,
    props: defaultProps,
    displayName: '@mantine/core/ImageCropper',
    stylesApiSelectors: [
      'root',
      'viewport',
      'image',
      'overlay',
      'grid',
      'gridLine',
      'controls',
      'zoomSlider',
    ],
  });

  it('exposes compound components as static properties', () => {
    expect(ImageCropper.Viewport).toBe(ImageCropperViewport);
    expect(ImageCropper.Image).toBe(ImageCropperImage);
    expect(ImageCropper.Controls).toBe(ImageCropperControls);
  });

  it('renders the image with the given src', () => {
    const { container } = render(<ImageCropper src={src} />);
    const img = container.querySelector('.mantine-ImageCropper-image') as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(src);
  });

  it('renders default controls only when withControls is set', () => {
    const { container, rerender } = render(<ImageCropper src={src} />);
    expect(container.querySelector('.mantine-ImageCropper-controls')).toBeNull();

    rerender(
      <>
        <ImageCropper src={src} withControls />
      </>
    );
    expect(container.querySelector('.mantine-ImageCropper-controls')).not.toBeNull();
    expect(screen.getByLabelText('Rotate')).toBeInTheDocument();
    expect(screen.getByLabelText('Flip horizontal')).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: 'Zoom' })).toBeInTheDocument();
  });

  it('renders the rule-of-thirds grid only when withGrid is set', () => {
    const { container, rerender } = render(<ImageCropper src={src} />);
    expect(container.querySelector('.mantine-ImageCropper-grid')).toBeNull();

    rerender(
      <>
        <ImageCropper src={src} withGrid />
      </>
    );
    expect(container.querySelector('.mantine-ImageCropper-grid')).not.toBeNull();
    expect(container.querySelectorAll('.mantine-ImageCropper-gridLine')).toHaveLength(4);
  });

  it('sets data-disabled on the root and viewport when disabled', () => {
    const { container } = render(<ImageCropper src={src} disabled />);
    expect(container.querySelector('.mantine-ImageCropper-root')).toHaveAttribute('data-disabled');
    expect(container.querySelector('.mantine-ImageCropper-viewport')).toHaveAttribute(
      'data-disabled'
    );
  });

  it('sets the circle crop shape on the overlay', () => {
    const { container } = render(<ImageCropper src={src} cropShape="circle" />);
    expect(container.querySelector('.mantine-ImageCropper-overlay')).toHaveAttribute(
      'data-shape',
      'circle'
    );
  });

  it('renders custom children instead of the default layout', () => {
    const { container } = render(
      <ImageCropper src={src}>
        <ImageCropper.Viewport>
          <ImageCropper.Image />
        </ImageCropper.Viewport>
      </ImageCropper>
    );
    expect(container.querySelector('.mantine-ImageCropper-controls')).toBeNull();
    expect(container.querySelector('.mantine-ImageCropper-image')).not.toBeNull();
  });
  describe('with measured geometry (jsdom: sizes fed through __internal)', () => {
    it('makes the viewport focusable with an accessible name', () => {
      const { viewport } = renderWithController();
      expect(viewport).toHaveAttribute('tabindex', '0');
      expect(viewport).toHaveAttribute('role', 'group');
      expect(viewport).toHaveAccessibleName('Image cropper');
    });

    it('allows overriding the viewport accessible name', () => {
      render(
        <ImageCropper src={src}>
          <ImageCropper.Viewport aria-label="Avatar cropper">
            <ImageCropper.Image />
          </ImageCropper.Viewport>
        </ImageCropper>
      );
      expect(screen.getByRole('group')).toHaveAccessibleName('Avatar cropper');
    });

    it('removes the viewport from the tab order when disabled', () => {
      const { viewport } = renderWithController({ defaultZoom: 2 }, { disabled: true });
      expect(viewport).not.toHaveAttribute('tabindex');
      expect(viewport).toHaveAttribute('aria-disabled', 'true');
    });

    it('pans with arrow keys, Shift uses a larger step', () => {
      const { viewport, controllerRef } = renderWithController({ defaultZoom: 2 });

      expect(fireEvent.keyDown(viewport, { key: 'ArrowRight' })).toBe(false);
      expect(controllerRef.current!.crop).toEqual({ x: 10, y: 0 });

      fireEvent.keyDown(viewport, { key: 'ArrowLeft', shiftKey: true });
      expect(controllerRef.current!.crop).toEqual({ x: -40, y: 0 });

      fireEvent.keyDown(viewport, { key: 'ArrowUp' });
      fireEvent.keyDown(viewport, { key: 'ArrowDown', shiftKey: true });
      expect(controllerRef.current!.crop).toEqual({ x: -40, y: 40 });
    });

    it('zooms with + / = and - keys by zoomStep', () => {
      const { viewport, controllerRef } = renderWithController({ defaultZoom: 2, zoomStep: 0.5 });

      expect(fireEvent.keyDown(viewport, { key: '+' })).toBe(false);
      expect(controllerRef.current!.zoom).toBe(2.5);

      fireEvent.keyDown(viewport, { key: '=' });
      expect(controllerRef.current!.zoom).toBe(3);

      fireEvent.keyDown(viewport, { key: '-' });
      expect(controllerRef.current!.zoom).toBe(2.5);
    });

    it('produces zoom values without floating point noise', () => {
      const { viewport, controllerRef } = renderWithController();

      fireEvent.keyDown(viewport, { key: '+' });
      fireEvent.keyDown(viewport, { key: '+' });
      expect(controllerRef.current!.zoom).toBe(1.2);

      act(() => controllerRef.current!.zoomBy(0.1));
      act(() => controllerRef.current!.zoomBy(0.1));
      act(() => controllerRef.current!.zoomBy(0.1));
      expect(controllerRef.current!.zoom).toBe(1.5);
    });

    it('does not handle other keys, modifier shortcuts or keys when disabled', () => {
      const { viewport, controllerRef } = renderWithController({ defaultZoom: 2 });
      expect(fireEvent.keyDown(viewport, { key: 'a' })).toBe(true);
      expect(fireEvent.keyDown(viewport, { key: '-', ctrlKey: true })).toBe(true);
      expect(controllerRef.current!.zoom).toBe(2);

      const disabled = renderWithController({ defaultZoom: 2 }, { disabled: true });
      expect(fireEvent.keyDown(disabled.viewport, { key: 'ArrowRight' })).toBe(true);
      expect(disabled.controllerRef.current!.crop).toEqual({ x: 0, y: 0 });
    });

    it('zooms with the wheel proportionally to deltaY and lets the page scroll at the limits', () => {
      const { viewport, controllerRef } = renderWithController({ defaultZoom: 2, maxZoom: 3 });

      expect(fireEvent.wheel(viewport, { deltaY: -100 })).toBe(false);
      expect(controllerRef.current!.zoom).toBeCloseTo(2.1);

      fireEvent.wheel(viewport, { deltaY: -5000 });
      expect(controllerRef.current!.zoom).toBe(3);

      expect(fireEvent.wheel(viewport, { deltaY: -100 })).toBe(true);
      expect(controllerRef.current!.zoom).toBe(3);
    });

    it('calls user pointer handlers alongside the internal ones', () => {
      const onPointerDown = jest.fn();
      const onPointerMove = jest.fn();
      const onPointerUp = jest.fn();
      const onKeyDown = jest.fn();
      const { controllerRef, viewport } = renderWithController(
        { defaultZoom: 2 },
        {
          children: (
            <ImageCropper.Viewport
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onKeyDown={onKeyDown}
            >
              <ImageCropper.Image />
            </ImageCropper.Viewport>
          ),
        }
      );

      firePointer(viewport, 'pointerdown', { button: 0, clientX: 0, clientY: 0 });
      firePointer(viewport, 'pointermove', { clientX: 30, clientY: 20 });
      firePointer(viewport, 'pointerup', {});
      fireEvent.keyDown(viewport, { key: 'ArrowRight' });

      expect(onPointerDown).toHaveBeenCalledTimes(1);
      expect(onPointerMove).toHaveBeenCalledTimes(1);
      expect(onPointerUp).toHaveBeenCalledTimes(1);
      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(controllerRef.current!.crop).toEqual({ x: 40, y: 20 });
    });

    it('sizes the image from the measured media size and hides it until then', () => {
      const { controllerRef, img } = renderWithController({}, {}, null);
      expect(img.style.visibility).toBe('hidden');

      act(() => controllerRef.current!.__internal.registerImage(fakeImage(200, 100)));
      expect(img.style.width).toBe('400px');
      expect(img.style.height).toBe('200px');
      expect(img.style.visibility).toBe('');
    });

    it('registers the image on load and unregisters it on error and src change', () => {
      const { controllerRef, img, setProps } = renderWithController({}, { src: 'a.png' }, null);
      Object.defineProperty(img, 'naturalWidth', { value: 800, configurable: true });
      Object.defineProperty(img, 'naturalHeight', { value: 600, configurable: true });

      fireEvent.load(img);
      expect(controllerRef.current!.getCropData()).not.toBeNull();

      fireEvent.error(img);
      expect(controllerRef.current!.getCropData()).toBeNull();

      fireEvent.load(img);
      expect(controllerRef.current!.getCropData()).not.toBeNull();

      setProps({ src: 'b.png' });
      expect(controllerRef.current!.getCropData()).toBeNull();
    });

    it('applies every wheel event dispatched in the same task', () => {
      const { viewport, controllerRef } = renderWithController();

      act(() => {
        for (let i = 0; i < 3; i += 1) {
          viewport.dispatchEvent(
            new WheelEvent('wheel', { deltaY: -100, bubbles: true, cancelable: true })
          );
        }
      });
      expect(controllerRef.current!.zoom).toBeCloseTo(1.3);
    });

    it('does not loop when the image receives an inline ref in the component that owns the controller', () => {
      const restore = mockLoadedImages(800, 800);
      const ref: { current: UseImageCropperReturnValue | null } = { current: null };
      const received: (HTMLImageElement | null)[] = [];
      let renders = 0;

      function Wrapper() {
        renders += 1;
        const controller = useImageCropper();
        ref.current = controller;
        return (
          <ImageCropper src={src} controller={controller}>
            <ImageCropper.Viewport>
              <ImageCropper.Image ref={(node) => void received.push(node)} />
            </ImageCropper.Viewport>
          </ImageCropper>
        );
      }

      try {
        const { container } = render(<Wrapper />);
        act(() => ref.current!.__internal.setContainerSize({ width: 400, height: 400 }));
        const img = container.querySelector('.mantine-ImageCropper-image') as HTMLImageElement;
        fireEvent.load(img);
        act(() => ref.current!.setZoom(2));
        act(() => ref.current!.rotateBy(90));
        act(() => ref.current!.setCrop({ x: 50, y: 0 }));

        expect(renders).toBeLessThan(15);
        expect(received[0]).toBe(img);
        expect(received[received.length - 1]).toBe(img);
        expect(ref.current!.zoom).toBe(2);
        expect(ref.current!.rotation).toBe(90);
        expect(ref.current!.getCropData()).not.toBeNull();
      } finally {
        restore();
      }
    });

    it('resets a cached replacement image through the onZoomChange of the render that swapped src', () => {
      const restore = mockLoadedImages(800, 800);
      const calls: string[] = [];
      const update: { current: ((next: { src: string; tag: string }) => void) | null } = {
        current: null,
      };

      function Wrapper() {
        const [state, setState] = useState({ src: 'a.png', tag: 'a' });
        update.current = setState;
        const controller = useImageCropper({
          zoom: 3,
          maxZoom: 5,
          onZoomChange: (value) => void calls.push(`${state.tag}:${value}`),
        });
        return <ImageCropper src={state.src} controller={controller} />;
      }

      try {
        render(<Wrapper />);
        act(() => update.current!({ src: 'b.png', tag: 'b' }));
        expect(calls).toEqual(['b:1']);
      } finally {
        restore();
      }
    });

    it('centres a cached replacement image that arrives together with an aspect ratio change', () => {
      const restore = mockLoadedImages(800, 400);
      const onCropChange = jest.fn();
      const ref: { current: UseImageCropperReturnValue | null } = { current: null };
      const update: { current: ((next: { src: string; aspect: number }) => void) | null } = {
        current: null,
      };

      function Wrapper() {
        const [preset, setPreset] = useState({ src: 'a.png', aspect: 1 });
        update.current = setPreset;
        const controller = useImageCropper({
          aspectRatio: preset.aspect,
          maxZoom: 5,
          onCropChange,
        });
        ref.current = controller;
        return <ImageCropper src={preset.src} controller={controller} />;
      }

      try {
        render(<Wrapper />);
        act(() => ref.current!.__internal.setContainerSize({ width: 400, height: 400 }));
        act(() => ref.current!.setZoom(2));
        act(() => ref.current!.setCrop({ x: 1000, y: 1000 }));
        expect(ref.current!.crop).toEqual({ x: 300, y: 100 });
        onCropChange.mockClear();

        act(() => update.current!({ src: 'b.png', aspect: 1.5 }));
        expect(ref.current!.zoom).toBe(1);
        expect(ref.current!.crop).toEqual({ x: 0, y: 0 });
        const centred = { x: 100, y: 0, width: 600, height: 400, rotation: 0 };
        expect(ref.current!.getCropData()).toEqual(centred);
        expect(onCropChange.mock.calls.at(-1)[0].pixels).toEqual(centred);
        expect(
          onCropChange.mock.calls.filter(
            ([data]) => data.pixels.width === 600 && data.pixels.x === 100
          )
        ).toHaveLength(1);
      } finally {
        restore();
      }
    });

    it('centres a cached replacement image when zoom changes in the same handler', () => {
      const restore = mockLoadedImages(800, 400);
      const ref: { current: UseImageCropperReturnValue | null } = { current: null };
      const setSrcRef: { current: ((src: string) => void) | null } = { current: null };

      function Wrapper() {
        const [imageSrc, setSrc] = useState('a.png');
        setSrcRef.current = setSrc;
        const controller = useImageCropper({ aspectRatio: 1, maxZoom: 5 });
        ref.current = controller;
        return <ImageCropper src={imageSrc} controller={controller} />;
      }

      try {
        render(<Wrapper />);
        act(() => ref.current!.__internal.setContainerSize({ width: 400, height: 400 }));
        act(() => ref.current!.setZoom(3));
        act(() => ref.current!.setCrop({ x: 1000, y: 0 }));
        expect(ref.current!.crop).toEqual({ x: 500, y: 0 });

        act(() => {
          setSrcRef.current!('b.png');
          ref.current!.setZoom(1);
        });
        expect(ref.current!.zoom).toBe(1);
        expect(ref.current!.crop).toEqual({ x: 0, y: 0 });
      } finally {
        restore();
      }
    });

    it('keeps the state when the cropper remounts with the same image under a hoisted controller', () => {
      const restore = mockLoadedImages(800, 800);
      const ref: { current: UseImageCropperReturnValue | null } = { current: null };
      const toggle: { current: (() => void) | null } = { current: null };

      function Wrapper() {
        const [visible, setVisible] = useState(true);
        const controller = useImageCropper();
        ref.current = controller;
        toggle.current = () => setVisible((v) => !v);
        return visible ? <ImageCropper src={src} controller={controller} /> : null;
      }

      try {
        render(<Wrapper />);
        act(() => ref.current!.__internal.setContainerSize({ width: 400, height: 400 }));
        expect(ref.current!.getCropData()).not.toBeNull();
        act(() => ref.current!.setZoom(3));
        act(() => ref.current!.setCrop({ x: 100, y: 0 }));
        act(() => ref.current!.flipHorizontal());

        act(() => toggle.current!());
        expect(ref.current!.getCropData()).toBeNull();

        act(() => toggle.current!());
        expect(ref.current!.getCropData()).not.toBeNull();
        expect(ref.current!.zoom).toBe(3);
        expect(ref.current!.crop).toEqual({ x: 100, y: 0 });
        expect(ref.current!.flip).toEqual({ horizontal: true, vertical: false });
      } finally {
        restore();
      }
    });
  });
});
