import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  FocusTrap,
  MantineTransition,
  OptionalPortal,
  RemoveScroll,
  StylesApiProps,
  Transition,
  TransitionOverride,
  useDirection,
  useMantineTheme,
  useProps,
  useStyles,
  VisuallyHidden,
} from '@mantine/core';
import {
  useFocusReturn,
  useFullscreenDocument,
  useReducedMotion,
  useUncontrolled,
} from '@mantine/hooks';
import { DEFAULT_LABELS } from '../default-labels';
import { LightboxContextProvider } from '../lightbox.context';
import type { LightboxLabels, LightboxSlideData } from '../lightbox.types';
import { useLightboxKeyboard } from '../hooks/use-lightbox-keyboard';
import { useLightboxLockScroll } from '../hooks/use-lightbox-lock-scroll';
import { useLightboxZoom } from '../hooks/use-lightbox-zoom';
import classes from '../Lightbox.module.css';

export type LightboxRootStylesNames =
  | 'root'
  | 'overlay'
  | 'content'
  | 'toolbar'
  | 'toolbarGroup'
  | 'toolbarButton'
  | 'counter'
  | 'slides'
  | 'slidesViewport'
  | 'slidesContainer'
  | 'slide'
  | 'slideImage'
  | 'slideVideo'
  | 'thumbnails'
  | 'thumbnailsViewport'
  | 'thumbnailsContainer'
  | 'thumbnail'
  | 'thumbnailImage'
  | 'navigation'
  | 'navigationButton'
  | 'caption'
  | 'closeButton';

export type LightboxCssVariables = {
  root:
    | '--lightbox-transition-duration'
    | '--lightbox-overlay-color'
    | '--lightbox-z-index'
    | '--lightbox-toolbar-height'
    | '--lightbox-thumbnails-height';
};

export interface LightboxRootProps
  extends BoxProps, StylesApiProps<LightboxRootFactory>, ElementProps<'div', 'children'> {
  /** Controls whether the lightbox is opened */
  opened: boolean;

  /** Called when the lightbox is closed */
  onClose: () => void;

  /** Lightbox content (compound components) */
  children: React.ReactNode;

  /** Array of slide data objects */
  slides: LightboxSlideData[];

  /** Controlled current slide index */
  currentIndex?: number;

  /** Called when the current slide index changes */
  onIndexChange?: (index: number) => void;

  /** Labels used in the component, used for accessibility and localization */
  labels?: Partial<LightboxLabels>;

  /** Enables image zoom on click/pinch @default false */
  withZoom?: boolean;

  /** Shows bottom thumbnail strip @default false */
  withThumbnails?: boolean;

  /** Adds fullscreen toggle to toolbar @default false */
  withFullscreen?: boolean;

  /** Adds download button to toolbar @default false */
  withDownload?: boolean;

  /** Enables infinite loop navigation @default false */
  loop?: boolean;

  /** Closes lightbox when the empty space around the slide content is clicked @default false */
  closeOnClickOutside?: boolean;

  /** Closes lightbox when swiping down on mobile @default true */
  closeOnSwipeDown?: boolean;

  /** Determines whether keyboard shortcuts (arrows, `F`/`T`/`Z`) are active, `Escape` always closes the lightbox @default true */
  withKeyboardEvents?: boolean;

  /** Determines whether focus should be returned to the last active element when the lightbox is closed @default true */
  returnFocus?: boolean;

  /** Adds a hidden focusable element at the start of the lightbox content – prevents the first toolbar button from receiving visible focus when the lightbox is opened with a pointer. Set to `false` if you need custom focus management. @default true */
  withInitialFocusPlaceholder?: boolean;

  /** Determines whether the lightbox should be rendered inside `Portal` @default true */
  withinPortal?: boolean;

  /** `z-index` of the overlay and content elements, `400` by default */
  zIndex?: string | number;

  /** Transition duration in milliseconds @default 200 */
  transitionDuration?: number;

  /** Props passed down to the `Transition` component that animates the content, the overlay always fades. By default, the content is scaled from 95% to 100% while fading in. */
  transitionProps?: TransitionOverride;

  /** Additional Embla carousel options. `loop` and `startIndex` are controlled by the
   * `loop` and `currentIndex` props and cannot be set here, at the top level or in
   * `breakpoints`; a `watchDrag` option is still honored at both levels, but dragging is
   * always disabled while the image is zoomed. */
  emblaOptions?: EmblaOptionsType;

  /** Maximum zoom scale @default 3 */
  zoomMaxScale?: number;

  /** Enables animated slide transitions for programmatic navigation @default false */
  withSlideTransition?: boolean;
}

export type LightboxRootFactory = Factory<{
  props: LightboxRootProps;
  ref: HTMLDivElement;
  stylesNames: LightboxRootStylesNames;
  vars: LightboxCssVariables;
}>;

export const lightboxRootDefaultProps = {
  withZoom: false,
  withThumbnails: false,
  withFullscreen: false,
  withDownload: false,
  loop: false,
  closeOnClickOutside: false,
  closeOnSwipeDown: true,
  withKeyboardEvents: true,
  returnFocus: true,
  withInitialFocusPlaceholder: true,
  withinPortal: true,
  transitionDuration: 200,
  zoomMaxScale: 3,
  withSlideTransition: false,
} satisfies Partial<LightboxRootProps>;

type WatchDragOption = EmblaOptionsType['watchDrag'];

function createBreakpointWatchDrag(
  query: string,
  zoomIsActive: React.RefObject<boolean>,
  watchDragRef: React.RefObject<Record<string, WatchDragOption>>
): WatchDragOption {
  return (emblaApi, event) => {
    if (zoomIsActive.current) {
      return false;
    }

    const option = watchDragRef.current[query];

    if (typeof option === 'function') {
      return option(emblaApi, event);
    }

    return option ?? true;
  };
}

const defaultContentTransition: MantineTransition = {
  common: { transformOrigin: 'center center' },
  in: { opacity: 1, transform: 'scale(1)' },
  out: { opacity: 0, transform: 'scale(0.95)' },
  transitionProperty: 'transform, opacity',
};

function exitDocumentFullscreen() {
  const _document = document as any;
  const exit =
    _document.exitFullscreen ||
    _document.msExitFullscreen ||
    _document.webkitExitFullscreen ||
    _document.mozCancelFullScreen;

  if (typeof exit === 'function') {
    Promise.resolve(exit.call(_document)).catch(() => {});
  }
}

const varsResolver = createVarsResolver<LightboxRootFactory>(
  (_, { transitionDuration, zIndex }) => ({
    root: {
      '--lightbox-transition-duration': `${transitionDuration}ms`,
      '--lightbox-overlay-color': undefined,
      '--lightbox-z-index': zIndex !== undefined ? `${zIndex}` : undefined,
      '--lightbox-toolbar-height': undefined,
      '--lightbox-thumbnails-height': undefined,
    },
  })
);

export const LightboxRoot = factory<LightboxRootFactory>((_props) => {
  const props = useProps('LightboxRoot', lightboxRootDefaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    onClose,
    children,
    slides,
    currentIndex,
    onIndexChange,
    labels,
    withZoom,
    withThumbnails,
    withFullscreen,
    withDownload,
    loop,
    closeOnClickOutside,
    closeOnSwipeDown,
    withKeyboardEvents,
    returnFocus,
    withInitialFocusPlaceholder,
    withinPortal,
    zIndex,
    transitionDuration,
    transitionProps,
    emblaOptions,
    zoomMaxScale,
    withSlideTransition,
    attributes,
    mod,
    onClick,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<LightboxRootFactory>({
    name: 'Lightbox',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const _labels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  const getStylesRef = useRef(getStyles);
  getStylesRef.current = getStyles;

  const stableGetStyles = useCallback<typeof getStyles>(
    (...args) => getStylesRef.current(...args),
    []
  );

  const [_currentIndex, setCurrentIndex] = useUncontrolled({
    value: currentIndex,
    defaultValue: 0,
    finalValue: 0,
    onChange: onIndexChange,
  });

  const zoomIsActive = useRef(false);
  const currentIndexRef = useRef(_currentIndex);
  const setCurrentIndexRef = useRef(setCurrentIndex);

  // Embla emits `select` synchronously from `scrollTo`. When the scroll was requested for
  // an index the consumer already knows about, that echo is suppressed for the duration
  // of the call so `onIndexChange` is not reported twice for one navigation.
  const suppressSelectRef = useRef<number | null>(null);
  const fullscreenRequestedRef = useRef(false);
  const ownsFullscreenRef = useRef(false);

  // Embla compares options by function source, so the `watchDrag` closure above must stay
  // textually stable – the current user options are read through this ref instead.
  const emblaOptionsRef = useRef(emblaOptions);

  const [startIndex, setStartIndex] = useState(_currentIndex);
  const [prevOpened, setPrevOpened] = useState(opened);

  if (opened !== prevOpened) {
    setPrevOpened(opened);
    if (opened) {
      setStartIndex(_currentIndex);
    }
  }

  const { dir } = useDirection();

  const breakpointWatchDragRef = useRef<Record<string, WatchDragOption>>({});

  const resolvedEmblaOptions = useMemo(() => {
    if (!emblaOptions?.breakpoints) {
      breakpointWatchDragRef.current = {};
      return emblaOptions;
    }

    const watchDragOptions: Record<string, WatchDragOption> = {};

    const breakpoints = Object.fromEntries(
      Object.entries(emblaOptions.breakpoints).map(([query, value]) => {
        const { loop: _loop, startIndex: _startIndex, watchDrag, ...rest } = value ?? {};
        watchDragOptions[query] = watchDrag;

        return [
          query,
          watchDrag === undefined
            ? rest
            : {
                ...rest,
                watchDrag: createBreakpointWatchDrag(query, zoomIsActive, breakpointWatchDragRef),
              },
        ];
      })
    );

    breakpointWatchDragRef.current = watchDragOptions;
    return { ...emblaOptions, breakpoints };
  }, [emblaOptions]);

  const [emblaRef, embla] = useEmblaCarousel({
    // Placed before the user options so `emblaOptions.direction` can still override it,
    // the same way `@mantine/carousel` wires direction up.
    direction: dir,
    ...resolvedEmblaOptions,
    loop,
    startIndex,
    watchDrag: (emblaApi, event) => {
      // The zoom gesture lock always wins – dragging a zoomed image pans it
      // instead of changing the slide.
      if (zoomIsActive.current) {
        return false;
      }

      const userWatchDrag = emblaOptionsRef.current?.watchDrag;
      if (typeof userWatchDrag === 'function') {
        return userWatchDrag(emblaApi, event);
      }

      return userWatchDrag ?? true;
    },
  });

  const [thumbnailsVisible, setThumbnailsVisible] = useState(!!withThumbnails);
  const [prevWithThumbnails, setPrevWithThumbnails] = useState(withThumbnails);

  // Toggling the feature while the lightbox is open used to leave the strip expanded with
  // no way to collapse it – the toolbar button that toggles it is only rendered while
  // `withThumbnails` is set.
  if (withThumbnails !== prevWithThumbnails) {
    setPrevWithThumbnails(withThumbnails);
    setThumbnailsVisible(!!withThumbnails);
  }

  const { toggle: toggleFullscreenFn, fullscreen: isFullscreen } = useFullscreenDocument();

  const toggleThumbnails = useCallback(() => {
    setThumbnailsVisible((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    fullscreenRequestedRef.current = !isFullscreen;
    if (isFullscreen) {
      ownsFullscreenRef.current = false;
    }

    toggleFullscreenFn().catch(() => {
      fullscreenRequestedRef.current = false;
    });
  }, [toggleFullscreenFn, isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) {
      fullscreenRequestedRef.current = false;
      ownsFullscreenRef.current = false;
    } else if (fullscreenRequestedRef.current) {
      fullscreenRequestedRef.current = false;
      ownsFullscreenRef.current = true;
    }
  }, [isFullscreen]);

  const exitOwnedFullscreen = useCallback(() => {
    if (!ownsFullscreenRef.current && !fullscreenRequestedRef.current) {
      return;
    }

    fullscreenRequestedRef.current = false;
    ownsFullscreenRef.current = false;
    exitDocumentFullscreen();
  }, []);

  const zoom = useLightboxZoom({
    enabled: !!withZoom,
    maxScale: zoomMaxScale!,
    currentIndex: _currentIndex,
  });

  useEffect(() => {
    currentIndexRef.current = _currentIndex;
    setCurrentIndexRef.current = setCurrentIndex;
    zoomIsActive.current = zoom.zoomState.isZoomed;
    emblaOptionsRef.current = emblaOptions;
  });

  const { resetZoom } = zoom;

  useEffect(() => {
    if (!opened) {
      resetZoom();
      setThumbnailsVisible(!!withThumbnails);
      exitOwnedFullscreen();
    }
  }, [opened, resetZoom, withThumbnails, exitOwnedFullscreen]);

  useEffect(() => exitOwnedFullscreen, [exitOwnedFullscreen]);

  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const animateSlides = !!withSlideTransition && !reduceMotion;

  const handleNext = useCallback(() => {
    embla?.scrollNext(!animateSlides);
  }, [embla, animateSlides]);

  const handlePrev = useCallback(() => {
    embla?.scrollPrev(!animateSlides);
  }, [embla, animateSlides]);

  useLightboxKeyboard({
    opened,
    enabled: withKeyboardEvents!,
    onClose,
    onNext: handleNext,
    onPrev: handlePrev,
    onToggleFullscreen: withFullscreen ? toggleFullscreen : undefined,
    onToggleThumbnails: withThumbnails ? toggleThumbnails : undefined,
    onToggleZoom: withZoom ? zoom.toggleZoom : undefined,
    onZoomPan: withZoom ? zoom.panZoom : undefined,
  });

  useEffect(() => {
    if (!embla) {
      return undefined;
    }

    const onSelect = () => {
      const selected = embla.selectedScrollSnap();

      if (selected !== suppressSelectRef.current) {
        setCurrentIndexRef.current(selected);
      }
    };

    const onReInit = () => {
      if (embla.selectedScrollSnap() !== currentIndexRef.current) {
        suppressSelectRef.current = currentIndexRef.current;
        embla.scrollTo(currentIndexRef.current, true);
        suppressSelectRef.current = null;
      }
    };

    embla.on('select', onSelect);
    embla.on('reInit', onReInit);
    return () => {
      embla.off('select', onSelect);
      embla.off('reInit', onReInit);
    };
  }, [embla]);

  useEffect(() => {
    if (embla && opened && embla.selectedScrollSnap() !== _currentIndex) {
      // `_currentIndex` is already what the consumer asked for – do not echo it back
      suppressSelectRef.current = _currentIndex;
      embla.scrollTo(_currentIndex, !animateSlides);
      suppressSelectRef.current = null;
    }
  }, [_currentIndex, embla, opened, animateSlides]);

  // Slides can be replaced or shortened while the lightbox is open – without this the
  // index can point past the end, leaving no active slide and a counter like "3 / 2".
  useEffect(() => {
    if (slides.length > 0 && _currentIndex > slides.length - 1) {
      setCurrentIndexRef.current(slides.length - 1);
    }
  }, [slides.length, _currentIndex]);

  useFocusReturn({ opened, shouldReturnFocus: returnFocus });

  const shouldLockScroll = useLightboxLockScroll({
    opened,
    exitDuration:
      typeof transitionProps?.exitDuration === 'number'
        ? transitionProps.exitDuration
        : typeof transitionProps?.duration === 'number'
          ? transitionProps.duration
          : transitionDuration,
    exitDelay: typeof transitionProps?.exitDelay === 'number' ? transitionProps.exitDelay : 0,
  });

  const transition: TransitionOverride = {
    transition: defaultContentTransition,
    duration: transitionDuration,
    timingFunction: 'ease',
    ...transitionProps,
  };

  const overlayTransition: TransitionOverride = {
    transition: 'fade',
    duration: transition.duration,
    exitDuration: transition.exitDuration,
    timingFunction: transition.timingFunction,
    enterDelay: transition.enterDelay,
    exitDelay: transition.exitDelay,
    keepMounted: transition.keepMounted,
  };

  const setIndex = useCallback(
    (index: number) => {
      setCurrentIndexRef.current(index);
      suppressSelectRef.current = index;
      embla?.scrollTo(index, !animateSlides);
      suppressSelectRef.current = null;
    },
    [embla, animateSlides]
  );

  const currentSlide = slides[_currentIndex];
  const currentSlideLabel =
    currentSlide?.type === 'video'
      ? currentSlide.label
      : currentSlide?.type === 'custom'
        ? undefined
        : currentSlide?.alt;

  const contextValue = useMemo(
    () => ({
      getStyles: stableGetStyles,
      labels: _labels,
      opened,
      slides,
      currentIndex: _currentIndex,
      setIndex,
      next: handleNext,
      prev: handlePrev,
      embla: embla ?? null,
      emblaRef,
      withZoom: !!withZoom,
      withThumbnails: !!withThumbnails,
      withFullscreen: !!withFullscreen,
      withDownload: !!withDownload,
      thumbnailsVisible,
      toggleThumbnails,
      isFullscreen,
      toggleFullscreen,
      zoomState: zoom.zoomState,
      toggleZoom: zoom.toggleZoom,
      getImageZoomProps: zoom.getImageProps,
      onClose,
      loop: !!loop,
      closeOnClickOutside: !!closeOnClickOutside,
      closeOnSwipeDown: !!closeOnSwipeDown,
      transitionDuration: transitionDuration!,
    }),
    [
      stableGetStyles,
      _labels,
      opened,
      slides,
      _currentIndex,
      setIndex,
      handleNext,
      handlePrev,
      embla,
      emblaRef,
      withZoom,
      withThumbnails,
      withFullscreen,
      withDownload,
      thumbnailsVisible,
      toggleThumbnails,
      isFullscreen,
      toggleFullscreen,
      zoom,
      onClose,
      loop,
      closeOnClickOutside,
      closeOnSwipeDown,
      transitionDuration,
    ]
  );

  return (
    <OptionalPortal withinPortal={withinPortal}>
      <LightboxContextProvider value={contextValue}>
        {' '}
        <RemoveScroll enabled={shouldLockScroll}>
          <Box {...getStyles('root')}>
            <Transition mounted={opened} {...overlayTransition}>
              {(overlayStyles) => <Box {...getStyles('overlay', { style: overlayStyles })} />}
            </Transition>

            <Transition mounted={opened} {...transition}>
              {(contentStyles) => (
                <FocusTrap active={opened} innerRef={ref}>
                  <Box
                    {...getStyles('content', {
                      className,
                      style: style ? [style, contentStyles] : contentStyles,
                    })}
                    role="dialog"
                    aria-modal="true"
                    aria-label={_labels.lightboxLabel}
                    tabIndex={-1}
                    {...others}
                    mod={mod}
                    onClick={(event) => {
                      onClick?.(event);
                      if (closeOnClickOutside && event.target === event.currentTarget) {
                        onClose();
                      }
                    }}
                  >
                    {withInitialFocusPlaceholder && <FocusTrap.InitialFocus />}

                    <VisuallyHidden role="status" aria-live="polite" aria-atomic="true">
                      {`${_labels.slideLabel(_currentIndex + 1, slides.length)}${currentSlideLabel ? `: ${currentSlideLabel}` : ''}`}
                    </VisuallyHidden>
                    {children}
                  </Box>
                </FocusTrap>
              )}
            </Transition>
          </Box>
        </RemoveScroll>
      </LightboxContextProvider>
    </OptionalPortal>
  );
});

LightboxRoot.classes = classes;
LightboxRoot.varsResolver = varsResolver;
LightboxRoot.displayName = '@mantine/lightbox/LightboxRoot';
