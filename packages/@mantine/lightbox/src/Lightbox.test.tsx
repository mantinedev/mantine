import { act, waitFor } from '@testing-library/react';
import { render, renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { Lightbox, LightboxProps } from './Lightbox';
import { lightbox, lightboxStore } from './lightbox.store';
import type { LightboxSlideData } from './lightbox.types';
import { LightboxCaption } from './LightboxCaption/LightboxCaption';
import { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton';
import { LightboxNavigation } from './LightboxNavigation/LightboxNavigation';
import { LightboxSlide } from './LightboxSlide/LightboxSlide';
import { LightboxSlides } from './LightboxSlides/LightboxSlides';
import { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar/LightboxToolbar';
import { LightboxRoot } from './LightboxRoot/LightboxRoot';

const slides: LightboxSlideData[] = [
  { src: 'image1.jpg', alt: 'First image', caption: 'Caption 1' },
  { src: 'image2.jpg', alt: 'Second image', caption: 'Caption 2' },
  { src: 'image3.jpg', alt: 'Third image' },
];

const defaultProps: LightboxProps = {
  opened: true,
  onClose: jest.fn(),
  slides,
};

function getLightbox() {
  return screen.getByRole('dialog');
}

describe('@mantine/lightbox/Lightbox', () => {
  afterEach(async () => {
    await act(async () => {
      lightboxStore.setState({ opened: false, slides: [], currentIndex: 0 });
    });
  });

  it('has correct displayName', () => {
    expect(Lightbox.displayName).toBe('@mantine/lightbox/Lightbox');
  });

  it('exposes static components and store actions', () => {
    expect(Lightbox.Root).toBe(LightboxRoot);
    expect(Lightbox.Toolbar).toBe(LightboxToolbar);
    expect(Lightbox.Slides).toBe(LightboxSlides);
    expect(Lightbox.Slide).toBe(LightboxSlide);
    expect(Lightbox.Thumbnails).toBe(LightboxThumbnails);
    expect(Lightbox.Navigation).toBe(LightboxNavigation);
    expect(Lightbox.Caption).toBe(LightboxCaption);
    expect(Lightbox.CloseButton).toBe(LightboxCloseButton);
    expect(Lightbox.open).toBe(lightbox.open);
    expect(Lightbox.close).toBe(lightbox.close);
    expect(Lightbox.next).toBe(lightbox.next);
    expect(Lightbox.prev).toBe(lightbox.prev);
    expect(Lightbox.setIndex).toBe(lightbox.setIndex);
  });

  it('renders nothing when opened is false', () => {
    render(<Lightbox {...defaultProps} opened={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders dialog when opened is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(getLightbox()).toBeInTheDocument();
    expect(getLightbox()).toHaveAttribute('aria-modal', 'true');
  });

  it('renders slide counter in toolbar', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('renders navigation buttons by default', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
  });

  it('does not render navigation buttons when withNavigation is false', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withNavigation={false} />);
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument();
  });

  it('renders caption from current slide', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(screen.getByText('Caption 1')).toBeInTheDocument();
  });

  it('renders close button in toolbar', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('calls onClose when close toolbar button is clicked', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    await userEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the backdrop', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    await userEvent.click(getLightbox());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when closeOnClickOutside is false', async () => {
    const onClose = jest.fn();
    await renderWithAct(
      <Lightbox {...defaultProps} onClose={onClose} closeOnClickOutside={false} />
    );

    await userEvent.click(getLightbox());
    expect(onClose).not.toHaveBeenCalled();
  });

  it('renders images for image slides', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(1);
    expect(images[0]).toHaveAttribute('src', 'image1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'First image');
  });

  it('renders slides with correct aria labels', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(screen.getByLabelText('Slide 1 of 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Slide 2 of 3')).toBeInTheDocument();
    expect(screen.getByLabelText('Slide 3 of 3')).toBeInTheDocument();
  });

  it('does not render thumbnails by default', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(document.querySelector('.mantine-Lightbox-thumbnails')).not.toBeInTheDocument();
  });

  it('renders thumbnail toggle when withThumbnails is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withThumbnails />);
    expect(screen.getByLabelText('Hide thumbnails')).toBeInTheDocument();
  });

  it('renders fullscreen toggle when withFullscreen is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);
    expect(screen.getByLabelText('Enter fullscreen')).toBeInTheDocument();
  });

  it('renders download button when withDownload is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withDownload />);
    expect(screen.getByLabelText('Download')).toBeInTheDocument();
  });

  it('does not render download button for custom slides', async () => {
    const customSlides: LightboxSlideData[] = [{ type: 'custom', render: () => <div>Custom</div> }];
    await renderWithAct(<Lightbox {...defaultProps} slides={customSlides} withDownload />);
    expect(screen.queryByLabelText('Download')).not.toBeInTheDocument();
  });

  it('locks body scroll when opened', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(true);
  });

  it('restores body scroll when closed', async () => {
    let rerender: (ui: React.ReactNode) => void;
    await act(async () => {
      const result = render(<Lightbox {...defaultProps} />);
      rerender = (ui) => result.rerender(ui);
    });
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(true);

    await act(async () => {
      rerender!(<Lightbox {...defaultProps} opened={false} />);
    });
    await waitFor(() => {
      expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
    });
  });

  it('supports controlled currentIndex', async () => {
    let rerender: (ui: React.ReactNode) => void;
    await act(async () => {
      const result = render(<Lightbox {...defaultProps} currentIndex={0} />);
      rerender = (ui) => result.rerender(ui);
    });
    expect(screen.getByText('Caption 1')).toBeInTheDocument();

    await act(async () => {
      rerender!(<Lightbox {...defaultProps} currentIndex={1} />);
    });
    expect(screen.getByText('Caption 2')).toBeInTheDocument();
  });

  it('renders video slides with video element', async () => {
    const videoSlides: LightboxSlideData[] = [
      { type: 'video', src: 'video.mp4', poster: 'poster.jpg' },
    ];
    await renderWithAct(<Lightbox {...defaultProps} slides={videoSlides} />);

    const video = document.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', 'video.mp4');
    expect(video).toHaveAttribute('poster', 'poster.jpg');
  });

  it('renders custom slides with render function', async () => {
    const customSlides: LightboxSlideData[] = [
      { type: 'custom', render: ({ active }) => <div>Custom {active ? 'active' : ''}</div> },
    ];
    await renderWithAct(<Lightbox {...defaultProps} slides={customSlides} />);
    expect(screen.getByText('Custom active')).toBeInTheDocument();
  });

  it('renders custom toolbar items when provided', async () => {
    await renderWithAct(
      <Lightbox
        {...defaultProps}
        toolbarItems={[
          { key: 'custom', icon: <span>Icon</span>, label: 'Custom action', onClick: jest.fn() },
        ]}
      />
    );
    expect(screen.getByLabelText('Custom action')).toBeInTheDocument();
  });

  it('does not show zoom cursor when withZoom is false', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    const image = screen.getAllByRole('img')[0];
    expect(image).not.toHaveAttribute('data-zoom-enabled');
  });

  it('shows zoom attributes when withZoom is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withZoom />);
    const image = screen.getAllByRole('img')[0];
    expect(image).toHaveAttribute('data-zoom-enabled');
  });
});

describe('@mantine/lightbox/Lightbox keyboard', () => {
  it('calls onClose when Escape is pressed', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('@mantine/lightbox/Lightbox store', () => {
  afterEach(async () => {
    await act(async () => {
      lightboxStore.setState({ opened: false, slides: [], currentIndex: 0 });
    });
  });

  it('opens lightbox via store', async () => {
    await renderWithAct(<Lightbox.Provider />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await act(async () => {
      lightbox.open({ slides });
    });

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('opens lightbox at specific index via store', async () => {
    await renderWithAct(<Lightbox.Provider />);

    await act(async () => {
      lightbox.open({ slides, startIndex: 1 });
    });

    expect(screen.getByText('Caption 2')).toBeInTheDocument();
  });

  it('closes lightbox via store', async () => {
    await renderWithAct(<Lightbox.Provider />);

    await act(async () => {
      lightbox.open({ slides });
    });
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await act(async () => {
      lightbox.close();
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('store next/prev update currentIndex', () => {
    act(() => {
      lightbox.open({ slides });
    });

    expect(lightboxStore.getState().currentIndex).toBe(0);

    act(() => {
      lightbox.next();
    });
    expect(lightboxStore.getState().currentIndex).toBe(1);

    act(() => {
      lightbox.prev();
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('store next does not exceed bounds', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 2 });
    });

    act(() => {
      lightbox.next();
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });

  it('store prev does not go below zero', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 0 });
    });

    act(() => {
      lightbox.prev();
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('store setIndex sets specific index', () => {
    act(() => {
      lightbox.open({ slides });
    });

    act(() => {
      lightbox.setIndex(2);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });
});
