import { render, screen, tests } from '@mantine-tests/core';
import { ImageCropper, ImageCropperProps, ImageCropperStylesNames } from './ImageCropper';
import { ImageCropperControls } from './ImageCropperControls';
import { ImageCropperImage } from './ImageCropperImage';
import { ImageCropperViewport } from './ImageCropperViewport';

const src = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

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
    stylesApiSelectors: ['root', 'viewport', 'image', 'overlay', 'grid', 'gridLine', 'controls'],
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

    rerender(<ImageCropper src={src} withControls />);
    expect(container.querySelector('.mantine-ImageCropper-controls')).not.toBeNull();
    expect(screen.getByLabelText('Rotate')).toBeInTheDocument();
    expect(screen.getByLabelText('Flip horizontal')).toBeInTheDocument();
    expect(screen.getByLabelText('Zoom')).toBeInTheDocument();
  });

  it('renders the rule-of-thirds grid only when withGrid is set', () => {
    const { container, rerender } = render(<ImageCropper src={src} />);
    expect(container.querySelector('.mantine-ImageCropper-grid')).toBeNull();

    rerender(<ImageCropper src={src} withGrid />);
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
});
