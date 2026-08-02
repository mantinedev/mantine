import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, renderWithAct, screen, tests, userEvent } from '@mantine-tests/core';
import { Lightbox, LightboxProps, LightboxStylesNames } from './Lightbox';
import { createLightbox, lightbox, lightboxStore } from './lightbox.store';
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

const systemProps: LightboxProps = {
  ...defaultProps,
  withinPortal: false,
  withThumbnails: true,
  transitionProps: { duration: 0 },
};

describe('@mantine/lightbox/Lightbox', () => {
  afterEach(async () => {
    await act(async () => {
      lightboxStore.setState({ opened: false, slides: [], currentIndex: 0 });
    });
  });

  tests.itSupportsSystemProps<LightboxProps, LightboxStylesNames>({
    component: Lightbox,
    props: systemProps,
    displayName: '@mantine/lightbox/Lightbox',
    stylesApiSelectors: [
      'root',
      'overlay',
      'content',
      'toolbar',
      'toolbarGroup',
      'toolbarButton',
      'counter',
      'slides',
      'slidesViewport',
      'slidesContainer',
      'slide',
      'slideImage',
      'caption',
      'navigation',
      'navigationButton',
      'thumbnails',
      'thumbnailsViewport',
      'thumbnailsContainer',
      'thumbnail',
      'thumbnailImage',
    ],
    selector: '.mantine-Lightbox-content',
    sizeSelector: '.mantine-Lightbox-content',
    variantSelector: '.mantine-Lightbox-content',
  });

  tests.axe([<Lightbox {...systemProps} key="default" />]);

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

  it('calls onClose when clicking the backdrop with closeOnClickOutside', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} closeOnClickOutside />);

    await userEvent.click(getLightbox());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the empty space around the slide with closeOnClickOutside', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} closeOnClickOutside />);

    await userEvent.click(screen.getByLabelText('Slide 1 of 3'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when the slide image is clicked with closeOnClickOutside', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} closeOnClickOutside />);

    await userEvent.click(screen.getByRole('img', { name: 'First image' }));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose when clicking outside slide content by default', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    await userEvent.click(getLightbox());
    await userEvent.click(screen.getByLabelText('Slide 1 of 3'));
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

  it('renders initial focus placeholder by default', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    const placeholder = getLightbox().querySelector('[data-autofocus]');
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveAttribute('tabindex', '-1');
  });

  it('does not render initial focus placeholder when withInitialFocusPlaceholder is false', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withInitialFocusPlaceholder={false} />);
    expect(getLightbox().querySelector('[data-autofocus]')).not.toBeInTheDocument();
  });

  it('renders fullscreen toggle when withFullscreen is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);
    expect(screen.getByLabelText('Enter fullscreen')).toBeInTheDocument();
  });

  it('renders download button when withDownload is true', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withDownload />);
    expect(screen.getByLabelText('Download')).toBeInTheDocument();
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

  it('does not call onClose when clicking slide content', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    await userEvent.click(screen.getAllByRole('img')[0]);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('renders custom children instead of default layout', async () => {
    await renderWithAct(
      <Lightbox {...defaultProps}>
        <div data-testid="custom-layout">Custom layout</div>
      </Lightbox>
    );
    expect(screen.getByTestId('custom-layout')).toBeInTheDocument();
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
  });
});

describe('@mantine/lightbox/Lightbox swipe close', () => {
  function swipe(element: Element, from: { x: number; y: number }, to: { x: number; y: number }) {
    fireEvent.touchStart(element, {
      touches: [{ clientX: from.x, clientY: from.y }],
      changedTouches: [{ clientX: from.x, clientY: from.y }],
    });
    fireEvent.touchEnd(element, {
      touches: [],
      changedTouches: [{ clientX: to.x, clientY: to.y }],
    });
  }

  it('calls onClose on swipe down over threshold', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    swipe(
      document.querySelector('.mantine-Lightbox-slides')!,
      { x: 100, y: 100 },
      { x: 100, y: 250 }
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when closeOnSwipeDown is false', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} closeOnSwipeDown={false} />);

    swipe(
      document.querySelector('.mantine-Lightbox-slides')!,
      { x: 100, y: 100 },
      { x: 100, y: 250 }
    );
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose for mostly horizontal swipes', async () => {
    const onClose = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onClose={onClose} />);

    swipe(
      document.querySelector('.mantine-Lightbox-slides')!,
      { x: 100, y: 100 },
      { x: 300, y: 250 }
    );
    expect(onClose).not.toHaveBeenCalled();
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

  it('store open clamps out of range startIndex', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 10 });
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });

  it('store setIndex clamps out of range values', () => {
    act(() => {
      lightbox.open({ slides });
    });

    act(() => {
      lightbox.setIndex(10);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);

    act(() => {
      lightbox.setIndex(-5);
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('supports multiple independent lightboxes via createLightbox', async () => {
    const [customStore, customActions] = createLightbox();
    await renderWithAct(<Lightbox.Provider store={customStore} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await act(async () => {
      customActions.open({ slides });
    });

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(customStore.getState().opened).toBe(true);
    expect(lightboxStore.getState().opened).toBe(false);
  });
});
