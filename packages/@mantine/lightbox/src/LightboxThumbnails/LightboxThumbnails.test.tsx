import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import type { LightboxSlideData } from '../lightbox.types';
import { LightboxThumbnails } from './LightboxThumbnails';
import { LightboxWrapper } from '../test-utils';

describe('@mantine/lightbox/LightboxThumbnails', () => {
  it('renders thumbnails when withThumbnails is true', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument();
  });

  it('does not render when withThumbnails is false', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails={false}>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
  });

  it('marks active thumbnail with data-active', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails currentIndex={1}>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Go to slide 1')).not.toHaveAttribute('data-active');
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('data-active');
    expect(screen.getByLabelText('Go to slide 3')).not.toHaveAttribute('data-active');
  });

  it('sets aria-current on active thumbnail', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails currentIndex={0}>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Go to slide 2')).not.toHaveAttribute('aria-current');
  });

  it('changes current slide when thumbnail is clicked', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(
      <LightboxWrapper withThumbnails onIndexChange={onIndexChange}>
        <LightboxThumbnails />
      </LightboxWrapper>
    );

    await userEvent.click(screen.getByLabelText('Go to slide 2'));
    expect(onIndexChange).toHaveBeenCalledWith(1);
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('data-active');
  });

  it('renders thumbnail images with thumbSrc', async () => {
    await renderWithAct(
      <LightboxWrapper withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    const images = document.querySelectorAll('.mantine-Lightbox-thumbnailImage');
    expect(images[0]).toHaveAttribute('src', 'thumb1.jpg');
    expect(images[1]).toHaveAttribute('src', 'thumb2.jpg');
  });

  it('falls back to slide src when thumbSrc is not provided', async () => {
    const slides: LightboxSlideData[] = [{ src: 'fullsize.jpg' }];
    await renderWithAct(
      <LightboxWrapper slides={slides} withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    const img = document.querySelector('.mantine-Lightbox-thumbnailImage');
    expect(img).toHaveAttribute('src', 'fullsize.jpg');
  });

  it('uses poster as thumbnail for video slides without thumbSrc', async () => {
    const slides: LightboxSlideData[] = [{ type: 'video', src: 'vid.mp4', poster: 'poster.jpg' }];
    await renderWithAct(
      <LightboxWrapper slides={slides} withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    const img = document.querySelector('.mantine-Lightbox-thumbnailImage');
    expect(img).toHaveAttribute('src', 'poster.jpg');
  });

  it('renders custom thumbnail via renderThumb for custom slides', async () => {
    const slides: LightboxSlideData[] = [
      {
        type: 'custom',
        render: () => <div>Content</div>,
        renderThumb: () => <span data-testid="custom-thumb">Custom</span>,
      },
    ];
    await renderWithAct(
      <LightboxWrapper slides={slides} withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByTestId('custom-thumb')).toBeInTheDocument();
  });

  it('renders no image for custom slides without thumbSrc or renderThumb', async () => {
    const slides: LightboxSlideData[] = [{ type: 'custom', render: () => <div>Content</div> }];
    await renderWithAct(
      <LightboxWrapper slides={slides} withThumbnails>
        <LightboxThumbnails />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();
    expect(document.querySelector('.mantine-Lightbox-thumbnailImage')).not.toBeInTheDocument();
  });
});
