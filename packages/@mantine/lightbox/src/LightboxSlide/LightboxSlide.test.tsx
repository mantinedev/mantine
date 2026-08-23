import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import type { LightboxSlideData } from '../lightbox.types';
import { LightboxSlide } from './LightboxSlide';
import { LightboxWrapper, testSlides } from '../test-utils';

describe('@mantine/lightbox/LightboxSlide', () => {
  it('renders image slide with correct src and alt', async () => {
    const slide: LightboxSlideData = { src: 'photo.jpg', alt: 'A photo' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'photo.jpg');
    expect(img).toHaveAttribute('alt', 'A photo');
  });

  it('renders image slide with srcSet and sizes', async () => {
    const slide: LightboxSlideData = {
      src: 'photo.jpg',
      alt: 'Photo',
      srcSet: 'photo-2x.jpg 2x',
      sizes: '(max-width: 600px) 100vw, 50vw',
    };
    await renderWithAct(
      <LightboxWrapper slides={[slide]}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    const img = screen.getByRole('img', { name: 'Photo' });
    expect(img).toHaveAttribute('srcset', 'photo-2x.jpg 2x');
    expect(img).toHaveAttribute('sizes', '(max-width: 600px) 100vw, 50vw');
  });

  it('renders video slide with video element', async () => {
    const slide: LightboxSlideData = { type: 'video', src: 'video.mp4', poster: 'poster.jpg' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    const video = document.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', 'video.mp4');
    expect(video).toHaveAttribute('poster', 'poster.jpg');
    expect(video).toHaveAttribute('controls');
  });

  it('renders custom slide with render function', async () => {
    const slide: LightboxSlideData = {
      type: 'custom',
      render: ({ active }) => <div data-testid="custom">{active ? 'yes' : 'no'}</div>,
    };
    await renderWithAct(
      <LightboxWrapper slides={[slide]} currentIndex={0}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    expect(screen.getByTestId('custom')).toHaveTextContent('yes');
  });

  it('passes active=false to custom render when not current slide', async () => {
    const slides: LightboxSlideData[] = [
      { src: 'first.jpg' },
      {
        type: 'custom',
        render: ({ active }) => <div data-testid="custom">{active ? 'yes' : 'no'}</div>,
      },
    ];
    await renderWithAct(
      <LightboxWrapper slides={slides} currentIndex={0}>
        <LightboxSlide slide={slides[1]} index={1} />
      </LightboxWrapper>
    );
    expect(screen.getByTestId('custom')).toHaveTextContent('no');
  });

  it('has correct aria attributes', async () => {
    const slides: LightboxSlideData[] = [{ src: 'a.jpg' }, { src: 'b.jpg' }];
    await renderWithAct(
      <LightboxWrapper slides={slides}>
        <LightboxSlide slide={slides[0]} index={0} />
        <LightboxSlide slide={slides[1]} index={1} />
      </LightboxWrapper>
    );
    expect(screen.getByLabelText('Slide 1 of 2')).toHaveAttribute('aria-roledescription', 'slide');
    expect(screen.getByLabelText('Slide 2 of 2')).toHaveAttribute('aria-roledescription', 'slide');
  });

  it('sets data-zoom-enabled on active image when withZoom is true', async () => {
    const slide: LightboxSlideData = { src: 'photo.jpg', alt: 'Photo' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]} currentIndex={0} withZoom>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    expect(screen.getByRole('img')).toHaveAttribute('data-zoom-enabled');
  });

  it('does not set data-zoom-enabled on inactive image when withZoom is true', async () => {
    const slides: LightboxSlideData[] = [
      { src: 'a.jpg', alt: 'A' },
      { src: 'b.jpg', alt: 'B' },
    ];
    await renderWithAct(
      <LightboxWrapper slides={slides} currentIndex={0} withZoom>
        <LightboxSlide slide={slides[1]} index={1} />
      </LightboxWrapper>
    );
    expect(screen.getByRole('img')).not.toHaveAttribute('data-zoom-enabled');
  });

  it('toggles zoom on double-click', async () => {
    const slide: LightboxSlideData = { src: 'photo.jpg', alt: 'Photo' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]} currentIndex={0} withZoom>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    const img = screen.getByRole('img');
    expect(img).not.toHaveAttribute('data-zoomed');

    await userEvent.dblClick(img);
    expect(img).toHaveAttribute('data-zoomed');

    await userEvent.dblClick(img);
    expect(img).not.toHaveAttribute('data-zoomed');
  });

  it('toggles zoom with Z shortcut', async () => {
    const slide: LightboxSlideData = { src: 'photo.jpg', alt: 'Photo' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]} currentIndex={0} withZoom>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );
    const img = screen.getByRole('img');

    await userEvent.keyboard('z');
    expect(img).toHaveAttribute('data-zoomed');

    await userEvent.keyboard('z');
    expect(img).not.toHaveAttribute('data-zoomed');
  });

  it('renders video slide tracks and label', async () => {
    const slide: LightboxSlideData = {
      type: 'video',
      src: 'video.mp4',
      label: 'Demo video',
      tracks: [{ src: 'captions.vtt', kind: 'captions', srcLang: 'en', label: 'English' }],
    };
    await renderWithAct(
      <LightboxWrapper slides={[slide]}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );

    const video = document.querySelector('video');
    expect(video).toHaveAttribute('aria-label', 'Demo video');
    const track = document.querySelector('track');
    expect(track).toHaveAttribute('src', 'captions.vtt');
    expect(track).toHaveAttribute('kind', 'captions');
    expect(track).toHaveAttribute('srclang', 'en');
  });

  it('sets inert attribute on inactive slides only', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={1}>
        {testSlides.map((slide, index) => (
          <LightboxSlide key={index} slide={slide} index={index} data-testid={`slide-${index}`} />
        ))}
      </LightboxWrapper>
    );

    expect(screen.getByTestId('slide-0')).toHaveAttribute('inert');
    expect(screen.getByTestId('slide-1')).not.toHaveAttribute('inert');
    expect(screen.getByTestId('slide-2')).toHaveAttribute('inert');
  });

  it('loads the active image eagerly and inactive images lazily', async () => {
    await renderWithAct(
      <LightboxWrapper currentIndex={1}>
        {testSlides.map((slide, index) => (
          <LightboxSlide key={index} slide={slide} index={index} />
        ))}
      </LightboxWrapper>
    );

    expect(screen.getByRole('img', { name: 'First image' })).toHaveAttribute('loading', 'lazy');
    expect(screen.getByRole('img', { name: 'Second image' })).toHaveAttribute('loading', 'eager');
    expect(screen.getByRole('img', { name: 'Third image' })).toHaveAttribute('loading', 'lazy');
  });

  it('allows overriding loading attribute per slide', async () => {
    const slide: LightboxSlideData = { src: 'photo.jpg', alt: 'Photo', loading: 'lazy' };
    await renderWithAct(
      <LightboxWrapper slides={[slide]} currentIndex={0}>
        <LightboxSlide slide={slide} index={0} />
      </LightboxWrapper>
    );

    expect(screen.getByRole('img', { name: 'Photo' })).toHaveAttribute('loading', 'lazy');
  });
});
