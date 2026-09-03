import { act, fireEvent, waitFor } from '@testing-library/react';
import { render, renderWithAct, screen, tests, userEvent } from '@mantine-tests/core';
import { Lightbox, LightboxProps, LightboxStylesNames } from './Lightbox';
import { createLightbox, lightbox, lightboxStore } from './lightbox.store';
import type { LightboxSlideData } from './lightbox.types';
import { LightboxCaption } from './LightboxCaption/LightboxCaption';
import { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton';
import { LightboxNavigation } from './LightboxNavigation/LightboxNavigation';
import { LightboxRoot } from './LightboxRoot/LightboxRoot';
import { LightboxSlide } from './LightboxSlide/LightboxSlide';
import { LightboxSlides } from './LightboxSlides/LightboxSlides';
import { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar/LightboxToolbar';

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

function mockFullscreenApi() {
  const originalRequest = document.documentElement.requestFullscreen;
  const originalExit = document.exitFullscreen;
  let fullscreenElement: Element | null = null;
  let deferred = false;

  const notify = () => document.documentElement.dispatchEvent(new Event('fullscreenchange'));

  const setFullscreenElement = (element: Element | null) => {
    fullscreenElement = element;
    notify();
  };

  Object.defineProperty(document, 'fullscreenElement', {
    configurable: true,
    get: () => fullscreenElement,
  });

  let requestGate: { promise: Promise<void>; resolve: () => void } | null = null;

  document.documentElement.requestFullscreen = jest.fn(async () => {
    // A genuinely pending request: nothing is fullscreen yet and the promise is unresolved,
    // which is the state the browser is in between the click and the transition finishing.
    if (requestGate) {
      await requestGate.promise;
    }

    fullscreenElement = document.documentElement;
    if (!deferred) {
      notify();
    }
  });

  document.exitFullscreen = jest.fn(async () => {
    setFullscreenElement(null);
  });

  return {
    get element() {
      return fullscreenElement;
    },
    /** Applies fullscreen without dispatching `fullscreenchange`, so React state stays stale */
    deferConfirmation: () => {
      deferred = true;
    },
    /** Makes `requestFullscreen` return a promise that stays pending until `settleRequest` */
    deferRequest: () => {
      let resolve!: () => void;
      const promise = new Promise<void>((r) => {
        resolve = r;
      });
      requestGate = { promise, resolve };
    },
    settleRequest: async () => {
      const gate = requestGate;
      requestGate = null;
      await act(async () => {
        gate?.resolve();
        // Drain the request promise itself and the handlers chained onto it
        await Promise.resolve();
        await Promise.resolve();
        await Promise.resolve();
      });
    },
    confirm: () => act(() => notify()),
    enterExternally: () => act(() => setFullscreenElement(document.documentElement)),
    exitExternally: () => act(() => setFullscreenElement(null)),
    exitSpy: document.exitFullscreen as jest.Mock,
    restore: () => {
      document.documentElement.requestFullscreen = originalRequest;
      document.exitFullscreen = originalExit;
      Reflect.deleteProperty(document, 'fullscreenElement');
    },
  };
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
      lightboxStore.setState({ opened: false, slides: [], currentIndex: 0, loop: false });
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

  it('hides the thumbnails strip when withThumbnails is turned off while opened', async () => {
    const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withThumbnails />);
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument();

    await act(async () => {
      rerender(
        <>
          <Lightbox {...defaultProps} withThumbnails={false} />
        </>
      );
    });

    // The toolbar toggle disappears with the feature, so a strip left behind would be
    // stuck on screen with no way to collapse it
    expect(screen.queryByLabelText('Hide thumbnails')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
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
      lightboxStore.setState({ opened: false, slides: [], currentIndex: 0, loop: false });
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

  it('clamps the current index when slides are removed', async () => {
    const onIndexChange = jest.fn();
    const { rerender } = await renderWithAct(
      <Lightbox {...defaultProps} withThumbnails onIndexChange={onIndexChange} />
    );

    await userEvent.click(screen.getByLabelText('Go to slide 3'));
    onIndexChange.mockClear();

    await act(async () => {
      rerender(
        <>
          <Lightbox {...defaultProps} slides={slides.slice(0, 2)} onIndexChange={onIndexChange} />
        </>
      );
    });

    expect(onIndexChange).toHaveBeenCalledWith(1);
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });

  it('uses slidesLabel for the carousel region', async () => {
    await renderWithAct(<Lightbox {...defaultProps} labels={{ slidesLabel: 'Galeria' }} />);
    expect(screen.getByRole('region', { name: 'Galeria' })).toBeInTheDocument();
  });

  it('sets z-index CSS variable from the zIndex prop', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withinPortal={false} zIndex={900} />);
    const root = document.querySelector('.mantine-Lightbox-root') as HTMLElement;
    expect(root.style.getPropertyValue('--lightbox-z-index')).toBe('900');
  });

  it('does not set the z-index CSS variable when zIndex is not provided', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withinPortal={false} />);
    const root = document.querySelector('.mantine-Lightbox-root') as HTMLElement;
    expect(root.style.getPropertyValue('--lightbox-z-index')).toBe('');
  });

  it('does not let emblaOptions override loop', async () => {
    await renderWithAct(<Lightbox {...defaultProps} loop={false} emblaOptions={{ loop: true }} />);

    // With loop disabled the first slide has no previous slide to scroll to
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('data-inactive');
  });

  it('normalizes fractional and non-finite indices in the store', async () => {
    await renderWithAct(<Lightbox.Provider />);

    await act(async () => {
      lightbox.open({ slides });
      lightbox.setIndex(1.6);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);

    await act(async () => {
      lightbox.setIndex(NaN);
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);

    await act(async () => {
      lightbox.open({ slides, startIndex: 1.2 });
    });
    expect(lightboxStore.getState().currentIndex).toBe(1);
  });

  describe('fullscreen cleanup', () => {
    let fullscreen: ReturnType<typeof mockFullscreenApi>;

    beforeEach(() => {
      fullscreen = mockFullscreenApi();
    });

    afterEach(() => {
      fullscreen.restore();
    });

    it('exits fullscreen that it entered when the lightbox is closed', async () => {
      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));
      expect(fullscreen.element).toBe(document.documentElement);

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      expect(fullscreen.exitSpy).toHaveBeenCalledTimes(1);
      expect(fullscreen.element).toBe(null);
    });

    it('exits fullscreen that it entered when the lightbox unmounts', async () => {
      const { unmount } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));
      expect(fullscreen.element).toBe(document.documentElement);

      await act(async () => {
        unmount();
      });

      expect(fullscreen.exitSpy).toHaveBeenCalledTimes(1);
      expect(fullscreen.element).toBe(null);
    });

    it('does not exit fullscreen that it did not enter', async () => {
      await fullscreen.enterExternally();

      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      expect(fullscreen.exitSpy).not.toHaveBeenCalled();
      expect(fullscreen.element).toBe(document.documentElement);
    });

    it('does not exit fullscreen when the user already left it manually', async () => {
      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));
      await userEvent.click(screen.getByLabelText('Exit fullscreen'));
      expect(fullscreen.exitSpy).toHaveBeenCalledTimes(1);

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      expect(fullscreen.exitSpy).toHaveBeenCalledTimes(1);
    });

    it('does not exit fullscreen re-entered by something else after a manual exit', async () => {
      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));
      await act(() => fullscreen.exitExternally());
      await fullscreen.enterExternally();
      expect(fullscreen.exitSpy).not.toHaveBeenCalled();

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      expect(fullscreen.exitSpy).not.toHaveBeenCalled();
      expect(fullscreen.element).toBe(document.documentElement);
    });

    it('exits fullscreen requested before the browser confirmed the request', async () => {
      fullscreen.deferConfirmation();
      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));

      // The document is fullscreen, but `fullscreenchange` has not fired yet, so React
      // state still says it is not - the lightbox is responsible for it regardless.
      expect(fullscreen.element).toBe(document.documentElement);
      expect(screen.getByLabelText('Enter fullscreen')).toBeInTheDocument();

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      expect(fullscreen.exitSpy).toHaveBeenCalled();
      expect(fullscreen.element).toBe(null);
    });

    it('exits fullscreen entered by a request that was still pending when it closed', async () => {
      // The real race: `requestFullscreen` has not resolved yet, so nothing is fullscreen
      // when the lightbox closes and there is nothing to exit at that point. The browser
      // then completes the request, and the exit has to be retried – otherwise the page is
      // left fullscreen with no lightbox on top of it.
      fullscreen.deferRequest();
      const { rerender } = await renderWithAct(<Lightbox {...defaultProps} withFullscreen />);

      await userEvent.click(screen.getByLabelText('Enter fullscreen'));

      expect(fullscreen.element).toBe(null);

      await act(async () => {
        rerender(
          <>
            <Lightbox {...defaultProps} opened={false} withFullscreen />
          </>
        );
      });

      // Still nothing to exit - the request has not completed
      expect(fullscreen.element).toBe(null);

      await fullscreen.settleRequest();

      expect(fullscreen.exitSpy).toHaveBeenCalled();
      expect(fullscreen.element).toBe(null);
    });
  });
});

describe('@mantine/lightbox/Lightbox module initialization', () => {
  it('attaches Lightbox.Provider when the provider module is evaluated first', () => {
    jest.isolateModules(() => {
      require('./LightboxProvider/LightboxProvider');
      const { Lightbox: IsolatedLightbox } = require('./Lightbox');
      expect(IsolatedLightbox.Provider).toBeDefined();
    });
  });

  it('attaches Lightbox.Provider when the package entry is evaluated first', () => {
    jest.isolateModules(() => {
      const { Lightbox: IsolatedLightbox } = require('./index');
      expect(IsolatedLightbox.Provider).toBeDefined();
    });
  });
});
