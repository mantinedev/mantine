// @ts-nocheck
import { act } from '@testing-library/react';
import { DirectionProvider } from '@mantine/core';
import { renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { Lightbox } from '../Lightbox';

/**
 * Embla never emits `select` in jsdom – it needs real layout to resolve scroll snaps, so
 * programmatic navigation looks like a no-op and the index reconciliation in LightboxRoot
 * cannot be exercised. These tests swap it for a minimal fake that does emit `select`.
 *
 * Written without type annotations on purpose: `esbuild-jest` runs an extra Babel pass to
 * hoist `jest.mock`, and that pass has no TypeScript preset, so TS-only syntax fails to
 * parse in any file that calls `jest.mock`. `@ts-nocheck` covers the resulting implicit
 * `any`s – this file is a test harness, the component types are checked everywhere else.
 */

// LightboxThumbnails creates a second carousel, so instances are collected and the main
// one is identified by the `watchDrag` option that only LightboxRoot sets.
let mockEmblaInstances = [];

function mockEmblaMain() {
  return mockEmblaInstances.find((instance) => 'watchDrag' in instance.options);
}

function mockEmblaThumbs() {
  return mockEmblaInstances.find((instance) => !('watchDrag' in instance.options));
}

function renderRtl(ui) {
  return renderWithAct(
    <DirectionProvider initialDirection="rtl" detectDirection={false}>
      {ui}
    </DirectionProvider>
  );
}

function mockCreateEmbla(options) {
  const api = {
    selected: options.startIndex ?? 0,
    handlers: {},
    options,
    selectedScrollSnap: () => api.selected,
    scrollTo: (index) => {
      api.selected = index;
      (api.handlers.select || []).forEach((handler) => handler());
    },
    canScrollPrev: () => !!api.options.loop || api.selected > 0,
    canScrollNext: () => !!api.options.loop || api.selected < 2,
    scrollNext: () => api.scrollTo(api.selected + 1),
    scrollPrev: () => api.scrollTo(api.selected - 1),
    on: (event, handler) => {
      api.handlers[event] = [...(api.handlers[event] || []), handler];
    },
    off: (event, handler) => {
      api.handlers[event] = (api.handlers[event] || []).filter((h) => h !== handler);
    },
  };

  return api;
}

jest.mock('embla-carousel-react', () => {
  // The real hook keeps one instance across renders; a fresh object each render would
  // make the component resubscribe constantly and never see the same carousel twice.
  const { useRef } = require('react');

  return {
    __esModule: true,
    default: (options) => {
      const instanceRef = useRef(null);

      if (!instanceRef.current) {
        instanceRef.current = mockCreateEmbla(options);
        mockEmblaInstances.push(instanceRef.current);
      } else {
        instanceRef.current.options = options;
      }

      return [() => {}, instanceRef.current];
    },
  };
});

const slides = [
  { src: 'image1.jpg', alt: 'First image' },
  { src: 'image2.jpg', alt: 'Second image' },
  { src: 'image3.jpg', alt: 'Third image' },
];

const defaultProps = { opened: true, onClose: jest.fn(), slides };

beforeEach(() => {
  mockEmblaInstances = [];
});

describe('@mantine/lightbox/LightboxRoot embla integration', () => {
  it('reports an index change once when a thumbnail is clicked', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(
      <Lightbox {...defaultProps} withThumbnails onIndexChange={onIndexChange} />
    );

    await userEvent.click(screen.getByLabelText('Go to slide 3'));

    expect(mockEmblaMain().selectedScrollSnap()).toBe(2);
    expect(onIndexChange).toHaveBeenCalledTimes(1);
    expect(onIndexChange).toHaveBeenCalledWith(2);
  });

  it('reports an index change once when navigating with the arrows', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onIndexChange={onIndexChange} />);

    await userEvent.click(screen.getByLabelText('Next slide'));

    expect(onIndexChange).toHaveBeenCalledTimes(1);
    expect(onIndexChange).toHaveBeenCalledWith(1);
  });

  it('does not report an index change when the controlled index is applied', async () => {
    const onIndexChange = jest.fn();
    const { rerender } = await renderWithAct(
      <Lightbox {...defaultProps} currentIndex={0} onIndexChange={onIndexChange} />
    );

    await act(async () => {
      rerender(
        <>
          <Lightbox {...defaultProps} currentIndex={1} onIndexChange={onIndexChange} />
        </>
      );
    });

    expect(mockEmblaMain().selectedScrollSnap()).toBe(1);
    expect(onIndexChange).not.toHaveBeenCalled();
  });

  it('still reports index changes that originate from the carousel', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onIndexChange={onIndexChange} />);

    // A drag/swipe resolves inside embla and only then notifies subscribers
    await act(async () => {
      mockEmblaMain().scrollTo(2);
    });

    expect(onIndexChange).toHaveBeenCalledTimes(1);
    expect(onIndexChange).toHaveBeenCalledWith(2);
  });

  it('recovers when a controlled parent rejects the index change', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(
      <Lightbox {...defaultProps} withThumbnails currentIndex={0} onIndexChange={onIndexChange} />
    );

    await userEvent.click(screen.getByLabelText('Go to slide 3'));
    expect(onIndexChange).toHaveBeenCalledTimes(1);
    expect(onIndexChange).toHaveBeenCalledWith(2);

    onIndexChange.mockClear();

    // The same request must not be swallowed the second time round
    await userEvent.click(screen.getByLabelText('Go to slide 3'));
    expect(onIndexChange).toHaveBeenCalledTimes(1);
    expect(onIndexChange).toHaveBeenCalledWith(2);
  });

  it('does not re-run the clamp on unrelated re-renders', async () => {
    const onIndexChange = jest.fn();
    const { rerender } = await renderWithAct(
      <Lightbox {...defaultProps} currentIndex={2} onIndexChange={onIndexChange} />
    );

    // Out-of-range index that the parent never accepts
    await act(async () => {
      rerender(
        <>
          <Lightbox
            {...defaultProps}
            slides={slides.slice(0, 2)}
            currentIndex={2}
            onIndexChange={onIndexChange}
          />
        </>
      );
    });

    const callsAfterClamp = onIndexChange.mock.calls.length;
    expect(onIndexChange).toHaveBeenCalledWith(1);

    // Re-rendering with a brand new onIndexChange identity must not clamp again
    await act(async () => {
      rerender(
        <>
          <Lightbox
            {...defaultProps}
            slides={slides.slice(0, 2)}
            currentIndex={2}
            onIndexChange={onIndexChange}
          />
        </>
      );
    });

    expect(onIndexChange.mock.calls.length).toBe(callsAfterClamp);
  });

  it('does not let emblaOptions override the managed options', async () => {
    await renderWithAct(
      <Lightbox
        {...defaultProps}
        loop={false}
        currentIndex={1}
        emblaOptions={{ loop: true, startIndex: 5, align: 'start' }}
      />
    );

    expect(mockEmblaMain().options.loop).toBe(false);
    expect(mockEmblaMain().options.startIndex).toBe(1);
    // Options the component does not manage are still forwarded
    expect(mockEmblaMain().options.align).toBe('start');
  });

  it('passes the ltr direction to both carousels by default', async () => {
    await renderWithAct(<Lightbox {...defaultProps} withThumbnails />);

    expect(mockEmblaMain().options.direction).toBe('ltr');
    expect(mockEmblaThumbs().options.direction).toBe('ltr');
  });

  it('passes the rtl direction to both carousels', async () => {
    // Without this embla computes ltr snaps while the CSS lays the slides out rtl, so
    // dragging and prev/next resolve the wrong slide
    await renderRtl(<Lightbox {...defaultProps} withThumbnails />);

    expect(mockEmblaMain().options.direction).toBe('rtl');
    expect(mockEmblaThumbs().options.direction).toBe('rtl');
  });

  it('lets emblaOptions override the resolved direction', async () => {
    await renderRtl(<Lightbox {...defaultProps} emblaOptions={{ direction: 'ltr' }} />);
    expect(mockEmblaMain().options.direction).toBe('ltr');
  });

  it('mirrors the navigation chevrons in rtl', async () => {
    const getChevronPoints = (label) =>
      screen.getByLabelText(label).querySelector('polyline').getAttribute('points');

    const { unmount } = await renderWithAct(<Lightbox {...defaultProps} />);
    const ltrPrev = getChevronPoints('Previous slide');
    const ltrNext = getChevronPoints('Next slide');
    expect(ltrPrev).not.toBe(ltrNext);
    unmount();

    mockEmblaInstances = [];
    await renderRtl(<Lightbox {...defaultProps} />);

    expect(getChevronPoints('Previous slide')).toBe(ltrNext);
    expect(getChevronPoints('Next slide')).toBe(ltrPrev);
  });

  it('calls a user-supplied watchDrag callback', async () => {
    const watchDrag = jest.fn(() => true);
    await renderWithAct(<Lightbox {...defaultProps} emblaOptions={{ watchDrag }} />);

    expect(mockEmblaMain().options.watchDrag(mockEmblaMain(), new Event('pointerdown'))).toBe(true);
    expect(watchDrag).toHaveBeenCalledTimes(1);
  });

  it('respects watchDrag: false from emblaOptions', async () => {
    await renderWithAct(<Lightbox {...defaultProps} emblaOptions={{ watchDrag: false }} />);
    expect(mockEmblaMain().options.watchDrag(mockEmblaMain(), new Event('pointerdown'))).toBe(
      false
    );
  });

  it('enables dragging by default', async () => {
    await renderWithAct(<Lightbox {...defaultProps} />);
    expect(mockEmblaMain().options.watchDrag(mockEmblaMain(), new Event('pointerdown'))).toBe(true);
  });

  it('does not intercept arrow keys while a control inside a slide is focused', async () => {
    const onIndexChange = jest.fn();
    const customSlides = [
      { type: 'custom', render: () => <button type="button">Inner</button> },
      { src: 'image2.jpg', alt: 'Second image' },
    ];

    await renderWithAct(
      <Lightbox {...defaultProps} slides={customSlides} onIndexChange={onIndexChange} />
    );

    screen.getByRole('button', { name: 'Inner' }).focus();
    await userEvent.keyboard('{ArrowRight}');

    expect(onIndexChange).not.toHaveBeenCalled();
  });

  it('still handles arrow keys while a lightbox toolbar button is focused', async () => {
    const onIndexChange = jest.fn();
    await renderWithAct(<Lightbox {...defaultProps} onIndexChange={onIndexChange} />);

    screen.getByLabelText('Next slide').focus();
    await userEvent.keyboard('{ArrowRight}');

    expect(onIndexChange).toHaveBeenCalledWith(1);
  });

  it('follows the reading direction for arrow keys in RTL', async () => {
    const onIndexChange = jest.fn();

    await renderWithAct(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <Lightbox {...defaultProps} currentIndex={1} onIndexChange={onIndexChange} />
      </DirectionProvider>
    );

    // Slides advance leftwards in RTL, matching the mirrored navigation chevrons - in LTR
    // this same key would move to slide 0
    await userEvent.keyboard('{ArrowLeft}');
    expect(onIndexChange).toHaveBeenLastCalledWith(2);

    // ...and the right arrow goes back
    await userEvent.keyboard('{ArrowRight}');
    expect(onIndexChange).toHaveBeenLastCalledWith(1);
  });

  it('keeps loop and startIndex managed but honors watchDrag inside emblaOptions breakpoints', async () => {
    const breakpointWatchDrag = jest.fn(() => true);

    await renderWithAct(
      <Lightbox
        {...defaultProps}
        loop
        emblaOptions={{
          breakpoints: {
            '(min-width: 768px)': {
              loop: false,
              startIndex: 2,
              watchDrag: breakpointWatchDrag,
              align: 'center',
            },
          },
        }}
      />
    );

    const breakpoint = mockEmblaMain().options.breakpoints['(min-width: 768px)'];

    expect(breakpoint).not.toHaveProperty('loop');
    expect(breakpoint).not.toHaveProperty('startIndex');
    expect(breakpoint.align).toBe('center');
    expect(typeof breakpoint.watchDrag).toBe('function');

    expect(breakpoint.watchDrag({}, {})).toBe(true);
    expect(breakpointWatchDrag).toHaveBeenCalled();
  });
});
